import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import WelcomeBanner from "@/components/dashboard/WelcomeBanner";
import RecentScoreItem from "@/components/dashboard/RecentScoreItem";

export const metadata: Metadata = { title: "Panel | Quizzly Pulse" };

const categories = [
  {
    id: "science",
    span: "md:col-span-2",
    bg: "bg-tertiary/10",
    iconBg: "bg-tertiary",
    iconText: "text-on-tertiary",
    icon: "science",
    badge: "124 Quizzes",
    badgeText: "text-tertiary",
    title: "Ciencia y Naturaleza",
    subtitle: "Desde átomos hasta galaxias",
    decorIcon: "biotech",
    minH: "min-h-[200px]",
  },
  {
    id: "history",
    span: "",
    bg: "bg-secondary/10",
    iconBg: "bg-secondary",
    iconText: "text-on-secondary",
    icon: "history_edu",
    badge: null,
    badgeText: "",
    title: "Historia",
    subtitle: "Antigua y Moderna",
    decorIcon: null,
    minH: "",
  },
  {
    id: "sports",
    span: "",
    bg: "bg-primary/10",
    iconBg: "bg-primary",
    iconText: "text-on-primary",
    icon: "sports_basketball",
    badge: null,
    badgeText: "",
    title: "Deportes",
    subtitle: "Atletismo Global",
    decorIcon: null,
    minH: "",
  },
];

const recentScores = [
  {
    category: "Ciencia",
    categoryColor: "text-tertiary",
    borderColor: "border-tertiary",
    barColor: "bg-tertiary",
    time: "Hace 2h",
    title: "Maestría en Física",
    score: 92,
  },
  {
    category: "Historia",
    categoryColor: "text-secondary",
    borderColor: "border-secondary",
    barColor: "bg-secondary",
    time: "Ayer",
    title: "Arte del Renacimiento",
    score: 75,
  },
  {
    category: "Deportes",
    categoryColor: "text-primary",
    borderColor: "border-primary",
    barColor: "bg-primary",
    time: "Hace 2 días",
    title: "Leyendas de la NBA",
    score: 88,
  },
];

const features = [
  "Conjuntos de Preguntas Personalizados con IA",
  "Duelos Multijugador en Tiempo Real",
  "Ranking Global y Recompensas por Nivel",
];

