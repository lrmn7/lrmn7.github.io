---
title: Get OG (Open Graph Image)
description: >- 
  🍇Open Graph Image Generator based on @vercel/og for personal use.
excerpt: >-
  What is an GET OG?
  Have you ever posted a hyperlink to Twitter, Facebook, or Slack and seen an image popup? How did your social network know how to "unfurl" the URL and get an image? The answer is in your <head>.
datetime: 2023-06-08T13:10:07.322Z
slug: get-og
featured: true
category: Mini Project
tags:
  - free code
author: L RMN
coverImage: >-
  https://res.cloudinary.com/lrmn/image/upload/v1686415898/get-og_mnc7lq.png
coverImageAlt: 🍇Open Graph Image Generator based on @vercel/og for personal use.
coverImageWidth: '1200'
coverImageHeight: '700'
ogImage: 'https://res.cloudinary.com/lrmn/image/upload/v1686415898/get-og_mnc7lq.png'
ogImageAlt: 🍇Open Graph Image Generator based on @vercel/og for personal use.
type: article
language: English
_template: blog_article
---



## Project Links

- LIVE SITE LINK: [https://get-og.is-a.fun](https://get-og.is-a.fun/ "https://get-og.is-a.fun")
- GITHUB REPO: [https://github.com/lrmn7/get-og](https://github.com/lrmn7/get-og "https://github.com/lrmn7/get-og")

🍇Open Graph Image Generator based on [@vercel/og](https://vercel.com/docs/concepts/functions/edge-functions/og-image-generation) for personal use.

## What is an GET OG?

Have you ever posted a hyperlink to Twitter, Facebook, or Slack and seen an image popup?
How did your social network know how to "unfurl" the URL and get an image?
The answer is in your `<head>`.

The [Open Graph protocol](http://ogp.me) says you can put a `<meta>` tag in the `<head>` of a webpage to define this image.

It looks like the following:

```html
<head>
  <title>Title</title>
  <meta property="og:image" content="http://example.com/logo.jpg" />
</head>
```

## Why use this service?

* Feel free to customize an image for every single blog post or every single documentation page.
* This is easily introduced through a link with some params.


## Deploy Guide

1. Fork this repository
2. Replace the bg image and logo to yours in pulic dir, and change the relevant text infomation.
3. Connect [Vercel for GitHub](https://vercel.com/github) to automatically deploy each time you `git push`
4. Add the following to the vercel environment variables: **Settings > Environment Variables**

>Name                  | NEXT_PUBLIC_DEPLOYMENT_URL

>Value                 | https://deployment.domain.com

## Getting Started 🛠️

Install with

```bash
yarn
```

Then, run the development server:

```bash
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## License

[MIT](./LICENSE) License © 2023 [L RMN](https://lrmn.is-a.dev/)