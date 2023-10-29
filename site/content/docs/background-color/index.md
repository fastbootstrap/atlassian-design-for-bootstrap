---
layout: docs
title: Background Color
description: "Utilities for controlling the background color of an element."
toc: true
group: backgrounds
menu:
  docs:    
---

When selecting a background color, make sure the foreground color contrast passes a minimum WCAG accessibility rating of [level AA](https://www.w3.org/TR/UNDERSTANDING-WCAG20/visual-audio-contrast-contrast.html).


## Quick reference

{{< callout >}}
Similar to the contextual text color classes, set the background of an element to any contextual class. Background utilities **do not set** `color`, so in some cases you’ll want to use `.text-bg-*` color utilities.
{{</ callout >}}

{{< bg-colors.inline >}}
<table class="table api-class-table ">
  <thead>
    <tr>
      <th>Class</th>
      <th class="bd-w-36">Color</th>
    </tr>
  </thead>
  <tbody>
    {{ range (index $.Site.Data.css "bg-color" ) }}
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
          <td class="{{ $value }}"><span class="visually-hidden">{{ $value }}</span></td>
        </tr>
      {{ end }}
    {{ end }}
  </tbody>
</table>
{{< / bg-colors.inline >}}

## Basic usage

### Setting the background color

Control the background color of an element using the `bg-{color}` utilities.

{{< example class="text-center bg-grid-slate-100 bg-neutral-subtler" show_source="false" >}}
  <button class="btn text-bg-warning">Save changes</button>
{{</ example >}}

```html
<button class="btn text-bg-warning ...">
  Save changes
</button>
```

### Setting the background gradient

By adding a `.bg-gradient` class, a linear gradient is added as background image to the backgrounds. This gradient starts with a semi-transparent white which fades out to the bottom.

{{< example class="text-center bg-grid-slate-100 bg-neutral-subtler" show_source="false" >}}
<div class="d-flex gap-4 justify-content-center">
 <button class="btn text-bg-primary bg-gradient">.bg-gradient</button>
  <button class="btn text-bg-primary">no bg-gradient</button>
</div>
{{</ example >}}

```html
<button class="btn text-bg-primary bg-gradient ...">
 .bg-gradient
</button>
```

### Changing the opacity

Control the opacity of an element’s background color using the color opacity `.bg-opacity-*` utilities.

{{< example class="bg-grid-slate-100 bg-neutral-subtler" show_source="false" >}}
<div class="d-flex flex-column gap-4">
  <div>
    <span class="text-body-tertiary fw-semibold fs-sm mb-3">bg-opacity-100</span>
    <div class="p-5 bg-purple rounded"></div>
  </div>  
  <div>
    <span class="text-body-tertiary fw-semibold fs-sm mb-3">bg-opacity-100</span>
    <div class="p-5 bg-purple rounded bg-opacity-100"></div>
  </div>  
  <div>
    <span class="text-body-tertiary fw-semibold fs-sm mb-3">bg-opacity-75</span>
    <div class="p-5 bg-purple rounded bg-opacity-75"></div>
  </div>  
  <div>
    <span class="text-body-tertiary fw-semibold fs-sm mb-3">bg-opacity-50</span>
    <div class="p-5 bg-purple rounded bg-opacity-50"></div>
  </div>  
  <div>
    <span class="text-body-tertiary fw-semibold fs-sm mb-3">bg-opacity-25</span>
    <div class="p-5 bg-purple rounded bg-opacity-25"></div>
  </div>  
  <div>
    <span class="text-body-tertiary fw-semibold fs-sm mb-3">bg-opacity-10</span>
    <div class="p-5 bg-purple rounded bg-opacity-10"></div>
  </div>  
</div>
{{</ example >}}

```html
<div class="bg-purple bg-opacity-100"></div>
<div class="bg-purple bg-opacity-75"></div>
<div class="bg-purple bg-opacity-50"></div>
...
```