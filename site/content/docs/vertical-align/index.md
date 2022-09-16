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

With inline elements

{{< example >}}
<span class="align-baseline">baseline</span>
<span class="align-top">top</span>
<span class="align-middle">middle</span>
<span class="align-bottom">bottom</span>
<span class="align-text-top">text-top</span>
<span class="align-text-bottom">text-bottom</span>
{{< /example >}}

With table cells:

{{< example >}}
<table style="height: 100px;">
  <tbody>
    <tr class="bg-light">
      <td class="align-baseline">baseline</td>
      <td class="align-top">top</td>
      <td class="align-middle">middle</td>
      <td class="align-bottom">bottom</td>
      <td class="align-text-top">text-top</td>
      <td class="align-text-bottom">text-bottom</td>
    </tr>
  </tbody>
</table>
{{< /example >}}

## Basic Examples 

### Baseline

Use `align-baseline` to align the baseline of an element with the baseline of its parent.

<div class="bd-example bg-light">
  <div class="border py-4 bg-white rounded col-md-8 mx-auto">
    <span class="fw-semibold d-inline-block border border-start-0 border-end-0 w-100 px-4" style="line-height:3rem;border-style:dashed !important;">The quick brown fox jumps over the lazy dog.
      <img class="align-baseline" src="https://interactive-examples.mdn.mozilla.net/media/examples/star2.png" />
    </span>
  </div>
</div>

```html
<img class="align-baseline" src="path/to/image.jpg" />
```

### Top

Use `align-top` to align the top of an element and its descendants with the top of the entire line.

<div class="bd-example bg-light">
  <div class="border py-4 bg-white rounded col-md-8 mx-auto">
    <span class="fw-semibold d-inline-block border border-start-0 border-end-0 w-100 px-4" style="line-height:3rem;border-style:dashed !important;">The quick brown fox jumps over the lazy dog.
      <img class="align-top" src="https://interactive-examples.mdn.mozilla.net/media/examples/star2.png" />
    </span>
  </div>
</div>

```html
<img class="align-top" src="path/to/image.jpg" />
```

### Middle

Use `align-middle` to align the middle of an element with the baseline plus half the x-height of the parent.

<div class="bd-example bg-light">
  <div class="border py-4 bg-white rounded col-md-8 mx-auto">
    <span class="fw-semibold d-inline-block border border-start-0 border-end-0 w-100 px-4" style="line-height:3rem;border-style:dashed !important;">The quick brown fox jumps over the lazy dog.
      <img class="align-middle" src="https://interactive-examples.mdn.mozilla.net/media/examples/star2.png" />
    </span>
  </div>
</div>

```html
<img class="align-middle" src="path/to/image.jpg" />
```

### Bottom
Use `align-bottom` to align the bottom of an element and its descendants with the bottom of the entire line.

<div class="bd-example bg-light">
  <div class="border py-4 bg-white rounded col-md-8 mx-auto">
    <span class="fw-semibold d-inline-block border border-start-0 border-end-0 w-100 px-4" style="line-height:3rem;border-style:dashed !important;">The quick brown fox jumps over the lazy dog.
      <img class="align-bottom" src="https://interactive-examples.mdn.mozilla.net/media/examples/star2.png" />
    </span>
  </div>
</div>

```html
<img class="align-bottom" src="path/to/image.jpg" />
```

### Text Top

Use `align-text-top` to align the top of an element with the top of the parent element’s font.

<div class="bd-example bg-light">
  <div class="border py-4 bg-white rounded col-md-8 mx-auto">
    <span class="fw-semibold d-inline-block border border-start-0 border-end-0 w-100 px-4" style="line-height:3rem;border-style:dashed !important;">The quick brown fox jumps over the lazy dog.
      <img class="align-text-top" src="https://interactive-examples.mdn.mozilla.net/media/examples/star2.png" />
    </span>
  </div>
</div>

```html
<img class="align-text-top" src="path/to/image.jpg" />
```

### Text Bottom

Use `align-text-bottom` to align the bottom of an element with the bottom of the parent element’s font.

<div class="bd-example bg-light">
  <div class="border py-4 bg-white rounded col-md-8 mx-auto">
    <span class="fw-semibold d-inline-block border border-start-0 border-end-0 w-100 px-4" style="line-height:3rem;border-style:dashed !important;">The quick brown fox jumps over the lazy dog.
      <img class="align-text-bottom" src="https://interactive-examples.mdn.mozilla.net/media/examples/star2.png" />
    </span>
  </div>
</div>

```html
<img class="align-text-bottom" src="path/to/image.jpg" />
```
