import { useLocale } from "../i18n/LocaleContext";
import { PageIntro } from "../components/portfolio/PageIntro";
import { ProjectCard } from "../components/portfolio/ProjectCard";
import type { PageProps } from "../types/portfolio";
export function ProjectsPage({ onNavigate }: PageProps) {
  const {
    t,
    content: { projects },
  } = useLocale();
  return (
    <div className="professional-home portfolio-page">
      <div className="editorial-container">
        <PageIntro eyebrow={t.appliedExperience} title={t.projectsTitle}>
          <p>{t.projectsCopy}</p>
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
