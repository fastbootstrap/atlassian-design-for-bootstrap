---
layout: docs
title: Opacity
description: "Control the opacity of elements."
toc: true
group: effects
menu:
  docs:    
---

The `opacity` property sets the opacity level for an element. The opacity level describes the transparency level, where `1` is not transparent at all, `.5` is 50% visible, and `0` is completely transparent.

## Quick reference 

{{< class-api "opacity" >}}

## Basic usage

Set the `opacity` of an element using `.opacity-{value}` utilities.

<div class="bd-example d-grid gap-3">
  <div class="opacity-100 p-3 text-bg-primary rounded">100%</div>
  <div class="opacity-75 p-3 text-bg-primary rounded">75%</div>
  <div class="opacity-50 p-3 text-bg-primary rounded">50%</div>
  <div class="opacity-25 p-3 text-bg-primary rounded">25%</div>
</div>

```html
<div class="opacity-100">...</div>
<div class="opacity-75">...</div>
<div class="opacity-50">...</div>
<div class="opacity-25">...</div>
```