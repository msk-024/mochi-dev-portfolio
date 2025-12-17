"use client";

export type DomainTabKey = "all" | "nurse" | "tools" | "web";

type DomainTabsProps = {
  activeTab: DomainTabKey;
  onChange: (tab: DomainTabKey) => void;
};

const TAB_LABEL_MAP: Record<DomainTabKey, string> = {
  all: "All",
  nurse: "Nurse",
  tools: "Tools",
  web: "Web",
};

export function DomainTabs({ activeTab, onChange }: DomainTabsProps) {
  const tabs: DomainTabKey[] = ["all", "nurse", "tools", "web"];

  return (
    <div className="flex flex-wrap gap-3 pt-2">
      {tabs.map((tab) => (
        <button
          key={tab}
          onClick={() => onChange(tab)}
          className={`rounded-full px-4 py-2 text-sm font-semibold transition ${
            activeTab === tab
              ? "bg-blue-600 text-white shadow-sm"
              : "bg-slate-200 text-slate-700 hover:bg-slate-300"
          }`}
        >
          {TAB_LABEL_MAP[tab]}
        </button>
      ))}
    </div>
  );
}
