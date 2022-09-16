---
layout: docs
title: Margin
description: "Utilities for controlling an element's margin."
toc: true
group: spacing
menu:
  docs:
---


Assign responsive-friendly `margin` values to an element or a subset of its sides with shorthand classes. Includes support for individual properties, all properties, and vertical and horizontal properties.

{{< callout >}}
**Using the CSS Grid layout module?** Consider using [the gap utility]({{< docsref "gap" >}}) instead.
{{< /callout >}}

## Quick reference

{{< class-api "margin" "true" >}}

## Overview 

The margin utilities that apply to all breakpoints, from `xs` to `xxl`, have no breakpoint abbreviation in them. This is because those classes are applied from `min-width: 0` and up, and thus are not bound by a media query. The remaining breakpoints, however, do include a breakpoint abbreviation.

The classes are named using the format `{property}{sides}-{size}` for `xs` and `{property}{sides}-{breakpoint}-{size}` for `sm`, `md`, `lg`, `xl`, and `xxl`.

Where *property* is `m` - for classes that set `margin`

Where *sides* is one of:

- `t` - for classes that set `margin-top`
- `b` - for classes that set `margin-bottom`
- `s` - (start) for classes that set `margin-left` in LTR, `margin-right` in RTL
- `e` - (end) for classes that set `margin-right` in LTR, `margin-left` in RTL
- `x` - for classes that set both `*-left` and `*-right`
- `y` - for classes that set both `*-top` and `*-bottom`
- blank - for classes that set a `margin` on all 4 sides of the element

Where *size* is one of:

- `0` - for classes that eliminate the `margin` by setting it to `0`
- `1` - (by default) for classes that set the `margin` to `$spacer * .25`
- `2` - (by default) for classes that set the `margin` to `$spacer * .5`
- `3` - (by default) for classes that set the `margin` to `$spacer`
- `4` - (by default) for classes that set the `margin` to `$spacer * 1.5`
- `5` - (by default) for classes that set the `margin` to `$spacer * 3`
- `6` - (by extended) for classes that set the `margin` to `$spacer * 4`
- `7` - (by extended) for classes that set the `margin` to `$spacer * 5`
- `8` - (by extended) for classes that set the `margin` to `$spacer * 6`
- `9` - (by extended) for classes that set the `margin` to `$spacer * 7`
- `10` - (by extended) for classes that set the `margin` to `$spacer * 8`
- `auto` - for classes that set the `margin` to auto

(You can add more sizes by adding entries to the `$spacers` Sass map variable.)

## Basic examples

### Add margin to a single side

Control the margin on one side of an element using the `m{t|e|b|s}-{size}` utilities.

For example, `mt-4` would add `1.5rem` of margin to the top of an element, `me-3` would add `1rem` of margin to the right of an element, `mb-5` would add `3rem` of margin to the bottom of an element, and `ms-2` would add `0.5rem` of margin to the left of an element.

<div class="bd-example bg-light p-0">
  <div class="position-relative" style="height:14rem;">
    <div class="position-absolute start-50 top-0 translate-middle-x bg-purple-50">
      <div class="bg-purple-400 mt-4 py-3 px-4 text-white fw-semibold rounded-bottom">mt-4</div>
    </div>
    <div class="position-absolute top-50 end-0 translate-middle-y bg-purple-50">
      <div class="bg-purple-400 me-3 py-3 px-4 text-white fw-semibold rounded-start">me-3</div>
    </div>
    <div class="position-absolute bottom-0 start-50 bg-purple-50">
      <div class="bg-purple-400 mb-5 py-3 px-4 text-white fw-semibold rounded-top">mb-5</div>
    </div>
    <div class="position-absolute top-50 start-0 translate-middle-y bg-purple-50">
      <div class="bg-purple-400 ms-2 py-3 px-4 text-white fw-semibold rounded-end">ms-2</div>
    </div>
  </div>
</div>

