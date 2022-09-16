---
layout: docs
title: Line Height
description: "Utilities for controlling the line height of an element's text."
toc: true
group: typography
menu:
  docs:    
---

Change the line height using the `.lh-*` utilities.

## Quick reference

{{< class-api "line-height" >}}

## Basic usage

## Relative line-heights

Use the `lh-{size}` utilities to give an element a relative line-height based on its current font-size.

<div class="bd-example">
  <span class="text-muted">lh-1</span>
  <p class="lh-1">
    So I started to walk into the water. I won't lie to you boys, I was terrified. But I pressed on, and as I made my way past the breakers a strange calm came over me. I don't know if it was divine intervention or the
    kinship of all living things but I tell you Jerry at that moment, I was a marine biologist.
  </p>
  <span class="text-muted">lh-base</span>
  <p class="lh-base">
    So I started to walk into the water. I won't lie to you boys, I was terrified. But I pressed on, and as I made my way past the breakers a strange calm came over me. I don't know if it was divine intervention or the
    kinship of all living things but I tell you Jerry at that moment, I was a marine biologist.
  </p>
  <span class="text-muted">lh-lg</span>
  <p class="lh-lg">
    So I started to walk into the water. I won't lie to you boys, I was terrified. But I pressed on, and as I made my way past the breakers a strange calm came over me. I don't know if it was divine intervention or the
    kinship of all living things but I tell you Jerry at that moment, I was a marine biologist.
  </p>
</div>

```html
<p class="lh-1 ...">So I started to walk into the water...</p>
<p class="lh-base ...">So I started to walk into the water...</p>
<p class="lh-lg ...">So I started to walk into the water...</p>
```