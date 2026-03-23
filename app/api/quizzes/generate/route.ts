import { NextRequest, NextResponse } from "next/server";

import { generateQuizWithGemini } from "@/lib/gemini";
import { getTokenFromRequest, verifyAuthToken } from "@/lib/auth";
import { prisma } from "@/lib/prisma";
import { generateQuizSchema } from "@/lib/validators";

export const runtime = "nodejs";

export async function POST(request: NextRequest) {
  try {
    const token = getTokenFromRequest(request);
    if (!token) {
      return NextResponse.json({ error: "No autenticado" }, { status: 401 });
    }

    const payload = verifyAuthToken(token);
    if (!payload) {
      return NextResponse.json({ error: "Token invalido" }, { status: 401 });
    }

    const body = await request.json();
    const input = generateQuizSchema.parse(body);

    const generatedQuiz = await generateQuizWithGemini(input);

    await prisma.generatedQuiz.create({
      data: {
        userId: payload.sub,
        topic: input.topic,
        difficulty: input.difficulty,
        questionCount: input.questionCount,
        payload: generatedQuiz,
      },
    });

    return NextResponse.json({
      message: "Quiz generado correctamente",
      quiz: generatedQuiz,
    });
  } catch (error) {
    if (error instanceof SyntaxError) {
      return NextResponse.json({ error: "JSON invalido" }, { status: 400 });
    }

    const details = error instanceof Error ? error.message : "Error desconocido";
    return NextResponse.json({ error: "No se pudo generar el quiz", details }, { status: 400 });
  }
}
