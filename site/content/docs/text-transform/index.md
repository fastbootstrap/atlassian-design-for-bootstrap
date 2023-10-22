---
layout: docs
title: Text Transform
description: "Utilities for controlling the transformation of text."
toc: true
group: typography
menu:
  docs:    
---

Transform text in components with text capitalization classes.

{{< class-api "text-transform" >}}

## Basic usage

### Transforming text

The `text-uppercase` and `text-lowercase` will uppercase and lowercase text respectively, whereas `text-capitalize` utility will convert text to title-case. 


{{< example class="bg-neutral-subtler bg-grid-slate-100" show_source="false" >}}
<div class="d-flex flex-column gap-4">
  <div>
    <span class="text-muted fs-sm fw-semibold text-body-tertiary mb-3">text-uppercase</span>
    <p class="text-uppercase fs-5 fw-semibold">The quick brown fox jumps over the lazy dog.</p>
  </div>
  <div>
    <span class="text-muted fs-sm fw-semibold text-body-tertiary mb-3">text-lowercase</span>
    <p class="text-lowercase fs-5 fw-semibold">The quick brown fox jumps over the lazy dog.</p>
  </div>
  <div>
    <span class="text-muted fs-sm fw-semibold text-body-tertiary mb-3">text-capitalize</span>
    <p class="text-capitalize fs-5 fw-semibold">The quick brown fox jumps over the lazy dog.</p>
  </div>
</div>
{{</ example >}}

```html
<p class="text-uppercase ...">...</p>
<p class="text-lowercase ...">...</p>
<p class="text-capitalize ...">...</p>
```