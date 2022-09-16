---
layout: docs
title: Justify Content
description: "Utilities for controlling how flex and grid items are positioned along a container's main axis."
toc: true
group: flexbox
menu:
  docs:    
    weight: 100
---

Use `justify-content` utilities on flexbox containers to change the alignment of flex items on the main axis (the x-axis to start, y-axis if flex-direction: column). Choose from `start` (browser default), `end`, `center`, `between`, `around`, or `evenly`.

## Quick reference

{{< class-api "justify-content" >}}

## Basic usage

### Start

Use `justify-content-start` to justify items against the start of the container’s main axis:

<div class="bd-example">
  <div class="d-flex fw-semibold gap-3 fs-sm justify-content-start">
    <div class="bd-w-14 bd-h-14 d-flex align-items-center justify-content-center rounded bg-purple-300 text-white">01</div>
    <div class="bd-w-14 bd-h-14 d-flex align-items-center justify-content-center rounded bg-purple-300 text-white">02</div>
    <div class="bd-w-14 bd-h-14 d-flex align-items-center justify-content-center rounded bg-purple-300 text-white">03</div>
  </div>
</div>

```html
<div class="d-flex justify-content-start ...">
  <div>01</div>
  <div>02</div>
  <div>03</div>
</div>
```

### Center

Use `justify-content-center` to justify items along the center of the container’s main axis:

<div class="bd-example">
  <div class="d-flex fw-semibold gap-3 fs-sm justify-content-center">
    <div class="bd-w-14 bd-h-14 d-flex align-items-center justify-content-center rounded bg-blue-200 text-white">01</div>
    <div class="bd-w-14 bd-h-14 d-flex align-items-center justify-content-center rounded bg-blue-200 text-white">02</div>
    <div class="bd-w-14 bd-h-14 d-flex align-items-center justify-content-center rounded bg-blue-200 text-white">03</div>
  </div>
</div>

```html
<div class="d-flex justify-content-center ...">
  <div>01</div>
  <div>02</div>
  <div>03</div>
</div>
```

### End

Use `justify-content-end` to justify items against the end of the container’s main axis:


<div class="bd-example">
  <div class="d-flex fw-semibold gap-3 fs-sm justify-content-end">
    <div class="bd-w-14 bd-h-14 d-flex align-items-center justify-content-center rounded bg-teal-200 text-white">01</div>
    <div class="bd-w-14 bd-h-14 d-flex align-items-center justify-content-center rounded bg-teal-200 text-white">02</div>
    <div class="bd-w-14 bd-h-14 d-flex align-items-center justify-content-center rounded bg-teal-200 text-white">03</div>
  </div>
</div>

```html
<div class="d-flex justify-content-end ...">
  <div>01</div>
  <div>02</div>
  <div>03</div>
</div>
```

### Space between

Use `justify-content-between` to justify items along the container’s main axis such that there is an equal amount of space between each item:

<div class="bd-example">
  <div class="d-flex fw-semibold gap-3 fs-sm justify-content-between">
    <div class="bd-w-14 bd-h-14 d-flex align-items-center justify-content-center rounded bg-purple-200 text-white">01</div>
    <div class="bd-w-14 bd-h-14 d-flex align-items-center justify-content-center rounded bg-purple-200 text-white">02</div>
    <div class="bd-w-14 bd-h-14 d-flex align-items-center justify-content-center rounded bg-purple-200 text-white">03</div>
  </div>
</div>

```html
<div class="d-flex justify-content-between ...">
  <div>01</div>
  <div>02</div>
  <div>03</div>
</div>
```

### Space around

Use `justify-content-around` to justify items along the container’s main axis such that there is an equal amount of space on each side of each item:

<div class="bd-example">
  <div class="d-flex fw-semibold gap-3 fs-sm justify-content-around">
    <div class="bd-w-14 bd-h-14 d-flex align-items-center justify-content-center rounded bg-blue-200 text-white">01</div>
    <div class="bd-w-14 bd-h-14 d-flex align-items-center justify-content-center rounded bg-blue-200 text-white">02</div>
    <div class="bd-w-14 bd-h-14 d-flex align-items-center justify-content-center rounded bg-blue-200 text-white">03</div>
  </div>
</div>

```html
<div class="d-flex justify-content-around ...">
  <div>01</div>
  <div>02</div>
  <div>03</div>
</div>
```

### Space evenly

Use `justify-content-evenly` to justify items along the container’s main axis such that there is an equal amount of space around each item, but also accounting for the doubling of space you would normally see between each item when using `justify-content-around`:

<div class="bd-example">
  <div class="d-flex fw-semibold gap-3 fs-sm justify-content-evenly">
    <div class="bd-w-14 bd-h-14 d-flex align-items-center justify-content-center rounded bg-teal-200 text-white">01</div>
    <div class="bd-w-14 bd-h-14 d-flex align-items-center justify-content-center rounded bg-teal-200 text-white">02</div>
    <div class="bd-w-14 bd-h-14 d-flex align-items-center justify-content-center rounded bg-teal-200 text-white">03</div>
  </div>
</div>

```html
<div class="d-flex justify-content-evenly ...">
  <div>01</div>
  <div>02</div>
  <div>03</div>
</div>
```

## Breakpoints

All `justify-content` utilities that supports responsive at specific [breakpoints]({{< docsref "breakpoints" >}}), from `xs` to `xxl`, have no breakpoint abbreviation in them. 

The responsive classes are named using the format `justify-content-{breakpoint}-{value}`.

{{< markdown >}}
{{< flex.inline >}}
{{- range $.Site.Data.breakpoints }}
{{- if ne .abbr "" }}
- `.justify-content{{ .abbr }}-start`
- `.justify-content{{ .abbr }}-end`
- `.justify-content{{ .abbr }}-center`
- `.justify-content{{ .abbr }}-between`
- `.justify-content{{ .abbr }}-around`
- `.justify-content{{ .abbr }}-evenly`
{{- end -}}
{{- end -}}
{{< /flex.inline >}}
{{< /markdown >}}

For example, use `justify-content-md-between` to apply the `justify-content-between` utility at only medium screen sizes and above.

```html
<div class="d-flex justify-content-start justify-content-md-between">
  <!-- ... -->
</div>
```