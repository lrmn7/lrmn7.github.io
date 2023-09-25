---
title: Git workflow mudah kok!
description: >-
  Implementasi Mudah Websocket dengan Node.js
excerpt: >-
  Implementasi Mudah Websocket dengan Node.js
datetime: 2019-10-20T11:10:07.322Z
slug: Git-workflow-mudah-kok
featured: true
category: Article
tags:
  - git
  - Tips & Tricks
author: L RMN
coverImage: >-
  https://res.cloudinary.com/lrmn/image/upload/v1687075697/lrmn.dev/og-git_fyv63j.png
coverImageAlt: Git workflow mudah kok!
coverImageWidth: "1200"
coverImageHeight: "700"
ogImage: "https://res.cloudinary.com/lrmn/image/upload/v1687075697/lrmn.dev/og-git_fyv63j.png"
ogImageAlt: Implementasi Mudah Websocket dengan Node.js
type: article
language: Indonesia
_template: blog_article
---

Kali saya akan membahas beberapa hal mengenai [Git](https://git-scm.com/) sebuah aplikasi versioning yang tentunya mempermudah kita saat membuat aplikasi / memaintain aplikasi.

Git merupakan aplikasi versioning, ya dimana kegunaan-nya adalah versioning aplikasi / atau apapun, saya pernah menemukan novel, buku, dan berkas perpustakaan yang menggunakan Git sebagai versioning karena saking gampangnya dipelajari. Lebih baik juga jika berkas kenegaraan kita menggunakan Git, mudah bukan? ntar tau dah kapan menikah, kapan punya SIM, kapan anak pertama lahir, _your git your history but this you can't revert_.

Hadirnya Git di inisiasi oleh Linus Trovalds walaupun sekarang di kepalai oleh Junio Hamano. Sebelum Git ada [banyak sekali aplikasi versioning](https://en.wikipedia.org/wiki/Comparison_of_version-control_software), tetapi yang paling populer adalah Git.

Mari simulasikan. Suatu hari Wawan, Joni, dan Ayu akan membuat aplikasi. Hal pertama yang dilakukan Joni adalah membuat Git Repository

## Init your workflow first

```bash
$ git init # inisiasi git repostitory
# Joni membuat file untuk mengisi git repository
$ echo "# Awesome App!" > README.md
$ git add . # Joni menaruh semua file ke stage area
$ git diff # Joni memeriksa perubahan yang dilakukan-nya
# Joni menaruh semua file ke HEAD
$ git commit -m "Innitial commit of awesome app!"
```

Git mempunyai 2 area yaitu _stage area_ dan _HEAD area_. Gampangnya jika kamu sudah merasa selesai menulis/merubah file lakukan `git add <nama file>` untuk menaruh semua file ke dalam _stage area_ untuk kamu periksa lagi apakah perubahan yang kamu lakukan sudah benar. Jika perubahan yang kamu lakukan sudah benar dan kamu sudah mantab maka lakukan `git commit -m "<your message>"` untuk memindahkan file yang kamu rubah ke _HEAD area_ dimana nantinya orang lain dapat melihat perubahan yang kamu lakukan.

Wawan ternyata sudah membuat Git remote repository tempat mereka kerja di Gitlab, Joni lalu menambahakan repo tersebut ke local repostitory-nya.

```bash
# menambahkan remote repository
$ git add remote origin git@git.gitlab.com:yourgroupname/awesome-app.git
```

Sekarang kalian sudah project kalian sudah mempunyai remote repository dimana nantinya Wawan dan Ayu dapat meng-copy project-nya melalui remote repository

![Dencentralized Workflow](https://nvie.com/img/centr-decentr@2x.png)

Kita dapat menambahkan remote repository sebanyak mungkin dengan `git add remote <name>`. Ini biasa digunakan jika kita memliliki banyak remote repository.

`origin` merupakan nama default untuk menentukan manakah remote repository. Biasanya remote repository lain digunakan sebagai mirror (eg: linux-kernel, ffmpeg, libvips, etc), mempunyai banyak mirror repository.

```bash
# mirror remote repository
$ git add remote mirror git@git.github.com:yourgroupname/awesome-app.git
$ git push mirror master
```

## Git Branching, your app lifecycle

Git seperti sebuah pohon, _branch_ dalam Git merupakan sebuah kopi dari _branch_ yang lain. Branch utama pada Git dinamakan _master_, Git workflow yang baik adalah Git workflow yang menggunakan _branch_ dengan benar.

Hari kedua sebelum diskusi tim dimulai, Wawan membuat `git branch` dahulu

```bash
# create new branch from master
$ git checkout -b develop master
# deploy branch to remote repository
$ git push origin develop --set-upstream
# Wawan create feature branch
$ git checkout -b feature develop
# Wawan deploy feature branch to remote repo
$ git push origin feature --set-upstream
```

Wawan lalu bilang ke teman - teman lain bahwa nanti saat awal development kita akan menggunakan branch **feature** sebagai branch development yang aktif. Branch **develop** akan digunakan sebagai masa _staging_ aplikasi dan branch **master** akan digunakan untuk merilis aplikasi.

Ternyata Ayu mendapatkan ticket di Jira untuk memulai project terlebih dahulu. Okay!

```bash
# Ayu meng clone project
$ git clone git@git.gitlab.com:yourgroupname/awesome-app.git
# Ayu membuat feature branch-nya dari branch feature
$ git checkout -b feature-user-login feature
# ayu mulai mengerjakan fitur tersebut
```

Dari yang mereka ber-tiga kerjakan dapat dilihat bahwa Branch master (production) sama sekali tidak bersinggungan dengan branch feature, branch feature besinggungan langsung dengan branch develop dimana merupakan branch staging, tempat mereka bertiga testing aplikasi sebelum rilis.

Kesimpulannya begini :

- Ada 3 main branch pada aplikasi mereka (master, develop, feature)
- master branch merupakan production branch
- develop branch bersinggungan dengan master branch, digunakan sebagai branch staging / testing
- feature branch merupakan tempat kerja para developer, penamaan dapat menggunakan feature-_namafituranda_

![Illustrasi git branch](https://nvie.com/img/git-model@2x.png)

## Git Merging, the battle of developers

Ayu sudah menyelesaikan fiturnya, lalu dia meng-upload fitur tersebut ke remote repository

```bash
$ git add login.cpp
$ git commit -m "add: login function"
$ git push origin feature-login --set-upstream
```

Yay, perkerjaan Ayu sudah ada pada remote branch, waktunya untuk _merging_. Merging adalah proses mengabungkan branch satu dengan yang lainnya. Biasanya proses merge ini dinamakan Merge Request / Pull Request. Fitur ini tidak tersedia di local Git anda adanya di Gitlab/Github atau layanan versioning lainya. Untuk selanjutnya saya menyebut ini Pull Request (PR).

Proses PR ini simpel-nya cuma menggabungkan branch target dengan branch dimana tempat development terjadi. Dapat dilakukan juga di lokal dengan cara ini:

```bash
# merge feature-login to feature
$ git merge feature feature-login
# merge to develop branch to test it on staging
$ git merge develop feature
# merge develop branch to master, app is going to production
$ git merge master develop
```

Biasanya proses PR digunakan sebagai proses _code review_, oleh developer lain terhadap kode yang kita buat. Jika developer lain sudah merasa oke dengan kode yang kita buat, maka developer itulah nanti yang mengabungkan branch tersebut. Contoh proses code-review dan PR bisa dilihat [disini](https://github.com/vuejs-id/docs/pull/160)

### Merge Conflict

Pasti kita pernah mengalami ini sekali atau setiap saat, tergantung seramai apakah sebuah aplikasi di buat. Merge conflict bukanlah hal yang tabu dan perlu ditakuti. Conflict dapat terjadi karena satu developer mengedit 2 hal yang sama.

Cuma memang, kalau kalian melihat kata _conflict_ mesti merasa itu sebuah kesalahan, bukan itu hal yang biasa terjadi jika kalian berkerja dengan banyak orang pada suatu codebase jangan takut bisa di _resolve_ kok.

Biasanya kita bingung bagaimana sih langkah pertama untuk memperbaiki konfik kode ini? Jikalau ini terjadi sebelum kamu melakukan `git push` kamu dapat menyelesaikan-nya di lokal. Tapi bagaimana jika ini terjadi saat proses PR?

Branch feature-login yang ayu buat tadi ternyata ada conflict yang harus di selesaikan! bagaimana caranya Ayu menyelesaikan ini pada saat proses PR?

```cpp
// contoh merge conflict
cout<<"Hello please"
<<<<<<< HEAD
cout<<"Open an issue in IRC"
=======
cout<<"Open an issue in Github"
>>>>>>> feature-login
```

Pertama-tama ayu mengambil update yang menyebabkan conflict dengan cara

```bash
# Ayu berada pada branch feature-login
# mengambil update yang menyebabkan conflict pada branch feature
# perintah ini akan melakukan sinkronisasi ke branch feature
# perintah akan menghasilkan error, merge conflict
$ git pull upstream feature
> Error merge conflict in login.cpp
```

Nah lalu sekarang kita tinggal periksa mana kode yang membuat PR tadi menghasilkan conflict, lakukan resolve di lokal anda.

```bash
# Conflict sudah dibenarkan mari kita update
$ git add login.cpp
$ git commit -m "merge-conflict: login.cpp"
$ git push
```

PR yang Ayu buat akan otomatis ter-update dan mengecek apakah branch feature nanti masih conflict atau tidak. Jika tidak maka fitur yang dibuat ayu siap meluncur ke staging dan production.

## Git Tag's, handle your version

Git mempunyai fitur tagging, biasanya fitur ini digunakan untuk menandai versi sebuah aplikasi.

```bash
# Aplikasi siap meluncur dengan versi 0.1
# Commit terakhir adalah fitur login Ayu
$ git tag 0.1
# menandakan bahwa sekarang aplikasi anda dengan commit terakhir Ayu
# tadi merupakan versi 0.1
```

Tagging biasanya dilakukan di branch _master_, `tag` tidak seperti sebuah branch, tag merupakan satu kesatuan sendiri. Use case, misal aplikasi versi 1.0 mengalami bug pada login, sementara aplikasi 2.0 tidak. User tidak bisa meng-upgrade aplikasi karena harus bayar lagi. Git tag merupakan solusinya.

```bash
# mari ke versi 1.0
$ git checkout 1.0
$ git checkout -b feature-fix-login-on-v1
```

Tag tidak berlaku sebagai branch, tag merupakan satu kesatuan sendiri, jadi jika anda ingin memperbaiki sesuatu harap, memperbaiki di brach baru lagi yang anda buat berdasarkan branch tag ini.

## Notes

Begitulah sekiranya Git workflow, mudah atau malah masih bingung? Haha. Untuk memahami sesuatu memang lebih mudah dengan cara mempraktekannya. Yuk mari praktekkan! Agar aplikasi kita dapat dengan mudah di maintain dan jika ada bug, kita lebih tau commit manankah yang menyebabkan bug tersebut.

Thanks, Happy Git~ here some notes, I steal their image too...

- [Buddy - Git Workflow](https://buddy.works/blog/5-types-of-git-workflows)
- [Successful Git Branching Model](https://nvie.com/posts/a-successful-git-branching-model/)
- [Attlasian Git Workflow](https://www.atlassian.com/git/tutorials/comparing-workflows)

Git Interactive Tutorial

- [learngitbranching.js.org](https://learngitbranching.js.org/)
- [try git by Github](https://try.github.io/)
- [git ready](http://gitready.com/)

Be happy be good people eveybody :)
