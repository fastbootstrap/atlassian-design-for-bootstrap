---
layout: docs
title: Color System
description: "Our color system is based on a Atlassian design color foundation that designed for our components and element styles."
toc: true
menu:
  get-started:    
    weight: 50
aliases:
  - /docs/color
---

Bootstrap theme there are have 6 main color scheme include `primary`, `success`, `danger`, `warning` and `info`, these color scheme also available on our color system.

For most components and element styles, colors are applied using Atlassian design's [design tokens]({{< docsref "tokens/color" >}}).

## Theme colors

We use a subset of all colors to create a smaller color palette for generating color schemes. 

{{< theme-color.inline >}}
<table class="table api-class-table">
  <thead>
    <tr>
      <th>Description</th>
      <th>Light value</th>
      <th>Dark value</th>
    </tr>
  </thead>
  <tbody>
    {{ range (index .Site.Data "theme-colors") }}
    {{ $name := .name }}
    <tr>
      <td>
        <div class="mb-3 fw-semibold">{{ $name }}</div>
        <p class="mb-0">{{ .desc }}</p>
      </td>
      <td>     
        <div class="bd-w-24 bd-h-6 d-inline-block" style="background: {{ .light }}"></div>   
      </td>
      <td>
        {{ if ne (replace .dark " " "") "" }}
          <div class="bd-w-24 bd-h-6 d-inline-block" style="background: {{ .dark }}"></div>
        {{ else }}
            - 
        {{ end }}  
      </td>
    </tr>
    {{ end }}
  </tbody>
</table>
{{</ theme-color.inline >}}

## Color palette

{{< palette.inline >}}
<div class="row g-3 mt-4">
  {{ range .Site.Data.colors }}
    {{ range $title, $colors := . }}
      {{ if not (in (slice "Neutral" "DarkNeutral") $title) }}
        <div class="col-md-6 col-lg-4">
          <p class="fw-bold fs-sm">{{ $title }}</p>
          <ul class="list-unstyled">
            {{ range $colors }}
              {{ range $depth, $color := . }}
                {{ $name := printf "%s%s" $title $depth }}
                {{ $text := "black"}}
                <li class="py-2 ps-4 pe-2 bd-h-9 w-100 d-inline-flex align-items-center" style="background: {{ $color }}">
                  <div class="fs-sm" style="color:{{ if lt $depth 700 }}black{{ else }}white{{ end }}">{{ $name }}</div>
                </li>
              {{ end }}
            {{ end }}
          </ul>
        </div>   
      {{ end }}      
    {{ end }}  
  {{ end }} 
</div>

{{ range .Site.Data.colors }}
  {{ range $title, $values := . }}
    {{ if (in (slice "Neutral" "DarkNeutral") $title) }}
      {{ $dark := eq $title "DarkNeutral" }}
      <h3 class="mt-4">{{ cond $dark "Dark mode neutrals" "Light mode neutrals" }}</h3>
       <div class="row g-3 mt-2 rounded" style="background-color:{{ cond $dark "#161A1D" "#FAFBFC" }}">
        {{ range $values }}
          {{ range $style, $colors := .}}
            <div class="col-md-6">
            <p class="fw-bold fs-sm" style="color:{{if $dark}}#C7D1DB{{end}}">{{ $style }}</p>
            <ul class="list-unstyled">
              {{ range $colors }}                  
                {{ range $depth, $color := . }}
                  {{ $name := printf "%s%s" $title $depth }}
                  {{ $text := "black"}}
                  <li class="py-2 ps-4 pe-2 bd-h-9 w-100 d-inline-flex align-items-center" style="background: {{ $color }}">
                    {{- $isWhite := false -}}
                    {{- if and $dark (le $depth 500 ) -}}
                      {{- $isWhite = true -}}
                    {{- else if and (ne $dark true) (ge $depth 700 ) -}}
                      {{- $isWhite = true -}}
                    {{ end }}
                    <div class="fs-sm" style="color:{{ cond $isWhite "white" "black" }}">{{ $name }}</div>
                  </li>
                {{ end }}
              {{ end }}
            </ul>
            </div>
          {{ end }}
        {{ end }}
        </div>
    {{ end }}
  {{ end }}
{{ end}}

{{</ palette.inline >}}