import { ArrowRight } from "lucide-react";
import { SiteLink } from "../SiteLink";
import { useLocale } from "../../i18n/LocaleContext";
import type { PageProps } from "../../types/portfolio";
export function ContactSection({ onNavigate }: PageProps) {
  const { t } = useLocale();
  return (
    <section className="contact-section" aria-labelledby="contact-heading">
      <div className="editorial-container contact-grid">
        <div>
          <p className="eyebrow">{t.contact}</p>
          <h2 id="contact-heading">{t.contactCta}</h2>
          <p>{t.contactCtaCopy}</p>
        </div>
        <SiteLink
          href="/contato"
          onNavigate={onNavigate}
          className="primary-link"
        >
          {t.contactAction}
          <ArrowRight size={17} aria-hidden="true" />
        </SiteLink>
      </div>
    </section>
  );
}
