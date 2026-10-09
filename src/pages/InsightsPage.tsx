import React, { useState } from 'react';
import {
  BookOpen,
  Clock,
  ChevronRight,
} from 'lucide-react';
import { PageTopNav, PageBottomNav } from '../components/PageNavigation';

interface InsightsPageProps {
  onNavigate: (path: string) => void;
}

export const InsightsPage: React.FC<InsightsPageProps> = ({ onNavigate }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [activeArticleId, setActiveArticleId] = useState<string | null>(null);

  const categories = [
    { id: 'all', label: 'Todos os Insights' },
    { id: 'requisitos', label: 'Requisitos' },
    { id: 'produto', label: 'Produto' },
    { id: 'estrategia', label: 'Estratégia' },
    { id: 'ia', label: 'Inteligência Artificial' },
  ];

  const articles = [
    {
      id: 'engenharia-de-requisitos-custo-do-erro',
      category: 'requisitos',
      categoryLabel: 'Engenharia de Requisitos',
      readTime: '5 min de leitura',
      title: 'Por que projetos de software falham antes da primeira linha de código',
      lead: 'O papel crítico da engenharia de requisitos como blindagem contra retrabalho, estouro de orçamento e frustração de stakeholders.',
      content: `A maioria dos líderes de tecnologia e negócios já vivenciou o mesmo roteiro: um projeto nasce sob forte entusiasmo, meses de desenvolvimento se passam e, no dia da entrega, o sistema não faz o que o negócio precisava.
      
O erro raramente está na competência técnica dos programadores. Ele reside na ausência de uma engenharia de requisitos rigorosa. Quando o escopo é vago, os desenvolvedores são forçados a preencher as lacunas com suposições próprias. O resultado inevitável é código descartado, retrabalho custoso e perda de confiança.

Estruturar requisitos com precisão significa:
1. Mapear o problema real antes de propor a tela;
2. Documentar regras de negócio sem ambiguidade semântica;
3. Definir critérios de aceite mensuráveis (Definition of Done) antes de iniciar a sprint.

Investir na estruturação inicial de requisitos reduz o custo de correção de defeitos em até dez vezes se comparado à correção pós-lançamento.`,
    },
    {
      id: 'abismo-negocio-e-desenvolvimento',
      category: 'estrategia',
      categoryLabel: 'Estratégia & Negócios',
      readTime: '4 min de leitura',
      title: 'O abismo invisível entre a diretoria comercial e o time de engenharia',
      lead: 'Como construir uma ponte de comunicação efetiva onde linguagem de negócios e restrições técnicas se complementam.',
      content: `Executivos de negócios pensam em faturamento, retenção de clientes, margem e velocidade de entrada no mercado. Desenvolvedores de software pensam em arquitetura, manutenibilidade, contratos de API e concorrência de banco de dados.

Quando não há um profissional atuando na tradução ativa entre esses mundos, o diálogo se torna improdutivo. O negócio enxerga a TI como lenta e burocrática; a TI enxerga o negócio como volátil e imediatista.

A solução é o papel consultivo da análise de produto e negócio: transformar uma meta estratégica em fluxos sistêmicos específicos com critérios de validação parciais. Assim, a liderança compreende o cronograma e o time técnico entende o propósito real do que está codificando.`,
    },
    {
      id: 'ia-para-negocios-alem-do-hype',
      category: 'ia',
      categoryLabel: 'Inteligência Artificial',
      readTime: '6 min de leitura',
      title: 'Inteligência Artificial para Negócios: separando a euforia da entrega de valor',
      lead: 'Abordagem pragmática para incorporar modelos de linguagem e automações inteligentes sem cair em soluções cosméticas.',
      content: `A euforia em torno da inteligência artificial levou muitas empresas a contratarem ou desenvolverem assistentes genéricos que não resolvem problemas reais de negócio. 

A IA não substitui processos bem desenhados: ela potencializa processos que já funcionam. Antes de plugar um modelo de inteligência, a organização precisa se perguntar:
- Onde está o maior gargalo operacional repetitivo da equipe hoje?
- A base de conhecimento e regras da empresa estão organizadas e confiáveis?
- O caso de uso possui governança de dados e controle de segurança de informações confidenciais?

No MBA em IA para Negócios, estudo aplicações como triagem de dados, automação de tarefas repetitivas e simulação de cenários. Antes de propor uma aplicação, é preciso avaliar os dados disponíveis, os custos e como medir o resultado.`,
    },
    {
      id: 'priorizacao-de-backlog-orientada-a-caixa',
      category: 'produto',
      categoryLabel: 'Gestão de Produto',
      readTime: '4 min de leitura',
      title: 'Priorização de Backlog orientada a retorno financeiro e não a ruído',
      lead: 'Como Product Managers e Product Owners devem dizer "não" de maneira fundamentada para proteger a entrega estratégica.',
      content: `O backlog de um produto digital atrai pedidos de todas as áreas: da equipe comercial, da diretoria, do suporte.

O papel do Product Owner não é acumular solicitações, mas garantir que a equipe dedique suas horas de desenvolvimento ao que mais move o ponteiro do negócio.

Isso exige matrizes claras de priorização (como RICE ou Impacto vs. Esforço), além de embasamento analítico para demonstrar o custo de oportunidade de desviar a equipe do roadmap prioritário.`,
    },
  ];

  const filteredArticles =
    selectedCategory === 'all'
      ? articles
      : articles.filter((a) => a.category === selectedCategory);

  return (
    <div className="bg-[#fcfcfd] text-slate-900 py-12 sm:py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <PageTopNav
          currentPath="/insights"
          currentPageTitle="Insights"
          onNavigate={onNavigate}
        />
        <div className="max-w-3xl mb-10">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-slate-950 font-sans tracking-tight leading-tight">
            Insights
          </h1>
          <p className="mt-3 text-base sm:text-lg text-slate-600 font-normal leading-relaxed">
            Reflexões autorais sobre a interseção entre negócio, produto, requisitos, estratégia e inteligência artificial.
          </p>
        </div>
        <div className="flex flex-wrap items-center gap-2 mb-10">
          {categories.map((cat) => (
            <button
              key={cat.id}
              aria-pressed={selectedCategory === cat.id}
              type="button"
              onClick={() => {
                setSelectedCategory(cat.id);
                setActiveArticleId(null);
              }}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                selectedCategory === cat.id
                  ? 'bg-slate-950 text-white '
                  : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          {filteredArticles.map((article) => {
            const isExpanded = activeArticleId === article.id;
            return (
              <div
                key={article.id}
                className="p-7 sm:p-8 rounded-lg bg-white border border-slate-200/90  hover:border-slate-300 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <span className="text-[10px] font-mono uppercase tracking-wider text-emerald-700 font-bold bg-emerald-50 px-2.5 py-1 rounded-md border border-blue-100">
                      {article.categoryLabel}
                    </span>
                    <span className="text-[11px] font-mono text-slate-400 flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      {article.readTime}
                    </span>
                  </div>

                  <h2 className="text-lg font-bold text-slate-950 mb-3 font-sans leading-snug">
                    {article.title}
                  </h2>

                  <p className="text-xs text-slate-600 leading-relaxed font-normal mb-4">
                    {article.lead}
                  </p>
                  {isExpanded && (
                    <div className="mt-4 pt-4 border-t border-slate-100 text-xs text-slate-700 leading-relaxed whitespace-pre-line space-y-2 bg-slate-50 p-4 rounded-md">
                      {article.content}
                    </div>
                  )}
                </div>

                <div className="mt-5 pt-4 border-t border-slate-100">
                  <button
                    type="button"
                    onClick={() => setActiveArticleId(isExpanded ? null : article.id)}
                    aria-expanded={isExpanded}
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-emerald-700 hover:text-blue-800 transition-colors cursor-pointer"
                  >
                    <BookOpen className="w-3.5 h-3.5" />
                    <span>{isExpanded ? 'Recolher artigo' : 'Ler artigo completo'}</span>
                    <ChevronRight
                      className={`w-3.5 h-3.5 transition-transform ${
                        isExpanded ? 'rotate-90' : ''
                      }`}
                    />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
        <PageBottomNav
          onNavigate={onNavigate}
          prevRoute={{ label: 'Sobre Pietro', path: '/sobre' }}
          nextRoute={{ label: 'O Que Eu Faço', path: '/solucoes' }}
        />

      </div>
    </div>
  );
};
