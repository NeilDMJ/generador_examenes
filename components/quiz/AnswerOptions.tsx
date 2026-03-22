"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

type Option = {
  id: string;
  label: string;
  text: string;
};

type AnswerOptionsProps = {
  options: Option[];
  quizId?: string;
  /** Llamado cuando el backend confirma la respuesta */
  onSubmit?: (selectedId: string) => void;
};

export default function AnswerOptions({ options, quizId = "demo", onSubmit }: AnswerOptionsProps) {
  const [selected, setSelected] = useState<string | null>(null);
  const router = useRouter();

  const handleSubmit = () => {
    if (selected) onSubmit?.(selected);
  };

  const handleQuit = () => {
    // Redirige al panel principal al salir del quiz
    router.push("/dashboard");
  };

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {options.map((opt) => {
          const isSelected = selected === opt.id;
          return (
            <button
              key={opt.id}
              onClick={() => setSelected(opt.id)}
              aria-pressed={isSelected}
              className={`group relative flex items-center justify-between p-6 rounded-md text-left transition-all duration-300 active:scale-[0.98] ${
                isSelected
                  ? "bg-primary shadow-md"
                  : "bg-surface-container-lowest hover:bg-primary"
              }`}
            >
              <div className="flex items-center gap-4">
                <span
                  className={`flex items-center justify-center w-10 h-10 rounded-full font-headline font-black text-lg transition-colors ${
                    isSelected
                      ? "bg-primary-container text-on-primary-container"
                      : "bg-surface-container-high text-on-surface-variant group-hover:bg-primary-container group-hover:text-on-primary-container"
                  }`}
                >
                  {opt.label}
                </span>
                <span
                  className={`font-body text-lg font-medium transition-colors ${
                    isSelected
                      ? "text-on-primary"
                      : "text-on-surface group-hover:text-on-primary"
                  }`}
                >
                  {opt.text}
                </span>
              </div>
              {isSelected ? (
                <span
                  className="material-symbols-outlined text-on-primary"
                  style={{ fontVariationSettings: "'FILL' 1" }}
                >
                  check_circle
                </span>
              ) : (
                <span className="material-symbols-outlined opacity-0 group-hover:opacity-100 text-on-primary transition-opacity">
                  arrow_forward
                </span>
              )}
            </button>
          );
        })}
      </div>

      {/* Barra de acciones */}
      <div className="flex justify-between items-center mt-4">
        {/* Salir del quiz → vuelve al panel */}
        <button
          onClick={handleQuit}
          className="flex items-center gap-2 px-6 py-3 text-on-surface-variant hover:text-error transition-colors font-semibold group"
        >
          <span className="material-symbols-outlined group-hover:rotate-12 transition-transform">
            exit_to_app
          </span>
          Salir del Quiz
        </button>
        <div className="flex items-center gap-4">
          {/* Omitir pregunta — backend registra skip */}
          <button
            className="px-8 py-3 text-on-surface font-semibold hover:bg-surface-container-high rounded-full transition-colors"
            onClick={() => setSelected(null)}
          >
            Omitir
          </button>
          {/*
            Enviar respuesta → backend: POST /api/quiz/{quizId}/answer
            Body: { questionId, answerId }
          */}
          <button
            onClick={handleSubmit}
            disabled={!selected}
            className="px-10 py-4 bg-gradient-to-br from-primary to-primary-container text-on-primary font-bold rounded-md shadow-lg shadow-primary/20 hover:shadow-primary/40 active:scale-95 transition-all disabled:opacity-40 disabled:cursor-not-allowed disabled:active:scale-100"
          >
            Confirmar Respuesta
          </button>
        </div>
      </div>
    </>
  );
}
