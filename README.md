<h1 align="center">Welcome to music-playlist 👋</h1>
<p>
  <img alt="Version" src="https://img.shields.io/badge/version-0.1.0-blue.svg?cacheSeconds=2592000" />
</p>

> <strong>Код сервера хранится в ветке backend.</strong>
> <strong>Сервер не доступен, потому что Heroku больше не предоставляет бесплатные услуги хостинга.</strong>

Fullstack приложение для прослушивания/добавления треков (по типу Музыки в ВК).

<h3>Стек технологий:<h3>
<h4>Frontend</h4>
<ul>
  <li>React</li>
  <li>Vite</li>
  <li>TypeScript</li>
  <li>Apollo Client [+ local state]</li>
  <li>SCSS</li>
</ul>

<h4>Backend</h4>
<ul>
  <li>MongoDB</li>
  <li>NodeJS</li>
  <li>Express</li>
  <li>GraphQL</li>
  <li>Apollo server</li>
  <li>AWS S3 buckets</li>
</ul>

Frontend задеплоен на Github Pages, а backend на Heroku.

Layout адаптивен под мобильные устройства и доступен с клавиатуры.

Проект в процессе допиливания.

### 🏠 [Github Pages](https://rainbowfieldholograph.github.io/music-playlist-fullstack/)

## Install

```sh
npm install
```

## ENV configure

Create .env file and setup

```sh
VITE_SERVER_URL = your_graphql_server_url
```

## Usage

```sh
npm run dev
```

## Generate types for GraphQL

Configure codegen.yaml

```sh
schema: your_graphql_server_url
```

And you can run

```sh
npm run generate-types
```

## Author

- Github: https://github.com/rainbowfieldholograph
- Matrix: https://matrix.to/#/@survivalstrategy:matrix.org
- Telegram: https://t.me/duvetduvet
