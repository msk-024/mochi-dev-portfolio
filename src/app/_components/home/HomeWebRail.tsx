// メインページ：サイト部分
"use client";

import Link from "next/link";
import Image from "next/image";
import type { Project } from "@/lib/types";

type HomeWebRailProps = {
  title: string;
  description: string;
  projects: Project[];
};

export function HomeWebRail({
  title,
  description,
  projects,
}: HomeWebRailProps) {
  if (projects.length === 0) return null;

  return (
    <section className="space-y-3">
      <div className="flex items-baseline justify-between">
        <h2 className="text-lg font-semibold text-slate-900">{title}</h2>
        <p className="text-xs text-slate-500">{description}</p>
      </div>

      <div className="-mx-4 overflow-x-auto pb-2 no-scrollbar">
        <div className="flex gap-4 px-4">
          {projects.map((site) => (
            <Link
              key={site.id}
              href={`/projects/${site.id}`}
              className="flex min-w-[260px] max-w-[320px] flex-col rounded-2xl bg-white p-4 shadow-md"
            >
              <div className="relative h-28 w-full overflow-hidden rounded-2xl bg-slate-100">
                <Image
                  src={site.image}
                  alt={site.title}
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="mt-3 text-sm font-semibold text-slate-900">
                {site.title}
              </h3>
              <p className="mt-1 line-clamp-2 text-xs text-slate-600">
                {site.description}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
