---
layout: docs
title: Gutters
description: "Gutters are the padding between columns used to responsively space and align content in the Bootstrap grid system."
toc: true
group: grid-system
menu:
  docs: 
    weight: 50   
---

Gutters are the padding between your columns, used to responsively space and align content in the Bootstrap grid system.

## Quick reference

{{< class-api "gutter,gutter-x,gutter-y" true >}}

{{< callout >}}
The Gutters classes should be only used in the Bootstrap grid system, including `container` and `row` elements.
{{</ callout >}}

## How they work

- **Gutters are the gaps between column content, created by horizontal `padding`.** We set `padding-right` and `padding-left` on each column, and use negative `margin` to offset that at the start and end of each row to align content.

- **Gutters start at `1.5rem` (`24px`) wide.** This allows us to match our grid to the [padding]({{< docsref "padding" >}}) and [margin]({{< docsref "margin" >}}) spacers scale.

- **Gutters can be responsively adjusted.** Use breakpoint-specific gutter classes to modify horizontal gutters, vertical gutters, and all gutters.

## Horizontal gutters

`.gx-*` classes can be used to control the horizontal gutter widths. The `.container` or `.container-fluid` parent may need to be adjusted if larger gutters are used too to avoid unwanted overflow, using a matching padding utility. 

For example, in the following example we've increased the padding with `.px-5`:

{{< example show_source="false">}}
<div class="container bg-striped-purple gx-0 text-center">
  <div class="row gx-5">
    <div class="col">
     <div class="p-3 text-bg-purple">Custom column padding</div>
    </div>
    <div class="col">
      <div class="p-3 text-bg-purple">Custom column padding</div>
    </div>
  </div>
</div>
{{< /example >}}

```html
<div class="container">
  <div class="row gx-5">
    <div class="col">
      Custom column padding
    </div>
    <div class="col">
      Custom column padding
    </div>
  </div>
</div>
```

An alternative solution is to add a wrapper around the `.row` with the `.overflow-hidden` class:

{{< example show_source="false">}}
<div class="container overflow-hidden gx-0 bg-striped-purple text-center">
  <div class="row gx-5">
    <div class="col">
     <div class="p-3 text-bg-purple">Custom column padding</div>
    </div>
    <div class="col">
      <div class="p-3 text-bg-purple">Custom column padding</div>
    </div>
  </div>
</div>
{{< /example >}}

```html
<div class="container overflow-hidden">
  <div class="row gx-5">
    <div class="col">
      Custom column padding
    </div>
    <div class="col">
      Custom column padding
    </div>
  </div>
</div>
```

## Vertical gutters

`.gy-*` classes can be used to control the vertical gutter widths. Like the horizontal gutters, the vertical gutters can cause some overflow below the `.row` at the end of a page. If this occurs, you add a wrapper around `.row` with the `.overflow-hidden` class:

{{< example show_source="false">}}
<div class="container overflow-hidden text-center bg-striped-purple px-0">
  <div class="row gy-5">
    <div class="col-6">
      <div class="p-3 text-bg-purple">Custom column padding</div>
    </div>
    <div class="col-6">
      <div class="p-3 text-bg-purple">Custom column padding</div>
    </div>
    <div class="col-6">
      <div class="p-3 text-bg-purple">Custom column padding</div>
    </div>
    <div class="col-6">
      <div class="p-3 text-bg-purple">Custom column padding</div>
    </div>
  </div>
</div>
{{< /example >}}

```html
<div class="container overflow-hidden">
  <div class="row gy-5">
    <div class="col-6">
      Custom column padding
    </div>
    <div class="col-6">
      Custom column padding
    </div>
    <div class="col-6">
      Custom column padding
    </div>
    <div class="col-6">
      Custom column padding
    </div>
  </div>
</div>
```

## Horizontal & vertical gutters

`.g-*` classes can be used to control the horizontal gutter widths, for the following example we use a smaller gutter width, so there won't be a need to add the `.overflow-hidden` wrapper class.

