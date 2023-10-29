---
layout: docs
title: Width
description: "Utilities for setting the width of an element."
toc: true
group: sizing
menu:
  docs:    
    weight: 10
---

## Quick reference 

{{< class-api "width" >}}

## Basic usage

### Fixed width

Use `w-{number}` to set an element to a fixed width.

{{< example class="d-flex flex-column gap-4 bg-grid-slate-100 text-center fs-sm fw-semibold" show_source="false" >}}
<div class="w-100 px-4 py-2 lh-sm rounded text-bg-purple ">w-100</div>
<div class="w-75 px-4 py-2 lh-sm rounded text-bg-purple ">w-75</div>
<div class="w-50 px-4 py-2 lh-sm rounded text-bg-purple ">w-50</div>
<div class="w-25 px-4 py-2 lh-sm rounded text-bg-purple ">w-25</div>
{{</ example >}}

```html
<div class="w-100">w-100</div>
<div class="w-75">w-75</div>
<div class="w-50">w-50</div>
<div class="w-25">w-25</div>
```

### Auto width

Use `w-auto` to set width of an element to an auto.

{{< example class="d-flex flex-column justify-content-start gap-4 bg-grid-slate-100 text-center fs-sm fw-semibold" show_source="false" >}}
<span class="w-auto align-self-start text-bg-purple px-4 py-2 lh-sm  rounded">w-auto</span>
<div class="w-auto text-bg-purple px-4 py-2 lh-sm rounded">w-auto</div>
{{</ example >}}

```html
<span class="w-auto ...">w-auto</span>
<div class="w-auto ...">w-auto</div>
```
### Full viewport width

Use `vw-100` to make an element span the entire width of the viewport.

```html
<div class="vw-100 ..."></div>
```

### Set mx width

Use `mh-100` to set the maximum height of an element that is full, depending on the parent element.

```html
<div class="mh-100 ..."></div>
```
