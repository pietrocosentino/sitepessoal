import { Suspense, useEffect, useRef } from "react";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { PageErrorBoundary } from "./components/PageErrorBoundary";
import { NotFoundPage } from "./pages/NotFoundPage";
import { useNavigation } from "./hooks/useNavigation";
import { routePages, routeTitle, ProjectDetail } from "./routing/pages";
import { projectSlug } from "./routing/routes";
import { profile } from "./data/profile";
export default function App() {
  const { currentPath, navigate } = useNavigation();
  const mainRef = useRef<HTMLElement>(null);
  const initialPath = useRef(true);
  const Page = routePages[currentPath as keyof typeof routePages]?.component;
  const slug = projectSlug(currentPath);
  useEffect(() => {
    document.title = `${routeTitle(currentPath)} | ${profile.name}`;
    const description = document.querySelector('meta[name="description"]');
    description?.setAttribute(
      "content",
      `${profile.headline}. ${profile.summary}`,
    );
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
        Pular para o conteúdo
      </a>
      <Header currentPath={currentPath} onNavigate={navigate} />
      <main
        id="conteudo"
        ref={mainRef}
        tabIndex={-1}
        className="flex-1 min-w-0 outline-none"
      >
        <PageErrorBoundary key={currentPath}>
          <Suspense
            fallback={
              <div role="status" className="portfolio-page editorial-container">
                Carregando página…
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
