---
layout: docs
title: Vertical Line
description: "The custom vertical rule helper to create vertical dividers like the `<hr>` element"
toc: true
group: borders
menu:
  docs:
---

## How it works

Vertical rules are inspired by the `<hr>` element, allowing you to create vertical dividers in common layouts. They’re styled just like `<hr>` elements:

- They’re `1px` wide
- They have `min-height` of `1em`
- Their color is set via `currentColor` and `opacity`, the default opacity is `0.25`.

## Basic usage

Customize them with additional styles as needed.

{{< example class="bg-neutral-subtler bg-grid-slate-100 text-center" show_source="false" >}}
  <div class="vr"></div>
{{</ example >}}

```html
<div class="vr"></div>
```

Vertical rules scale their height in flex layouts:

{{< example class="bg-neutral-subtler bg-grid-slate-100 text-center" show_source="false">}}
<div class="d-flex bd-h-48 justify-content-center">
  <div class="vr"></div>
</div>
{{</ example >}}

```html
<div class="d-flex bd-h-48">
  <!-- bd-h-48: height is 192px -->
  <div class="vr"></div>
</div>
```

### Changes color and wide

Use `.border-{size}` and `.text-{color}` change the vertical rule styles if you needs.

{{< example >}}
<div class="d-flex gap-5 justify-content-center">
  <div class="d-flex bd-h-32 text-primary">
      <div class="vr border-4 opacity-100"></div>
  </div>
  <div class="d-flex bd-h-32 text-primary">
      <div class="vr border-4 opacity-75"></div>
  </div>
  <div class="d-flex bd-h-32 text-primary">
      <div class="vr border-4 opacity-50"></div>
  </div>
</div>
{{</ example >}}

### With stacks 

They can also be used in stacks:

{{< example class="bg-neutral-subtler bg-grid-slate-100 text-center">}}
<div class="hstack gap-3">
  <div class="text-bg-purple rounded p-4 lh-1 fs-sm">First item</div>
  <div class="text-bg-purple rounded p-4 lh-1 fs-sm ms-auto">Second item</div>
  <div class="vr"></div>
  <div class="text-bg-purple rounded p-4 lh-1 fs-sm">Third item</div>
</div>
{{</ example >}}