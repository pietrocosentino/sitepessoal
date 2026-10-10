import type { Project } from "../types/portfolio";

export const projects: readonly Project[] = [
  {
    slug: "integracao-academica-moodle",
    title: "Integração entre sistema acadêmico e Moodle",
    sector: "Educação",
    company: "Hyti",
    period: "Jun. 2025 – atual",
    role: "Especialista de Requisitos",
    summary:
      "Regras de matrícula, usuários, cursos e ofertas documentadas para orientar a integração SEED–Moodle.",
    context:
      "Projeto de integração educacional no contexto SENAI-SP. A análise precisava considerar processos acadêmicos, dependências entre sistemas e cenários de exceção antes de orientar o desenvolvimento.",
    responsibilities: [
      "Levantar e mapear regras de negócio com as áreas envolvidas.",
      "Analisar impactos de alterações em matrícula, usuários, cursos e ofertas.",
      "Documentar fluxos de integração, transições de status e exceções.",
      "Relacionar requisitos, regras e critérios de validação para apoiar a homologação.",
    ],
    deliverables: [
      "Especificações funcionais e regras de negócio.",
      "Fluxos de sincronização e cenários de exceção.",
      "Critérios de validação alinhados com stakeholders.",
    ],
    validation:
      "Atuação na validação de requisitos com stakeholders e na definição da cobertura de homologação. O caso descreve o trabalho funcional; não apresenta métricas de redução de tempo ou retrabalho.",
    skills: ["Requisitos", "Integrações", "BPMN", "Rastreabilidade"],
    artifact: {
      title: "Exemplo de fluxo de integração",
      lines: [
        "Consultar a situação acadêmica da matrícula.",
        "Validar os dados necessários e o vínculo com o curso.",
        "Verificar se o usuário já existe no ambiente de aprendizagem.",
        "Criar ou reutilizar o usuário e solicitar a matrícula.",
        "Registrar o retorno; encaminhar falhas para tratamento.",
      ],
    },
  },
  {
    slug: "requisitos-pagamentos-pix",
    title: "Requisitos e validação de fluxos de pagamentos",
    sector: "Serviços financeiros",
    company: "Bluelogic Sistemas e Consultoria",
    period: "Dez. 2022 – jul. 2024",
    role: "Product Owner / Analista de Requisitos",
    summary:
      "Especificação de fluxos de Pix, integrações e critérios de validação para pagamentos, conciliação e reembolso.",
    context:
      "Atuação em pagamentos instantâneos e Open Finance, com fluxos envolvendo SPI, DICT, QR Codes e APIs. A definição funcional precisava considerar regras, integrações e impactos das mudanças.",
    responsibilities: [
      "Mapear fluxos transacionais e especificar requisitos de APIs REST/JSON.",
      "Analisar impactos de mudanças em regras, requisitos e integrações.",
      "Relacionar requisitos de negócio, regras funcionais e evidências de homologação.",
      "Planejar e executar testes de aceitação conforme critérios definidos.",
    ],
    deliverables: [
      "Especificações funcionais de fluxos e integrações.",
      "Diagramas UML e BPMN para comunicação entre sistemas.",
      "Critérios de aceite e cenários de homologação.",
    ],
    validation:
      "Participação em homologação e UAT para verificar o comportamento implementado em relação aos requisitos. Não são divulgados volumes transacionais, métricas financeiras ou informações de clientes.",
    skills: ["Pix", "APIs REST", "UAT", "Análise de impacto"],
    artifact: {
      title: "Exemplo de critérios de aceite para reembolso",
      lines: [
        "Dado um pagamento elegível, quando o reembolso for solicitado, então a solicitação deve ser vinculada à transação original.",
        "Dado um pedido já registrado, quando a mesma solicitação for repetida, então o sistema deve evitar um segundo processamento.",
        "Dada uma falha na integração, quando a resposta for recebida, então o status e a ocorrência devem ser registrados para tratamento.",
      ],
    },
  },
  {
    slug: "analise-funcional-power-platform",
    title: "Definição funcional de soluções corporativas",
    sector: "Sistemas corporativos",
    company: "Smart Consulting",
    period: "Abr. 2022 – nov. 2022",
    role: "Analista de Sistemas / Analista Funcional",
    summary:
      "Entrevistas, definição de escopo e especificações para projetos em Microsoft Power Platform.",
    context:
      "Projetos com clientes corporativos em Microsoft Power Platform. A atuação funcional conectava as necessidades operacionais à definição do escopo e à orientação do desenvolvimento.",
    responsibilities: [
      "Conduzir reuniões de kickoff e entrevistas com os clientes.",
      "Elaborar especificações funcionais, casos de uso e fluxogramas.",
      "Validar requisitos com sponsors e esclarecer o escopo.",
      "Analisar solicitações de mudança e alinhar impactos com os envolvidos.",
    ],
    deliverables: [
      "Especificações funcionais e casos de uso.",
      "Fluxogramas de processos.",
      "Definições de escopo discutidas com sponsors.",
    ],
    validation:
      "Requisitos e escopo revisados em sessões de validação com sponsors. O exemplo abaixo demonstra a estrutura de análise; não reproduz requisitos de um cliente específico.",
    skills: ["Análise funcional", "Power Platform", "Escopo", "Stakeholders"],
    artifact: {
      title: "Exemplo de análise de uma mudança de escopo",
      lines: [
        "Registrar a solicitação e a necessidade que a motivou.",
        "Identificar regras, telas, dados e integrações afetados.",
        "Discutir dependências e esforço com o time técnico.",
        "Apresentar opções de escopo e impactos aos responsáveis.",
        "Documentar a decisão e atualizar requisitos e critérios.",
      ],
    },
  },
];
