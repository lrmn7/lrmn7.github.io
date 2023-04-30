import { ProjectType } from "@/types/project";
const js = {
  name: "javascript",
};
const react = {
  name: "react",
};
const nextjs = {
  name: "nextjs",
  url: "https://nextjs.org/",
};
const chakra = {
  name: "chakra-ui",
  url: "https://chakra-ui.com/",
};
const project: ProjectType[] = [
  {
    title: "PkDx",
    image: require("public/projects/pkdx.png"),
    description:
      "A simple pokedex opensource web apps built with react.js & typescript.",
    createdAt: "2021-12-02",
    technology: [js, react, { name: "graphql" }, { name: "emotion-css" }],
    url: "https://pkdx.lrmn.dev/",
    source: "https://github.com/lrmn/pkdx",
  },
  {
    title: "URL Shortner",
    image: require("public/projects/shortner.png"),
    description: "Creating custom URL shortener using Nodejs.",
    createdAt: "2023-03-03",
    technology: [js],
    source: "https://github.com/lrmn7/url-shortner/",
  },
  {
    title: "Pixel Punk Avatar",
    image: require("public/projects/pixel.png"),
    description:
      "This is a tutorial project for generating Cryptopunk-like avatars from a set of images.",
    createdAt: "2022-08-19",
    technology: [{ name: "python" }],
    url: "https://pixel.lrmn.dev/",
    source: "https://github.com/lrmn7/pixel-punk-avatar",
  },
  {
    title: "Discord bot",
    image: require("public/projects/meow.png"),
    description:
      "Discord Bot with over 400 commands and made for large servers.",
    createdAt: "2020-02-02",
    technology: [js, { name: "discord" }],
    url: "https://discord.com/api/oauth2/authorize?client_id=928966154817523723&permissions=8&scope=bot%20applications.commands",
    source: "https://github.com/lrmn7/Bot-Discord-V14",
  },
  {
    title: "Dashboard Bot Discord Web",
    image: require("public/projects/botdash.png"),
    description:
      "Customize your website invite and feature your bot discord.",
    createdAt: "2022-07-09",
    technology: [{ name: "html" }, { name: "css" }, { name: "javascript" }],
    url: "https://dashbot.lrmn.dev",
    source: "https://github.com/lrmn7/Dash-bot-discord",
  },
  {
    title: "ELIZA Line Chatbot",
    image: require("public/projects/eliza.jpg"),
    description:
      "ELIZA is an early natural language processing computer program created from 1964 to 1966 at the MIT Artificial Intelligence Laboratory by Joseph Weizenbaum and implemented using python by me.",
    createdAt: "2020-04-14",
    technology: [{ name: "python" }, { name: "line" }],
    url: "https://line.me/R/ti/p/%40537amjdd",
    source: "https://github.com/lrmn7/eliza-line-chatbot",
  },
  {
    title: "Useful iGracias Script",
    image: require("public/projects/igracias.jpg"),
    description:
      "A collection of useful script to automate proccess in iGracias.",
    createdAt: "2020-01-03",
    technology: [js, { name: "jquery" }],
    source: "https://github.com/lrmn7/usefull-igracias-script",
  },
  {
    title: "Quoteit! twitter bot",
    image: require("public/projects/quotebot.jpg"),
    description:
      "Quoteitbot is a bot that generates an image based on a tweet that you mentioned using an image from unsplash.",
    createdAt: "2019-06-20",
    technology: [
      {
        name: "python",
      },
      {
        name: "twitter",
      },
      {
        name: "bot",
      },
    ],
    source: "https://github.com/lrmn7/twitter",
    url: "https://twitter.com/Quoteitbot",
  },
  {
    title: "Snake Game",
    image: require("public/projects/snake.png"),
    description:
      "An old-school snake game multiplayer online.",
    createdAt: "2022-11-12",
    technology: [js],
    source: "https://github.com/lrmn7/snake-game",
  },
];

export default project;
