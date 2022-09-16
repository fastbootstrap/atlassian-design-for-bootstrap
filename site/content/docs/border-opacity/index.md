---
layout: docs
title: Border Opacity
description: "Utilities for controlling the opacity of an element's border color."
toc: true
group: borders
menu:
  docs:
---

Use the border opacity utilities to change the opacity of an element's border color.

## Quick reference

{{< class-api "border-opacity" >}}

## Basic examples


### Changing the opacity

Use the `border-opacity-75`, `border-opacity-50`, or `border-opacity-25` to change the opacity of an element’s border color.

<div class="bd-example d-flex justify-content-around">
  <div class="border border-4 border-secondary border-opacity-100 d-inline-block" style="width:64px;height:64px"></div>
  <div class="border border-4 border-secondary border-opacity-75 d-inline-block" style="width:64px;height:64px"></div>
  <div class="border border-4 border-secondary border-opacity-50 d-inline-block" style="width:64px;height:64px"></div>
</div>

```html
  <div class="border border-4 border-secondary border-opacity-100 ..."></div>
  <div class="border border-4 border-secondary border-opacity-75 ..."></div>
  <div class="border border-4 border-secondary border-opacity-50 ..."></div>
```

### Customize the opacity

To change that opacity, override `--bs-border-opacity` via custom styles or inline styles.

<div class="bd-example d-flex justify-content-around">
  <div class="border border-4 border-secondary d-inline-block" style="--bs-border-opacity:1;width:64px;height:64px"></div>
  <div class="border border-4 border-secondary d-inline-block" style="--bs-border-opacity:0.65;width:64px;height:64px"></div>
  <div class="border border-4 border-secondary d-inline-block" style="--bs-border-opacity:0.45;width:64px;height:64px"></div>
</div>

```html
  <div class="border border-4 border-secondary ..." style="--bs-border-opacity: 1"></div>
  <div class="border border-4 border-secondary ..." style="--bs-border-opacity: 0.65"></div>
  <div class="border border-4 border-secondary ..." style="--bs-border-opacity: 0.45"></div>
```
