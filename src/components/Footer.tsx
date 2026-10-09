import { SiteLink } from './SiteLink';

export function Footer({ onNavigate }: { onNavigate: (path: string) => void }) {
  return <footer className="professional-footer">
    <div className="editorial-container">
      <div className="footer-top">
        <div><SiteLink className="footer-brand" href="/" onNavigate={onNavigate}>Pietro Cosentino.</SiteLink><p>Soluções em negócios para tecnologia</p></div>
        <nav aria-label="Contato e perfil"><a href="mailto:pietrocosentino88@gmail.com">E-mail</a><a href="https://www.linkedin.com/in/pietrocosentino/" target="_blank" rel="noopener noreferrer">LinkedIn ↗</a><SiteLink href="/insights" onNavigate={onNavigate}>Insights</SiteLink></nav>
      </div>
      <div className="footer-bottom"><span>© {new Date().getFullYear()} Pietro Cosentino</span><span>Negócios, requisitos e produto.</span></div>
    </div>
  </footer>;
}
