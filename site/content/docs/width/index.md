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

{{< example class="d-grid gap-3 text-center" >}}
<div class="w-100 text-bg-primary p-1 rounded">w-100</div>
<div class="w-75 text-bg-primary p-1 rounded">w-75</div>
<div class="w-50 text-bg-primary p-1 rounded">w-50</div>
<div class="w-25 text-bg-primary p-1 rounded">w-25</div>
{{</ example >}}

### Auto width

Use `w-auto` to set width of an element to an auto.

{{< example >}}
<span class="w-auto text-bg-primary p-1 rounded">w-auto</span><br/>
<div class="w-auto text-bg-primary p-1 rounded mt-3">w-auto</div>
{{</ example >}}


### Full viewport width

Use `vw-100` to make an element span the entire width of the viewport.

```html
<div class="vw-100"></div>
```

### Max width

Use `mh-100` to set the maximum height of an element that is full, depending on the parent element.

{{< example >}}
<div class="bg-purple-50 p-3 col-8">
  <div class="bg-purple-300 text-white p-1 col-12 mw-100 h-100">
    max-width 100%
  </div>
</div>
{{</ example >}}
