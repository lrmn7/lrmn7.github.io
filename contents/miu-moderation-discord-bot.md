---
title: Miu🌛 a discord moderation & music 24/7
description: >-
  This is a multi-purpose bot that provides moderation and music features. It is designed to help you manage your server effectively.
excerpt: >-
  This is a multi-purpose bot that provides moderation and music features. It is designed to help you manage your server effectively.
datetime: 2023-06-06T19:10:07.322Z
slug: miu-moderation-discord-bot
featured: true
category: Discord
tags:
  - Discord Bot
author: L RMN
coverImage: >-
  https://i.imgur.com/cJR7ynu.png
coverImageAlt: This is a multi-purpose bot that provides moderation and music features. It is designed to help you manage your server effectively.
coverImageWidth: "1200"
coverImageHeight: "700"
ogImage: "https://i.imgur.com/cJR7ynu.png"
ogImageAlt: Miu🌛 a discord moderation & music 24 / 7
type: article
language: English
_template: blog_article
---

---

# Miu🌛 - Discord Bot

Miu🌛 is a versatile Discord bot designed for both moderation and music functions, making it an excellent choice for server management.

## Features

- Interaction support.
- Easy configuration.
- Basic music and moderation commands.

[Invite Miu🌛](https://discord.com/oauth2/authorize?client_id=1132766063365476442&permissions=53857345&scope=bot)

Visit [miu.is-a.fun](https://miu.is-a.fun/) to learn more!

## Thanks for Your Support!

We appreciate any kind of support ❤️. Feel free to [buy us a coffee](https://www.buymeacoffee.com/LRMN).

_Please note that we are not affiliated with Discord Inc or its subsidiaries._

> A simple powerful Discord music bot built to fulfill your production desires. Easy to use, with no coding required.

<a href="https://discord.com/oauth2/authorize?client_id=1132766063365476442&permissions=53857345&scope=bot"><img src="https://img.shields.io/static/v1?label=Invite%20Me&message=lrmn7&plastic&color=5865F2&logo=discord"></a>
<img src="https://badgen.net/badge/icon/typescript?icon=typescript&label">
<a href="https://github.com/lrmn7/miu/actions?query=workflow%3A%22Lint+code+and+compile+setup+script%22"><img src="https://github.com/lrmn7/miu/workflows/Lint%20code%20and%20compile%20setup%20script/badge.svg" alt="CI Status" /></a>

## Features

- Interaction support.
- Configurable, and easy to use.
- Basic music and moderation commands.
- A production-ready project, set up the bot without coding.

## General Setup

1. Download and install [Node.js](https://nodejs.org) version `16.6.0` or higher
2. Open the `.env_example` file and rename it to `.env`
3. Install required and optional dependencies. You still can use `npm` too.

```sh
$ pnpm install
```

4. Compile the file

```sh
$ pnpm run build
```

5. If you want to save your disk spaces, let's prune the dev dependencies

```sh
$ pnpm prune --production
```

6. Finally, you can start the bot

```sh
$ pnpm start
```

## Hosting Setup

Setup Tutorial Video YouTube (soon)

### Docker

You can use our official Docker image:

```bash
$ docker run -v ./scripts:/app/scripts --env-file ./.env -d ghcr.io/lrmn/miu:latest
```

...or with docker-compose:

```yml
services:
  miu:
    image: ghcr.io/lrmn/miu:latest
    restart: unless-stopped
    env_file: .env
    volumes:
      - "./scripts:/app/scripts"
```

Don't forget to create `.env` file and fill environment values from `.env_example` file

NOTE: You **must** attach `/app/scripts` volume if you use `yt-dlp` stream strategy.

### Glitch

You can use Glitch too for this project, featured with its code editor.

1. Star and fork this project
2. Go to [glitch.com](https://glitch.com) and make an account
3. Click **New Project** then **Import from GitHub**, specify the pop-up field with `https://github.com/<your-name>/miu` (without `<>`)
4. Please wait for a while, this process takes some minutes
5. Find the `.env` file and delete it, then find `.env_example` file and rename it to `.env`
6. After specifying `.env`, open **Tools** > **Terminal**
7. Type `refresh`, and track the process from **Logs**

<a href="https://glitch.com/edit/#!/import/github/lrmn7/miu"><img src="https://cdn.glitch.com/2703baf2-b643-4da7-ab91-7ee2a2d00b5b%2Fremix-button.svg" alt="Remix on Glitch"></a>

### HOP.IO

Hop.io provides `free tier`, & $4.32 / vCPU / month.

**IMPORTANT:** Read [Disclaimers](https://hop.io/fair-use) before deploying to Hop.io
