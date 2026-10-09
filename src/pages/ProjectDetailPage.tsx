import { ArrowLeft } from "lucide-react";
import { useLocale } from "../i18n/LocaleContext";
import { SiteLink } from "../components/SiteLink";
import { PageIntro } from "../components/portfolio/PageIntro";
import { ArtifactPreview } from "../components/portfolio/ArtifactPreview";
import { ContactSection } from "../components/portfolio/ContactSection";
import { NotFoundPage } from "./NotFoundPage";
import type { PageProps } from "../types/portfolio";
export function ProjectDetailPage({
  onNavigate,
  slug,
}: PageProps & { slug: string }) {
  const {
    t,
    content: { projects },
  } = useLocale();
  const project = projects.find((item) => item.slug === slug);
  if (!project) return <NotFoundPage onNavigate={onNavigate} />;
  return (
    <div className="professional-home">
      <article className="portfolio-page">
        <div className="editorial-container">
          <SiteLink
            className="text-link"
            href="/projetos"
            onNavigate={onNavigate}
          >
            <ArrowLeft size={16} aria-hidden="true" />
            {t.allProjects}
          </SiteLink>
          <PageIntro eyebrow={project.sector} title={project.title}>
            <p>{project.summary}</p>
          </PageIntro>
          <dl className="project-facts">
            <div>
              <dt>{t.company}</dt>
              <dd>{project.company}</dd>
            </div>
            <div>
              <dt>{t.role}</dt>
              <dd>{project.role}</dd>
            </div>
            <div>
              <dt>{t.period}</dt>
              <dd>{project.period}</dd>
            </div>
          </dl>
          <div className="case-layout">
            <div className="case-content">
              <section>
                <h2>{t.challenge}</h2>
                <p>{project.context}</p>
              </section>
              <section>
                <h2>{t.responsibilities}</h2>
                <ul>
                  {project.responsibilities.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </section>
              <section>
                <h2>{t.deliverables}</h2>
                <ul>
                  {project.deliverables.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </section>
              <section>
                <h2>{t.validation}</h2>
                <p>{project.validation}</p>
              </section>
            </div>
            <aside className="case-aside">
              <h2>{t.appliedSkills}</h2>
              <ul className="skill-list">
                {project.skills.map((skill) => (
                  <li key={skill}>{skill}</li>
                ))}
              </ul>
              <p>{t.evidenceNote}</p>
            </aside>
          </div>
          <ArtifactPreview artifact={project.artifact} />
          <SiteLink
            className="text-link"
            href="/trajetoria"
            onNavigate={onNavigate}
          >
            {t.projectCareer} →
          </SiteLink>
        </div>
      </article>
      <ContactSection onNavigate={onNavigate} />
    </div>
  );
}
