---
layout: docs
title: Quick Start
description: "Get started with FastBootstrap in no time."
toc: true
menu:
  get-started:   
    weight: 10
aliases:
  - /docs/quick-start
---

Here's a quick example to get you started through production-ready CSS and JavaScript via CDN that without the need for any build steps. 

## Quick start

First create a new `index.html` file in your project root. Include the `<meta name="viewport">` tag as well for [proper responsive behavior](https://developer.mozilla.org/en-US/docs/Web/HTML/Viewport_meta_tag) in mobile devices.

```html
<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Bootstrap demo</title>
  </head>
  <body>
    <h1>Hello, world!</h1>
  </body>
</html>
```

Next include FastBootstrap's CSS and JS. Place the `<link>` tag in the `<head>` for our CSS, and the `<script>` tag for our JavaScript before the closing `</body>`.

```html
<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Bootstrap demo</title>
    <link href="{{< param "cdn.css" >}}" rel="stylesheet" integrity="{{< param "cdn.css_hash" >}}" crossorigin="anonymous">
  </head>
  <body>
    <h1>Hello, world!</h1>
    <script src="{{< param "cdn.js" >}}" integrity="{{< param "cdn.js_hash" >}}" crossorigin="anonymous"></script>
  </body>
</html>
```

Now, open the page in your browser of choice to see your Bootstrapped page. 

## CDN 

As reference, here are our primary CDN links.

{{< bs-table >}}
| Description | URL |
| --- | --- |
| CSS | `{{< param "cdn.css" >}}` |
| JS | `{{< param "cdn.js" >}}` |
{{< /bs-table >}}

## Important globals 

Bootstrap employs a handful of important global styles and settings, all of which are almost exclusively geared towards the normalization of cross browser styles. Let’s dive in.

### HTML5 doctype 

Bootstrap requires the use of the HTML5 doctype. Without it, you’ll see some funky and incomplete styling.

```html
<!doctype html>
<html lang="en">
  ...
</html>
```

### Responsive meta tag 

Bootstrap is developed mobile first, a strategy in which we optimize code for mobile devices first and then scale up components as necessary using CSS media queries. To ensure proper rendering and touch zooming for all devices, add the responsive viewport meta tag to your `<head>`.

```html
<meta name="viewport" content="width=device-width, initial-scale=1">
```

### Reboot 

For improved cross-browser rendering, we use [Reboot]({{< docsref "reboot" >}}) to correct inconsistencies across browsers and devices while providing slightly more opinionated resets to common HTML elements.