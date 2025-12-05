// メインページ：アプリ部分
"use client";

import Link from "next/link";
import Image from "next/image";
import type { Project } from "@/lib/types";

type HomeAppRailProps = {
  title: string;
  description: string;
  apps: Project[];
};

export function HomeAppRail({ title, description, apps }: HomeAppRailProps) {
  if (apps.length === 0) return null;

  return (
    <section className="space-y-3">
      <div className="flex items-baseline justify-between">
        <h2 className="text-lg font-semibold text-slate-900">{title}</h2>
        <p className="text-xs text-slate-500">{description}</p>
      </div>

      <div className="-mx-4 overflow-x-auto pb-2 no-scrollbar">
        <div className="flex gap-4 px-4">
          {apps.map((app) => (
            <Link
              key={app.id}
              href={`/projects/${app.id}`}
              className="flex min-w-[220px] max-w-[260px] flex-col rounded-2xl bg-white p-4 shadow-md"
            >
              <div className="relative h-20 w-20 overflow-hidden rounded-2xl bg-slate-100">
                <Image
                  src={app.image}
                  alt={app.title}
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="mt-3 text-sm font-semibold text-slate-900">
                {app.title}
              </h3>
              <p className="mt-1 line-clamp-2 text-xs text-slate-600">
                {app.description}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
