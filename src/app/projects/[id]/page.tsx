// 各プロジェクト詳細ページ
import { notFound } from "next/navigation";
import { projects } from "@/lib/projects";
import Image from "next/image";

type Props = { params: { id: string } };

export default function ProjectDetail({ params }: Props) {
  const project = projects.find((p) => p.id === params.id);

  if (!project) {
    // Next.js 標準の 404 に飛ばす
    notFound();
  }

  return (
    <main className="min-h-screen bg-gray-50 px-4 py-8">
      <div className="mx-auto flex max-w-5xl flex-col gap-10">
        {/* HERO：アイコン + タイトル + ボタン */}
        <section className="rounded-2xl bg-white p-6 shadow-md">
          <div className="flex flex-col gap-6 sm:flex-row sm:items-center">
            <Image
              src={project.image}
              alt={project.title}
              width={128}
              height={128}
              className="aspect-square rounded-2xl object-cover"
            />
            <div className="flex-1 space-y-3">
              <div>
                <h1 className="text-2xl font-bold">{project.title}</h1>
                {project.subtitle && (
                  <p className="text-sm text-gray-500 mt-1">
                    {project.subtitle}
                  </p>
                )}
              </div>
              <p className="text-gray-700">{project.description}</p>

              <div className="flex flex-wrap gap-3 pt-2">
                {project.demoUrl && (
                  <a
                    href={project.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-full bg-blue-600 px-5 py-2.5 text-sm font-semibold text-white shadow hover:bg-blue-700"
                  >
                    Live Demo
                  </a>
                )}
                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-full bg-gray-900 px-5 py-2.5 text-sm font-semibold text-white hover:bg-gray-800"
                  >
                    GitHub
                  </a>
                )}
              </div>
            </div>
          </div>
        </section>

        {/* Screenshots（後でライブラリ化候補） */}
        {project.gallery && project.gallery.length > 0 && (
          <section className="max-w-5xl mx-auto w-full">
            <h2 className="mb-3 text-lg font-semibold">Screenshots</h2>
            <div className="flex gap-4 overflow-x-auto pb-4">
              {project.gallery.map((src, idx) => (
                <Image
                  key={idx}
                  src={src}
                  alt={`${project.title} screenshot ${idx + 1}`}
                  width={320}
                  height={640}
                  className="h-auto w-56 flex-none rounded-xl object-cover shadow"
                />
              ))}
            </div>
          </section>
        )}

        {/* Overview / Details */}
        {(project.overview || project.details) && (
          <section className="rounded-2xl bg-white p-6 shadow-md">
            <h2 className="mb-3 text-lg font-semibold">概要</h2>
            <p className="text-gray-700 leading-relaxed">
              {project.overview ?? project.details}
            </p>
          </section>
        )}

        {/* Features */}
        {project.features && project.features.length > 0 && (
          <section className="rounded-2xl bg-white p-6 shadow-md">
            <h2 className="mb-3 text-lg font-semibold">主な機能</h2>
            <ul className="list-disc space-y-1 pl-5 text-gray-700">
              {project.features.map((feature) => (
                <li key={feature}>{feature}</li>
              ))}
            </ul>
          </section>
        )}

        {/* Tech Stack */}
        {project.techStack && project.techStack.length > 0 && (
          <section className="rounded-2xl bg-white p-6 shadow-md">
            <h2 className="mb-3 text-lg font-semibold">使用技術</h2>
            <div className="flex flex-wrap gap-2">
              {project.techStack.map((tech) => (
                <span
                  key={tech}
                  className="rounded-full bg-blue-50 px-3 py-1 text-xs font-medium text-blue-700"
                >
                  {tech}
                </span>
              ))}
            </div>
          </section>
        )}

        {/* UI / Medical POV / Story / Roadmap も「受け皿」だけ用意 */}
        {project.uiHighlights && (
          <section className="rounded-2xl bg-white p-6 shadow-md">
            <h2 className="mb-3 text-lg font-semibold">UI の工夫</h2>
            <p className="text-gray-700 leading-relaxed">
              {project.uiHighlights}
            </p>
          </section>
        )}

        {project.medicalInsights && (
          <section className="rounded-2xl bg-white p-6 shadow-md">
            <h2 className="mb-3 text-lg font-semibold">
              医療視点での工夫・改善点
            </h2>
            <p className="text-gray-700 leading-relaxed">
              {project.medicalInsights}
            </p>
          </section>
        )}

        {project.story && (
          <section className="rounded-2xl bg-white p-6 shadow-md">
            <h2 className="mb-3 text-lg font-semibold">開発ストーリー</h2>
            <p className="text-gray-700 leading-relaxed">{project.story}</p>
          </section>
        )}

        {project.roadmap && project.roadmap.length > 0 && (
          <section className="rounded-2xl bg-white p-6 shadow-md">
            <h2 className="mb-3 text-lg font-semibold">今後のアップデート</h2>
            <ul className="list-disc space-y-1 pl-5 text-gray-700">
              {project.roadmap.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </section>
        )}
      </div>
    </main>
  );
}
