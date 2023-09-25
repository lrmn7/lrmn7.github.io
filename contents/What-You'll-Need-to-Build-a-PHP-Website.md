---
title: What You'll Need to Build a PHP Website
description: >-
  What You'll Need to Build a PHP Website
excerpt: >-
  What You'll Need to Build a PHP Website
datetime: 2019-03-25T12:10:07.322Z
slug: what-you-need-to-build-a-PHP-website
featured: true
category: Article
tags:
  - code
  - idea
  - Tips & Tricks
  - PHP
author: L RMN
coverImage: >-
  https://res.cloudinary.com/lrmn/image/upload/v1685640428/PHP_wghpql.png
coverImageAlt: What You'll Need to Build a PHP Website.
coverImageWidth: "1200"
coverImageHeight: "700"
ogImage: "https://res.cloudinary.com/lrmn/image/upload/v1685640428/PHP_wghpql.png"
ogImageAlt: What You'll Need to Build a PHP Website
type: article
language: English
_template: blog_article
---

## Idea

Basic idea about HTML and PHP. CSS for styling the page. JS is not necessary to build simple website.

## Server

There are plenty of free hosting providers that offers free PHP hosting with a free subdomain or custom domain. Choose one of them and continue building php website.

## Why PHP not static HTML

Threre are many CMS that can basic publishing or specefic application but that takes a huge resources as that includes many unused functionality. To do the similar task using less resources which mostly free you have to write your own code. In html you can't change every page at once. You have to manually change every page one by one. Thats why PHP you just make a common header and footer file which will be included in every page. Moreover you can make function to do similar task again and again. PHP generate html on each request in server. You can implement API in PHP. You can build everything you imagine but thats is not our objective. This approach allows for greater flexibility and easier maintenance of the website. Additionally, PHP is a server-side scripting language that can be used to dynamically generate web content based on various inputs, further enhancing the dynamic nature of the website.

## Write Codes

You can put files inside folder as you like. But Heres we put each file in root drectory.

**File name : header.php**

```header.php
<!doctype html>
<html>
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title><?php echo $title; ?> - Your Site</title>
    <link rel="icon" type="image/x-icon" href="<?php echo $url; ?>/favicon.png">
    <meta name="description" content="<?php echo $description; ?>">
    <meta name="keywords" content="<?php echo $keywords; ?>">
    <meta name="author" content="your name">
    <link rel="stylesheet" href="<?php echo $url; ?>/style.css" />
    </head>
<body>
<nav>
     <a href="/">Home</a>
     <a href="/about.php">About</a>
</nav>
```

**File name : footer.php**

```footer.php
    <footer>© 2023-<?php echo date("y");?> <a href="<?php echo $url; ?>/" >Your Site</a>. Some Rights Reserved.</footer>
    <script src="<?php echo $url; ?>/script.js"></script>
</body>
</html>
```

**File name : index.php**

```index.php
<?php
$title = 'Home';
$description='your description goes here';
$keywords='php,home';
include_once './header.php';?>

Your home page content goes here

<?php include './footer.php';?>
```

**File name : about.php**

```about.php
<?php
$title = 'About';
$description='your description goes here';
$keywords='php,about';
include_once './header.php';?>

Your about page content goes here

<?php include './footer.php';?>
```

## Simple Website Github Repo

> Here's a very simple and minimal website built with PHP [github repository ↗](https://github.com/lrmn7). just download zip file. Upload to htdoc folder and unzip it. Thunderbirds are go!
