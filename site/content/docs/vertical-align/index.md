---
layout: docs
title: Vertical Align
description: "Easily change the vertical alignment of inline, inline-block, inline-table, and table cell elements."
toc: true
group: typography
menu:
  docs:
---

Change the alignment of elements with the [`vertical-alignment`](https://developer.mozilla.org/en-US/docs/Web/CSS/vertical-align) utilities. To vertically center non-inline content (like `<div>`s and more), use our [flex box utilities]({{< docsref "align-items" >}}).

{{< callout warning >}}
Vertical-align only affects inline, inline-block, inline-table, and table cell elements.
{{</ callout >}}

## Quick reference

{{< class-api "align" >}}

## Basic usage 

### Baseline

Use `align-baseline` to align the baseline of an element with the baseline of its parent.

{{< example class="bg-neutral-subtler bg-grid-slate-100" show_source="false" >}}
<div class="bg-body shadow-lg border py-4 rounded max-w-md mx-auto">
  <div class="position-relative">
  <span class="w-0 bd-h-8 d-inline-block align-baseline">
    <span class="position-absolute top-0 border-top border-bottom border-opacity-25 w-100 bd-h-8 border-dashed"></span>
    <span class="position-absolute top-0 border-bottom border-opacity-25 w-100 bd-h-4 border-dashed"></span>
  </span>
  <span class="position-relative z-10 lh-1 fw-semibold px-4">The quick brown fox jumps over the lazy dog.</span>
  </div>
</div>
{{</ example >}}

```html
<span class="inline-block align-baseline ...">...</span>
```

### Top

Use `align-top` to align the top of an element and its descendants with the top of the entire line.

{{< example class="bg-neutral-subtler bg-grid-slate-100" show_source="false" >}}
<div class="bg-body shadow-lg border py-4 rounded max-w-md mx-auto">
  <div class="position-relative">
  <span class="w-0 bd-h-8 d-inline-block align-top">
    <span class="position-absolute top-0 border-top border-bottom border-opacity-25 w-100 bd-h-8 border-dashed"></span>
    <span class="position-absolute top-0 border-bottom border-opacity-25 w-100 bd-h-4 border-dashed"></span>
  </span>
  <span class="position-relative z-10 lh-1 fw-semibold px-4">The quick brown fox jumps over the lazy dog.</span>
  </div>
</div>
{{</ example >}}

```html
<span class="inline-block align-top ...">...</span>
```

### Middle

Use `align-middle` to align the middle of an element with the baseline plus half the x-height of the parent.

{{< example class="bg-neutral-subtler bg-grid-slate-100" show_source="false" >}}
<div class="bg-body shadow-lg border py-4 rounded max-w-md mx-auto">
  <div class="position-relative">
  <span class="w-0 bd-h-8 d-inline-block align-middle">
    <span class="position-absolute top-0 border-top border-bottom border-opacity-25 w-100 bd-h-8 border-dashed"></span>
    <span class="position-absolute top-0 border-bottom border-opacity-25 w-100 bd-h-4 border-dashed"></span>
  </span>
  <span class="position-relative z-10 lh-1 fw-semibold px-4">The quick brown fox jumps over the lazy dog.</span>
  </div>
</div>
{{</ example >}}

```html
<span class="inline-block align-middle ...">...</span>
```

### Bottom

Use `align-bottom` to align the bottom of an element and its descendants with the bottom of the entire line.

{{< example class="bg-neutral-subtler bg-grid-slate-100" show_source="false" >}}
<div class="bg-body shadow-lg border py-4 rounded max-w-md mx-auto">
  <div class="position-relative">
  <span class="w-0 bd-h-8 d-inline-block align-bottom">
    <span class="position-absolute top-0 border-top border-bottom border-opacity-25 w-100 bd-h-8 border-dashed"></span>
    <span class="position-absolute top-0 border-bottom border-opacity-25 w-100 bd-h-4 border-dashed"></span>
  </span>
  <span class="position-relative z-10 lh-1 fw-semibold px-4">The quick brown fox jumps over the lazy dog.</span>
  </div>
</div>
{{</ example >}}

```html
<span class="inline-block align-bottom ...">...</span>
```

### Text Top

Use `align-text-top` to align the top of an element with the top of the parent element’s font.


{{< example class="bg-neutral-subtler bg-grid-slate-100" show_source="false" >}}
<div class="bg-body shadow-lg border py-4 rounded max-w-md mx-auto">
  <div class="position-relative">
  <span class="w-0 bd-h-8 d-inline-block align-text-top">
    <span class="position-absolute top-0 border-top border-bottom border-opacity-25 w-100 bd-h-8 border-dashed"></span>
    <span class="position-absolute top-0 border-bottom border-opacity-25 w-100 bd-h-4 border-dashed"></span>
  </span>
  <span class="position-relative z-10 lh-1 fw-semibold px-4">The quick brown fox jumps over the lazy dog.</span>
  </div>
</div>
{{</ example >}}

```html
<span class="inline-block align-text-top ...">...</span>
```

### Text Bottom

Use `align-text-bottom` to align the bottom of an element with the bottom of the parent element’s font.


{{< example class="bg-neutral-subtler bg-grid-slate-100" show_source="false" >}}
<div class="bg-body shadow-lg border py-4 rounded max-w-md mx-auto">
  <div class="position-relative">
  <span class="w-0 bd-h-8 d-inline-block align-text-bottom">
    <span class="position-absolute top-0 border-top border-bottom border-opacity-25 w-100 bd-h-8 border-dashed"></span>
    <span class="position-absolute top-0 border-bottom border-opacity-25 w-100 bd-h-4 border-dashed"></span>
  </span>
  <span class="position-relative z-10 lh-1 fw-semibold px-4">The quick brown fox jumps over the lazy dog.</span>
  </div>
</div>
{{</ example >}}

```html
<span class="inline-block align-text-bottom ...">...</span>
```
