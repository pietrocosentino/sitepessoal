import { Suspense, useEffect, useRef } from "react";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { PageErrorBoundary } from "./components/PageErrorBoundary";
import { NotFoundPage } from "./pages/NotFoundPage";
import { useNavigation } from "./hooks/useNavigation";
import { routePages, routeTitle, ProjectDetail } from "./routing/pages";
import { projectSlug } from "./routing/routes";
import { LocaleProvider, useLocale } from "./i18n/LocaleContext";
import { updateMetadata } from "./i18n/metadata";
import type { Locale } from "./i18n/types";
import type { Navigate } from "./types/portfolio";
function Portfolio({
  currentPath,
  navigate,
  changeLocale,
}: {
  currentPath: string;
  navigate: Navigate;
  changeLocale: (locale: Locale) => void;
}) {
  const { locale, t, content } = useLocale();
  const mainRef = useRef<HTMLElement>(null);
  const initialPath = useRef(true);
  const Page = routePages[currentPath as keyof typeof routePages]?.component;
  const slug = projectSlug(currentPath);
  useEffect(() => {
    updateMetadata({
      locale,
      path: currentPath,
      title: `${routeTitle(currentPath, t, content)} | ${content.profile.name}`,
      description: content.profile.summary,
    });
  }, [currentPath, locale, t, content]);
  useEffect(() => {
    if (initialPath.current) {
      initialPath.current = false;
      return;
    }
    window.scrollTo({ top: 0, behavior: "instant" });
    mainRef.current?.focus({ preventScroll: true });
  }, [currentPath]);
  return (
    <div className="min-h-screen flex flex-col bg-white text-slate-900 font-sans">
      <a href="#conteudo" className="skip-link">
        {t.skip}
      </a>
      <Header
        currentPath={currentPath}
        onNavigate={navigate}
        onLocaleChange={changeLocale}
      />
      <main
        id="conteudo"
        ref={mainRef}
        tabIndex={-1}
        className="flex-1 min-w-0 outline-none"
      >
        <PageErrorBoundary key={currentPath} labels={t}>
          <Suspense
            fallback={
              <div role="status" className="portfolio-page editorial-container">
                {t.loading}
              </div>
            }
          >
            {slug ? (
              <ProjectDetail slug={slug} onNavigate={navigate} />
            ) : Page ? (
              <Page onNavigate={navigate} />
            ) : (
              <NotFoundPage onNavigate={navigate} />
            )}
          </Suspense>
        </PageErrorBoundary>
      </main>
      <Footer onNavigate={navigate} />
    </div>
  );
}
export default function App() {
  const navigation = useNavigation();
  return (
    <LocaleProvider locale={navigation.locale}>
      <Portfolio {...navigation} />
    </LocaleProvider>
  );
}
