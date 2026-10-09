import React from 'react';
import {
  GraduationCap,
  Award,
  CheckCircle2,
  Linkedin,
} from 'lucide-react';
import { PageTopNav, PageBottomNav } from '../components/PageNavigation';

interface AboutPageProps {
  onNavigate: (path: string) => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ onNavigate }) => {
  const education = [
    {
      degree: 'MBA em Inteligência Artificial para Negócios',
      institution: 'Especialização Executiva',
      focus: 'Aplicação prática de IA generativa, análise estratégica de dados e automação de decisões corporativas.',
    },
    {
      degree: 'MBA em Desenvolvimento Mobile',
      institution: 'Pós-Graduação',
      focus: 'Arquitetura de soluções móveis, usabilidade, integração com APIs e produtos digitais.',
    },
    {
      degree: 'Pós-Graduação em Desenvolvimento Java',
      institution: 'Especialização Técnica',
      focus: 'Engenharia de software empresarial, microsserviços, modelagem orientada a objetos e escalabilidade.',
    },
    {
      degree: 'Bacharelado em Sistemas de Informação',
      institution: 'Graduação',
      focus: 'Fundamentos de computação, modelagem de banco de dados, engenharia de software e análise de sistemas.',
    },
  ];

  const credentials = [
    'Certificação Scrum Professional (Gestão Ágil de Entregas)',
    'Formação Avançada em Product Management & Discovery',
    'Modelagem de Processos Corporativos (BPMN)',
    'Engenharia de Requisitos & Critérios de Aceite (DoD / DoR)',
  ];

  const methods = ['Scrum', 'Kanban', 'Lean', 'Discovery Contínuo'];

  const tools = [
    'Azure DevOps',
    'Jira Software',
    'Confluence',
    'Postman',
    'Miro & Figma',
    'SQL & Modelagem de Dados',
  ];

  return (
    <div className="bg-[#fcfcfd] text-slate-900 py-12 sm:py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <PageTopNav
          currentPath="/sobre"
          currentPageTitle="Sobre"
          onNavigate={onNavigate}
        />
        <div className="max-w-3xl mb-12">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-slate-950 font-sans tracking-tight leading-tight">
            Sobre Pietro Cosentino
          </h1>
          <p className="mt-3 text-lg sm:text-xl text-emerald-700 font-semibold font-sans">
            Soluções em negócios para tecnologia
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-14">
          <div className="lg:col-span-8 space-y-4 bg-white p-7 sm:p-9 rounded-lg border border-slate-200/90 ">
            <h2 className="text-lg sm:text-xl font-bold text-slate-900 font-sans">
              Visão Executiva & Rigor Técnico
            </h2>

            <p className="text-sm sm:text-base text-slate-700 leading-relaxed font-normal">
              Com mais de <strong>9 anos de trajetória</strong>, minha atuação concentra-se em aproximar os objetivos estratégicos de negócio e a capacidade de execução técnica.
            </p>

            <p className="text-sm sm:text-base text-slate-700 leading-relaxed font-normal">
              A experiência acumulada como Product Manager, analista de sistemas e especialista em requisitos permite que eu atue com a mesma fluidez tanto em reuniões de diretoria quanto no refinamento técnico junto às squads de engenharia de software.
            </p>
            <div className="pt-4 grid grid-cols-1 sm:grid-cols-2 gap-3 border-t border-slate-100">
              <div className="flex items-start gap-2 text-xs text-slate-700 font-medium">
                <CheckCircle2 className="w-4 h-4 text-emerald-700 shrink-0 mt-0.5" />
                <span>Alinhamento de requisitos com as áreas de negócio</span>
              </div>
              <div className="flex items-start gap-2 text-xs text-slate-700 font-medium">
                <CheckCircle2 className="w-4 h-4 text-emerald-700 shrink-0 mt-0.5" />
                <span>Comunicação fluida entre diretoria e engenharia</span>
              </div>
              <div className="flex items-start gap-2 text-xs text-slate-700 font-medium">
                <CheckCircle2 className="w-4 h-4 text-emerald-700 shrink-0 mt-0.5" />
                <span>Rigor analítico em requisitos e critérios de aceite</span>
              </div>
              <div className="flex items-start gap-2 text-xs text-slate-700 font-medium">
                <CheckCircle2 className="w-4 h-4 text-emerald-700 shrink-0 mt-0.5" />
                <span>Aplicação prática e responsável de Inteligência Artificial</span>
              </div>
            </div>
          </div>
          <div className="lg:col-span-4 space-y-6">
            <div className="p-7 rounded-lg bg-slate-950 text-white border border-slate-800 ">
              <span className="text-[11px] font-mono uppercase tracking-wider text-blue-400 font-bold block mb-2">
                Perfil Profissional
              </span>
              <h3 className="text-lg font-bold text-white mb-2">
                Pietro Cosentino
              </h3>
              <p className="text-xs text-slate-300 leading-relaxed mb-5 font-normal">
                Consultor em soluções de negócio, Product Management e Engenharia de Requisitos para iniciativas complexas de tecnologia.
              </p>

              <div className="space-y-2.5 pt-4 border-t border-slate-800 text-xs">
                <div>
                  <span className="text-slate-500 block text-[11px]">Experiência:</span>
                  <span className="text-slate-200 font-medium">9+ anos entre negócio e tecnologia</span>
                </div>
                <div>
                  <span className="text-slate-500 block text-[11px]">Localização:</span>
                  <span className="text-slate-200 font-medium">Brasil · Atuação Remota & Consultiva</span>
                </div>
              </div>

              <div className="pt-6">
                <a
                  href="https://www.linkedin.com/in/pietrocosentino/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3 rounded-md bg-slate-900 hover:bg-slate-800 border border-slate-700 text-slate-200 hover:text-white text-xs font-bold text-center transition-colors cursor-pointer flex items-center justify-center gap-2"
                >
                  <Linkedin className="w-3.5 h-3.5 text-blue-400" />
                  <span>Conectar no LinkedIn</span>
                </a>
              </div>
            </div>
          </div>

        </div>
        <div className="mb-14">
          <div className="max-w-2xl mb-8">
            <h2 className="text-xl sm:text-2xl font-semibold text-slate-950 tracking-tight">
              Formação & Especializações
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {education.map((item, idx) => (
              <div
                key={idx}
                className="p-6 rounded-lg bg-white border border-slate-200/90  hover:border-slate-300 transition-colors"
              >
                <div className="flex items-center gap-2 mb-2">
                  <GraduationCap className="w-4 h-4 text-emerald-700" />
                  <span className="text-[11px] font-mono text-slate-500 font-bold">
                    {item.institution}
                  </span>
                </div>
                <h3 className="text-base font-bold text-slate-900 mb-2">
                  {item.degree}
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed font-normal">
                  {item.focus}
                </p>
              </div>
            ))}
          </div>
          <div className="mt-6 p-6 rounded-lg bg-slate-50 border border-slate-200/90">
            <span className="text-xs font-mono uppercase tracking-wider text-slate-500 font-bold block mb-3">
              Certificações & Imersões Práticas
            </span>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {credentials.map((cred, i) => (
                <div key={i} className="flex items-center gap-2 text-xs text-slate-700 font-medium">
                  <Award className="w-4 h-4 text-emerald-700 shrink-0" />
                  <span>{cred}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="p-7 sm:p-9 rounded-lg bg-white border border-slate-200/90  mb-8">
          <h2 className="text-xl sm:text-2xl font-semibold text-slate-950 tracking-tight mb-6">
            Metodologias e Ferramentas
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-xs font-mono uppercase tracking-wider text-slate-400 font-bold mb-3">
                Metodologias
              </h3>
              <div className="flex flex-wrap gap-2">
                {methods.map((m, i) => (
                  <span
                    key={i}
                    className="px-3 py-1.5 rounded-lg bg-slate-100 text-slate-800 text-xs font-semibold border border-slate-200"
                  >
                    {m}
                  </span>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-xs font-mono uppercase tracking-wider text-slate-400 font-bold mb-3">
                Ferramentas de Gestão & Análise
              </h3>
              <div className="flex flex-wrap gap-2">
                {tools.map((t, i) => (
                  <span
                    key={i}
                    className="px-3 py-1.5 rounded-lg bg-slate-100 text-slate-800 text-xs font-semibold border border-slate-200"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
        <PageBottomNav
          onNavigate={onNavigate}
          prevRoute={{ label: 'Experiência', path: '/experiencia' }}
          nextRoute={{ label: 'Ver Insights', path: '/insights' }}
        />

      </div>
    </div>
  );
};
