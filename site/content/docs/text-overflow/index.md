---
layout: docs
title: Text Overflow
description: "Utilities for controlling text overflow in an element."
toc: true
group: typography
menu:
  docs:
---


## Quick reference

{{< class-api "text-overflow" >}}

## Basic usage

### Truncate

Use `text-truncate` to truncate overflowing text with an ellipsis (`…`) if needed. 

Only working for `display: inline-block` or `display: block`.

{{< example >}}
<p class="text-truncate" style="width:120px;">
    This text is quite long, and will be truncated once displayed.
</p>
{{</ example >}}

{{< example >}}
<div class="col-3 text-truncate" style="width:120px;">
    This text is quite long, and will be truncated once displayed.
</div>
{{</ example >}}

### Ellipsis

Use `text-ellipsis` to truncate overflowing text with an ellipsis (`…`) if needed.

<div class="bd-example">
  <div class="p-4 shadow-sm mx-auto " style="width:320px;">
    <p class="text-ellipsis overflow-hidden">
      The longest word in any of the major English language dictionaries is
      <span class="fw-semibold">pneumonoultramicroscopicsilicovolcanoconiosis,</span>
      a word that refers to a lung disease contracted from the inhalation of very fine silica particles, specifically from a volcano; medically, it is the same as silicosis.
    </p>
  </div>
</div>


```html
<p class="text-ellipsis overflow-hidden ...">...</p>
```

### Clip

Use `text-clip` to truncate the text at the limit of the content area.

<div class="bd-example">
  <div class="p-4 shadow-sm mx-auto " style="width:320px;">
    <p class="text-clip overflow-hidden">
      The longest word in any of the major English language dictionaries is
      <span class="fw-semibold">pneumonoultramicroscopicsilicovolcanoconiosis,</span>
      a word that refers to a lung disease contracted from the inhalation of very fine silica particles, specifically from a volcano; medically, it is the same as silicosis.
    </p>
  </div>
</div>

```html
<p class="text-clip overflow-hidden ...">...</p>
```