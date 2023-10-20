---
layout: docs
title: Floats
description: "Toggle floats on any element, across any breakpoint, using our responsive float utilities."
toc: true
group: layout
menu:
  docs:    
---

## Overview

These utility classes float an element to the left or right, or disable floating, based on the current viewport size using the [CSS `float` property](https://developer.mozilla.org/en-US/docs/Web/CSS/float). `!important` is included to avoid specificity issues. These use the same viewport breakpoints as our grid system. Please be aware float utilities have no effect on flex items.

## Quick reference

{{< class-api "float" >}}

## Basic usage

### Floating elements to the right

Use `float-end` to float an element to the right of its container.

{{< example show_source="false" >}}
<div class="float-end ms-3">
  <div class="ratio ratio-16x9" style="width:160px">
    <img class="img-fluid rounded-3" src="https://images.unsplash.com/photo-1554629947-334ff61d85dc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=320&amp;q=80" />
  </div>
</div>
<p>
  Maybe we can live without libraries, people like you and me. Maybe. Sure, we're too old to change the world, but what about that kid, sitting down, opening a book, right now, in a branch at the local library and
  finding drawings of pee-pees and wee-wees on the Cat in the Hat and the Five Chinese Brothers? Doesn't HE deserve better? Look. If you think this is about overdue fines and missing books, you'd better think again.
  This is about that kid's right to read a book without getting his mind warped! Or: maybe that turns you on, Seinfeld; maybe that's how y'get your kicks. You and your good-time buddies.
</p>
{{</ example >}}

```html
<img class="float-end ..." src="path/to/image.jpg">
<p>Maybe we can live without libraries, people like you and me. ...</p>
```

### Floating elements to the left

Use `float-start` to float an element to the left of its container.

{{< example show_source="false" >}}
<div class="float-start me-3">
  <div class="ratio ratio-16x9" style="width:160px">
    <img class="img-fluid rounded-3" src="https://images.unsplash.com/photo-1554629947-334ff61d85dc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=320&amp;q=80" />
  </div>
</div>
<p>
  Maybe we can live without libraries, people like you and me. Maybe. Sure, we're too old to change the world, but what about that kid, sitting down, opening a book, right now, in a branch at the local library and
  finding drawings of pee-pees and wee-wees on the Cat in the Hat and the Five Chinese Brothers? Doesn't HE deserve better? Look. If you think this is about overdue fines and missing books, you'd better think again.
  This is about that kid's right to read a book without getting his mind warped! Or: maybe that turns you on, Seinfeld; maybe that's how y'get your kicks. You and your good-time buddies.
</p>
{{</ example >}}

{{< example show_preview="false" >}}
<img class="float-start ..." src="path/to/image.jpg">
<p>Maybe we can live without libraries, people like you and me. ...</p>
{{</ example >}}

### Disabling a float

Use `float-none` to reset any floats that are applied to an element. This is the default value for the float property.

{{< example show_source="false" >}}
<div class="float-none mb-3">
  <div class="ratio ratio-16x9" style="width:160px">
    <img class="img-fluid rounded-3" src="https://images.unsplash.com/photo-1554629947-334ff61d85dc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=320&amp;q=80" />
  </div>
</div>
<p>
  Maybe we can live without libraries, people like you and me. Maybe. Sure, we're too old to change the world, but what about that kid, sitting down, opening a book, right now, in a branch at the local library and
  finding drawings of pee-pees and wee-wees on the Cat in the Hat and the Five Chinese Brothers? Doesn't HE deserve better? Look. If you think this is about overdue fines and missing books, you'd better think again.
  This is about that kid's right to read a book without getting his mind warped! Or: maybe that turns you on, Seinfeld; maybe that's how y'get your kicks. You and your good-time buddies.
</p>
{{</ example >}}

{{< example show_preview="false" >}}
<img class="float-none ..." src="path/to/image.jpg">
<p>Maybe we can live without libraries, people like you and me. ...</p>
{{</ example >}}

## Breakpoints and media queries

Responsive variations also exist for each `float` value.


Here are all the support classes:

{{< markdown >}}
{{< float.inline >}}
{{- range $.Site.Data.breakpoints }}
- `.float{{ .abbr }}-start`
- `.float{{ .abbr }}-end`
- `.float{{ .abbr }}-none`
{{- end -}}
{{< /float.inline >}}
{{< /markdown >}}

{{< example >}}
<div class="float-sm-start">Float start on viewports sized SM (small) or wider</div><br>
<div class="float-md-start">Float start on viewports sized MD (medium) or wider</div><br>
<div class="float-lg-start">Float start on viewports sized LG (large) or wider</div><br>
<div class="float-xl-start">Float start on viewports sized XL (extra-large) or wider</div><br>
{{< /example >}}
