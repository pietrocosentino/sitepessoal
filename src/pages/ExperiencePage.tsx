import React from 'react';
import { PageTopNav, PageBottomNav } from '../components/PageNavigation';

interface ExperiencePageProps {
  onNavigate: (path: string) => void;
}

export const ExperiencePage: React.FC<ExperiencePageProps> = ({
  onNavigate,
}) => {
  const appliedCases = [
    {
      context: 'Educação',
      headline: 'Sistemas educacionais, processos acadêmicos e parametrizações',
      problem:
        'Regras de negócio dispersas entre departamentos acadêmicos para parametrização de cursos, matrículas e abertura de turmas, gerando lentidão e retrabalho operacional.',
      role: 'Levantamento e modelagem de processos (BPMN), especificação de requisitos e facilitação da comunicação entre áreas acadêmicas e a equipe de TI.',
      contribution:
        'Previsibilidade técnica para o desenvolvimento, validação assistida e redução de retrabalho na evolução das funcionalidades.',
      tag: 'Sistemas Corporativos',
    },
    {
      context: 'Produtos Digitais',
      headline: 'Gestão de backlog, priorização e validação de entregas',
      problem:
        'Demandas desordenadas de múltiplos stakeholders, ausência de critérios de prioridade e risco constante de desenvolvimento de funcionalidades com baixa aderência.',
      role: 'Product discovery, refinamento de backlog orientado a retorno de negócio, definição de critérios de aceite (Definition of Done) e rituais ágeis com squads.',
      contribution:
        'Cadência contínua de entrega de valor, redução de desperdício em desenvolvimento e alinhamento em tempo real entre diretoria e engenharia.',
      tag: 'Product Management',
    },
    {
      context: 'Serviços Financeiros',
      headline: 'Esteiras transacionais envolvendo crédito, pagamentos, Pix e boleto',
      problem:
        'Complexidade de esteiras transacionais com regras rígidas de liquidação bancária, conciliação contábil, necessidade de resiliência e tratamento de estornos.',
      role: 'Modelagem da máquina de estados transacional, especificação de regras de cancelamento e conciliação, e critérios de auditoria financeira.',
      contribution:
        'Redução de atritos no momento do pagamento, consistência de dados contábeis e processo financeiro auditável e resiliente.',
      tag: 'Finanças & Pagamentos',
    },
    {
      context: 'Sistemas e Integrações',
      headline: 'Análise funcional, requisitos de APIs e processos sistêmicos',
      problem:
        'Divergência de dados entre sistemas legados e plataformas modernas de operação, gerando quebras de sincronismo e retrabalho manual para suporte.',
      role: 'Mapeamento de contratos de API, especificação de requisitos de integração, definição de políticas de tolerância a falhas e conciliação de dados.',
      contribution:
        'Sincronização de dados e mecanismos de rastreabilidade para apoiar a operação e a análise de inconsistências.',
      tag: 'Integrações & APIs',
    },
  ];

  return (
    <div className="bg-[#fcfcfd] text-slate-900 py-12 sm:py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <PageTopNav
          currentPath="/experiencia"
          currentPageTitle="Experiência"
          onNavigate={onNavigate}
        />
        <div className="max-w-3xl mb-12">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-slate-950 font-sans tracking-tight leading-tight">
            Experiência Aplicada
          </h1>
          <p className="mt-3 text-base sm:text-lg text-slate-600 font-normal leading-relaxed">
            Casos e contextos reais onde apoiei a estruturação de soluções entre negócio e tecnologia: <strong>Problema → Atuação → Contribuição</strong>.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          {appliedCases.map((cs, idx) => (
            <div
              key={idx}
              className="p-7 sm:p-9 rounded-lg bg-white border border-slate-200/90  hover:border-slate-300 transition-colors flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-[10px] font-mono uppercase tracking-wider text-emerald-700 font-bold bg-emerald-50 px-2.5 py-1 rounded-md border border-blue-100">
                    {cs.context}
                  </span>
                  <span className="text-[11px] font-mono text-slate-400">
                    {cs.tag}
                  </span>
                </div>

                <h2 className="text-lg sm:text-xl font-bold text-slate-950 mb-4 font-sans leading-snug">
                  {cs.headline}
                </h2>

                <div className="space-y-3 text-xs text-slate-700 leading-relaxed">
                  <div>
                    <strong className="text-slate-900 block font-semibold mb-0.5">
                      Problema:
                    </strong>
                    <span className="text-slate-600 font-normal">{cs.problem}</span>
                  </div>

                  <div>
                    <strong className="text-slate-900 block font-semibold mb-0.5">
                      Atuação:
                    </strong>
                    <span className="text-slate-600 font-normal">{cs.role}</span>
                  </div>

                  <div className="p-3.5 rounded-md bg-emerald-50/70 border border-blue-200/70">
                    <strong className="text-blue-900 block font-semibold mb-0.5">
                      Contribuição Concreta:
                    </strong>
                    <span className="text-slate-800 font-medium">"{cs.contribution}"</span>
                  </div>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
                <span>Homologado e executado</span>
                <span className="font-mono text-emerald-600 font-bold">● Validado</span>
              </div>
            </div>
          ))}
        </div>
        <PageBottomNav
          onNavigate={onNavigate}
          prevRoute={{ label: 'Metodologia', path: '/metodologia' }}
          nextRoute={{ label: 'Sobre Pietro', path: '/sobre' }}
        />

      </div>
    </div>
  );
};
