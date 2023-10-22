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

### Basic usage

### Italicizing text

The `fst-italic` utility can be used to make text italic. Likewise, the `fst-normal` utility can be used to display text normally — typically to reset italic text at different breakpoints.

{{< example class="bg-grid-slate-100 bg-neutral-subtler" show_source="false" >}}
<div class="d-flex flex-column gap-5">
  <div>
    <span class="text-muted fs-sm fw-semibold mb-3 font-monospace">fst-italic</span>
    <p class="fst-italic fs-5 fw-semibold">The quick brown fox jumps over the lazy dog.</p>
  </div>
  <div>
    <span class="text-muted mb-3 fs-sm fw-semibold font-monospace">fst-normal</span>
    <p class="fst-normal fs-5 fw-semibold">The quick brown fox jumps over the lazy dog.</p>
  </div>
</div>
{{</ example >}}

```html
<p class="fst-italic ...">The quick brown fox ...</p>
<p class="fst-normal ...">The quick brown fox ...</p>
```