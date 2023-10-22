---
layout: docs
title: Border
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

<div class="bd-example d-flex flex-column flex-md-row justify-content-around text-center">
<div class="d-flex flex-column">
  <p class="fw-semibold text-muted fs-sm mb-2">border</p>
  <div class="border d-inline-block mx-auto bg-light" style="width: 64px;height: 64px"></div>
</div>
<div class="d-flex flex-column">
  <p class="fw-semibold text-muted fs-sm mb-2">border-top</p>
  <div class="border-top d-inline-block mx-auto bg-light" style="width: 64px;height: 64px"></div>
</div>
<div class="d-flex flex-column">
  <p class="fw-semibold text-muted fs-sm mb-2">border-end</p>
  <div class="border-end d-inline-block mx-auto  bg-light" style="width: 64px;height: 64px"></div>
</div>
<div class="d-flex flex-column">
  <p class="fw-semibold text-muted fs-sm mb-2">border-bottom</p>
  <div class="border-bottom d-inline-block mx-auto bg-light" style="width: 64px;height: 64px"></div>
</div>
<div class="d-flex flex-column">
  <p class="fw-semibold text-muted fs-sm mb-2">border-start</p>
  <div class="border-start d-inline-block mx-auto bg-light" style="width: 64px;height: 64px"></div>
</div>
</div>

```html
<div class="border ..."></div>
<div class="border-top ..."></div>
<div class="border-end ..."></div>
<div class="border-bottom ..."></div>
<div class="border-start ..."></div>
```
### Remove sides

Use the `border-top-0`, `border-end-0` or `border-bottom-0` remove the specified one side border.

<div class="bd-example d-flex flex-column flex-md-row justify-content-around text-center">
<div class="d-flex flex-column">
  <p class="fw-semibold text-muted fs-sm mb-2">border-top-0</p>
  <div class="border border-top-0 d-inline-block mx-auto bg-light" style="width: 64px;height: 64px"></div>
</div>
<div class="d-flex flex-column">
  <p class="fw-semibold text-muted fs-sm mb-2">border-end-0</p>
  <div class="border border-end-0 d-inline-block mx-auto  bg-light" style="width: 64px;height: 64px"></div>
</div>
<div class="d-flex flex-column">
  <p class="fw-semibold text-muted fs-sm mb-2">border-bottom-0</p>
  <div class="border border-bottom-0 d-inline-block mx-auto bg-light" style="width: 64px;height: 64px"></div>
</div>
<div class="d-flex flex-column">
  <p class="fw-semibold text-muted fs-sm mb-2">border-start-0</p>
  <div class="border border-start-0 d-inline-block mx-auto bg-light" style="width: 64px;height: 64px"></div>
</div>
</div>

```html
<div class="border border-top-0 ..."></div>
<div class="border border-end-0 ..."></div>
<div class="border border-bottom-0 ..."></div>
<div class="border border-start-0 ..."></div>
```

### Remove all border

Use the `border-0` to remove an element's border.

<div class="bd-example text-center">
<div class="d-flex flex-column">
  <p class="fw-semibold text-muted fs-sm mb-2">border-0</p>
  <div class="border border-0 d-inline-block mx-auto bg-purple-50" style="width: 64px;height: 64px"></div>
</div>
</div>

```html
<div class="border border-0 ..."></div>
```