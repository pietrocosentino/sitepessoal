import { ptContent } from "./pt";
import type { PortfolioContent } from "./types";
export const esContent: PortfolioContent = {
  profile: {
    ...ptContent.profile,
    headline: "Analista Sénior de Requisitos y Análisis Funcional de Sistemas",
    summary:
      "9 años entre negocio y tecnología, con experiencia en sistemas SaaS, levantamiento de requisitos, análisis funcional y gestión de backlog.",
    location: "São Paulo, Brasil",
    resumePath: "/documentos/Pietro_Cosentino_CV_ES.pdf",
    whatsapp:
      "https://wa.me/5511984597523?text=" +
      encodeURIComponent(
        "¡Hola Pietro! Me gustaría conversar sobre una oportunidad profesional.",
      ),
  },
  experiences: [
    {
      company: "Hyti",
      role: "Especialista en Requisitos",
      period: "Jun. 2025 – actualidad",
      contributions: [
        "Levantamiento, análisis, documentación y validación de requisitos funcionales y no funcionales.",
        "Análisis de impacto, control de cambios y trazabilidad entre requisitos, historias y escenarios de prueba.",
      ],
    },
    {
      company: "CRP Tecnologia",
      role: "Analista de Requisitos",
      period: "Ago. 2024 – may. 2025",
      contributions: [
        "Especificación de la integración educativa SEED–Moodle en el contexto SENAI-SP.",
        "Mapeo de reglas, dependencias y escenarios de excepción; validación con las partes interesadas.",
      ],
    },
    {
      company: "Bluelogic Sistemas e Consultoria",
      role: "Product Owner / Analista de Requisitos",
      period: "Dic. 2022 – jul. 2024",
      contributions: [
        "Especificación de flujos de Pix y Open Finance, requisitos de API y reglas de conciliación y reembolso.",
        "Modelado funcional, análisis de impacto y apoyo a las pruebas de aceptación de usuarios.",
      ],
    },
    {
      company: "Smart Consulting",
      role: "Analista de Sistemas / Analista Funcional",
      period: "Abr. 2022 – nov. 2022",
      contributions: [
        "Entrevistas y definición del alcance para proyectos en Microsoft Power Platform.",
        "Especificaciones funcionales, casos de uso y validación de requisitos con patrocinadores.",
      ],
    },
    {
      company: "Engineering Brasil",
      role: "Analista de Sistemas / Funcional",
      period: "Nov. 2020 – abr. 2022",
      contributions: [
        "Validación de contratos y cargas útiles de API con Postman y SoapUI.",
        "Investigación de fallos con logs/Elastic y apoyo al mantenimiento y evolución de sistemas.",
      ],
    },
    {
      company: "Flytour Corporação",
      role: "Product Owner / Analista de Sistemas",
      period: "Dic. 2017 – oct. 2020",
      contributions: [
        "Requisitos de viajes corporativos, cancelaciones y pagos.",
        "Priorización de backlog, planificación de versiones y pruebas de aceptación.",
      ],
    },
  ],
  education: [
    {
      title: "MBA en Inteligencia Artificial para Negocios",
      institution: "Impacta Tecnologia",
      status: "En curso",
    },
    {
      title: "MBA en Desarrollo Móvil",
      institution: "Unyleya",
      status: "Finalizado",
    },
    {
      title: "Posgrado en Desarrollo de Sistemas con Java",
      institution: "Unyleya",
      status: "Finalizado",
    },
    {
      title: "Grado en Sistemas de Información",
      institution: "Universidade Paulista — UNIP",
      status: "Finalizado",
    },
  ],
  credentials: [
    {
      title: "Scrum Foundation Professional Certificate (SFPC)",
      issuer: "CertiProf",
    },
    { title: "Formación en Product Management", issuer: "PM3" },
  ],
  competencies: [
    {
      title: "Requisitos y documentación",
      use: "Reglas de negocio, historias de usuario, requisitos funcionales y no funcionales y criterios de aceptación.",
    },
    {
      title: "BPMN y UML",
      use: "Modelado de procesos, flujos principales, alternativas y excepciones.",
    },
    {
      title: "Azure DevOps, Jira y Confluence",
      use: "Gestión de backlog, documentación y trazabilidad de requisitos.",
    },
    {
      title: "Postman y SoapUI",
      use: "Validación de contratos, cargas útiles y escenarios de integración de API.",
    },
    {
      title: "SQL",
      use: "Conocimientos de consultas y análisis de datos para apoyar el análisis funcional.",
    },
    {
      title: "Scrum y Kanban",
      use: "Refinamiento, planificación y seguimiento de entregas con equipos multidisciplinarios.",
    },
  ],
  projects: [
    {
      slug: "integracao-academica-moodle",
      title: "Integración entre sistema académico y Moodle",
      sector: "Educación",
      company: "CRP Tecnologia",
      period: "Ago. 2024 – may. 2025",
      role: "Analista de Requisitos",
      summary:
        "Reglas de matrícula, usuarios, cursos y ofertas documentadas para orientar la integración SEED–Moodle.",
      context:
        "Proyecto de integración educativa en el contexto SENAI-SP. El análisis debía considerar procesos académicos, dependencias entre sistemas y escenarios de excepción antes de orientar el desarrollo.",
      responsibilities: [
        "Levantar y mapear reglas de negocio con las áreas involucradas.",
        "Analizar impactos de cambios en matrículas, usuarios, cursos y ofertas.",
        "Documentar flujos de integración, transiciones de estado y excepciones.",
        "Relacionar requisitos, reglas y criterios de validación para apoyar las pruebas de aceptación.",
      ],
      deliverables: [
        "Especificaciones funcionales y reglas de negocio.",
        "Flujos de sincronización y escenarios de excepción.",
        "Criterios de validación alineados con las partes interesadas.",
      ],
      validation:
        "Participación en la validación de requisitos con las partes interesadas y en la definición de la cobertura de pruebas de aceptación. El caso describe responsabilidades funcionales; no presenta métricas de reducción de tiempo o retrabajo.",
      skills: ["Requisitos", "Integraciones", "BPMN", "Trazabilidad"],
      artifact: {
        title: "Ejemplo de flujo de integración",
        kind: "flow",
        lines: [
          "Consultar el estado académico de la matrícula.",
          "Validar los datos necesarios y la relación con el curso.",
          "Comprobar si el usuario ya existe en el entorno de aprendizaje.",
          "Crear o reutilizar el usuario y solicitar la matrícula.",
          "Registrar la respuesta y derivar los fallos para su tratamiento.",
        ],
      },
    },
    {
      slug: "requisitos-pagamentos-pix",
      title: "Requisitos y validación de flujos de pagos",
      sector: "Servicios financieros",
      company: "Bluelogic Sistemas e Consultoria",
      period: "Dic. 2022 – jul. 2024",
      role: "Product Owner / Analista de Requisitos",
      summary:
        "Especificación de flujos de Pix, integraciones y criterios de validación para pagos, conciliación y reembolso.",
      context:
        "Trabajo en pagos instantáneos y Open Finance, con flujos que involucran SPI, DICT, códigos QR y API. La definición funcional debía considerar reglas, integraciones e impactos de los cambios.",
      responsibilities: [
        "Mapear flujos transaccionales y especificar requisitos de API REST/JSON.",
        "Analizar impactos de cambios en reglas, requisitos e integraciones.",
        "Relacionar requisitos de negocio, reglas funcionales y evidencias de pruebas de aceptación.",
        "Planificar y ejecutar pruebas de aceptación según los criterios definidos.",
      ],
      deliverables: [
        "Especificaciones funcionales de flujos e integraciones.",
        "Diagramas UML y BPMN para la comunicación entre sistemas.",
        "Criterios de aceptación y escenarios de prueba.",
      ],
      validation:
        "Participación en pruebas de aceptación de usuarios para verificar el comportamiento implementado frente a los requisitos. No se divulgan volúmenes transaccionales, métricas financieras ni información de clientes.",
      skills: ["Pix", "API REST", "UAT", "Análisis de impacto"],
      artifact: {
        title: "Ejemplo de criterios de aceptación para reembolso",
        kind: "criteria",
        lines: [
          "Dado un pago elegible, cuando se solicite un reembolso, entonces la solicitud debe vincularse con la transacción original.",
          "Dada una solicitud ya registrada, cuando se repita la misma solicitud, entonces el sistema debe evitar un segundo procesamiento.",
          "Dado un fallo de integración, cuando se reciba la respuesta, entonces el estado y la incidencia deben registrarse para su tratamiento.",
        ],
      },
    },
    {
      slug: "analise-funcional-power-platform",
      title: "Definición funcional de soluciones corporativas",
      sector: "Sistemas corporativos",
      company: "Smart Consulting",
      period: "Abr. 2022 – nov. 2022",
      role: "Analista de Sistemas / Analista Funcional",
      summary:
        "Entrevistas, definición del alcance y especificaciones para proyectos en Microsoft Power Platform.",
      context:
        "Proyectos con clientes corporativos en Microsoft Power Platform. El análisis funcional conectaba las necesidades operativas con la definición del alcance y la orientación del desarrollo.",
      responsibilities: [
        "Conducir reuniones de inicio y entrevistas con clientes.",
        "Elaborar especificaciones funcionales, casos de uso y diagramas de flujo.",
        "Validar requisitos con patrocinadores y aclarar el alcance.",
        "Analizar solicitudes de cambio y alinear impactos con los involucrados.",
      ],
      deliverables: [
        "Especificaciones funcionales y casos de uso.",
        "Diagramas de flujo de procesos.",
        "Definiciones del alcance discutidas con patrocinadores.",
      ],
      validation:
        "Requisitos y alcance revisados en sesiones de validación con patrocinadores. El siguiente ejemplo demuestra una estructura de análisis; no reproduce requisitos de un cliente específico.",
      skills: [
        "Análisis funcional",
        "Power Platform",
        "Alcance",
        "Partes interesadas",
      ],
      artifact: {
        title: "Ejemplo de análisis de un cambio de alcance",
        kind: "flow",
        lines: [
          "Registrar la solicitud y la necesidad que la motivó.",
          "Identificar reglas, pantallas, datos e integraciones afectados.",
          "Discutir dependencias y esfuerzo con el equipo técnico.",
          "Presentar opciones de alcance e impactos a los responsables.",
          "Documentar la decisión y actualizar requisitos y criterios.",
        ],
      },
    },
  ],
  categories: [
    { id: "all", label: "Todas las reflexiones" },
    { id: "requisitos", label: "Requisitos" },
    { id: "produto", label: "Producto" },
    { id: "estrategia", label: "Estrategia" },
    { id: "ia", label: "Inteligencia artificial" },
  ],
  articles: [
    {
      id: "criterios-de-aceite",
      category: "requisitos",
      categoryLabel: "Requisitos",
      readTime: "2 min de lectura",
      title: "Criterios de aceptación: el comportamiento que debe validarse",
      lead: "Describir el escenario principal es solo el comienzo. Las alternativas y excepciones también deben discutirse.",
      content:
        "Una historia puede parecer clara y aun dejar dudas sobre datos obligatorios, permisos o fallos de integración. Al definir criterios de aceptación, explicito las condiciones iniciales, la acción y el comportamiento esperado.\n\nPara una matrícula, por ejemplo, el análisis debe considerar la elegibilidad del alumno, el curso correcto, la duplicidad y la respuesta de un sistema integrado. Estos escenarios ayudan a negocio, desarrollo y pruebas a discutir la misma entrega.\n\nLos criterios de aceptación describen el comportamiento esperado de una historia. La Definition of Done establece condiciones de calidad compartidas para considerar un incremento terminado. Son conceptos complementarios, no equivalentes.",
    },
    {
      id: "alinhamento-negocio-tecnologia",
      category: "estrategia",
      categoryLabel: "Análisis de negocio",
      readTime: "2 min de lectura",
      title: "Alinear el problema antes de discutir la solución",
      lead: "Una buena reunión de requisitos produce decisiones y preguntas identificadas, no solo una lista de solicitudes.",
      content:
        "Cuando un área solicita una funcionalidad, comienzo por el contexto: quién utiliza el proceso, dónde está la dificultad y qué debe cambiar. Después identifico reglas, restricciones y dependencias.\n\nLa alineación con el equipo técnico ayuda a comparar alternativas. Una decisión puede modificar el alcance, exigir una integración o depender de datos que aún no están disponibles.\n\nRegistrar decisiones, responsables y cuestiones pendientes permite retomar la discusión sin depender de la memoria de quienes participaron.",
    },
    {
      id: "ia-processos-negocio",
      category: "ia",
      categoryLabel: "IA para negocios",
      readTime: "2 min de lectura",
      title: "Antes de aplicar IA, entender el proceso",
      lead: "Estudios y reflexiones sobre datos, costos y validación de aplicaciones de inteligencia artificial.",
      content:
        "En el MBA en Inteligencia Artificial para Negocios, estudio aplicaciones en clasificación de datos, tareas repetitivas y simulación de escenarios. Este contenido representa una formación en curso, no una afirmación de implementación profesional de esos casos.\n\nPara evaluar una propuesta, considero el problema, los datos disponibles, los riesgos de acceso a la información y la necesidad de revisión humana.\n\nTambién es necesario definir cómo verificar el resultado: calidad de las respuestas, tiempo de ejecución, costos y frecuencia de errores.",
    },
    {
      id: "priorizacao-backlog",
      category: "produto",
      categoryLabel: "Producto",
      readTime: "2 min de lectura",
      title: "Priorizar el backlog con contexto y criterios explícitos",
      lead: "Comparar solicitudes exige escuchar a las áreas, identificar dependencias y considerar el impacto para los usuarios.",
      content:
        "Una solicitud urgente puede ser relevante, pero también puede competir con otra necesidad de mayor impacto. Al analizar solicitudes, considero el problema, los usuarios afectados, las dependencias y las restricciones del equipo.\n\nCuando las prioridades entran en conflicto, el analista o PO debe explicitar las opciones y sus impactos. La discusión es más útil cuando las áreas pueden comparar qué se incluye, qué espera y qué requiere reducir el alcance.\n\nLos indicadores pueden apoyar la decisión cuando existen datos confiables. Sin medición, es mejor registrar una hipótesis y su justificación que presentar una estimación como resultado comprobado.",
    },
  ],
};
