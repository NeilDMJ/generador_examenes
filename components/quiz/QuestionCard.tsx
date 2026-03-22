type QuestionCardProps = {
  category: string;
  question: string;
};

export default function QuestionCard({ category, question }: QuestionCardProps) {
  return (
    <div className="bg-surface-container-low rounded-lg p-10 md:p-16 relative shadow-lg overflow-hidden">
      <div className="absolute top-0 right-0 p-4 opacity-10">
        <span className="material-symbols-outlined text-[120px]">quiz</span>
      </div>
      <div className="relative z-10 flex flex-col gap-6">
        <div className="inline-flex items-center gap-2 bg-surface-container-highest self-start px-4 py-1 rounded-full text-on-surface-variant">
          <span className="material-symbols-outlined text-[18px]">category</span>
          <span className="font-label text-xs font-bold uppercase tracking-wider">
            {category}
          </span>
        </div>
        <h1 className="font-headline text-3xl md:text-4xl font-bold text-on-surface leading-tight">
          {question}
        </h1>
      </div>
    </div>
  );
}
