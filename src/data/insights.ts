export const categories = [
  { id: "all", label: "Todos os Insights" },
  { id: "requisitos", label: "Requisitos" },
  { id: "produto", label: "Produto" },
  { id: "estrategia", label: "Estratégia" },
  { id: "ia", label: "Inteligência Artificial" },
];
export const articles = [
  {
    id: "criterios-de-aceite",
    category: "requisitos",
    categoryLabel: "Requisitos",
    readTime: "2 min de leitura",
    title: "Critérios de aceite: o comportamento que precisa ser validado",
    lead: "Descrever o cenário principal é só o começo. Alternativas e exceções também precisam entrar na conversa.",
    content: `Uma história pode parecer clara e ainda deixar dúvidas sobre dados obrigatórios, permissões ou falhas de integração. Ao definir os critérios de aceite, procuro explicitar as condições de entrada, a ação e o comportamento esperado.

Para uma matrícula, por exemplo, a análise precisa considerar o aluno elegível, o curso correto, a duplicidade e a resposta de um sistema integrado. Esses cenários ajudam o negócio, o desenvolvimento e os testes a discutir a mesma entrega.

Critérios de aceite descrevem o comportamento esperado de uma história. A Definition of Done estabelece condições de qualidade compartilhadas para considerar o incremento concluído. São conceitos complementares, não equivalentes.`,
  },
  {
    id: "alinhamento-negocio-tecnologia",
    category: "estrategia",
    categoryLabel: "Análise de negócios",
    readTime: "2 min de leitura",
    title: "Alinhar o problema antes de discutir a solução",
    lead: "Uma boa reunião de requisitos precisa produzir decisões e dúvidas identificadas, não apenas uma lista de pedidos.",
    content: `Quando uma área solicita uma funcionalidade, começo pelo contexto: quem usa o processo, onde está a dificuldade e o que precisa mudar. Depois, identifico regras, restrições e dependências.

O alinhamento com o time técnico ajuda a discutir alternativas. Uma decisão pode alterar o escopo, exigir uma integração ou depender de dados que ainda não estão disponíveis.

Registrar decisões, responsáveis e pontos em aberto permite retomar a discussão sem depender da memória de quem participou da reunião.`,
  },
  {
    id: "ia-processos-negocio",
    category: "ia",
    categoryLabel: "IA para negócios",
    readTime: "2 min de leitura",
    title: "Antes de aplicar IA, entender o processo",
    lead: "Estudos e reflexões sobre dados, custos e validação de aplicações de inteligência artificial.",
    content: `No MBA em Inteligência Artificial para Negócios, estudo aplicações em triagem de dados, tarefas repetitivas e simulação de cenários. Esse conteúdo representa uma área de formação em andamento, não uma alegação de implantação profissional desses casos.

Para avaliar uma proposta, considero o problema, os dados disponíveis, os riscos de acesso à informação e a necessidade de revisão humana.

Também é preciso definir como verificar o resultado: qualidade das respostas, tempo de execução, custos e frequência dos erros.`,
  },
  {
    id: "priorizacao-backlog",
    category: "produto",
    categoryLabel: "Produto",
    readTime: "2 min de leitura",
    title: "Priorizar backlog com contexto e critérios explícitos",
    lead: "Comparar demandas exige ouvir as áreas, identificar dependências e considerar o impacto para os usuários.",
    content: `Uma solicitação urgente pode ser relevante, mas também pode competir com outra necessidade de maior impacto. Na análise das demandas, considero o problema, os usuários afetados, as dependências e as restrições do time.

Quando as prioridades entram em conflito, o papel do analista ou PO é explicitar as opções e seus impactos. A discussão fica mais útil quando as áreas conseguem comparar o que entra, o que espera e o que precisa ser reduzido no escopo.

Indicadores podem apoiar essa decisão quando existem dados confiáveis. Onde não há medição, é melhor registrar a hipótese e a justificativa do que apresentar uma estimativa como resultado comprovado.`,
  },
];
export type InsightArticle = (typeof articles)[number];
