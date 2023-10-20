---
layout: docs
title: Space
seo_title: Space tokens
description: "Tokens use for the spacing of UI."
toc: false
menu:
  tokens:
---

{{< space-tokens.inline >}}
<table class="table">
  <thead>
    <tr>
      <th scope="col" class="">Token and description</th>
      <th scope="col" class="text-nowrap bd-w-24">Value</th>
    </tr>
  </thead>
  <tbody>
    {{ range .Site.Data.tokens.space }}
      {{ range $token, $value := . }}
        <tr>
          <td class="align-top py-4">
            <div class="d-flex flex-column gap-2">
              <div>
                <code class="px-2 d-inline-block">--ds-{{ replace $token "." "-" }}</code>
              </div>
              <p class="mb-0">{{ $value.desc }}</p>
            </div>
          </td>
          <td class="align-top py-4">
            {{- $style := printf "style=\"background-color:var(--ds-background-accent-purple-subtle);width:%s\""  $value.value -}}
            {{ with $style }}
              <div class="d-inline-block bd-h-6" {{ . | safeHTMLAttr }}></div>
            {{ end }}
            <div class="text-left fs-xs">{{ $value.value }}</div>
          </td>         
        </tr>
        <tr>
      </tr>
      {{ end }}
    {{ end }}
  </tbody>
</table>
{{</ space-tokens.inline >}}
