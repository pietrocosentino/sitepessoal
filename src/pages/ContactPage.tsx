import { useLocale } from "../i18n/LocaleContext";
import { PageIntro } from "../components/portfolio/PageIntro";
import { ContactLinks } from "../components/portfolio/ContactLinks";
export function ContactPage() {
  const {
    t,
    content: { profile },
  } = useLocale();
  return (
    <div className="professional-home portfolio-page">
      <div className="editorial-container">
        <PageIntro eyebrow={t.contact} title={t.contactTitle}>
          <p>{t.contactCopy}</p>
        </PageIntro>
        <div className="practice-grid">
          <ContactLinks />
          <div className="contact-details">
            <h2>{profile.name}</h2>
            <p>{profile.headline}</p>
            <p>{profile.location}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
