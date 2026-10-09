import React from 'react';
import { ArrowLeft, ArrowRight, Home } from 'lucide-react';

interface PageTopNavProps {
  currentPath: string;
  currentPageTitle: string;
  onNavigate: (path: string) => void;
}

export const PageTopNav: React.FC<PageTopNavProps> = ({
  currentPath,
  currentPageTitle,
  onNavigate,
}) => {
  const sections = [
    { label: 'O Que Eu Faço', path: '/solucoes' },
    { label: 'Metodologia', path: '/metodologia' },
    { label: 'Experiência', path: '/experiencia' },
    { label: 'Sobre', path: '/sobre' },
    { label: 'Insights', path: '/insights' },
  ];

  return (
    <div className="mb-10 pb-6 border-b border-slate-200">
      <div className="flex flex-wrap items-center justify-between gap-4 mb-5">
        <button
          type="button"
          onClick={() => onNavigate('/')}
          className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-white border border-slate-200 hover:border-emerald-600 hover:bg-emerald-50/50 text-slate-700 hover:text-emerald-800 text-xs font-bold transition-all  cursor-pointer group"
        >
          <ArrowLeft className="w-3.5 h-3.5 transition-transform group-hover:-translate-x-0.5" />
          <span>Voltar ao Início</span>
        </button>

        <div className="flex items-center gap-2 text-xs text-slate-500">
          <button
            type="button"
            onClick={() => onNavigate('/')}
            className="hover:text-emerald-700 transition-colors flex items-center gap-1 cursor-pointer"
          >
            <Home className="w-3.5 h-3.5" />
            <span>Início</span>
          </button>
          <span>/</span>
          <span className="text-slate-900 font-semibold">{currentPageTitle}</span>
        </div>
      </div>
      <div className="flex items-center gap-1.5 overflow-x-auto py-1 scrollbar-none text-xs">
        <span className="text-[11px] font-mono uppercase tracking-wider text-slate-400 font-bold mr-1 shrink-0">
          Seções:
        </span>
        {sections.map((sec) => {
          const isActive = currentPath === sec.path;
          return (
            <button
              key={sec.path}
              type="button"
              onClick={() => onNavigate(sec.path)}
              className={`px-3 py-1.5 rounded-lg whitespace-nowrap font-medium transition-all cursor-pointer shrink-0 ${
                isActive
                  ? 'bg-slate-950 text-white font-bold '
                  : 'bg-white hover:bg-slate-100 text-slate-700 border border-slate-200'
              }`}
            >
              {sec.label}
            </button>
          );
        })}
      </div>
    </div>
  );
};

interface PageBottomNavProps {
  onNavigate: (path: string) => void;
  nextRoute?: { label: string; path: string };
  prevRoute?: { label: string; path: string };
}

export const PageBottomNav: React.FC<PageBottomNavProps> = ({
  onNavigate,
  nextRoute,
  prevRoute,
}) => {
  return (
    <div className="mt-14 pt-8 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4">
      <button
        type="button"
        onClick={() => onNavigate('/')}
        className="inline-flex items-center gap-2 px-4 py-2 rounded-md bg-white border border-slate-200 hover:border-slate-300 text-slate-800 text-xs font-bold transition-all  cursor-pointer hover:bg-slate-50"
      >
        <ArrowLeft className="w-4 h-4 text-emerald-700" />
        <span>Voltar para o Início</span>
      </button>

      <div className="flex items-center gap-2 w-full sm:w-auto justify-end flex-wrap">
        {prevRoute && (
          <button
            type="button"
            onClick={() => onNavigate(prevRoute.path)}
            className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-md bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-medium transition-colors cursor-pointer"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>{prevRoute.label}</span>
          </button>
        )}
        {nextRoute && (
          <button
            type="button"
            onClick={() => onNavigate(nextRoute.path)}
            className="inline-flex items-center gap-1.5 px-4 py-2 rounded-md bg-emerald-700 hover:bg-emerald-800 text-white text-xs font-bold transition-colors cursor-pointer "
          >
            <span>{nextRoute.label}</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        )}
      </div>
    </div>
  );
};
