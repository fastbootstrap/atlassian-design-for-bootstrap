---
layout: docs
title: Text Align
description: "Utilities for controlling the alignment of text."
toc: true
group: typography
menu:
  docs:    
---

Easily realign text to components with the text alignment utilities.

## Quick reference

{{< class-api "text-align" >}}

## Basic usage

### Setting the text alignment

Control the text alignment of an element using the `text-start`, `text-center`, `text-end`, and `text-justify` utilities.

<div class="bd-example bg-light">
  <div class="p-4 mx-auto bg-white shadow" style="max-width:576px;">
    <p class="text-start">
      So I started to walk into the water. I won't lie to you boys, I was terrified. But I pressed on, and as I made my way past the breakers a strange calm came over me. I don't know if it was divine intervention or the
      kinship of all living things but I tell you Jerry at that moment, I <em>was</em> a marine biologist.
    </p>
  </div>
</div>

```html
<p class="text-start ...">So I started to walk into the water...</p>
```

<div class="bd-example bg-light">
  <div class="p-4 mx-auto bg-white shadow" style="max-width:576px;">
    <p class="text-end">
      So I started to walk into the water. I won't lie to you boys, I was terrified. But I pressed on, and as I made my way past the breakers a strange calm came over me. I don't know if it was divine intervention or the
      kinship of all living things but I tell you Jerry at that moment, I <em>was</em> a marine biologist.
    </p>
  </div>
</div>

```html
<p class="text-end ...">So I started to walk into the water...</p>
```

<div class="bd-example bg-light">
  <div class="p-4 mx-auto bg-white shadow" style="max-width:576px;">
    <p class="text-center">
      So I started to walk into the water. I won't lie to you boys, I was terrified. But I pressed on, and as I made my way past the breakers a strange calm came over me. I don't know if it was divine intervention or the
      kinship of all living things but I tell you Jerry at that moment, I <em>was</em> a marine biologist.
    </p>
  </div>
</div>

```html
<p class="text-center ...">So I started to walk into the water...</p>
```

<div class="bd-example bg-light">
  <div class="p-4 mx-auto bg-white shadow" style="max-width:576px;">
    <p class="text-justify">
      So I started to walk into the water. I won't lie to you boys, I was terrified. But I pressed on, and as I made my way past the breakers a strange calm came over me. I don't know if it was divine intervention or the
      kinship of all living things but I tell you Jerry at that moment, I <em>was</em> a marine biologist.
    </p>
  </div>
</div>

```html
<p class="text-justify ...">So I started to walk into the water...</p>
```

## Breakpoints 

For start, end, and center alignment, responsive classes are available that use the same viewport width [breakpoints]({{< docsref "breakpoints" >}}) as the grid system. The classes are named using the format: `.text-{breakpoint}-{side}`. For example, use the `text-md-center` to apply the text are centered at only medium screen sizes and above.


<div class="bd-example bg-light">
  <div class="p-4 mx-auto bg-white shadow" style="max-width:576px;">
    <p class="text-left text-md-center">
      So I started to walk into the water. I won't lie to you boys, I was terrified. But I pressed on, and as I made my way past the breakers a strange calm came over me. I don't know if it was divine intervention or the
      kinship of all living things but I tell you Jerry at that moment, I <em>was</em> a marine biologist.
    </p>
  </div>
</div>

```html
<p class="text-start text-md-center">
  So I started to walk into the water ...
</p>
```