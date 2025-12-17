// app集
import type { Project } from "@/lib/types";

export const appProjects: Project[] = [
  {
    id: "app1",
    type: "app",
    domain: "nurse",
    title: "Todo Master",
    description: "シンプルなタスク管理アプリ",
    image: "/images/aboutsecondbgsp.jpg",
    gallery: ["/images/app1-1.jpg", "/images/app1-2.jpg", "/images/app1-3.jpg"],
    demoUrl: "",
    githubUrl: "#",
    overview:
      "日々の看護業務で発生する『抜け漏れ』を減らすために作ったタスク管理アプリです。",
    features: [
      "タスクの追加・編集・削除",
      "優先度・締切日の設定",
      "完了タスクの一括アーカイブ",
    ],
    techStack: ["React", "TypeScript", "Next.js", "Tailwind CSS"],
    uiHighlights:
      "モバイル前提で、大きめボタンと視線の流れを意識したカードUIにしました。",
    medicalInsights:
      "ナースステーションで片手でも操作しやすいよう、タップ範囲と配色コントラストを調整しています。",
    story:
      "夜勤中のメモが煩雑になりがちで、『メモ帳よりタスク特化のUIがほしい』という課題感から作り始めました。",
    roadmap: ["タグ機能の追加", "シフト表との連携", "通知リマインド機能"],
  },
  {
    id: "app2",
    type: "app",
    domain: "tools",
    title: "Weather Now",
    description: "天気予報アプリ（React + API）",
    image: "/images/bangkokbgsp.jpg",
    gallery: ["/images/app1-1.jpg", "/images/app1-2.jpg", "/images/app1-3.jpg"],
    demoUrl: "#",
    githubUrl: "#",
    details:
      "ReactとTypeScriptで作成。状態管理とフォーム処理に苦労しましたが、Context APIで整理しました。",
  },
  {
    id: "app3",
    type: "app",
    domain: "tools",
    title: "Finance Tracker",
    description: "収支管理アプリ",
    image: "/images/classbgsp.jpg",
    gallery: ["/images/app1-1.jpg", "/images/app1-2.jpg", "/images/app1-3.jpg"],
    demoUrl: "#",
    githubUrl: "#",
    details:
      "ReactとTypeScriptで作成。状態管理とフォーム処理に苦労しましたが、Context APIで整理しました。",
  },
];
