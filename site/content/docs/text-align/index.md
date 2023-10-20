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

{{< example class="bg-neutral-subtler" show_source="false">}}
  <div class="p-5 mx-auto max-w-xl bg-body shadow-lg lh-md">
    <p class="text-start">
      So I started to walk into the water. I won't lie to you boys, I was terrified. But I pressed on, and as I made my way past the breakers a strange calm came over me. I don't know if it was divine intervention or the
      kinship of all living things but I tell you Jerry at that moment, I <em>was</em> a marine biologist.
    </p>
  </div>
{{</ example >}}
```html
<p class="text-start ...">So I started to walk into the water...</p>
```

{{< example class="bg-neutral-subtler" show_source="false">}}
  <div class="p-5 mx-auto max-w-xl bg-body shadow-lg lh-md">
    <p class="text-end">
      So I started to walk into the water. I won't lie to you boys, I was terrified. But I pressed on, and as I made my way past the breakers a strange calm came over me. I don't know if it was divine intervention or the
      kinship of all living things but I tell you Jerry at that moment, I <em>was</em> a marine biologist.
    </p>
  </div>
{{</ example >}}

```html
<p class="text-end ...">So I started to walk into the water...</p>
```

{{< example class="bg-neutral-subtler" show_source="false">}}
  <div class="p-5 mx-auto max-w-xl bg-body shadow-lg lh-md">
    <p class="text-center">
      So I started to walk into the water. I won't lie to you boys, I was terrified. But I pressed on, and as I made my way past the breakers a strange calm came over me. I don't know if it was divine intervention or the
      kinship of all living things but I tell you Jerry at that moment, I <em>was</em> a marine biologist.
    </p>
  </div>
{{</ example >}}

```html
<p class="text-center ...">So I started to walk into the water...</p>
```

{{< example class="bg-neutral-subtler" show_source="false">}}
  <div class="p-5 mx-auto max-w-xl bg-body shadow-lg lh-md">
    <p class="text-justify">
      So I started to walk into the water. I won't lie to you boys, I was terrified. But I pressed on, and as I made my way past the breakers a strange calm came over me. I don't know if it was divine intervention or the
      kinship of all living things but I tell you Jerry at that moment, I <em>was</em> a marine biologist.
    </p>
  </div>
{{</ example >}}

```html
<p class="text-justify ...">So I started to walk into the water...</p>
```

## Breakpoints 

For start, end, and center alignment, responsive classes are available that use the same viewport width [breakpoints]({{< docsref "breakpoints" >}}) as the grid system. The classes are named using the format: `.text-{breakpoint}-{side}`. For example, use the `text-md-center` to apply the text are centered at only medium screen sizes and above.


{{< example class="bg-neutral-subtler" show_source="false">}}
  <div class="p-5 mx-auto max-w-xl bg-body shadow-lg lh-md">
    <p class="text-left text-md-center">
      So I started to walk into the water. I won't lie to you boys, I was terrified. But I pressed on, and as I made my way past the breakers a strange calm came over me. I don't know if it was divine intervention or the
      kinship of all living things but I tell you Jerry at that moment, I <em>was</em> a marine biologist.
    </p>
  </div>
{{</ example >}}

```html
<p class="text-start text-md-center">
  So I started to walk into the water ...
</p>
```