export default function DashboardPage() {
  return (
    <main className="flex-grow max-w-7xl mx-auto w-full px-6 py-8 space-y-12">
      <WelcomeBanner userName="Alex" streakDays={5} />

      {/* Main Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Categories */}
        <div className="lg:col-span-8 space-y-6">
          <div className="flex justify-between items-end">
            <div>
              <h2 className="text-2xl font-extrabold font-headline text-on-surface">
                Categorías
              </h2>
              <p className="text-on-surface-variant font-body text-sm">
                Elige un tema para agudizar tu mente
              </p>
            </div>
            {/* Redirige a la página de todas las categorías */}
            <Link
              href="/categorias"
              className="text-primary font-bold text-sm hover:underline decoration-2 underline-offset-4"
            >
              Ver más
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {categories.map((cat) => (
              <Link
                key={cat.id}
                href={`/quiz/${cat.id}`}
                className={`${cat.span} group relative overflow-hidden rounded-lg ${cat.bg} p-6 ${cat.minH} flex flex-col justify-between transition-all hover:shadow-lg`}
              >
                <div className="flex justify-between items-start">
                  <span
                    className={`p-3 ${cat.iconBg} ${cat.iconText} rounded-lg material-symbols-outlined`}
                  >
                    {cat.icon}
                  </span>
                  {cat.badge && (
                    <span
                      className={`bg-surface-container-lowest px-3 py-1 rounded-full text-xs font-bold ${cat.badgeText}`}
                    >
                      {cat.badge}
                    </span>
                  )}
                </div>
                <div>
                  <h3 className="text-2xl font-bold font-headline text-on-surface">
                    {cat.title}
                  </h3>
                  <p className="text-on-surface-variant text-sm mt-1">
                    {cat.subtitle}
                  </p>
                </div>
                {cat.decorIcon && (
                  <div className="absolute -right-4 -bottom-4 opacity-10 group-hover:scale-110 transition-transform duration-500">
                    <span className="material-symbols-outlined text-9xl">
                      {cat.decorIcon}
                    </span>
                  </div>
                )}
              </Link>
            ))}

            {/* Cultura Pop */}
            <Link
              href="/quiz/pop-culture"
              className="md:col-span-2 group relative overflow-hidden rounded-lg bg-surface-container-highest p-6 min-h-[160px] flex items-center gap-6 transition-all hover:shadow-lg"
            >
              <div className="shrink-0">
                <span className="p-5 bg-on-surface text-surface rounded-full material-symbols-outlined text-3xl">
                  movie
                </span>
              </div>
              <div className="flex-grow">
                <h3 className="text-2xl font-bold font-headline text-on-surface">
                  Cultura Pop
                </h3>
                <p className="text-on-surface-variant text-sm">
                  Películas, Música y Medios
                </p>
              </div>
              <div className="material-symbols-outlined text-on-surface-variant/20 text-6xl">
                trending_up
              </div>
            </Link>
          </div>
        </div>

        {/* Sidebar */}
        <div className="lg:col-span-4 space-y-6">
          <div className="bg-surface-container-low rounded-lg p-6 space-y-6">
            <h2 className="text-xl font-extrabold font-headline text-on-surface">
              Puntajes Recientes
            </h2>
            <div className="space-y-4">
              {recentScores.map((item) => (
                <RecentScoreItem key={item.title} {...item} />
              ))}
            </div>
            <div className="pt-4 border-t border-outline-variant/10">
              <div className="flex items-center justify-between p-5 bg-gradient-to-r from-secondary to-secondary-fixed-dim rounded-lg text-on-secondary">
                <div>
                  <p className="text-xs font-bold font-label">Experiencia</p>
                  <p className="text-2xl font-black font-headline">Nivel 24</p>
                </div>
                <span
                  className="material-symbols-outlined text-4xl"
                  style={{ fontVariationSettings: "'FILL' 1" }}
                >
                  military_tech
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Featured / Metas section */}
      <section id="metas" className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center pt-8">
        <div className="relative">
          <div className="aspect-video rounded-lg overflow-hidden bg-surface-container-high shadow-2xl relative group">
            <Image
              alt="Múltiples bombillas brillantes en una habitación oscura"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuB-wNIYKhp6h47iJpBMK3_lDC2pw_CtmQTvK58jnoXPWqk_VE58J9HrHYG0uYfWNE2hz5LQpNUTIMUh9rzBw-zerb1WJpmdNEDMEIYJo45aqqH2NiamTZsvbPBwEYj5tqylH18CLXs781WdFZK0FtG0TftE2HgLr1liUaqr4MlxBcuuRguYxKIMiDfBwiORrnuVVqRtAhHllZ3251sFtot301FhE159l_-GUyertyR6L9gFZZJJ2P8I50ElOchwpI5PW46yECzuNrc"
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-inverse-surface/80 via-transparent to-transparent flex flex-col justify-end p-8">
              <span className="text-surface font-bold text-xl font-headline">
                La Serie Suprema del Cerebro
              </span>
              <p className="text-surface/80 text-sm">
                Únete a 15,000 jugadores en el torneo global semanal.
              </p>
            </div>
          </div>
          <div className="absolute -top-6 -right-6 bg-secondary text-on-secondary px-6 py-4 rounded-lg shadow-xl rotate-12 flex flex-col items-center">
            <span className="text-3xl font-black">$500</span>
            <span className="text-[10px] font-bold uppercase tracking-tighter">
              Premio Total
            </span>
          </div>
        </div>
        <div className="space-y-6">
          <h2 className="text-4xl font-black font-headline text-on-surface leading-tight">
            Eleva tu intelecto a través del juego.
          </h2>
          <p className="text-on-surface-variant font-body text-lg leading-relaxed">
            Quizzly Pulse no es solo un juego. Es una plataforma de entrenamiento
            cognitivo disfrazada de trivia de alto impacto.
          </p>
          <ul className="space-y-3">
            {features.map((f) => (
              <li
                key={f}
                className="flex items-center gap-3 text-on-surface font-medium"
              >
                <span className="material-symbols-outlined text-tertiary">
                  check_circle
                </span>
                {f}
              </li>
            ))}
          </ul>
        </div>
      </section>
    </main>
  );
}
