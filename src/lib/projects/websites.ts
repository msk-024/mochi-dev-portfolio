// Webサイト集
import type { Project } from "@/lib/types";

export const websiteProjects: Project[] = [
  {
    id: "web1",
    type: "website",
    domain: "web",
    title: "デザインカフェ",
    description: "デザイナー向け個人サイト",
    image: "/images/main.jpg",
    gallery: ["/images/web1-1.jpg", "/images/web1-2.jpg"],
    demoUrl: "#",
    caseStudyUrl: "#",
    details:
      "Next.jsとTailwind CSSで制作。レスポンシブ対応とアクセシビリティを意識しました。",
  },
  {
    id: "web2",
    type: "website",
    domain: "web",
    title: "Cafe Landing Page",
    description: "おしゃれなカフェのLP",
    image: "/images/classbg.jpg",
    gallery: ["/images/web1-1.jpg", "/images/web1-2.jpg"],
    demoUrl: "#",
    caseStudyUrl: "#",
    details:
      "Next.jsとTailwind CSSで制作。レスポンシブ対応とアクセシビリティを意識しました。",
  },
];
