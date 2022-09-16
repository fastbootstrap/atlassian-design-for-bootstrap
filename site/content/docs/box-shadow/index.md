---
layout: docs
title: Box shadow
description: "Use the box-shadow utilities to controlling the shadow of an element."
toc: true
group: effects
menu:
  docs:    
---

The `box-shadow` utilities to add or remove the shadow of an element.

{{< class-api "box-shadow" >}}

## Basic example

While shadows on components are disabled by default in Bootstrap and can be enabled via `$enable-shadows`, you can also quickly add or remove a shadow with our `box-shadow` utility classes. Includes support for `.shadow-none` and three default sizes (which have associated variables to match).

{{< example class="d-grid gap-4 bg-light" >}}
<div class="shadow-sm p-3 bg-white rounded">shadow-sm</div>
<div class="shadow p-3 bg-white rounded">shadow</div>
<div class="shadow-lg p-3 bg-white rounded">shadow-lg</div>
{{< /example >}}

## Removing the shadow

Use `shadow-none` to remove an existing box shadow from an element. This is most commonly used to remove a shadow that was applied at a smaller breakpoint.

<div class="bd-example bg-light">
    <div class="shadow-none p-3 bg-white rounded">shadow-none</div>
</div>

```html
<div class="shadow-none ..."></div>
```