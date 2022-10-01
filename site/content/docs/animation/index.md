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

<div class="bd-example d-flex justify-content-center">
  <button type="button" class="btn btn-secondary fw-semibold pe-none">
    <i class="animate-spin fas fa-spinner"></i>
    Processing...
  </button>
</div>

```html
<button type="button" class="btn btn-secondary ...">
  <i class="animate-spin fas fa-spinner"></i>
  Processing...
</button>
```

### Ping

Add the `animate-ping` utility to make an element scale and fade like a radar ping or ripple of water — useful for things like notification [badges]({{< docsref "badge" >}}).

<div class="bd-example d-flex justify-content-center">
  <div class="position-relative d-inline-flex">
    <button type="button" class="btn btn-default text-blue-400 pe-none fw-semibold border">Transactions</button>
    <div class="position-absolute bd-h-3 bd-w-3 top-0 end-0 mt-n1 me-n1">
      <span class="animate-ping position-absolute h-100 w-100 rounded-circle bg-teal-200"></span>
      <span class="d-flex rounded-circle bd-h-3 bd-w-3 bg-teal-300"></span>
    </div>
  </div>
</div>

```html
<div class="position-absolute bd-h-3 bd-w-3 top-0 end-0 mt-n1 me-n1">
  <span class="animate-ping position-absolute h-100 w-100 rounded-circle bg-teal-200"></span>
  <span class="rounded-circle bd-h-3 bd-w-3 bg-teal-300"></span>
</div>
```

### Pulse

Add the `animate-pulse` utility to make an element gently fade in and out — useful for things like [skeleton loaders]({{< docsref "placeholders" >}}).

{{< example >}}
<div class="col-md-5 mx-auto">
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

<div class="bd-example d-flex justify-content-center">
  <div class="animate-bounce bd-w-10 bd-h-10 d-flex justify-content-center align-items-center rounded-circle shadow text-blue-300">
    <i class="fas fa-arrow-down fa-lg"></i>
  </div>
</div>

```html
<div class="animate-bounce ...">
  <i class="fas fa-arrow-down fa-lg"></i>
</div>
```