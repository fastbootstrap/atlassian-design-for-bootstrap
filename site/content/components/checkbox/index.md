---
layout: docs
title: Checkbox
description: "Checkboxs allow users to select multiple items from a list of individual items, or to mark one individual item as selected."
toc: true
group: inputs
menu:
  components:
---

**Bootstrap 5 Checkbox component**

Checkbox component built with the latest Bootstrap 5. Checkboxe is used to select one or more options in a list of related items. 

Checkbox also can be used to turn an option on or off. If you have a single option, avoid using a checkbox and use an on/off switch instead.

## Basic checkboxes

Browser default checkboxes and radios are replaced with the help of `.form-check`, a series of classes for both input types that improves the layout and behavior of their HTML elements, that provide greater customization and cross browser consistency.

Structurally, our `<input>`s and `<label>`s are sibling elements as opposed to an `<input>` within a `<label>`. This is slightly more verbose as you must specify id and for attributes to relate the `<input>` and `<label>`.

We use the sibling selector (`~`) for all our `<input>` states, like `:checked` or `:disabled`. When combined with the `.form-check-label` class, we can easily style the text for each item based on the `<input>`’s state.

{{< example class="d-grid gap-2" >}}
<div class="form-check">
  <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
  <label class="form-check-label" for="flexCheckDefault">
    Default checkbox
  </label>
</div>
<div class="form-check">
  <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked" checked />
  <label class="form-check-label" for="flexCheckChecked">
    Checked checkbox
  </label>
</div>
{{</ example >}}

## Disabled

Add the `disabled` attribute and the associated `<label>`s are automatically styled to match with a lighter color to help indicate the input’s state.

{{< example class="d-grid gap-2" >}}
<div class="form-check">
  <input class="form-check-input" type="checkbox" value="" id="flexCheckDisabled" disabled />
  <label class="form-check-label" for="flexCheckDisabled">Disabled checkbox</label>
</div>
<div class="form-check">
  <input class="form-check-input" type="checkbox" value="" id="flexCheckCheckedDisabled" checked disabled />
  <label class="form-check-label" for="flexCheckCheckedDisabled">Disabled checked checkbox</label>
</div>
{{</ example >}}

## Indeterminate

