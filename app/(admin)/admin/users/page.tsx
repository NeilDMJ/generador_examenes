import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Gestionar Usuarios | Admin Quizzly Pulse",
};

export default function UsersPage() {
  return (
    <main className="flex-1 flex flex-col gap-8 min-w-0">
      <div>
        <h1 className="text-4xl font-extrabold text-on-surface tracking-tight leading-none mb-2">
          Gestionar Usuarios
        </h1>
        <p className="text-on-surface-variant font-medium">
          Ver y administrar cuentas de usuario.
        </p>
      </div>
      <div className="bg-surface-container-lowest rounded-lg p-12 flex flex-col items-center justify-center text-center border border-outline-variant/10">
        <span className="material-symbols-outlined text-6xl text-on-surface-variant/30 mb-4">
          group
        </span>
        <h2 className="font-headline text-xl font-bold text-on-surface mb-2">
          Próximamente
        </h2>
        <p className="text-on-surface-variant text-sm max-w-sm">
          La gestión de usuarios estará disponible una vez que el backend esté conectado.
        </p>
      </div>
    </main>
  );
}
