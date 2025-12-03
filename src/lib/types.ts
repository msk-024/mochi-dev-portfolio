export type ProjectType = "app" | "website";

export interface Project {
  id: string; // 一意のID
  type: ProjectType; // "app" or "website"
  title: string; // プロジェクト名
  description: string; // 短い説明
  image: string; // サムネイル画像のパス
  gallery?: string[]; // スクショ配列
  demoUrl?: string; // Live Demo / Visit Site
  githubUrl?: string; // GitHubリポジトリ
  caseStudyUrl?: string; // 詳細ページや記事
  details?: string; // ← 詳細な解説
  // Detailページ用
  subtitle?: string;
  overview?: string;
  features?: string[];
  techStack?: string[];
  uiHighlights?: string;
  medicalInsights?: string;
  story?: string;
  roadmap?: string[];
}

