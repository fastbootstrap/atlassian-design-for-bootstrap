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

<div class="bd-example">
  <div class="d-flex flex-row fs-sm ">
    <div class="text-bg-secondary rounded fw-semibold d-flex justify-content-center align-items-center" style="width:56px;height:56px">01</div>
    <div class="text-bg-secondary rounded fw-semibold d-flex justify-content-center align-items-center ms-3" style="width:56px;height:56px">02</div>
    <div class="text-bg-secondary rounded fw-semibold d-flex justify-content-center align-items-center ms-3" style="width:56px;height:56px">03</div>
  </div>
</div>

```html
<div class="d-flex flex-row ...">
  <div>01</div>
  <div>02</div>
  <div>03</div>
</div>
```

### Row reversed

Use `flex-row-reverse` to position flex items horizontally in the opposite direction.

<div class="bd-example">
  <div class="d-flex flex-row-reverse fs-sm ">
    <div class="text-bg-primary rounded fw-semibold d-flex justify-content-center align-items-center" style="width:56px;height:56px">01</div>
    <div class="text-bg-primary rounded fw-semibold d-flex justify-content-center align-items-center me-3" style="width:56px;height:56px">02</div>
    <div class="text-bg-primary rounded fw-semibold d-flex justify-content-center align-items-center me-3" style="width:56px;height:56px">03</div>
  </div>
</div>

```html
<div class="d-flex flex-row-reverse ...">
  <div>01</div>
  <div>02</div>
  <div>03</div>
</div>
```

### Column

Use `flex-column` to position flex items vertically.

<div class="bd-example">
  <div class="mx-auto" style="max-width: 320px;">
    <div class="d-flex flex-column fs-sm ">
      <div class="bg-blue-200 text-white p-3 rounded fw-semibold d-flex justify-content-center align-items-center">01</div>
      <div class="bg-blue-200 text-white p-3 rounded fw-semibold d-flex justify-content-center align-items-center mt-3">02</div>
      <div class="bg-blue-200 text-white p-3 rounded fw-semibold d-flex justify-content-center align-items-center mt-3">03</div>
    </div>
  </div>
</div>

```html
<div class="d-flex flex-column ...">
  <div>01</div>
  <div>02</div>
  <div>03</div>
</div>
```

### Column reversed

Use `flex-column-reverse` to position flex items vertically in the opposite direction.

<div class="bd-example">
  <div class="mx-auto" style="max-width: 320px;">
    <div class="d-flex flex-column-reverse fs-sm ">
      <div class="text-bg-primary p-3 rounded fw-semibold d-flex justify-content-center align-items-center">01</div>
      <div class="text-bg-primary p-3 rounded fw-semibold d-flex justify-content-center align-items-center mb-3">02</div>
      <div class="text-bg-primary p-3 rounded fw-semibold d-flex justify-content-center align-items-center mb-3">03</div>
    </div>
  </div>
</div>

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

<div class="bd-example">
  <div class="d-flex justify-content-center justify-content-md-start flex-md-row">
    <div class="text-bg-secondary rounded fw-semibold d-flex justify-content-center align-items-center" style="width:56px;height:56px">01</div>
    <div class="text-bg-secondary rounded fw-semibold d-flex justify-content-center align-items-center ms-3" style="width:56px;height:56px">02</div>
    <div class="text-bg-secondary rounded fw-semibold d-flex justify-content-center align-items-center ms-3" style="width:56px;height:56px">03</div>
  </div>
</div>

```html
<div class="d-flex flex-column flex-md-row">
  <div>01</div>
  <div>02</div>
  <div>03</div>
</div>
```