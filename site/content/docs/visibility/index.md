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

## Basic usage 

### Hidden

Use `invisible` to hide an element, but still maintain its place in the DOM, affecting the layout of other elements(compare with `.none` from the [display]({{< docsref "display" >}}) documentation).

{{< example show_source="false" >}}
<div class="vstack gap-3 text-center bg-striped-purple">
  <div class="text-bg-secondary p-3">01</div>
  <div class="invisible text-bg-secondary p-3">02</div>
  <div class="text-bg-secondary p-3">03</div>
</div>
{{</ example >}}

```html
<div class="vstack gap-3">
  <div>01</div>
  <div class="invisible">02</div>
  <div>03</div>
</div>
```

### Visible 

Use `visible` to make an element visible. This is mostly useful for undoing the `invisible` utility at different screen sizes.

{{< example show_source="false" >}}
<div class="vstack gap-3 text-center bg-striped-purple">
  <div class="text-bg-secondary p-3">01</div>
  <div class="visible text-bg-secondary p-3">02</div>
  <div class="text-bg-secondary p-3">03</div>
</div>
{{</ example >}}

```html
<div class="vstack gap-3">
  <div>01</div>
  <div class="visible">02</div>
  <div>03</div>
</div>
```