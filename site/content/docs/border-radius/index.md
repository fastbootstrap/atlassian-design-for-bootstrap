---
layout: docs
title: Border Radius
description: "Utilities for controlling the border radius of an element."
toc: true
group: borders
menu:
  docs:    
---

Use the border radius utilities to easily round an element corners.

{{< class-api "border-radius" true >}}

## Basic usage

### Rounded corners

Use utilities like `.rounded-3`, `.rounded`, or `.rounded-circle` to apply different border radius sizes to an element.

{{< example class="bg-neutral-subtler bg-grid-slate-100" show_source="false" >}}
<div class="text-center d-flex align-items-center justify-content-around">
  <div class="d-flex flex-column align-items-center">
    <p class="fw-semibold text-muted fs-sm mb-2">rounded</p>
    <div class="rounded d-inline-block text-bg-purple bd-w-16 bd-h-16"></div>
  </div>
  <div class="d-flex flex-column align-items-center">
    <p class="fw-semibold text-muted fs-sm mb-2">rounded-3</p>
    <div class="rounded-3 d-inline-block text-bg-purple bd-w-16 bd-h-16"></div>
  </div>
  <div class="d-flex flex-column align-items-center">
    <p class="fw-semibold text-muted fs-sm mb-2">rounded-4</p>
    <div class="rounded-4 d-inline-block text-bg-purple bd-w-16 bd-h-16"></div>
  </div>

  <div class="d-flex flex-column align-items-center">
    <p class="fw-semibold text-muted fs-sm mb-2">rounded-circle</p>
    <div class="rounded-circle d-inline-block text-bg-purple bd-w-16 bd-h-16"></div>
  </div>
</div>
{{</ example >}}

```html
<div class="rounded ..."></div>
<div class="rounded-3 ..."></div>
<div class="rounded-4 ..."></div>
<div class="rounded-circle ..."></div>
```

### Pill buttons

Use the `rounded-pill` utility to create pill buttons.

{{< example class="bg-neutral-subtler bg-grid-slate-100 text-center" show_source="false" >}}
  <span class="fw-semibold text-muted fs-sm d-block mb-3">rounded-pill</span>
  <button class="btn btn-lg btn-primary fs-sm rounded-pill fw-semibold">Save changes</button>
{{</ example >}}

```html
<button class="rounded-pill ...">Save Changes</button>
```

### No rounding

Use `rounded-0` to remove an existing border radius from an element.

{{< example class="bg-neutral-subtler bg-grid-slate-100 text-center" show_source="false" >}}
<span class="fw-semibold text-muted fs-sm d-block mb-3">rounded-0</span>
<button class="btn btn-lg btn-primary fs-sm rounded-0 fw-semibold">Save changes</button>
{{</ example >}}

```html
<button class="rounded-0 ...">Save Changes</button>
```

### Rounding sides separately

Use `rounded-{top|end|bottom|start}{-size?}` to only round one side of an element. Sizes range from `0` to `5` by default.

{{< example class="bg-neutral-subtler bg-grid-slate-100 text-center" show_source="false" >}}
<div class="text-center d-flex justify-content-around">
  <div class="d-flex flex-column align-items-center">
    <p class="fw-semibold text-muted fs-sm mb-2">rounded-top-3</p>
    <div class="rounded-top-3 d-inline-block text-bg-purple bd-w-16 bd-h-16"></div>
  </div>
  <div class="d-flex flex-column align-items-center">
    <p class="fw-semibold text-muted fs-sm mb-2">rounded-end-3</p>
    <div class="rounded-end-3 d-inline-block text-bg-purple bd-w-16 bd-h-16"></div>
  </div>
  <div class="d-flex flex-column align-items-center">
    <p class="fw-semibold text-muted fs-sm mb-2">rounded-bottom-3</p>
    <div class="rounded-bottom-3 d-inline-block text-bg-purple bd-w-16 bd-h-16"></div>
  </div>

  <div class="d-flex flex-column align-items-center">
    <p class="fw-semibold text-muted fs-sm mb-2">rounded-start-3</p>
    <div class="rounded-start-3 d-inline-block text-bg-purple bd-w-16 bd-h-16"></div>
  </div>
</div>
{{</ example >}}

```html
<div class="rounded-top-3 ..."></div>
<div class="rounded-end-3 ..."></div>
<div class="rounded-bottom-3 ..."></div>
<div class="rounded-start-3 ..."></div>
```