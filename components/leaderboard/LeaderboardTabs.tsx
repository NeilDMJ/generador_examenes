"use client";

import { useState } from "react";

type Tab = "Global" | "Amigos";

const TABS: Tab[] = ["Global", "Amigos"];

export default function LeaderboardTabs() {
  const [activeTab, setActiveTab] = useState<Tab>("Global");

  return (
    <div className="flex bg-surface-container-high p-1 rounded-full w-fit">
      {TABS.map((tab) => (
        <button
          key={tab}
          onClick={() => setActiveTab(tab)}
          aria-pressed={activeTab === tab}
          className={
            activeTab === tab
              ? "px-8 py-2 rounded-full text-sm font-bold bg-surface-container-lowest text-primary shadow-sm transition-all"
              : "px-8 py-2 rounded-full text-sm font-bold text-on-surface-variant hover:text-on-surface transition-all"
          }
        >
          {tab}
        </button>
      ))}
    </div>
  );
}
