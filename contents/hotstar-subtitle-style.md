---
title: Hotstar subtitle style
description: >- 
  Customize hotstar.com subtitle
excerpt: >-
  Customize hotstar.com subtitle. Import this script to [tempermonkey]
datetime: 2019-09-08T10:35:07.322Z
slug: hotstar-subtitle-style
featured: true
category: Snippets
tags:
  - javascript
  - tempermonkey
author: L RMN
coverImage: >-
  https://res.cloudinary.com/lrmn/image/upload/v1685631797/lrmn.dev/Hotstar-subtitle-style_ycrj1w.png
coverImageAlt: Customize hotstar.com subtitle. Import this script to [tempermonkey]
coverImageWidth: '1200'
coverImageHeight: '700'
ogImage: 'https://res.cloudinary.com/lrmn/image/upload/v1685631797/lrmn.dev/Hotstar-subtitle-style_ycrj1w.png'
ogImageAlt: Hotstar subtitle style
type: article
language: English
_template: blog_article
---



## SNIPPETS CODE

```js{15-18}
// ==UserScript==
// @name         Change subtitle style
// @namespace    http://tampermonkey.net/
// @version      1.0
// @description  Hostar's subtitle kinda sucks... so
// @author       @lrmn
// @match        https://www.hotstar.com/*
// @icon         https://www.google.com/s2/favicons?domain=hotstar.com
// @grant        none
// ==/UserScript==

(function() {
  'use strict';
  // You can customize this
  const fontWeight = "600!important";
  const stroke = "1px black";
  const fontSize = "42px!important";
  const backgroundColor = "transparent!important";

  const styleSheet = document.createElement('style');
  styleSheet.type = "text/css"
  styleSheet.innerHTML = `
    .subtitle-container .cues-container .shaka-text-container span{
      font-size:${fontSize};
      font-weight:${fontWeight};
      background-color:${backgroundColor};
      -webkit-text-stroke:${stroke};
    }
  `

  document.head.appendChild(styleSheet)

})();
```

## How to use?
Import this script to [tempermonkey](https://www.tampermonkey.net/)