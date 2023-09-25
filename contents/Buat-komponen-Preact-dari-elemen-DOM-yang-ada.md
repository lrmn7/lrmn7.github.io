---
title: Buat komponen Preact dari elemen DOM yang ada
description: >-
  Ada dua cara dasar yang saya tahu. Yang pertama sangat sederhana, dan bekerja di Preact dengan cara yang sama seperti di React:
excerpt: >-
  Ada dua cara dasar yang saya tahu. Yang pertama sangat sederhana, dan bekerja di Preact dengan cara yang sama seperti di React:
datetime: 2022-02-25T15:46:07.322Z
slug: buat-komponen-Preact-dari-elemen-DOM-yang-ada
featured: true
category: How Do I
tags:
  - Tips & Tricks
  - React
  - DOM
author: L RMN
coverImage: >-
  https://res.cloudinary.com/lrmn/image/upload/v1685641702/react-dom_k3fqkq.png
coverImageAlt: Buat komponen Preact dari elemen DOM yang ada.
coverImageWidth: "1200"
coverImageHeight: "700"
ogImage: "https://res.cloudinary.com/lrmn/image/upload/v1685641702/react-dom_k3fqkq.png"
ogImageAlt: Buat komponen Preact dari elemen DOM yang ada
type: article
language: Indonesia
_template: blog_article
---

Bagaimana cara mengkloning elemen DOM yang ada (misalnya, gambar anak kucing dengan keterangan) ke dalam pohon komponen Preact? Meskipun ini mungkin bukan kasus penggunaan yang umum, ini bisa sangat berguna untuk diketahui.

Ada dua cara dasar yang saya tahu. Yang pertama sangat sederhana, dan bekerja di Preact dengan cara yang sama seperti di React:

## Menggunakan _dangerouslySetInnerHTML_

```
// somewhere, probably in effect:
let element = document.getElementById("myElement");

// later in the component
<div dangerouslySetInnerHTML={{ __html: element ? element.outerHTML : null }}></div>
```

