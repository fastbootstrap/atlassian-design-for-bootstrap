---
layout: docs
title: Stacks
description: "The custom vertical rule helper to create vertical dividers like the `<hr>` element"
toc: true
group: layout
menu:
  docs:
---

Stacks offer a shortcut for applying a number of flexbox properties to quickly and easily create layouts in Bootstrap. All credit for the concept and implementation goes to the open source [Pylon project](https://almonk.github.io/pylon/).

{{< callout warning >}}
Support for gap utilities with flexbox was recently added to Safari, so consider verifying your intended browser support. Grid layout should have no issues. [Read more](https://caniuse.com/flexbox-gap).
{{</ callout >}}

{{< bs-table "table" >}}
| Class | Description |
| --- | --- |
| `.vstack` | Vertical layout for elements |
| `.hstack` | Horizontal layout for elements |
{{< /bs-table >}}

## Vertical stack

Use `.vstack` to create vertical layouts. Stacked items are full-width by default. Use `.gap-*` utilities to add space between items.

{{< example >}}
<div class="vstack gap-3">
  <div class="bg-light border">First item</div>
  <div class="bg-light border">Second item</div>
  <div class="bg-light border">Third item</div>
</div>
{{</ example >}}

You also can use the `d-flex` and `flex-column` to create a vertical stack.

{{< example >}}
<div class="d-flex flex-column flex-fill gap-3">
  <div class="bg-light border">First item</div>
  <div class="bg-light border">Second item</div>
  <div class="bg-light border">Third item</div>
</div>
{{</ example >}}

## Horizontal stack

Use `.hstack` for horizontal layouts. Stacked items are vertically centered by default and only take up their necessary width. Use `.gap-*` utilities to add space between items.

{{< example >}}
<div class="hstack gap-3">
  <div class="bg-light border">First item</div>
  <div class="bg-light border">Second item</div>
  <div class="bg-light border">Third item</div>
</div>
{{</ example >}}

Using horizontal margin utilities like [`.ms-auto`]({{< docsref "margin" >}}) as spacers:

{{< example >}}
<div class="hstack gap-3">
  <div class="bg-light border">First item</div>
  <div class="bg-light border ma-auto">Second item</div>
  <div class="bg-light border">Third item</div>
</div>
{{</ example >}}

## Examples 

Use `.vstack` to stack buttons and other elements

{{< example >}}
<div class="vstack gap-2 col-md-5 mx-auto">
  <button type="button" class="btn btn-secondary">Save changes</button>
  <button type="button" class="btn btn-outline-secondary">Cancel</button>
</div>
{{</ example >}}

Create an inline form with `.hstack`

{{< example >}}
<div class="hstack gap-3">
  <input class="form-control me-auto" type="text" placeholder="Add your item here..." />
  <button type="button" class="btn btn-secondary">Submit</button>
  <div class="vr"></div>
  <button type="button" class="btn btn-subtle">Reset</button>
</div>
{{</ example >}}