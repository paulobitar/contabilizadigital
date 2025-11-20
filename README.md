# Contabiliza Digital

Este é o site institucional da **Contabiliza Digital**, desenvolvido como uma Single Page Application (SPA) moderna usando React, TypeScript e Tailwind CSS.

## 🚨 IMPORTANTE: Como publicar no GitHub Pages

**Não faça upload dos arquivos `.tsx` diretamente.** O navegador não consegue ler esses arquivos, o que causa a tela branca ("Blank Page"). Você precisa "compilar" o site primeiro.

### Passo a Passo para Publicação Correta:

1.  **Instale o Node.js** no seu computador (caso não tenha).
2.  Baixe todos os arquivos deste projeto para uma pasta local.
3.  Abra o terminal nessa pasta e execute:
    ```bash
    npm install
    ```
4.  Gere a versão de produção executando:
    ```bash
    npm run build
    ```
5.  Isso criará uma pasta chamada **`dist`**.
    *   Esta pasta contém arquivos `.html`, `.js` e `.css` otimizados.
6.  **Faça upload APENAS do conteúdo da pasta `dist`** para o seu repositório no GitHub (branch `gh-pages` ou configure a branch `main` para ler a partir da pasta docs/root, dependendo da sua configuração).
    *   *Dica:* Se estiver usando a branch `gh-pages`, o conteúdo da pasta `dist` deve estar na raiz dessa branch.

## Estrutura do Projeto

- `src/`: (Conceitual) A raiz contém os arquivos fontes `.tsx`.
- `dist/`: (Gerada após build) Contém o site pronto para o navegador.
- `vite.config.ts`: Configuração crucial para que os links funcionem no GitHub Pages (`base: './'`).

## Personalização

Para editar textos, preços ou informações de contato, edite o arquivo **`constants.ts`** e rode `npm run build` novamente para atualizar o site.

- **Cores:** Definidas no arquivo `index.html` (configuração do Tailwind).
- **Imagens:** Substitua as URLs do Unsplash/Picsum em `constants.ts` pelas suas imagens reais.
