---
title: Quick Sort.js
description: >-
  Quick sort implementation in javascript.
excerpt: >-
  Quick sort implementation in javascript.
datetime: 2019-10-18T07:35:07.322Z
slug: quick-sort-js
featured: true
category: Snippets
tags:
  - javascript
  - competitive
  - programming
author: L RMN
coverImage: >-
  https://res.cloudinary.com/lrmn/image/upload/v1685631797/lrmn.dev/Quick-Sort-js_fqauu8.png
coverImageAlt: Quick sort implementation in javascript.
coverImageWidth: "1200"
coverImageHeight: "700"
ogImage: "https://res.cloudinary.com/lrmn/image/upload/v1685631797/lrmn.dev/Quick-Sort-js_fqauu8.png"
ogImageAlt: Quick Sort.js
type: article
language: English
_template: blog_article
---

## SNIPPETS CODE

```js
const arr = [0, 2, 4, 5, 1, 3, 3, 7, 6, 9, 2];
// arr.sort()
const swap = (items, leftIndex, rightIndex) => {
  let temp = items[leftIndex];
  items[leftIndex] = items[rightIndex];
  items[rightIndex] = temp;
};
const sort = (arr) => {
  quicksort(arr, 0, arr.length - 1);
};
const quicksort = (arr, left, right) => {
  if (left >= right) {
    return;
  }
  let pivot = arr[Math.floor((left + right) / 2)];
  let next = swapper(arr, left, right, pivot);
  quicksort(arr, left, next - 1);
  quicksort(arr, next, right);
};
const swapper = (arr, left, right, pivot) => {
  while (left <= right) {
    while (arr[left] < pivot) {
      left++;
    }
    while (arr[right] > pivot) {
      right--;
    }
    if (right >= left) {
      swap(arr, left, right);
      left++;
      right--;
    }
  }
  return left;
};

sort(arr);
```
