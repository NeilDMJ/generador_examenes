"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

async function parseApiError(res: Response): Promise<string> {
  const contentType = res.headers.get("content-type") ?? "";
  if (contentType.includes("application/json")) {
    const data = (await res.json()) as { error?: string };
    return data.error ?? "Error desconocido";
  }
  return `Error del servidor (${res.status}). Revisa que el servidor esté corriendo correctamente.`;
}

export default function LoginForm() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function handleSubmit(event: React.SyntheticEvent<HTMLFormElement>) {
    event.preventDefault();
    setIsLoading(true);
    setError(null);

    try {
      const res = await fetch("/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      if (!res.ok) {
        setError(await parseApiError(res));
        return;
      }

      router.push("/dashboard");
    } catch {
      setError("No se pudo conectar con el servidor. Verifica tu conexión.");
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <form className="space-y-6" onSubmit={handleSubmit} noValidate>
      {error && (
        <div
          role="alert"
          className="px-4 py-3 rounded-md bg-error/10 border border-error/30 text-error text-sm font-medium"
        >
          {error}
        </div>
      )}

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
          value={email}
          onChange={(e) => setEmail(e.target.value)}
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
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full px-5 py-4 bg-surface-container-low border-none rounded-md focus:ring-2 focus:ring-primary text-on-surface placeholder:text-outline-variant transition-all outline-none"
          placeholder="••••••••"
        />
      </div>

      <button
        type="submit"
        disabled={isLoading}
        className="w-full py-4 bg-gradient-to-r from-primary to-primary-container text-on-primary font-headline font-bold rounded-md shadow-lg shadow-primary/20 hover:shadow-xl hover:scale-[1.02] active:scale-95 transition-all duration-300 disabled:opacity-60 disabled:pointer-events-none"
      >
        {isLoading ? "Iniciando sesión..." : "Iniciar Sesión"}
      </button>

      <div className="relative my-4">
        <div className="absolute inset-0 flex items-center">
          <div className="w-full h-px bg-outline-variant/20" />
        </div>
        <div className="relative flex justify-center text-xs uppercase tracking-widest">
          <span className="bg-surface-container-lowest px-4 text-outline-variant font-semibold">
            Continuar con
          </span>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <a
          href="/api/auth/google"
          className="flex items-center justify-center gap-3 py-3 px-4 bg-surface-container-low hover:bg-surface-container-high text-on-surface rounded-md font-label font-medium transition-all"
        >
          <span className="material-symbols-outlined text-[18px]">language</span>
          <span>Google</span>
        </a>
        <a
          href="/api/auth/github"
          className="flex items-center justify-center gap-3 py-3 px-4 bg-surface-container-low hover:bg-surface-container-high text-on-surface rounded-md font-label font-medium transition-all"
        >
          <span className="material-symbols-outlined text-[18px]">code</span>
          <span>GitHub</span>
        </a>
      </div>
    </form>
  );
}
