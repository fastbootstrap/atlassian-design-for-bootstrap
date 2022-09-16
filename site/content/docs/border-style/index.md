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


<div class="bd-example bg-light d-flex flex-column flex-md-row justify-content-around text-center">
<div class="d-flex flex-column">
  <p class="fw-semibold text-muted fs-sm mb-2">border-solid</p>
  <div class="border border-solid border-primary border-2 d-inline-block mx-auto bg-white" style="width: 64px;height: 64px"></div>
</div>
<div class="d-flex flex-column">
  <p class="fw-semibold text-muted fs-sm mb-2">border-dashed</p>
  <div class="border border-dashed border-2 border-primary d-inline-block mx-auto bg-white" style="width: 64px;height: 64px"></div>
</div>
<div class="d-flex flex-column">
  <p class="fw-semibold text-muted fs-sm mb-2">border-dotted</p>
  <div class="border border-dotted border-2 border-primary d-inline-block mx-auto bg-white" style="width: 64px;height: 64px"></div>
</div>
<div class="d-flex flex-column">
  <p class="fw-semibold text-muted fs-sm mb-2">border-double</p>
  <div class="border border-double border-4 border-primary d-inline-block mx-auto bg-white" style="width: 64px;height: 64px"></div>
</div>
</div>

```html
<div class="border border-solid border-2 border-primary ..."></div>
<div class="border border-dashed border-2 border-primary ..."></div>
<div class="border border-dotted border-2 border-primary ..."></div>
<div class="border border-double border-4 border-primary ..."></div>
```

### No style

Use `border-none` to remove an existing border style from an element.

This is most commonly used to remove a border style that was applied at a smaller breakpoint.

<div class="bd-example text-center">
  <button class="btn btn-primary fw-semibold border border-none">Save changes</button>
</div>