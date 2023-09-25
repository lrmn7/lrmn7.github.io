---
title: Reading Code, Error, and Find Example
description: >-
  How being ignorant slows you down
excerpt: >-
  How being ignorant slows you down
datetime: 2022-05-04T09:30:07.322Z
slug: Reading-Code-Error-and-Find-Example
featured: true
category: Article
tags:
  - programming
  - errand
  - Tips & Tricks
author: L RMN
coverImage: >-
  https://res.cloudinary.com/lrmn/image/upload/v1687076362/lrmn.dev/og-readingcode_vtwt4u.png
coverImageAlt: Reading Code, Error, and Find Example
coverImageWidth: "1200"
coverImageHeight: "700"
ogImage: "https://res.cloudinary.com/lrmn/image/upload/v1687076362/lrmn.dev/og-readingcode_vtwt4u.png"
ogImageAlt: How being ignorant slows you down
type: article
language: English
_template: blog_article
---

Sometimes I mentor programming to my friends, and I always said that understanding what the code you wrote will be an important asset.

It's been 5 year since I professionally code, and I think the most important skill that I learn is reading code, make sense of an error and finding example.

When people joining bootcamp or learning through online tutorials, the first thing that you want is completing the task, make it work. After it works, the most important part to do is figuring out why it is to work.

Most coding bootcamp are starting to labeled someone that could create React website understand JavaScript enough, no. The fact that you can create something is great achievement, but if you want to understand it step by step it will be a greater one.

## Reading Code

If you got to learn modern programming/software making, you got to see some 3rd party open source library and use it. The way you get that is by using something called "package manager" (`npm`, `pip`, `composer`, etc).

That lib are **just other people code**, repeat with me! JUST OTHER PEOPLE CODE!

That means most of the time you could read their implementation. The code are sometimes placed online on platform like GitHub, GitLab, etc. Just google it, "your-library source code".

