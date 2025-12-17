// メインページ
"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { projects } from "@/lib/projects/index";
import { HomeAppRail } from "./_components/home/HomeAppRail";
import { HomeWebRail } from "./_components/home/HomeWebRail";

export default function Home() {
  const heroApps = projects.filter((p) => p.type === "app").slice(0, 3);

  const nurseApps = projects.filter(
    (p) => p.domain === "nurse" && p.type === "app"
  );
  const toolApps = projects.filter(
    (p) => p.domain === "tools" && p.type === "app"
  );
  const webProjects = projects.filter((p) => p.domain === "web");

  return (
    <div className="min-h-screen px-4 pb-12">
      <div className="mx-auto flex max-w-5xl flex-col gap-10">
        {/* HEROセクション（Todayタブの一番上） */}
        <motion.section
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="rounded-3xl bg-white p-6 shadow-md md:p-8"
        >
          <div className="grid gap-8 md:grid-cols-2 md:items-center">
            {/* 左：テキスト */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
              className="space-y-4"
            >
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-blue-600">
                Nurse × Developer
              </p>
              <h1 className="text-2xl font-bold tracking-tight text-slate-900 md:text-3xl">
                看護の現場感で設計した、
                <br />
                実務で使える Web アプリたち。
              </h1>
              <p className="text-sm leading-relaxed text-slate-600">
                ベッドサイド、ナースステーション、在宅看護など、
                実際の現場シーンを前提に UI/UX を設計した 「Nurse
                Developer」としてのポートフォリオです。
              </p>

              <div className="flex flex-wrap gap-3 pt-2">
                <Link
                  href="/projects"
                  className="rounded-full bg-blue-600 px-5 py-2.5 text-sm font-semibold text-white shadow hover:bg-blue-700"
                >
                  プロジェクト一覧を見る
                </Link>
                <Link
                  href="/contact"
                  className="rounded-full border border-slate-300 px-5 py-2.5 text-sm font-semibold text-slate-700 hover:bg-slate-50"
                >
                  お問い合わせ
                </Link>
              </div>

              <p className="pt-2 text-xs text-slate-500">
                医療系アプリの UI/UX 設計、看護視点での改善提案など、
                現場に寄り添った開発パートナーとしての実績をまとめています。
              </p>
            </motion.div>

            {/* 右：App Store風の簡易プレビューカード群 */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
              className="relative"
            >
              {/* ほんのり背景のニュアンスレイヤー（グラデ難しければこのままでOK） */}
              <div className="pointer-events-none absolute inset-0 rounded-3xl bg-blue-50/70 blur-[2px]" />

              <div className="relative space-y-3 rounded-2xl bg-white/80 p-4 shadow-md ring-1 ring-slate-100">
                {heroApps.map((app) => (
                  <motion.div
                    key={app.id}
                    whileHover={{ scale: 1.03 }}
                    transition={{ type: "spring", stiffness: 260, damping: 18 }}
                    className="flex items-center justify-between gap-3 rounded-2xl bg-slate-50/80 px-3 py-2"
                  >
                    <div className="flex items-center gap-3">
                      <div className="relative h-10 w-10 overflow-hidden rounded-2xl bg-slate-200">
                        <Image
                          src={app.image}
                          alt={app.title}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div className="flex flex-col">
                        <span className="text-xs font-semibold text-slate-900">
                          {app.title}
                        </span>
                        <span className="line-clamp-1 text-[11px] text-slate-500">
                          {app.description}
                        </span>
                      </div>
                    </div>
                    <Link
                      href={`/projects/${app.id}`}
                      className="rounded-full bg-blue-600 px-3 py-1 text-[11px] font-semibold text-white hover:bg-blue-700"
                    >
                      詳細
                    </Link>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </motion.section>

        {/* Nurse Apps セクション（横スクロール） */}
        <HomeAppRail
          title="Nurse Apps"
          description="看護業務や医療現場の課題感から生まれたツールたち。"
          apps={nurseApps}
        />

        {/* Dev & Tools セクション（横スクロール） */}
        <HomeAppRail
          title="Dev & Tools"
          description="開発練習やユーティリティとして作ったアプリたち。"
          apps={toolApps}
        />

        {/* Web制作 セクション（横スクロール） */}
        <HomeWebRail
          title="Web制作"
          description="デザイン性や情報設計を意識して制作した Web サイト・LP。"
          projects={webProjects}
        />

        {/* Mini About セクション */}
        <section className="mt-4 rounded-3xl bg-white p-6 shadow-md">
          <div className="flex flex-col gap-4 md:flex-row md:items-center">
            <div className="flex-1 space-y-2">
              <h2 className="text-lg font-semibold text-slate-900">About</h2>
              <p className="text-sm text-slate-600">
                現役の産業看護師としての経験を活かし、
                看護師・医療従事者が日々使うツールを「現場目線」で設計しています。
                小さな使い勝手の差が、ヒヤリハットやミスの予防につながる——
                そんな UI/UX を目指しています。
              </p>
              <Link
                href="/about"
                className="inline-flex text-xs font-semibold text-blue-600 hover:underline"
              >
                プロフィール・スキルを見る
              </Link>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="mt-2 pb-4 text-center text-[11px] text-slate-400">
          <p>Mocchi Portfolio — Nurse × Developer</p>
          <p className="mt-1">© {new Date().getFullYear()} Mocchi</p>
        </footer>
      </div>
    </div>
  );
}
