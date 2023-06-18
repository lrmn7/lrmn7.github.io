---
title: Mencoba que dengan node-resque
description: >- 
  Hi, kali ini saya akan membahas bagaimana cara kita memanfaatkan fitur background jobs atau queue (antrian) yang bakalan sering kita gunakan.
excerpt: >-
  Hi, kali ini saya akan membahas bagaimana cara kita memanfaatkan fitur background jobs atau queue (antrian) yang bakalan sering kita gunakan.
datetime: 2019-10-19T17:20:07.322Z
slug: Mencoba-que-dengan-node-resque
featured: true
category: Article
tags:
  - javascript
  - node
  - Tips & Tricks
author: L RMN
coverImage: >-
  https://res.cloudinary.com/lrmn/image/upload/v1687076184/lrmn.dev/og-que_qc4x38.png
coverImageAlt: Mencoba que dengan node-resque
coverImageWidth: '1200'
coverImageHeight: '700'
ogImage: 'https://res.cloudinary.com/lrmn/image/upload/v1687076184/lrmn.dev/og-que_qc4x38.png'
ogImageAlt: Mencoba que dengan node-resque
type: article
language: Indonesia
_template: blog_article
---


Hi, kali ini saya akan membahas bagaimana cara kita memanfaatkan fitur *background jobs* atau *queue* (antrian) yang bakalan sering kita gunakan.

## Use Case!

Queue biasanya digunakan untuk memproses sesuatu yang sekiranya dapat dilakukan di belakang layar tanpa adanya interferensi dari user. Seperti mengirimkan email, video encoding, image processing dan berbagai hal lainnya. Salah satu pengalaman saya pribadi, hal ini sangat berguna saat kita ingin mem-*blast* ribuan email (atau hanya kirim satu email) atau hanya sekedar video encoding dengan *ffmpg*.

Jika kita menggunakan third-party service untuk pengirimen email/sms sangat disarankan untuk menggunkan *queue* dikarenkan service tersebut bisa saja kapan kapan down dan failure, ini dapat diatasi baik oleh *queue*. Setiap proses pada *queue* seperti sebuah log history, jadi kita bisa tau mana yang gagal dan mungkin dapat dilakukan *retry* atau hal lain.

Pengiriman email/sms tanpa menggunkan background jobs bisa saja mem-block *main-thread* pada aplikasi kita, terutama jika kita menggunakan node.js dimana kita harus mempertimbangkan apakah code ini benar benar memblock *main-thread* atau tidak. Untuk pengecekannya kita bisa gunakan profiling atau contoh simpel code berikut yang dapat memblock *main-thread* di aplikasi kita :

```js
  const fs = require('fs');
  const data = fs.readFileSync('/file.md'); // blocks here until file is read
```

```js
  //  non blocking
  const fs = require('fs');
  fs.readFile('/file.md', (err, data) => {
    if (err) throw err;
  });
```

Sepertinya akan lebih indah jika artikel selanjutnya membahas tentang `blocking` dan `non-blocking` code, I/O dan mungkin sedikit profiling 😄.

## Lest get to the code...

Ini hanya *que* (lest just call it *que* from now on...) simpel tidak ada multiworker dan sebagainya, but *at least* setidaknya meng-cover sedikit tentang bagaimana *que* itu sendiri bekerja.

*Que* biasanya menggunakan algoritma FIFO (First In First Out) pada kali ini kita akan membuat kalkulator sederhana yg dimana nantinya proses kalkulasi akan dilakukan di *que*. Mari kita buat aplikasi kalkulaktor terminal kita yang simpel ini.

```js
  // calculator.js
  const vorpal = require('vorpal')()
  const Redis = require('ioredis')
  const redis = new Redis()
  const pub = new Redis()

  //  subscribe to jobs
  redis.subscribe('jobs')

  vorpal.show()

  vorpal
    .command('calc [numbers...]')
    .action((args, callback) => {
      // convert array to strings
      let str = args.numbers.join(' ')
      pub.publish('jobs', str)
      // prompt again
      // this is why I use the lib no need to call
      // tailed prompt in node.js core
      callback()
    })
```

Seperti biasa dengan kekuatan komunitas dan NPM cukup seperti itu saja sudah jadi. Sebelumnya jika ingin membuat dengan pure nodejs tanpa bantuan `vorpal`, kita bisa gunakan `prompt` module dari node.js core.

Kali ini kita memerlukan redis untuk komunikasi (*pub/sub*) antar node (kalkulator dan que-jobs) jadi pastikan untuk setup redis di mesin yang kita gunakan. Ada beberapa jenis *que* biasanya kalau *que* itu tergolong simple dan tidak berat proses *que* sendiri tidak dipisahkandengan aplikasi atau berjalan satu *instance*. Pada kali ini kita akan membuat *que* yang berkomunikasi lewat *memcached* (Redis) atau bisa kita pisahkan server aplikasi dengan background-jobs.

