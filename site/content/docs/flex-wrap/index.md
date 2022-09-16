---
layout: docs
title: Flex Wrap
description: "Utilities for controlling how flex items wrap."
toc: true
group: flexbox
menu:
  docs:
    weight: 40
---

Change how flex items wrap in a flex container. Choose from no wrapping at all (the browser default) with `.flex-nowrap`, wrapping with `.flex-wrap`, or reverse wrapping with `.flex-wrap-reverse`.

## Quick reference

{{< class-api "flex-wrap" >}}

## Basic usage

### Don't wrap

Use `flex-nowrap` to prevent flex items from wrapping, causing inflexible items to overflow the container if necessary:

<div class="bd-example">
  <div class="overflow-x-auto">
    <div class="d-flex flex-nowrap fs-sm fw-semibold gap-3">
      <div class="col-5">
        <div class="text-bg-secondary p-3 rounded d-flex justify-content-center align-items-center">01</div>
      </div>
      <div class="col-5">
        <div class="text-bg-secondary p-3 rounded d-flex justify-content-center align-items-center">02</div>
      </div>
      <div class="col-5">
        <div class="text-bg-secondary p-3 rounded d-flex justify-content-center align-items-center">03</div>
      </div>
    </div>
  </div>
</div>

```html
<div class="d-flex flex-nowrap">
  <div>01</div>
  <div>02</div>
  <div>03</div>
</div>
```

### Wrap normal

Use `flex-wrap` to allow flex items to wrap:

<div class="bd-example">
  <div class="overflow-x-auto">
    <div class="d-flex flex-wrap fs-sm fw-semibold gap-3">
      <div class="col-5">
        <div class="bg-blue-200 text-white p-3 rounded d-flex justify-content-center align-items-center">01</div>
      </div>
      <div class="col-5">
        <div class="bg-blue-200 text-white p-3 rounded d-flex justify-content-center align-items-center">02</div>
      </div>
      <div class="col-5">
        <div class="bg-blue-200 text-white  p-3 rounded d-flex justify-content-center align-items-center">03</div>
      </div>
    </div>
  </div>
</div>

```html
<div class="d-flex flex-wrap">
  <div>01</div>
  <div>02</div>
  <div>03</div>
</div>
```

### Wrap reversed

Use `flex-wrap-reverse` to wrap flex items in the reverse direction:

<div class="bd-example">
  <div class="overflow-x-auto">
    <div class="d-flex flex-wrap-reverse fs-sm fw-semibold gap-3">
      <div class="col-5">
        <div class="text-bg-primary p-3 rounded d-flex justify-content-center align-items-center">01</div>
      </div>
      <div class="col-5">
        <div class="text-bg-primary text-white p-3 rounded d-flex justify-content-center align-items-center">02</div>
      </div>
      <div class="col-5">
        <div class="text-bg-primary text-white  p-3 rounded d-flex justify-content-center align-items-center">03</div>
      </div>
    </div>
  </div>
</div>

```html
<div class="d-flex flex-wrap-reverse">
  <div>01</div>
  <div>02</div>
  <div>03</div>
</div>
```

## Breakpoints

All flex direction utilities that supports responsive at specific [breakpoints]({{< docsref "breakpoints" >}}), from `xs` to `xxl`, have no breakpoint abbreviation in them. 

The responsive classes are named using the format `flex-{breakpoint}-{wrap|nowrap|wrap-reverse}`.

{{< markdown >}}
{{< flex.inline >}}
{{- range $.Site.Data.breakpoints }}
{{- if ne .abbr "" }}
- `.flex{{ .abbr }}-nowrap`
- `.flex{{ .abbr }}-wrap`
- `.flex{{ .abbr }}-wrap-reverse`
{{- end -}}
{{- end -}}
{{< /flex.inline >}}
{{< /markdown >}}

For example, use `flex-md-wrap-reverse` to apply the `flex-wrap-reverse` utility at only medium screen sizes and above.

```html
<div class="d-flex flex-wrap flex-md-wrap-reverse">
  <!-- ... -->
</div>
```