// 作成物一覧ページ
// src/app/projects/page.tsx
"use client";

import { useMemo, useState } from "react";
import { projects } from "@/lib/projects";
import AppCard from "./_components/AppCard";
import WebsiteCard from "./_components/WebsiteCard";
import { SearchBar } from "./_components/SearchBar";

type TabKey = "all" | "nurse" | "tools" | "web";

export default function ProjectsPage() {
  const [activeTab, setActiveTab] = useState<TabKey>("all");
  const [searchQuery, setSearchQuery] = useState("");

  // 1️⃣ 検索クエリで絞り込み
  const searchedProjects = useMemo(() => {
    const q = searchQuery.trim().toLowerCase();
    if (!q) return projects;

    return projects.filter((project) => {
      const text = `${project.title} ${project.description ?? ""}`.toLowerCase();
      return text.includes(q);
    });
  }, [searchQuery]);

  // 2️⃣ タブ（ドメイン）で絞り込み
  const domainFilteredProjects = useMemo(() => {
    if (activeTab === "all") return searchedProjects;
    return searchedProjects.filter((project) => project.domain === activeTab);
  }, [searchedProjects, activeTab]);

  // 3️⃣ Apps / Websites に分割（表示用）
  const appProjects = domainFilteredProjects.filter((p) => p.type === "app");
  const websiteProjects = domainFilteredProjects.filter(
    (p) => p.type === "website"
  );

  const handleTabClick = (tab: TabKey) => {
    setActiveTab(tab);
  };

  const tabLabelMap: Record<TabKey, string> = {
    all: "All",
    nurse: "Nurse",
    tools: "Tools",
    web: "Web",
  };

  const tabDescriptionMap: Record<TabKey, string> = {
    all: "看護アプリ・開発ツール・Web制作をまとめて一覧できます。",
    nurse: "看護業務や医療現場の課題感から生まれたアプリ群です。",
    tools: "開発効率や日常の作業を楽にするためのユーティリティです。",
    web: "デザインと情報設計にこだわった Web サイト・LP の制作実績です。",
  };

  const currentTabDescription = tabDescriptionMap[activeTab];

  const hasAnyProject = appProjects.length > 0 || websiteProjects.length > 0;

  return (
    <div className="min-h-screen px-4 py-8">
      <div className="mx-auto max-w-5xl space-y-8">
        {/* ヘッダー */}
        <header className="space-y-3">
          <h1 className="text-2xl font-bold text-slate-900">Projects</h1>
          <p className="text-sm text-slate-600">
            Nurse Developer としてのアウトプットを、
            医療アプリ・開発ツール・Web制作の 3 軸でまとめています。
          </p>
        </header>

        {/* 検索バー */}
        <SearchBar
          value={searchQuery}
          onChange={setSearchQuery}
          placeholder="アプリ・サイト名で検索"
        />

        {/* タブナビ（ドメイン軸） */}
        <div className="flex flex-wrap gap-3 pt-2">
          {(["all", "nurse", "tools", "web"] as TabKey[]).map((tab) => (
            <button
              key={tab}
              onClick={() => handleTabClick(tab)}
              className={`rounded-full px-4 py-2 text-sm font-semibold transition ${
                activeTab === tab
                  ? "bg-blue-600 text-white shadow-sm"
                  : "bg-slate-200 text-slate-700 hover:bg-slate-300"
              }`}
            >
              {tabLabelMap[tab]}
            </button>
          ))}
        </div>

        {/* タブ説明テキスト */}
        <p className="text-xs text-slate-500">{currentTabDescription}</p>

        {/* コンテンツ */}
        {!hasAnyProject ? (
          <p className="pt-4 text-xs text-slate-400">
            条件に一致するプロジェクトがありません。
          </p>
        ) : activeTab === "all" ? (
          // All タブ：Appsセクション + Websitesセクション
          <div className="space-y-10 pt-2">
            {appProjects.length > 0 && (
              <section>
                <h2 className="mb-4 text-sm font-semibold text-slate-500">
                  Apps
                </h2>
                <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3">
                  {appProjects.map((project) => (
                    <AppCard key={project.id} project={project} />
                  ))}
                </div>
              </section>
            )}

            {websiteProjects.length > 0 && (
              <section>
                <h2 className="mb-4 text-sm font-semibold text-slate-500">
                  Websites
                </h2>
                <div className="space-y-4">
                  {websiteProjects.map((project) => (
                    <WebsiteCard key={project.id} project={project} />
                  ))}
                </div>
              </section>
            )}
          </div>
        ) : (
          // Nurse / Tools / Web タブ：Apps / Websites があれば両方出す
          <div className="space-y-10 pt-2">
            {appProjects.length > 0 && (
              <section>
                <h2 className="mb-4 text-sm font-semibold text-slate-500">
                  Apps
                </h2>
                <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3">
                  {appProjects.map((project) => (
                    <AppCard key={project.id} project={project} />
                  ))}
                </div>
              </section>
            )}

            {websiteProjects.length > 0 && (
              <section>
                <h2 className="mb-4 text-sm font-semibold text-slate-500">
                  Websites
                </h2>
                <div className="space-y-4">
                  {websiteProjects.map((project) => (
                    <WebsiteCard key={project.id} project={project} />
                  ))}
                </div>
              </section>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
