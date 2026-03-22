import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import LeaderboardTabs from "@/components/leaderboard/LeaderboardTabs";

export const metadata: Metadata = { title: "Clasificación | Quizzly Pulse" };

const topPlayers = [
  {
    rank: 1,
    name: 'Sarah "Synapse" Chen',
    xp: "42.8k XP",
    acc: "98%",
    rankStyle: "font-black text-2xl text-yellow-500 italic",
    borderColor: "border-yellow-400",
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuAjP30Rv7XPfa6-_m1Y_WmagHI5uUmriY2EKaQSlmrgAX00ZPoKH83hHetgWAHLmHLR8zxNTzBC71milce41QQiNUmo6Oq-PFMobV8U0dtjB_mHqsSf_HVPFXomUExfQMrUxLpNGHW62tXhnxduU3KiMblaSgqdvjmmPfTdj5VZdo7Me6qoccqXuHq1x7v4oYgAfmV_webU7oTxZYnDBle9h1QcvpAigI5G9PKE6vTNP5ffRrgOW8nftiS5k4HgJkCddBUIDsE4nac",
    trophy: true,
  },
  {
    rank: 2,
    name: "Marcus Thorne",
    xp: "41.2k XP",
    acc: "95%",
    rankStyle: "font-black text-2xl text-slate-400 italic",
    borderColor: "border-slate-300",
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuBIvaC35RQ8oVQJxbUicGtkP7bUQQVFVADNRhldsNalnYm1noGg2KZsu6yrsVMgESX-c_D9_hHy4hk3zL3oMbMDVhZDHG1piaqroQPhpgWxkJS-dZLYg79YpCyplkymA7PPuXgn4nv0hF3LE10syu2TPuCk0hRk9RLjnMmhv8HXY89Y6fJ8Yrrpf27EfJuo-2CnwAya6J4JzCpj-9SXSDqkJ5un3L8p2lvnGy2vs5bA6iDJ7qjp11VTxMdxZIE4Yzxl7xXig3j-Sco",
    trophy: false,
  },
  {
    rank: 3,
    name: "Lena Volkov",
    xp: "39.5k XP",
    acc: "94%",
    rankStyle: "font-black text-2xl text-orange-400 italic",
    borderColor: "border-orange-400",
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuAuuNXg98pDC7uOzGu5caqqDnXwhyf2yDQ_X2n3pViDeMzETtzgLzt9Ven-NXYyIQ5dnlI3QEoT6qK5MjrTh1cBMVcSg24PrNq7dxk_4OQ6_lLuiQv8kfp3rWjkSxCG_2UOBnVyH8b12Ewvz4HLN7dRgB1kVxut0Ibl5MhHHUFEF1Dn8WS8beUF2jA-zHKthQ__iKIzHo1eDF489l2YVSRvKlV_zekhHzdxNRMP-3VZDHy_dQ5hXug_62bGHIx70Gw",
    trophy: false,
  },
];

const personalStats = [
  { icon: "quiz", color: "text-primary", label: "Quizzes Jugados", value: "1,284" },
  { icon: "target", color: "text-tertiary", label: "Precisión Promedio", value: "92.4%" },
  { icon: "military_tech", color: "text-secondary", label: "Categoría Favorita", value: "Astrofísica" },
];

const badges = [
  { icon: "bolt", color: "text-error", title: "Velocista" },
  { icon: "dark_mode", color: "text-primary", title: "Búho Nocturno" },
  { icon: "groups", color: "text-tertiary", title: "Alma Social" },
];

