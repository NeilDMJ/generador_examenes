"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

async function parseApiError(res: Response): Promise<string> {
  const contentType = res.headers.get("content-type") ?? "";
  if (contentType.includes("application/json")) {
    const data = (await res.json()) as { error?: string };
    return data.error ?? "Error desconocido";
  }
  // El servidor devolvió HTML (página de error 500) en lugar de JSON
  return `Error del servidor (${res.status}). Revisa que el servidor esté corriendo correctamente.`;
}

export default function RegisterForm() {
  const router = useRouter();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function handleSubmit(event: React.SyntheticEvent<HTMLFormElement>) {
    event.preventDefault();
    setIsLoading(true);
    setError(null);

    try {
      // Solo incluir name si tiene al menos 2 caracteres (cumple el schema)
      const body = {
        ...(name.trim().length >= 2 ? { name: name.trim() } : {}),
        email,
        password,
      };

      const res = await fetch("/api/auth/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
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
    <form className="space-y-5" onSubmit={handleSubmit} noValidate>
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
          htmlFor="name"
          className="block text-sm font-label font-semibold text-on-surface/80 tracking-wider pl-1"
        >
          Nombre Completo
        </label>
        <input
          id="name"
          name="name"
          type="text"
          autoComplete="name"
          required
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full px-5 py-4 bg-surface-container-low border-none rounded-md focus:ring-2 focus:ring-primary text-on-surface placeholder:text-outline-variant transition-all outline-none"
          placeholder="Tu nombre"
        />
      </div>

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
        <label
          htmlFor="password"
          className="block text-sm font-label font-semibold text-on-surface/80 tracking-wider pl-1"
        >
          Contraseña
        </label>
        <input
          id="password"
          name="password"
          type="password"
          autoComplete="new-password"
          required
          minLength={8}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full px-5 py-4 bg-surface-container-low border-none rounded-md focus:ring-2 focus:ring-primary text-on-surface placeholder:text-outline-variant transition-all outline-none"
          placeholder="Mínimo 8 caracteres"
        />
      </div>

      <button
        type="submit"
        disabled={isLoading}
        className="w-full py-4 bg-gradient-to-r from-primary to-primary-container text-on-primary font-headline font-bold rounded-md shadow-lg shadow-primary/20 hover:shadow-xl hover:scale-[1.02] active:scale-95 transition-all duration-300 disabled:opacity-60 disabled:pointer-events-none"
      >
        {isLoading ? "Creando cuenta..." : "Crear Cuenta"}
      </button>
    </form>
  );
}
