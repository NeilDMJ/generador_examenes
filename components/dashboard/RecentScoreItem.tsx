type RecentScoreItemProps = {
  category: string;
  categoryColor: string;
  borderColor: string;
  barColor: string;
  time: string;
  title: string;
  score: number;
};

export default function RecentScoreItem({
  category,
  categoryColor,
  borderColor,
  barColor,
  time,
  title,
  score,
}: RecentScoreItemProps) {
  return (
    <div
      className={`bg-surface-container-lowest p-4 rounded-md shadow-sm border-l-4 ${borderColor}`}
    >
      <div className="flex justify-between mb-2">
        <span
          className={`text-xs font-bold uppercase tracking-wider ${categoryColor} font-label`}
        >
          {category}
        </span>
        <span className="text-xs text-on-surface-variant font-medium">
          {time}
        </span>
      </div>
      <div className="flex items-center justify-between">
        <span className="font-bold text-on-surface">{title}</span>
        <span className="text-lg font-black text-on-surface">{score}%</span>
      </div>
      <div className="mt-3 w-full bg-surface-container-highest h-1.5 rounded-full overflow-hidden">
        <div
          className={`h-full ${barColor}`}
          style={{ width: `${score}%` }}
        />
      </div>
    </div>
  );
}
