import { z } from "zod";

export const registerSchema = z.object({
  name: z.string().trim().min(2).max(80).optional(),
  email: z
    .string()
    .trim()
    .email()
    .transform((value) => value.toLowerCase()),
  password: z.string().min(8).max(128),
});

export const loginSchema = z.object({
  email: z
    .string()
    .trim()
    .email()
    .transform((value) => value.toLowerCase()),
  password: z.string().min(8).max(128),
});

export const generateQuizSchema = z.object({
  topic: z.string().trim().min(3).max(120),
  difficulty: z.enum(["easy", "medium", "hard"]).default("medium"),
  questionCount: z.number().int().min(1).max(20).default(10),
});

export const generatedQuestionSchema = z.object({
  question: z.string().min(1),
  options: z.array(z.string().min(1)).length(4),
  correctAnswer: z.string().min(1),
  explanation: z.string().min(1),
});

export const generatedQuizOutputSchema = z.object({
  title: z.string().min(1),
  questions: z.array(generatedQuestionSchema),
});

export type RegisterInput = z.infer<typeof registerSchema>;
export type LoginInput = z.infer<typeof loginSchema>;
export type GenerateQuizInput = z.infer<typeof generateQuizSchema>;
export type GeneratedQuizOutput = z.infer<typeof generatedQuizOutputSchema>;
