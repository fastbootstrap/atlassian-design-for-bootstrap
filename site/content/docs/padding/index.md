---
layout: docs
title: Padding
description: "Utilities for controlling an element's padding."
toc: true
group: spacing
menu:
  docs:
---

Assign responsive-friendly `padding` values to an element or a subset of its sides with shorthand classes. Includes support for individual properties, all properties, and vertical and horizontal properties. Classes are built from a default Sass map ranging from `.25rem` to `9rem`.

{{< callout >}}
**Using the CSS Grid layout module?** Consider using [the gap utility]({{< docsref "gap" >}}) instead.
{{< /callout >}}

## Quick reference

{{< class-api "padding" "true" >}}

## Overview

The padding utilities that apply to all breakpoints, from `xs` to `xxl`, have no breakpoint abbreviation in them. This is because those classes are applied from `min-width: 0` and up, and thus are not bound by a media query. The remaining breakpoints, however, do include a breakpoint abbreviation.

The classes are named using the format `{property}{sides}-{size}` for `xs` and `{property}{sides}-{breakpoint}-{size}` for `sm`, `md`, `lg`, `xl`, and `xxl`.

Where _property_ is `p` - for classes that set `padding`:

Where _sides_ is one of:

- `t` - for classes that set `padding-top`
- `b` - for classes that set `padding-bottom`
- `s` - (start) for classes that set `padding-left` in LTR,`padding-right` in RTL
- `e` - (end) for classes that set `padding-right` in LTR, or `padding-left` in RTL
- `x` - for classes that set both `*-left` and `*-right`
- `y` - for classes that set both `*-top` and `*-bottom`
- blank - for classes that set a `padding` on all 4 sides of the element

Where _size_ is one of:

- `0` - for classes that eliminate the `padding` by setting it to `0`
- `1` - (by default) for classes that set the `padding` to `$spacer * .25`
- `2` - (by default) for classes that set the `padding` to `$spacer * .5`
- `3` - (by default) for classes that set the `padding` to `$spacer`
- `4` - (by default) for classes that set the `padding` to `$spacer * 1.5`
- `5` - (by default) for classes that set the `padding` to `$spacer * 3`
- `6` - (by extended) for classes that set the `padding` to `$spacer * 4`
- `7` - (by extended) for classes that set the `padding` to `$spacer * 5`
- `8` - (by extended) for classes that set the `padding` to `$spacer * 6`
- `9` - (by extended) for classes that set the `padding` to `$spacer * 7`
- `10` - (by extended) for classes that set the `padding` to `$spacer * 8`

(You can add more sizes by adding entries to the `$spacers` Sass map variable.)

## Basic usage

### Add padding to a single side

Use the `p{t|s|b|e}-{size}` utilities to apply padding to an individual side, or the X and Y axis of an element.

For example, `pt-4` would add `1.5rem` of padding to the top of an element, `pe-3` would add `1rem` of padding to the right of an element, `pb-5` would add `3rem` of padding to the bottom of an element, and `ps-2` would add `0.5rem` of padding to the left of an element.

{{< example class="d-flex flex-wrap align-items-center fs-sm fw-semibold justify-content-center gap-5 bg-grid-slate-100" show_source="false" >}}
<div class="d-flex flex-column text-bg-purple rounded">
  <div class="bg-striped-white lh-base pt-4"></div>
  <div class="text-bg-purple p-4 rounded">pt-4</div>
</div>
<div class="d-flex flex-row-reverse text-bg-purple rounded">
  <div class="bg-striped-white lh-1 pe-3"></div>
  <div class="text-bg-purple p-4 rounded">pe-3</div>
</div>
<div class="d-flex flex-column-reverse text-bg-purple rounded">
  <div class="bg-striped-white lh-base pb-5"></div>
  <div class="text-bg-purple p-4 rounded">pb-5</div>
</div>
<div class="d-flex flex-row text-bg-purple rounded">
  <div class="bg-striped-white lh-1 ps-2"></div>
  <div class="text-bg-purple p-4 rounded">ps-2</div>
</div>
{{</ example >}}

```html
<div class="pt-4 ...">pt-4</div>
<div class="pe-3 ...">pe-3</div>
<div class="pb-5 ...">pb-5</div>
<div class="ps-2 ...">ps-2</div>
```

### Add horizontal padding

Control the horizontal padding of an element using the `px-{size}` utilities.

{{< example class="d-flex flex-wrap align-items-center fs-sm fw-semibold justify-content-center gap-5 bg-grid-slate-100" show_source="false" >}}
<div class="d-flex text-bg-purple rounded">
  <div class="bg-striped-white bd-w-12"></div>
  <div class="text-bg-purple p-4 text-center">px-6</div>
  <div class="bg-striped-white bd-w-12"></div>
</div>
{{</ example >}}

```html
<div class="px-6 ...">px-6</div>
```

### Add vertical padding

Control the vertical padding of an element using the `py-{size}` utilities.

{{< example class="d-flex justify-content-center s-sm fw-semibold bg-grid-slate-100" show_source="false" >}}
<div class="d-flex flex-column text-bg-purple rounded">
  <div class="bg-striped-white bd-h-12"></div>
  <div class="text-bg-purple p-4 text-center">py-6</div>
  <div class="bg-striped-white bd-h-12"></div>
</div>
{{</ example >}}

```html
<div class="py-6 ...">py-6</div>
```

### Add padding to all sides

Control the padding on all sides of an element using the `p-{size}` utilities.

{{< example class="d-flex justify-content-center fs-sm fw-semibold bg-grid-slate-100" show_source="false" >}}
<div class="text-bg-purple rounded">
<div class="p-5 bg-striped-white">
  <div class="text-bg-purple p-4 rounded">p-5</div>
</div>
</div>
{{</ example >}}

```html
<div class="p-5 ...">p-5</div>
```

## Breakpoints

All padding utilities that supports responsive at specific [breakpoints]({{< docsref "breakpoints" >}}), using the following format `{property}{sides}-{breakpoint}-{size}` for `xs`, `sm`, `md`, `lg`, `xl`, and `xxl`.

For example, use `py-md-5` to apply the `py-5` utility at only `medium screen` sizes and above.

{{< example class="d-flex justify-content-center fs-sm fw-semibold bg-grid-slate-100" show_source="false" >}}
<div class="text-bg-purple rounded">
<div class="bg-striped-white py-sm-3 py-md-5">
  <div class="text-bg-purple p-4 rounded">py-sm-3 py-md-5</div>
</div>
</div>
{{</ example >}}

```html
<div class="py-sm-3 py-md-5 ...">py-sm-3 py-md-5</div>
```
