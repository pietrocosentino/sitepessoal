import type { Experience, Project } from "../types/portfolio";
import type { InsightArticle } from "../data/insights";
import type { profile } from "../data/profile";
import type { ptLabels } from "./labels";
export type Locale = "pt" | "en" | "es";
export type Labels = typeof ptLabels;
export interface PortfolioContent {
  profile: typeof profile;
  experiences: readonly Experience[];
  education: readonly { title: string; institution: string; status: string }[];
  credentials: readonly { title: string; issuer: string }[];
  competencies: readonly { title: string; use: string }[];
  projects: readonly Project[];
  categories: readonly { id: string; label: string }[];
  articles: readonly InsightArticle[];
}
