---
layout: docs
title: Range slider
description: "Range slider component lets users choose a numeric value from the given values on a slider."
toc: true
group: inputs
menu:
  components:
---

**Bootstrap 5 Range component**

Use our custom range inputs for consistent cross-browser styling and built-in customization.

## Range slider

Create custom `<input type="range">` controls with `.form-range`. The track (the background) and thumb (the value) are both styled to appear the same across browsers. 

{{< example class="bd-example-range" >}}
<input type="range" class="form-range" id="customRange1"
 value="32" style="--track-fg-width:32%" />
{{</ example >}}

## How to Filling

**As only Firefox supports “filling” their track from the left or right of the thumb as a means to visually indicate progress, Bootstrap do not currently support it yet.**

<span class="lozenge new fs-sm">New Feature</span>

Changing the local CSS variable `--track-fg-width` when a slider input's value has changed via javascript.

{{< example class="bd-example-range" >}}
<input type="range" min="0" max="100" class="form-range"
 value="50" style="--track-fg-width:50%" />
{{</ example >}}

Javascript code:

```js
range.addEventListener('input', (e) => {
  var value = (range.value / max) * 100;
  range.style.setProperty('--track-fg-width', value + '%');
});
```

## Disabled

Add the `disabled` boolean attribute on an input to give it a grayed out appearance, remove pointer events, and prevent focusing.

{{< example >}}
<input type="range" min="0" max="100" class="form-range"
 value="50" style="--track-fg-width:50%" disabled/>
{{</ example >}}

## With Min and max

Range inputs have implicit values for `min` and `max`—`0` and `100`, respectively. You may specify new values for those using the `min` and `max` attributes.

{{< example class="bd-example-range" >}}
<input type="range" class="form-range" min="0" max="5" />
{{</ example >}}

## With Steps

By default, range inputs “snap” to integer values. To change this, you can specify a `step` value. In the example below, we double the number of steps by using `step="0.5"`.


{{< example class="bd-example-range" >}}
<input type="range" class="form-range" min="0" max="5" step="0.5" />
{{</ example >}}