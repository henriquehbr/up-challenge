# upnid-challenge

> Desafio técnico para desenvolvedor Front-End na Upnid

## Índice

- [Instalação](#instalação)
- [Execução](#execução)
- [Funcionalidades](#funcionalidades)
- [Detalhes técnicos](#detalhes-técnicos)

## Instalação

Antes de tudo, é necessário clonar o repositório do GitHub

**HTTPS:**

```bash
$ git clone https://github.com/henriquehbr/up-challenge.git
```

**SSH:**

```bash
$ git clone git@github.com:henriquehbr/up-challenge.git
```

Após instalado, navegue até o diretório do repositório recém-clonado, e instale as dependências do projeto

**Yarn:**

```bash
$ yarn
```

**npm:**

```bash
$ npm install
```

## Execução

Para inicializar o jogo, execute o comando `start` presente no `package.json`

**Yarn:**

```bash
$ yarn start
```

**npm:**

```bash
$ npm run start
```

## Funcionalidades

- ⏸️ Pause → ao pressionar <kbd>Esc</kbd>, o jogo é pausado
- 📱 Mobile → o jogo pode ser jogado em um smartphone
- 🎨 Apenas CSS → nenhuma imagem ou vetor foi utilizado na produção do jogo, tornando tudo mais leve e performático
- 📝 Documentação → o projeto contém uma descrição detalhada contando mais sobre o jogo, como fazer build, executá-lo, e sobre as estratégias usadas durante o desenvolvimento do game.

## Detalhes técnicos

A stack utilizada para o desenvolvmento do projeto é composta pelo framework [Svelte](https://svelte.dev), a empacotador de módulos [Rollup](https://rollupjs.org) juntamente com [TypeScript](https://typescriptlang.org) e [Less.js](https://lesscss.org) para a estilização dos componentes

### Por que?

- Svelte

> *"Aplicações web cibernéticamente otimizadas"* - https://svelte.dev

O Svelte é uma nova abordagem radical para criar interfaces de usuário. Enquanto estruturas tradicionais como React e Vue realizam a maior parte de seu trabalho no navegador, o Svelte muda esse trabalho para uma etapa de compilação que acontece quando você cria seu aplicativo.

Em vez de usar técnicas como a diferenciação virtual do DOM, o Svelte escreve um código que atualiza cirurgicamente o DOM quando o estado do seu aplicativo é alterado.

- Rollup

> *"Empacotador de módulos ECMAScript da próxima geração"*

O Rollup é um empacotador de módulo para JavaScript que compila pequenos pedaços de código em algo maior e mais complexo, como uma biblioteca ou aplicativo. Ele usa o novo formato padronizado para módulos de código incluídos na revisão ES6 do JavaScript, em vez de soluções idiossincráticas anteriores, como CommonJS e AMD. Os módulos ES permitem combinar de forma livre e transparente as funções individuais mais úteis das suas bibliotecas favoritas. Eventualmente, isso será possível de forma nativa em qualquer lugar, mas o Rollup permite fazer isso hoje.

- TypeScript

> *"JavaScript que escala"*

Os tipos presentes no TypeScript permitem que os desenvolvedores JavaScript usem práticas e ferramentas de desenvolvimento altamente produtivas, como verificação estática e refatoração de código ao desenvolver aplicativos JavaScript.

Os tipos são opcionais e a inferência de tipo permite que algumas anotações de tipo façam uma grande diferença na verificação estática do seu código. Os tipos permitem definir interfaces entre componentes de software e obter informações sobre o comportamento das bibliotecas JavaScript existentes.

- Less

> *"É CSS, com algumas coisas a mais"*

O Less.js é um pré-processador CSS, significa que você poderá escrever seu estilo usando em um arquivo `.less`, então o Less.js o compilará em CSS puro.

O pré-processador CSS vem com muitos recursos poderosos, como: variáveis, mixins, regras aninhadas, operações, importações e muito mais.
