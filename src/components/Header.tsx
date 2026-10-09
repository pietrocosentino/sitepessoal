import { useEffect, useRef } from "react";
import { SiteLink } from "./SiteLink";
import { navigation } from "../data/navigation";
import { profile } from "../data/profile";
import { ResumeLink } from "./portfolio/ResumeLink";
import type { Navigate } from "../types/portfolio";
export function Header({
  currentPath,
  onNavigate,
}: {
  currentPath: string;
  onNavigate: Navigate;
}) {
  const menuRef = useRef<HTMLDetailsElement>(null);
  useEffect(() => {
    menuRef.current?.removeAttribute("open");
  }, [currentPath]);
  useEffect(() => {
    const close = (event: KeyboardEvent) => {
      if (event.key === "Escape" && menuRef.current?.open) {
        menuRef.current.open = false;
        menuRef.current.querySelector("summary")?.focus();
      }
    };
    window.addEventListener("keydown", close);
    return () => window.removeEventListener("keydown", close);
  }, []);
  const links = navigation.map((section) => (
    <SiteLink
      key={section.path}
      href={section.path}
      onNavigate={onNavigate}
      onClick={() => menuRef.current?.removeAttribute("open")}
      aria-current={
        currentPath === section.path ||
        currentPath.startsWith(section.path + "/")
          ? "page"
          : undefined
      }
    >
      {section.label}
    </SiteLink>
  ));
  return (
    <header className="site-header">
      <div className="site-header-inner">
        <SiteLink
          href="/"
          onNavigate={onNavigate}
          className="site-brand"
          aria-label={`${profile.name} — início`}
        >
          <span>
            {profile.name}
            <span className="brand-dot">.</span>
          </span>
          <small>Requisitos · Análise funcional · Produto</small>
        </SiteLink>
        <nav className="desktop-nav" aria-label="Navegação principal">
          {links}
        </nav>
        <div className="header-actions">
          <ResumeLink className="header-resume" />
          <details ref={menuRef} className="mobile-menu">
            <summary>Menu</summary>
            <nav aria-label="Navegação móvel">{links}</nav>
          </details>
        </div>
      </div>
    </header>
  );
}
