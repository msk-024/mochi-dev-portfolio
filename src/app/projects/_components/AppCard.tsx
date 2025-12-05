// アプリ用カード表示
import Image from "next/image";
import Link from "next/link";
import { Project } from "@/lib/types";


type Props = {
  project: Project;
};

export default function AppCard({ project }: Props) {
  return (
    <div className="bg-white rounded-2xl shadow-md p-4 flex flex-col justify-between items-center">
      {/* 上部：アイコン＋タイトル＋説明（全体クリックで詳細へ） */}
      <Link
        href={`/projects/${project.id}`}
        className="w-full text-center cursor-pointer flex flex-col items-center"
      >
        <div className="relative h-24 w-24 overflow-hidden rounded-2xl bg-slate-100">
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover"
          />
        </div>
        <h3 className="mt-3 text-sm font-semibold text-slate-900">
          {project.title}
        </h3>
        <p className="mt-1 line-clamp-2 text-xs text-slate-600">
          {project.description}
        </p>
      </Link>
      {/* 下部：ボタン群 */}
      <div className="mt-4 flex flex-wrap justify-center gap-2">
        {project.demoUrl && (
          <a
            href={project.demoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-xl bg-blue-500 px-4 py-1.5 text-xs font-semibold text-white hover:bg-blue-600"
          >
            Live Demo
          </a>
        )}
        {project.githubUrl && (
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-xl border border-slate-300 px-4 py-1.5 text-xs font-semibold text-slate-700 hover:bg-slate-50"
          >
            GitHub
          </a>
        )}
      </div>
    </div>
  );
}
