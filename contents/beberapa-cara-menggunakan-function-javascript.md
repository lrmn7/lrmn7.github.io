---
title: Beberapa cara menggunakan function di JavaScript
description: >-
  Hi! 😃 this is not right. Mungkin ini adalah beberapa cara kita membuat fungsi di JavaScript yang jarang kita gunakan dan saya harap beberapa contoh disini digunakan dengan tepat. Welcome to JavaScript function jungle!
excerpt: >-
  Hi! 😃 this is not right. Mungkin ini adalah beberapa cara kita membuat fungsi di JavaScript yang jarang kita gunakan dan saya harap beberapa contoh disini digunakan dengan tepat. Welcome to JavaScript function jungle!
datetime: 2019-10-19T14:10:07.322Z
slug: Beberapa-cara-menggunakan-function-di-JavaScript
featured: true
category: Article
tags:
  - javascript
  - Tips & Tricks
author: L RMN
coverImage: >-
  https://res.cloudinary.com/lrmn/image/upload/v1687074886/lrmn.dev/blog-og-js_zaajkv.png
coverImageAlt: Beberapa cara menggunakan function di JavaScript
coverImageWidth: "1200"
coverImageHeight: "700"
ogImage: "https://res.cloudinary.com/lrmn/image/upload/v1687074886/lrmn.dev/blog-og-js_zaajkv.png"
ogImageAlt: Beberapa cara menggunakan function di JavaScript
type: article
language: Indonesia
_template: blog_article
---

Hi! 😃 this is not right. Mungkin ini adalah beberapa cara kita membuat fungsi di JavaScript yang jarang kita gunakan dan saya harap beberapa contoh disini digunakan dengan tepat. Welcome to JavaScript function jungle!

## Callback and Callback Promises

> jangan dipakai yak, sekarang sudah jamannya promise. anda tidak mungkin juga kan bikin library lalu kasih tagline "still support callback"

Jikalau code snippet di bawah ini pernah terlintas di kepala kita, dan kita bertanya bagaimana sih caranya membuat yang seperti ini :

```js
// then - cacth
mymodel.find({ name: "Agus Sumboro" }).then((data) => console.log(data)); // works

// async await
await mymodel.find({ name: "Agus Sumboro" }); // works

// callback
mymodel.find({ name: "Agus Sumboro" }, (data) => {
  console.log(data); // works also
});

// dan contoh lainnya
```

yup, pertama kita harus pahami dulu bagaimana sih cara membuat _callback_, atau gampangnya sebuah _function_ yang return valuenya adalah _function_ :

```js
function callback(params, cb) {
  cb(params);
}

callback("Halo Isabela", console.log); // Halo Isabela
```

