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

## Basic usage

### Changing the opacity

{{< example class="bg-neutral-subtler bg-grid-slate-100" show_source="false" >}}
<div class="d-flex justify-content-around">
  <div class="d-flex flex-column gap-2 align-items-center">
    <span class="text-body-tertiary fs-sm fw-semibold">border-opacity-100</span>
    <div class="border-opacity-100 border border-4 border-secondary d-inline-block bd-w-16 bd-h-16"></div>
  </div>
  <div class="d-flex flex-column gap-2 align-items-center">
    <span class="text-body-tertiary fs-sm fw-semibold">border-opacity-75</span>
    <div class="border-opacity-75 border border-4 border-secondary d-inline-block bd-w-16 bd-h-16"></div>
  </div>
  <div class="d-flex flex-column gap-2 align-items-center">
    <span class="text-body-tertiary fs-sm fw-semibold">border-opacity-50</span>
    <div class="border-opacity-50 border border-4 border-secondary d-inline-block bd-w-16 bd-h-16"></div>
  </div>
  <div class="d-flex flex-column gap-2 align-items-center">
    <span class="text-body-tertiary fs-sm fw-semibold">border-opacity-25</span>
    <div class="border-opacity-25 border border-4 border-secondary d-inline-block bd-w-16 bd-h-16"></div>
  </div>
</div>
{{</ example >}}

```html
<div class="border-opacity-100 border border-secondary..."></div>
<div class="border-opacity-75 border border-secondary..."></div>
<div class="border-opacity-50 border border-secondary..."></div>
<div class="border-opacity-25 border border-secondary..."></div>
```