import { useEffect, useRef } from 'react';
import { SiteLink } from './SiteLink';

const sections = [
  { path: '/solucoes', label: 'Atuação' },
  { path: '/metodologia', label: 'Como trabalho' },
  { path: '/experiencia', label: 'Experiência' },
  { path: '/sobre', label: 'Sobre' },
  { path: '/insights', label: 'Insights' },
];

export function Header({ currentPath, onNavigate }: { currentPath: string; onNavigate: (path: string) => void }) {
  const menuRef = useRef<HTMLDetailsElement>(null);
  useEffect(() => { menuRef.current?.removeAttribute('open'); }, [currentPath]);
  const links = sections.map(section => <SiteLink key={section.path} href={section.path} onNavigate={onNavigate} aria-current={currentPath === section.path ? 'page' : undefined}>{section.label}</SiteLink>);
  return <header className="site-header">
    <div className="site-header-inner">
      <SiteLink href="/" onNavigate={onNavigate} className="site-brand" aria-label="Pietro Cosentino — início">
        <span>Pietro Cosentino<span className="brand-dot">.</span></span>
        <small>Soluções em negócios para tecnologia</small>
      </SiteLink>
      <nav className="desktop-nav" aria-label="Navegação principal">{links}</nav>
      <details ref={menuRef} className="mobile-menu">
        <summary>Menu</summary>
        <nav aria-label="Navegação móvel">{links}</nav>
      </details>
    </div>
  </header>;
}
