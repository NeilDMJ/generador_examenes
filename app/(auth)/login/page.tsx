import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = { title: "Iniciar Sesión | Quizzly Pulse" };

export default function LoginPage() {
  return (
    <main className="flex-grow flex items-center justify-center px-6 py-12">
      <div className="w-full max-w-md">
        {/* Brand */}
        <div className="text-center mb-10">
          <div className="inline-flex items-center justify-center p-4 mb-4 bg-surface-container rounded-lg">
            <span
              className="material-symbols-outlined text-primary text-4xl"
              style={{ fontVariationSettings: "'FILL' 1" }}
            >
              bolt
            </span>
          </div>
          <h1 className="text-3xl font-headline font-black italic bg-gradient-to-br from-primary to-primary-fixed bg-clip-text text-transparent tracking-tight">
            Quizzly Pulse
          </h1>
          <p className="text-on-surface-variant font-body mt-2">
            Eleva tu intelecto con trivias a velocidad de rayo.
          </p>
        </div>

        {/* Card */}
        <div className="bg-surface-container-lowest p-8 md:p-10 rounded-lg shadow-[0_32px_64px_-12px_rgba(42,43,81,0.08)] relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-primary-container/10 rounded-full -mr-16 -mt-16" />
          <div className="relative">
            <h2 className="text-2xl font-headline font-bold text-on-surface mb-8">
              Bienvenido de Vuelta
            </h2>

            {/*
              Conectar con el backend:
              - action: POST /api/auth/login
              - Responde con session token / cookie
            */}
            <form className="space-y-6" method="POST" action="/api/auth/login">
              <div className="space-y-2">
                <label
                  htmlFor="email"
                  className="block text-sm font-label font-semibold text-on-surface/80 tracking-wider pl-1"
                >
                  Correo Electrónico
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className="w-full px-5 py-4 bg-surface-container-low border-none rounded-md focus:ring-2 focus:ring-primary text-on-surface placeholder:text-outline-variant transition-all outline-none"
                  placeholder="nombre@ejemplo.com"
                />
              </div>
              <div className="space-y-2">
                <div className="flex justify-between items-center pl-1">
                  <label
                    htmlFor="password"
                    className="block text-sm font-label font-semibold text-on-surface/80 tracking-wider"
                  >
                    Contraseña
                  </label>
                  <Link
                    className="text-xs font-label font-medium text-primary hover:text-secondary transition-colors"
                    href="/forgot-password"
                  >
                    Olvidé mi contraseña
                  </Link>
                </div>
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  className="w-full px-5 py-4 bg-surface-container-low border-none rounded-md focus:ring-2 focus:ring-primary text-on-surface placeholder:text-outline-variant transition-all outline-none"
                  placeholder="••••••••"
                />
              </div>
              <button
                type="submit"
                className="w-full py-4 bg-gradient-to-r from-primary to-primary-container text-on-primary font-headline font-bold rounded-md shadow-lg shadow-primary/20 hover:shadow-xl hover:scale-[1.02] active:scale-95 transition-all duration-300"
              >
                Iniciar Sesión
              </button>
            </form>

            <div className="relative my-10">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full h-px bg-outline-variant/20" />
              </div>
              <div className="relative flex justify-center text-xs uppercase tracking-widest">
                <span className="bg-surface-container-lowest px-4 text-outline-variant font-semibold">
                  Continuar con
                </span>
              </div>
            </div>

            {/*
              Conectar con el backend:
              - Google OAuth: GET /api/auth/google
              - GitHub OAuth: GET /api/auth/github
            */}
            <div className="grid grid-cols-2 gap-4">
              <Link
                href="/api/auth/google"
                className="flex items-center justify-center gap-3 py-3 px-4 bg-surface-container-low hover:bg-surface-container-high text-on-surface rounded-md font-label font-medium transition-all"
              >
                <span className="material-symbols-outlined text-[18px]">language</span>
                <span>Google</span>
              </Link>
              <Link
                href="/api/auth/github"
                className="flex items-center justify-center gap-3 py-3 px-4 bg-surface-container-low hover:bg-surface-container-high text-on-surface rounded-md font-label font-medium transition-all"
              >
                <span className="material-symbols-outlined text-[18px]">code</span>
                <span>GitHub</span>
              </Link>
            </div>
          </div>
        </div>

        <p className="text-center mt-8 font-body text-on-surface-variant">
          ¿No tienes cuenta?{" "}
          <Link
            className="text-primary font-bold hover:text-secondary underline underline-offset-4 decoration-2 transition-all"
            href="/register"
          >
            Registrarse gratis
          </Link>
        </p>
      </div>
    </main>
  );
}
