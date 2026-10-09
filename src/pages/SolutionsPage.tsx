import React, { useState } from 'react';
import {
  Compass,
  Layers,
  FileCode2,
  Cpu,
  CheckCircle2,
  AlertCircle,
  MessageSquare,
  ArrowRight,
} from 'lucide-react';
import { PageTopNav, PageBottomNav } from '../components/PageNavigation';

interface SolutionsPageProps {
  onNavigate: (path: string) => void;
}

export const SolutionsPage: React.FC<SolutionsPageProps> = ({
  onNavigate,
}) => {
  const [activeSolution, setActiveSolution] = useState<number>(0);

  const coreBlocks = [
    {
      id: 0,
      title: 'Estratégia e Negócios',
      tag: 'Alinhamento & Viabilidade',
      icon: Compass,
      headline:
        'Transformo ambições comerciais em escopos técnicos viáveis, eliminando o atrito entre diretoria e engenharia para garantir ROI real desde o dia um.',
      description:
        'Atuação consultiva de ponta a ponta para validar a viabilidade técnica de projetos, mapear oportunidades de mercado e desenhar arquiteturas de produto sem desperdício de tempo ou capital.',
      scenarios: [
        {
          trigger: 'Falta de sinergia entre áreas?',
          detail:
            'Alinhamento claro e contínuo entre a diretoria estratégica, a operação comercial e o time técnico de desenvolvimento.',
        },
        {
          trigger: 'Risco de queimar orçamento à toa?',
          detail:
            'Validação rigorosa de viabilidade técnica e de negócio antes de investir tempo e capital precioso em desenvolvimento.',
        },
        {
          trigger: 'Desafios comerciais sem estrutura técnica?',
          detail:
            'Transformação de demandas complexas e vagas em estratégias executáveis e de alto impacto para a organização.',
        },
      ],
      deliverables: [
        {
          name: 'Diagnóstico Estratégico de Viabilidade',
          benefit:
            'Relatório executivo com riscos mapeados, estimativa de viabilidade técnica e clareza sobre o retorno do investimento.',
        },
        {
          name: 'Roadmap Executivo Alinhado',
          benefit:
            'Cronograma estratégico que traduz metas de negócios em entregas claras e marcos mensuráveis para os desenvolvedores.',
        },
        {
          name: 'Matriz de Priorização de Valor',
          benefit:
            'Critérios objetivos para definir o que traz mais retorno financeiro e operacional com menor esforço de entrega.',
        },
      ],
    },
    {
      id: 1,
      title: 'Produto',
      tag: 'Priorização & Backlog',
      icon: Layers,
      headline:
        'Organizo e priorizo backlogs considerando as necessidades dos usuários, os objetivos do negócio e as restrições do time.',
      description:
        'Gestão de produto orientada a impacto: definição precisa de MVPs, rituais ágeis sem burocracia e entrega contínua do que realmente move os ponteiros do negócio.',
      scenarios: [
        {
          trigger: 'Backlog inchado e desorganizado?',
          detail:
            'Dezenas de demandas concorrentes de múltiplos stakeholders sem critério analítico de prioridade e retorno sobre investimento.',
        },
        {
          trigger: 'Features entregues sem tração ou uso?',
          detail:
            'Recursos custosos desenvolvidos que os clientes finais ignoram ou que não geram impacto financeiro mensurável.',
        },
        {
          trigger: 'Descompasso entre sprints e metas corporativas?',
          detail:
            'Times de engenharia acelerados, mas desconectados dos prazos e objetivos comerciais da liderança.',
        },
      ],
      deliverables: [
        {
          name: 'Product Backlog Estruturado & Priorizado',
          benefit:
            'Matriz analítica de priorização contínua com foco em velocidade de geração de valor e redução de desperdício.',
        },
        {
          name: 'Definição e Validação de MVP',
          benefit:
            'Escopo enxuto, viável e validado para testar hipóteses com o menor custo e risco possíveis no mercado.',
        },
        {
          name: 'Rituais Ágeis e Gestão de Fluxo',
          benefit:
            'Sincronia contínua entre diretoria e squads, garantindo previsibilidade de releases e visibilidade executiva.',
        },
      ],
    },
    {
      id: 2,
      title: 'Requisitos',
      tag: 'Engenharia & Especificação',
      icon: FileCode2,
      headline:
        'Especificações blindadas e regras de negócio inequívocas para eliminar o retrabalho e garantir previsibilidade absoluta de entrega.',
      description:
        'Engenharia de requisitos de alto nível: mapeamento cirúrgico de processos, critérios de aceite inegociáveis (Definition of Done) e fluxos que desenvolvedores executam com clareza.',
      scenarios: [
        {
          trigger: 'Retrabalho e código descartado?',
          detail:
            'Desenvolvedores codificando com base em suposições próprias por falta de regras de negócio documentadas.',
        },
        {
          trigger: 'Escopos abertos e prazos estourados?',
          detail:
            'Projetos que sofrem alterações diárias sem governança, multiplicando o custo original de implementação.',
        },
        {
          trigger: 'Falhas críticas em produção pós-entrega?',
          detail:
            'Funcionalidades liberadas com comportamentos de exceção não especificados ou regras operacionais inconsistentes.',
        },
      ],
      deliverables: [
        {
          name: 'Especificação Funcional e Não-Funcional Rigorosa',
          benefit:
            'Documentação técnica completa, precisa e padronizada para arquitetos, desenvolvedores e auditores.',
        },
        {
          name: 'Modelagem Visual de Processos (BPMN / UML)',
          benefit:
            'Diagramas operacionais de ponta a ponta cobrindo fluxos principais, caminhos alternativos e tratamentos de exceção.',
        },
        {
          name: 'Critérios de Aceite Inequívocos (DoD & DoR)',
          benefit:
            'Contrato objetivo de qualidade e completude que elimina interpretações dúbias e blindagens contra defeitos.',
        },
      ],
    },
    {
      id: 3,
      title: 'Tecnologia',
      tag: 'Tradução Técnica & APIs',
      icon: Cpu,
      headline:
        'Conecto as necessidades do negócio à análise funcional dos sistemas, documentando regras, fluxos e integrações junto ao time técnico.',
      description:
        'Intermediação qualificada entre áreas funcionais e equipes técnicas: contratos de APIs, integridade de dados e escolhas de tecnologia adequadas ao porte da operação.',
      scenarios: [
        {
          trigger: 'Ruído de comunicação entre diretoria e TI?',
          detail:
            'Dificuldade mútua de diálogo entre quem decide as metas comerciais e quem projeta a engenharia do software.',
        },
        {
          trigger: 'Integrações frágeis e quebras sistêmicas?',
          detail:
            'APIs e conexões entre sistemas legados e novas plataformas que falham sem rastreabilidade ou tolerância a erros.',
        },
        {
          trigger: 'Contratação de soluções técnicas inadequadas?',
          detail:
            'Investimento em ferramentas corporativas ou arquiteturas com custo e complexidade desproporcionais à realidade do negócio.',
        },
      ],
      deliverables: [
        {
          name: 'Mapeamento de Arquitetura Funcional e Dados',
          benefit:
            'Visão integrada de fluxos sistêmicos, modelos transacionais e políticas de consistência e segurança.',
        },
        {
          name: 'Especificação de Contratos de APIs e Webhooks',
          benefit:
            'Definição técnica precisa de endpoints, payloads e padrões de integração entre serviços internos e plataformas parceiras.',
        },
        {
          name: 'Plano de Homologação e Validação Sistêmica',
          benefit:
            'Roteiro estruturado de testes funcionais para assegurar conformidade e estabilidade antes do go-live.',
        },
      ],
    },
  ];

  const current = coreBlocks[activeSolution];

  const whatsappConsultUrl = `https://wa.me/5511984597523?text=${encodeURIComponent(
    `Olá Pietro! Vi a sua atuação em "${current.title}" no seu site e quero esse nível de alinhamento no meu projeto. Vamos agendar uma conversa?`
  )}`;

  return (
    <div className="bg-[#fcfcfd] text-slate-900 py-12 sm:py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <PageTopNav
          currentPath="/solucoes"
          currentPageTitle="O Que Eu Faço"
          onNavigate={onNavigate}
        />
        <div className="max-w-4xl mb-12">
          <span className="text-xs font-mono uppercase tracking-[0.2em] text-sky-600 font-bold block mb-3">
            O QUE EU FAÇO · ESTRUTURAÇÃO DE SOLUÇÕES
          </span>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-slate-950 font-sans tracking-tight leading-tight">
            O que posso fazer pelo seu projeto
          </h1>
          <p className="mt-4 text-base sm:text-lg text-slate-600 font-normal leading-relaxed">
            Levantamento de requisitos, organização de backlog e análise funcional para apoiar a definição e a entrega de sistemas.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5 mb-8">
          {coreBlocks.map((block, idx) => {
            const Icon = block.icon;
            const isActive = activeSolution === idx;
            return (
              <button
                key={block.id}
                type="button"
                onClick={() => setActiveSolution(idx)}
                aria-pressed={isActive}
                className={`relative p-5 rounded-lg text-left transition-all border cursor-pointer flex flex-col justify-between overflow-hidden group ${
                  isActive
                    ? 'bg-slate-950 text-white border-slate-950  ring-2 ring-emerald-500/50'
                    : 'bg-white hover:bg-slate-50 text-slate-700 border-slate-200/90 hover:border-slate-300 '
                }`}
              >
                {isActive && (
                  <div className="absolute top-0 left-0 right-0 h-1 bg-emerald-700" />
                )}

                <div>
                  <div className="flex items-center justify-between mb-2.5">
                    <span
                      className={`text-xs font-mono font-bold ${
                        isActive ? 'text-emerald-300' : 'text-slate-400'
                      }`}
                    >
                      0{idx + 1}
                    </span>
                    <Icon
                      className={`w-4 h-4 transition-transform group-hover:scale-110 ${
                        isActive ? 'text-emerald-300' : 'text-slate-500'
                      }`}
                    />
                  </div>
                  <h2
                    className={`text-sm sm:text-base font-bold leading-tight font-sans ${
                      isActive ? 'text-white' : 'text-slate-950'
                    }`}
                  >
                    {block.title}
                  </h2>
                </div>

                <div className="mt-3.5 pt-2 border-t border-slate-100/10 flex items-center justify-between">
                  <span
                    className={`text-[11px] font-mono block truncate ${
                      isActive ? 'text-sky-300 font-semibold' : 'text-slate-500'
                    }`}
                  >
                    {block.tag}
                  </span>
                  <span
                    className={`text-[10px] font-bold ${
                      isActive ? 'text-emerald-300' : 'text-slate-300 group-hover:text-slate-500'
                    }`}
                  >
                    {isActive ? '● Ativo' : 'Explorar'}
                  </span>
                </div>
              </button>
            );
          })}
        </div>
        <div className="p-7 sm:p-10 lg:p-12 rounded-lg bg-white border border-slate-200/90  mb-12">
          <div className="max-w-4xl mb-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 border border-blue-200/70 text-emerald-800 text-xs font-mono font-bold uppercase tracking-wider mb-4">
              <span>Frente 0{activeSolution + 1}</span>
              <span>·</span>
              <span>{current.tag}</span>
            </div>

            <h2 className="text-2xl sm:text-3xl font-semibold text-slate-950 font-sans tracking-tight mb-4">
              {current.title}
            </h2>
            <p className="text-lg sm:text-xl lg:text-2xl text-slate-900 font-bold leading-snug font-sans mb-3 text-balance">
              "{current.headline}"
            </p>
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
              {current.description}
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 pt-8 border-t border-slate-100">
            <div className="p-6 sm:p-7 rounded-lg bg-slate-50 border border-slate-200/80 space-y-4">
              <div className="flex items-center gap-2">
                <AlertCircle className="w-4 h-4 text-amber-600 shrink-0" />
                <h3 className="text-xs font-mono uppercase tracking-wider text-slate-700 font-bold">
                  Cenários Típicos Onde Eu Atuo (Dores Reais):
                </h3>
              </div>

              <div className="space-y-3">
                {current.scenarios.map((sc, i) => (
                  <div
                    key={i}
                    className="p-4 rounded-md bg-white border border-slate-200/90  space-y-1"
                  >
                    <strong className="text-xs sm:text-sm font-bold text-slate-950 block font-sans">
                      {sc.trigger}
                    </strong>
                    <p className="text-xs text-slate-600 leading-relaxed font-normal">
                      {sc.detail}
                    </p>
                  </div>
                ))}
              </div>
            </div>
            <div className="p-6 sm:p-7 rounded-lg bg-white border border-blue-200/80  space-y-4">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-700 shrink-0" />
                <h3 className="text-xs font-mono uppercase tracking-wider text-blue-900 font-bold">
                  Entregáveis Concretos (Benefício Tangível):
                </h3>
              </div>

              <div className="space-y-3">
                {current.deliverables.map((del, i) => (
                  <div
                    key={i}
                    className="p-4 rounded-md bg-emerald-50/50 border border-blue-100 space-y-1"
                  >
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-700 shrink-0" />
                      <strong className="text-xs sm:text-sm font-bold text-slate-900 font-sans">
                        {del.name}
                      </strong>
                    </div>
                    <p className="text-xs text-slate-700 leading-relaxed font-normal pl-6">
                      {del.benefit}
                    </p>
                  </div>
                ))}
              </div>
            </div>

          </div>
          <div className="mt-10 pt-8 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-5 bg-slate-950 text-white p-6 sm:p-8 rounded-lg ">
            <div className="space-y-1 text-center sm:text-left">
              <span className="text-[11px] font-mono uppercase tracking-wider text-emerald-300 font-bold block">
                Alinhamento Executivo & Técnico
              </span>
              <h4 className="text-base sm:text-lg font-bold font-sans text-white">
                Precisa estruturar essa frente no seu projeto?
              </h4>
              <p className="text-xs text-slate-300 max-w-xl">
                Uma conversa para entender o contexto, as dificuldades e os próximos passos do projeto.
              </p>
            </div>

            <a
              href={whatsappConsultUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-md bg-[#25D366] hover:bg-[#20ba59] text-white font-bold text-xs sm:text-sm transition-all   shrink-0 cursor-pointer"
            >
              <MessageSquare className="w-4 h-4 fill-current" />
              <span>Quero este nível de alinhamento no meu projeto — Agendar Conversa</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>

        </div>
        <PageBottomNav
          onNavigate={onNavigate}
          nextRoute={{ label: 'Ver Metodologia', path: '/metodologia' }}
        />

      </div>
    </div>
  );
};
