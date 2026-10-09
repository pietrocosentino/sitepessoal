import { ArrowRight } from "lucide-react";
import { useLocale } from "../i18n/LocaleContext";
import { SiteLink } from "../components/SiteLink";
import { ProjectCard } from "../components/portfolio/ProjectCard";
import { ExperienceList } from "../components/portfolio/ExperienceList";
import { SectionHeading } from "../components/portfolio/SectionHeading";
import { ContactSection } from "../components/portfolio/ContactSection";
import type { PageProps } from "../types/portfolio";
export function HomePage({ onNavigate }: PageProps) {
  const {
    t,
    content: { profile, projects, experiences, competencies },
  } = useLocale();
  return (
    <div className="professional-home">
      <section className="intro-section">
        <div className="editorial-container intro-grid">
          <div>
            <p className="eyebrow">
              {profile.name} · {profile.location}
            </p>
            <h1>{profile.headline}</h1>
            <p className="intro-copy">{profile.summary}</p>
            <div className="intro-actions">
              <SiteLink
                className="primary-link"
                href="/projetos"
                onNavigate={onNavigate}
              >
                {t.viewProjects}
                <ArrowRight size={17} aria-hidden="true" />
              </SiteLink>
              <SiteLink
                className="text-link"
                href="/trajetoria"
                onNavigate={onNavigate}
              >
                {t.viewCareer}
                <ArrowRight size={17} aria-hidden="true" />
              </SiteLink>
            </div>
          </div>
          <aside className="intro-note">
            <span className="note-label">{t.introNote}</span>
            <strong>{t.clarity}</strong>
            <p>{t.introNoteCopy}</p>
            <div className="note-rule" />
            <span className="note-label">{t.contexts}</span>
            <p>{t.contextsCopy}</p>
          </aside>
        </div>
      </section>
      <section className="services-section" aria-labelledby="selected-projects">
        <div className="editorial-container">
          <SectionHeading
            id="selected-projects"
            eyebrow={t.appliedExperience}
            title={t.selectedProjects}
            action={
              <SiteLink
                className="text-link"
                href="/projetos"
                onNavigate={onNavigate}
              >
                {t.viewCases}
                <ArrowRight size={17} aria-hidden="true" />
              </SiteLink>
            }
          />
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
      </section>
      <section className="practice-section" aria-labelledby="career-preview">
        <div className="editorial-container practice-grid">
          <div>
            <SectionHeading
              id="career-preview"
              eyebrow={t.career}
              title={t.careerPreview}
            />
            <p className="section-copy">{t.careerCopy}</p>
            <SiteLink
              className="text-link"
              href="/trajetoria"
              onNavigate={onNavigate}
            >
              {t.fullCareer}
              <ArrowRight size={17} aria-hidden="true" />
            </SiteLink>
          </div>
          <ExperienceList items={experiences.slice(0, 3)} compact />
        </div>
      </section>
      <section className="method-section" aria-labelledby="skills-heading">
        <div className="editorial-container">
          <SectionHeading
            id="skills-heading"
            eyebrow={t.appliedSkills}
            title={t.toolsTitle}
          />
          <dl className="competency-grid">
            {competencies.slice(0, 4).map((item) => (
              <div key={item.title}>
                <dt>{item.title}</dt>
                <dd>{item.use}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>
      <ContactSection onNavigate={onNavigate} />
    </div>
  );
}
