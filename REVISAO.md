# Revisão de implementação — portfólio para recrutamento

## Comportamento entregue

- Cargo e resumo profissional na primeira tela, com acesso a projetos e currículo.
- Cabeçalho com Projetos, Trajetória, Contato, seletor de idioma e o único download de currículo. Insights fica no rodapé.
- Três casos detalhados, com responsabilidade individual e exemplos ilustrativos identificados.
- Histórico de seis empresas, cargos e períodos; formação separada de competências e certificações.
- Contatos completos centralizados na página Contato; chamadas das outras páginas levam a ela.
- Português, inglês e espanhol em toda a interface, experiências, projetos, exemplos, formação e artigos; três PDFs correspondentes.
- Troca de idioma mantém a página e o histórico; preferência lembrada quando disponível e URLs compartilháveis por idioma.
- Artigos revisados, sem confundir critérios de aceite com Definition of Done ou afirmar ganhos quantitativos sem fonte.
- Endereços antigos normalizados para a nova estrutura.

## Organização e manutenção

Cada componente cuida de uma responsabilidade de apresentação. Dados tipados ficam em módulos próprios; páginas compõem componentes. A navegação é recebida por contrato, evitando acoplar links e cartões ao histórico do navegador. Um hook concentra esse histórico. Novos projetos são adicionados por dados, sem criar uma nova página para cada caso. Não foram criadas hierarquias de classes ou camadas de serviços sem necessidade.

Há links reais para abertura em nova aba, download nativo, menu móvel com Escape, foco após navegação, estados de filtros e expansão acessíveis, fallback de carregamento e tratamento de falha na página. CSS usa tokens compartilhados e layouts com colunas flexíveis.

## Validação

Dez testes automatizados passaram: rotas, casos/PDFs, estrutura das páginas, navegação/foco/histórico/menu, links nativos, filtros/expansão de Insights, conteúdo nos três idiomas, troca de idioma/metadados/PDF, ausência de contatos repetidos e preferências com armazenamento bloqueado. Build de produção, TypeScript e formatação passaram. Os três currículos de duas páginas foram renderizados e inspecionados visualmente.

O ambiente não disponibiliza navegadores reais para inspeção visual do site. Os testes DOM não demonstram responsividade nem compatibilidade visual entre motores. Isso continua sendo uma verificação de publicação, descrita no README.

## Conteúdo ainda passível de enriquecimento

Datas de conclusão de formação, métricas, decisões específicas de projetos e artefatos reais não foram inventados. Os exemplos ilustrativos não substituem evidências de cliente autorizadas. O site não foi publicado e o repositório remoto não foi alterado nesta execução.
