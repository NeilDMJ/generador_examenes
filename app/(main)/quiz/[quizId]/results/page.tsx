import type { Metadata } from "next";
import Link from "next/link";
import QuizBreakdown from "@/components/results/QuizBreakdown";

export const metadata: Metadata = { title: "Resultados | Quizzly Pulse" };

// Datos de prueba — reemplazar con llamada a la API cuando el backend esté listo
const MOCK_RESULTS = {
  userName: "Buscador del Saber",
  correct: 7,
  total: 10,
  streakDays: 5,
  quizId: "demo",
  breakdown: [
    {
      questionNumber: 1,
      question: "¿Qué planeta es conocido como el Planeta Rojo?",
      correct: true,
      correctAnswer: "Marte",
      points: 10,
    },
    {
      questionNumber: 2,
      question: "¿Cuál es la capital de Australia?",
      correct: false,
      correctAnswer: "Canberra",
      yourAnswer: "Sídney",
      points: 0,
    },
    {
      questionNumber: 3,
      question: "¿En qué año se hundió el Titanic?",
      correct: true,
      correctAnswer: "1912",
      points: 15,
    },
    {
      questionNumber: 4,
      question: "¿Quién pintó la Mona Lisa?",
      correct: true,
      correctAnswer: "Leonardo da Vinci",
      points: 10,
    },
  ],
};

export default function ResultsPage() {
  const { userName, correct, total, streakDays, quizId, breakdown } =
    MOCK_RESULTS;

  return (
    <main className="flex-grow max-w-7xl mx-auto w-full px-6 py-12">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Hero */}
        <section className="lg:col-span-7 flex flex-col gap-8">
          <div className="bg-surface-container-low rounded-lg p-10 relative overflow-hidden">
            <div className="absolute -top-24 -right-24 w-64 h-64 bg-gradient-to-br from-primary to-primary-container rounded-full blur-3xl opacity-10" />
            <div className="relative z-10 flex flex-col items-center text-center">
              <span className="bg-secondary-container text-on-secondary-container px-4 py-1.5 rounded-full font-label text-xs font-bold uppercase tracking-widest mb-6">
                Quiz Completado
              </span>
              <h1 className="font-headline text-5xl md:text-6xl font-extrabold text-on-surface mb-2 tracking-tight leading-tight">
                ¡Buen trabajo, {userName}!
              </h1>
              <p className="text-on-surface-variant text-lg max-w-lg mb-10">
                Has superado exitosamente el desafío de este quiz.
              </p>

              {/* Score Circle */}
              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-br from-primary to-primary-container rounded-full blur-2xl opacity-20 group-hover:opacity-30 transition-opacity" />
                <div className="relative w-48 h-48 md:w-56 md:h-56 bg-surface-container-lowest rounded-full border-8 border-surface-container flex flex-col items-center justify-center shadow-2xl">
                  <span className="font-headline text-6xl md:text-7xl font-black text-primary leading-none">
                    {correct}
                    <span className="text-3xl text-outline-variant">/{total}</span>
                  </span>
                  <span className="text-on-surface-variant font-label font-semibold tracking-tighter mt-1">
                    Correctas
                  </span>
                </div>
              </div>

              {/* Actions */}
              <div className="flex flex-wrap justify-center gap-4 mt-12 w-full">
                {/* Jugar el mismo quiz de nuevo */}
                <Link
                  href={`/quiz/${quizId}`}
                  className="bg-gradient-to-br from-primary to-primary-container text-on-primary font-headline font-bold px-8 py-4 rounded-md shadow-lg active:scale-95 transition-all flex items-center gap-2"
                >
                  <span
                    className="material-symbols-outlined"
                    style={{ fontVariationSettings: "'FILL' 1" }}
                  >
                    replay
                  </span>
                  Jugar de Nuevo
                </Link>
                {/* Volver al panel principal */}
                <Link
                  href="/dashboard"
                  className="bg-surface-container-highest text-on-surface font-headline font-bold px-8 py-4 rounded-md active:scale-95 transition-all"
                >
                  Volver al Panel
                </Link>
              </div>
            </div>
          </div>

          {/* Social + Streak */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-surface-container p-8 rounded-lg flex flex-col justify-between">
              <div>
                <h3 className="font-headline text-xl font-bold mb-2 text-on-surface">
                  Comparte tu Brillantez
                </h3>
                <p className="text-on-surface-variant text-sm mb-6">
                  Que el mundo conozca tu puntaje.
                </p>
              </div>
              <div className="flex gap-3">
                {[
                  { icon: "share", color: "text-primary", label: "Compartir" },
                  { icon: "post_add", color: "text-[#1DA1F2]", label: "Twitter" },
                  { icon: "group", color: "text-[#4267B2]", label: "Facebook" },
                ].map((b) => (
                  <button
                    key={b.icon}
                    aria-label={`Compartir en ${b.label}`}
                    className="w-12 h-12 rounded-full bg-surface-container-lowest flex items-center justify-center shadow-sm hover:shadow-md transition-shadow"
                  >
                    <span className={`material-symbols-outlined ${b.color}`}>
                      {b.icon}
                    </span>
                  </button>
                ))}
              </div>
            </div>
            <div className="bg-secondary-container p-8 rounded-lg relative overflow-hidden">
              <div className="absolute bottom-0 right-0 opacity-10 translate-x-4 translate-y-4">
                <span
                  className="material-symbols-outlined text-8xl"
                  style={{ fontVariationSettings: "'FILL' 1" }}
                >
                  trending_up
                </span>
              </div>
              <h3 className="font-headline text-xl font-bold mb-2 text-on-secondary-container">
                ¡Nueva Racha!
              </h3>
              <p className="text-on-secondary-container/80 text-sm mb-4">
                Llevas {streakDays} días consecutivos aprendiendo.
              </p>
              <div className="w-full bg-surface-container-highest h-3 rounded-full overflow-hidden">
                <div
                  className="bg-gradient-to-r from-secondary to-secondary-fixed-dim h-full"
                  style={{ width: "75%" }}
                />
              </div>
            </div>
          </div>
        </section>

        {/* Breakdown */}
        <section className="lg:col-span-5 bg-surface-container-lowest rounded-lg p-8 shadow-sm">
          <div className="flex items-center justify-between mb-8">
            <h2 className="font-headline text-2xl font-bold text-on-surface">
              Desglose del Quiz
            </h2>
            <span className="material-symbols-outlined text-outline">analytics</span>
          </div>
          <QuizBreakdown items={breakdown} />
          {/*
            Ver todas las preguntas — backend debe devolver el desglose completo
            endpoint: GET /api/quiz/{quizId}/results?full=true
          */}
          <Link
            href={`/quiz/${quizId}/results/detalle`}
            className="w-full mt-8 py-3 text-primary font-headline font-bold text-sm border-t border-surface-container hover:bg-surface-container-low transition-colors rounded-b-lg flex items-center justify-center"
          >
            Ver las {total} Preguntas
          </Link>
        </section>
      </div>
    </main>
  );
}
