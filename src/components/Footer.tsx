import { SiteLink } from "./SiteLink";
import { useLocale } from "../i18n/LocaleContext";
import type { PageProps } from "../types/portfolio";
export function Footer({ onNavigate }: PageProps) {
  const {
    t,
    content: { profile },
  } = useLocale();
  return (
    <footer className="professional-footer">
      <div className="editorial-container">
        <div className="footer-bottom">
          <span>
            © {new Date().getFullYear()} {profile.name}
          </span>
          <nav aria-label={t.footerNav}>
            <SiteLink href="/contato" onNavigate={onNavigate}>
              {t.contact}
            </SiteLink>
          </nav>
        </div>
      </div>
    </footer>
  );
}