Lest's say you're curious about how do [dayjs](https://github.com/iamkun/dayjs/) does [subtraction](https://day.js.org/docs/en/manipulate/subtract#docsNav) to a date.

Going through your editor, you'll see the implementation :

```js
add(number, units) {
  number = Number(number) // eslint-disable-line no-param-reassign
  const unit = Utils.p(units)
  const instanceFactorySet = (n) => {
    const d = dayjs(this)
    return Utils.w(d.date(d.date() + Math.round(n * number)), this)
  }
  if (unit === C.M) {
    return this.set(C.M, this.$M + number)
  }
  if (unit === C.Y) {
    return this.set(C.Y, this.$y + number)
  }
  if (unit === C.D) {
    return instanceFactorySet(1)
  }
  if (unit === C.W) {
    return instanceFactorySet(7)
  }
  const step = {
    [C.MIN]: C.MILLISECONDS_A_MINUTE,
    [C.H]: C.MILLISECONDS_A_HOUR,
    [C.S]: C.MILLISECONDS_A_SECOND
  }[unit] || 1 // ms

  const nextTimeStamp = this.$d.getTime() + (number * step)
  return Utils.w(nextTimeStamp, this)
}

subtract(number, string) {
  return this.add(number * -1, string)
}
```

Then from here you can figure out yourself how subtract does its thing, you'll see that it's just `add` function but accept negative value then look up the add function, and you will see it depends on so many things! Try to break down one by one - and after that you could explain how those function that you're using work.

What you got from reading the source? You knew how something is made, you knew how you could improve it. Be curious sometimes, place a time in your calendar to read other people code. Trust me, some people are smarter than you just because they knew how it works.

You'll also see some trick that your library use, like how do your ORM does database polling, how does your library know to optimize the function call cost, etc. You will find some interesting stuff!

But what if you could not understand it at all? Take your time, ask around maybe on their GitHub issues/community, ask that you need a direction, or learn your language fundamental more. Don't be so ignorant, if something bad happened on code that you're using, at least you could help to fix.

> How could you make something reliable if you don't know how it works? - Rich Hickey

## Make sense of an error

Error is a must when you're learning, I see many people just do `npx create-react-app` because they don't know whats wrong, and ditch the tutorial, do other things. How could you improve yourself if you just doing this over and over? Learning to code is not easy and instant.

![example of react error on useeffec](https://i.stack.imgur.com/YFRR5.png)

Read the error carefully, search on google for guide on how to solve it and figure out why it is happened.

Error is a blessing, those HTML/CSS developer, they not getting error message at all! They must figure out how does `flex`, `box-sizing` really works to fix "Why this are not in center" type of question. That's why some people are better at translating design more than you, because they do mistakes all the time and learn it again and again.

You're too ignorant sometimes to read error messages and just copy paste that to google. Sometimes you find it, sometimes not. I see this with so many people that are new too UNIX ecosystem. CLI tools always have `--help` or `man` section at least read it sometimes.

```bash
$ your-cli-tools --help
```

Remember your error message doesn't always shows up on StackOverflow, sometimes other people using different variable name, if it is `undefined` its mean just one thing, you haven't declare it yet.

I remember the old days I learn programming through [Vuejs.id](https://vuejs.id) community. Whenever I ask, they taught me how to find the core problem, not just showing me how it should be done.

Even when I tried to wrote this article I happened encounter a strange error message

```text
Tried to use templateContent too early (./posts/reading-code-and-finding-example.md) (via TemplateContentPrematureUseError)
[0] [11ty]
[0] [11ty] Original error stack trace: TemplateContentPrematureUseError: Tried to use templateContent too early (./posts/reading-code-and-finding-example.md)
[0] [11ty]     at Object.get templateContent [as templateContent] (/Users/mandaputra/Code/me/mandaputtra/node_modules/@11ty/eleventy/src/Template.js:708:23)
[0] [11ty]     at Object.memberLookup (/Users/mandaputra/Code/me/mandaputtra/node_modules/nunjucks/src/runtime.js:251:17)
[0] [11ty]     at eval (eval at _compile (/Users/mandaputra/Code/me/mandaputtra/node_modules/nunjucks/src/environment.js:633:18), <anonymous>:62:59)
[0] [11ty]     at iterCallback (/Users/mandaputra/Code/me/mandaputtra/node_modules/nunjucks/src/runtime.js:293:11)
[0] [11ty]     at next (/Users/mandaputra/Code/me/mandaputtra/node_modules/nunjucks/src/lib.js:328:7)
[0] [11ty]     at eval (eval at _compile (/Users/mandaputra/Code/me/mandaputtra/node_modules/nunjucks/src/environment.js:633:18), <anonymous>:88:1)
[0] [11ty]     at /Users/mandaputra/Code/me/mandaputtra/node_modules/@11ty/eleventy-plugin-rss/.eleventy.js:28:7
```

Read it carefully don't just ignore the details. It says `TemplateContentPrematureUseError` and `Tried to use templateContent  too early` and the error happened on:

```bash
@11ty/eleventy/src/Template.js:708:23)
```

So your google query should be like these "11ty TemplateContentPrematureUseError", because the error happened in `@11ty/eleventy` module and it says `TemplateContentPrematureUseError` you could add "Tried to use templateContent" it would be more verbose.

Take your time, give it 5 minutes. Understand why it happened, if you must just open the `node_modules` and start hacking there (but if your libs uses typescript - you need to recompile it lol).

![and image quoted, the first generation of TTL was don by the old gray beard guys that really know what they are doing, the new generation was done by kids who are straight out of school who didn't know to ask what the change in packaging would do to inductive spikes](https://res.cloudinary.com/lrmn/image/upload/v1687077252/lrmn.dev/chips-ttl-problem_qsk2t2.jpg)

> This is why technology degrades. It takes a lot of energy to communicate from generation to generation, there are losses - Jonathan Blow

## Finding example

Admit it, most of the time you're just _layering brick type of programmer_. Other people code already do many heavy lifting programming to make your code run. Like when you want a 3D box, you can just write:

```js
const geometry = new THREE.BoxGeometry();
const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
const cube = new THREE.Mesh(geometry, material);
scene.add(cube);

camera.position.z = 5;
```

And baam!! You got a 3D Cube. To find example is somewhat challenging and fun. It was the same concept as reading code, but where do I find it?.

There are many places that I do look to find code example. Here are some list:

1. Their documentation
2. Test/example folder
3. The source code comments
4. Searching on the internet

Your library documentation sometimes good enough to find an example, but if you want some advanced stuff you must learn something to its details! There are no shortcuts. Read the docs carefully to find the true meaning of calling an API.

Most library had a `test` folder, it contains code to test the library. Learn to read the test, it sometimes describes most of all scenario on how to use the library. Here I clip it from dayjs source code:

```js
it("Format invalid date", () => {
  expect(dayjs("").format()).toBe(new Date("").toString());
  expect(dayjs("otherString").format()).toBe(
    new Date("otherString").toString()
  );
});

it("Format Month M MM MMM MMMM", () => {
  expect(dayjs().format("M")).toBe(moment().format("M"));
  expect(dayjs().format("MM")).toBe(moment().format("MM"));
  expect(dayjs().format("MMM")).toBe(moment().format("MMM"));
  expect(dayjs().format("MMMM")).toBe(moment().format("MMMM"));
});
```

Above code says that below are the library behaviour when formatting invalid date. It should be the same as how `Date` library behave too and below it, the test format month and the format should also be the same as other library format, this mean that dayjs wanted to be compatible with other libs' behaviour in here it's [moment.js](https://momentjs.com/)

A great programmer always placed a comment on top of their function, at least it explains on how to use it. This is a must if you're making a function that anybody else will use. To search, sometimes I just clone the source code and began to read it, searching by keyword.

Lest say you use this [query builder](https://github.dev/koskimas/kysely) but the docs are so minimal, you want to do database transaction, most query builder that you know have `transaction` helper, but you cannot find any example. What you do is open your editor, clone the project and find the keyword.

Lest say if you still cannot understand it, the most of you can do is searching for help, form internet or if you have friends ask them. But don't just take it for granted, again don't be ignorant, ask how they do it step by step.

That's it, if you want TLDR, it's just one "Don't be so ignorant". So many people are smarter than you because they're trying again and again. There are no magic tricks in learning programming, you just try again and again, build again and again, fix again and again until you got what you want.

---

Here a hot take for Indonesian college student, take it to the bottom of your heart before contacting me to help assist you with your final semester project.

I won't help you do your _skripsi_ (final semester project) if you don't want to open source it, go somewhere else. Your idea sucks, so many people already do what you do, you don't have a good selling point, and your code is not state-of-the-art problem-solving.

Why are you afraid that your friend copy your project, bullshit. If you wrote the code you should know better, don't be a coward - no wonder most government system sucks, it contains a lot of cowards.

Take your time, I don't want you in hurry - but I don't want you to not learn it either.
