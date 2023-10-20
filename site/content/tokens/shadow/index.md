---
layout: docs
title: Shadow
seo_title: Shadow tokens
description: "Tokens use for the box shadow of elements."
toc: false
menu:
  tokens:
---

{{< shadow-tokens.inline >}}
<table class="table">
  <thead>
    <tr>
      <th scope="col" class="">Token and description</th>
      <th scope="col" class="text-nowrap bd-w-24">Light value</th>
      <th scope="col" class="text-nowrap bd-w-24">Dark value</th>
    </tr>
  </thead>
  <tbody>
    {{ range .Site.Data.tokens.shadow }}
      {{ range $token, $value := . }}
        <tr>
          <td class="align-top pt-4 border-bottom-0">
            <div class="d-flex flex-column gap-2">
              <div>
                <code class="px-2 d-inline-block">--ds-{{ replace $token "." "-" }}</code>
              </div>
            </div>
          </td>
          <td class="align-top pt-4 border-bottom-0">
            {{- $style := printf "style=\"box-shadow:%s\""  (index $value.colors 0) -}}
            {{ with $style }}
              <div class="d-inline-block bd-w-24 bd-h-6 rounded border" {{ . | safeHTMLAttr }}></div>
            {{ end }}
          </td>
          <td class="align-top pt-4 border-bottom-0">
            {{- $style := printf "style=\"box-shadow:%s\""  (index $value.colors 1) -}}
            {{ with $style }}
              <div class="d-inline-block bd-w-24 bd-h-6 rounded border" {{ . | safeHTMLAttr }}></div>
            {{ end }}
          </td>
        </tr>
        <tr>
        <td class="pb-4" colspan="3">
          <p class="mb-0">{{ $value.desc }}</p>
        </td>
      </tr>
      {{ end }}
    {{ end }}
  </tbody>
</table>
{{</ shadow-tokens.inline >}}
