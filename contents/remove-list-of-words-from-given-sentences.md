---
title: Remove list of words from given sentences
description: >-
  A brute force method to remove words from sentences.
excerpt: >-
  A brute force method to remove words from sentences.
datetime: 2019-10-26T16:35:07.322Z
slug: remove-list-of-words-from-given-sentences
featured: true
category: Snippets
tags:
  - python
  - nlp
author: L RMN
coverImage: >-
  https://res.cloudinary.com/lrmn/image/upload/v1685631797/lrmn.dev/Remove-list-of-words-from-given-sentences_gabux1.png
coverImageAlt: A brute force method to remove words from sentences.
coverImageWidth: "1200"
coverImageHeight: "700"
ogImage: "https://res.cloudinary.com/lrmn/image/upload/v1685631797/lrmn.dev/Remove-list-of-words-from-given-sentences_gabux1.png"
ogImageAlt: Remove list of words from given sentences
type: article
language: English
_template: blog_article
---

## SNIPPETS CODE

```py
import re

datasets = ["aaaaa bbbbb cccc", "ccccc bbbb xxxxxxx", "xxxxxx zzzz zaaaaaa"]
hapus_kata = ["aaaaa", "zzzz"]

for idx_data in range(len(datasets)):
  for idx_kata in range(len(hapus_kata)):
    kata_baru = re.sub(rf"\b{hapus_kata[idx_kata]}\b", '', datasets[idx_data]).strip()
    datasets[idx_data] = kata_baru
```
