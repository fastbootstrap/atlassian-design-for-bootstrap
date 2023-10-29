---
layout: docs
title: Animation
description: "Utilities for animating elements with CSS animations."
toc: true
status: new
group: animation
menu:
  docs:    
---

## Quick reference

{{< class-api "animation" >}}

## Basic usage
​
### Spin

Add the `animate-spin` utility to add a linear spin animation to elements like loading indicators.

{{< example class="bg-neutral-subtler bg-grid-slate-100 text-center" show_source="false" >}}
  <button type="button" class="btn btn-primary fw-semibold pe-none">
    <i class="animate-spin fas fa-spinner"></i>
    Processing...
  </button>
{{</ example >}}

```html
<button type="button" class="btn btn-primary ...">
  <i class="animate-spin fas fa-spinner"></i>
  Processing...
</button>
```

### Ping

Add the `animate-ping` utility to make an element scale and fade like a radar ping or ripple of water — useful for things like notification [badges]({{< docsref "badge" >}}).

{{< example class="bg-neutral-subtler bg-grid-slate-100 text-center" >}}
  <div class="position-relative d-inline-flex">
    <button type="button" class="btn btn-outline-primary pe-none fw-semibold ">Transactions</button>
    <span class="d-flex position-absolute bd-h-3 bd-w-3 top-0 end-0 mt-n1 me-n1">
      <span class="animate-ping position-absolute h-100 w-100 rounded-circle bg-primary bg-opacity-75"></span>
      <span class="rounded-circle bd-h-3 bd-w-3 bg-primary"></span>
    </span>
  </div>
{{</ example >}}

### Pulse

Add the `animate-pulse` utility to make an element gently fade in and out — useful for things like [skeleton loaders]({{< docsref "placeholders" >}}).

{{< example class="bg-neutral-subtler bg-grid-slate-100 text-center" >}}
<div class="max-w-sm mx-auto bg-body rounded">
  <div class="animate-pulse d-flex align-items-start shadow p-3">
    <span class="placeholder rounded-circle bd-h-10 bd-w-10"></span>
    <div class="ms-3 flex-grow-1">
      <span class="placeholder placeholder-xs col-10"></span>
      <span class="placeholder placeholder-xs col-6 mt-3"></span>
      <span class="placeholder placeholder-xs col-4 mt-3"></span>
      <span class="placeholder placeholder-xs col-12"></span>
    </div>
  </div>
</div>
{{</ example >}}

### Bounce

Add the `animate-bounce` utility to make an element bounce up and down — useful for things like “scroll down” indicators.

{{< example class="bg-neutral-subtler bg-grid-slate-100 text-center" show_source="false" >}}
  <div class="animate-bounce bd-w-10 bd-h-10 d-inline-flex justify-content-center align-items-center rounded-circle shadow text-bg-primary">
    <i class="fas fa-arrow-down fa-lg"></i>
  </div>
{{</ example>}}

```html
<div class="animate-bounce ...">
  <i class="fas fa-arrow-down fa-lg"></i>
</div>
```