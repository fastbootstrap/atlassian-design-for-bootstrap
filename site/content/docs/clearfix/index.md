---
layout: docs
title: Clearfix
description: "Quickly and easily clear floated content within a container."
toc: true
group: layout
menu:
  docs:    
---

Easily clear `float`s by adding `.clearfix` to the parent element.

{{< bs-table "table api-class-table" >}}
| Class | Properties |
| --- | --- |
| <code>.clearfix</code> | <span class="desc">&::after {<br/><span class="ms-3">display: block;</span><br/><span class="ms-3">clear: both;</span><br/><span class="ms-3">content: '';</span><br/>}</span> |
{{< /bs-table >}}

## Basic usage

The following example shows how the clearfix can be used. Without the clearfix the wrapping div would not span around the buttons which would cause a broken layout.

### Disable clears

{{< example show_source="false" >}}
<div class="clearfix">
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
</div>
<p>Maybe we can live without libraries, people like you and me. Maybe. Sure, we're too old to change the world, but what about that kid, sitting down, opening a book, right now, in a branch at the local library and finding drawings of pee-pees and wee-wees on the Cat in the Hat and the Five Chinese Brothers? Doesn't HE deserve better? Look. If you think this is about overdue fines and missing books, you'd better think again. This is about that kid's right to read a book without getting his mind warped! Or: maybe that turns you on, Seinfeld; maybe that's how y'get your kicks. You and your good-time buddies.
</p>
{{</ example >}}

```html
<div class="clearfix">
  <img class="float-left ..." src="path/to/image.jpg">
  <img class="float-right ..." src="path/to/image.jpg">
</div>
<p>Maybe we can live without libraries...</p>
```