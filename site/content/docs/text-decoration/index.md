---
layout: docs
title: Text Decoration
description: "Utilities for controlling the decoration of text."
toc: true
group: typography
menu:
  docs:    
---

## Quick reference

{{< class-api "text-decoration" >}}

## Basic usage

### Setting the text decoration

Control how text is decorated with the `text-decoration-underline`, `text-decoration-none`, and `text-decoration-line-through` utilities.

{{< example class="bg-neutral-subtler bg-grid-slate-100" show_source="false" >}}
<div class="d-flex flex-column gap-4">
  <div>
    <span class="text-body-tertiary fs-sm fw-semibold mb-3 font-spacemono">underline</span>
    <p class="text-decoration-underline fs-5 fw-semibold">The quick brown fox jumps over the lazy dog.</p>
  </div>
  <div>
    <span class="text-body-tertiary fs-sm fw-semibold mb-3 font-spacemono">line-through</span>
    <p class="text-decoration-line-through fs-5 fw-semibold">The quick brown fox jumps over the lazy dog.</p>
  </div>
  <div>
    <span class="text-body-tertiary fs-sm fw-semibold mb-3 font-spacemono">overline</span>
    <p class="text-decoration-overline fs-5 fw-semibold">The quick brown fox jumps over the lazy dog.</p>
  </div>
  <div>
    <span class="text-body-tertiary fs-sm fw-semibold mb-3 font-spacemono">no-decoration</span>
    <p class="text-decoration-none fs-5 fw-semibold">The quick brown fox jumps over the lazy dog.</p>
  </div>
</div>
{{</ example >}}

```html
<p class="text-decoration-underline ...">The quick brown fox ...</p>
<p class="text-decoration-line-through ...">The quick brown fox ...</p>
<p class="text-decoration-overline ...">The quick brown fox ...</p>
<p class="text-decoration-none ...">The quick brown fox ...</p>
```

### Remove underline from link

Remove the link underline when mouse on `<a>` element using `text-decoration-none`.

{{< example >}}
<a href="#" class="text-decoration-none">This link has its text decoration removed</a>
{{</ example >}}