"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useTheme } from "@/components/ThemeProvider";

const navLinks = [
  { href: "/dashboard", label: "Inicio" },
  { href: "/leaderboard", label: "Clasificación" },
  { href: "#", label: "Mis Estadísticas" },
  { href: "/admin", label: "Admin" },
];

export default function Header() {
  const pathname = usePathname();
  const { theme, toggleTheme } = useTheme();

  return (
    <header className="bg-surface sticky top-0 z-50 shadow-[0_4px_4px_-1px_rgba(4,43,81,0.06)] dark:shadow-[0_32px_32px_-12px_rgba(0,0,0,0.3)] transition-colors duration-300">
      <div className="flex justify-between items-center w-full px-6 py-4 max-w-7xl mx-auto">
        <div className="flex items-center gap-8">
          <Link
            href="/dashboard"
            className="text-2xl font-black italic bg-gradient-to-br from-primary to-primary-fixed bg-clip-text text-transparent tracking-tight"
          ></Link>
          <nav className="hidden md:flex items-center gap-6">
            {navLinks.map(({ href, label }) => {
              const isActive =
                href !== "#" &&
                (pathname === href || pathname.startsWith(href + "/"));
              return (
                <Link
                  key={label}
                  href={href}
                  className={
                    isActive
                      ? "text-primary border-b-2 border-primary pb-1 font-bold tracking-tight transition-colors duration-300"
                      : "text-on-surface font-medium hover:text-secondary transition-colors duration-300"
                  }
                >
                  {label}
                </Link>
              );
            })}
          </nav>
        </div>

        <div className="flex items-center gap-3">
          {/* Dark mode toggle */}
          <button
            onClick={toggleTheme}
            aria-label={
              theme === "dark" ? "Activar modo claro" : "Activar modo oscuro"
            }
            className="active:scale-95 transition-transform p-2 rounded-full bg-surface-container-high text-on-surface-variant hover:text-primary"
          >
            <span
              className="material-symbols-outlined"
              style={{ fontVariationSettings: "'FILL' 1" }}
            >
              {theme === "dark" ? "light_mode" : "dark_mode"}
            </span>
          </button>

          {/* Settings */}
          <Link
            href="/admin"
            aria-label="Configuración"
            className="active:scale-95 transition-transform p-2 text-on-surface-variant hover:text-secondary"
          >
            <span className="material-symbols-outlined">settings</span>
          </Link>

          {/* Account */}
          <Link
            href="/login"
            aria-label="Mi perfil"
            className="active:scale-95 transition-transform p-1 rounded-full bg-surface-container-high"
          >
            <span
              className="material-symbols-outlined text-3xl text-primary"
              style={{ fontVariationSettings: "'FILL' 1" }}
            >
              account_circle
            </span>
          </Link>
        </div>
      </div>
    </header>
  );
}
