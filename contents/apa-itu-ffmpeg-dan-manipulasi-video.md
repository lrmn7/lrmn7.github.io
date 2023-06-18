---
title: Apa itu ffmpeg dan manipulasi video
description: >- 
  Pengenalan ffmpeg, perintah - perintah, dan dasar - dasar manipulasi video
excerpt: >-
  Pengenalan ffmpeg, perintah - perintah, dan dasar - dasar manipulasi video? Pengenalan ffmpeg, perintah - perintah, dan dasar - dasar manipulasi video
datetime: 2020-10-11T17:10:07.322Z
slug: Apa-itu-ffmpeg-dan-manipulasi-video
featured: true
category: Article
tags:
  - ffmpeg
  - Tips & Tricks
author: L RMN
coverImage: >-
  https://res.cloudinary.com/lrmn/image/upload/v1687025564/lrmn.dev/blognew_c3f9xe.png
coverImageAlt: Pengenalan ffmpeg, perintah - perintah, dan dasar - dasar manipulasi video
coverImageWidth: '1200'
coverImageHeight: '700'
ogImage: 'https://res.cloudinary.com/lrmn/image/upload/v1687025564/lrmn.dev/blognew_c3f9xe.png'
ogImageAlt: Pengenalan ffmpeg, perintah - perintah, dan dasar - dasar manipulasi video
type: article
language: Indonesia
_template: blog_article
---

Saya sendiri on/off soal _procedural generation app_, saya sebenernya suka sekali ngulik - ngulik video/grafis generation walaupun belum banyak yang bisa saya share. Tulisan berikut mungkin berantakan (karena lebih seperti _note_, daripada tulisan), tujuan dari tulisan berikut adalah mengenalkan ffmpeg secepat mungkin dengan beberapa contoh perintah.

