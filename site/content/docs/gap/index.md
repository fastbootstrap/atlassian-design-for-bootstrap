---
layout: docs
title: Gap
description: "Utilities for controlling gutters between grid and flexbox items."
toc: true
group: flexbox
menu:
  docs:
    weight: 110
---

When using display: grid, you can make use of gap utilities on the parent grid container. This can save on having to add margin utilities to individual grid items (children of a display: grid container). 

## Quick reference

{{< class-api "gap" true >}}

## Basic usage

### Setting the gap between elements

Use `gap-{size}` to change the gap between both rows and columns in grid and flexbox layouts.

<div class="bd-example">
  <div class="grid gap-5">
    <div class="g-col-6 p-3 text-bg-secondary text-center rounded-3">01</div>
    <div class="g-col-6 p-3 text-bg-secondary text-center rounded-3">02</div>
    <div class="g-col-6 p-3 text-bg-secondary text-center rounded-3">03</div>
    <div class="g-col-6 p-3 text-bg-secondary text-center rounded-3">04</div>
  </div>
</div>

```html
<div class="grid gap-5">
  <div class="g-col-6 ...">01</div>
  <div class="g-col-6 ...">02</div>
  <div class="g-col-6 ...">03</div>
  <div class="g-col-6 ...">04</div>
</div>
```

### Changing row and column gaps independently

Use the nested flex layout with `gap-{size}` to changing the row and column gaps.

<div class="bd-example">
  <div class="d-flex flex-column gap-5">
    <div class="d-flex gap-3">
      <div class="p-3 text-bg-secondary text-center rounded-3 w-100">01</div>
      <div class="p-3 text-bg-secondary text-center rounded-3 w-100">02</div>
    </div>
    <div class="d-flex gap-3">
      <div class="p-3 text-bg-secondary text-center rounded-3 w-100">03</div>
      <div class="p-3 text-bg-secondary text-center rounded-3 w-100">04</div>
    </div>
  </div>
</div>

```html
<div class="d-flex flex-column gap-5">
  <div class="d-flex gap-3">
    <div>01</div>
    <div>02</div>
  </div>
  <div class="d-flex gap-3">
    <div>03</div>
    <div>04</div>
  </div>
</div>
```

## Responsives

The Gap utilities are responsive by default. You can use this format `gap-{breakpoint}-{size}` to changing gaps on the difference device. 

{{< markdown >}}
{{< gap.inline >}}
{{- range $bp := $.Site.Data.breakpoints }}
{{- if ne $bp.abbr "" }}
{{- range (seq 7) }}
- `.gap{{ $bp.abbr }}-{{ . }}`
{{- end -}}
{{- end -}}
{{- end -}}
{{< /gap.inline >}}
{{< /markdown >}}

For example, use `gap-md-3` to apply the `gap-3` utility at only medium screen sizes and above.

<div class="bd-example">
  <div class="grid gap-2 gap-md-3 gap-lg-5">
    <div class="g-col-6 p-3 text-bg-secondary text-center rounded-3">01</div>
    <div class="g-col-6 p-3 text-bg-secondary text-center rounded-3">02</div>
    <div class="g-col-6 p-3 text-bg-secondary text-center rounded-3">03</div>
    <div class="g-col-6 p-3 text-bg-secondary text-center rounded-3">04</div>
  </div>
</div>

```html
<div class="grid gap-2 gap-md-3 gap-lg-5">
  <div class="g-col-6 ...">01</div>
  <div class="g-col-6 ...">02</div>
  <div class="g-col-6 ...">03</div>
  <div class="g-col-6 ...">04</div>
</div>
```