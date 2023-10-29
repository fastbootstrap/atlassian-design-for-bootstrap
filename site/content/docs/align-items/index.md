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

{{< example class="fs-sm fw-semibold" show_source="false" >}}
  <div class="d-flex align-items-stretch gap-4 bg-striped-purple rounded w-100">
    <div class="d-flex flex-fill align-items-center justify-content-center py-2 rounded text-bg-purple">01</div>
    <div class="d-flex flex-fill align-items-center justify-content-center py-6 rounded text-bg-purple">02</div>
    <div class="d-flex flex-fill align-items-center justify-content-center py-5 rounded text-bg-purple">03</div>
  </div>
{{</ example >}}

```html
<div class="d-flex align-items-stretch gap-4">
  <div class="py-2">01</div>
  <div class="py-6">02</div>
  <div class="py-5">03</div>
</div>
```

### Start

Use `align-items-start` to align items to the start of the container’s cross axis:

{{< example class="fs-sm fw-semibold" show_source="false" >}}
  <div class="d-flex align-items-start gap-4 bg-striped-purple rounded w-100">
    <div class="d-flex flex-fill align-items-center justify-content-center py-2 rounded text-bg-purple">01</div>
    <div class="d-flex flex-fill align-items-center justify-content-center py-6 rounded text-bg-purple">02</div>
    <div class="d-flex flex-fill align-items-center justify-content-center py-5 rounded text-bg-purple">03</div>
  </div>
{{</ example >}}

```html
<div class="d-flex align-items-start gap-4">
  <div class="py-2">01</div>
  <div class="py-6">02</div>
  <div class="py-5">03</div>
</div>
```

### Center

Use `align-items-center` to align items along the center of the container’s cross axis:


{{< example class="fs-sm fw-semibold" show_source="false" >}}
  <div class="d-flex align-items-center gap-4 bg-striped-purple rounded w-100">
    <div class="d-flex flex-fill align-items-center justify-content-center py-2 rounded text-bg-purple">01</div>
    <div class="d-flex flex-fill align-items-center justify-content-center py-6 rounded text-bg-purple">02</div>
    <div class="d-flex flex-fill align-items-center justify-content-center py-5 rounded text-bg-purple">03</div>
  </div>
{{</ example >}}

```html
<div class="d-flex align-items-center ...">
  <div class="py-2">01</div>
  <div class="py-6">02</div>
  <div class="py-5">03</div>
</div>
```

### End

Use `align-items-end` to align items to the end of the container’s cross axis:

{{< example class="fs-sm fw-semibold" show_source="false" >}}
  <div class="d-flex align-items-end gap-4 bg-striped-purple rounded w-100">
    <div class="d-flex flex-fill align-items-center justify-content-center py-2 rounded text-bg-purple">01</div>
    <div class="d-flex flex-fill align-items-center justify-content-center py-6 rounded text-bg-purple">02</div>
    <div class="d-flex flex-fill align-items-center justify-content-center py-5 rounded text-bg-purple">03</div>
  </div>
{{</ example >}}

```html
<div class="d-flex align-items-end ...">
  <div class="py-2">01</div>
  <div class="py-6">02</div>
  <div class="py-5">03</div>
</div>
```

### Baseline

Use `align-items-baseline` to align items along the container’s cross axis such that all of their baselines align:

{{< example class="fs-sm fw-semibold" show_source="false" >}}
  <div class="d-flex align-items-baseline gap-4 bg-striped-purple rounded w-100">
    <div class="d-flex flex-fill align-items-center justify-content-center pt-2 pb-4 rounded text-bg-purple">01</div>
    <div class="d-flex flex-fill align-items-center justify-content-center pt-6 pb-5 rounded text-bg-purple">02</div>
    <div class="d-flex flex-fill align-items-center justify-content-center pt-5 pb-3 rounded text-bg-purple">03</div>
  </div>
{{</ example >}}

```html
<div class="d-flex align-items-baseline gap-4">
  <div class="pt-2 pb-4">01</div>
  <div class="pt-6 pb-5">02</div>
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