{{< example show_source="false">}}
<div class="container text-center bg-striped-purple px-0">
  <div class="row g-3">
    <div class="col-6">
      <div class="p-3 text-bg-purple">Custom column padding</div>
    </div>
    <div class="col-6">
      <div class="p-3 text-bg-purple">Custom column padding</div>
    </div>
    <div class="col-6">
      <div class="p-3 text-bg-purple">Custom column padding</div>
    </div>
    <div class="col-6">
      <div class="p-3 text-bg-purple">Custom column padding</div>
    </div>
  </div>
</div>
{{< /example >}}

```html
<div class="container">
  <div class="row g-3">
    <div class="col-6">
      Custom column padding
    </div>
    <div class="col-6">
      Custom column padding
    </div>
    <div class="col-6">
      Custom column padding
    </div>
    <div class="col-6">
      Custom column padding
    </div>
  </div>
</div>
```

## Row columns gutters

Gutter classes can also be added to [row columns]({{< docsref "grid#row-columns" >}}). In the following example, we use responsive row columns and responsive gutter classes.

{{< example show_source="false">}}
<div class="container text-center bg-striped-purple px-0">
  <div class="row row-cols-2 row-cols-lg-5 g-1 g-lg-3">
    <div class="col">
      <div class="p-3 text-bg-purple">Row column</div>
    </div>
    <div class="col">
      <div class="p-3 text-bg-purple">Row column</div>
    </div>
    <div class="col">
      <div class="p-3 text-bg-purple">Row column</div>
    </div>
    <div class="col">
      <div class="p-3 text-bg-purple">Row column</div>
    </div>
    <div class="col">
      <div class="p-3 text-bg-purple">Row column</div>
    </div>
    <div class="col">
      <div class="p-3 text-bg-purple">Row column</div>
    </div>
    <div class="col">
      <div class="p-3 text-bg-purple">Row column</div>
    </div>
    <div class="col">
      <div class="p-3 text-bg-purple">Row column</div>
    </div>
    <div class="col">
      <div class="p-3 border text-bg-purple">Row column</div>
    </div>
    <div class="col">
      <div class="p-3 text-bg-purple">Row column</div>
    </div>
  </div>
</div>
{{< /example >}}

```html
<div class="container text-center bg-striped-purple px-0">
  <div class="row row-cols-2 row-cols-lg-5 g-1 g-lg-3">
    <div class="col">
      Row column
    </div>
    <div class="col">
      Row column
    </div>
    <div class="col">
      Row column
    </div>
    <div class="col">
      Row column
    </div>
    .....
  </div>
</div>
```

## No gutters

The gutters between columns in our predefined grid classes can be removed with `.g-0`. This removes the negative `margin`s from `.row` and the horizontal `padding` from all immediate children columns.

**Need an edge-to-edge design?** Drop the parent `.container` or `.container-fluid` and add `.mx-0` to the `.row` to prevent overflow.

In practice, here's how it looks. Note you can continue to use this with all other predefined grid classes (including column widths, responsive tiers, reorders, and more).

{{< example show_source="false" >}}
<div class="row g-0 text-center">
  <div class="col-sm-6 col-md-8 text-bg-purple p-5">.col-sm-6 .col-md-8</div>
  <div class="col-6 col-md-4 text-bg-dark p-5">.col-6 .col-md-4</div>
</div>
{{< /example >}}

```html
<div class="row g-0">
  <div class="col-sm-6 col-md-8">.col-sm-6 .col-md-8</div>
  <div class="col-6 col-md-4">.col-6 .col-md-4</div>
</div>
```

## Breakpoints and media queries

All gutter utilities that supports responsive at specific [breakpoints]({{< docsref "breakpoints" >}}), using the following format `g*-{breakpoint}-{*}` for `xs`, `sm`, `md`, `lg`, `xl`, and `xxl`.

Here are all the support classes:

- `.g-sm-0`
- `.g-sm-1`
- `.g-sm-2`
- ......
