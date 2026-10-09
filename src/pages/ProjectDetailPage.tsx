import { ArrowLeft } from "lucide-react";
import { findProject } from "../data/projects";
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
  const project = findProject(slug);
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
            Todos os projetos
          </SiteLink>
          <PageIntro eyebrow={project.sector} title={project.title}>
            <p>{project.summary}</p>
          </PageIntro>
          <dl className="project-facts">
            <div>
              <dt>Empresa</dt>
              <dd>{project.company}</dd>
            </div>
            <div>
              <dt>Papel</dt>
              <dd>{project.role}</dd>
            </div>
            <div>
              <dt>Período da experiência</dt>
              <dd>{project.period}</dd>
            </div>
          </dl>
          <div className="case-layout">
            <div className="case-content">
              <section>
                <h2>Contexto e desafio</h2>
                <p>{project.context}</p>
              </section>
              <section>
                <h2>Minha atuação</h2>
                <ul>
                  {project.responsibilities.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </section>
              <section>
                <h2>Entregáveis funcionais</h2>
                <ul>
                  {project.deliverables.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </section>
              <section>
                <h2>Validação e limites do caso</h2>
                <p>{project.validation}</p>
              </section>
            </div>
            <aside className="case-aside">
              <h2>Competências aplicadas</h2>
              <ul className="skill-list">
                {project.skills.map((skill) => (
                  <li key={skill}>{skill}</li>
                ))}
              </ul>
              <p>
                Descrição da atuação profissional. Exemplos didáticos são
                apresentados separadamente dos entregáveis originais.
              </p>
            </aside>
          </div>
          <ArtifactPreview artifact={project.artifact} />
          <SiteLink
            className="text-link"
            href="/trajetoria"
            onNavigate={onNavigate}
          >
            Conhecer a trajetória profissional →
          </SiteLink>
        </div>
      </article>
      <ContactSection />
    </div>
  );
}
