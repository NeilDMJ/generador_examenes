"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const adminLinks = [
  { href: "/admin/users", icon: "group", label: "Gestionar Usuarios" },
  { href: "/admin/questions", icon: "quiz", label: "Gestionar Preguntas" },
  { href: "/admin/analytics", icon: "analytics", label: "Análisis Global" },
  { href: "/admin", icon: "tune", label: "Configuración" },
];

export default function AdminSidebar() {
  const pathname = usePathname();

  return (
    <aside className="hidden lg:flex flex-col w-64 gap-2 shrink-0">
      <div className="p-4 bg-surface-container-low rounded-lg">
        <p className="text-[0.65rem] font-bold uppercase tracking-[0.15em] text-on-surface-variant mb-4 px-3">
          Administración
        </p>
        <nav className="flex flex-col gap-1">
          {adminLinks.map(({ href, icon, label }) => {
            const isActive = pathname === href;
            return (
              <Link
                key={href}
                href={href}
                className={`flex items-center gap-3 px-3 py-3 rounded-md transition-all group ${
                  isActive
                    ? "bg-primary text-on-primary shadow-sm"
                    : "text-on-surface-variant hover:bg-surface-container-highest"
                }`}
              >
                <span
                  className={`material-symbols-outlined text-[20px] ${
                    !isActive ? "group-hover:text-primary" : ""
                  }`}
                >
                  {icon}
                </span>
                <span className="font-medium">{label}</span>
              </Link>
            );
          })}
        </nav>
      </div>

      <div className="mt-auto p-6 rounded-lg bg-gradient-to-br from-primary to-primary-container text-on-primary relative overflow-hidden group">
        <div className="relative z-10">
          <h4 className="font-bold text-lg leading-tight mb-2">¿Necesitas Ayuda?</h4>
          <p className="text-xs opacity-90 mb-4">
            Accede a la documentación para configuraciones avanzadas.
          </p>
          {/* Documentación admin → puede apuntar a /admin/docs cuando esté lista */}
          <Link
            href="/admin/docs"
            className="bg-surface-container-lowest text-primary text-xs font-bold py-2 px-4 rounded-full inline-block"
          >
            Ver Documentación
          </Link>
        </div>
        <span className="material-symbols-outlined absolute -right-4 -bottom-4 text-8xl opacity-10 group-hover:rotate-12 transition-transform duration-500">
          support_agent
        </span>
      </div>
    </aside>
  );
}
