---
title: Moo ♪ a discord bot music for the community
description: >-
  The bot now uses the latest version of discord.js and prefix commands are back again, added more function to it, a music channel where you can type your song and Moo ♪ will join the vc where you are in and play the music you entered. More updates information on our support server.
excerpt: >-
  An advanced discord music bot, supports Spotify, Soundcloud, YouTube with Shuffling, Volume Control and Web Dashboard with Slash Commands support
datetime: 2023-06-06T19:50:07.322Z
slug: moo-music-bot-discord
featured: true
category: Discord
tags:
  - Discord Bot
author: L RMN
coverImage: >-
  https://i.imgur.com/hKsHBw7.png
coverImageAlt: An advanced discord music bot, supports Spotify, Soundcloud, YouTube with Shuffling, Volume Control and Web Dashboard with Slash Commands support
coverImageWidth: "1200"
coverImageHeight: "700"
ogImage: "https://i.imgur.com/hKsHBw7.png"
ogImageAlt: An advanced discord music bot, supports Spotify, Soundcloud, YouTube with Shuffling, Volume Control and Web Dashboard with Slash Commands support
type: article
language: English
_template: blog_article
---

---

# Moo ♪

### Discord.js v14 Music Bot

Supports **YouTube**, **Spotify**, **SoundCloud** streams.

If you encounter any issues or would like to contribute to the community, please join our [Discord server](https://discord.gg/WFfjrQxnfH).

[Invite Moo ♪](https://discord.com/oauth2/authorize?client_id=1132766063365476442&permissions=53857345&scope=bot)

Visit [moo.is-a.fun](https://moo.is-a.fun/) to learn more!

## Thanks for Your Support!

We appreciate any kind of support ❤️. Feel free to [buy us a coffee](https://www.buymeacoffee.com/LRMN).

_Please note that we are not affiliated with Discord Inc or its subsidiaries._

## Deploying with node.js

### Clone the latest version of the repository

```
git clone https://github.com/moo-7/moo-v1.git
```

### Install the dependencies

install all the dependencies from [**package.json**](https://github.com/moo-7/moo-v1/blob/main/package.json)

```
yarn install
```

### Add Lavalink node

Please refer to this [**documentation**](https://lavashark.js.org/docs/server-config) for detailed information.  
Edit the file [**node-list.json**](https://github.com/moo-7/moo-v1/blob/main/node-list.json)

```json
[
  {
    "id": "Node 1",
    "hostname": "localhost",
    "port": 2333,
    "password": "youshallnotpass"
  }
]
```

### Configure environment

Edit the file **.env**

```env
TOKEN = "your_token"
NAME = "moo ♪"
PREFIX = "moo"
PLAYING = "music with moo ♪"
EMBEDS_COLOR = "#FFFFFF"
DEFAULT_VOLUME = 50
MAX_VOLUME = 100
AUTO_LEAVE = true
AUTO_LEAVE_COOLDOWN = 5000
DISPLAY_VOICE_STATE = true
PORT = 33333
```

<details> 
  <summary>Detailed description</summary>

**`AUTO_LEAVE`** : After the music finished, can choose whether let the bot leave voice channel automatically or not.  
 **`AUTO_LEAVE_COOLDOWN`** : Timer for auto disconnect(ms).  
 **`DISPLAY_VOICE_STATE`** : Show voice channel status updates.

</details>

### Running the script

```
yarn run start
```

## Deploying with Docker

**image link** : https://hub.docker.com/r/lrmn/moo

If you don't have any available nodes, you need to first start the server container using **Docker Compose** in the server directory.

### Start with Docker

Use the following command to start the container:  
Please put your **token** into the `TOKEN` variable.

```
docker run -d \
  --name moo-bot \
  -e TOKEN="your_token" \
  -e PREFIX="moo" \
  -e PLAYING="music with moo ♪" \
  -e EMBEDS_COLOR="#FFFFFF" \
  -e DEFAULT_VOLUME=50 \
  -e MAX_VOLUME=100 \
  -e AUTO_LEAVE="true" \
  -e AUTO_LEAVE_COOLDOWN=5000 \
  -e DISPLAY_VOICE_STATE="true" \
  -v ./node-list.json:/bot/node-list.json \
  -v ./blacklist.json:/bot/blacklist.json \
  -p 33333:33333 \
  lrmn7/moo:latest
```

### Start with Docker-Compose

Please put your **token** into the `TOKEN` variable.

```yml
version: "3.8"
services:
  moo-bot:
    image: lrmn7/moo:latest
    container_name: moo-bot
    restart: always
    environment:
      TOKEN: "your_token"
      PREFIX: "moo"
      PLAYING: "music with moo ♪"
      EMBEDS_COLOR: "#FFFFFF"
      DEFAULT_VOLUME: 50
      MAX_VOLUME: 100
      AUTO_LEAVE: "true"
      AUTO_LEAVE_COOLDOWN: 5000
      DISPLAY_VOICE_STATE: "true"
    volumes:
      - ./node-list.json:/bot/node-list.json
      - ./blacklist.json:/bot/blacklist.json
    ports:
      - 33333:33333
```

#### Start the container

```
docker-compose up -d
```
