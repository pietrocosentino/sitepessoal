import { lazy } from "react";
import { HomePage } from "../pages/HomePage";
import { findProject } from "../data/projects";
import { projectSlug } from "./routes";
export const routePages = {
  "/": { title: "Requisitos e Análise Funcional Sênior", component: HomePage },
  "/projetos": {
    title: "Projetos",
    component: lazy(() =>
      import("../pages/ProjectsPage").then((m) => ({
        default: m.ProjectsPage,
      })),
    ),
  },
  "/trajetoria": {
    title: "Trajetória e formação",
    component: lazy(() =>
      import("../pages/CareerPage").then((m) => ({ default: m.CareerPage })),
    ),
  },
  "/insights": {
    title: "Insights",
    component: lazy(() =>
      import("../pages/InsightsPage").then((m) => ({
        default: m.InsightsPage,
      })),
    ),
  },
  "/contato": {
    title: "Contato",
    component: lazy(() =>
      import("../pages/ContactPage").then((m) => ({ default: m.ContactPage })),
    ),
  },
};
export const ProjectDetail = lazy(() =>
  import("../pages/ProjectDetailPage").then((m) => ({
    default: m.ProjectDetailPage,
  })),
);
export function routeTitle(path: string) {
  const slug = projectSlug(path);
  return slug
    ? (findProject(slug)?.title ?? "Página não encontrada")
    : (routePages[path as keyof typeof routePages]?.title ??
        "Página não encontrada");
}
