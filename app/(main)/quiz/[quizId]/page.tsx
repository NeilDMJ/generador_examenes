import type { Metadata } from "next";
import QuestionCard from "@/components/quiz/QuestionCard";
import QuizProgress from "@/components/quiz/QuizProgress";
import QuizTimer from "@/components/quiz/QuizTimer";
import AnswerOptions from "@/components/quiz/AnswerOptions";

export const metadata: Metadata = { title: "Quiz | Quizzly Pulse" };

// Mock data — will be replaced by API call when backend is ready
const MOCK_QUIZ = {
  id: "demo",
  category: "Quantum Physics",
  question:
    'Which subatomic particle is famously associated with the concept of "spooky action at a distance"?',
  options: [
    { id: "a", label: "A", text: "The Electron" },
    { id: "b", label: "B", text: "The Photon" },
    { id: "c", label: "C", text: "The Neutrino" },
    { id: "d", label: "D", text: "The Quark" },
  ],
  current: 4,
  total: 10,
  initialTime: 30,
  score: 1420,
};

export default function QuizPage() {
  const quiz = MOCK_QUIZ;

  return (
    <main className="flex-grow flex items-center justify-center px-4 py-12 relative overflow-hidden">
      {/* Background blobs */}
      <div className="absolute top-[-10%] right-[-10%] w-[400px] h-[400px] bg-primary-container/20 rounded-full blur-[100px] -z-10" />
      <div className="absolute bottom-[-10%] left-[-10%] w-[300px] h-[300px] bg-secondary-container/20 rounded-full blur-[80px] -z-10" />

      <div className="w-full max-w-4xl flex flex-col gap-8">
        {/* Header row */}
        <div className="flex flex-col md:flex-row justify-between items-end md:items-center gap-4 px-2">
          <QuizProgress current={quiz.current} total={quiz.total} />
          <QuizTimer initialSeconds={quiz.initialTime} score={quiz.score} />
        </div>

        {/* Question */}
        <QuestionCard category={quiz.category} question={quiz.question} />

        {/* Answers + action bar */}
        <AnswerOptions options={quiz.options} />
      </div>
    </main>
  );
}
