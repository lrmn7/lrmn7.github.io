---
title: Let SootheBot Bring Calm to Your Discord!
description: >-
  Soothe is a multi-purpose music bot ready to skill up and boost up your Discord server's voice activity.
excerpt: >-
  Soothe is a multi-purpose music bot ready to skill up and boost up your Discord server's voice activity.
datetime: 2023-09-25T20:10:07.322Z
slug: soothe-bot
featured: true
category: Discord
tags:
  - Discord Bot
author: L RMN
coverImage: >-
  https://i.imgur.com/1W4z4Ow.png
coverImageAlt: Soothe is a multi-purpose music bot ready to skill up and boost up your Discord server's voice activity.
coverImageWidth: "1200"
coverImageHeight: "700"
ogImage: "https://i.imgur.com/1W4z4Ow.png"
ogImageAlt: Soothe is a multi-purpose music bot ready to skill up and boost up your Discord server's voice activity.
language: English
type: article
_template: blog_article
---

---

## Features

- 🎵 Play songs from YouTube, Youtube Music, Spotify and more
- 🔍 Search for a song or playlist via a query or link
- 🎼 View playback in an embed and control it using buttons
- 🦾 Full support for slash commands

  - [Music](#music)
  - [Management](#management)
  - [Developer](#developer)

### Music

```
| Name     | Options                   | Description                                                |
| -------- | ------------------------- | -----------------------------------------------------------|
| play     | `query:optional`          | Plays or adds a song/playlist to the queue                 |
| queue    |                           | Shows the queue                                            |
| clear    |                           | Clears the queue                                           |
| skip     | `amount:number:optional`  | Skips current or multiple songs                            |
| back     |                           | Rewinds to the previous song                               |
| pause    |                           | Pauses the song                                            |
| resume   |                           | Resumes the song                                           |
| seek     | `seconds:number`          | Rewinds the song to a specific moment                      |
| shuffle  |                           | Shuffles the queue                                         |
| stop     |                           | Stops the bot and deletes the queue                        |
| lyrics   | `query:optional`          | Searches for the lyrics of a song                          |
| player   |                           | Shows or hides the music controller                        |
| use-yt-music | `choice:optional`    | Choose whether you want to use yt music to search for songs |
```

### Management

```
| Name   | Options                      | Description                                 |
| ------ | -----------------------------| --------------------------------------------|
| ping   |                              | Checks whether the bot is running           |
| prefix | `new-prefix:string:optional` | Shows current prefix or sets it             |
| help   | `command:string:optional`    | Shows description of command or categories  |
```

### Developer

These commands are only available for bot owners

```
| Name      | Options | Description               |
| --------- | ------- | --------------------------|
| exit      |         | Exits the nodejs process  |
| reload-db |         | Reloads the db            |
```

</details>

## Requirements

1. Get bot token as shown [here](https://discordjs.guide/preparations/setting-up-a-bot-application.html#creating-your-bot).
   1.1 Enable "Message Content Intent" in Discord Developer Portal
2. Node.js 16 or newer

## ⚙️ Installation

1. Clone the repo, install packages & build the bot

```bash
git clone https://github.com/soothe-bot/soothe.git
cd soothe
npm install
npm run build
```

2. Create a file named `.env` and insert following content in it:

```txt
TOKEN="paste your token here"
```

3. Run the bot

```bash
npm start
```

## 🐋 Running with docker

To run this bot using docker you'll have to set an env variable `TOKEN` to the token of your discord bot and mount a volume to `/app/data`. Here is a simple example:

```
docker run -e TOKEN=*your bot token here* -v ./data:/app/data --name soothe -d lrmn/soothe
```

You can also use docker compose

```yml
version: "3"

services:
  bot:
    restart: always
    image: lrmn/soothe
    environment:
      - TOKEN=*your bot token here*
    volumes:
      - soothedata:/app/data

volumes:
  soothedata:
```

## 🛠️ Additional settings

Every setting described here is an env variable and should be put inside of your `.env` file.

- `DEF_PREFIX`: this variable defines the default prefix for non-slash commands. It can be overwritten by using the [`prefix`](#managment) command. By default it is set to `s`

## ❤️ Soothe

[Invite Soothe](https://discord.com/oauth2/authorize?response_type=code&client_id=1135657945653313566&scope=guilds.join%20bot%20applications.commands&permissions=826818161680&redirect_uri=https%3A%2F%2Fsoothe.is-a.fun%2Fthanks)

Visit [soothe.is-a.fun](https://soothe.is-a.fun/) to learn more!

## Thanks for Your Support!

We appreciate any kind of support ❤️. Feel free to [buy us a coffee](https://www.buymeacoffee.com/LRMN).

_Please note that we are not affiliated with Discord Inc or its subsidiaries._
