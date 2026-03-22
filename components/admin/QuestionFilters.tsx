"use client";

import { useState } from "react";

type QuestionFiltersProps = {
  onFilter?: (search: string, category: string, difficulty: string) => void;
};

export default function QuestionFilters({ onFilter }: QuestionFiltersProps) {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("all");
  const [difficulty, setDifficulty] = useState("all");

  const handleChange = (
    s: string = search,
    c: string = category,
    d: string = difficulty
  ) => {
    onFilter?.(s, c, d);
  };

  return (
    <div className="flex flex-col md:flex-row gap-4 items-center bg-surface-container-low p-4 rounded-lg">
      <div className="relative flex-1 w-full">
        <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-on-surface-variant">
          search
        </span>
        <input
          className="w-full bg-surface-container-lowest border-none rounded-md pl-10 pr-4 py-3 focus:ring-2 focus:ring-primary/20 text-sm outline-none text-on-surface placeholder:text-outline-variant"
          placeholder="Buscar por texto de pregunta o ID..."
          type="text"
          value={search}
          onChange={(e) => {
            setSearch(e.target.value);
            handleChange(e.target.value);
          }}
        />
      </div>
      <div className="flex gap-2 w-full md:w-auto">
        <select
          className="bg-surface-container-lowest border-none rounded-md px-4 py-3 text-sm focus:ring-2 focus:ring-primary/20 outline-none text-on-surface"
          value={category}
          onChange={(e) => {
            setCategory(e.target.value);
            handleChange(undefined, e.target.value);
          }}
        >
          <option value="all">Todas las Categorías</option>
          <option value="science">Ciencia</option>
          <option value="history">Historia</option>
          <option value="literature">Literatura</option>
          <option value="pop-culture">Cultura Pop</option>
          <option value="sports">Deportes</option>
        </select>
        <select
          className="bg-surface-container-lowest border-none rounded-md px-4 py-3 text-sm focus:ring-2 focus:ring-primary/20 outline-none text-on-surface"
          value={difficulty}
          onChange={(e) => {
            setDifficulty(e.target.value);
            handleChange(undefined, undefined, e.target.value);
          }}
        >
          <option value="all">Dificultad</option>
          <option value="easy">Fácil</option>
          <option value="medium">Media</option>
          <option value="hard">Difícil</option>
        </select>
      </div>
    </div>
  );
}
