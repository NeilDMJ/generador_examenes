import {
  generateQuizSchema,
  generatedQuizOutputSchema,
  type GenerateQuizInput,
  type GeneratedQuizOutput,
} from "@/lib/validators";

function getGeminiApiKey() {
  const key = process.env.GEMINI_API_KEY;
  if (!key) {
    throw new Error("GEMINI_API_KEY no esta configurada");
  }

  return key;
}

function stripMarkdownCodeFence(value: string) {
  const cleaned = value.trim();
  const regex = /^```(?:json)?\s*([\s\S]*?)\s*```$/i;
  const match = cleaned.match(regex);
  return match?.[1]?.trim() ?? cleaned;
}

function buildPrompt(input: GenerateQuizInput) {
  const validated = generateQuizSchema.parse(input);

  return [
    "Genera un quiz en formato JSON valido.",
    "No incluyas markdown ni texto fuera del JSON.",
    "Idioma: espanol.",
    `Tema: ${validated.topic}`,
    `Dificultad: ${validated.difficulty}`,
    `Numero de preguntas: ${validated.questionCount}`,
    "Formato exacto:",
    "{",
    '  "title": "string",',
    '  "questions": [',
    "    {",
    '      "question": "string",',
    '      "options": ["string", "string", "string", "string"],',
    '      "correctAnswer": "string",',
    '      "explanation": "string"',
    "    }",
    "  ]",
    "}",
    "La respuesta correcta debe coincidir exactamente con una de las options.",
  ].join("\n");
}

export async function generateQuizWithGemini(
  input: GenerateQuizInput,
): Promise<GeneratedQuizOutput> {
  const prompt = buildPrompt(input);
  const model = process.env.GEMINI_MODEL ?? "gemini-3.1-flash-lite-preview";
  const apiKey = getGeminiApiKey();

  const response = await fetch(
    `https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent?key=${apiKey}`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        contents: [{ parts: [{ text: prompt }] }],
        generationConfig: {
          responseMimeType: "application/json",
          temperature: 0.7,
        },
      }),
    },
  );

  if (!response.ok) {
    const errorBody = await response.text();
    throw new Error(`Gemini fallo con estado ${response.status}: ${errorBody}`);
  }

  const data = (await response.json()) as {
    candidates?: Array<{
      content?: {
        parts?: Array<{ text?: string }>;
      };
    }>;
  };

  const rawText =
    data.candidates?.[0]?.content?.parts
      ?.map((part) => part.text ?? "")
      .join("") ?? "";

  if (!rawText) {
    throw new Error("Gemini no devolvio contenido util");
  }

  const parsed = JSON.parse(stripMarkdownCodeFence(rawText)) as unknown;
  const result = generatedQuizOutputSchema.parse(parsed);

  const normalizedQuestions = result.questions.map((question) => {
    const optionsNormalized = question.options.map((option) => option.trim());
    const match = optionsNormalized.find(
      (option) =>
        option.toLowerCase() === question.correctAnswer.trim().toLowerCase(),
    );

    if (!match) {
      throw new Error(
        "Una pregunta generada no contiene la respuesta correcta dentro de options",
      );
    }

    return {
      ...question,
      options: optionsNormalized,
      correctAnswer: match,
    };
  });

  return {
    title: result.title,
    questions: normalizedQuestions,
  };
}
