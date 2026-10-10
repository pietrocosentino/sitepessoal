export type Navigate = (path: string) => void;
export interface PageProps {
  onNavigate: Navigate;
}
export interface Experience {
  company: string;
  role: string;
  period: string;
  contributions: readonly string[];
}
export interface ProjectArtifact {
  title: string;
  lines: readonly string[];
}
export interface Project {
  slug: string;
  title: string;
  sector: string;
  company: string;
  period: string;
  role: string;
  summary: string;
  context: string;
  responsibilities: readonly string[];
  deliverables: readonly string[];
  validation: string;
  skills: readonly string[];
  artifact: ProjectArtifact;
}
