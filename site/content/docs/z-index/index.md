---
layout: docs
title: Z-Index
description: "Use z-index utilities to set the z order layering of elements."
toc: true
group: layout
menu:
  docs:    
---

Utilities for controlling the stack order of an element.

## Quick reference

{{< class-api "z-index" >}}

## Basic usage 

### Setting the z-index

{{< example class="bg-neutral-subtler bg-grid-slate-100" show_source="false" >}}
<div class="d-flex justify-content-center">
  <div class="d-flex align-items-center justify-content-center border border-2 rounded-circle z-40 border-white text-bg-purple bd-w-16 bd-h-16">05</div>
  <div class="d-flex align-items-center justify-content-center border border-2 rounded-circle z-30 border-white text-bg-purple bd-w-16 bd-h-16 ms-n3">04</div>
  <div class="d-flex align-items-center justify-content-center border border-2 rounded-circle z-20 border-white text-bg-purple bd-w-16 bd-h-16 ms-n3">03</div>
  <div class="d-flex align-items-center justify-content-center border border-2 rounded-circle z-10 border-white text-bg-purple bd-w-16 bd-h-16 ms-n3">02</div>
  <div class="d-flex align-items-center justify-content-center border border-2 rounded-circle z-0 border-white text-bg-purple bd-w-16 bd-h-16 ms-n3">01</div>
</div>
{{</ example >}}

```html
<div class="z-40 ...">05</div>
<div class="z-30 ...">04</div>
<div class="z-20 ...">03</div>
<div class="z-10 ...">02</div>
<div class="z-0 ...">01</div>
```

## The `z-index` table of components

While not a part of Bootstrap's grid system, z-indexes play an important part in how our components overlay and interact with one another.

Several Bootstrap components utilize `z-index`, the CSS property that helps control layout by providing a third axis to arrange content. We utilize a default z-index scale in Bootstrap that's been designed to properly layer `navigation`, `tooltips` and `popovers`, `modals`, and more.

{{< bs-table "table" >}}
| Component | z-index |
| --- | --- |
| [Dropdown](/components/dropdown) | 1000 |
| [Offcanvas](/components/offcanvas) | 1045 |
| [Modal](/components/modal) | 1055 |
| [Popover](/components/modal) | 1070 |
| [Tooltip](/components/tooltip) | 1080 |
| [Toast](/components/toast) | 1090 |
{{</ bs-table >}}

These higher values start at an arbitrary number, high and specific enough to ideally avoid conflicts. We need a standard set of these across our layered components—tooltips, popovers, navbars, dropdowns, modals—so we can be reasonably consistent in the behaviors. There's no reason we couldn't have used `100`+ or `500`+.

We don't encourage customization of these individual values; should you change one, you likely need to change them all.

```scss
$zindex-dropdown:                   1000;
$zindex-sticky:                     1020;
$zindex-fixed:                      1030;
$zindex-offcanvas-backdrop:         1040;
$zindex-offcanvas:                  1045;
$zindex-modal-backdrop:             1050;
$zindex-modal:                      1055;
$zindex-popover:                    1070;
$zindex-tooltip:                    1080;
$zindex-toast:                      1090;
```

To handle overlapping borders within components (e.g., buttons and inputs in input groups), we use low single digit `z-index` values of `1`, `2`, and `3` for default, hover, and active states. On hover/focus/active, we bring a particular element to the forefront with a higher `z-index` value to show their border over the sibling elements.