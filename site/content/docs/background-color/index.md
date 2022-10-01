---
layout: docs
title: Background Color
description: "Utilities for controlling the background color of an element."
toc: true
status: new
group: backgrounds
menu:
  docs:    
---

When selecting a background color, make sure the foreground color contrast passes a minimum WCAG accessibility rating of [level AA](https://www.w3.org/TR/UNDERSTANDING-WCAG20/visual-audio-contrast-contrast.html).


## Color & background

The below background color with contrasting foreground color. See Bootstrap's [Color & background](https://getbootstrap.com/docs/5.2/helpers/color-background/) for more information.

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
        <td class="text-green-400">.text-bg-{{ .name }}</td>
        <td class="text-purple-300 d-none d-md-table-cell">background-color: rgb({{ .rgb }})</td>
        <td class="col-2 col-md-3 border-0 text-bg-{{ .name }}">.text-bg-{{ .name }}</td>
      </tr>
    {{ end }}
  </tbody>
</table>
{{< / colors.inline >}}

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
    {{ range $name,$colors := (index $.Site.Data "colors") }}
      {{ $keys := slice }}
      {{ range $key, $_ := $colors }}
        {{ $keys = $keys | append $key }}
      {{ end }}
      {{ range $key := sort $keys }}
        {{ with index $colors $key }}
          <tr>
            <td class="text-green-400">.bg-{{ $name }}-{{ $key }}</td>
            <td class="text-purple-300 d-none d-md-table-cell">background-color: rgb({{ .rgb }});</td>
            <td class="fw-semibold col-2 col-md-3 border-0" style="background-color: rgb({{ .rgb }})"></td>
          </tr>
        {{ end }}
      {{ end }}
    {{ end }}
  </tbody>
</table>
{{< / colors.inline >}}

## Basic usage
​
### Setting the background color

Control the background color of an element using the `bg-{color}` utilities.

<div class="bd-example text-center">
  <button class="btn bg-teal-200 border border-teal-200 text-white fw-semibold">Save changes</button>
</div>

```html
<button class="btn bg-teal-200 ...">
  Save changes
</button>
```