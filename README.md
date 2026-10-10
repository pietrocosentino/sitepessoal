# Pietro Cosentino — Portfólio profissional

Portfólio de Pietro Cosentino, com atuação como **Analista de Requisitos, Analista de Sistemas e Analista Funcional Sênior**. O site apresenta sua experiência na conexão entre necessidades de negócio, regras de sistemas e entregas de desenvolvimento.

**Acesse:** [www.pietrocosentino.com.br](https://www.pietrocosentino.com.br/)

## Proposta

O portfólio reúne informações que ajudam recrutadores, empresas e parceiros a conhecer a trajetória profissional de Pietro e compreender sua forma de trabalhar: investigar problemas, estruturar requisitos, alinhar expectativas e apoiar a validação de soluções.

Os projetos contextualizam a atuação em educação, pagamentos e sistemas corporativos, apresentando desafios, responsabilidades e entregáveis. Os exemplos de documentação são ilustrativos e preservam informações de clientes.

## O que você encontra

- **Página inicial:** apresentação profissional, áreas de atuação e projetos em destaque.
- **Projetos:** casos com contexto de negócio, participação profissional e exemplos de entregáveis.
- **Trajetória:** experiências, competências, formação, certificações e idiomas.
- **Contato:** acesso ao e-mail, LinkedIn e WhatsApp por ícones clicáveis.
- **Currículo:** versões em português, inglês e espanhol disponíveis para download.

O conteúdo está disponível em três idiomas, acessíveis pelas bandeiras no cabeçalho. A troca de idioma preserva a página em navegação. A interface utiliza componentes compartilhados, navegação por teclado e nomes acessíveis nos controles.

## Tecnologias

- React e TypeScript para a interface e os contratos de dados.
- Vite para desenvolvimento e geração da versão de produção.
- CSS e Tailwind CSS para a apresentação visual.
- Lucide React para os ícones.
- Node.js Test Runner e jsdom para testes de navegação e conteúdo.
- Prettier para padronização do código.

O site é uma aplicação estática, sem servidor de aplicação ou chaves de API.

## Executar localmente

Use Node.js 22 LTS ou superior e npm.

```sh
npm ci
npm run dev
```

Abra o endereço informado pelo Vite no terminal.

### Comandos disponíveis

| Comando                | Finalidade                                |
| ---------------------- | ----------------------------------------- |
| `npm run dev`          | Iniciar o ambiente de desenvolvimento     |
| `npm run test`         | Executar os testes                        |
| `npm run lint`         | Verificar os tipos TypeScript             |
| `npm run format`       | Formatar o código                         |
| `npm run format:check` | Conferir a formatação                     |
| `npm run build`        | Verificar os tipos e gerar a pasta `dist` |
| `npm run preview`      | Visualizar o build localmente             |

## Organização do projeto

| Diretório                   | Responsabilidade                                     |
| --------------------------- | ---------------------------------------------------- |
| `src/pages`                 | Composição das páginas                               |
| `src/components`            | Componentes reutilizáveis                            |
| `src/data`                  | Perfil, projetos e navegação                         |
| `src/i18n`                  | Conteúdo e interface em português, inglês e espanhol |
| `src/types`                 | Contratos de dados                                   |
| `src/routing` e `src/hooks` | Rotas, estado de navegação e histórico               |
| `public/flags`              | Bandeiras dos idiomas                                |
| `public/documentos`         | Currículos em PDF                                    |
| `scripts`                   | Geração dos currículos                               |
| `tests`                     | Testes automatizados                                 |

## Atualizar o conteúdo

Os dados do perfil ficam em `src/data/profile.ts` e os projetos em `src/data/projects.ts`. As versões em inglês e espanhol ficam em `src/i18n/en.ts` e `src/i18n/es.ts`; os rótulos da interface ficam em `src/i18n/labels.ts`.

Mantenha os dados consistentes entre os três idiomas e preserve os slugs dos projetos. A identidade visual é definida em `src/index.css`, com cores compartilhadas entre as páginas.

### Gerar os currículos

Os PDFs estão incluídos em `public/documentos`. Para regenerá-los a partir do conteúdo do site, instale Python com ReportLab e disponibilize as fontes `DejaVuSans.ttf` e `DejaVuSans-Bold.ttf`:

```sh
node scripts/export_resume_data.mjs resume-data.json
python scripts/build_resumes.py resume-data.json --font-dir CAMINHO_DAS_FONTES
```

Confira os documentos após a geração. Python é necessário apenas para essa etapa, não para executar ou publicar o site.

## Publicação

O projeto inclui configuração para Vercel em `vercel.json`: o comando de build é `npm run build` e a saída é `dist`.

Em outras hospedagens estáticas, publique `dist` e configure o fallback das rotas para `index.html`, preservando o acesso aos arquivos de assets, bandeiras e documentos.

Português utiliza as rotas sem prefixo; inglês utiliza `/en` e espanhol `/es`. Como a aplicação renderiza no navegador, serviços que não executam JavaScript recebem os metadados iniciais em português.
