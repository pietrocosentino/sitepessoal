import { useEffect, useRef } from "react";
import { SiteLink } from "./SiteLink";
import { navigation } from "../data/navigation";
import { useLocale } from "../i18n/LocaleContext";
import { LanguageSwitcher } from "./LanguageSwitcher";
import { ResumeLink } from "./portfolio/ResumeLink";
import type { Navigate } from "../types/portfolio";
import type { Locale } from "../i18n/types";
export function Header({
  currentPath,
  onNavigate,
  onLocaleChange,
}: {
  currentPath: string;
  onNavigate: Navigate;
  onLocaleChange: (locale: Locale) => void;
}) {
  const {
    locale,
    t,
    content: { profile },
  } = useLocale();
  const menuRef = useRef<HTMLDetailsElement>(null);
  useEffect(() => {
    menuRef.current?.removeAttribute("open");
  }, [currentPath, locale]);
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
      {t[section.key]}
    </SiteLink>
  ));
  return (
    <header className="site-header">
      <div className="site-header-inner">
        <SiteLink
          href="/"
          onNavigate={onNavigate}
          className="site-brand"
          aria-label={`${profile.name} — ${t.home}`}
        >
          <span>
            {profile.name}
            <span className="brand-dot">.</span>
          </span>
          <small>{t.brandLine}</small>
        </SiteLink>
        <nav className="desktop-nav" aria-label={t.mainNav}>
          {links}
        </nav>
        <div className="header-actions">
          <LanguageSwitcher onChange={onLocaleChange} />
          <ResumeLink />
          <details ref={menuRef} className="mobile-menu">
            <summary>{t.menu}</summary>
            <nav aria-label={t.mobileNav}>{links}</nav>
          </details>
        </div>
      </div>
    </header>
  );
}
