import { SiteLink } from "./SiteLink";
import { profile } from "../data/profile";
import type { PageProps } from "../types/portfolio";

export function Footer({ onNavigate }: PageProps) {
  return (
    <footer className="professional-footer">
      <div className="editorial-container">
        <div className="footer-top">
          <div>
            <SiteLink className="footer-brand" href="/" onNavigate>
              {`${profile.name}.`}
            </SiteLink>
            <p>Requisitos, análise funcional e produto</p>
          </div>

          <nav aria-label="Contato e perfil">
            <SiteLink href="/contato" onNavigate>
              Contato
            </SiteLink>
            <a href={profile.linkedin} target="_blank" rel="noopener noreferrer">
              LinkedIn ↗
            </a>
            <SiteLink href="/insights" onNavigate>
              Insights
            </SiteLink>
          </nav>
        </div>

        <div className="footer-bottom">
          <span>
            © {new Date().getFullYear()} {profile.name}
          </span>
          <span>{profile.location}</span>
        </div>
      </div>
    </footer>
  );
}
