import {
  profile,
  experiences,
  education,
  credentials,
  competencies,
} from "../data/profile";
import { PageIntro } from "../components/portfolio/PageIntro";
import { ResumeLink } from "../components/portfolio/ResumeLink";
import { ExperienceList } from "../components/portfolio/ExperienceList";
import { SectionHeading } from "../components/portfolio/SectionHeading";
import { ContactSection } from "../components/portfolio/ContactSection";
export function CareerPage() {
  return (
    <div className="professional-home">
      <div className="portfolio-page editorial-container">
        <PageIntro eyebrow="Perfil profissional" title="Trajetória e formação">
          <p>{profile.summary}</p>
        </PageIntro>
        <ResumeLink />
        <section
          className="career-section"
          aria-labelledby="experience-heading"
        >
          <SectionHeading
            id="experience-heading"
            title="Experiência profissional"
          />
          <ExperienceList items={experiences} />
        </section>
        <section
          className="career-section"
          aria-labelledby="competencies-heading"
        >
          <SectionHeading
            id="competencies-heading"
            title="Competências aplicadas"
          />
          <dl className="competency-grid">
            {competencies.map((item) => (
              <div key={item.title}>
                <dt>{item.title}</dt>
                <dd>{item.use}</dd>
              </div>
            ))}
          </dl>
        </section>
        <section className="career-section" aria-labelledby="education-heading">
          <SectionHeading id="education-heading" title="Formação acadêmica" />
          <ul className="education-list">
            {education.map((item) => (
              <li key={item.title}>
                <h3>{item.title}</h3>
                <p>
                  {item.institution} · {item.status}
                </p>
              </li>
            ))}
          </ul>
        </section>
        <section
          className="career-section"
          aria-labelledby="credentials-heading"
        >
          <SectionHeading
            id="credentials-heading"
            title="Certificação e formação complementar"
          />
          <ul className="education-list">
            {credentials.map((item) => (
              <li key={item.title}>
                <h3>{item.title}</h3>
                <p>{item.issuer}</p>
              </li>
            ))}
          </ul>
        </section>
      </div>
      <ContactSection />
    </div>
  );
}
