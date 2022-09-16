---
layout: docs
title: Text Decoration
description: "Utilities for controlling the decoration of text."
toc: true
group: typography
menu:
  docs:    
---

Decorate text in components with text decoration classes.

{{< class-api "text-decoration" >}}

## Basic usage

### Setting the text decoration

Control how text is decorated with the `text-decoration-underline`, `text-decoration-none`, and `text-decoration-line-through` utilities.

<div class="bd-example">
  <span class="text-muted">text-decoration-underline</span>
  <p class="text-decoration-underline fw-semibold">The quick brown fox jumps over the lazy dog.</p>
  <span class="text-muted">text-decoration-line-through</span>
  <p class="text-decoration-line-through fw-semibold">The quick brown fox jumps over the lazy dog.</p>
  <span class="text-muted">text-decoration-overline</span>
  <p class="text-decoration-overline fw-semibold">The quick brown fox jumps over the lazy dog.</p>
  <span class="text-muted">text-decoration-none</span>
  <p class="text-decoration-none fw-semibold">The quick brown fox jumps over the lazy dog.</p>
</div>

```html
<p class="text-decoration-underline ...">The quick brown fox ...</p>
<p class="text-decoration-line-through ...">The quick brown fox ...</p>
<p class="text-decoration-overline ...">The quick brown fox ...</p>
<p class="text-decoration-none ...">The quick brown fox ...</p>
```

### Remove underline from link

Remove the link underline when mouse on `<a>` element using `text-decoration-none`.

{{< example >}}
<a href="#" class="text-decoration-none">This link has its text decoration removed</a>
{{</ example >}}