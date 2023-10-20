---
layout: docs
title: Border Color
description: "Utilities for controlling the border color of an element."
toc: true
status: new
group: borders
menu:
  docs:
---

Change the border color using utilities built on our theme colors and color system.

## Quick reference 

{{< colors.inline >}}

{{ $white := dict "name" "white" "rgb" "255, 255, 255" "hex" "#ffffff" }}

<table class="table">
  <thead>
    <tr>
      <th>Class</th>
      <th class="d-none d-md-table-cell">Properties</th>
      <th>
    </tr>
  </thead>
  <tbody>
     {{ range ((index $.Site.Data "theme-colors") | append $white )}}
     {{ $class := printf "border-%s" .name}}
      <tr>
        <td class="text-green-400">.{{ $class }}</td>
        <td class="text-purple-300 d-none d-md-table-cell">border-color: rgb({{ .rgb }});</td>
        <td><div class="border {{ $class }}" style="width:46px;height:22px"></td>
      </tr>
    {{ end }}
    {{ range $name,$colors := (index $.Site.Data "colors") }}
      {{ $keys := slice }}
      {{ range $key, $_ := $colors }}
        {{ $keys = $keys | append $key }}
      {{ end }}
      {{ range $key := sort $keys }}
        {{ with index $colors $key }}
        {{ $class := printf "border-%s-%s" $name $key}}
          <tr>
            <td class="text-green-400">.{{ $class }}</td>
            <td class="text-purple-300 d-none d-md-table-cell">border-color: rgb({{ .rgb }});</td>
            <td><div class="border {{ $class }}" style="width:46px;height:22px"></td>
          </tr>
        {{ end }}
      {{ end }}
    {{ end }}
  </tbody>
</table>
{{< / colors.inline >}}

## Basic usage

### Setting the border color

Control the border color of an element using the `border-{color}` utilities.

<div class="bd-example d-flex justify-content-around">
  <div class="border border-primary d-inline-block" style="width:64px;height:64px"></div>
  <div class="border border-dark d-inline-block" style="width:64px;height:64px"></div>
  <div class="border border-red-400 d-inline-block" style="width:64px;height:64px"></div>
  <div class="border border-teal-400 d-inline-block" style="width:64px;height:64px"></div>
</div>

```html
<div class="border border-primary ..."></div>
<div class="border border-dark ..."></div>
<div class="border border-red-400 ..."></div>
<div class="border border-teal-400 ..."></div>
```

### Changing the border color

Use the `border-{color}` to modify the default `border-color` of a component.

<div class="bd-example">
  <div class="col-md-5 mx-auto">
    <label for="inputPassword5" class="form-label">Password</label>
    <input type="password" id="inputPassword5" class="form-control border-danger" aria-describedby="passwordHelpBlock" />
    <div id="passwordHelpBlock" class="form-text text-danger">Your password must be 8-20 characters long.</div>
  </div>
</div>

```html
<input class="form-control border-danger ..." />
```

### Changing the opacity

To change that opacity, override `--bs-border-opacity` via custom styles or inline styles. See [border opacity]({{< docsref "border-opacity" >}})

<div class="bd-example d-flex justify-content-around">
  <div class="border border-4 border-secondary d-inline-block" style="--bs-border-opacity:1;width:64px;height:64px"></div>
  <div class="border border-4 border-secondary d-inline-block" style="--bs-border-opacity:0.75;width:64px;height:64px"></div>
  <div class="border border-4 border-secondary d-inline-block" style="--bs-border-opacity:0.5;width:64px;height:64px"></div>
</div>

```html
  <div class="border border-4 border-secondary ..." style="--bs-border-opacity: 1"></div>
  <div class="border border-4 border-secondary ..." style="--bs-border-opacity: .75"></div>
  <div class="border border-4 border-secondary ..." style="--bs-border-opacity: .5"></div>
```