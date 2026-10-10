# Portfólio profissional — Pietro Cosentino

Portfólio em React, TypeScript e Vite para apresentar a atuação em requisitos, análise de sistemas, análise funcional e produto. Inclui projetos, trajetória, formação, idiomas, contatos e currículos em português, inglês e espanhol.

## Executar

Requer Node.js 22 LTS ou superior.

```sh
npm ci
npm run dev
```

## Verificar e gerar produção

```sh
npm run test
npm run format:check
npm run build
npm run preview
```

`build` verifica TypeScript estrito e gera a pasta `dist`. `format` aplica Prettier; `lint` executa a verificação de tipos. O frontend não requer chaves de API nem servidor de aplicação.

## Conteúdo e navegação

| Rota | Conteúdo |
| --- | --- |
| `/` | Apresentação orientada ao valor profissional, casos e experiência resumida |
| `/projetos` | Projetos de educação, pagamentos e sistemas corporativos |
| `/projetos/:slug` | Contexto, atuação, entregáveis, limites e exemplo ilustrativo |
| `/trajetoria` | Experiências, competências, formação, certificação e idiomas |
| `/contato` | E-mail, LinkedIn e ícone para abrir uma conversa no WhatsApp |

A identificação profissional usa posições distintas: **Analista de Requisitos · Analista de Sistemas · Analista Funcional Sênior**. Os cargos de cada vínculo permanecem no histórico. O projeto de educação tem Hyti como referência, com o período do vínculo atual; CRP continua no histórico profissional.

Insights foi removido: não há página, rota, artigos, filtros ou componente remanescente. Endereços desconhecidos exibem a página de endereço não encontrado. Aliases anteriores de Sobre e Metodologia levam a Trajetória; Experiência, Cases e Soluções levam a Projetos. A normalização acontece no navegador, sem redirecionamento HTTP 301.

## Idiomas

O cabeçalho possui três botões com bandeiras locais em SVG: Brasil, Estados Unidos e Espanha. Um clique troca todo o conteúdo disponível, preserva a página e atualiza o PDF correspondente. Os botões têm nomes acessíveis, indicação de idioma ativo e operação por teclado. Não há menu seletor nem dependência de emojis para renderizar bandeiras no Windows.

Português usa as rotas sem prefixo, inglês usa `/en` e espanhol `/es`. URLs explícitas têm prioridade sobre a preferência salva; sem preferência, usa-se o idioma do navegador, com português como fallback. A navegação funciona mesmo quando o armazenamento está bloqueado.

A disponibilidade de tradução não representa fluência do autor. Os níveis declarados são **inglês intermediário** e **espanhol básico**, no site e nos currículos.

`lang`, título, descrição, URL canônica e alternativas `hreflang` são atualizados pelo frontend. É uma SPA sem pré-renderização; robôs que não executam JavaScript recebem os metadados iniciais em português.

## Direção visual e contatos

As páginas compartilham a paleta da home: fundo quente, superfícies claras, blocos suaves e verde como destaque. As cores são centralizadas em tokens no início de `src/index.css` e os componentes usam as mesmas regras visuais.

O currículo aparece uma vez, no cabeçalho. Os contatos completos ficam na página Contato. O WhatsApp não exibe o telefone, mas o número ainda integra o endereço de destino e os PDFs. Abertura de conversa depende de uma ação do visitante; o site não envia mensagens automaticamente.

## Estrutura e manutenção

- `src/data`: conteúdo original em português e navegação.
- `src/i18n`: traduções tipadas, contexto de idioma, preferências e metadados.
- `src/types`: contratos de experiência, projetos e navegação.
- `src/routing` e `src/hooks`: rotas, carregamento de páginas e sincronização do histórico.
- `src/components`: componentes compartilhados, inclusive botões de idioma e contato.
- `src/pages`: composição das páginas.
- `public/flags`: bandeiras SVG locais.
- `public/documentos`: três currículos PDF.
- `scripts`: geração opcional dos currículos a partir do conteúdo do site.
- `tests`: testes de rotas, conteúdo, navegação, idioma, acessibilidade dos contatos e referências aos PDFs.

Ao alterar o perfil, experiências ou formação, edite `src/data/profile.ts` e as traduções em `src/i18n/en.ts` e `src/i18n/es.ts`. Projetos ficam em `src/data/projects.ts` e nos mesmos módulos de tradução. Preserve os slugs e a correspondência entre as versões. Rótulos da interface ficam em `src/i18n/labels.ts`.

A lista de formação complementar foi conferida na seção de certificados do LinkedIn após autenticação: Product Manager (abr. 2025), Product Discovery (nov. 2025), Product Design (fev. 2026), Product Growth e Product Marketing (ago. 2026), todos da PM3. Inclui também SFPC/CertiProf (jun. 2024) e o curso preparatório para CPRE-FL/Udemy (out. 2024). O curso preparatório não é apresentado como certificação CPRE-FL obtida. Os títulos e datas aparecem nos três idiomas e nos PDFs.

### Regenerar os currículos

Os PDFs prontos estão incluídos; Python não é necessário para publicar o site. Para atualizá-los, use Python com ReportLab e as fontes `DejaVuSans.ttf` e `DejaVuSans-Bold.ttf`:

```sh
node scripts/export_resume_data.mjs resume-data.json
python scripts/build_resumes.py resume-data.json --font-dir CAMINHO_DAS_FONTES
```

Inspecione os PDFs após gerar. O JSON intermediário está ignorado pelo Git.

## Atualizar seu clone no Windows

Extraia o ZIP fora do clone e copie o conteúdo da pasta `SmartTec-main` para a raiz do seu repositório. Preserve `.git`. Copiar arquivos não apaga versões antigas: remova, caso ainda existam, os caminhos abaixo:

```powershell
$obsoleteFiles = @(
  'src/pages/AboutPage.tsx',
  'src/pages/ExperiencePage.tsx',
  'src/pages/MethodologyPage.tsx',
  'src/pages/SolutionsPage.tsx',
  'src/pages/InsightsPage.tsx',
  'src/components/PageNavigation.tsx',
  'src/components/LanguageSelector.tsx',
  'src/components/portfolio/ArticleCard.tsx',
  'src/data/insights.ts',
  'server.ts',
  'metadata.json',
  'src/vercel.json',
  '.env.example',
  '.npmrc'
)
foreach ($obsoleteFile in $obsoleteFiles) {
  if (Test-Path -LiteralPath $obsoleteFile) {
    Remove-Item -LiteralPath $obsoleteFile
  }
}
```

Execute esse bloco na raiz do clone. Depois execute `npm ci`, os testes e o build antes de criar o commit.

## Publicação

Na Vercel, use o `vercel.json` da raiz. Em outras hospedagens, configure fallback das rotas para `index.html`, preservando arquivos reais de `assets`, `flags` e `documentos`. Publique `dist`; `npm start` é desenvolvimento. Este ZIP não altera o repositório remoto nem publica o domínio automaticamente.

## Precisão e limites de validação

Exemplos de projetos são explicitamente ilustrativos e não reproduzem documentos de clientes. Não há métricas inventadas, datas de formação presumidas ou proficiência inferida de traduções. O MBA em IA permanece em andamento.

Os testes usam jsdom e não comprovam aparência ou responsividade em navegadores reais. Antes da publicação, confira Chrome, Edge, Firefox e Safari, larguras de 320 a 1440 px, zoom de 200%, teclado e movimento reduzido. Tailwind 4 usa CSS moderno e não garante suporte a navegadores antigos.
