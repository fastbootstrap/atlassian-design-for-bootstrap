---
layout: docs
title: Text Color
description: "Utilities for controlling the text color of an element."
toc: true
group: typography
menu:
  docs:    
---

Use text color utilities to set text to a specific color. 

## Quick reference

{{< colors.inline >}}
<table class="table api-class-table">
  <thead>
    <tr>
      <th>Class</th>
      <th></th>
    </tr>
  </thead>
  <tbody>
    {{ range (index $.Site.Data.css "text-color" ) }}
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
          <td class="fw-semibold"><span class="{{ $value }}">Aa</span></td>
        </tr>
      {{ end }}
    {{ end }}
  </tbody>
</table>
{{< / colors.inline >}}

## Basic usage

### Setting the text color

Control the text color of an element using the `text-{color}` utilities.

{{< example class="bg-grid-slate-100 text-center" show_source="false" >}}
  <p class="text-primary fs-5 fw-semibold">The quick brown fox jumps over the lazy dog.</p>
{{</ example >}}


```html
<p class="text-primary ...">The quick brown fox ...</p>
```

### Changing the opacity

Control the opacity of an element’s text color using the color opacity `text-opacity-*` utilities.

{{< example class="bg-grid-slate-100 text-center" show_source="false" >}}
  <p class="text-primary text-opacity-100 fs-5 fw-semibold">The quick brown fox jumps over the lazy dog.</p>
  <p class="text-primary text-opacity-75 fs-5 fw-semibold">The quick brown fox jumps over the lazy dog.</p>
  <p class="text-primary text-opacity-50 fs-5 fw-semibold">The quick brown fox jumps over the lazy dog.</p>
  <p class="text-primary text-opacity-25 fs-5 fw-semibold">The quick brown fox jumps over the lazy dog.</p>
  <p class="text-primary text-opacity-0 fs-5 fw-semibold">The quick brown fox jumps over the lazy dog.</p>
{{</ example >}}

```html
<p class="text-primary text-opacity-100">The quick brown fox...</p>
<p class="text-primary text-opacity-75">The quick brown fox...</p>
<p class="text-primary text-opacity-50">The quick brown fox...</p>
<p class="text-primary text-opacity-25">The quick brown fox...</p>
<p class="text-primary text-opacity-0">The quick brown fox...</p>
```

### Reset color

Reset a text or link’s color with `.text-reset`, so that it inherits the color from its parent.

{{< example class="bg-grid-slate-100 text-center" show_source="false" >}}
  <p class="text-secondary fs-5 fw-semibold">The quick brown fox jumps over <a href="#" class="text-reset text-decoration-underline">The lazy dog</a>.</p>
{{</ example >}}

```html
<p class="text-secondary">The quick brown fox jumps over
  <a href="#" class="text-reset">The lazy dog</a>
</p>
```
