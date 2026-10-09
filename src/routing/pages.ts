import { lazy } from "react";
import { HomePage } from "../pages/HomePage";
import { projectSlug } from "./routes";
import type { Labels, PortfolioContent } from "../i18n/types";
export const routePages = {
  "/": { key: "profile", component: HomePage },
  "/projetos": {
    key: "projects",
    component: lazy(() =>
      import("../pages/ProjectsPage").then((m) => ({
        default: m.ProjectsPage,
      })),
    ),
  },
  "/trajetoria": {
    key: "careerTitle",
    component: lazy(() =>
      import("../pages/CareerPage").then((m) => ({ default: m.CareerPage })),
    ),
  },
  "/insights": {
    key: "insights",
    component: lazy(() =>
      import("../pages/InsightsPage").then((m) => ({
        default: m.InsightsPage,
      })),
    ),
  },
  "/contato": {
    key: "contact",
    component: lazy(() =>
      import("../pages/ContactPage").then((m) => ({ default: m.ContactPage })),
    ),
  },
} as const;
export const ProjectDetail = lazy(() =>
  import("../pages/ProjectDetailPage").then((m) => ({
    default: m.ProjectDetailPage,
  })),
);
export function routeTitle(path: string, t: Labels, content: PortfolioContent) {
  const slug = projectSlug(path);
  if (slug)
    return (
      content.projects.find((project) => project.slug === slug)?.title ??
      t.notFound
    );
  if (path === "/") return content.profile.headline;
  const key = routePages[path as keyof typeof routePages]?.key;
  return key ? t[key] : t.notFound;
}
