---
layout: docs
title: Font Weight
description: "Utilities for controlling the font weight of an element."
toc: true
group: typography
menu:
  docs:    
---

Quickly change the `font-weight` of text with the font weight utilities.

## Quick reference

{{< class-api "font-weight" >}}

## Basic usage

### Setting the font weight

Control the font weight of an element using the `fw-{weight}` utilities.

{{< example class="bg-grid-slate-100" show_source="false" >}}
<div class="d-flex flex-column gap-4">
  <div>
    <span class="text-muted mb-3">fw-light</span>
    <p class="fw-light fs-5">The quick brown fox jumps over the lazy dog.</p>
  </div>
  <div>
    <span class="text-muted mb-3">fw-normal</span>
    <p class="fw-normal fs-5">The quick brown fox jumps over the lazy dog.</p>
  </div>
  <div>
    <span class="text-muted mb-3">fw-medium</span>
    <p class="fw-medium fs-5">The quick brown fox jumps over the lazy dog.</p>
  </div>
  <div>
    <span class="text-muted mb-3">fw-semibold</span>
    <p class="fw-semibold fs-5">The quick brown fox jumps over the lazy dog.</p>
  </div>
  <div>
    <span class="text-muted mb-3">fw-bold</span>
    <p class="fw-bold fs-5">The quick brown fox jumps over the lazy dog.</p>
  </div>
  <div>
    <span class="text-muted mb-3">fw-bolder</span>
    <p class="fw-bolder fs-5">The quick brown fox jumps over the lazy dog.</p>
  </div>
</div>
{{</ example >}}

```html
<p class="fw-light ...">The quick brown fox ...</p>
<p class="fw-normal ...">The quick brown fox ...</p>
<p class="fw-semibold ...">The quick brown fox ...</p>
<p class="fw-bold ...">The quick brown fox ...</p>
<p class="fw-bolder ...">The quick brown fox ...</p>
```