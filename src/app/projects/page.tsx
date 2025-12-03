"use client";

import { useState } from "react";
import AppCard from "@/components/AppCard";
import WebsiteCard from "@/components/WebsiteCard";
import { projects } from "@/lib/projects";

export default function ProjectsPage() {
  const [activeTab, setActiveTab] = useState<"all" | "apps" | "websites">(
    "all"
  );

  const appProjects = projects.filter((p) => p.type === "app");
  const websiteProjects = projects.filter((p) => p.type === "website");

  return (
    <main className="min-h-screen p-8 bg-gray-50 space-y-12">
      {/* タブナビ */}
      <div className="flex gap-4 mb-6">
        {["all", "apps", "websites"].map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab as typeof activeTab)}
            className={`px-4 py-2 rounded-full text-sm font-semibold transition ${
              activeTab === tab
                ? "bg-blue-600 text-white"
                : "bg-gray-200 text-gray-700 hover:bg-gray-300"
            }`}
          >
            {tab.charAt(0).toUpperCase() + tab.slice(1)}
          </button>
        ))}
      </div>

      {/* タブごとの表示 */}
      {activeTab === "all" && (
        <>
          {/* Appsセクション */}
          <section>
            <h2 className="text-2xl font-bold mb-6">Apps</h2>
            <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3">
              {appProjects.map((project) => (
                <AppCard key={project.id} project={project} />
              ))}
            </div>
          </section>

          {/* Websitesセクション */}
          <section>
            <h2 className="text-2xl font-bold mb-6">Websites</h2>
            <div className="space-y-6">
              {websiteProjects.map((project) => (
                <WebsiteCard key={project.id} project={project} />
              ))}
            </div>
          </section>
        </>
      )}

      {activeTab === "apps" && (
        <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3">
          {appProjects.map((project) => (
            <AppCard key={project.id} project={project} />
          ))}
        </div>
      )}

      {activeTab === "websites" && (
        <div className="space-y-6">
          {websiteProjects.map((project) => (
            <WebsiteCard key={project.id} project={project} />
          ))}
        </div>
      )}
    </main>
  );
}
