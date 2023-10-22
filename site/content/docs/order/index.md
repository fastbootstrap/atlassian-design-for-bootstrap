---
layout: docs
title: Order
description: "Utilities for controlling the order of flex and grid items."
toc: true
group: flexbox
menu:
  docs:
    weight: 70
---

The order utilities to change the visual order of specific flex items. We only provide options for making an item first or last, as well as a reset to use the DOM order. 

## Quick reference

{{< class-api "order" >}}

## Basic usage

### Ordering flex and grid items

Use `order-{order}` to render flex and grid items in a different order than they appear in the DOM.

{{< example class="bg-grid-slate-100" show_source="false" >}}
<div class="d-flex justify-content-between rounded">
  <div class="d-flex align-items-center justify-content-center text-bg-primary rounded order-3 bd-w-14 bd-h-14">01</div>
  <div class="d-flex align-items-center justify-content-center text-bg-primary rounded order-2  bd-w-14 bd-h-14">02</div>
  <div class="d-flex align-items-center justify-content-center text-bg-primary rounded order-1 bd-w-14 bd-h-14">03</div>
</div>
{{</ example >}}

```html
<div class="d-flex justify-content-between">
  <div class="order-3">01</div>
  <div class="order-2">02</div>
  <div class="order-1">03</div>
</div>
```

### To last

Use `order-last` to render flex and grid items in the last than they appear in the DOM.

{{< example class="bg-grid-slate-100" show_source="false" >}}
<div class="d-flex justify-content-between rounded">
  <div class="d-flex align-items-center justify-content-center text-bg-primary rounded  order-last bd-w-14 bd-h-14">01</div>
  <div class="d-flex align-items-center justify-content-center text-bg-primary rounded  bd-w-14 bd-h-14 ">02</div>
  <div class="d-flex align-items-center justify-content-center text-bg-primary rounded  bd-w-14 bd-h-14">03</div>
</div>
{{</ example >}}

```html
<div class="d-flex justify-content-between">
  <div class="order-last">01</div>
  <div>02</div>
  <div>03</div>
</div>
```

## Breakpoints

All flex direction utilities that supports responsive at specific [breakpoints]({{< docsref "breakpoints" >}}), from `xs` to `xxl`, have no breakpoint abbreviation in them. 

The responsive classes are named using the format `order-{breakpoint}-{order}`.

{{< markdown >}}
{{< flex.inline >}}
{{- range $bp := $.Site.Data.breakpoints }}
{{- if ne $bp.abbr "" }}
{{- range (slice "first" "last") }}
- `.order{{ $bp.abbr }}-{{ . }}`
{{- end -}}
{{- range (seq 0 12) }}
- `.order{{ $bp.abbr }}-{{ . }}`
{{- end -}}
{{- end -}}
{{- end -}}
{{< /flex.inline >}}
{{< /markdown >}}

For example, use `order-md-last` to apply the `order-last` utility at only medium screen sizes and above.

```html
<div class="order-first md:order-last">
  <!-- ... -->
</div>
```