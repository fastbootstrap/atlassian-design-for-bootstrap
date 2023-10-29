---
layout: docs
title: Flex Direction
description: "Utilities for controlling the direction of flex items."
toc: true
group: flexbox
menu:
  docs:    
    weight: 30
---

Set the direction of flex items in a flex container with direction utilities. In most cases you can omit the horizontal class here as the browser default is `row`. However, you may encounter situations where you needed to explicitly set this value (like responsive layouts).

## Quick reference

{{< class-api "flex-direction" >}}

## Basic usage

### Row

Use `flex-row` to position flex items horizontally in the same direction as text.

{{< example class="bg-grid-slate-100" show_source="false" >}}
<div class="d-flex flex-row gap-4 text-center">
  <div class="text-bg-purple rounded d-flex justify-content-center align-items-center bd-w-14 bd-h-14">01</div>
  <div class="text-bg-purple rounded d-flex justify-content-center align-items-center bd-w-14 bd-h-14">02</div>
  <div class="text-bg-purple rounded d-flex justify-content-center align-items-center bd-w-14 bd-h-14">03</div>
</div>
{{</ example >}}

```html
<div class="d-flex flex-row ...">
  <div>01</div>
  <div>02</div>
  <div>03</div>
</div>
```

### Row reversed

Use `flex-row-reverse` to position flex items horizontally in the opposite direction.

{{< example class="bg-grid-slate-100" show_source="false" >}}
<div class="d-flex flex-row-reverse gap-4">
  <div class="text-bg-purple rounded d-flex justify-content-center align-items-center bd-w-14 bd-h-14">01</div>
  <div class="text-bg-purple rounded d-flex justify-content-center align-items-center bd-w-14 bd-h-14">02</div>
  <div class="text-bg-purple rounded d-flex justify-content-center align-items-center bd-w-14 bd-h-14">03</div>
</div>
{{</ example >}}

```html
<div class="d-flex flex-row-reverse ...">
  <div>01</div>
  <div>02</div>
  <div>03</div>
</div>
```

### Column

Use `flex-column` to position flex items vertically.

{{< example class="bg-grid-slate-100" show_source="false" >}}
  <div class="mx-auto bd-max-w-80 fw-medium">
    <div class="d-flex flex-column gap-4">
      <div class="text-bg-purple p-4 rounded d-flex justify-content-center align-items-center">01</div>
      <div class="text-bg-purple p-4 rounded d-flex justify-content-center align-items-center">02</div>
      <div class="text-bg-purple p-4 rounded d-flex justify-content-center align-items-center">03</div>
    </div>
  </div>
{{</ example >}}

```html
<div class="d-flex flex-column ...">
  <div>01</div>
  <div>02</div>
  <div>03</div>
</div>
```

### Column reversed

Use `flex-column-reverse` to position flex items vertically in the opposite direction.

{{< example class="bg-grid-slate-100" show_source="false" >}}
  <div class="mx-auto bd-max-w-80 fw-medium">
    <div class="d-flex flex-column-reverse gap-4">
      <div class="text-bg-primary p-4 rounded d-flex justify-content-center align-items-center">01</div>
      <div class="text-bg-primary p-4 rounded d-flex justify-content-center align-items-center">02</div>
      <div class="text-bg-primary p-4 rounded d-flex justify-content-center align-items-center">03</div>
    </div>
  </div>
{{</ example >}}

```html
<div class="d-flex flex-column-reverse ...">
  <div>01</div>
  <div>02</div>
  <div>03</div>
</div>
```

## Breakpoints

All flex direction utilities that supports responsive at specific [breakpoints]({{< docsref "breakpoints" >}}), from `xs` to `xxl`, have no breakpoint abbreviation in them. 

The responsive classes are named using the format `flex-{breakpoint}-{row|column|row-reverse|column-reverse}`.

{{< markdown >}}
{{< flex.inline >}}
{{- range $.Site.Data.breakpoints }}
{{- if ne .abbr "" }}
- `.flex{{ .abbr }}-row`
- `.flex{{ .abbr }}-row-reverse`
- `.flex{{ .abbr }}-column`
- `.flex{{ .abbr }}-column-reverse`
{{- end -}}
{{- end -}}
{{< /flex.inline >}}
{{< /markdown >}}

For example, use `flex-md-row` to apply the `flex-row` utility at only medium screen sizes and above.

{{< example class="bg-grid-slate-100" show_source="false" >}}
<div class="d-flex flex-column flex-md-row gap-4 text-center">
  <div class="text-bg-purple rounded d-flex justify-content-center align-items-center bd-w-14 bd-h-14">01</div>
  <div class="text-bg-purple rounded d-flex justify-content-center align-items-center bd-w-14 bd-h-14">02</div>
  <div class="text-bg-purple rounded d-flex justify-content-center align-items-center bd-w-14 bd-h-14">03</div>
</div>
{{</ example >}}

```html
<div class="d-flex flex-column flex-md-row">
  <div>01</div>
  <div>02</div>
  <div>03</div>
</div>
```