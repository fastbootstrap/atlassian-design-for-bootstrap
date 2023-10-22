---
layout: docs
title: Border Width
description: "Utilities for controlling the border width of an element."
toc: true
group: borders
menu:
  docs:
---

{{< class-api "border-width" >}}

## Basic usage

### All sides

Use the `border` with the `border-2`, `border-4`, or `border-5` utilities to set the border width for all sides of an element.

{{< example class="bg-neutral-subtler bg-grid-slate-100" show_source="false">}}
<div class="d-flex justify-content-around text-center">
<div class="d-flex flex-column">
  <p class="fw-semibold text-muted fs-sm mb-2">border</p>
  <div class="border d-inline-block border-secondary mx-auto" style="width: 64px;height: 64px"></div>
</div>
<div class="d-flex flex-column">
  <p class="fw-semibold text-muted fs-sm mb-2">border-2</p>
  <div class="border border-2 d-inline-block border-secondary mx-auto" style="width: 64px;height: 64px"></div>
</div>
<div class="d-flex flex-column">
  <p class="fw-semibold text-muted fs-sm mb-2">border-4</p>
  <div class="border border-4 d-inline-block border-secondary mx-auto" style="width: 64px;height: 64px"></div>
</div>

<div class="d-flex flex-column">
  <p class="fw-semibold text-muted fs-sm mb-2">border-5</p>
  <div class="border border-5 d-inline-block border-secondary mx-auto" style="width: 64px;height: 64px"></div>
</div>
</div>
{{</ example >}}

```html
<div class="border border-secondary ..."></div>
<div class="border border-2 border-secondary ..."></div>
<div class="border border-4 border-secondary ..."></div>
<div class="border border-5 border-secondary ..."></div>
```
### Individual sides

Use the `border-{side}` with `border-2`, `border-3` or `border-5` utilities to set the border width for one side of an element.

{{< example class="d-flex justify-content-around text-center bg-neutral-subtler bg-grid-slate-100" show_source="false">}}
<div class="d-flex flex-column">
  <p class="fw-semibold text-muted fs-sm mb-2">border-top</p>
  <div class="border-top border-4 d-inline-block bg-white border-secondary shadow mx-auto" style="width: 64px;height: 64px"></div>
</div>
<div class="d-flex flex-column">
  <p class="fw-semibold text-muted fs-sm mb-2">border-end</p>
  <div class="border-end border-4 d-inline-block bg-white border-secondary shadow mx-auto" style="width: 64px;height: 64px"></div>
</div>
<div class="d-flex flex-column">
  <p class="fw-semibold text-muted fs-sm mb-2">border-bottom</p>
  <div class="border-bottom border-4 d-inline-block bg-white border-secondary shadow mx-auto" style="width: 64px;height: 64px"></div>
</div>

<div class="d-flex flex-column">
  <p class="fw-semibold text-muted fs-sm mb-2">border-start</p>
  <div class="border-top border-4 d-inline-block bg-white border-secondary shadow mx-auto" style="width: 64px;height: 64px"></div>
</div>
{{</ example >}}

```html
<div class="border-top border-4 border-secondary ..."></div>
<div class="border-end border-4 border-secondary ..."></div>
<div class="border-bottom border-4 border-secondary ..."></div>
<div class="border-start border-4 border-secondary ..."></div>
```

### Horizontal and vertical sides

Use the `border-{side}` and `border-{width}` utilities to set the border width on two sides of an element at the same time.

{{< example class="d-flex justify-content-around text-center bg-neutral-subtler bg-grid-slate-100" show_source="false">}}
  <div class="border-top border-bottom border-4 d-inline-block bg-white border-secondary shadow mx-auto" style="width: 64px;height: 64px"></div>
  <div class="border-end border-start border-4 d-inline-block bg-white border-secondary shadow mx-auto" style="width: 64px;height: 64px"></div>
{{</ example >}}

```html
<div class="border-top border-bottom border-4 border-secondary ..."></div>
<div class="border-end border-start border-4 border-secondary ..."></div>
```