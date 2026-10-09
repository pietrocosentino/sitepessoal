import React from 'react';
import { CheckCircle2 } from 'lucide-react';
import { PageTopNav, PageBottomNav } from '../components/PageNavigation';

interface MethodologyPageProps {
  onNavigate: (path: string) => void;
}

export const MethodologyPage: React.FC<MethodologyPageProps> = ({
  onNavigate,
}) => {
  const steps = [
    {
      step: '01',
      name: 'Entender',
      tag: 'Diagnóstico & Contexto',
      summary: 'Compreender o contexto do negócio, objetivos, usuários e reais dores.',
      description:
        'Diagnóstico profundo antes de propor qualquer solução ou linha de código. Mapeamento de partes interessadas, restrições e definição do critério de sucesso.',
      deliverables: [
        'Mapeamento de stakeholders e objetivos estratégicos',
        'Diagnóstico de causa-raiz (problema real vs. sintomas)',
        'Definição de métricas de sucesso e viabilidade',
      ],
    },
    {
      step: '02',
      name: 'Estruturar',
      tag: 'Engenharia de Requisitos',
      summary: 'Organizar processos, requisitos, regras de negócio e prioridades.',
      description:
        'Transformação de necessidades em documentação analítica e modelagem de processos (BPMN), prevenindo retrabalho e inconsistências.',
      deliverables: [
        'Especificação de requisitos funcionais e regras de negócio',
        'Modelagem visual de processos e fluxogramas operacionais',
        'Matriz de riscos e dependências técnicas',
      ],
    },
    {
      step: '03',
      name: 'Conectar',
      tag: 'Ponte Negócio-Tecnologia',
      summary: 'Traduzir necessidades de negócio para equipes técnicas de forma inequívoca.',
      description:
        'Facilitação contínua entre liderança executiva e equipes de desenvolvimento. Definição de critérios de aceite e refinamento conjunto de itens de backlog.',
      deliverables: [
        'Critérios de aceite claros (Definition of Done e Definition of Ready)',
        'Refinamento técnico de itens de trabalho com squads de engenharia',
        'Alinhamento contínuo entre expectativas comerciais e restrições técnicas',
      ],
    },
    {
      step: '04',
      name: 'Executar',
      tag: 'Validação & Entrega',
      summary: 'Acompanhar desenvolvimento, testes, homologação e entrega de valor.',
      description:
        'Homologação assistida de funcionalidades com usuários e validação de conformidade entre o escopo contratado e a solução implementada.',
      deliverables: [
        'Acompanhamento de cadência de entrega e sprints',
        'Roteiro de homologação assistida de funcionalidades',
        'Validação de conformidade entre escopo e entrega final',
      ],
    },
  ];

  return (
    <div className="bg-[#fcfcfd] text-slate-900 py-12 sm:py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <PageTopNav
          currentPath="/metodologia"
          currentPageTitle="Metodologia"
          onNavigate={onNavigate}
        />
        <div className="max-w-3xl mb-12">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-slate-950 font-sans tracking-tight leading-tight">
            Metodologia
          </h1>
          <p className="mt-3 text-base sm:text-lg text-slate-600 font-normal leading-relaxed">
            Quatro etapas para entender a necessidade, definir o escopo, alinhar o time e acompanhar a entrega.
          </p>
        </div>
        <div className="space-y-6 mb-8">
          {steps.map((item) => (
            <div
              key={item.step}
              className="p-7 sm:p-9 rounded-lg bg-white border border-slate-200/90  hover:border-slate-300 transition-colors"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
                <div className="lg:col-span-5 space-y-2">
                  <div className="flex items-center gap-3">
                    <span className="text-2xl sm:text-3xl font-mono font-semibold text-emerald-700">
                      {item.step}
                    </span>
                    <span className="text-[11px] font-mono uppercase tracking-wider text-slate-500 font-bold bg-slate-100 px-2.5 py-1 rounded-md border border-slate-200">
                      {item.tag}
                    </span>
                  </div>

                  <h2 className="text-xl font-bold text-slate-950 font-sans">
                    {item.name}
                  </h2>

                  <p className="text-xs sm:text-sm font-semibold text-slate-800 leading-snug">
                    "{item.summary}"
                  </p>

                  <p className="text-xs text-slate-600 leading-relaxed font-normal pt-1">
                    {item.description}
                  </p>
                </div>
                <div className="lg:col-span-7 bg-slate-50 p-5 sm:p-6 rounded-lg border border-slate-200/80">
                  <span className="text-[11px] font-mono uppercase tracking-wider text-slate-400 font-bold block mb-3">
                    Entregáveis & Práticas Desta Etapa:
                  </span>
                  <div className="space-y-2.5">
                    {item.deliverables.map((del, dIdx) => (
                      <div
                        key={dIdx}
                        className="flex items-start gap-2.5 text-xs text-slate-800 font-medium"
                      >
                        <CheckCircle2 className="w-4 h-4 text-emerald-700 shrink-0 mt-0.5" />
                        <span>{del}</span>
                      </div>
                    ))}
                  </div>
                </div>

              </div>
            </div>
          ))}
        </div>
        <PageBottomNav
          onNavigate={onNavigate}
          prevRoute={{ label: 'O Que Eu Faço', path: '/solucoes' }}
          nextRoute={{ label: 'Ver Experiência', path: '/experiencia' }}
        />

      </div>
    </div>
  );
};
