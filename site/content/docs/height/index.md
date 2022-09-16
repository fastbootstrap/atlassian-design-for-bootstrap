---
layout: docs
title: Height
description: "Utilities for setting the height of an element."
toc: true
group: sizing
menu:
  docs:    
    weight: 20
---

## Quick reference 

{{< class-api "height" >}}

## Basic usage

### Fixed height

Use `h-{number}` to set an element to a fixed height.

{{< example class="text-center">}}
<div style="height:160px">
<div class="h-100 d-inline-block me-3 text-bg-primary p-1 px-2 rounded">h-100</div>
<div class="h-75 d-inline-block me-3 text-bg-primary p-1 px-2 rounded">h-75</div>
<div class="h-50 d-inline-block me-3 text-bg-primary p-1 px-2 rounded">h-50</div>
<div class="h-25 d-inline-block me-3 text-bg-primary p-1 px-2 rounded">h-25</div>
</div>
{{</ example >}}

### Auto height

Use `h-auto` to set an element to a auto height.

{{< example >}}
<div class="h-auto d-inline-block me-3 text-bg-primary p-1 px-2 rounded">h-auto</div>
{{</ example >}}

### Full viewport height

Use `vh-100` to make an element span the entire height of the viewport.

```html
<div class="vh-100"></div>
```

### Max height

Use `mh-100` to set the maximum height of an element that is full, depending on the parent element.

{{< example >}}
<div class="bg-purple-50" style="height:100px">
  <div class="bg-purple-300 text-white d-inline-block mh-100 p-2" style="height:200px">
    max-height 100%
  </div>
</div>
{{</ example >}}