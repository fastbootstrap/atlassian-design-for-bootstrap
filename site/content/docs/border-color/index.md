---
layout: docs
title: Border Color
description: "Utilities for controlling the border color of an element."
toc: true
group: borders
menu:
  docs:
aliases:
  - /docs/border
---

Change the border color using utilities built on our theme colors and color system.

## Quick reference 

{{< colors.inline >}}
<table class="table api-class-table">
  <thead>
    <tr>
      <th>Class</th>
      <th class="bd-w-36">Color</th>
    </tr>
  </thead>
  <tbody>
    {{ range (index $.Site.Data.css "border-color" ) }}
      {{ $prefix := .class }}
      {{ range .values }} 
        {{ $key := . }}
        {{ $value := . }}
        {{ if reflect.IsMap . }}
          {{ range $key, $value = . }}
          {{ end }}
        {{ end }}
        <tr>
          <td><code>{{ printf "%s-%s" $prefix $key }}</code></td>
          <td><div class="border {{ $value }} bd-w-12 bd-h-6"></div></td>
        </tr>
      {{ end }}
    {{ end }}
  </tbody>
</table>
{{< / colors.inline >}}

## Basic usage

### Setting the border color

Control the border color of an element using the `border-{color}` utilities.

{{< example class="bg-neutral-subtler bg-grid-slate-100" show_source="false" >}}
<div class="d-flex justify-content-around">
  <div class="border border-primary d-inline-block bd-w-16 bd-h-16"></div>
  <div class="border border-secondary d-inline-block bd-w-16 bd-h-16"></div>
  <div class="border border-secondary-subtle d-inline-block bd-w-16 bd-h-16"></div>
  <div class="border border-primary-subtle d-inline-block bd-w-16 bd-h-16"></div>
</div>
{{</ example >}}

```html
<div class="border border-primary ..."></div>
<div class="border border-secondary ..."></div>
<div class="border border-secondary-subtle ..."></div>
<div class="border border-primary-subtle ..."></div>
```

### Changing the border color

Use the `border-{color}` to modify the default `border-color` of a component.

{{< example class="bg-neutral-subtler bg-grid-slate-100" show_source="false" >}}
  <div class="max-w-xs mx-auto">
    <label for="emailaddress" class="form-label">Email address</label>
    <input type="password" id="emailaddress" class="form-control border-danger" />
    <div id="infeedback" class="form-text text-danger">This field is required.</div>
  </div>
{{</ example >}}

```html
<input class="form-control border-danger ..." />
```

### Changing the opacity

Control the opacity of an element’s border color using the color opacity `.bg-opacity-*` utilities.

{{< example class="bg-neutral-subtler bg-grid-slate-100" show_source="false" >}}
<div class="d-flex justify-content-around">
  <div class="d-flex flex-column gap-2 align-items-center">
    <span class="text-body-tertiary fs-sm fw-semibold">border-opacity-100</span>
    <div class="border-opacity-100 border border-4 border-secondary d-inline-block bd-w-16 bd-h-16"></div>
  </div>
  <div class="d-flex flex-column gap-2 align-items-center">
    <span class="text-body-tertiary fs-sm fw-semibold">border-opacity-75</span>
    <div class="border-opacity-75 border border-4 border-secondary d-inline-block bd-w-16 bd-h-16"></div>
  </div>
  <div class="d-flex flex-column gap-2 align-items-center">
    <span class="text-body-tertiary fs-sm fw-semibold">border-opacity-50</span>
    <div class="border-opacity-50 border border-4 border-secondary d-inline-block bd-w-16 bd-h-16"></div>
  </div>
  <div class="d-flex flex-column gap-2 align-items-center">
    <span class="text-body-tertiary fs-sm fw-semibold">border-opacity-25</span>
    <div class="border-opacity-25 border border-4 border-secondary d-inline-block bd-w-16 bd-h-16"></div>
  </div>
</div>
{{</ example >}}

```html
<div class="border-opacity-100 border border-secondary..."></div>
<div class="border-opacity-75 border border-secondary..."></div>
<div class="border-opacity-50 border border-secondary..."></div>
<div class="border-opacity-25 border border-secondary..."></div>
```