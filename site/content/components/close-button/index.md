---
layout: docs
title: Close Button
description: "A close button used for dismissing content like modals and alerts."
toc: true
group: actions
menu:
  components:
---

**Bootstrap 5 Checkbox component**

Close button built with the latest Bootstrap 5. The close button component used for dismissing content like modals and alerts.

## Basic example 

Provide an option to dismiss or close a component with `.btn-close`. 

Default styling is limited, but highly customizable. Modify the Sass variables to replace the default `background-image`. Be sure to include text for screen readers by `aria-label`.

{{< example class="text-center" >}}
<button type="button" class="btn-close" aria-label="Close"></button>
{{</ example >}}

## Disabled

To disabled a close buttons by add the `disabled` attribute. We’ve also applied `pointer-events: none` and `user-select: none` to preventing hover and active states from triggering.

{{< example class="text-center" >}}
<button type="button" class="btn-close" disabled aria-label="Close"></button>
{{</ example >}}

## White variant

Change the default `.btn-close` to be white with the `.btn-close-white` class. This class uses the filter property to invert the `background-image`.

{{< example class="bg-dark text-center" >}}
<button type="button" class="btn-close btn-close-white" aria-label="Close"></button>
<button type="button" class="btn-close btn-close-white" disabled aria-label="Close"></button>
{{</ example >}}


## Size

Fancy larger or smaller close buttons? Add `.btn-close-lg` or `.btn-close-sm` for additional sizes.

{{< example class="d-grid gap-2" >}}
<button type="button" class="btn-close btn-close-sm" aria-label="Close"></button>
<button type="button" class="btn-close" aria-label="Close"></button>
<button type="button" class="btn-close btn-close-lg" aria-label="Close"></button>
{{</ example >}}