oke ini hanya support callback saja, lalu bagaimana jika ini support promise juga? saya sempat ingin membuat pull request di mongoose soal [views karena menarik](https://github.com/Automattic/mongoose/issues/7633) di sinilah saya tau kalau ternyata cara sebuah library menghandle [ini](https://github.com/Automattic/mongoose/blob/e25b5aef0b7e5706221d191cfae223e10631b027/lib/query.js#L2070) cukup unik :

```js
function cbPromises(params, callback) {
  const error = new Error(`${params} Not A Number`);
  // check if its function return callback if not return promise
  if (typeof callback === "function") {
    if (isNaN(params)) return callback(null, error); // isNaN() not a number
    return callback(params);
  }
  return new Promise((resolve, reject) => {
    if (isNaN(params)) reject(error);
    resolve(params);
  });
}

//  now this works yay!
cbPromises("Halo", function (data, err) {
  if (err) return console.log(err.message); // Halo Not A Number
  console.log(data);
});

cbPromises(13)
  .then((data) => console.log(data)) // 13
  .catch((err) => console.log(err.message));
```

Menurut saya agak naif menyuruh seorang 'newbie' (saya disini me-_refer_ orang yang baru masuk ke dunia JS) menggunakan `async await` atau `Promise` tanpa memberinya kejelasan dahulu bagaimana cara kita membuat promise atau callback. _Lest be clear here, and admit something..._ kita sendiri jarang membuat Promise apalagi Callback kalau di dunia front-end paling saya buat promise cuma untuk _Loading Screen_. _At least we understand how it works and why promise and async is a thing not just syntatic sugar don't we?_ 😁.

Saya juga belum lama masuk ke dunia JS, mungkin 2 tahun kurang lebih. Saat saya pertama kali kerja (dan saat ini saya masih disana juga), salah satu proyek kantor saya adalah aplikasi dengan 300k++ loc (line of code). First commit program itu tercatat 2015 Januari, yaudah callback hell. hahaha. Biasanya program seperti ini di maintain 6 orang kalau di startup, dikarenakan resource minim cuma 2 orang 😂 yah satu cuti satu kena hajar callback.

Lanjut...

## Recursive Function

Pernah ga ngalamin error seperti ini :

- `ERR: ENAMETOOLONG` ternyata panjang nama sebuah file/argumen di terminal kita itu terbatas, lebih tepatnya dibatasi oleh OS.
- ` warning: possible EventEmitter memory leak detected. 11 listeners added. Use emitter.setMaxListeners() to increase limit.`

Saya sering menemukan ini saat pertama belajar video processing, atau berkerja dengan `child_process`, **_mungkin_** penerapan function ini bisa membantu menyelesaikan masalah. Mungkin besok saya open ke github reponya setelah selesai bersih - bersih yang ga perlu, atau mungkin buat artikel soal video processing saja.

> jika kamu mendapatkan error tsb hal yang dapat kamu lakukan melihat perintah terminal yang kamu gunakan, jika perintah terminal tersebut dapat di minimalisir maka mungkin looping adalah salah satu caranya

```js
// recursive is fun
const arr = [1, 2, 4, 5];
let i = 0;
function recursiveFun() {
  i++;
  const element = arr[i];
  if (element === 4) return console.log(element);
  recursiveFun();
}
```

Cara kerja function diatas sangat simple, ambil `arr` posisi ke `i`, kalau `element` bukan 4 maka `i+1` panggil fungsi `recursiveFun()` lagi. Bagusnya function seperti ini dia menyimpan value variable yang ada diluarnya. Tentu ini sangat rare digunakan, dan saya sarankan tidak mengunakan ini kalu belum ketemu error seperti diatas yang **_mungkin_** saja solusinya adalah ini.

Salah satu code yang mungkin men-_trigger_ error `possible EventEmitter memory leak detected.` :

```js
let arr = [
  [1, 2],
  [1, 3],
]; // big two dimensional array

for (let i = 0; i < arr.length; i++) {
  const element = arr[i];
  supremeHardFunction(element);
}
```

Jarang terjadi tapi mungkin anda alami, jangan sekali kali menambah `eventListener` kalau memang tidak perlu atau tidak bisa dihindari.

## Closures Function

Saya yakin kalau ini sering banyak digunakan dan sangat saya sarankan digunakan. closures merupakan sebuah pattern untuk memberikan private access pada sebuah variable dalam sebuah _function_. Saya ambil contoh dari MDN saja.

```js
function init() {
  var name = "Mozilla"; // name merupakan local variable yang ada pada init
  function displayName() {
    // displayName() merupakan inner function, closures
    alert(name); // bisa menggunakan variable pada parent function
  }
  displayName();
}
init();
```

Dan sebenarnya kita sering memakai ini, saya sering menggunakan ini saat memakai modul `request` atau mungkin `fetch API`. Seperti inilah bentuknya :

```js
function api(key) {
  function get(url) {
    return fetch(`${url}?key=${key}`);
  }

  function post(url, params) {
    return fetch(url, {
      method: "POST",
      body: JSON.stringify(params),
      headers: {
        Authorization: `Bearer ${key}`,
      },
    });
  }

  return { get, post };
}

const request = api("super-key-bruh!");
// oops kita dah ga perlu lagi masukin API key!
request.get("https://haloexample.com/getexample");
request.post("https://haloexample.com/postexample", { halo: "Isabela" });
```

## Fluent Function / Methods Chaining

Sebenarnya saya agak lupa namanya Fluent Function/Waterfall Function banyak yang menyebut Methods Chaining. Tapi tentu sintak dibawah ini tidak asing.

```js
const λ = require('rambda.js)

//  not really a lamda function just example
λ.chop([1, 2, 3, 1])
  .reduce(a => a + b)
  .toString()
```

Yup, jika pernah terlintas bagaimana sih caranya membuat yang seperti itu. Untuk sesuatu yang simple ini saya memutuskan untuk menggunkan function saja, sebenarnya banyak library modern sekarang sudah menggunakan `class`.

```js
// ini function tapi bisa disebut class...

const Person = function () {
  // define constructor
  this.name = "Julia";
  this.shirt = "blue";
  this.gender = "female";
};

//  use prototype class function
Person.prototype.setName = function (name) {
  this.name = name;
  return this; // this adalah koenchi
};

Person.prototype.setShirt = function (shirt) {
  this.shirt = shirt;
  return this; // this adalah koenchi
};

Person.prototype.setGender = function (gender) {
  this.gender = gender;
  return this; // this adalah koenchi
};

Person.prototype.introduce = function () {
  const sheOrHe = this.gender === "male" ? "he" : "she";
  console.log(`This is ${this.name}, ${sheOrHe} wear ${this.shirt} shirt`);

  return this; // this adalah koenchi
};
```

Lalu dengan ini kita bisa gunakan snippet diatas secara indah :

```js
const isabela = new Person()
  .setName("Isabela")
  .setShirt("red")
  .setGender("female")
  .introduce();

// atau

const wawan = new Person();
wawan.setName("Wawan");
wawan.setShirt("blue");
wawan.setGender("male");
wawan.introduce();
```

Oke jika anda menggunakan code diatas tanpa `return this`.

```js
const juni = new Person();
juni.setName("Juni").setGender("male");

const hey = new Person();
const juni = hey.setName("Juni");
juni.setGender("male");

// setGender is not a function
```

ini dikarenakan `setName` sama sekali tidak me-_return_ value, jadi saat `setGender` mau mengakses dia dapetnya `undefined` kasian. Jadi saat anda membuat function dan memanggil `this` pada saat return, ada kemungkinan anda mengembalikan nilai atau value di function tersebut.

```md
🙋: Lha kalau aku panggil `this` ini kok malah keluarnya dari instance framework?
🐨: That's another story...
```

Wrapping up! sebenarnya masih ada banyak sekali function pattern yang biasa dipakai pada JavaScript tapi tentunya tidak bisa saya cover semua karena saya juga masih baru di dunia JS/Node.js ini, hal diatas hanya beberapa pattern yang setidaknya pernah saya gunakan, semoga dapat membantu saat ingin membuat _library_ di npm atau malah ingin berkontribusi ke beberapa _library_ yang sudah ada. Thanks all and as usual have a nice day! 😄

## Tips

_Always name your function_, dengan begitu kita tidak susah - susah saat profiling code kita jikalau memang nantinya perlu di profiling code-nya. Jika tidak tidak apa apa, karena memang jarang sekali kasus - kasus memory leak.

```js
// dont do this :(
export const aUsualFunction = (params, params2) => {
  /** do stuff*/
};

// do this instead
export function aUsualFunction(params, paramas3) {
  // do stuff
}
```
