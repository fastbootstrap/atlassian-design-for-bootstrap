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

## Quick reference

{{< bs-table "table api-class-table" >}}
| Class | Description |
| --- | --- |
| `.vstack` | Vertical layout for elements |
| `.hstack` | Horizontal layout for elements |
{{< /bs-table >}}

## Basic usage

### Vertical stack

Use `.vstack` to create vertical layouts. Stacked items are full-width by default. Use `.gap-*` utilities to add space between items.

{{< example show_source="false" >}}
<div class="vstack gap-3 bg-striped-purple text-center">
  <div class="text-bg-purple py-3">First item</div>
  <div class="text-bg-purple py-3">Second item</div>
  <div class="text-bg-purple py-3">Third item</div>
</div>
{{</ example >}}

```html
<div class="vstack gap-3">
  <div>First item</div>
  <div>Second item</div>
  <div>Third item</div>
</div>
```

You also can use the `d-flex` and `flex-column` to create a vertical stack.

{{< example show_source="false" >}}
<div class="d-flex flex-column text-center bg-striped-purple gap-3">
  <div class="text-bg-purple py-3">First item</div>
  <div class="text-bg-purple py-3">Second item</div>
  <div class="text-bg-purple py-3">Third item</div>
</div>
{{</ example >}}

```html
<div class="d-flex flex-column gap-3">
  <div>First item</div>
  <div>Second item</div>
  <div>Third item</div>
</div>
```

### Horizontal stack

Use `.hstack` for horizontal layouts. Stacked items are vertically centered by default and only take up their necessary width. Use `.gap-*` utilities to add space between items.

{{< example show_source="false" >}}
<div class="hstack text-center bg-striped-purple gap-3">
  <div class="text-bg-purple p-3">First item</div>
  <div class="text-bg-purple p-3">Second item</div>
  <div class="text-bg-purple p-3">Third item</div>
</div>
{{</ example >}}

```html
<div class="hstack gap-3">
  <div>First item</div>
  <div>Second item</div>
  <div>Third item</div>
</div>
```

Using horizontal margin utilities like [`.ms-auto`]({{< docsref "margin" >}}) as spacers:

{{< example show_source="false" >}}
<div class="hstack text-center bg-striped-purple gap-3">
  <div class="text-bg-purple p-3">First item</div>
  <div class="text-bg-purple p-3 ms-auto">Second item</div>
  <div class="text-bg-purple p-3">Third item</div>
</div>
{{</ example >}}

```html
<div class="hstack gap-3">
  <div>First item</div>
  <div class="ms-auto">Second item</div>
  <div>Third item</div>
</div>
```

## Examples 

### Stack buttons

Use `.vstack` to stack buttons and other elements

{{< example >}}
<div class="vstack gap-3 max-w-xs mx-auto">
  <button type="button" class="btn btn-primary">Save changes</button>
  <button type="button" class="btn btn-default">Cancel</button>
  <a href="#" class="btn btn-link">Back</a>
</div>
{{</ example >}}

### Inline forms

Create an inline form with `.hstack`

{{< example >}}
<div class="hstack gap-3">
  <input class="form-control me-auto" type="text" placeholder="Add your item here..." />
  <button type="button" class="btn btn-primary">Submit</button>
  <button type="button" class="btn btn-default">Reset</button>
</div>
{{</ example >}}