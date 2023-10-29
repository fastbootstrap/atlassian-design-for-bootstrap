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

{{< example class="bg-grid-slate-100 fa-xs fw-semibold" show_source="false" >}}
<div class="bd-h-64 d-flex flex-row gap-5 flex-wrap align-items-end  justify-content-center">
  <div class="h-100 bd-w-8 text-bg-purple rounded d-flex flex-column justify-content-end pb-4">
    <span class="-rotate-90 lh-1">h-100</span>
  </div>
  <div class="h-75 bd-w-8 text-bg-purple rounded d-flex flex-column justify-content-end pb-4">
    <span class="-rotate-90 lh-1">h-75</span>
  </div>
  <div class="h-50 bd-w-8 text-bg-purple rounded d-flex flex-column justify-content-end pb-4">
    <span class="-rotate-90 lh-1">h-50</span>
  </div>
  <div class="h-25 bd-w-8 text-bg-purple rounded d-flex flex-column justify-content-end pb-4">
    <span class="-rotate-90 lh-1">h-25</span>
  </div>
</div>
{{</ example >}}

```html

```

### Full height

Use `h-100` to set an element’s height to 100% of its parent, as long as the parent has a defined height.

```html
<div class="h-48">
  <div class="h-100 ...">
    <!-- This element will have a height of `12rem` (h-48) -->
  </div>
</div>
```

### Vewport height

Use `vh-100` to make an element span the entire height of the viewport.

```html
<div class="vh-100"></div>
```

### Max height

Use `mh-100` to set the maximum height of an element that is full, depending on the parent element.

{{< example class="text-center" show_source="false" >}}
<div class="bg-purple-subtler" style="height:100px">
  <div class="text-bg-purple d-inline-block mh-100 p-2" style="height:200px">
    max-height 100%
  </div>
</div>
{{</ example >}}

```html
<div style="height:100px">
  <div style="height:200px">
    max-height 100%
  </div>
</div>
```