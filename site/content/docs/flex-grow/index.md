---
layout: docs
title: Flex Grow
description: "Utilities for controlling how flex items grow."
toc: true
group: flexbox
menu:
  docs:
    weight: 50
---

Use `.flex-grow-*` utilities to toggle a flex item’s ability to grow to fill available space.

## Quick reference 

{{< class-api "flex-grow" >}}

## Basic usage

### Grow

Use `flex-grow` to allow a flex item to grow to fill any available space:

{{< example show_source="false" >}}
  <div class="d-flex bg-striped-purple gap-4 rounded">
    <div class="d-flex align-items-center justify-content-center text-bg-purple rounded bd-w-14 bd-h-14">01</div>
    <div class="d-flex flex-grow-1 align-items-center justify-content-center text-bg-purple rounded bd-w-14 bd-h-14">02</div>
    <div class="d-flex align-items-center justify-content-center text-bg-purple rounded bd-w-14 bd-h-14">03</div>
  </div>
{{</ example >}}

```html
<div class="d-flex">
  <div>01</div>
  <div class="flex-grow-1">02</div>
  <div>03</div>
</div>
```

### Don't grow

Use `flex-grow-0` to prevent a flex item from growing:

{{< example show_source="false" >}}
  <div class="d-flex gap-4 bg-striped-purple">
  <div class="flex-grow-1 d-flex align-items-center justify-content-center text-bg-purple rounded bd-w-14 bd-h-14">01</div>
  <div class="flex-grow-0 d-flex align-items-center justify-content-center text-bg-purple rounded bd-w-14 bd-h-14">02</div>
  <div class="flex-grow-1 d-flex align-items-center justify-content-center text-bg-purple rounded bd-w-14 bd-h-14">03</div>
  </div>
{{</ example >}}

```html
<div class="d-flex">
  <div class="flex-grow-1">01</div>
  <div class="flex-grow-0">02</div>
  <div class="flex-grow-1">03</div>
</div>
```

## Breakpoints

All flex grow utilities that supports responsive at specific [breakpoints]({{< docsref "breakpoints" >}}), from `xs` to `xxl`, have no breakpoint abbreviation in them. 

The responsive classes are named using the format `flex-{breakpoint}-grow-{1|0}`.

{{< markdown >}}
{{< flex.inline >}}
{{- range $.Site.Data.breakpoints }}
{{- if ne .abbr "" }}
- `.flex{{ .abbr }}-grow-0`
- `.flex{{ .abbr }}-grow-1`
{{- end -}}
{{- end -}}
{{< /flex.inline >}}
{{< /markdown >}}

For example, use `flex-md-grow-0` to apply the `flex-grow-0` utility at only medium screen sizes and above.

```html
<div class="flex-grow flex-md-grow-md-0">
  <!-- ... -->
</div>
```