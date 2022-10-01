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

<div class="bd-example flex-column d-flex gap-2">
  <span>ls-tight</span>
  <p class="ls-tight fw-semibold fs-5">The quick brown fox jumps over the lazy dog.</p>
  <span>ls-normal</span>
  <p class="ls-normal fw-semibold fs-5">The quick brown fox jumps over the lazy dog.</p>
  <span>ls-wide</span>
  <p class="ls-wide fw-semibold fs-5">The quick brown fox jumps over the lazy dog.</p>
</div>

```html
<p class="ls-tight ...">The quick brown fox ...</p>
<p class="ls-normal ...">The quick brown fox ...</p>
<p class="ls-wide ...">The quick brown fox ...</p>
```