import { ArrowRight } from "lucide-react";
import { profile, experiences, competencies } from "../data/profile";
import { projects } from "../data/projects";
import { SiteLink } from "../components/SiteLink";
import { ResumeLink } from "../components/portfolio/ResumeLink";
import { ProjectCard } from "../components/portfolio/ProjectCard";
import { ExperienceList } from "../components/portfolio/ExperienceList";
import { SectionHeading } from "../components/portfolio/SectionHeading";
import { ContactSection } from "../components/portfolio/ContactSection";
import type { PageProps } from "../types/portfolio";

export function HomePage({ onNavigate }: PageProps) {
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
                Ver projetos <ArrowRight size={17} aria-hidden="true" />
              </SiteLink>
              <ResumeLink className="secondary-link" />
            </div>
            <a
              className="profile-social"
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
            >
              Perfil no LinkedIn ↗
            </a>
          </div>
          <aside className="intro-note">
            <span className="note-label">Da definição à homologação</span>
            <strong>
              Clareza
              <br />
              para entregar.
            </strong>
            <p>
              Requisitos, regras de negócio e critérios de aceite para conectar
              stakeholders e times técnicos.
            </p>
            <div className="note-rule" />
            <span className="note-label">
              Experiência em diferentes contextos
            </span>
            <p>
              Educação, pagamentos, sistemas corporativos e produtos digitais.
            </p>
          </aside>
        </div>
      </section>
      <section className="services-section" aria-labelledby="selected-projects">
        <div className="editorial-container">
          <SectionHeading
            id="selected-projects"
            eyebrow="Experiência aplicada"
            title="Projetos selecionados"
            action={
              <SiteLink
                className="text-link"
                href="/projetos"
                onNavigate={onNavigate}
              >
                Ver todos os casos <ArrowRight size={17} aria-hidden="true" />
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
              eyebrow="Trajetória"
              title="Experiência entre negócio, produto e sistemas"
            />
            <p className="section-copy">
              Atuação como analista de requisitos, analista funcional e Product
              Owner, com foco na definição de escopo, documentação e validação
              das entregas.
            </p>
            <SiteLink
              className="text-link"
              href="/trajetoria"
              onNavigate={onNavigate}
            >
              Ver trajetória completa{" "}
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
            eyebrow="Competências aplicadas"
            title="Ferramentas a serviço da análise"
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
      <ContactSection />
    </div>
  );
}
