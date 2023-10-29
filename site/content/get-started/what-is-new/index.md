---
layout: docs
title: What's New
seo_title: FastBootstrap Theme New Features
description: "Overview of our new Bootstrap theme, what's different from Bootstrap."
toc: true
menu:
  get-started:    
    weight: 30
---

FastBootstrap as Bootstram theme project, crafted designed new beautifully UI components and element styles for Bootstrap based on Atlassian design system language, thanks to [Atlassian design](https://atlassian.design/). 

## What's different from Bootstrap

FastBootstrap is completely built on top of Bootstrap, You can use it as a theme to replace Bootstrap, or as a standard UI component library, which is 100% compatible with Bootstrap.

### Versions & Bootstrap

{{< bs-table "table api-class-table" >}}
| FastBootstrap | Bootstrap version |
| --- | --- |
| `2.0` | 5.3 |
| `1.1` | 5.2 |
{{</ bs-table >}}

[Download](https://github.com/fastbootstrap/atlassian-design-for-bootstrap/releases)

### CSS files

FastBootstrap includes compiled CSS including all components and utility CSS with some of options enabled by default.

**Compiled options**:

{{< bs-table "table api-class-table" >}}
| Options | Bootstrap | FastBootstrap |
| --- | --- | --- |
| `$enable-shadows` | Enabled | - |
| `$enable-negative-margins` | - | Enabled |
{{</ bs-table >}}

**CSS files**

{{< bs-table "table api-class-table" >}}
| CSS files | Layout | Content | Components | Utilities |
| --- | --- | --- | --- | --- |
| `fastbootstrap.css` <br/> `fastbootstrap.min.css` | Included | Included | Included | Included |
{{</ bs-table >}}

### JS files

FastBootstrap includes compiled JavaScript of all components and third-party JS library. **This is not required, you can still continue using Bootstrap JS files likes `bootstrap.bundle.min.js`**.

{{< bs-table "table api-class-table" >}}
| JS Files | Popper |
| --- | --- |
| `fastbootstrap.js`<br> `fastbootstrap.min.js` | Included |
{{< /bs-table >}}

## How to migrate from Bootstrap

It's very simple. You just use the `fastbootstrap.min.css` file instead of `bootstrap.min.css` on your website. 


