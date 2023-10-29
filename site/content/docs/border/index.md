---
layout: docs
title: Border Side
description: "Utilities for controlling the border of an element, including border style and sides."
toc: true
group: borders
menu:
  docs:
    weight: 10
---

Use border utilities to add or remove an element’s borders. Choose from all borders or one at a time.

{{< class-api "border" >}}

## Basic usage

### Enable border

Add borders to an element.

{{< example class="bg-neutral-subtler bg-grid-slate-100" show_source="false">}}
<div class="d-flex justify-content-start justify-content-md-around text-center gap-4 overflow-x-auto">
  <div class="d-flex flex-column">
    <p class="fw-semibold text-muted fs-sm text-nowrap">border</p>
    <div class="border d-inline-block border-secondary mx-auto bd-w-16 bd-h-16"></div>
  </div>
  <div class="d-flex flex-column">
    <p class="fw-semibold text-muted fs-sm text-nowrap">border-top</p>
    <div class="border-top d-inline-block border-secondary mx-auto bd-w-16 bd-h-16"></div>
  </div>
  <div class="d-flex flex-column">
    <p class="fw-semibold text-muted fs-sm text-nowrap">border-end</p>
    <div class="border-end d-inline-block border-secondary mx-auto bd-w-16 bd-h-16"></div>
  </div>
  <div class="d-flex flex-column">
    <p class="fw-semibold text-muted fs-sm text-nowrap">border-bottom</p>
    <div class="border-bottom d-inline-block border-secondary mx-auto bd-w-16 bd-h-16"></div>
  </div>
  <div class="d-flex flex-column">
    <p class="fw-semibold text-muted fs-sm text-nowrap">border-start</p>
    <div class="border-start d-inline-block border-secondary mx-auto bd-w-16 bd-h-16"></div>
  </div>
</div>
{{</ example >}}

```html
<div class="border ..."></div>
<div class="border-top ..."></div>
<div class="border-end ..."></div>
<div class="border-bottom ..."></div>
<div class="border-start ..."></div>
```
### Remove sides

Use the `border-top-0`, `border-end-0` or `border-bottom-0` remove the specified one side border.

{{< example class="bg-neutral-subtler bg-grid-slate-100" show_source="false">}}
<div class="d-flex justify-content-start justify-content-md-around text-center gap-4 overflow-x-auto">
<div class="d-flex flex-column">
  <p class="fw-semibold text-muted fs-sm text-nowrap">border-top-0</p>
  <div class="border border-top-0 d-inline-block mx-auto border-secondary bd-w-16 bd-h-16"></div>
</div>
<div class="d-flex flex-column">
  <p class="fw-semibold text-muted fs-sm text-nowrap">border-end-0</p>
  <div class="border border-end-0 d-inline-block mx-auto border-secondary bd-w-16 bd-h-16"></div>
</div>
<div class="d-flex flex-column">
  <p class="fw-semibold text-muted fs-sm text-nowrap">border-bottom-0</p>
  <div class="border border-bottom-0 d-inline-block mx-auto border-secondary bd-w-16 bd-h-16"></div>
</div>
<div class="d-flex flex-column">
  <p class="fw-semibold text-muted fs-sm text-nowrap">border-start-0</p>
  <div class="border border-start-0 d-inline-block mx-auto border-secondary bd-w-16 bd-h-16"></div>
</div>
</div>
{{</ example >}}

```html
<div class="border border-top-0 ..."></div>
<div class="border border-end-0 ..."></div>
<div class="border border-bottom-0 ..."></div>
<div class="border border-start-0 ..."></div>
```

### Remove all border

Use the `border-0` to remove an element's border.

```html
<div class="border border-0 ..."></div>
```