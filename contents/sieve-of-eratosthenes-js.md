---
title: Sieve of Eratosthenes.js
description: >-
  Generate from 1 to N prime number using sieve of eratosthenes, writen in js..
excerpt: >-
  Generate from 1 to N prime number using sieve of eratosthenes, writen in js..
datetime: 2019-11-03T21:10:01.311Z
slug: sieve-of-eratosthenes-js
featured: true
category: Snippets
tags:
  - javascript
  - competitive
  - programming
author: L RMN
coverImage: >-
  https://res.cloudinary.com/lrmn/image/upload/v1685631797/lrmn.dev/Sieve-of-Eratosthenes-js_he64qe.png
coverImageAlt: Generate from 1 to N prime number using sieve of eratosthenes, writen in js..
coverImageWidth: "1200"
coverImageHeight: "700"
ogImage: "https://res.cloudinary.com/lrmn/image/upload/v1685631797/lrmn.dev/Sieve-of-Eratosthenes-js_he64qe.png"
ogImageAlt: Sieve of Eratosthenes.js
type: article
language: English
_template: blog_article
---

## SNIPPETS CODE

```js
const generatePrime = (max) => {
  let sieve = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37];
  const isPrimeFromSieve = (num) => {
    var max = Math.ceil(Math.sqrt(num));
    for (let i = 0; i < sieve.length; i++) {
      if (num % sieve[i] === 0) return false;
      else if (max < sieve[i]) return true;
    }
    return true;
  };
  let current = sieve[sieve.length - 1] + 2;
  while (current <= max) {
    if (isPrimeFromSieve(current)) sieve.push(current);
    current += 2;
  }
  return sieve;
};

//EXAMPLE
//generate prime number from 1 to 100
console.log(generatePrime(100));
```
