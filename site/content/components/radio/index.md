---
layout: docs
title: Radio
description: "Radio group allows users to select only one option from a number of choices. "
toc: true
group: inputs
menu:
  components:
---

**Bootstrap 5 Radio component**

Radio component is used to allow a user to select a single choice from a number of options. A radio button is generally displayed in a radio group.

## Overview

Browser default checkboxes and radios are replaced with the help of `.form-check`, a series of classes for both input types that improves the layout and behavior of their HTML elements, that provide greater customization and cross browser consistency.

Structurally, our `<input>`s and `<label>`s are sibling elements as opposed to an `<input>` within a `<label>`. This is slightly more verbose as you must specify id and for attributes to relate the `<input>` and `<label>`. We use the sibling selector (~) for all our `<input>` states, like :checked or :disabled. When combined with the .form-check-label class, we can easily style the text for each item based on the `<input>`’s state.

We use the sibling selector (`~`) for all our `<input>` states, like `:checked` or `:disabled`. When combined with the `.form-check-label` class, we can easily style the text for each item based on the `<input>`’s state.

## Basic example

Radio buttons should have the most commonly used option selected by default in a radio group.

{{< example >}}
<div class="form-check">
  <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
  <label class="form-check-label" for="flexRadioDefault1">
    Default radio
  </label>
</div>
<div class="form-check">
  <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" checked />
  <label class="form-check-label" for="flexRadioDefault2">
    Default checked radio
  </label>
</div>
{{</ example >}}

## Disabled

Add the `disabled` attribute and the associated `<label>`s are automatically styled to match with a lighter color to help indicate the input’s state.

{{< example >}}
<div class="form-check">
  <input class="form-check-input" type="radio" name="flexRadioDisabled" id="flexRadioDisabled" disabled />
  <label class="form-check-label" for="flexRadioDisabled">
    Disabled radio
  </label>
</div>
<div class="form-check">
  <input class="form-check-input" type="radio" name="flexRadioDisabled" id="flexRadioCheckedDisabled" checked disabled />
  <label class="form-check-label" for="flexRadioCheckedDisabled">
    Disabled checked radio
  </label>
</div>
{{</ example >}}

## Radio toggle buttons

Radio button group can have a single entry checked at any one time.

Create a radio button group by using `.btn` styles rather than `.form-check-label` on the `<label>` elements with a [button group]({{< ref "button-group" >}}). See an example of [Radio button group]({{< ref "button-group#radio-button-groups" >}}).

{{< example >}}
<div class="btn-toolbar">
  <div class="btn-group">
    <input type="radio" class="btn-check" name="options" id="option1" autocomplete="off" checked />
    <label class="btn btn-default" for="option1">Mon</label>
    <input type="radio" class="btn-check" name="options" id="option2" autocomplete="off" />
    <label class="btn btn-default" for="option2">Tue</label>
    <input type="radio" class="btn-check" name="options" id="option3" autocomplete="off" />
    <label class="btn btn-default" for="option3">Wed</label>
    <input type="radio" class="btn-check" name="options" id="option4" autocomplete="off" />
    <label class="btn btn-default" for="option4">Thu</label>
    <input type="radio" class="btn-check" name="options" id="option5" autocomplete="off" />
    <label class="btn btn-default" for="option5">Fri</label>
  </div>
</div>
{{</ example >}}

## Without labels

Omit the wrapping `.form-check` for checkboxes and radios that have no label text. Remember to still provide some form of accessible name for assistive technologies (for instance, using aria-label).

{{< example class="d-grid gap-2" >}}
<input class="form-check-input" type="radio" name="radioNoLabel" id="radioNoLabel1" value="" aria-label="..." checked />
<input class="form-check-input" type="radio" name="radioNoLabel" id="radioNoLabel2" value="" aria-label="..." />
{{</ example >}}

## Inline

Group checkboxes or radios on the same horizontal row by adding `.form-check-inline` to any `.form-check`.

{{< example >}}
<div class="form-check form-check-inline">
  <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option1" />
  <label class="form-check-label" for="inlineRadio1">1</label>
</div>
<div class="form-check form-check-inline">
  <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option2" />
  <label class="form-check-label" for="inlineRadio2">2</label>
</div>
<div class="form-check form-check-inline">
  <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio3" value="option3" disabled />
  <label class="form-check-label" for="inlineRadio3">3 (disabled)</label>
</div>
{{</ example >}}

## Right to Left

Put your radios on the opposite side with the `.form-check-reverse` modifier class.

{{< example >}}
<div class="form-check form-check-reverse">
  <input class="form-check-input" type="radio" value="" name="reverseRadio" id="reverseRadio1" checked />
  <label class="form-check-label" for="reverseRadio1">
    Radio label one
  </label>
</div>
<div class="form-check form-check-reverse">
  <input class="form-check-input" type="radio" value="" name="reverseRadio" id="reverseRadio2" />
  <label class="form-check-label" for="reverseRadio2">
    Radio label two
  </label>
</div>
{{</ example >}}

## Size

Radios allows you to change the size in four different sizes: `small`, `medium`, `large`, and `extra-large`. The medium size is the default.

{{< example class="d-grid gap-2" >}}
<div class="form-check">
  <input class="form-check-input form-check-input-sm" type="radio" value="" name="flexRadioSize" id="flexRadioSizeSmall" />
  <label class="form-check-label" for="flexRadioSizeSmall">
    Small radio
  </label>
</div>
<div class="form-check">
  <input class="form-check-input" type="radio" value="" name="flexRadioSize" id="flexRadioSizeMedium" checked />
  <label class="form-check-label" for="flexRadioSizeMedium">
    Medium radio
  </label>
</div>
<div class="form-check">
  <input class="form-check-input form-check-input-lg" type="radio" value="" name="flexRadioSize" id="flexRadioSizeLarge" />
  <label class="form-check-label" for="flexRadioSizeLarge">
    Large radio
  </label>
</div>
<div class="form-check">
  <input class="form-check-input form-check-input-xl" type="radio" value="" name="flexRadioSize" id="flexRadioSizeExtraLarge" />
  <label class="form-check-label" for="flexRadioSizeExtraLarge">
    Extra large radio
  </label>
</div>
{{</ example >}}

## Accessibility

(WAI-ARIA: https://www.w3.org/WAI/ARIA/apg/patterns/radiobutton/)

- All form controls should have labels, and this includes radio buttons, checkboxes, and switches. In most cases, this is done by using the `<label>` HTML element.
- When a label can't be used, it's necessary to add an attribute directly to the input component. In this case, you can apply the additional attribute (e.g. `aria-label`, `aria-labelledby`, `title`) on the element.