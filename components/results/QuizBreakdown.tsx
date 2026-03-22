type BreakdownItem = {
  questionNumber: number;
  question: string;
  correct: boolean;
  correctAnswer: string;
  yourAnswer?: string;
  points: number;
};

type QuizBreakdownProps = {
  items: BreakdownItem[];
};

export default function QuizBreakdown({ items }: QuizBreakdownProps) {
  return (
    <div className="space-y-6">
      {items.map((item) => (
        <div
          key={item.questionNumber}
          className={`flex gap-4 items-start p-4 rounded-xl ${
            item.correct ? "bg-tertiary/5" : "bg-error/5"
          }`}
        >
          <div
            className={`mt-1 w-8 h-8 rounded-full flex items-center justify-center shrink-0 ${
              item.correct ? "bg-tertiary" : "bg-error"
            }`}
          >
            <span
              className={`material-symbols-outlined text-sm ${
                item.correct ? "text-on-tertiary" : "text-on-error"
              }`}
              style={{ fontVariationSettings: "'FILL' 1" }}
            >
              {item.correct ? "check" : "close"}
            </span>
          </div>
          <div className="flex-grow">
            <div className="flex justify-between items-center mb-1">
              <span
                className={`font-label text-[10px] font-bold uppercase tracking-widest ${
                  item.correct ? "text-tertiary" : "text-error"
                }`}
              >
                Pregunta {String(item.questionNumber).padStart(2, "0")}
              </span>
              <span className="font-label text-xs font-semibold text-on-surface-variant">
                {item.correct ? `+${item.points} pts` : "0 pts"}
              </span>
            </div>
            <p className="font-headline text-on-surface font-semibold text-sm leading-snug">
              {item.question}
            </p>
            {item.correct ? (
              <div className="mt-2 text-xs font-medium text-tertiary">
                Correcto: {item.correctAnswer}
              </div>
            ) : (
              <div className="mt-2 flex flex-col gap-1">
                <div className="text-xs font-medium text-error flex items-center gap-1">
                  <span className="material-symbols-outlined text-[12px]">cancel</span>
                  Tu respuesta: {item.yourAnswer}
                </div>
                <div className="text-xs font-medium text-tertiary flex items-center gap-1">
                  <span className="material-symbols-outlined text-[12px]">check_circle</span>
                  Correcto: {item.correctAnswer}
                </div>
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}
