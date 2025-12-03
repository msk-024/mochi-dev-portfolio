// サイト用カード表示
import Image from "next/image";
import { Project } from "@/lib/types";
import Link from "next/link";

type Props = {
  project: Project;
};

export default function WebsiteCard({ project }: Props) {
  return (
    <div className="bg-white rounded-xl shadow">
      <div className="p-4 flex flex-col md:flex-row overflow-hidden">
        <Link
          href={`/projects/${project.id}`}
          className="w-full text-center cursor-pointer flex items-start"
        >
          <Image
            src={project.image}
            alt={project.title}
            width={400}
            height={250}
            className="object-cover h-auto aspect-[8/5] rounded-lg"
          />
          <div className="p-4 flex flex-col items-start">
            <h3 className="text-lg font-semibold">{project.title}</h3>
            <p className="text-sm text-gray-600 mt-1">{project.description}</p>
          </div>
        </Link>
        <div className="flex flex-col gap-4 p-4 justify-center w-1/5 ml-3">
          {project.demoUrl && (
            <a
              href={project.demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2 bg-blue-600 text-white text-sm rounded-4xl hover:opacity-90"
            >
              Visit Site
            </a>
          )}
          {project.caseStudyUrl && (
            <a
              href={project.caseStudyUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2 bg-gray-800 text-white text-sm rounded-4xl hover:opacity-90"
            >
              Case Study
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
