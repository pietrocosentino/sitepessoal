import type { Experience } from "../types/portfolio";

export const profile = {
  name: "Pietro Cosentino",
  fullName: "Pietro Ferreira Cosentino",
  headline:
    "Analista de Requisitos · Analista de Sistemas · Analista Funcional Sênior",
  summary:
    "9 anos entre negócios e tecnologia, com experiência em sistemas SaaS, levantamento de requisitos, análise funcional e gestão de backlog.",
  location: "São Paulo, Brasil",
  email: "pietrocosentino88@gmail.com",
  phone: "+55 (11) 98459-7523",
  linkedin: "https://www.linkedin.com/in/pietro-cosentino/",
  whatsapp:
    "https://wa.me/5511984597523?text=" +
    encodeURIComponent(
      "Olá Pietro! Gostaria de conversar sobre uma oportunidade profissional.",
    ),
  resumePath: "/documentos/Pietro_Cosentino_Curriculo.pdf",
};

export const experiences: readonly Experience[] = [
  {
    company: "Hyti",
    role: "Especialista de Requisitos",
    period: "Jun. 2025 – atual",
    contributions: [
      "Levantamento, análise, documentação e validação de requisitos funcionais e não funcionais.",
      "Análise de impacto, controle de mudanças e rastreabilidade entre requisitos, histórias e cenários de testes.",
    ],
  },
  {
    company: "CRP Tecnologia",
    role: "Analista de Requisitos",
    period: "Ago. 2024 – mai. 2025",
    contributions: [
      "Especificação de integração educacional entre SEED e Moodle no contexto SENAI-SP.",
      "Mapeamento de regras, dependências e cenários de exceção; validação com stakeholders.",
    ],
  },
  {
    company: "Bluelogic Sistemas e Consultoria",
    role: "Product Owner / Analista de Requisitos",
    period: "Dez. 2022 – jul. 2024",
    contributions: [
      "Especificação de fluxos de Pix e Open Finance, requisitos de APIs e regras de conciliação e reembolso.",
      "Modelagem funcional, análise de impactos e apoio à homologação e aos testes de aceitação.",
    ],
  },
  {
    company: "Smart Consulting",
    role: "Analista de Sistemas / Analista Funcional",
    period: "Abr. 2022 – nov. 2022",
    contributions: [
      "Entrevistas e definição de escopo para projetos em Microsoft Power Platform.",
      "Especificações funcionais, casos de uso e validação de requisitos com sponsors.",
    ],
  },
  {
    company: "Engineering Brasil",
    role: "Analista de Sistemas / Funcional",
    period: "Nov. 2020 – abr. 2022",
    contributions: [
      "Validação de contratos e payloads de APIs com Postman e SoapUI.",
      "Investigação de falhas com logs/Elastic e apoio à sustentação e evolução de sistemas.",
    ],
  },
  {
    company: "Flytour Corporação",
    role: "Product Owner / Analista de Sistemas",
    period: "Dez. 2017 – out. 2020",
    contributions: [
      "Requisitos de viagens corporativas, cancelamentos e pagamentos.",
      "Priorização de backlog, planejamento de releases e testes de aceitação.",
    ],
  },
];

export const education = [
  {
    title: "MBA em Inteligência Artificial para Negócios",
    institution: "Impacta Tecnologia",
    status: "Em andamento",
  },
  {
    title: "MBA em Desenvolvimento Mobile",
    institution: "Unyleya",
    status: "Concluído",
  },
  {
    title: "Pós-graduação em Desenvolvimento de Sistemas com Java",
    institution: "Unyleya",
    status: "Concluída",
  },
  {
    title: "Bacharelado em Sistemas de Informação",
    institution: "Universidade Paulista — UNIP",
    status: "Concluído",
  },
];
export const credentials = [
  {
    title: "Product Growth",
    issuer: "PM3",
    issued: "Ago. 2026",
  },
  {
    title: "Product Marketing",
    issuer: "PM3",
    issued: "Ago. 2026",
  },
  {
    title: "Product Discovery",
    issuer: "PM3",
    issued: "Nov. 2025",
  },
  {
    title: "Product Design",
    issuer: "PM3",
    issued: "Fev. 2026",
  },
  {
    title: "Product Manager",
    issuer: "PM3",
    issued: "Abr. 2025",
  },
  {
    title: "Scrum Foundation Professional Certificate (SFPC)",
    issuer: "CertiProf",
    issued: "Jun. 2024",
  },
  {
    title: "Curso preparatório para Certificação CPRE-FL",
    issuer: "Udemy",
    issued: "Out. 2024",
  },
];
export const competencies = [
  {
    title: "Requisitos e documentação",
    use: "Regras de negócio, histórias de usuário, requisitos funcionais e não funcionais e critérios de aceite.",
  },
  {
    title: "BPMN e UML",
    use: "Modelagem de processos, fluxos principais, alternativas e exceções.",
  },
  {
    title: "Azure DevOps, Jira e Confluence",
    use: "Gestão de backlog, documentação e rastreabilidade de requisitos.",
  },
  {
    title: "Postman e SoapUI",
    use: "Validação de contratos, payloads e cenários de integração de APIs.",
  },
  {
    title: "SQL",
    use: "Conhecimentos em consultas e análise de dados para apoiar a análise funcional.",
  },
  {
    title: "Scrum e Kanban",
    use: "Refinamento, planejamento e acompanhamento de entregas com times multidisciplinares.",
  },
];
