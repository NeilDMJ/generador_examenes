type QuizProgressProps = {
  current: number;
  total: number;
};

export default function QuizProgress({ current, total }: QuizProgressProps) {
  const percent = (current / total) * 100;

  return (
    <div className="flex flex-col gap-2 w-full md:w-64">
      <div className="flex justify-between items-baseline">
        <span className="font-headline text-primary font-extrabold text-xl">
          Pregunta {String(current).padStart(2, "0")}
        </span>
        <span className="font-label text-on-surface-variant text-sm font-semibold tracking-widest uppercase">
          de {total}
        </span>
      </div>
      <div className="h-2 w-full bg-surface-container-highest rounded-full overflow-hidden">
        <div
          className="h-full bg-gradient-to-r from-secondary to-secondary-fixed-dim rounded-full transition-all duration-500"
          style={{ width: `${percent}%` }}
        />
      </div>
    </div>
  );
}
