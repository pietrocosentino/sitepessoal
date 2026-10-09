import { SiteLink } from "../components/SiteLink";
import { useLocale } from "../i18n/LocaleContext";
import type { PageProps } from "../types/portfolio";
export function NotFoundPage({ onNavigate }: PageProps) {
  const { t } = useLocale();
  return (
    <div className="professional-home portfolio-page">
      <section className="editorial-container">
        <h1>{t.notFound}</h1>
        <p className="section-copy">{t.notFoundCopy}</p>
        <SiteLink className="primary-link" href="/" onNavigate={onNavigate}>
          {t.backHome}
        </SiteLink>
      </section>
    </div>
  );
}
