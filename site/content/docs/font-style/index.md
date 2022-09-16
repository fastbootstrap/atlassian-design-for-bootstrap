---
layout: docs
title: Font Style
description: "Utilities for controlling the font style of an element."
toc: true
group: typography
menu:
  docs:    
---

Quickly change the `font-style` of text using the font style utilities. 

## Quick reference

{{< class-api "font-style" >}}

### Basic examples

### Italicizing text

The `fst-italic` utility can be used to make text italic. Likewise, the `fst-normal` utility can be used to display text normally — typically to reset italic text at different breakpoints.

<div class="bd-example">
  <span class="text-muted">fst-italic</span>
  <p class="fst-italic fs-5 fw-semibold">The quick brown fox jumps over the lazy dog.</p>
  <span class="text-muted">fst-normal</span>
  <p class="fst-normal fs-5 fw-semibold">The quick brown fox jumps over the lazy dog.</p>
</div>

```html
<p class="fst-italic ...">The quick brown fox ...</p>
<p class="fst-normal ...">The quick brown fox ...</p>
```