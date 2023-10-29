---
layout: docs
title: Flex Shrink
description: "Utilities for controlling how flex items shrink."
toc: true
group: flexbox
menu:
  docs:
    weight: 60
---

## Quick reference 

{{< class-api "flex-shrink" >}}

## Basic usage

Use `.flex-shrink-*` utilities to toggle a flex item’s ability to shrink if necessary. For `.flex-shrink-1` is forced to wrap its contents to a new line, “shrinking” to allow more space for the previous flex item with `.w-100`.

### Shrink

Use `flex-shrink-1` to allow a flex item to shrink if needed:

{{< example show_source="false" >}}
  <div class="d-flex bg-striped-purple gap-4 rounded">
    <div class="d-flex align-items-center justify-content-center rounded text-bg-dark p-4">01</div>
    <div class="d-flex flex-shrink-1 align-items-center justify-content-center rounded text-bg-purple p-4" style="width:256px">02</div>
    <div class="d-flex align-items-center justify-content-center rounded text-bg-dark p-4">03</div>
  </div>
{{</ example >}}

```html
<div class="d-flex">
  <div>01</div>
  <div class="flex-shrink-1" style="width:256px">02</div>
  <div>03</div>
</div>
```

### Don't shrink

Use `flex-shrink-0` to prevent a flex item from shrinking:

{{< example show_source="false" >}}
  <div class="overflow-auto">
    <div class="d-flex bg-striped-purple gap-4">
      <div class="d-flex flex-fill align-items-center justify-content-center rounded text-bg-dark p-4">01</div>
      <div class="d-flex flex-shrink-0 align-items-center justify-content-center rounded text-bg-purple p-4" style="width:256px;">02</div>
      <div class="d-flex flex-fill align-items-center justify-content-center rounded text-bg-dark p-4">03</div>
    </div>
  </div>
{{</ example >}}

```html
<div class="d-flex ...">
  <div class="flex-fill">01</div>
  <div class="flex-shrink-0" style="width: 256px;">02</div>
  <div class="flex-fill">03</div>
</div>
```

## Responsive breakpoints

All flex shrink utilities that supports responsive at specific [breakpoints]({{< docsref "breakpoints" >}}), from `xs` to `xxl`, have no breakpoint abbreviation in them. 

The responsive classes are named using the format `flex-{breakpoint}-shrink-{1|0}`.

{{< markdown >}}
{{< flex.inline >}}
{{- range $.Site.Data.breakpoints }}
{{- if ne .abbr "" }}
- `.flex{{ .abbr }}-shrink-0`
- `.flex{{ .abbr }}-shrink-1`
{{- end -}}
{{- end -}}
{{< /flex.inline >}}
{{< /markdown >}}

For example, use `flex-md-shrink-0` to apply the `shrink-0` utility at only medium screen sizes and above.

```html
<div class="flex-shrink flex-md-shrink-0">
  <!-- ... -->
</div>
```