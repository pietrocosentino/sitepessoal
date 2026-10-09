# Portfólio profissional — Pietro Cosentino

React, TypeScript e Vite. Site estático com navegação acessível, páginas internas sob demanda, três idiomas e currículos PDF incluídos. Não requer servidor de aplicação ou chave de API.

## Executar e verificar

Node.js 22 LTS ou superior:

```sh
npm ci
npm run dev
npm run test
npm run format:check
npm run build
npm run preview
```

`npm run format` aplica a formatação consistente do código; `format:check` verifica essa convenção.

`build` executa TypeScript estrito, com detecção de imports e variáveis sem uso, antes de gerar `dist`.

## Estrutura

- `src/data`: conteúdo original em português e menu.
- `src/i18n`: traduções tipadas em inglês e espanhol, rótulos, contexto de idioma e metadados.
- `src/types`: contratos de dados e propriedades compartilhadas.
- `src/routing`: normalização de endereços, aliases, páginas e títulos.
- `src/hooks`: sincronização da navegação com o histórico do navegador.
- `src/components/portfolio`: apresentação de casos, trajetória, currículo, contato e artigos.
- `src/pages`: composição das páginas, sem duplicar o conteúdo profissional.
- `src/index.css`: tokens visuais, componentes e regras responsivas.
- `public/documentos`: currículos em português, inglês e espanhol como arquivos PDF locais.
- `tests`: testes de rotas, renderização, navegação, filtros, menu e integridade do PDF.

Para acrescentar um caso, crie um objeto tipado em `src/data/projects.ts`. A listagem, a home e a página de detalhe usam os mesmos dados. Para alterar contatos ou experiências, edite `src/data/profile.ts`. Atualize também as traduções correspondentes em `src/i18n/en.ts` e `src/i18n/es.ts`. Os PDFs são estáticos: regenere-os quando mudar o histórico.

## Rotas

- `/`: posicionamento profissional, projetos e trajetória resumida.
- `/projetos`: casos selecionados.
- `/projetos/:slug`: contexto, responsabilidade, entregáveis e exemplo ilustrativo.
- `/trajetoria`: experiência, competências, formação e certificação.
- `/insights`: artigos com filtros e expansão acessível.
- `/contato`: canais de contato centralizados.

As rotas antigas continuam aceitas e são normalizadas no navegador: `/sobre`, `/metodologia`, `/como-funciona` e `/metodo` levam a `/trajetoria`; `/experiencia`, `/cases` e `/solucoes` levam a `/projetos`. Isso não representa um redirecionamento HTTP 301.

## Idiomas e hierarquia de conteúdo

Português usa as rotas sem prefixo; inglês usa `/en` e espanhol `/es`. Exemplo: `/en/projetos`. Os slugs de projetos são estáveis nos três idiomas. O seletor do cabeçalho combina bandeiras e nomes nativos, mantém a página aberta e registra a preferência quando o armazenamento está disponível. URLs explícitas de idioma têm prioridade; sem preferência, o idioma do navegador é usado, com português como fallback.

Toda a interface, experiências, formação, projetos, exemplos e artigos possuem traduções locais. Trocar o idioma também troca o PDF disponível. A tradução não indica fluência do autor: o inglês continua identificado como intermediário.

O currículo aparece uma vez, no cabeçalho. E-mail, LinkedIn e WhatsApp aparecem na página Contato; chamadas de outras páginas levam a ela. Insights permanece acessível no rodapé, sem competir com Projetos e Trajetória no menu principal.

Títulos, descrição, atributo `lang`, URL canônica e alternativas `hreflang` são atualizados no navegador. Este projeto é uma SPA sem pré-renderização: robôs que não executam JavaScript recebem os metadados iniciais em português.

### Regenerar currículos (opcional)

Os PDFs prontos estão incluídos e a publicação não requer Python. Para regenerar os documentos a partir dos dados, instale Python com ReportLab e disponibilize as fontes DejaVu Sans:

```sh
node scripts/export_resume_data.mjs resume-data.json
python scripts/build_resumes.py resume-data.json --font-dir CAMINHO_DAS_FONTES
```

O diretório de fontes deve conter `DejaVuSans.ttf` e `DejaVuSans-Bold.ttf`. Revise os PDFs gerados e remova o JSON temporário antes de fazer commit.

## Publicação

Na Vercel, use o `vercel.json` da raiz. Em outra hospedagem estática, configure fallback para `index.html` nas rotas do site, preservando a entrega dos arquivos reais de `assets` e `documentos`. Publique a pasta `dist`; `npm start` é desenvolvimento, não produção.

## Atualização de um clone existente

Copie o conteúdo desta pasta para a raiz do clone que já contém `.git`, incluindo `public`, `tests`, `src` e os arquivos de configuração. Não substitua nem apague `.git`.

Remova os arquivos antigos que deixaram de fazer parte do projeto:

- `src/pages/AboutPage.tsx`
- `src/pages/ExperiencePage.tsx`
- `src/pages/MethodologyPage.tsx`
- `src/pages/SolutionsPage.tsx`
- `src/components/PageNavigation.tsx`
- `server.ts`, `metadata.json`, `src/vercel.json`, `.env.example` e `.npmrc` do scaffold original, se ainda existirem.

Depois execute `npm ci`, `npm run test` e `npm run build` antes de criar o commit.

## Precisão profissional

Empresas, cargos e períodos foram extraídos do currículo fornecido anteriormente. Os períodos dos casos indicam o vínculo profissional, não datas exatas de início e conclusão do projeto. O MBA em IA aparece como em andamento. Datas de formação não foram inventadas. Foram mantidas as credenciais SFPC/CertiProf e Product Management/PM3, sem apresentar competências como certificações.

Exemplos dos casos são explicitamente ilustrativos. Não contêm documentos de clientes, métricas inventadas ou selos de validação. Para acrescentar evidências reais, use apenas documentos cuja divulgação esteja autorizada, com dados pessoais e informações confidenciais removidos.

## Limites de verificação

Os testes de interação usam jsdom e não validam layout ou motores reais de navegador. Valide Chrome, Edge, Firefox e Safari atuais, em 320, 375, 768, 1024 e 1440 px, com zoom de 200%, teclado e movimento reduzido. Tailwind 4 usa CSS moderno; navegadores antigos não são garantidos.
