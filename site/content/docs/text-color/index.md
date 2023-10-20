---
layout: docs
title: Text Color
description: "Utilities for controlling the text color of an element."
toc: true
status: new
group: typography
menu:
  docs:    
---

Use text color utilities to set text to a specific color. 

## Quick reference

{{< colors.inline >}}
<table class="table">
  <thead>
    <tr>
      <th>Class</th>
      <th class="d-none d-md-table-cell">Properties</th>
      <th></th>
    </tr>
  </thead>
  <tbody>
     {{ range (index $.Site.Data "theme-colors") }}
      <tr>
        <td class="text-green-400">.text-{{ .name }}</td>
        <td class="text-purple-300 d-none d-md-table-cell">color: rgb({{ .rgb }})</td>
        <td class="fw-semibold"><span style="color: rgb({{ .rgb }})">Aa</span></td>
      </tr>
    {{ end }}
    {{ range $name,$colors := (index $.Site.Data "colors") }}
      {{ $keys := slice }}
      {{ range $key, $_ := $colors }}
        {{ $keys = $keys | append $key }}
      {{ end }}
      {{ range $key := sort $keys }}
        {{ with index $colors $key }}
          <tr>
            <td class="text-green-400">.text-{{ $name }}-{{ $key }}</td>
            <td class="text-purple-300 d-none d-md-table-cell">color: rgb({{ .rgb }});</td>
            <td class="fw-semibold"><span style="color: rgb({{ .rgb }})">Aa</span></td>
          </tr>
        {{ end }}
      {{ end }}
    {{ end }}
  </tbody>
</table>
{{< / colors.inline >}}

## Basic usage

### Setting the text color

Control the text color of an element using the `text-{color}` utilities.

<div class="bd-example text-center">
  <p class="text-blue-500 fs-5 fw-semibold">The quick brown fox jumps over the lazy dog.</p>
</div>


```html
<p class="text-blue-500 ...">The quick brown fox ...</p>
```

### Changing the opacity

Control the opacity of an element’s text color using [the color opacity]({{< docsref "opacity" >}}) utilities.

<div class="bd-example text-center">
  <p class="text-blue-500 opacity-100 fs-5 fw-semibold">The quick brown fox jumps over the lazy dog.</p>
  <p class="text-blue-500 opacity-75 fs-5 fw-semibold">The quick brown fox jumps over the lazy dog.</p>
  <p class="text-blue-500 opacity-50 fs-5 fw-semibold">The quick brown fox jumps over the lazy dog.</p>
  <p class="text-blue-500 opacity-25 fw-semibold">The quick brown fox jumps over the lazy dog.</p>
</div>

```html
<p class="text-blue-500 opacity-100">The quick brown fox...</p>
<p class="text-blue-500 opacity-75">The quick brown fox...</p>
<p class="text-blue-500 opacity-50">The quick brown fox...</p>
<p class="text-blue-500 opacity-25">The quick brown fox...</p>
<p class="text-blue-500 opacity-0">The quick brown fox...</p>
```

### Reset color

Reset a text or link’s color with `.text-reset`, so that it inherits the color from its parent.

<div class="bd-example text-center">
  <p class="text-secondary fs-5 fw-semibold">The quick brown fox jumps over <a href="#" class="text-reset text-decoration-underline">The lazy dog</a>.</p>
</div>

```html
<p class="text-secondary">The quick brown fox jumps over
  <a href="#" class="text-reset">The lazy dog</a>
</p>
```
