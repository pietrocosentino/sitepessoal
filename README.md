# Portfólio profissional — Pietro Cosentino

React, TypeScript e Vite. Site estático com navegação acessível, páginas internas sob demanda e currículo PDF incluído. Não requer servidor de aplicação ou chave de API.

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

- `src/data`: perfil, experiências, formação, projetos, artigos e menu.
- `src/types`: contratos de dados e propriedades compartilhadas.
- `src/routing`: normalização de endereços, aliases, páginas e títulos.
- `src/hooks`: sincronização da navegação com o histórico do navegador.
- `src/components/portfolio`: apresentação de casos, trajetória, currículo, contato e artigos.
- `src/pages`: composição das páginas, sem duplicar o conteúdo profissional.
- `src/index.css`: tokens visuais, componentes e regras responsivas.
- `public/documentos`: currículo disponibilizado como arquivo PDF local.
- `tests`: testes de rotas, renderização, navegação, filtros, menu e integridade do PDF.

Para acrescentar um caso, crie um objeto tipado em `src/data/projects.ts`. A listagem, a home e a página de detalhe usam os mesmos dados. Para alterar contatos ou experiências, edite `src/data/profile.ts`. O PDF é um documento estático: atualize-o também quando mudar o histórico.

## Rotas

- `/`: posicionamento profissional, projetos e trajetória resumida.
- `/projetos`: casos selecionados.
- `/projetos/:slug`: contexto, responsabilidade, entregáveis e exemplo ilustrativo.
- `/trajetoria`: experiência, competências, formação e certificação.
- `/insights`: artigos com filtros e expansão acessível.
- `/contato`: canais de contato e currículo.

As rotas antigas continuam aceitas e são normalizadas no navegador: `/sobre`, `/metodologia`, `/como-funciona` e `/metodo` levam a `/trajetoria`; `/experiencia`, `/cases` e `/solucoes` levam a `/projetos`. Isso não representa um redirecionamento HTTP 301.

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