"use client";

import { useState, useEffect, useRef } from "react";

type QuizTimerProps = {
  initialSeconds: number;
  score: number;
  onTimeUp?: () => void;
};

export default function QuizTimer({
  initialSeconds,
  score,
  onTimeUp,
}: QuizTimerProps) {
  const [seconds, setSeconds] = useState(initialSeconds);
  const onTimeUpRef = useRef(onTimeUp);

  // Keep ref stable to avoid effect re-runs
  useEffect(() => {
    onTimeUpRef.current = onTimeUp;
  });

  useEffect(() => {
    if (seconds <= 0) {
      onTimeUpRef.current?.();
      return;
    }

    const id = setInterval(() => {
      setSeconds((s) => s - 1);
    }, 1000);

    return () => clearInterval(id);
  }, [seconds]);

  const isUrgent = seconds <= 10;

  return (
    <div className="flex items-center gap-6 bg-surface-container-low px-6 py-3 rounded-full shadow-sm">
      <div className="flex items-center gap-2">
        <span
          className={`material-symbols-outlined ${isUrgent ? "text-error" : "text-secondary"} transition-colors`}
        >
          timer
        </span>
        <span
          className={`font-headline font-bold text-2xl tabular-nums transition-colors ${
            isUrgent ? "text-error" : "text-on-surface"
          }`}
        >
          {seconds}s
        </span>
      </div>
      <div className="w-px h-6 bg-outline-variant/30" />
      <div className="flex items-center gap-2">
        <span className="material-symbols-outlined text-tertiary">bolt</span>
        <span className="font-headline font-bold text-2xl text-on-surface">
          {score.toLocaleString()}
        </span>
      </div>
    </div>
  );
}
