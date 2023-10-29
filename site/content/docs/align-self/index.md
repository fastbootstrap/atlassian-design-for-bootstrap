---
layout: docs
title: Align Self
description: "Utilities for controlling how an individual flex or grid item is positioned along its container's cross axis."
toc: true
group: flexbox
menu:
  docs:    
    weight: 120
---

Use `align-self` utilities on flexbox items to individually change their alignment on the cross axis (the y-axis to start, x-axis if `flex-direction: column`). Choose from the same options as `align-items`: `start`, `end`, `center`, `baseline`, or `stretch` (browser default).

## Quick reference

{{< class-api "align-self" >}}

## Basic usage

### Auto

Use `align-self-auto` to align an item based on the value of the container’s `align-items` property:

{{< example class="fs-sm fw-semibold" show_source="false" >}}
  <div class="d-flex align-self-stretch gap-4 bg-striped-purple rounded w-100 bd-h-24">
    <div class="d-flex flex-fill align-items-center justify-content-center p-4 rounded bg-purple-subtler text-white">01</div>
    <div class="align-self-auto d-flex flex-fill align-items-center justify-content-center p-4 rounded text-bg-purple">02</div>
    <div class="d-flex flex-fill align-items-center justify-content-center p-4 rounded bg-purple-subtler text-white">03</div>
  </div>
{{</ example >}}

```html
<div class="d-flex align-items-stretch gap-4">
  <div>01</div>
  <div class="align-self-auto ...">02</div>
  <div>03</div>
</div>
```

### Start

Use `align-self-start` to align an item to the start of the container’s cross axis, despite the container’s `align-items` value:

{{< example class="fs-sm fw-semibold" show_source="false" >}}
  <div class="d-flex align-self-stretch gap-4 bg-striped-purple rounded w-100 bd-h-24">
    <div class="d-flex flex-fill align-items-center justify-content-center p-4 rounded bg-purple-subtler text-white">01</div>
    <div class="align-self-start d-flex flex-fill align-items-center justify-content-center p-4 rounded text-bg-purple">02</div>
    <div class="d-flex flex-fill align-items-center justify-content-center p-4 rounded bg-purple-subtler text-white">03</div>
  </div>
{{</ example >}}

```html
<div class="d-flex align-items-stretch gap-4">
  <div>01</div>
  <div class="align-self-start ...">02</div>
  <div>03</div>
</div>
```

### Center

Use `align-self-center` to align an item along the center of the container’s cross axis, despite the container’s `align-items` value:

{{< example class="fs-sm fw-semibold" show_source="false" >}}
  <div class="d-flex align-self-stretch gap-4 bg-striped-purple rounded w-100 bd-h-24">
    <div class="d-flex flex-fill align-items-center justify-content-center p-4 rounded bg-purple-subtler text-white">01</div>
    <div class="align-self-center d-flex flex-fill align-items-center justify-content-center p-4 rounded text-bg-purple">02</div>
    <div class="d-flex flex-fill align-items-center justify-content-center p-4 rounded bg-purple-subtler text-white">03</div>
  </div>
{{</ example >}}

```html
<div class="d-flex align-items-stretch ...">
  <div>01</div>
  <div class="align-self-center ...">02</div>
  <div>03</div>
</div>
```

### End

Use `align-self-end` to align an item to the end of the container’s cross axis, despite the container’s `align-items` value:

{{< example class="fs-sm fw-semibold" show_source="false" >}}
  <div class="d-flex align-self-stretch gap-4 bg-striped-purple rounded w-100 bd-h-24">
    <div class="d-flex flex-fill align-items-center justify-content-center p-4 rounded bg-purple-subtler text-white">01</div>
    <div class="align-self-end d-flex flex-fill align-items-center justify-content-center p-4 rounded text-bg-purple">02</div>
    <div class="d-flex flex-fill align-items-center justify-content-center p-4 rounded bg-purple-subtler text-white">03</div>
  </div>
{{</ example >}}

```html
<div class="d-flex align-items-stretch ...">
  <div>01</div>
  <div class="align-self-end ...">02</div>
  <div>03</div>
</div>
```

### Stretch

Use `align-self-stretch` to stretch an item to fill the container’s cross axis, despite the container’s `align-items` value. This is the browser default behavior.

{{< example class="fs-sm fw-semibold" show_source="false" >}}
  <div class="d-flex align-self-stretch gap-4 bg-striped-purple rounded w-100 bd-h-24">
    <div class="d-flex flex-fill align-items-center justify-content-center p-4 rounded bg-purple-subtler text-white">01</div>
    <div class="align-self-stretch d-flex flex-fill align-items-center justify-content-center p-4 rounded text-bg-purple">02</div>
    <div class="d-flex flex-fill align-items-center justify-content-center p-4 rounded bg-purple-subtler text-white">03</div>
  </div>
{{</ example >}}

```html
<div class="d-flex align-items-stretch ...">
  <div>01</div>
  <div class="align-self-stretch ...">02</div>
  <div>03</div>
</div>
```


## Breakpoints

All `align-self` utilities that supports responsive at specific [breakpoints]({{< docsref "breakpoints" >}}), from `xs` to `xxl`, have no breakpoint abbreviation in them. 

The responsive classes are named using the format `align-self-{breakpoint}-{value}`.

{{< markdown >}}
{{< flex.inline >}}
{{- range $.Site.Data.breakpoints }}
{{- if ne .abbr "" }}
- `.align-self{{ .abbr }}-auto`
- `.align-self{{ .abbr }}-start`
- `.align-self{{ .abbr }}-end`
- `.align-self{{ .abbr }}-center`
- `.align-self{{ .abbr }}-baseline`
- `.align-self{{ .abbr }}-stretch`
{{- end -}}
{{- end -}}
{{< /flex.inline >}}
{{< /markdown >}}

For example, use `align-self-md-end` to apply the `align-self-end` utility at only medium screen sizes and above.

```html
<div class="align-self-auto align-self-md-end">
  <!-- ... -->
</div>
```