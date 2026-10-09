import { SiteLink } from "../components/SiteLink";
import type { PageProps } from "../types/portfolio";
export function NotFoundPage({ onNavigate }: PageProps) {
  return (
    <div className="professional-home portfolio-page">
      <section className="editorial-container">
        <h1>Página não encontrada</h1>
        <p className="section-copy">
          O endereço não corresponde a uma página ou projeto do portfólio.
        </p>
        <SiteLink className="primary-link" href="/" onNavigate={onNavigate}>
          Voltar ao início
        </SiteLink>
      </section>
    </div>
  );
}
