import { lazy, Suspense, useEffect, useRef, useState } from 'react';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { HomePage } from './pages/HomePage';

const pages = {
  '/sobre': { title: 'Sobre Pietro', component: lazy(() => import('./pages/AboutPage').then(m => ({ default: m.AboutPage }))) },
  '/solucoes': { title: 'Soluções', component: lazy(() => import('./pages/SolutionsPage').then(m => ({ default: m.SolutionsPage }))) },
  '/metodologia': { title: 'Metodologia', component: lazy(() => import('./pages/MethodologyPage').then(m => ({ default: m.MethodologyPage }))) },
  '/experiencia': { title: 'Experiência', component: lazy(() => import('./pages/ExperiencePage').then(m => ({ default: m.ExperiencePage }))) },
  '/insights': { title: 'Insights', component: lazy(() => import('./pages/InsightsPage').then(m => ({ default: m.InsightsPage }))) },
};
const aliases: Record<string, string> = { '/cases': '/experiencia', '/como-funciona': '/metodologia', '/metodo': '/metodologia' };

function resolvePath(path: string) {
  const normalized = path.replace(/\/$/, '') || '/';
  return aliases[normalized] ?? normalized;
}
function readPath() {
  const path = resolvePath(window.location.pathname);
  return path === '/' && window.location.hash ? resolvePath('/' + window.location.hash.slice(1).replace(/^\//, '')) : path;
}

export default function App() {
  const [currentPath, setCurrentPath] = useState(readPath);
  const mainRef = useRef<HTMLElement>(null);
  const initialPath = useRef(true);
  const page = pages[currentPath as keyof typeof pages];
  const Page = page?.component;

  useEffect(() => {
    const update = () => setCurrentPath(readPath());
    window.addEventListener('popstate', update);
    window.addEventListener('hashchange', update);
    return () => {
      window.removeEventListener('popstate', update);
      window.removeEventListener('hashchange', update);
    };
  }, []);

  useEffect(() => {
    document.title = `${page?.title ?? (currentPath === '/' ? 'Soluções em Negócios para Tecnologia' : 'Página não encontrada')} | Pietro Cosentino`;
    if (initialPath.current) { initialPath.current = false; return; }
    window.scrollTo({ top: 0, behavior: 'instant' });
    mainRef.current?.focus({ preventScroll: true });
  }, [currentPath, page]);

  const navigate = (path: string) => {
    const next = resolvePath(path);
    if (next === currentPath) { window.scrollTo({ top: 0, behavior: 'instant' }); return; }
    window.history.pushState(null, '', next);
    setCurrentPath(next);
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#fcfcfd] text-slate-900 font-sans selection:bg-blue-600 selection:text-white">
      <a href="#conteudo" className="skip-link">Pular para o conteúdo</a>
      <Header currentPath={currentPath} onNavigate={navigate} />
      <main id="conteudo" ref={mainRef} tabIndex={-1} className="flex-1 min-w-0 outline-none">
        <Suspense fallback={<div role="status" className="min-h-[50vh] p-8 text-center">Carregando página…</div>}>
          {Page ? <Page onNavigate={navigate} /> : currentPath === '/' ? <HomePage onNavigate={navigate} /> : (
            <section className="mx-auto max-w-3xl px-4 py-20">
              <h1 className="text-3xl mb-4">Página não encontrada</h1>
              <p className="mb-6">O endereço acessado não corresponde a uma página do site.</p>
              <a href="/" className="text-blue-700 underline">Voltar ao início</a>
            </section>
          )}
        </Suspense>
      </main>
      <Footer onNavigate={navigate} />
    </div>
  );
}
