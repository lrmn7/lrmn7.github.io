---
title: Remove undefined key.js
description: >-
  Explicitly remove undefined key of given object in javascript.
excerpt: >-
  Explicitly remove undefined key of given object in javascript.
datetime: 2019-10-19T03:35:07.322Z
slug: remove-undefined-key-js
featured: true
category: Snippets
tags:
  - javascript
author: L RMN
coverImage: >-
  https://res.cloudinary.com/lrmn/image/upload/v1685631797/lrmn.dev/Remove-undefined-key-js_h4euva.png
coverImageAlt: Explicitly remove undefined key of given object in javascript.
coverImageWidth: "1200"
coverImageHeight: "700"
ogImage: "https://res.cloudinary.com/lrmn/image/upload/v1685631797/lrmn.dev/Remove-undefined-key-js_h4euva.png"
ogImageAlt: Remove undefined key.js
type: article
language: English
_template: blog_article
---

## SNIPPETS CODE

```js
Object.keys(obj).forEach((key) => obj[key] === undefined && delete obj[key]);
```
