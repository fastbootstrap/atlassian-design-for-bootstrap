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

{{< example class="bg-neutral-subtler bg-grid-slate-100" show_source="false">}}
<div class="max-w-sm mx-auto d-flex align-items-center justify-content-center border shadow-lg bg-body p-8 rounded">
<p class="text-truncate m-0">
   The longest word in any of the major English language dictionaries is <span class="fw-semibold text-dark">pneumonoultramicroscopicsilicovolcanoconiosis,</span> a word that refers to a lung disease contracted from the inhalation of very fine silica particles, specifically from a volcano; medically, it is the same as silicosis.
</p>
</div>
{{</ example >}}

```html
<p class="text-truncate ...">...</p>
```

### Ellipsis

Use `text-ellipsis` to truncate overflowing text with an ellipsis (`…`) if needed.

{{< example class="bg-neutral-subtler bg-grid-slate-100" show_source="false">}}
<div class="max-w-sm mx-auto d-flex align-items-center justify-content-center border shadow-lg bg-body p-8 rounded">
    <p class="text-ellipsis overflow-hidden m-0">
      The longest word in any of the major English language dictionaries is
      <span class="fw-semibold">pneumonoultramicroscopicsilicovolcanoconiosis,</span>
      a word that refers to a lung disease contracted from the inhalation of very fine silica particles, specifically from a volcano; medically, it is the same as silicosis.
    </p>
</div>
{{</ example >}}

```html
<p class="text-ellipsis overflow-hidden ...">...</p>
```

### Clip

Use `text-clip` to truncate the text at the limit of the content area.

{{< example class="bg-neutral-subtler bg-grid-slate-100" show_source="false">}}
<div class="max-w-sm mx-auto d-flex align-items-center justify-content-center border shadow-lg bg-body p-8 rounded">
    <p class="text-clip overflow-hidden m-0">
      The longest word in any of the major English language dictionaries is
      <span class="fw-semibold">pneumonoultramicroscopicsilicovolcanoconiosis,</span>
      a word that refers to a lung disease contracted from the inhalation of very fine silica particles, specifically from a volcano; medically, it is the same as silicosis.
    </p>
  </div>
{{</ example >}}

```html
<p class="text-clip overflow-hidden ...">...</p>
```