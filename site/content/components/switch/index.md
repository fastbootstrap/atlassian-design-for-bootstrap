---
layout: docs
title: Switch
description: "Switches allow users to turn an individual option on or off. "
toc: true
group: inputs
menu:
  components:
---

**Bootstrap 5 Switch component**

Responsive Switch build with the latest Bootstrap 5. They are usually used to activate or deactivate a specific setting like on/off button.


## Basic switch

A switch has the markup of a custom checkbox but uses the `.form-switch` class to render a toggle switch. Consider using `role="switch"` to more accurately convey the nature of the control to assistive technologies that support this role. In older assistive technologies, it will simply be announced as a regular checkbox as a fallback. Switches also support the disabled attribute.

{{< example class="d-flex flex-column gap-3" >}}
<div class="form-check form-switch">
  <input class="form-check-input" type="checkbox" role="switch" id="switchCheckDefault" />
  <label class="form-check-label" for="switchCheckDefault">Default switch</label>
</div>
<div class="form-check form-switch">
  <input class="form-check-input" type="checkbox" role="switch" id="switchCheckChecked" checked />
  <label class="form-check-label" for="switchCheckChecked">Checked switch</label>
</div>
{{</ example >}}

## Disabled state

Add a `disabled` attribute to the switch input nakes it disabled.

{{< example class="d-flex flex-column gap-3" >}}
<div class="form-check form-switch">
  <input class="form-check-input" type="checkbox" role="switch" id="switchCheckDisabled" disabled />
  <label class="form-check-label" for="switchCheckDisabled">Disabled switch</label>
</div>
<div class="form-check form-switch">
  <input class="form-check-input" type="checkbox" role="switch" id="switchCheckCheckedDisabled" checked disabled />
  <label class="form-check-label" for="switchCheckCheckedDisabled">Disabled checked switch</label>
</div>
{{</ example >}}

## Sizes

Changing the size of the switch using CSS variable: `--bs-form-switch-width`, `--bs-form-switch-height`;

{{< example class="d-grid gap-2" >}}
<div class="form-check form-switch" 
style="--bs-form-switch-width:40px;--bs-form-switch-height:20px">
    <input class="form-check-input" type="checkbox" role="switch" id="switchSizeLarge" />
    <label class="form-check-label ms-2" for="switchSizeLarge">Large switch</label>
</div>
<div class="form-check form-switch" 
style="--bs-form-switch-width:60px;--bs-form-switch-height:24px">
    <input class="form-check-input" type="checkbox" role="switch" id="switchSizeLargeChecked" checked />
    <label class="form-check-label ms-2" for="switchSizeLargeChecked">Large checked switch</label>
</div>
{{</ example >}}

## Label placement

You can change the placement of the label by the [padding]({{< docsref "padding" >}}), [margin]({{< docsref "margin" >}}) and [flex direction]({{< docsref "flex-direction" >}}) utilities.

### Top placement

Display the label on top of the switch by use the `d-flex` and `flex-column-reverse` to wrap it.

{{< example >}}
<div class="form-check form-switch p-0">
  <div class="d-flex flex-column-reverse gap-1">
    <input class="form-check-input ms-0" type="checkbox" role="switch" id="switchCheckLabelTop" />
    <label class="form-check-label" for="switchCheckLabelTop">Top placement</label>
  </div>
</div>
{{</ example >}}

### Start placement 

Display the label on left of the switch use the `d-inline-flex` and `flex-row-reverse` to wrap it..

{{< example >}}
<div class="form-check form-switch p-0">
  <div class="d-inline-flex flex-row-reverse gap-1">
    <input class="form-check-input ms-0" type="checkbox" role="switch" id="switchCheckLabelStart" />
    <label class="form-check-label" for="switchCheckLabelStart">Start placement</label>
  </div>
</div>
{{</ example >}}

### Bottom placement

Display the label on bottom of the switch by use the `d-flex` and `flex-column` to wrap it..

{{< example >}}
<div class="form-check form-switch p-0">
  <div class="d-flex flex-column gap-1">
    <input class="form-check-input ms-0" type="checkbox" role="switch" id="switchCheckLabelBottom" />
    <label class="form-check-label" for="switchCheckLabelBottom">Bottom placement</label>
  </div>
</div>
{{</ example >}}

## Checkboxes vs. Switches

When to Use a Switch or Checkbox ? Check out [Checkboxes vs. Switches](https://uxplanet.org/checkbox-vs-toggle-switch-7fc6e83f10b8).

## Accessibility

(WAI-ARIA: https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/switch_role)