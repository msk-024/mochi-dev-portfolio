// 各プロジェクト詳細ページ（サーバー側）

import { notFound } from "next/navigation";
import { projects } from "@/lib/projects";
import type { Project } from "@/lib/types";
import { ProjectDetailClient } from "./ProjectDetailClient";

type Props = { params: { id: string } };

export default function ProjectDetailPage({ params }: Props) {
  const project = projects.find((p) => p.id === params.id);

  if (!project) {
    // Next.js 標準の 404 に飛ばす（サーバーコンポーネントのみで使用可）
    notFound();
  }
  return <ProjectDetailClient project={project as Project} />;
}
