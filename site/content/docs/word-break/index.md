---
layout: docs
title: Word Break
description: "Utilities for controlling word breaks in an element."
toc: true
group: typography
menu:
  docs:    
---

Prevent long strings of text from breaking your components’ layout by using `.text-break` to set `word-wrap: break-word` and `word-break: break-word`. We use `word-wrap` instead of the more common `overflow-wrap` for wider browser support, and add the deprecated `word-break: break-word` to avoid issues with flex containers.

## Quick reference 

{{< class-api "word-wrap" >}}

## Basic usage

### Normal word break

Without using `text-break`, as normal word break points.

<div class="bd-example">
  <div class="mx-auto shadow p-4" style="max-width:384px">
    <p>
      The longest word in any of the major English language dictionaries is <span class="fw-semibold">pneumonoultramicroscopicsilicovolcanoconiosis</span>, a word that refers to a lung disease contracted from the
      inhalation of very fine silica particles, specifically from a volcano; medically, it is the same as silicosis.
    </p>
  </div>
</div>

### Break Words

Use `text-break` to add line breaks mid-word if needed.

<div class="bd-example">
  <div class="mx-auto shadow p-4" style="max-width:384px">
    <p class="text-break">
      The longest word in any of the major English language dictionaries is <span class="fw-semibold">pneumonoultramicroscopicsilicovolcanoconiosis</span>, a word that refers to a lung disease contracted from the
      inhalation of very fine silica particles, specifically from a volcano; medically, it is the same as silicosis.
    </p>
  </div>
</div>

```html
<p class="text-break ...">...</p>
```