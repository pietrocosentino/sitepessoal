import { ptContent } from "./pt";
import type { PortfolioContent } from "./types";
export const enContent: PortfolioContent = {
  profile: {
    ...ptContent.profile,
    headline: "Senior Requirements and Functional Systems Analyst",
    summary:
      "9 years bridging business and technology, with experience in SaaS systems, requirements elicitation, functional analysis and backlog management.",
    location: "São Paulo, Brazil",
    resumePath: "/documentos/Pietro_Cosentino_Resume_EN.pdf",
    whatsapp:
      "https://wa.me/5511984597523?text=" +
      encodeURIComponent(
        "Hello Pietro! I would like to discuss a professional opportunity.",
      ),
  },
  experiences: [
    {
      company: "Hyti",
      role: "Requirements Specialist",
      period: "Jun 2025 – present",
      contributions: [
        "Elicitation, analysis, documentation and validation of functional and non-functional requirements.",
        "Impact analysis, change control and traceability between requirements, stories and test scenarios.",
      ],
    },
    {
      company: "CRP Tecnologia",
      role: "Requirements Analyst",
      period: "Aug 2024 – May 2025",
      contributions: [
        "Specification of the SEED–Moodle educational integration in the SENAI-SP context.",
        "Mapping of business rules, dependencies and exception scenarios; stakeholder validation.",
      ],
    },
    {
      company: "Bluelogic Sistemas e Consultoria",
      role: "Product Owner / Requirements Analyst",
      period: "Dec 2022 – Jul 2024",
      contributions: [
        "Specification of Pix and Open Finance flows, API requirements, reconciliation and refund rules.",
        "Functional modelling, impact analysis and support for user acceptance testing.",
      ],
    },
    {
      company: "Smart Consulting",
      role: "Systems Analyst / Functional Analyst",
      period: "Apr 2022 – Nov 2022",
      contributions: [
        "Interviews and scope definition for Microsoft Power Platform projects.",
        "Functional specifications, use cases and requirements validation with sponsors.",
      ],
    },
    {
      company: "Engineering Brasil",
      role: "Systems / Functional Analyst",
      period: "Nov 2020 – Apr 2022",
      contributions: [
        "Validation of API contracts and payloads using Postman and SoapUI.",
        "Incident investigation using logs/Elastic and support for system maintenance and enhancement.",
      ],
    },
    {
      company: "Flytour Corporação",
      role: "Product Owner / Systems Analyst",
      period: "Dec 2017 – Oct 2020",
      contributions: [
        "Requirements for corporate travel, cancellations and payments.",
        "Backlog prioritisation, release planning and acceptance testing.",
      ],
    },
  ],
  education: [
    {
      title: "MBA in Artificial Intelligence for Business",
      institution: "Impacta Tecnologia",
      status: "In progress",
    },
    {
      title: "MBA in Mobile Development",
      institution: "Unyleya",
      status: "Completed",
    },
    {
      title: "Postgraduate Specialisation in Java Systems Development",
      institution: "Unyleya",
      status: "Completed",
    },
    {
      title: "Bachelor’s Degree in Information Systems",
      institution: "Universidade Paulista — UNIP",
      status: "Completed",
    },
  ],
  credentials: [
    {
      title: "Scrum Foundation Professional Certificate (SFPC)",
      issuer: "CertiProf",
    },
    { title: "Product Management Training", issuer: "PM3" },
  ],
  competencies: [
    {
      title: "Requirements and documentation",
      use: "Business rules, user stories, functional and non-functional requirements and acceptance criteria.",
    },
    {
      title: "BPMN and UML",
      use: "Process modelling, main flows, alternatives and exceptions.",
    },
    {
      title: "Azure DevOps, Jira and Confluence",
      use: "Backlog management, documentation and requirements traceability.",
    },
    {
      title: "Postman and SoapUI",
      use: "Validation of API contracts, payloads and integration scenarios.",
    },
    {
      title: "SQL",
      use: "Knowledge of queries and data analysis to support functional analysis.",
    },
    {
      title: "Scrum and Kanban",
      use: "Refinement, planning and delivery tracking with multidisciplinary teams.",
    },
  ],
  projects: [
    {
      slug: "integracao-academica-moodle",
      title: "Academic system integration with Moodle",
      sector: "Education",
      company: "CRP Tecnologia",
      period: "Aug 2024 – May 2025",
      role: "Requirements Analyst",
      summary:
        "Enrolment, user, course and offering rules documented to guide SEED–Moodle integration.",
      context:
        "Educational integration project in the SENAI-SP context. The analysis needed to consider academic processes, system dependencies and exception scenarios before guiding development.",
      responsibilities: [
        "Elicit and map business rules with the departments involved.",
        "Analyse the impact of changes on enrolments, users, courses and offerings.",
        "Document integration flows, status transitions and exceptions.",
        "Link requirements, rules and validation criteria to support acceptance testing.",
      ],
      deliverables: [
        "Functional specifications and business rules.",
        "Synchronisation flows and exception scenarios.",
        "Validation criteria aligned with stakeholders.",
      ],
      validation:
        "Involvement in stakeholder requirements validation and acceptance-test coverage definition. This case describes functional responsibilities; it does not claim measured time savings or rework reductions.",
      skills: ["Requirements", "Integrations", "BPMN", "Traceability"],
      artifact: {
        title: "Illustrative integration flow",
        kind: "flow",
        lines: [
          "Check the academic status of the enrolment.",
          "Validate required data and the course association.",
          "Check whether the user already exists in the learning environment.",
          "Create or reuse the user and request enrolment.",
          "Record the response and route failures for handling.",
        ],
      },
    },
    {
      slug: "requisitos-pagamentos-pix",
      title: "Requirements and validation for payment flows",
      sector: "Financial services",
      company: "Bluelogic Sistemas e Consultoria",
      period: "Dec 2022 – Jul 2024",
      role: "Product Owner / Requirements Analyst",
      summary:
        "Specification of Pix flows, integrations and validation criteria for payments, reconciliation and refunds.",
      context:
        "Work on instant payments and Open Finance, including SPI, DICT, QR codes and APIs. Functional definition needed to consider rules, integrations and change impacts.",
      responsibilities: [
        "Map transaction flows and specify REST/JSON API requirements.",
        "Analyse the impact of changes on rules, requirements and integrations.",
        "Link business requirements, functional rules and acceptance-test evidence.",
        "Plan and execute acceptance tests against defined criteria.",
      ],
      deliverables: [
        "Functional specifications for flows and integrations.",
        "UML and BPMN diagrams for system communication.",
        "Acceptance criteria and testing scenarios.",
      ],
      validation:
        "Participation in user acceptance testing to verify implemented behaviour against requirements. Transaction volumes, financial metrics and client information are not disclosed.",
      skills: ["Pix", "REST APIs", "UAT", "Impact analysis"],
      artifact: {
        title: "Illustrative refund acceptance criteria",
        kind: "criteria",
        lines: [
          "Given an eligible payment, when a refund is requested, then the request must be linked to the original transaction.",
          "Given an existing request, when the same request is repeated, then the system must prevent duplicate processing.",
          "Given an integration failure, when a response is received, then the status and incident must be recorded for handling.",
        ],
      },
    },
    {
      slug: "analise-funcional-power-platform",
      title: "Functional definition of enterprise solutions",
      sector: "Enterprise systems",
      company: "Smart Consulting",
      period: "Apr 2022 – Nov 2022",
      role: "Systems Analyst / Functional Analyst",
      summary:
        "Interviews, scope definition and specifications for Microsoft Power Platform projects.",
      context:
        "Microsoft Power Platform projects with enterprise clients. Functional analysis connected operational needs to scope definition and development guidance.",
      responsibilities: [
        "Run kickoff meetings and client interviews.",
        "Prepare functional specifications, use cases and flowcharts.",
        "Validate requirements with sponsors and clarify scope.",
        "Analyse change requests and align impacts with the parties involved.",
      ],
      deliverables: [
        "Functional specifications and use cases.",
        "Process flowcharts.",
        "Scope definitions discussed with sponsors.",
      ],
      validation:
        "Requirements and scope reviewed in sponsor validation sessions. The example below demonstrates an analysis structure; it does not reproduce a specific client’s requirements.",
      skills: [
        "Functional analysis",
        "Power Platform",
        "Scope",
        "Stakeholders",
      ],
      artifact: {
        title: "Illustrative scope-change analysis",
        kind: "flow",
        lines: [
          "Record the request and the need behind it.",
          "Identify affected rules, screens, data and integrations.",
          "Discuss dependencies and effort with the technical team.",
          "Present scope options and impacts to decision-makers.",
          "Document the decision and update requirements and criteria.",
        ],
      },
    },
  ],
  categories: [
    { id: "all", label: "All insights" },
    { id: "requisitos", label: "Requirements" },
    { id: "produto", label: "Product" },
    { id: "estrategia", label: "Strategy" },
    { id: "ia", label: "Artificial intelligence" },
  ],
  articles: [
    {
      id: "criterios-de-aceite",
      category: "requisitos",
      categoryLabel: "Requirements",
      readTime: "2 min read",
      title: "Acceptance criteria: the behaviour that needs validation",
      lead: "Describing the main scenario is only the beginning. Alternatives and exceptions belong in the discussion too.",
      content:
        "A story can seem clear while leaving questions about mandatory data, permissions or integration failures. When defining acceptance criteria, I make the starting conditions, action and expected behaviour explicit.\n\nFor an enrolment, for example, analysis needs to consider student eligibility, the correct course, duplicates and the response from an integrated system. These scenarios help business, development and testing teams discuss the same delivery.\n\nAcceptance criteria describe the expected behaviour of a story. The Definition of Done establishes shared quality conditions for considering an increment complete. They are complementary concepts, not equivalent.",
    },
    {
      id: "alinhamento-negocio-tecnologia",
      category: "estrategia",
      categoryLabel: "Business analysis",
      readTime: "2 min read",
      title: "Agree on the problem before discussing the solution",
      lead: "A useful requirements meeting produces decisions and identified questions, not just a list of requests.",
      content:
        "When a department requests a feature, I start with the context: who uses the process, where the difficulty lies and what needs to change. I then identify rules, constraints and dependencies.\n\nAlignment with the technical team helps compare alternatives. A decision may change scope, require an integration or depend on data that is not yet available.\n\nRecording decisions, owners and open questions allows discussions to resume without relying on the memory of meeting participants.",
    },
    {
      id: "ia-processos-negocio",
      category: "ia",
      categoryLabel: "AI for business",
      readTime: "2 min read",
      title: "Understand the process before applying AI",
      lead: "Studies and reflections on data, cost and validation of artificial intelligence applications.",
      content:
        "In my MBA in Artificial Intelligence for Business, I study applications in data triage, repetitive tasks and scenario simulation. This content reflects ongoing education, not a claim that I have professionally deployed those use cases.\n\nWhen evaluating a proposal, I consider the problem, available data, information-access risks and the need for human review.\n\nIt is also necessary to define how to assess the outcome: response quality, execution time, costs and error frequency.",
    },
    {
      id: "priorizacao-backlog",
      category: "produto",
      categoryLabel: "Product",
      readTime: "2 min read",
      title: "Prioritise the backlog with context and explicit criteria",
      lead: "Comparing requests requires listening to stakeholders, identifying dependencies and considering user impact.",
      content:
        "An urgent request may matter, but it may compete with another need that has greater impact. When analysing requests, I consider the problem, affected users, dependencies and team constraints.\n\nWhen priorities conflict, the analyst or PO should make options and impacts explicit. The discussion becomes more useful when stakeholders can compare what is included, what waits and what requires a smaller scope.\n\nMetrics can support decisions when reliable data exists. Without measurement, it is better to record a hypothesis and rationale than to present an estimate as a proven outcome.",
    },
  ],
};