Checkboxes can utilize the [`:indeterminate`](https://developer.mozilla.org/en-US/docs/Web/CSS/:indeterminate) pseudo class when manually set via JavaScript.  There is no available HTML attribute for specifying it.

{{< example class="d-flex flex-column gap-3 bd-example-indeterminate" >}}
<div class="form-check">
  <input class="form-check-input" type="checkbox" value="" id="flexCheckIndeterminate" />
  <label class="form-check-label" for="flexCheckIndeterminate">
    Indeterminate checkbox
  </label>
</div>
<div class="form-check">
  <input class="form-check-input" type="checkbox" value="" id="flexCheckIndeterminateDisabled" disabled>
  <label class="form-check-label" for="flexCheckIndeterminateDisabled">
    Disabled indeterminate checkbox
  </label>
</div>
{{</ example >}}

**Javascript code**

```js
const inputs = document.getElementsByTagName("input");
for (let i = 0; i < inputs.length; i++) {
  inputs[i].indeterminate = true;
}
```

## Checkbox toggle buttons

Create button-like checkboxes by using `.btn` styles rather than `.form-check-label` on the `<label>` elements. 

These toggle buttons can further be grouped in a [button group]({{< ref "button-group" >}}) if needed. See an example of [Checkbox button group]({{< ref "button-group#checkbox-button-groups" >}}).

{{< example >}}
<div class="btn-group">
  <input type="checkbox" class="btn-check" id="btn-check" autocomplete="off" />
  <label class="btn btn-default" for="btn-check">Day</label>

  <input type="checkbox" class="btn-check" id="btn-check2" checked autocomplete="off" />
  <label class="btn btn-default" for="btn-check2">Week</label>

  <input type="checkbox" class="btn-check" id="btn-check3" autocomplete="off" />
  <label class="btn btn-default" for="btn-check3">Month</label>

  <input type="checkbox" class="btn-check" id="btn-check4" autocomplete="off" />
  <label class="btn btn-default" for="btn-check4">Year</label>

  <input type="checkbox" class="btn-check" id="btn-check5" autocomplete="off" disabled />
  <label class="btn btn-default" for="btn-check5">Disabled</label>
</div>
{{</ example >}}

The following example use an `.btn` style rather than the pre-defined button style.

{{< example >}}
<input type="checkbox" class="btn-check" id="btn-check-4" autocomplete="off">
<label class="btn" for="btn-check-4">Single toggle</label>

<input type="checkbox" class="btn-check" id="btn-check-5" checked autocomplete="off">
<label class="btn" for="btn-check-5">Checked</label>

<input type="checkbox" class="btn-check" id="btn-check-6" autocomplete="off" disabled>
<label class="btn" for="btn-check-6">Disabled</label>
{{</ example >}}

{{< callout >}}

Visually, these checkbox toggle buttons are identical to the [button plugin toggle buttons]({{< docsref "button/#toggle-states" >}}). However, they are conveyed differently by assistive technologies: the checkbox toggles will be announced by screen readers as “checked”/“not checked” (since, despite their appearance, they are fundamentally still checkboxes), whereas the button plugin toggle buttons will be announced as “button”/“button pressed”. The choice between these two approaches will depend on the type of toggle you are creating, and whether or not the toggle will make sense to users when announced as a checkbox or as an actual button.

{{</ callout >}}

## Without labels

Omit the wrapping `.form-check` for checkboxes and radios that have no label text. Remember to still provide some form of accessible name for assistive technologies (for instance, using aria-label). See the [forms overview accessibility]({{< docsref "form#accessibility" >}}) section for details.

{{< example class="d-flex flex-wrap gap-4" >}}
<input class="form-check-input" type="checkbox" id="checkboxNoLabe2" value="" aria-label="..." checked />
<input class="form-check-input" type="checkbox" id="checkboxNoLabel" value="" aria-label="..." />
<input class="form-check-input" type="checkbox" id="checkboxNoLabe3" value="" aria-label="..." disabled />
<input class="form-check-input" type="checkbox" id="checkboxNoLabe4" value="" aria-label="..." checked disabled />

{{</ example >}}

## Inline

Group checkboxes or radios on the same horizontal row by adding `.form-check-inline` to any `.form-check`.

{{< example >}}
<div class="form-check form-check-inline">
  <input class="form-check-input" type="checkbox" id="inlineCheckbox1" value="option1" />
  <label class="form-check-label" for="inlineCheckbox1">One</label>
</div>

<div class="form-check form-check-inline">
  <input class="form-check-input" type="checkbox" id="inlineCheckbox2" value="option2" />
  <label class="form-check-label" for="inlineCheckbox2">Two</label>
</div>

<div class="form-check form-check-inline">
  <input class="form-check-input" type="checkbox" id="inlineCheckbox3" value="option3" disabled />
  <label class="form-check-label" for="inlineCheckbox3">Three (disabled)</label>
</div>
{{</ example >}}

## Reverse

Put your checkboxes on the opposite side with the `.form-check-reverse` modifier class.

{{< example >}}
<div class="form-check form-check-reverse">
  <input class="form-check-input" type="checkbox" value="" id="reverseCheck1" />
  <label class="form-check-label" for="reverseCheck1">
    Reverse checkbox
  </label>
</div>

<div class="form-check form-check-reverse">
  <input class="form-check-input" type="checkbox" value="" id="reverseCheck2" disabled />
  <label class="form-check-label" for="reverseCheck2">
    Disabled reverse checkbox
  </label>
</div>
{{</ example >}}

## Accessibility

(WAI-ARIA: https://www.w3.org/WAI/ARIA/apg/patterns/checkbox/)

- All form controls should have labels, and this includes radio buttons, checkboxes, and switches. In most cases, this is done by using the `<label>` HTML element.
- When a label can't be used, it's necessary to add an attribute directly to the input component. In this case, you can apply the additional attribute (e.g. `aria-label`, `aria-labelledby`, `title`) on the element.

## Related

- [Radio]({{< docsref "radio" >}})
- [Button Group]({{< docsref "button-group" >}})
- [Switch]({{< docsref "switch" >}})