```html
<div class="mt-4 ...">mt-4</div>
<div class="me-3 ...">me-3</div>
<div class="mb-5 ...">mb-5</div>
<div class="ms-2 ...">ms-2</div>
```

### Add horizontal margin

Control the horizontal margin of an element using the `mx-{size}` utilities.

<div class="bd-example">
  <div class="col-md-8 mx-auto text-center fw-semibold">
    <div class="bg-purple-100 d-inline-block rounded">
      <div class="bg-purple-400 p-3 px-4 text-white text-center mx-5">mx-5</div>
    </div>
  </div>
</div>

```html
<div class="mx-5 ...">mx-5</div>
```

### Add vertical margin

Control the vertical margin of an element using the `my-{size}` utilities.

<div class="bd-example">
  <div class="col-md-8 mx-auto text-center fw-semibold">
    <div class="bg-purple-100 d-inline-block rounded">
      <div class="bg-purple-400 p-3 px-4 text-white text-center my-5">my-5</div>
    </div>
  </div>
</div>

```html
<div class="my-5 ...">my-5</div>
```

### Margin to all sides

Control the margin on all sides of an element using the `m-{size}` utilities.

<div class="bd-example">
  <div class="col-md-8 mx-auto text-center fw-semibold">
    <div class="bg-purple-100 d-inline-block rounded">
      <div class="bg-purple-400 p-3 px-4 text-white text-center m-4">m-4</div>
    </div>
  </div>
</div>

```html
<div class="m-4 ...">m-4</div>
```

### Horizontal centering margin

Additionally, Bootstrap also includes an `.mx-auto` class for horizontally centering fixed-width block level content—that is, content that has `display: block` and a `width` set—by setting the horizontal margins to `auto`.

<div class="bd-example bg-purple-50 ">
  <div class="mx-auto bg-purple-300 text-white shadow text-center p-3" style="width: 200px;">
    Centered element
  </div>
</div>

```html
<div class="mx-auto" style="width: 200px;">
  Centered element
</div>
```

### Right align margin

Control the righ-align margin of an element using the `ms-auto` utilities.

{{< example >}}
<nav class="navbar navbar-expand-lg">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">
      <img src="/images/bootstrap-logo.svg" width="36" alt="Logo" />
    </a>
    <button class="btn btn-primary ms-auto">Sign up</button>
  </div>
</nav>
{{</ example >}}

## Using negative values

In CSS, `margin` properties can utilize negative values ([`padding`]({{< docsref "padding" >}}) cannot). These negative margins are enabled by default, but can be disabled in Sass by setting `$enable-negative-margins: false`.

The syntax is nearly the same as the default, positive margin utilities, but with the addition of `n` before the requested size by the format `{property}{sides}-n{size}`.

<div class="bd-example bg-light">
<div class="col-md-4 mx-auto d-flex flex-column align-items-center">
  <div class="bg-purple-50 bd-w-36 bd-h-16 rounded d-inline-block shadow-sm"></div>
  <div class="bg-purple-400 p-4 text-white fw-semibold rounded mt-n5 d-inline-block shadow">mt-n5</div>
</div>
</div>

```html
  <div class="d-inline-block"></div>
  <div class="mt-n2 d-inline-block">mt-n2</div>
```
## Breakpoints and media queries


All margin utilities that supports responsive at specific [breakpoints]({{< docsref "breakpoints" >}}), using the following format `{property}{sides}-{breakpoint}-{size}` for `xs`, `sm`, `md`, `lg`, `xl`, and `xxl`.


For example, use `my-md-4` to apply the `my-4` utility at only `medium screen` sizes and above, `my-3` for `xs` by default.

<div class="bd-example bg-light">
  <div class="col-md-4 mx-auto text-center fw-semibold">
    <div class="bg-purple-400 p-3 text-white text-center rounded">my-3 my-md-4</div>
  </div>
</div>

```html
<div class="my-3 my-md-4 ...">my-3 my-md-4</div>
```