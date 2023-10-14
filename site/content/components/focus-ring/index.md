---
layout: docs
title: Focus ring
description: "Focus ring is an utility classes that allows you to add and modify custom focus ring styles to elements and components."
toc: true
group: utilities
menu:
  components:
---

The `.focus-ring` helper removes the default `outline` on `:focus`, replacing it with a `box-shadow` that can be more broadly customized. The new shadow is made up of a series of CSS variables, inherited from the :root level, that can be modified for any element or component.

## Example

{{< example class="d-flex flex-column gap-4 align-items-start" >}}
<input type="text" class="form-control focus-ring" autofocus></input>

<a href="#" class="d-inline-flex focus-ring py-1 px-2 text-decoration-none border rounded-2">
  Custom focus ring
</a>
{{</ example >}}

## Customize

Modify the `--bs-focus-ring-*` CSS variables as needed to change the default appearance.

{{< example >}}
<a href="#" class="d-inline-flex focus-ring py-1 px-2 text-decoration-none border rounded-2" 
style="--bs-focus-ring-color: rgba(var(--bs-success-rgb), .25)">
  Green focus ring
</a>
{{</ example >}}

In addition to `.focus-ring`, we have several `.focus-ring-*` utilities to modify the helper class defaults. Modify the color with any of our theme colors. Note that the light and dark variants may not be visible on all background colors given current color mode support.

{{< example >}}
<p><a href="#" class="d-inline-flex focus-ring focus-ring-primary py-1 px-2 text-decoration-none border rounded-2">Primary focus</a></p>
<p><a href="#" class="d-inline-flex focus-ring focus-ring-secondary py-1 px-2 text-decoration-none border rounded-2">Secondary focus</a></p>
<p><a href="#" class="d-inline-flex focus-ring focus-ring-success py-1 px-2 text-decoration-none border rounded-2">Success focus</a></p>
<p><a href="#" class="d-inline-flex focus-ring focus-ring-danger py-1 px-2 text-decoration-none border rounded-2">Danger focus</a></p>
<p><a href="#" class="d-inline-flex focus-ring focus-ring-warning py-1 px-2 text-decoration-none border rounded-2">Warning focus</a></p>
<p><a href="#" class="d-inline-flex focus-ring focus-ring-info py-1 px-2 text-decoration-none border rounded-2">Info focus</a></p>
<p><a href="#" class="d-inline-flex focus-ring focus-ring-light py-1 px-2 text-decoration-none border rounded-2">Light focus</a></p>
<p><a href="#" class="d-inline-flex focus-ring focus-ring-dark py-1 px-2 text-decoration-none border rounded-2">Dark focus</a></p>
{{</ example >}}