---
layout: docs
title: Link
description: "Links allow users to navigate to a different location."
toc: true
group: utilities
menu:
  components:
aliases:
 - /docs/link
---

## Basic link

The example below a link with default behavior.

{{< example>}}
<div class="d-flex flex-column">
  <a href="#">Default link</a>
</div>
{{</ example >}}

## Colored links

You can use the `.link-*` classes to colorize links. Unlike the `.text-*` classes, these classes have a `:hover` and `:focus` state.

{{< example class="d-flex flex-wrap gap-3">}}
<a href="#" class="link-primary">Primary link</a>
<a href="#" class="link-secondary">Secondary link</a>
<a href="#" class="link-success">Success link</a>
<a href="#" class="link-danger">Danger link</a>
<a href="#" class="link-warning">Warning link</a>
<a href="#" class="link-info">Info link</a>
<a href="#" class="link-light">Light link</a>
<a href="#" class="link-dark">Dark link</a>
{{</ example >}}

Or take the [text color]({{< docsref "text-color" >}}) utilities `text-{color}` to change the link color.

{{< example class="d-flex flex-wrap gap-3" >}}
<a href="#" class="text-neutral-500">link 1</a>
<a href="#" class="text-yellow-300">link 2</a>
<a href="#" class="text-red-500">link 4</a>
<a href="#" class="text-tea-400">link 5</a>
{{</ example >}}


## Reset link color

Reset a link’s color with `.text-reset`, so that it inherits the color from its parent.

{{< example >}}
<p class="text-muted">
  Muted text with a <a href="#" class="text-reset">reset link</a>.
</p>
{{</ example >}}

## No underline 

Use the [text decoration utilities]({{< docsref "text-decoration" >}}) `text-decoration-none` to remove the underline when mouse hover a link.

{{< example>}}
<div class="d-flex flex-column">
  <a href="#" class="text-decoration-none">This ia a link</a>
</div>
{{</ example >}}

## Related

- [Stretched Link]({{< docsref "stretched-link" >}})