export default function LeaderboardPage() {
  return (
    <main className="flex-grow max-w-7xl mx-auto w-full px-6 py-8">
      {/* Encabezado de Perfil */}
      <section className="grid grid-cols-1 lg:grid-cols-12 gap-6 mb-12">
        <div className="lg:col-span-8 bg-surface-container-lowest rounded-lg p-8 flex flex-col md:flex-row items-center gap-8 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary-container/10 rounded-full -mr-32 -mt-32" />
          <div className="relative">
            <Image
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuB_HM3oJQ_6s93khz6a5bYuba14YPm6N7jPe1cnniwPXEERtOxbpmj6g5rPAG6MS2SVg95tQ0pu_WsWibr8v54Zyg59YrCH4QP2sSd_2DDeJr6NtoaObeVL5OTJu-usgyLUgJzoIfq_lV-znEJNI9gZQvcMzQgGqrmWb2DaHuoKQDNqdJnBsc-gG7ln1dtjeZQxzK_3FuHcyJ27HGrml9KSSVn4rTaGx61nDbV-5iaHBzzrhAlFXqWSMyf-DpTPR4O3ufqG74N6h9M"
              alt="Alex Rivera"
              width={128}
              height={128}
              className="w-32 h-32 rounded-full border-4 border-surface-container shadow-xl object-cover"
            />
            <div className="absolute bottom-1 right-1 bg-tertiary p-2 rounded-full border-4 border-white">
              <span
                className="material-symbols-outlined text-white text-sm"
                style={{ fontVariationSettings: "'FILL' 1" }}
              >
                verified
              </span>
            </div>
          </div>
          <div className="flex-grow text-center md:text-left z-10">
            <h1 className="text-4xl font-extrabold tracking-tight text-on-surface mb-2">
              Alex Rivera
            </h1>
            <p className="text-on-surface-variant font-medium mb-4 flex items-center justify-center md:justify-start gap-2">
              <span className="bg-secondary/10 text-secondary px-3 py-1 rounded-full text-xs font-bold uppercase tracking-widest">
                Polímata Maestro
              </span>
              <span className="text-sm">• Nivel 42</span>
            </p>
            <div className="flex flex-wrap gap-3 justify-center md:justify-start">
              {/* Editar perfil → backend: GET /api/user/profile */}
              <Link
                href="/perfil/editar"
                className="bg-gradient-to-br from-primary to-primary-container text-on-primary px-6 py-2 rounded-md font-semibold active:scale-95 transition-transform"
              >
                Editar Perfil
              </Link>
              {/* Compartir estadísticas */}
              <button
                aria-label="Compartir mis estadísticas"
                className="text-on-surface hover:bg-surface-container transition-colors px-6 py-2 rounded-md font-semibold"
              >
                Compartir Estadísticas
              </button>
            </div>
          </div>
        </div>

        <div className="lg:col-span-4 grid grid-cols-2 gap-4">
          <div className="bg-surface-container-low rounded-lg p-6 flex flex-col justify-center items-center text-center">
            <span className="text-xs uppercase tracking-widest text-on-surface-variant font-bold mb-1">
              Posición
            </span>
            <span className="text-3xl font-black text-primary">#142</span>
          </div>
          <div className="bg-secondary/10 rounded-lg p-6 flex flex-col justify-center items-center text-center">
            <span className="text-xs uppercase tracking-widest text-secondary font-bold mb-1">
              Racha
            </span>
            <span className="text-3xl font-black text-secondary">12</span>
          </div>
          <div className="col-span-2 bg-surface-container-highest rounded-lg p-6">
            <div className="flex justify-between items-center mb-4">
              <span className="font-bold text-on-surface">Meta Semanal de XP</span>
              <span className="text-primary font-black">85%</span>
            </div>
            <div className="w-full h-3 bg-surface-container rounded-full overflow-hidden">
              <div
                className="h-full bg-gradient-to-r from-secondary to-secondary-fixed-dim"
                style={{ width: "85%" }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Stats + Tabla */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        <aside className="lg:col-span-4 space-y-8">
          <div>
            <h3 className="text-xl font-bold mb-6 text-on-surface flex items-center gap-2">
              <span className="material-symbols-outlined text-primary">analytics</span>
              Estadísticas Personales
            </h3>
            <div className="space-y-4">
              {personalStats.map((s) => (
                <div
                  key={s.label}
                  className="bg-surface-container rounded-lg p-5 flex items-center gap-4"
                >
                  <div className="w-10 h-10 rounded-full bg-surface-container-lowest flex items-center justify-center">
                    <span className={`material-symbols-outlined ${s.color}`}>
                      {s.icon}
                    </span>
                  </div>
                  <div>
                    <p className="text-xs text-on-surface-variant font-bold uppercase tracking-tighter">
                      {s.label}
                    </p>
                    <p className="text-lg font-bold text-on-surface">{s.value}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="bg-surface-container-low rounded-lg p-6">
            <h3 className="text-lg font-bold mb-4 text-on-surface">
              Insignias Recientes
            </h3>
            <div className="flex gap-4">
              {badges.map((b) => (
                <div
                  key={b.title}
                  className="w-14 h-14 bg-surface-container-lowest rounded-full flex items-center justify-center shadow-sm"
                  title={b.title}
                >
                  <span
                    className={`material-symbols-outlined ${b.color} text-3xl`}
                    style={{ fontVariationSettings: "'FILL' 1" }}
                  >
                    {b.icon}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </aside>

        <section className="lg:col-span-8">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-8">
            <h2 className="text-3xl font-extrabold text-on-surface">
              Tabla de Clasificación
            </h2>
            <LeaderboardTabs />
          </div>
          <div className="space-y-3">
            {topPlayers.map((p) => (
              <div
                key={p.rank}
                className={`bg-surface-container-lowest rounded-lg p-5 flex items-center gap-6 shadow-sm border-l-4 ${p.borderColor}`}
              >
                <div className={`w-8 text-center ${p.rankStyle}`}>{p.rank}</div>
                <Image
                  src={p.src}
                  alt={p.name}
                  width={48}
                  height={48}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div className="flex-grow">
                  <p className="font-bold text-on-surface">{p.name}</p>
                  <p className="text-xs text-on-surface-variant">
                    {p.xp} • {p.acc} Precisión
                  </p>
                </div>
                {p.trophy && (
                  <span
                    className="material-symbols-outlined text-yellow-500"
                    style={{ fontVariationSettings: "'FILL' 1" }}
                  >
                    emoji_events
                  </span>
                )}
              </div>
            ))}
            <div className="flex justify-center py-4">
              <span className="material-symbols-outlined text-outline-variant">
                more_horiz
              </span>
            </div>
            {/* Tu posición */}
            <div className="bg-primary/5 rounded-lg p-6 flex items-center gap-6 ring-2 ring-primary ring-inset shadow-xl transform scale-[1.02]">
              <div className="w-8 text-center font-black text-xl text-primary">
                142
              </div>
              <div className="relative">
                <Image
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuAQ2hkC5DGGTfGoZDg6RnHhpp6m958B_ZvjbqRlsgV-dLU6N9CKkfLJRvP3rsnqE54lmjehGQaGWUwtukj0fiz3QiOYjrxmT4uLTmRka6KkhiXTcJoq4hVIuzcbycAdJU5dlCbI5jmKoHqs5IQR424t6fynklmEI3K-K1rbkzD9g9HK-yN9G0F-J6X8zRlOoo_-fXwBk733fToDO8aj_ctI4QrZst6x62OgzSkMYSbIqjzjeQ3Bx7Hhok7K-EZsPUiwAON-pq_TGg"
                  alt="Tú"
                  width={56}
                  height={56}
                  className="w-14 h-14 rounded-full border-2 border-primary object-cover"
                />
                <div className="absolute -top-2 -right-2 bg-primary text-on-primary text-[10px] font-black px-2 py-0.5 rounded-full uppercase">
                  TÚ
                </div>
              </div>
              <div className="flex-grow">
                <p className="font-bold text-primary text-lg">Alex Rivera</p>
                <p className="text-xs text-on-surface-variant font-medium">
                  18.4k XP • 92% Precisión
                </p>
              </div>
              <div className="flex items-center text-tertiary gap-1">
                <span className="material-symbols-outlined text-sm">trending_up</span>
                <span className="text-sm font-bold">+12</span>
              </div>
            </div>
          </div>

          {/* Cargar más rankings — backend: GET /api/leaderboard?page=2 */}
          <div className="mt-8 flex justify-center">
            <button className="bg-surface-container-high hover:bg-surface-container-highest text-on-surface px-8 py-3 rounded-full font-bold transition-all flex items-center gap-2">
              Ver Más Rankings
              <span className="material-symbols-outlined">expand_more</span>
            </button>
          </div>
        </section>
      </div>
    </main>
  );
}
