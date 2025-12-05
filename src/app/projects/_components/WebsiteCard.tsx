// サイト用カード表示
"use client";

import Image from "next/image";
import Link from "next/link";
import { Project } from "@/lib/types";

type Props = {
  project: Project;
};

export default function WebsiteCard({ project }: Props) {
  const techLabel =
    project.techStack && project.techStack.length > 0
      ? project.techStack.join(" / ")
      : null;

  return (
    <div className="rounded-2xl bg-white p-4 shadow-md">
      <div className="flex flex-col gap-4 md:flex-row md:items-stretch">
        {/* 左：サムネイル（詳細ページへリンク） */}
        <Link
          href={`/projects/${project.id}`}
          className="relative block w-full overflow-hidden rounded-2xl bg-slate-100 md:w-2/5"
        >
          <Image
            src={project.image}
            alt={project.title}
            width={800}
            height={500}
            className="h-full w-full object-cover"
          />
        </Link>

        {/* 右：テキスト＋ボタン縦並び */}
        <div className="flex flex-1 flex-col justify-between gap-3">
          <div>
            <Link href={`/projects/${project.id}`}>
              <h3 className="text-base font-semibold text-slate-900">
                {project.title}
              </h3>
            </Link>

            {techLabel && (
              <p className="mt-1 text-xs font-medium text-sky-700">
                {techLabel}
              </p>
            )}

            <p className="mt-2 text-sm text-slate-600">{project.description}</p>
          </div>

          <div className="mt-2 flex flex-wrap gap-2">
            {project.demoUrl && (
              <a
                href={project.demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-xl bg-blue-500 px-4 py-1.5 text-xs font-semibold text-white hover:bg-blue-600"
              >
                Visit Site
              </a>
            )}
            {project.caseStudyUrl && (
              <a
                href={project.caseStudyUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-xl border border-slate-300 px-4 py-1.5 text-xs font-semibold text-slate-700 hover:bg-slate-50"
              >
                Case Study
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
