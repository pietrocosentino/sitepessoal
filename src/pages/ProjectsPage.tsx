import { projects } from "../data/projects";
import { PageIntro } from "../components/portfolio/PageIntro";
import { ProjectCard } from "../components/portfolio/ProjectCard";
import type { PageProps } from "../types/portfolio";
export function ProjectsPage({ onNavigate }: PageProps) {
  return (
    <div className="professional-home portfolio-page">
      <div className="editorial-container">
        <PageIntro
          eyebrow="Experiência aplicada"
          title="Projetos e contextos de atuação"
        >
          <p>
            Casos organizados por contexto, responsabilidade e entregáveis.
            Informações de clientes, dados internos e documentos confidenciais
            não são divulgados.
          </p>
        </PageIntro>
        <div className="project-grid">
          {projects.map((project) => (
            <ProjectCard
              key={project.slug}
              project={project}
              onNavigate={onNavigate}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
