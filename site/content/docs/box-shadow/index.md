---
layout: docs
title: Box Shadow
description: "Use the box-shadow utilities to controlling the shadow of an element."
toc: true
group: effects
menu:
  docs:    
---

The `box-shadow` utilities to add or remove the shadow of an element.

{{< class-api "box-shadow" >}}

## Basic usage

While shadows on components are disabled by default in Bootstrap and can be enabled via `$enable-shadows`, you can also quickly add or remove a shadow with our `box-shadow` utility classes. Includes support for `.shadow-none` and three default sizes (which have associated variables to match).

{{< example class="bg-neutral-subtler bg-grid-slate-100 text-center py-0" show_source="false" >}}
<div class="d-flex justify-content-around overflow-x-auto gap-4 py-8">
  <div>
    <p class="fs-sm fw-semibold text-body-tertiary mb-3">shadow-sm</p>
    <div class="shadow-sm bd-w-24 bd-h-24 bg-body rounded"></div>
  </div>
  <div>
    <p class="fs-sm fw-semibold text-body-tertiary mb-3">shadow</p>
    <div class="shadow bd-w-24 bd-h-24 bg-body rounded"></div>
  </div>
  <div>
    <p class="fs-sm fw-semibold text-body-tertiary mb-3">shadow-md</p>
    <div class="shadow-md bd-w-24 bd-h-24 bg-body rounded"></div>
  </div>
  <div>
    <p class="fs-sm fw-semibold text-body-tertiary mb-3">shadow-lg</p>
    <div class="shadow-lg bd-w-24 bd-h-24 bg-body rounded"></div>
  </div>
</div>

{{< /example >}}

```html
<div class="shadow-sm ..."></div>
<div class="shadow ..."></div>
<div class="shadow-md ..."></div>
<div class="shadow-lg ..."></div>
```

### Removing the shadow

Use `shadow-none` to remove an existing box shadow from an element. This is most commonly used to remove a shadow that was applied at a smaller breakpoint.

{{< example class="bg-neutral-subtler bg-grid-slate-100 text-center" show_source="false" >}}
<p class="fs-sm fw-semibold text-body-tertiary mb-3">shadow-none</p>
<div class="shadow-lg shadow-none bd-w-24 bd-h-24 bg-body rounded mx-auto"></div>
{{</ example >}}

```html
<div class="shadow-none ..."></div>
```