Tangkapan sebenarnya di sini mungkin hanya satu: Jika kita ingin mengkloning seluruh elemen target, kita perlu menggunakan **outerHTML** alih-alih **innerHTML** kontra-intuitif itu karena nama prop (kita atur **div's innerHTML**, bukan elemennya).

## Gunakan h()( createElement()) metode

Cara kedua adalah dengan menggunakan **Preact.h()** method (yang merupakan singkatan dari **Preact.createElement()**). Ini jelas lebih kompleks, tetapi memberi kita kendali penuh atas apa yang akan dilampirkan ke DOM virtual kita. Dapat membersihkan input, mengubah atribut, menetapkan referensi, atau melakukan apa pun yang kami inginkan.

Saat ini tidak ada API yang hanya mengambil elemen DOM yang ada dan mengubahnya menjadi elemen DOM virtual (ada **cloneElement()** metode, tetapi hanya untuk elemen kloning yang sudah menjadi bagian dari DOM virtual).

Namun, kita dapat mengambil Elemen DOM yang ada dan membuat salinannya dalam bentuk yang **h()** akan diterima oleh Preact. Jika kita mengintip [dokumen](https://preactjs.com/guide/v10/api-reference/#h--createelement) , kita akan mengetahui bahwa bentuk yang diharapkan adalah **h(type, props, ...children)**.

Parameternya **type** agak sederhana—ini adalah nama elemen HTML (mis., **h1**, **code**).

Untuk tujuan kloning elemen DOM, **props** parameter dapat dianggap sebagai objek yang berisi atribut elemen DOM (misalnya, **id**, **class**, **width**).

Bagaimana kita bisa mendapatkan atribut tersebut? Sayangnya, saat ini tidak ada API DOM yang sederhana dan dapat menjelaskan sendiri. Ada **Element.attributes**, Element.**getAttributeNames()** dan **Element.getAttribute()**, tetapi tidak satupun dari mereka akan memberi kita objek dengan semua atribut Elemen DOM langsung. Tapi kita bisa memanfaatkan api itu dalam fungsi utilitas:

```
const getAttributes = (element) => {
  const attributes = {};
  // fair warning: for..of loop is the only way
  // how can we iterate over `Element.attributes`
  for (let attr of element.attributes) {
    attributes[attr.name] = attr.value;
  }
  return attributes;
};
```

Jika kita perlu mengkloning satu elemen tanpa anak, seperti elemen **&lt;img /&gt;**, kita telah selesai. Namun, akan jauh lebih baik jika memiliki API yang lebih fleksibel yang mampu mengkloning seluruh cabang DOM!

Jadi parameternya **...children** tentang apa? Itu menerima DOM virtual sederhana dengan bentuk yang sama **h()** diharapkan (atau string atau array string jika satu-satunya anak adalah teks). Kita dapat membuat sebuah fungsi yang akan mengonversi DOM browser kita menjadi DOM virtual Preact secara rekursif:

```
import { h } from 'preact';

const toVNodeTree = (childNodes) => {
  const tree = [];
  childNodes.forEach((node) => {
    // Text node
    if (node.nodeType === 3) {
      return tree.push(node.data);
    }
    // Element node
    if (node.nodeType === 1) {
      return tree.push(
        h(node.nodeName, getAttributes(node), toVNodeTree(node.childNodes))
      );
    }
  });
  return tree;
};
```

Jika kita ingin membersihkan, melampirkan kelas, atribut lain dari referensi, melapisi node teks, atau lebih, kita dapat melakukannya di dalam fungsi ini.

## Menyatukannya

Jika digabungkan, kode kita dapat terlihat seperti contoh sederhana ini:

```
import { h } from 'preact';
import { useState, useEffect } from 'preact/hooks';

const getAttributes = (element) => {
  const attributes = {};
  for (let attr of element.attributes) {
    attributes[attr.name] = attr.value;
  }
  return attributes;
};

const toVNodeTree = (childNodes) => {
  const tree = [];
  childNodes.forEach((node) => {
    if (node.nodeType === 3) {
      return tree.push(node.data);
    }
    if (node.nodeType === 1) {
      return tree.push(
        h(node.nodeName, getAttributes(node), toVNodeTree(node.childNodes))
      );
    }
  });
  return tree;
};

export const App = () => {
  const [element, setElement] = useState();

  useEffect(() => {
    const element = document.querySelector('#clone-me');
    if (element) {
      setElement(element);
    }
  });

  return (
      <div>
        {element
          ? h(
              element.nodeName,
              getAttributes(element),
              toVNodeTree(element.childNodes)
            )
          : null}
      </div>
  );
};
```

## Bagaimana dengan React?

React memiliki api yang sangat mirip, **React.createElement()**. Ini bekerja pada dasarnya dengan cara yang sama, tetapi tidak seperti Preact, yang bertujuan untuk tetap sangat dekat dengan platform, React telah sedikit menyimpang darinya.

Tidak ada **class**, tetapi **className**, tidak ada **for** tetapi **htmlFor** dan seterusnya _( [daftarnya akan agak panjang](https://www.geeksforgeeks.org/attributes-that-work-differently-between-react-and-html/) )_. Itu juga akan tersedak jika atributnya **style\*** berisi string, bukan objek gaya.

Ada beberapa perpustakaan yang bertujuan untuk mengonversi properti DOM standar menjadi yang diterima React _(mis., [react-attr-converter](https://www.npmjs.com/package/react-attr-converter) )_ atau _[style-to-object](https://www.npmjs.com/package/style-to-object)_ (mereka sedang diunduh cukup sedikit, meskipun tidak dirawat cukup lama) . Intinya: Ya, itu bisa dilakukan di React, tetapi dengan cukup hati-hati.

**_👍 Selamat menikmati!_**
