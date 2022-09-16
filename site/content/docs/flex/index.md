---
layout: docs
title: Flex
description: "Utilities for controlling how flex items both grow and shrink."
toc: true
group: flexbox
menu:
  docs:
    weight: 70
---

Use the `.flex-fill` class on a series of sibling elements to force them into widths equal to their content (or equal widths if their content does not surpass their border-boxes) while taking up all available horizontal space.

## Quick reference

{{< class-api "flex" >}}

## Basic usage

### Fill

Use `flex-fill` to allow a flex item to grow and shrink if needs:

<div class="bd-example">
  <div class="d-flex gap-3 fw-semibold fs-sm ">
    <div class="d-flex align-items-center bd-w-14 bd-h-14 justify-content-center rounded bg-purple-100 text-white">01</div>
    <div class="d-flex flex-fill align-items-center bd-w-64 justify-content-center rounded bg-purple-300 text-white">02</div>
    <div class="d-flex flex-fill align-items-center bd-w-32 justify-content-center rounded bg-purple-300 text-white">03</div>
  </div>
</div>

```html
<div class="d-flex ...">
  <div>
    01
  </div>
  <div class="flex-auto bd-w-64 ...">
    02
  </div>
  <div class="flex-auto bd-w-32 ...">
    03
  </div>
</div>
```

## Breakpoints

The `flex-fill` utilities that supports responsive at specific [breakpoints]({{< docsref "breakpoints" >}}), from `xs` to `xxl`, have no breakpoint abbreviation in them. 

The responsive classes are named using the format `flex-{breakpoint}-fill`.


{{< markdown >}}
{{< flex.inline >}}
{{- range $.Site.Data.breakpoints }}
{{- if ne .abbr "" }}
- `.flex{{ .abbr }}-fill`
{{- end -}}
{{- end -}}
{{< /flex.inline >}}
{{< /markdown >}}

For example, use `flex-md-fill` to apply the `flex-fill` utility at only medium screen sizes and above.

```html
<div class="d-flex flex-md-fill">
  <!-- ... -->
</div>
```