Pada kali ini kita akan gunakan `node-resque` sebuah library que yang menurut saya mempunyai interface yang simple dan setidaknya memiliki fitur sceduler dan lain lain.

```js
  // que.js
  const NodeResque = require('node-resque')
  const Redis = require('ioredis')
  const redis = new Redis()
  const pub = new Redis()
  const math = require('mathjs')
  // subschannel in redis
  redis.subscribe('jobs')

  // connect to redis
  const connectionDetails = {
    pkg: 'ioredis',
    host: '127.0.0.1',
    password: null,
    port: 6379,
    database: 0
  }

  // define a jobs
  const jobs = {
    'calc': {
      perform: function add(message) {
        return math.eval(message)
      }
    }
  }

  // initialize worker
  const worker = new NodeResque.Worker({ connection: connectionDetails, queues: ['number'] }, jobs)
  worker.connect().then(() => worker.start() )

  worker.on('start', () => { console.log('worker started') })
  worker.on('end', () => { console.log('worker ended') })
  worker.on('poll', (queue) => { console.log(`worker polling ${queue}`) })
  worker.on('ping', (time) => { console.log(`worker check in @ ${time}`) })
  worker.on('job', (queue, job) => { console.log(`working job ${queue} ${JSON.stringify(job)}`) })
  worker.on('success', (queue, job, result) => { console.log(`job success ${queue} ${JSON.stringify(job)} >> ${result}`) })
  worker.on('pause', () => { console.log('worker paused') })

  const queue = new NodeResque.Queue({ connection: connectionDetails }, jobs)
  queue.on('error', function (error) { console.log(error) })

  queue.connect().then(() => {
    redis.on('message', async function (channel, message) {
      await queue.enqueue('number', 'calc', message)
    })
  })
```

Thats it! jalankan di dua terminal, satu untuk kalkulator dan satunya untuk background jobs/*que* kita. untuk mengunakan kalkulator kita hanya perlu mengetikan `calc 12 + 4 * 10 / 2`. Ingat sebelum memasukan angka kita harus panggil `calc` karena kita sudah mendefinisaknnya sebagai command pada aplikasi kalkulator terminal kita `.command('calc [numbers...]')`.

## Lest breaks it down!

Kedua aplikasi yang kita buat tersebut sama sama berkomunikasi lewat Redis dengan cara *pub/sub* `redis.subscribe('jobs')` untuk saling bertukar data. Ini adalah fitur yang sering digunakan di Redis. Kalkulator mengirim message lewat redis melalui *pub* `pub.publish('jobs', str)`.

Sekarang untuk job handling `node-resque` mengunkaan yang namanya `worker` dimana harus kita panggil dengan :

```js
  const worker = new NodeResque.Worker({
    connection: connectionDetails,
    // queue names
    queues: ['number'] },
    // jobs
    jobs
  )
  worker.connect().then(() => worker.start() )
```

worker sendiri berkerja untuk mengecek apakah ada *jobs/que* yang masih ketinggal atau tidak, jika ada maka akan di proses. Kadang kita juga ingin mematikan proses worker di kondisi tertentu. Misal saat kita menghentikan server yang bertugas sebagai worker, kita bisa saja menggunakan `process` module dari node.js, seperti `SIGNINT` atau `SIGTERM`, :

```js
  process.on('SIGINT', async () => {
    console.log('Clearing Que')
    await queue.end()
    await worker.end()
    process.exit()
  })
```

Sebelum kita konek dengan worker biasanya kita definisikan dulu jobs yang akan di proses :

```js
  const jobs = {
    'calc': {
      perform: function add(message) {
        return math.eval(message)
      }
    }
  }
  ```

  'calc' ini adalah nama dari jobs tersebut. setelah Worker di registrasikan dan jobs sudah ada maka kita daftarkan jobs tersebut ke *que* menggunakan module `NodeResque.Queue` :

  ```js
  const queue = new NodeResque.Queue({
    connection: connectionDetails
  }, jobs)
  queue.on('error', function (error) { console.log(error) })

  queue.connect().then(() => {
    redis.on('message', async function (channel, message) {
      // register que to worker
      // number ==> que name
      // calc ==> jobs name
      await queue.enqueue('number', 'calc', message)
    })
  })
```

Nah komunikasi redis pub/sub biasanya dapat kita peroleh melalui `redis.on` yang memiliki 2 parameter yaitu `channel` dan `message`. Pada contoh ini channel adalah `jobs` dan cara publish message ke channel dengan `pub.publish(namaChannel, message)` simple! 😄.

Yak, sepertinya sampai disini dulu pembahasan tentang queue/background-jobs, tidak lupa saya tinggalkan beberapa link penting untuk referensi :

- [node-resque example](https://github.com/taskrabbit/node-resque/tree/master/examples)
- [background jobs talks](https://youtu.be/NNTsHzER31I)

Thanks! hit me up on twitter!