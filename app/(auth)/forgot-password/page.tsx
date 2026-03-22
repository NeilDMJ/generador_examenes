import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = { title: "Recuperar Contraseña | Quizzly Pulse" };

export default function ForgotPasswordPage() {
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
              lock_reset
            </span>
          </div>
          <h1 className="text-3xl font-headline font-black italic bg-gradient-to-br from-primary to-primary-fixed bg-clip-text text-transparent tracking-tight">
            Quizzly Pulse
          </h1>
          <p className="text-on-surface-variant font-body mt-2">
            Te enviaremos un enlace para restablecer tu contraseña.
          </p>
        </div>

        {/* Card */}
        <div className="bg-surface-container-lowest p-8 md:p-10 rounded-lg shadow-[0_32px_64px_-12px_rgba(42,43,81,0.08)]">
          <h2 className="text-2xl font-headline font-bold text-on-surface mb-2">
            Recuperar Contraseña
          </h2>
          <p className="text-on-surface-variant text-sm mb-8">
            Ingresa tu correo y te enviaremos las instrucciones.
          </p>

          {/*
            Conectar con el backend:
            - action: POST /api/auth/forgot-password
            - Envía email con link de reset
          */}
          <form className="space-y-6" method="POST" action="/api/auth/forgot-password">
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
            <button
              type="submit"
              className="w-full py-4 bg-gradient-to-r from-primary to-primary-container text-on-primary font-headline font-bold rounded-md shadow-lg shadow-primary/20 hover:shadow-xl hover:scale-[1.02] active:scale-95 transition-all duration-300"
            >
              Enviar Instrucciones
            </button>
          </form>
        </div>

        <p className="text-center mt-8 font-body text-on-surface-variant">
          <Link
            className="text-primary font-bold hover:text-secondary underline underline-offset-4 decoration-2 transition-all"
            href="/login"
          >
            ← Volver al inicio de sesión
          </Link>
        </p>
      </div>
    </main>
  );
}
