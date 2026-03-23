import type { Metadata } from "next";
import Link from "next/link";

import RegisterForm from "@/components/auth/RegisterForm";

export const metadata: Metadata = { title: "Crear Cuenta | Quizzly Pulse" };

export default function RegisterPage() {
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
            Crea tu cuenta y empieza a competir.
          </p>
        </div>

        {/* Card */}
        <div className="bg-surface-container-lowest p-8 md:p-10 rounded-lg shadow-[0_32px_64px_-12px_rgba(42,43,81,0.08)] relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-primary-container/10 rounded-full -mr-16 -mt-16" />
          <div className="relative">
            <h2 className="text-2xl font-headline font-bold text-on-surface mb-8">
              Crear Cuenta
            </h2>
            <RegisterForm />
          </div>
        </div>

        <p className="text-center mt-8 font-body text-on-surface-variant">
          ¿Ya tienes cuenta?{" "}
          <Link
            className="text-primary font-bold hover:text-secondary underline underline-offset-4 decoration-2 transition-all"
            href="/login"
          >
            Iniciar Sesión
          </Link>
        </p>
      </div>
    </main>
  );
}
