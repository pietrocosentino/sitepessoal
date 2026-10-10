import { useLocale } from "../i18n/LocaleContext";
import { PageIntro } from "../components/portfolio/PageIntro";
import { ExperienceList } from "../components/portfolio/ExperienceList";
import { SectionHeading } from "../components/portfolio/SectionHeading";
import { ContactSection } from "../components/portfolio/ContactSection";
import type { PageProps } from "../types/portfolio";
export function CareerPage({ onNavigate }: PageProps) {
  const {
    t,
    content: { profile, experiences, education, credentials, competencies },
  } = useLocale();
  return (
    <div className="professional-home">
      <div className="portfolio-page editorial-container">
        <PageIntro eyebrow={t.profile} title={t.careerTitle}>
          <p>{profile.summary}</p>
        </PageIntro>
        <section
          className="career-section"
          aria-labelledby="experience-heading"
        >
          <SectionHeading
            id="experience-heading"
            title={t.professionalExperience}
          />
          <ExperienceList items={experiences} />
        </section>
        <section
          className="career-section"
          aria-labelledby="competencies-heading"
        >
          <SectionHeading id="competencies-heading" title={t.appliedSkills} />
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
          <SectionHeading id="education-heading" title={t.education} />
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
          <SectionHeading id="credentials-heading" title={t.credentials} />
          <ul className="education-list">
            {credentials.map((item) => (
              <li key={item.title}>
                <h3>{item.title}</h3>
                <p>
                  {item.issuer} · {item.issued}
                </p>
              </li>
            ))}
          </ul>
        </section>
        <section className="career-section" aria-labelledby="languages-heading">
          <SectionHeading id="languages-heading" title={t.languages} />
          <ul className="language-levels">
            <li>{t.englishLevel}</li>
            <li>{t.spanishLevel}</li>
          </ul>
        </section>
      </div>
      <ContactSection onNavigate={onNavigate} />
    </div>
  );
}
