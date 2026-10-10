import { ptContent } from "./pt";
import type { PortfolioContent } from "./types";
export const enContent: PortfolioContent = {
  profile: {
    ...ptContent.profile,
    headline:
      "Requirements Analyst · Systems Analyst · Senior Functional Analyst",
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
      title: "Product Growth",
      issuer: "PM3",
      issued: "Aug 2026",
    },
    {
      title: "Product Marketing",
      issuer: "PM3",
      issued: "Aug 2026",
    },
    {
      title: "Product Discovery",
      issuer: "PM3",
      issued: "Nov 2025",
    },
    {
      title: "Product Design",
      issuer: "PM3",
      issued: "Feb 2026",
    },
    {
      title: "Product Manager",
      issuer: "PM3",
      issued: "Apr 2025",
    },
    {
      title: "Scrum Foundation Professional Certificate (SFPC)",
      issuer: "CertiProf",
      issued: "Jun 2024",
    },
    {
      title: "CPRE-FL Certification Preparation Course",
      issuer: "Udemy",
      issued: "Oct 2024",
    },
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
      company: "Hyti",
      period: "Jun 2025 – present",
      role: "Requirements Specialist",
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
};
