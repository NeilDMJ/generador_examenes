import type { Metadata } from "next";
import Link from "next/link";
import QuestionFilters from "@/components/admin/QuestionFilters";

export const metadata: Metadata = {
  title: "Banco de Preguntas | Admin Quizzly Pulse",
};

const questions = [
  {
    id: "QZ-8821",
    text: "¿Cuál es el símbolo químico del Oro?",
    added: "Hace 2 días",
    category: "Ciencia",
    difficulty: "Fácil",
    difficultyColor: "bg-tertiary",
    difficultyText: "text-tertiary",
    successRate: 92,
    rateColor: "bg-tertiary",
    rateText: "text-tertiary",
  },
  {
    id: "QZ-9012",
    text: "¿En qué año comenzó la Revolución Francesa?",
    added: "Hace 1 semana",
    category: "Historia",
    difficulty: "Media",
    difficultyColor: "bg-secondary",
    difficultyText: "text-secondary",
    successRate: 64,
    rateColor: "bg-secondary",
    rateText: "text-secondary",
  },
  {
    id: "QZ-4411",
    text: "Identifica al autor de 'El Enigma Cuántico'.",
    added: "Hace 2 semanas",
    category: "Literatura",
    difficulty: "Difícil",
    difficultyColor: "bg-error",
    difficultyText: "text-error",
    successRate: 21,
    rateColor: "bg-error",
    rateText: "text-error",
  },
];

const tableHeaders = [
  "Detalles de Pregunta",
  "Categoría",
  "Dificultad",
  "Tasa de Éxito",
  "Acciones",
];

export default function QuestionsPage() {
  return (
    <main className="flex-1 flex flex-col gap-8 min-w-0">
      {/* Encabezado */}
      <section className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6">
        <div>
          <h1 className="text-4xl font-extrabold text-on-surface tracking-tight leading-none mb-2">
            Banco de Preguntas
          </h1>
          <p className="text-on-surface-variant font-medium">
            Gestiona el banco de preguntas activo de Quizzly Pulse.
          </p>
        </div>
        {/* Crear nueva pregunta → backend: POST /api/admin/questions */}
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
        <div className="bg-surface-container-lowest p-6 rounded-lg flex flex-col justify-between h-32 border border-outline-variant/10">
          <span className="text-xs font-bold uppercase tracking-wider text-on-surface-variant">
            Total de Preguntas
          </span>
          <span className="text-4xl font-black text-primary">1,284</span>
        </div>
        <div className="bg-surface-container-lowest p-6 rounded-lg flex flex-col justify-between h-32 border border-outline-variant/10">
          <span className="text-xs font-bold uppercase tracking-wider text-on-surface-variant">
            Activas Este Mes
          </span>
          <span className="text-4xl font-black text-secondary">422</span>
        </div>
        <div className="bg-tertiary-container/30 p-6 rounded-lg flex flex-col justify-between h-32 border border-tertiary/10">
          <span className="text-xs font-bold uppercase tracking-wider text-on-tertiary-container">
            Precisión Promedio
          </span>
          <span className="text-4xl font-black text-tertiary">76%</span>
        </div>
      </div>

      {/* Filtros (componente cliente) */}
      <QuestionFilters />

      {/* Tabla */}
      <div className="bg-surface-container-lowest rounded-lg overflow-hidden shadow-sm border border-outline-variant/5">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-surface-container text-on-surface-variant">
                {tableHeaders.map((h, i) => (
                  <th
                    key={h}
                    className={`px-6 py-4 text-xs font-bold uppercase tracking-widest ${
                      i === tableHeaders.length - 1 ? "text-right" : ""
                    }`}
                  >
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="divide-y divide-surface-container">
              {questions.map((q) => (
                <tr
                  key={q.id}
                  className="hover:bg-surface-container-low transition-colors group"
                >
                  <td className="px-6 py-5">
                    <div className="flex flex-col gap-1">
                      <span className="font-semibold text-on-surface line-clamp-1">
                        {q.text}
                      </span>
                      <span className="text-xs text-on-surface-variant">
                        ID: #{q.id} • Agregada {q.added}
                      </span>
                    </div>
                  </td>
                  <td className="px-6 py-5">
                    <span className="px-3 py-1 rounded-full bg-surface-container-high text-on-surface text-xs font-bold">
                      {q.category}
                    </span>
                  </td>
                  <td className="px-6 py-5">
                    <div className="flex items-center gap-2">
                      <div className={`w-2 h-2 rounded-full ${q.difficultyColor}`} />
                      <span className={`text-xs font-semibold ${q.difficultyText}`}>
                        {q.difficulty}
                      </span>
                    </div>
                  </td>
                  <td className="px-6 py-5">
                    <div className="flex items-center gap-2">
                      <div className="w-16 h-1.5 bg-surface-container-highest rounded-full overflow-hidden">
                        <div
                          className={`${q.rateColor} h-full`}
                          style={{ width: `${q.successRate}%` }}
                        />
                      </div>
                      <span className={`text-xs font-bold ${q.rateText}`}>
                        {q.successRate}%
                      </span>
                    </div>
                  </td>
                  <td className="px-6 py-5 text-right">
                    <div className="flex justify-end gap-2">
                      {/* Editar pregunta → backend: GET /api/admin/questions/{id} */}
                      <button
                        aria-label={`Editar pregunta ${q.id}`}
                        className="p-2 hover:bg-primary-container/20 rounded-md text-primary transition-colors"
                      >
                        <span className="material-symbols-outlined text-[20px]">edit</span>
                      </button>
                      {/* Eliminar pregunta → backend: DELETE /api/admin/questions/{id} */}
                      <button
                        aria-label={`Eliminar pregunta ${q.id}`}
                        className="p-2 hover:bg-error-container/20 rounded-md text-error transition-colors"
                      >
                        <span className="material-symbols-outlined text-[20px]">delete</span>
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Paginación */}
        <div className="px-6 py-4 flex items-center justify-between border-t border-surface-container bg-surface-container-low/30">
          <span className="text-xs text-on-surface-variant font-medium">
            Mostrando 1 a 10 de 1,284 resultados
          </span>
          <div className="flex gap-2">
            {/* Paginación → backend: GET /api/admin/questions?page={n} */}
            <button className="px-3 py-1 rounded-md text-xs font-bold border border-outline-variant/30 text-on-surface-variant hover:bg-surface-container transition-colors">
              Anterior
            </button>
            <button className="px-3 py-1 rounded-md text-xs font-bold bg-primary text-on-primary">
              1
            </button>
            <button className="px-3 py-1 rounded-md text-xs font-bold border border-outline-variant/30 text-on-surface-variant hover:bg-surface-container transition-colors">
              2
            </button>
            <button className="px-3 py-1 rounded-md text-xs font-bold border border-outline-variant/30 text-on-surface-variant hover:bg-surface-container transition-colors">
              Siguiente
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}
