# Revisão técnica — 09/10/2026

## Decisão de tecnologia

Mantidos React e TypeScript. O site usa estado para filtros, artigos e soluções. Trocar de linguagem aumentaria o escopo sem resolver o carregamento antecipado de todas as páginas. TypeScript é compilado para JavaScript e não acrescenta execução de tipos no navegador.

## Limpeza

Removidos `@google/genai`, `motion`, Express, dotenv, tsx, tipos de Express, tipos de Node e autoprefixer. Nenhuma página usa esses recursos. Removidos `server.ts` (servidor e healthcheck sem consumidores no projeto), `.env.example` de IA, `.npmrc` que ignorava conflitos de dependências, `metadata.json` de scaffold e configuração duplicada `src/vercel.json`. Eliminados comentários de geração, alias sem consumidores, opções TypeScript sem uso, fonte Libre Baskerville sem uso, propriedade não consumida da navegação inferior e classes de animação sem plugin correspondente.

Ferramentas de build movidas para devDependencies. Adicionado package-lock.json para instalações reproduzíveis; TypeScript configurado com strict, noUnusedLocals e noUnusedParameters. Os conteúdos profissionais e contatos foram preservados.

## Desempenho e usabilidade

- Home permanece no pacote inicial; cinco páginas internas carregam sob demanda.
- Cache longo apenas para assets com nomes contendo hash.
- Removida rolagem duplicada do cabeçalho.
- Cabeçalho com marca flexível; cartões de soluções em uma coluna nas telas estreitas; botões inferiores podem quebrar linha.
- Foco e título atualizados na navegação; link de salto para o conteúdo, estados acessíveis nos filtros e artigos e respeito a movimento reduzido.
- Caminhos com barra final e aliases normalizados; página de erro para caminho desconhecido.

## Evidências

Build original e revisado medidos com a mesma instalação de ferramentas, para comparar o efeito da alteração no código:

| Recurso | Antes | Depois |
| --- | ---: | ---: |
| JavaScript inicial | 298,02 KB | 254,78 KB |
| JavaScript inicial gzip | 86,04 KB | 76,49 KB |
| CSS gzip | 7,28 KB | 7,52 KB |

O CSS aumentou ligeiramente pelas regras de acessibilidade e ajustes responsivos. O JavaScript total não desapareceu: as páginas internas passaram para arquivos separados, baixados quando acessadas. Os valores não são um teste de velocidade em dispositivos reais.

`npm run build` passou (checagem TypeScript e build de produção). Não foi possível validar visualmente com Playwright: navegadores ausentes e download inválido no ambiente. A configuração original continha versões de ferramentas que foram substituídas por versões instaláveis nesta revisão. O lockfile contém as versões efetivamente verificadas.

## Pendências de publicação

Confirmar responsividade em navegadores reais conforme README. A fonte Plus Jakarta Sans ainda depende de Google Fonts, com fallback de sistema. O conteúdo principal ainda requer JavaScript; o fallback noscript informa um contato. A renomeação do repositório e a publicação não foram realizadas nesta etapa.

## Segunda etapa — apresentação profissional

Home reescrita com composição editorial, fundo claro, verde discreto, tipografia mais legível e divisórias em lugar de sequências de cartões. Removidos blocos repetidos, efeitos de luz, gradientes e linguagem de promessa exagerada. O conteúdo apresenta requisitos, backlog, processos, experiência e contato de forma direta.

Cabeçalho com navegação completa e menu móvel nativo usando details/summary. Links da home e do cabeçalho suportam abertura em nova aba e navegação com teclado. Rodapé reduzido a identificação e contato. Páginas internas receberam bordas e cores mais discretas e revisão de algumas afirmações genéricas.

Verificações: build e TypeScript passaram. Renderização HTML das seis páginas, cabeçalho e rodapé passou; cada página contém um único h1. Essa verificação não substitui inspeção visual em navegador, que permanece pendente. O JavaScript inicial desta etapa ficou em 239,09 KB (74,52 KB gzip), e o CSS em 32,54 KB (7,26 KB gzip).
