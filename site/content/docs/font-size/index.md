---
layout: docs
title: Font Size
description: "Utilities for controlling the font size of an element."
toc: true
group: typography
menu:
  docs:    
---

Quickly change the `font-size` of text. While our heading classes (e.g., `.h1`–`.h6`) apply `font-size`, `font-weight`, and `line-height`, these utilities only apply `font-size`. Sizing for these utilities matches HTML’s heading elements, so as the number increases, their size decreases.

## Quick reference

{{< class-api "font-size" true >}}

## Basic usage

### Setting the font size

Control the font size of an element using the `fs-{size}` utilities.

{{< example class="bg-grid-slate-100" show_source="false" >}}
<div class="d-flex flex-column gap-5">
  <div>
    <span class="text-muted fs-sm fw-medium mb-3">fs-sm</span>
    <p class="fs-sm fw-semibold">The quick brown fox jumps over the lazy dog.</p>
  </div>
  <div>
    <span class="text-muted fs-sm fw-medium mb-3">fs-6</span>
    <p class="fs-6 fw-semibold">The quick brown fox jumps over the lazy dog.</p>
  </div>
  <div>
    <span class="text-muted fs-sm fw-medium mb-3">fs-5</span>
    <p class="fs-5 fw-semibold">The quick brown fox jumps over the lazy dog.</p>
  </div>
  <div>
    <span class="text-muted fs-sm fw-medium mb-3">fs-4</span>
    <p class="fs-4 fw-semibold">The quick brown fox jumps over the lazy dog.</p>
  </div>
  <div>
    <span class="text-muted fs-sm fw-medium mb-3">fs-3</span>
    <p class="fs-3 fw-semibold">The quick brown fox jumps over the lazy dog.</p>
  </div>
</div>
{{</ example >}}

```html
<p class="fs-sm ...">The quick brown fox ...</p>
<p class="fs-6 ...">The quick brown fox ...</p>
<p class="fs-5 ...">The quick brown fox ...</p>
<p class="fs-4 ...">The quick brown fox ...</p>
<p class="fs-3 ...">The quick brown fox ...</p>
```


### Lead

Make a paragraph stand out by adding `.lead`.

{{< example class="bg-grid-slate-100" >}}
<p class="lead">
  This is a lead paragraph. It stands out from regular paragraphs.
</p>
{{</ example >}}

## Headings

Use the `<h1> ~ <h6>`HTML tag or the `.h1 ~ .h6` utilities to scale the font size, weight and line height of an element.

{{< example class="bg-grid-slate-100">}}
  <h1>h1. Bootstrap heading</h1>
  <h2>h2. Bootstrap heading</h2>
  <h3>h3. Bootstrap heading</h3>
  <h4>h4. Bootstrap heading</h4>
  <h5>h5. Bootstrap heading</h5>
  <h6>h6. Bootstrap heading</h6>
{{</ example >}}

Use the `.h1 ~ .h6` classes for when you want to match the font styling of a heading but cannot use the associated HTML element.

{{< example class="bg-grid-slate-100" >}}
<p class="h1">h1. Bootstrap heading</p>
<p class="h2">h2. Bootstrap heading</p>
<p class="h3">h3. Bootstrap heading</p>
<p class="h4">h4. Bootstrap heading</p>
<p class="h5">h5. Bootstrap heading</p>
<p class="h6">h6. Bootstrap heading</p>
{{</ example >}}

### Display headings

Traditional heading elements are designed to work best in the meat of your page content. 

When you need a heading to stand out, consider using a display heading — a larger, slightly more opinionated heading style using the `display-{size}` utilities.

{{< example >}}
<h1 class="display-1">Display 1</h1>
<h1 class="display-2">Display 2</h1>
<h1 class="display-3">Display 3</h1>
<h1 class="display-4">Display 4</h1>
<h1 class="display-5">Display 5</h1>
<h1 class="display-6">Display 6</h1>
{{</ example >}}

## Responsive font sizes 

In Bootstrap 5, we’ve enabled responsive font sizes by default, allowing text to scale more naturally across device and viewport sizes. Have a look at the [RFS page](https://getbootstrap.com/docs/5.2/getting-started/rfs/) to find out how this works.