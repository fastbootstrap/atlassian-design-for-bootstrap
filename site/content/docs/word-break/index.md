---
layout: docs
title: Word Break
description: "Utilities for controlling word breaks in an element."
toc: true
group: typography
menu:
  docs:    
---

## Quick reference 

{{< class-api "word-wrap,word-break" >}}

## Basic usage

Prevent long strings of text from breaking your components’ layout by using `.text-break` to set `word-wrap: break-word` and `word-break: break-word`. We use `word-wrap` instead of the more common `overflow-wrap` for wider browser support, and add the deprecated `word-break: break-word` to avoid issues with flex containers.


### Normal

Use `break-normal` to only add line breaks at normal word break points.

{{< example class="bg-neutral-subtler bg-grid-slate-100" show_source="false" >}}
  <div class="bg-body mx-auto max-w-sm p-8 shadow-lg border rounded">
    <p class="break-normal ls-wide">
      The longest word in any of the major English language dictionaries is <span class="fw-semibold">pneumonoultramicroscopicsilicovolcanoconiosis</span>, a word that refers to a lung disease contracted from the
      inhalation of very fine silica particles, specifically from a volcano; medically, it is the same as silicosis.
    </p>
  </div>
{{</ example >}}

```html
<p class="break-normal ...">...</p>
```

### Break Words

Use `text-break` to add line breaks mid-word if needed.

{{< example class="bg-neutral-subtler bg-grid-slate-100" show_source="false" >}}
  <div class="bg-body mx-auto max-w-sm p-8 shadow-lg border rounded">
    <p class="text-break ls-wide">
      The longest word in any of the major English language dictionaries is <span class="fw-semibold">pneumonoultramicroscopicsilicovolcanoconiosis</span>, a word that refers to a lung disease contracted from the
      inhalation of very fine silica particles, specifically from a volcano; medically, it is the same as silicosis.
    </p>
  </div>
{{</ example >}}

```html
<p class="text-break ...">...</p>
```