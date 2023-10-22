---
layout: docs
title: Letter Spacing
description: "Utilities for controlling the tracking (letter spacing) of an element."
toc: true
status: new
group: typography
menu:
  docs:    
---

## Quick reference

{{< class-api "letter-spacing" >}}

## Usage

### Setting the letter spacing

Control the letter spacing of an element using the `ls-{size}` utilities.

{{< example class="bg-grid-slate-100" show_source="false" >}}
<div class="d-flex gap-4 flex-column">
  <div>
    <span class="text-muted mb-3 fs-sm fw-semibold">ls-tight</span>
    <p class="ls-tight fw-semibold fs-5">The quick brown fox jumps over the lazy dog.</p>
  </div>
  <div>
    <span class="text-muted mb-3 fs-sm fw-semibold">ls-normal</span>
    <p class="ls-normal fw-semibold fs-5">The quick brown fox jumps over the lazy dog.</p>
  </div>
  <div>
    <span class="text-muted mb-3 fs-sm fw-semibold">ls-wide</span>
    <p class="ls-wide fw-semibold fs-5">The quick brown fox jumps over the lazy dog.</p>
  </div>
</div>
{{</ example >}}

```html
<p class="ls-tight ...">The quick brown fox ...</p>
<p class="ls-normal ...">The quick brown fox ...</p>
<p class="ls-wide ...">The quick brown fox ...</p>
```