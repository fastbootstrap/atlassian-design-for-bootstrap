---
layout: docs
title: Visibility
description: "Control the visibility of elements, without modifying their display, with visibility utilities."
toc: true
group: layout
menu:
  docs:    
---


Set the `visibility` of elements with our visibility utilities. These utility classes do not modify the `display` value at all and do not affect layout, `.invisible` elements still take up space in the page.

## Quick reference

{{< class-api "visibility" >}}

{{< callout warning >}}
Elements with the `.invisible` class will be hidden *both* visually and for assistive technology/screen reader users.
{{< /callout >}}

## Basic example 

### Invisible 

Use `invisible` to hide an element, but still maintain its place in the DOM, affecting the layout of other elements(compare with `.none` from the [display]({{< docsref "display" >}}) documentation).

<div class="bd-example d-grid text-center fw-semibold">
  <div class="g-col-4 text-bg-secondary p-3 rounded mx-3 flex-fill">01</div>
  <div class="invisible g-col-4 text-bg-secondary p-3 rounded mx-3 flex-fill">02</div>
  <div class="g-col-4 text-bg-secondary p-3 rounded mx-3 flex-fill">03</div>
</div>

```html
<div class="d-grid gap-3">
  <div class="g-col-4">01</div>
  <div class="g-col-4 invisible">02</div>
  <div class="g-col-4">04</div>
</div>
```

### Visible 

Use `visible` to make an element visible. This is mostly useful for undoing the `invisible` utility at different screen sizes.

<div class="bd-example d-grid gap-3 text-center fw-semibold">
  <div class="g-col-4 text-bg-primary p-3 rounded mx-3 flex-fill">01</div>
  <div class="visible g-col-4 text-bg-primary p-3 rounded mx-3 flex-fill">02</div>
  <div class="g-col-4 text-bg-primary p-3 rounded mx-3 flex-fill">03</div>
</div>

```html
<div class="d-grid">
  <div class="g-col-4">01</div>
  <div class="g-col-4 visible">02</div>
  <div class="g-col-4">04</div>
</div>
```