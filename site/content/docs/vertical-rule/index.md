---
layout: docs
title: Vertical Rule
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
- Their color is set via `currentColor` and `opacity`

Customize them with additional styles as needed.

{{< example >}}
<div class="vr"></div>
{{</ example >}}

Vertical rules scale their height in flex layouts:

{{< example >}}
<div class="d-flex" style="height: 200px;">
  <div class="vr"></div>
</div>
{{</ example >}}

## With stacks 

They can also be used in stacks:

{{< example >}}
<div class="hstack gap-3">
  <div class="bg-light border">First item</div>
  <div class="bg-light border ms-auto">Second item</div>
  <div class="vr"></div>
  <div class="bg-light border">Third item</div>
</div>
{{</ example >}}