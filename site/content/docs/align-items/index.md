---
layout: docs
title: Align Items
description: "Utilities for controlling how flex and grid items are positioned along a container's cross axis."
toc: true
group: flexbox
menu:
  docs:    
    weight: 120
---

Use `align-items` utilities on flexbox containers to change the alignment of flex items on the cross axis (the y-axis to start, x-axis if `flex-direction: column`). Choose from `start`, `end`, `center`, `baseline`, or `stretch` (browser default).

## Quick reference 

{{< class-api "align-items" >}}

## Basic usage

### Stretch

Use `align-items-stretch` to stretch items to fill the container’s cross axis. This is the browser default behavior.

<div class="bd-example">
  <div class="d-flex fw-semibold gap-3 fs-sm align-items-stretch">
    <div class="py-3 d-flex flex-fill align-items-center justify-content-center rounded bg-blue-200 text-white">01</div>
    <div class="py-5 d-flex flex-fill align-items-center justify-content-center rounded bg-blue-200 text-white">02</div>
    <div class="py-2 d-flex flex-fill align-items-center justify-content-center rounded bg-blue-200 text-white">03</div>
  </div>
</div>

```html
<div class="d-flex align-items-stretch ...">
  <div class="py-3">01</div>
  <div class="py-5">02</div>
  <div class="py-2">03</div>
</div>
```

### Start

Use `align-items-start` to align items to the start of the container’s cross axis:

<div class="bd-example">
  <div class="d-flex fw-semibold gap-3 fs-sm align-items-start">
    <div class="py-3 d-flex flex-fill align-items-center justify-content-center rounded bg-blue-200 text-white">01</div>
    <div class="py-5 d-flex flex-fill align-items-center justify-content-center rounded bg-blue-200 text-white">02</div>
    <div class="py-4 d-flex flex-fill align-items-center justify-content-center rounded bg-blue-200 text-white">03</div>
  </div>
</div>

```html
<div class="d-flex align-items-start ...">
  <div class="py-3">01</div>
  <div class="py-5">02</div>
  <div class="py-4">03</div>
</div>
```

### Center

Use `align-items-center` to align items along the center of the container’s cross axis:

<div class="bd-example">
  <div class="d-flex fw-semibold gap-3 fs-sm align-items-center">
    <div class="py-3 d-flex flex-fill align-items-center justify-content-center rounded bg-teal-200 text-white">01</div>
    <div class="py-5 d-flex flex-fill align-items-center justify-content-center rounded bg-teal-200 text-white">02</div>
    <div class="py-4 d-flex flex-fill align-items-center justify-content-center rounded bg-teal-200 text-white">03</div>
  </div>
</div>


```html
<div class="d-flex align-items-center ...">
  <div class="py-3">01</div>
  <div class="py-5">02</div>
  <div class="py-4">03</div>
</div>
```

### End

Use `align-items-end` to align items to the end of the container’s cross axis:

<div class="bd-example">
  <div class="d-flex fw-semibold gap-3 fs-sm align-items-end">
    <div class="py-3 d-flex flex-fill align-items-center justify-content-center rounded text-bg-primary">01</div>
    <div class="py-5 d-flex flex-fill align-items-center justify-content-center rounded text-bg-primary">02</div>
    <div class="py-4 d-flex flex-fill align-items-center justify-content-center rounded text-bg-primary">03</div>
  </div>
</div>

```html
<div class="d-flex align-items-end ...">
  <div class="py-3">01</div>
  <div class="py-5">02</div>
  <div class="py-4">03</div>
</div>
```

### Baseline

Use `align-items-baseline` to align items along the container’s cross axis such that all of their baselines align:

<div class="bd-example">
  <div class="d-flex fw-semibold gap-3 fs-sm align-items-baseline">
    <div class="pt-2 pb-4 d-flex flex-fill align-items-center justify-content-center rounded text-bg-secondary">01</div>
    <div class="pt-4 pb-5 d-flex flex-fill align-items-center justify-content-center rounded text-bg-secondary">02</div>
    <div class="pt-5 pb-3 d-flex flex-fill align-items-center justify-content-center rounded text-bg-secondary">03</div>
  </div>
</div>

```html
<div class="d-flex align-items-baseline ...">
  <div class="pt-2 pb-4">01</div>
  <div class="pt-4 pb-5">02</div>
  <div class="pt-5 pb-3">03</div>
</div>
```

## Breakpoints

All `align-items` utilities that supports responsive at specific [breakpoints]({{< docsref "breakpoints" >}}), from `xs` to `xxl`, have no breakpoint abbreviation in them. 

The responsive classes are named using the format `align-items-{breakpoint}-{value}`.

{{< markdown >}}
{{< flex.inline >}}
{{- range $.Site.Data.breakpoints }}
{{- if ne .abbr "" }}
- `.align-items{{ .abbr }}-start`
- `.align-items{{ .abbr }}-end`
- `.align-items{{ .abbr }}-center`
- `.align-items{{ .abbr }}-baseline`
- `.align-items{{ .abbr }}-stretch`
{{- end -}}
{{- end -}}
{{< /flex.inline >}}
{{< /markdown >}}

For example, use `align-items-md-center` to apply the `items-center` utility at only medium screen sizes and above.

```html
<div class="d-flex align-items-stretch align-items-md-center">
  <!-- ... -->
</div>
```