---
layout: docs
title: Range
description: "Range component lets users choose a numeric value from the given values on a slider."
toc: true
group: inputs
menu:
  components:
---

**Bootstrap 5 Range component**

Use our custom range inputs for consistent cross-browser styling and built-in customization.

## Basic example

Create custom `<input type="range">` controls with `.form-range`. The track (the background) and thumb (the value) are both styled to appear the same across browsers. As only Firefox supports “filling” their track from the left or right of the thumb as a means to visually indicate progress, we do not currently support it.

{{< example >}}
<input type="range" class="form-range form-range-filling" id="customRange1" />
{{</ example >}}

## Filling

Add a `.form-range-filling` to a slider input. Changing the local CSS variable `--track-fg-width` when a slider input's value has changed, via javascript.

{{< example class="bd-example-range" >}}
<input type="range" min="0" max="100" class="form-range form-range-filling"
 value="20" style="--track-fg-width:20%" />
<input type="range" min="0" max="100" class="form-range form-range-filling"
 value="50" style="--track-fg-width:50%" />
<input type="range" min="0" max="100" class="form-range form-range-filling"
 value="85" style="--track-fg-width:85%" />
{{</ example >}}

## Disabled

Add the `disabled` boolean attribute on an input to give it a grayed out appearance, remove pointer events, and prevent focusing.

{{< example >}}
<input type="range" class="form-range" id="disabledRange" disabled />
<input type="range" min="0" max="100" class="form-range form-range-filling" value="50" style="--track-fg-width:50%" disabled/>
{{</ example >}}

## Options

### Min and max

Range inputs have implicit values for `min` and `max`—`0` and `100`, respectively. You may specify new values for those using the `min` and `max` attributes.

{{< example class="bd-example-range" >}}
<input type="range" class="form-range" min="0" max="5" id="customRange2" />
{{</ example >}}

### Steps

By default, range inputs “snap” to integer values. To change this, you can specify a `step` value. In the example below, we double the number of steps by using `step="0.5"`.


{{< example class="bd-example-range" >}}
<input type="range" class="form-range" min="0" max="5" step="0.5" id="customRange3" />
{{</ example >}}