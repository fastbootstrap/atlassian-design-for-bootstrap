---
layout: docs
title: Rotate
description: "Utilities for rotating elements with transform."
toc: true
group: transforms
status: new
menu:
  docs:    
---

## Quick reference

{{< class-api "rotate" >}}

## Basic usage

### Rotating an element

Use the `rotate-{angle}` utilities to rotate an element.
<div class="bd-example">
  <div class="d-flex flex-wrap gap-5 justify-content-around">
    <div class="text-center">
      <p class="mb-5 mb-lg-6">rotate-0</p>
      <img
        class="bd-w-24 bd-h-24 rotate-0 rounded-3"
        src="https://images.unsplash.com/photo-1554629947-334ff61d85dc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=320&h=320&q=80" />
    </div>
    <div class="text-center">
      <p class="mb-5 mb-lg-6">rotate-45</p>
      <img
        class="bd-w-24 bd-h-24 rotate-45 rounded-3"
        src="https://images.unsplash.com/photo-1554629947-334ff61d85dc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=320&h=320&q=80" />
    </div>
    <div class="text-center">
      <p class="mb-5 mb-lg-6">rotate-90</p>
      <img
        class="bd-w-24 bd-h-24 rotate-90 rounded-3"
        src="https://images.unsplash.com/photo-1554629947-334ff61d85dc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=320&h=320&q=80" />
    </div>
    <div class="text-center">
      <p class="mb-5 mb-lg-6">rotate-180</p>
      <img
        class="bd-w-24 bd-h-24 rotate-180 rounded-3"
        src="https://images.unsplash.com/photo-1554629947-334ff61d85dc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=320&h=320&q=80" />
    </div>
  </div>
</div>

```html
<img class="rotate-0 ...">
<img class="rotate-45 ...">
<img class="rotate-90 ...">
<img class="rotate-180 ...">
```

### Using negative values

To use a negative rotate value, the rotate class with the addition of `n` before the requested angle by the format `rotate-n{angle}`.

```html
<img class="rotate-n45 ...">
```

### Removing transforms

To remove all of the transforms on an element at once, use the `transform-none` utility.