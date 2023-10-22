---
layout: docs
title: Border Style
description: "Utilities for controlling the style of an element's borders."
toc: true
group: borders
menu:
  docs:
---

Use the border style utilities to change the style of an element's borders.

## Quick reference

{{< class-api "border-style" >}}

## Basic examples

### Setting the border style

Use `border-{style}` to control an element’s border style.

{{< example class="bg-neutral-subtler bg-grid-slate-100 text-center" show_source="false" >}}
<div class="d-flex justify-content-around text-center">
<div class="d-flex flex-column">
  <p class="fw-semibold text-muted fs-sm mb-2">border-solid</p>
  <div class="border border-solid border-primary border-2 d-inline-block mx-auto bd-w-16 bd-h-16"></div>
</div>
<div class="d-flex flex-column">
  <p class="fw-semibold text-muted fs-sm mb-2">border-dashed</p>
  <div class="border border-dashed border-2 border-primary d-inline-block mx-auto bd-w-16 bd-h-16"></div>
</div>
<div class="d-flex flex-column">
  <p class="fw-semibold text-muted fs-sm mb-2">border-dotted</p>
  <div class="border border-dotted border-2 border-primary d-inline-block mx-auto bd-w-16 bd-h-16"></div>
</div>
<div class="d-flex flex-column">
  <p class="fw-semibold text-muted fs-sm mb-2">border-double</p>
  <div class="border border-double border-4 border-primary d-inline-block mx-auto bd-w-16 bd-h-16"></div>
</div>
</div>
{{</ example >}}

```html
<div class="border border-solid border-2 border-primary ..."></div>
<div class="border border-dashed border-2 border-primary ..."></div>
<div class="border border-dotted border-2 border-primary ..."></div>
<div class="border border-double border-4 border-primary ..."></div>
```

### No style

Use `border-none` to remove an existing border style from an element.
This is most commonly used to remove a border style that was applied at a smaller breakpoint.

{{< example class="text-center bg-neutral-subtler bg-grid-slate-100" >}}
  <button class="btn btn-outline-primary border-none">Save changes</button>
{{</ example >}}