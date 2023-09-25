---
title: Riviu Buku, Effective TypeScript
description: >-
  Tips dan trick menggunakan TypeScript?
excerpt: >-
  Tips dan trick menggunakan TypeScript?
datetime: 2021-11-27T12:50:07.322Z
slug: Tips-dan-trick-menggunakan-TypeScript
featured: true
category: Article
tags:
  - typescript
  - Tips & Tricks
author: L RMN
coverImage: >-
  https://res.cloudinary.com/lrmn/image/upload/v1687075108/lrmn.dev/og-typescript_smwi1u.png
coverImageAlt: Riviu Buku, Effective TypeScript
coverImageWidth: "1200"
coverImageHeight: "700"
ogImage: "https://res.cloudinary.com/lrmn/image/upload/v1687075108/lrmn.dev/og-typescript_smwi1u.png"
ogImageAlt: Tips dan trick menggunakan TypeScript?
type: article
language: Indonesia
_template: blog_article
---

> TLDR: Buku yang efektif, penuh dengan tips - trick bagaimana bekerja dengan TypeScript. 4.5/5.

Bulan kemarin, sebagai bahan bacaan rekomendasi dari kantor, saya membaca buku [Effective Typescript](https://effectivetypescript.com/).

Sebelumnya saya sendiri kurang pengalaman dengan _typed lang_ ~ saya sering nulis interface 2 kali karena malas extends atau bikin genericnya. Ada beberapa hal yang membuat saya sendiri suka sama _typed lang_ seperti C++/Golang tidak compile ya tidak jalan, belum lagi fitur seperti autocompletion, refactoring, IDE error diagnostic, dan banyak lainnya.

Jadi apa saja yang saya pelajari? Dengan tidak berurutan ~ mari kita kupas.

## Branded Type

Bisa di ibaratkan kalau sebuah tipe data memiliki bentuk, kadang bisa saja string berisi alamat, bisa juga _path_. Untuk membedakan tipe data yang satu dengan yang lain kita dapat menggunakan konsep yg dinamakan branding.

Oke, fungsi binary search dibawah hanya akan efektif kalau array yang di masukan sudah urut (_sorted_), (contoh dari dalam buku):

```ts
function binarySearch<T>(xs: T[], x: T): boolean {
  let low = 0,
    high = xs.length - 1;
  while (high >= low) {
    const mid = low + Math.floor((high - low) / 2);
    const v = xs[mid];
    if (v === x) return true;
    [low, high] = x > v ? [mid + 1, high] : [low, mid - 1];
  }
  return false;
}
```

Tapi, walaupun array yang kita masukan belum urut, fungsi ini akan tetap berjalan dengan semestinya. Nah untuk menjaga parameter array yang dimasukan agar selalu berurutan kita dapat menuliskan fungsi lain untuk mengurutkan array tersebut.

```ts
type SortedList<T> = T[] & { _brand: "sorted" };

function isSorted<T>(xs: T[]): xs is SortedList<T> {
  for (let i = 1; i < xs.length; i++) {
    if (xs[i] > xs[i - 1]) {
      return false;
    }
  }
  return true;
}

function binarySearch<T>(xs: SortedList<T>, x: T): boolean {
  // ...
}
```

Dengan menggunakan fungsi `isSorted` dahulu sebelum menggunakan `binarySearch`, kita dapat memastikan bahwa funsi binary search berjalan dengan performa maksimal.

Brand ini aslinya cuma main - main dengan _type system_ untuk menjaga fungsi/class kita hanya bisa diakes oleh bentuk tertentu, satu contoh lagi:

```ts
type Time = string & { _brand: "time" };

function isTime(str: string): Time {
  return str as Time;
}

function parseTime(t: Time) {
  const split = t.split(":");
  return {
    hours: split[0],
    minute: split[1],
    second: split[2],
  };
}

// use the func
const time = "12:10:31";
parseTime(isTime(time));
```

## The `unknown`

Kalau anda berurusan dengan banyak data dari luar, parsing XML, JSON, Excel dan banyak lagi ~ kemungkinan fungsi untuk parsing file tersebut hanya ada satu, tetapi bentuk dari apa yang kita parse akan ada banyak. Saya sendiri sering menggunakan `any` ternyata approach yang elegan, menggunakan `unknown`.

```ts
// kita menggunakan any,
function parseExcel(filename): any {
  // do the parsing
}

type CustomerData = {
  name: string;
  registered: string;
  email: string;
};

function saveCustomerData(): CustomerData {
  const parsed = parseExcel(filename); // any
  const alamat = parsed.alamat; // not an error
  // do logic for saving
  return; //
}
```

Jika kita menggunakan unknown pada fungsi `parseExcel` kita akan dipaksa menimpa tipe data yang akan kita gunakan.

```ts
function parseExcel(filename: string): unknown {
  // do the parsing
}

function saveCustomerData(): CustomerData {
  const parsed = parseExcel(filename) as CustomerData;
  const alamat = parsed.alamat; // error alamat does not exists on CustomerData
  // do logic for saving
  return; //
}
```

## Test the type declaration

Bacaan ini ada pada chapter 6. Saya sepertinya hanya melihat ini di TypeScript, dimana kita harus bikin Test pada Type Declaration kita sendri. Disini dibahas juga kenapa sih kita harus ngetes tipe? Bukannya tipe itu ya cuma tipe aja tidak perlu di test?

Aslinya test ini lebih cocok digunakan kalau kita memakai generic dikarenakan jikalau kita menggunakan generic, sifat suatu fungsi berpengaruh dengan tipe parameter yang di masukan.

Test ini menguji apakah generic yang kita buat sudah mengembalikan nilai dengan benar?

```ts
// helper untuk kita mengecek type
function assertType<T>(x: T) {}

// type declaration fungsi kita
declare function arrayGrouped<T>(array: T[], key: string): Record<string, T[]>;

//
interface Monster {
  author: string;
  title: string;
}

const listed: Monster[] = [
  { author: "Sanjiko Tanji", title: "Oimyun Nandeca" },
  { author: "Sanjiko Tanji", title: "Kamerun on Run" },
];
assertType<Record<string, Monster[]>>(arrayGrouped(listed, "author")); // OK
```

Alat pembantu untuk mengecek types [dtslint](https://github.com/microsoft/dtslint)

## TypeScript Pain

Yah lagu lama, memang ada beberapa hal yang membuat TypeScript kurang diminati beberapa orang.

Adding new workflow, dimanapun itu saat kita ingin menambahkan alat baru kita pasti akan menambahkan alur kerja yang baru juga. Untungnya TypeScript ini mempunyai fitur `allowJs` dimana kita dapat menggunakan file js dan ts secara beriringan ini tentunya sangat membantu saat kita ingin bermigrasi.

Soal upgrade, TypeScript sendiri sering tidak konsisten dengan versioning - bisa saja migrasi versi 3.3 ke 3.6 memuat build system kita rusak dikarenakan ada beberapa fungsi type pada 3.3 yang dihapuskan.

Third party lib confusion, nah ini memang tidak bisa dihindari. Sering kita dapatkan saat ingin bermigrasi ke TypeScript pustaka satu dengan yang lainnya yang kita pakai pada aplikasi memakai versi TypeScript yang berbeda yang bakalan menghambat saat kita ingin menikmati fitur - fitur pada versi pustaka yang terbaru.

Kebanyakan opsi kompiler, kalau ini saya mau menyanggah juga bingung memang benar sih kita dapat menargetkan kode kita ke bentuk ECMA manapun ES5, ES6 sampai ke ES200 besok. Ada beberapa fitur yang hanya bisa dipakai jika opsinya kita hidupkan pada `tsconfig.json`, jadi ada kemungkinan dimana confignya berbeda akan menghasilkan kode yang berbeda pula.

Walapun begitu ~ saya setuju jika TypeScript ini lebih banyak membantu daripada menyusahkan, paling tidak mengurangi test pada aplikasi JS kita dulu.

## Kesimpulan

Tentu lebih banyak lagi topik topik yang yang mebuat saya "Oh Oh Gituuu", tapi dari 8 bagian yang ada pada buku tentunya saya sendiri tidak bakal bisa jelasin satu persatu ~ ntar malah copy paste bukunya. Ada beberapa kesimpulan yang saya dapat tarik soal buku ini :

- Padat, berisi banyak tips, trick dan opini dimana kita harus menggunakan TypeScript
- Beberapa kode contoh cukup banyak sehingga kita sendiri lebih mengerti apa kegunaan cara - cara yang kita pakai
- Satu - satu, penjelasannya gradual dimulai dari permasalahan terkecil, sejarah dan cara bekerja TypeScript, lalu ke berbagai masalah sehari - hari saat kita menggunakan Typescript.
- Buku refresi, daripada kita menghafal seluruh isinya akan lebih baik buku ini menjadi referensi saat kita bertanya - tanya "Problem seperti ini di solve pakai cara apa ya?"

Buku yang bagus untuk semua.
