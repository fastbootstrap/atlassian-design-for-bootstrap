---
layout: docs
title: Align Content
description: "Utilities for controlling how rows are positioned in multi-row flex and grid containers."
toc: true
group: flexbox
menu:
  docs:    
    weight: 120
---

Use `align-content` utilities on flexbox containers to align flex items together on the cross axis. Choose from `start` (browser default), `end`, `center`, `between`, `around`, or `stretch`. 

## Quick reference

{{< class-api "align-content" >}}

## Basic usage

### Start

Use `align-content-start` to pack rows in a container against the start of the cross axis:

<div class="bd-example">
    <div class="d-flex flex-wrap align-content-start gap-3 fs-sm bd-h-56 bg-blue-50 text-center">
      <div class="w-25 p-3 rounded bg-blue-300 text-white">01</div>
      <div class="w-25 p-3 rounded bg-blue-300 text-white">02</div>
      <div class="w-25 p-3 rounded bg-blue-300 text-white">03</div>
      <div class="w-25 p-3 rounded bg-blue-300 text-white">04</div>
      <div class="w-25 p-3 rounded bg-blue-300 text-white">05</div>
    </div>
</div>

```html
<div class="d-flex flex-wrap align-content-start">
  <div>01</div>
  <div>02</div>
  <div>03</div>
  <div>04</div>
  <div>05</div>
</div>
```

### Center

Use `align-content-center` to pack rows in a container in the center of the cross axis:

<div class="bd-example">
    <div class="d-flex flex-wrap align-content-center gap-3 fs-sm bd-h-56 bg-blue-50 text-center">
      <div class="w-25 p-3 rounded bg-blue-300 text-white">01</div>
      <div class="w-25 p-3 rounded bg-blue-300 text-white">02</div>
      <div class="w-25 p-3 rounded bg-blue-300 text-white">03</div>
      <div class="w-25 p-3 rounded bg-blue-300 text-white">04</div>
      <div class="w-25 p-3 rounded bg-blue-300 text-white">05</div>
    </div>
</div>

```html
<div class="d-flex flex-wrap align-content-center">
  <div>01</div>
  <div>02</div>
  <div>03</div>
  <div>04</div>
  <div>05</div>
</div>
```

### End

Use `align-content-end` to pack rows in a container against the end of the cross axis:

<div class="bd-example">
    <div class="d-flex flex-wrap align-content-end gap-3 fs-sm bd-h-56 bg-blue-50 text-center">
      <div class="w-25 p-3 rounded bg-blue-300 text-white">01</div>
      <div class="w-25 p-3 rounded bg-blue-300 text-white">02</div>
      <div class="w-25 p-3 rounded bg-blue-300 text-white">03</div>
      <div class="w-25 p-3 rounded bg-blue-300 text-white">04</div>
      <div class="w-25 p-3 rounded bg-blue-300 text-white">05</div>
    </div>
</div>

```html
<div class="d-flex flex-wrap align-content-end">
  <div>01</div>
  <div>02</div>
  <div>03</div>
  <div>04</div>
  <div>05</div>
</div>
```

### Space between

Use `align-content-between` to distribute rows in a container such that there is an equal amount of space between each line:

<div class="bd-example">
    <div class="d-flex flex-wrap align-content-between gap-3 fs-sm bd-h-56 bg-blue-50 text-center">
      <div class="w-25 p-3 rounded bg-blue-300 text-white">01</div>
      <div class="w-25 p-3 rounded bg-blue-300 text-white">02</div>
      <div class="w-25 p-3 rounded bg-blue-300 text-white">03</div>
      <div class="w-25 p-3 rounded bg-blue-300 text-white">04</div>
      <div class="w-25 p-3 rounded bg-blue-300 text-white">05</div>
    </div>
</div>

```html
<div class="d-flex flex-wrap align-content-between">
  <div>01</div>
  <div>02</div>
  <div>03</div>
  <div>04</div>
  <div>05</div>
</div>
```

### Space around

Use `align-content-around` to distribute rows in a container such that there is an equal amount of space around each line:


<div class="bd-example">
    <div class="d-flex flex-wrap align-content-around gap-3 fs-sm bd-h-56 bg-blue-50 text-center">
      <div class="w-25 p-3 rounded bg-blue-300 text-white">01</div>
      <div class="w-25 p-3 rounded bg-blue-300 text-white">02</div>
      <div class="w-25 p-3 rounded bg-blue-300 text-white">03</div>
      <div class="w-25 p-3 rounded bg-blue-300 text-white">04</div>
      <div class="w-25 p-3 rounded bg-blue-300 text-white">05</div>
    </div>
</div>

```html
<div class="d-flex flex-wrap align-content-around">
  <div>01</div>
  <div>02</div>
  <div>03</div>
  <div>04</div>
  <div>05</div>
</div>
```

### Stretch

Use `align-content-stretch` to stretch items to fill the container’s cross axis.

<div class="bd-example">
    <div class="d-flex flex-wrap align-content-stretch gap-3 fs-sm bd-h-56 bg-blue-50 text-center">
      <div class="w-25 p-3 rounded bg-blue-300 text-white">01</div>
      <div class="w-25 p-3 rounded bg-blue-300 text-white">02</div>
      <div class="w-25 p-3 rounded bg-blue-300 text-white">03</div>
      <div class="w-25 p-3 rounded bg-blue-300 text-white">04</div>
      <div class="w-25 p-3 rounded bg-blue-300 text-white">05</div>
    </div>
</div>

```html
<div class="d-flex flex-wrap align-content-stretch">
  <div>01</div>
  <div>02</div>
  <div>03</div>
  <div>04</div>
  <div>05</div>
</div>
```


## Breakpoints

All `align-content` utilities that supports responsive at specific [breakpoints]({{< docsref "breakpoints" >}}), from `xs` to `xxl`, have no breakpoint abbreviation in them. 

The responsive classes are named using the format `align-content-{breakpoint}-{value}`.

{{< markdown >}}
{{< flex.inline >}}
{{- range $.Site.Data.breakpoints }}
{{- if ne .abbr "" }}
- `.align-content{{ .abbr }}-start`
- `.align-content{{ .abbr }}-end`
- `.align-content{{ .abbr }}-center`
- `.align-content{{ .abbr }}-between`
- `.align-content{{ .abbr }}-around`
- `.align-content{{ .abbr }}-stretch`
{{- end -}}
{{- end -}}
{{< /flex.inline >}}
{{< /markdown >}}

For example, use `align-content-md-around` to apply the `align-content-around` utility at only medium screen sizes and above.

```html
<div class="d-flex align-content-start align-content-md-around">
  <!-- ... -->
</div>
```