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

<div class="bd-example text-center d-flex justify-content-around">
  <div class="d-flex flex-column">
    <p class="fw-semibold text-muted fs-sm mb-2">rounded</p>
    <div class="rounded d-inline-block bg-secondary mx-auto" style="width: 64px;height: 64px"></div>
  </div>
  <div class="d-flex flex-column">
    <p class="fw-semibold text-muted fs-sm mb-2">rounded-3</p>
    <div class="rounded-3 d-inline-block bg-secondary mx-auto" style="width: 64px;height: 64px"></div>
  </div>
  <div class="d-flex flex-column">
    <p class="fw-semibold text-muted fs-sm mb-2">rounded-5</p>
    <div class="rounded-5 d-inline-block bg-secondary mx-auto" style="width: 64px;height: 64px"></div>
  </div>

  <div class="d-flex flex-column">
    <p class="fw-semibold text-muted fs-sm mb-2">rounded-circle</p>
    <div class="rounded-circle d-inline-block bg-secondary mx-auto" style="width: 64px;height: 64px"></div>
  </div>
</div>

```html
<div class="rounded ..."></div>
<div class="rounded-3 ..."></div>
<div class="rounded-5 ..."></div>
<div class="rounded-circle ..."></div>
```

### Pill buttons

Use the `rounded-pill` utility to create pill buttons.

<div class="bd-example text-center">
  <button class="btn btn-lg btn-primary fs-sm rounded-pill fw-semibold">Save changes</button>
</div>

```html
<button class="rounded-pill ...">Save Changes</button>
```

### No rounding

Use `rounded-0` to remove an existing border radius from an element.

<div class="bd-example text-center">
  <button class="btn btn-lg btn-primary fs-sm rounded-0 fw-semibold">Save changes</button>
</div>

```html
<button class="rounded-0 ...">Save Changes</button>
```

### Rounding sides separately

Use `rounded-{top|end|bottom|start}{-size?}` to only round one side of an element. Sizes range from `0` to `5` by default.

<div class="bd-example text-center d-flex justify-content-around">
  <div class="d-flex flex-column">
    <p class="fw-semibold text-muted fs-sm mb-2">rounded-top-3</p>
    <div class="rounded-top-3 d-inline-block bg-primary mx-auto" style="width: 64px;height: 64px"></div>
  </div>
  <div class="d-flex flex-column">
    <p class="fw-semibold text-muted fs-sm mb-2">rounded-end-3</p>
    <div class="rounded-end-3 d-inline-block bg-primary mx-auto" style="width: 64px;height: 64px"></div>
  </div>
  <div class="d-flex flex-column">
    <p class="fw-semibold text-muted fs-sm mb-2">rounded-bottom-3</p>
    <div class="rounded-bottom-3 d-inline-block bg-primary mx-auto" style="width: 64px;height: 64px"></div>
  </div>

  <div class="d-flex flex-column">
    <p class="fw-semibold text-muted fs-sm mb-2">rounded-start-3</p>
    <div class="rounded-start-3 d-inline-block bg-primary mx-auto" style="width: 64px;height: 64px"></div>
  </div>
</div>

```html
<div class="rounded-top-3 ..."></div>
<div class="rounded-end-3 ..."></div>
<div class="rounded-bottom-3 ..."></div>
<div class="rounded-start-3 ..."></div>
```