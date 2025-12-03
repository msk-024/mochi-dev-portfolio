// アプリ用カード表示
import Image from "next/image";
import { Project } from "@/lib/types";
import Link from "next/link";

type Props = {
  project: Project;
};

export default function AppCard({ project }: Props) {
  return (
    <div className="bg-white rounded-xl shadow p-4 flex flex-col items-center">
      <Link
        href={`/projects/${project.id}`}
        className="w-full text-center cursor-pointer flex flex-col items-center"
      >
        <Image
          src={project.image}
          alt={project.title}
          width={120}
          height={120}
          className="rounded-lg object-cover h-auto aspect-square"
        />
        <h3 className="mt-3 text-lg font-semibold">{project.title}</h3>
        <p className="text-sm text-gray-600 text-center mt-1">
          {project.description}
        </p>
      </Link>
      <div className="flex gap-4 mt-3">
        {project.demoUrl && (
          <a
            href={project.demoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2 bg-blue-600 text-white text-sm rounded-4xl hover:opacity-90"
          >
            Live Demo
          </a>
        )}
        {project.githubUrl && (
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2 bg-gray-800 text-white text-sm rounded-4xl hover:opacity-90"
          >
            GitHub
          </a>
        )}
      </div>
    </div>
  );
}
