# Pietro Cosentino — site

Site em React, TypeScript e Tailwind CSS, compilado com Vite para hospedagem estática. Não requer servidor Express nem chave de API.

## Executar

Use Node.js 22 LTS ou superior e npm:

```sh
npm ci
npm run dev
```

## Verificar e gerar publicação

```sh
npm run lint
npm run build
npm run preview
```

Publique a pasta `dist`. Na Vercel, use o `vercel.json` da raiz. Em outra hospedagem, configure a resposta de `index.html` para as rotas do site; sem essa regra, abrir diretamente `/sobre` pode retornar 404. `npm start` inicia o ambiente de desenvolvimento; não é um servidor de produção.

## Estrutura

- `src/pages`: conteúdo e interações das seis páginas.
- `src/components`: cabeçalho, rodapé e navegação compartilhada.
- `src/App.tsx`: rotas, aliases, carregamento sob demanda e foco após navegação.
- `src/index.css`: estilos e acessibilidade.

As rotas `/cases`, `/como-funciona` e `/metodo` continuam funcionando. Endereços desconhecidos exibem uma página de erro no cliente; o status HTTP depende da hospedagem.

## Validação manual antes de publicar

Verifique em Chrome, Edge, Firefox e Safari atuais, em larguras de 320, 375, 768, 1024 e 1440 px:

- Cabeçalho, rodapé e cartões sem cortes ou rolagem horizontal da página.
- Todas as páginas, acesso direto às rotas, voltar/avançar do navegador e aliases.
- Seleção de soluções, categorias e expansão dos artigos em Insights.
- Navegação com Tab e link “Pular para o conteúdo”.
- Zoom de 200%, movimento reduzido e conexão lenta.
- Links de WhatsApp e LinkedIn.

Tailwind 4 usa recursos modernos de CSS. Navegadores antigos não são garantidos. Nesta revisão, o build e a análise estática passaram, mas a validação visual não pôde ser executada porque os navegadores não estavam disponíveis e seu download falhou.
