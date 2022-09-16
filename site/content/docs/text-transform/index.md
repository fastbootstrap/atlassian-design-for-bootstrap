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

## Basic example

### Transforming text

The `text-uppercase` and `text-lowercase` will uppercase and lowercase text respectively, whereas `text-capitalize` utility will convert text to title-case. 


<div class="bd-example">
  <span class="text-muted">text-uppercase</span>
  <p class="text-uppercase fw-semibold">The quick brown fox jumps over the lazy dog.</p>
  <span class="text-muted">text-lowercase</span>
  <p class="text-lowercase fw-semibold">The quick brown fox jumps over the lazy dog.</p>
  <span class="text-muted">text-capitalize</span>
  <p class="text-capitalize fw-semibold">The quick brown fox jumps over the lazy dog.</p>
</div>


```html
<p class="text-uppercase ...">The quick brown fox ...</p>
<p class="text-lowercase ...">The quick brown fox ...</p>
<p class="text-capitalize ...">The quick brown fox ...</p>
```