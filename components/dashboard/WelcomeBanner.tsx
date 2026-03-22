import Link from "next/link";

type WelcomeBannerProps = {
  userName: string;
  streakDays: number;
};

export default function WelcomeBanner({
  userName,
  streakDays,
}: WelcomeBannerProps) {
  return (
    <section className="relative overflow-hidden rounded-lg bg-gradient-to-br from-primary to-primary-container p-8 md:p-12 text-on-primary">
      <div className="relative z-10 max-w-2xl">
        <span className="inline-block px-4 py-1 rounded-full bg-on-primary/20 text-xs font-bold tracking-widest uppercase mb-4 font-label">
          Desafío Diario Disponible
        </span>
        <h1 className="text-4xl md:text-5xl font-black mb-4 font-headline leading-tight">
          ¡Bienvenido de nuevo, {userName}!
        </h1>
        <p className="text-lg opacity-90 mb-8 font-body max-w-lg">
          ¿Listo para poner a prueba tus conocimientos hoy? Llevas una racha de{" "}
          {streakDays} días. ¡Sigue así!
        </p>
        <div className="flex flex-wrap gap-4">
          {/* Redirige a la selección de quiz — backend asignará un quizId real */}
          <Link
            href="/quiz/demo"
            className="bg-surface-container-lowest text-primary px-8 py-4 rounded-md font-bold text-lg active:scale-95 transition-all shadow-xl flex items-center gap-2"
          >
            <span
              className="material-symbols-outlined"
              style={{ fontVariationSettings: "'FILL' 1" }}
            >
              bolt
            </span>
            Empezar Quiz
          </Link>
          {/* Ver objetivos diarios — sección de la misma página */}
          <Link
            href="/dashboard#metas"
            className="bg-primary-dim/30 border border-on-primary/20 px-8 py-4 rounded-md font-bold text-lg active:scale-95 transition-all"
          >
            Ver Meta Diaria
          </Link>
        </div>
      </div>

      <div className="absolute top-0 right-0 w-64 h-64 bg-on-primary/10 rounded-full -mr-20 -mt-20 blur-3xl" />
      <div className="absolute bottom-10 right-12 hidden md:block">
        <div className="bg-surface-container-lowest/10 backdrop-blur-md rounded-xl p-6 border border-on-primary/10 rotate-3">
          <span className="material-symbols-outlined text-6xl opacity-40">
            psychology
          </span>
        </div>
      </div>
    </section>
  );
}
