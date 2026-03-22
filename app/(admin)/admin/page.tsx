import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = { title: "Admin | Quizzly Pulse" };

const stats = [
  { label: "Total de Preguntas", value: "1,284", color: "text-primary", bg: "" },
  { label: "Activas Este Mes", value: "422", color: "text-secondary", bg: "" },
  {
    label: "Precisión Promedio",
    value: "76%",
    color: "text-tertiary",
    bg: "bg-tertiary-container/30 border-tertiary/10",
  },
];

const quickLinks = [
  {
    href: "/admin/questions",
    icon: "quiz",
    label: "Gestionar Preguntas",
    desc: "Agregar, editar y eliminar preguntas del quiz",
  },
  {
    href: "/admin/users",
    icon: "group",
    label: "Gestionar Usuarios",
    desc: "Ver y administrar cuentas de usuario",
  },
  {
    href: "/admin/analytics",
    icon: "analytics",
    label: "Análisis Global",
    desc: "Estadísticas globales y métricas de rendimiento",
  },
];

export default function AdminPage() {
  return (
    <main className="flex-1 flex flex-col gap-8 min-w-0">
      <section className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6">
        <div>
          <h1 className="text-4xl font-extrabold text-on-surface tracking-tight leading-none mb-2">
            Panel de Administración
          </h1>
          <p className="text-on-surface-variant font-medium">
            Gestiona y monitorea Quizzly Pulse desde un solo lugar.
          </p>
        </div>
        {/* Agrega una nueva pregunta al banco */}
        <Link
          href="/admin/questions/nueva"
          className="bg-gradient-to-br from-primary to-primary-container text-on-primary font-bold px-6 py-3 rounded-md shadow-lg flex items-center gap-2 active:scale-95 transition-transform"
        >
          <span className="material-symbols-outlined">add_circle</span>
          Agregar Pregunta
        </Link>
      </section>

      {/* Estadísticas */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {stats.map((s) => (
          <div
            key={s.label}
            className={`bg-surface-container-lowest p-6 rounded-lg flex flex-col justify-between h-32 border border-outline-variant/10 ${s.bg}`}
          >
            <span className="text-xs font-bold uppercase tracking-wider text-on-surface-variant">
              {s.label}
            </span>
            <span className={`text-4xl font-black ${s.color}`}>{s.value}</span>
          </div>
        ))}
      </div>

      {/* Accesos rápidos */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {quickLinks.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className="bg-surface-container-lowest p-6 rounded-lg border border-outline-variant/10 hover:shadow-md transition-all group flex flex-col gap-4"
          >
            <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
              <span className="material-symbols-outlined text-primary group-hover:scale-110 transition-transform">
                {link.icon}
              </span>
            </div>
            <div>
              <h3 className="font-headline font-bold text-on-surface">{link.label}</h3>
              <p className="text-on-surface-variant text-sm mt-1">{link.desc}</p>
            </div>
            <span className="material-symbols-outlined text-on-surface-variant/40 self-end">
              arrow_forward
            </span>
          </Link>
        ))}
      </div>
    </main>
  );
}
