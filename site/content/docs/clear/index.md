---
layout: docs
title: Clear
description: "Utilities for controlling the wrapping of content around an element."
toc: true
status: new
group: layout
menu:
  docs:    
---

## Quick reference

{{< class-api "clear" >}}

## Basic usage

### Clearing left-floated elements

Use `clear-start` to position an element below any preceding left-floated elements.

{{< example show_source="false" >}}
  <div class="float-start mb-3">
    <div class="ratio ratio-16x9" style="width: 176px;">
      <img class="img-fluid rounded" src="https://images.unsplash.com/photo-1554629947-334ff61d85dc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=320&q=80" />
    </div>
  </div>
  <div class="float-end mb-3 ms-3">
    <div class="ratio ratio-16x9" style="width:256px;">
      <img class="img-fluid rounded" src="https://images.unsplash.com/photo-1554629947-334ff61d85dc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=320&q=80" />
    </div>
  </div>
  <p class="clear-start">Maybe we can live without libraries, people like you and me. Maybe. Sure, we're too old to change the world, but what about that kid, sitting down, opening a book, right now, in a branch at the local library and finding drawings of pee-pees and wee-wees on the Cat in the Hat and the Five Chinese Brothers? Doesn't HE deserve better? Look. If you think this is about overdue fines and missing books, you'd better think again. This is about that kid's right to read a book without getting his mind warped! Or: maybe that turns you on, Seinfeld; maybe that's how y'get your kicks. You and your good-time buddies.
  </p>
{{</ example >}}

```html
<img class="float-left ..." src="path/to/image.jpg">
<img class="float-right ..." src="path/to/image.jpg">
<p class="clear-left ...">Maybe we can live without libraries...</p>
```

### Clearing right-floated elements

Use `clear-end` to position an element below any preceding right-floated elements.

{{< example show_source="false" >}}
<div class="float-end mb-3">
  <div class="ratio ratio-16x9" style="width: 176px;">
    <img class="img-fluid rounded" src="https://images.unsplash.com/photo-1554629947-334ff61d85dc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=320&q=80" />
  </div>
</div>
<div class="float-start mb-3 me-3">
  <div class="ratio ratio-16x9" style="width:256px;">
    <img class="img-fluid rounded" src="https://images.unsplash.com/photo-1554629947-334ff61d85dc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=320&q=80" />
  </div>
</div>
<p class="clear-end">Maybe we can live without libraries, people like you and me. Maybe. Sure, we're too old to change the world, but what about that kid, sitting down, opening a book, right now, in a branch at the local library and finding drawings of pee-pees and wee-wees on the Cat in the Hat and the Five Chinese Brothers? Doesn't HE deserve better? Look. If you think this is about overdue fines and missing books, you'd better think again. This is about that kid's right to read a book without getting his mind warped! Or: maybe that turns you on, Seinfeld; maybe that's how y'get your kicks. You and your good-time buddies.
</p>
{{</ example >}}

```html
<img class="float-left ..." src="path/to/image.jpg">
<img class="float-right ..." src="path/to/image.jpg">
<p class="clear-right ...">Maybe we can live without libraries...</p>
```

### Clearing all floated elements

Use `clear-both` to position an element below all preceding floated elements.

{{< example show_source="false" >}}
<div class="float-start mb-3">
  <div class="ratio ratio-16x9" style="width: 176px;">
    <img class="img-fluid rounded" src="https://images.unsplash.com/photo-1554629947-334ff61d85dc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=320&q=80" />
  </div>
</div>
<div class="float-end mb-3">
  <div class="ratio ratio-16x9" style="width:256px;">
    <img class="img-fluid rounded" src="https://images.unsplash.com/photo-1554629947-334ff61d85dc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=320&q=80" />
  </div>
</div>
<p class="clear-both">Maybe we can live without libraries, people like you and me. Maybe. Sure, we're too old to change the world, but what about that kid, sitting down, opening a book, right now, in a branch at the local library and finding drawings of pee-pees and wee-wees on the Cat in the Hat and the Five Chinese Brothers? Doesn't HE deserve better? Look. If you think this is about overdue fines and missing books, you'd better think again. This is about that kid's right to read a book without getting his mind warped! Or: maybe that turns you on, Seinfeld; maybe that's how y'get your kicks. You and your good-time buddies.
</p>
{{</ example >}}

```html
<img class="float-left ..." src="path/to/image.jpg">
<img class="float-right ..." src="path/to/image.jpg">
<p class="clear-both ...">Maybe we can live without libraries...</p>
```

### Disabling clears

Use `clear-none` to reset any clears that are applied to an element. This is the default value for the clear property.

{{< example show_source="false" >}}
<div class="float-start mb-3 me-3">
  <div class="ratio ratio-16x9" style="width: 176px;">
    <img class="img-fluid rounded" src="https://images.unsplash.com/photo-1554629947-334ff61d85dc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=320&q=80" />
  </div>
</div>
<div class="float-end mb-3 ms-3">
  <div class="ratio ratio-16x9" style="width:256px;">
    <img class="img-fluid rounded" src="https://images.unsplash.com/photo-1554629947-334ff61d85dc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=320&q=80" />
  </div>
</div>
<p class="clear-none">Maybe we can live without libraries, people like you and me. Maybe. Sure, we're too old to change the world, but what about that kid, sitting down, opening a book, right now, in a branch at the local library and finding drawings of pee-pees and wee-wees on the Cat in the Hat and the Five Chinese Brothers? Doesn't HE deserve better? Look. If you think this is about overdue fines and missing books, you'd better think again. This is about that kid's right to read a book without getting his mind warped! Or: maybe that turns you on, Seinfeld; maybe that's how y'get your kicks. You and your good-time buddies.
</p>
{{</ example >}}

```html
<img class="float-left ..." src="path/to/image.jpg">
<img class="float-right ..." src="path/to/image.jpg">
<p class="clear-none ...">Maybe we can live without libraries...</p>
```

## Breakpoints

All clear utilities that supports responsive at specific [breakpoints]({{< docsref "breakpoints" >}}), using the following format `clear-{breakpoint}-{value}` for `xs`, `sm`, `md`, `lg`, `xl`, and `xxl`.

For example, use `clear-md-none` to apply the `clear-none` at only medium screen sizes and above.

```html
<p class="clear-left clear-md-none">
  <!-- ... -->
</p>
```