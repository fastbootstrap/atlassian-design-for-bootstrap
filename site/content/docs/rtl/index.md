---
layout: docs
title: RTL
description: "Support for right-to-left text in Bootstrap across our layout, components, and utilities."
toc: true
group: getting-started
menu:
  docs:   
---

In this learn how to enable support for right-to-left text in Bootstrap across our layout, components, and utilities.

## Enable RTL

There are two strict requirements for enabling RTL in Bootstrap-powered pages.

1. Set `dir="rtl"` on the `<html>` element.
2. Add an appropriate lang attribute, like `lang="ar"`, on the `<html>` element.

Here is an example of a starter HTML template that implements the above requirements:

```html
<!doctype html>
<html lang="ar" dir="rtl">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <!-- FastBootstrap CSS -->
    <link rel="stylesheet" href="css/fast-bootstrap.rtl.min.css" />
    <title>مرحبًا بالعالم!</title>
  </head>
  <body>
    <h1>مرحبًا بالعالم!</h1>
    <!-- FastBootstrap JS -->
    <script src="js/fast-bootstrap.bundle.min.js"></script>
  </body>
</html>
```

## Additional resources

- [RTLCSS](https://rtlcss.com/)
- [RTL Styling 101](https://rtlstyling.com/posts/rtl-styling)
- [RTL examples](https://getbootstrap.com/docs/5.2/examples/#rtl)