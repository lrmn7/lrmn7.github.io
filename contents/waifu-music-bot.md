---
title: WaifuMusic | Discord music bot with buttons. Play a best quality music.
description: >- 
  The bot now uses the latest version of discord.js and prefix commands are back again, added more function to it, a music channel where you can type your song and waifu will join the vc where you are in and play the music you entered. More updates information on our support server.
excerpt: >-
  An advanced discord music bot, supports Spotify, Soundcloud, YouTube with Shuffling, Volume Control and Web Dashboard with Slash Commands support
datetime: 2023-06-06T19:50:07.322Z
slug: waifu-music-bot-discord
featured: true
category: Discord
tags:
  - Discord Bot
author: L RMN
coverImage: >-
  https://res.cloudinary.com/lrmn/image/upload/v1686076196/lrmn.dev/waifuu_fdmbqv.gif
coverImageAlt: An advanced discord music bot, supports Spotify, Soundcloud, YouTube with Shuffling, Volume Control and Web Dashboard with Slash Commands support
coverImageWidth: '1200'
coverImageHeight: '700'
ogImage: 'https://res.cloudinary.com/lrmn/image/upload/v1686077861/lrmn.dev/waifu-og-blog_oeflyb.png'
ogImageAlt: An advanced discord music bot, supports Spotify, Soundcloud, YouTube with Shuffling, Volume Control and Web Dashboard with Slash Commands support
type: article
language: English
_template: blog_article
---


## ❤️‍🔥 WaifuMusic
- 🔴 Invite our bot directly [here.](https://discord.com/login?redirect_to=%2Foauth2%2Fauthorize%3Fclient_id%3D1090120136167538748%26permissions%3D8%26scope%3Dbot%2520applications.commands)
- 📍 Visit our bot website: [waifumusic](https://waifu-music.is-a.fun)
- 📥 Download: [Download](https://github.com/lrmn7/waifumusic-bot-discord.git)

## 💨 Update 2.3.0

The bot now uses the latest version of discord.js and prefix commands are back again, added more function to it, a music channel where you can type your song and waifu will join the vc where you are in and play the music you entered. More updates information on our support server.

## 💦 Required

- Node.js v18+
- Discord.js v14
- Distube
- ffmpeg
- libsodium-wrappers

## 🔰 First step

To run this correctly on your desktop/local device, please follow these steps.

> To begin, obtain a copy of the code by either cloning it using Git or downloading the zip file.
```
git clone https://github.com/lrmn7/WaifuMusic-bot-discord.git
```
```
https://github.com/lrmn7/WaifuMusic-bot-discord/releases
```
To proceed, after obtaining a copy of the code through cloning or downloading and unzipping the file, open the source code and enter the following command in your console.
```
npm install
```
This command will install the necessary packages as specified in the package.json file.

## 💠 Config

With all packages now downloaded, proceed to the `config.js` file where you will be required to fill in important variables for configuration.
```js
module.exports = {

WAIFU_TOKEN=YOUR TOKEN BOT
HACHIKI=OWNER_ID
HACHIKI_TAG=L`RMN#9749
HACHIKI_LINK=https://discord.com/users/{userid}
DEV_GUILD=YOUR SERVER ID

WAIFU_PREFIX=w! // YOUR PREFIX

MONGO_DB=YOUR MONGO_DB URL

WAIFU_TRACKS=https://open.spotify.com/playlist/6R4aE0V0YmcKJH8qjYBLFK?si=6523d3a5d4b446fd
SPOTIFY_SECRET=
SPOTIFY_CLIENT_ID=

YOUTUBE_COOKIE=

MAIN_COLOR=#2F3136
ERR_COLOR=#ED2828
}
```
## 💕 Running
Once the necessary variables have been entered in the config.js file, invite your bot to the server you fill in the `config.js` then, use the following command in your console to run your bot.
```
npm run start
```
If you want to start with shards run this.
```
npm run shards
```
- Congratiolations you now have a running bot and play music on vc's!

## 💫 Deploy

![Glitch Badge](https://img.shields.io/badge/Glitch-2800ff?style=for-the-badge&logo=glitch&logoColor=white)&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
![Deploy](https://www.herokucdn.com/deploy/button.svg)&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
[![Run on Repl.it](https://repl.it/badge/github/WilardzySenpai/WaifuMusic)](https://replit.com/@LRMN/waifumusic)&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
![Run on Hop.io](https://res.cloudinary.com/lrmn/image/upload/c_scale,w_80/v1685977085/lzZYjpqm_400x400_kwtfxu.png)

> NOTE: It is important to note that using this code to publish a bot publicly or advertising it without proper credit is strictly prohibited.