[ffmpeg](https://ffmpeg.org/) dikenal sebagai satu - satunya perangkat lunak terbuka manipulasi video terlengkap. Proyek ffmpeg ini dirilis sebagai perangkat lunak terbuka pada tahun 2000, dan terus dikembangkan sampai sekarang. Mungkin banyak yang mengenal ffmpeg dengan kompresi video-nya - tapi banyak juga kok perintah - perintah, pada ffmpeg ini yang memungkinkan kita untuk membuat video editor.

## Installasi / Pemasangan

Saya suka menggunakan [ffmpeg static build](https://www.johnvansickle.com/ffmpeg/faq/) download saja dan tinggal taruh folder `bin` atau _symlink_. Untuk platform lain silahkan untuk menuju [dokumentasi resmi](https://ffmpeg.org/download.html).

Untuk [windows](https://www.gyan.dev/ffmpeg/builds/)

```bash
# untuk linux cara symlink
$ ln -s ~/path/to/downloaded/build/ffmpeg ~/.local/bin/
# setelah itu tinggal diakses dengan, ingat taruh di bin agar dapat diakses secara global
$ ffmpeg
```

Jangan lupa juga ffprobe, dan ffplay sekalian dipasang.

Untuk nodejs saya sering menggunakan [ffmpeg-static](https://www.npmjs.com/package/ffmpeg-static)

## Cara baca command

Perintah dibawah digunakan untuk merubah video `.mp4` ke `.webm`. ffmpeg akan otomatis akan menggunakan konfigurasi _default_ (enconding, bitrate, dkk) dan mengkonversi jenis video ke `.webm`

```bash
$ ffmpeg -i input.mp4 output.avi
```

Perintah dibawah adalah perintah untuk mengkompresi video dan merubah encoding menjadi webm.

```bash
$ ffmpeg -i source.mp4 -c:v libvpx-vp9 -b:v 1M -c:a libopus -b:a 128k target.webm
```

Nah untuk perintah kedua ini mari kita pecah satu - satu, agar lebih jelas.

1. `-i source.mp4` Ini digunakan untuk mengambil input video
2. `-c:v` opsi ini `c` untuk codec dan `v` untuk video (bagian codec akan saya jelaskan nanti)
3. `-b:v` `b` disini adalah video bitrate (akan saya jelaskan dibawah)
4. `-c:a` dan `-b:a` sama seperti diatas tapi ini untuk audio

ffmpeg selain bisa menformat Video bisa juga digunakan untuk memformat Audio. Jadi kita bisa optimisasikan sebuah Video baik itu melalui Audio bitrate maupun Video. Bagian berikutnya lagi saya akan mendemokan soal _complex filter_ dan _buffer chaining_ di ffmpeg.

## ffmpeg Complex Filter

```bash
                [main]
input --> split ---------------------> overlay --> output
            |                             ^
            |[tmp]                  [flip]|
            +-----> crop --> vflip -------+
```

Nuaah ~ sampe sini nih, menurut saya ini adalah bagian menarik dari ffmpeg, filter. Filter pada ffmpeg dapat digunakan pada file gambar maupun video. Filter pada ffmpeg dapat menggunakan _buffer chaining_ yang artinya kita dapat menggabungkan 2 atau lebih proses filter pada ffmpeg. Berikut adalah diagram yang ada pada dokumentasi. Silahkan download video [berikut](https://www.pexels.com/video/bikers-and-carriages-driving-on-street-852038/) dan jalankan command ffmpeg dibawah untuk mempraktekkan, dengan contoh command pada [dokumentasi](https://ffmpeg.org/ffmpeg-filters.html).

```bash
$ ffmpeg -i input.mp4 -vf "split [main][tmp]; [tmp] crop=iw:ih/2:0:0, vflip [flip]; [main][flip] overlay=0:H/2" output.mp4
```

Diagram diatas menjelaskan bahwa proses pada ffmpeg dapat dibagi beberapa buah. Menggunankan `libavfilter` filter pada ffmpeg dapan menerima banyak output dan menghasilkan banyak output pula. Ini adalah konsep _buffer chaining_ yang ingin saya tekankan, karena konsep ini sangat berguna untuk video _processing_ maupun video prosedural generatif. Mari kita pecah satu persatu.

Input video dimasukan kedalam proses split, menghasilakn 2 buffer. satu dinamakan `[main]` satu lagi `[tmp]`, `[tmp]` melalui proses `crop` di potong video-nya, lalu dibalik (diputer 180') dengan `vflip` menghasilkan output `[flip]`. Kedua `[main]` dan `[flip]` yang dihasilkan lalu digabung menggunakan overlay, dengan aturan setengah dari tinggi video tersebut. Mari kita lihat hasil dari perintah tersebut.

![image result](https://res.cloudinary.com/lrmn/image/upload/v1687023295/ffmpeg_input_output_1_enyoef.jpg)

`iw` input width. `ih` input heigt. `iw:ih/x:y:keep_aspect` memotong video berdasarkan posisi, `keep_aspect` untuk menentukan _aspect ratio_ dari sebuah video. `0:H/2`, dalam overlay tempatkan input overlay ke-setengah tinggi dari video tujuan

## Chroma Key

Biasa dikenal seperti _Green Screen Keying_, sebuah proses penghapusan warna dari video - warna tersebut lalu dapat diganti dengan hal lain - seperti background video atau yang lainnya. Berikut contoh perintah dan penjelasan.

```bash
$ ffmpeg -i <base-video> -i <overlay-video> -filter_complex '[1:v]colorkey=0x<color>:<similarity>:<blend>[ckout];[0:v][ckout]overlay[out]' -map '[out]' <output-file>
```

Baris pertama `[1:v]colorkey=0x<color>:<similarity>:<blend>[ckout];` nuaaaah, `[1:v]` mengakses video greenscreen hapus warna (saya memakai 0x3BBD1E) hijaunya, lalu mengeluarkan output `[ckout]`.

Baris kedua `[0:v][ckout]overlay[out]`, nah karena pada ffmpeg, ditaruh pertama maka akan di proses duluan. Perintah berikut dapat diartiakn menaruh `[ckout]` (video green screen wanita) diatas `[0:v]` (background_hacktoberfest.png) dan menghasilkan output `[out]`.

Penggunaan `-map [out] output-file.mp4` adalah memilih hasil output mana yang harus diikutkan ke dalam file final.

> .mov merupakan ekstensi video yang bisa transparan, seperti .png dan .webp kalau dalam konteks grafis

## Bitrate, Framerate, dan Encoding

Bitrate, pada ffmepg bitrate dimaksudkan adalah seberapa banyak bits (byte) yang diproses oleh FFMPEG dalam satu waktu, semakin besar bitrate semakin besar pula ukuran file. Dalam ffmpeg opsi ini biasanya dipanggil dengan `-b`.

Framerate (FPS-Frame per second), semakin tinggi Framerate maka semakin halus pergerakan di sebuah video, semakin tinggi juga mempengaruhi size video. Kebanyakan video sudah bagus ditayangkan di 30FPS.

Encoding, dalam ffmpeg bisa dikatakan adalah sebuah proses untuk mengubah format file, contoh dari `mp4` ke `webp`. Ffmpeg mempunya buaaaaanyaaak sekali codecs ~ yang saya sendiri jarang pakai haha. Bisa dilihat di [sini](https://www.ffmpeg.org/ffmpeg-codecs.html#Description).

## ffprobe dan ffplay

[ffprobe](https://ffmpeg.org/ffprobe.html#toc-Description), biasanya digunakan untuk mengambil dan mengubah metadata pada sebuah video, seperti judul, tanggal, dan yang lain.

[ffplay](https://ffmpeg.org/ffplay.html), media player praktis dari ffmepg.

## Sumber belajar

- Tentu [dokumentasi](https://ffmpeg.org/documentation.html), dan [dokumentasi lagi](https://trac.ffmpeg.org/)
- [composite operation](https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/globalCompositeOperation), sering saya gunakan sebagai referensi jenis jenis overlay dan bagaimana sifatnya
- Saya sering browsing [di video.stackexchange](https://video.stackexchange.com/) kebanyakan yang jawab pertanyaan [maintainer ffmepg sendiri](https://video.stackexchange.com/users/1871/gyan)
- Dan tidak lupa pula di Youtube, banyak sekali contoh operasi command ffmpeg.
