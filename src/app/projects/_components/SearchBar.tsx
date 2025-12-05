// 検索
"use client";

import type { ChangeEvent } from "react";

type SearchBarProps = {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
};

export function SearchBar({ value, onChange, placeholder }: SearchBarProps) {
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    onChange(event.target.value);
  };

  return (
    <div className="w-full">
      <label className="block text-xs font-semibold text-slate-500 mb-2">
        検索
      </label>
      <div className="flex items-center gap-2 rounded-2xl bg-slate-100 px-3 py-2 shadow-inner">
        <span className="text-slate-400 text-sm">🔍</span>
        <input
          type="search"
          value={value}
          onChange={handleChange}
          placeholder={placeholder ?? "アプリ・サイト名で検索"}
          className="w-full bg-transparent text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none"
        />
      </div>
    </div>
  );
}
