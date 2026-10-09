import { ArrowRight } from "lucide-react";
import { SiteLink } from "../SiteLink";
import type { Navigate, Project } from "../../types/portfolio";
export function ProjectCard({
  project,
  onNavigate,
}: {
  project: Project;
  onNavigate: Navigate;
}) {
  return (
    <article className="project-card">
      <p className="eyebrow">{project.sector}</p>
      <h3>
        <SiteLink href={`/projetos/${project.slug}`} onNavigate={onNavigate}>
          {project.title}
        </SiteLink>
      </h3>
      <p className="project-meta">
        {project.role} · {project.company}
      </p>
      <p>{project.summary}</p>
      <ul className="skill-list" aria-label="Competências aplicadas">
        {project.skills.map((skill) => (
          <li key={skill}>{skill}</li>
        ))}
      </ul>
      <SiteLink
        className="text-link"
        href={`/projetos/${project.slug}`}
        onNavigate={onNavigate}
      >
        Ler o caso <ArrowRight size={16} aria-hidden="true" />
      </SiteLink>
    </article>
  );
}
