---
layout: docs
title: Button Group
description: "Button group component is a grouping of buttons gives users access to frequently performed, related to each other actions."
toc: true
group: actions
menu:
  components:
---

**Bootstrap 5 Button group component**

Responsive button group built with the latest Bootstrap 5. Button group component is a series of buttons together on a single line or stack them in a vertical column.

## Basic example

Wrap a series of buttons with `.btn` in `.btn-group`.

{{< example >}}
<div class="btn-group" role="group" aria-label="Basic example">
  <button type="button" class="btn btn-default">First button</button>
  <button type="button" class="btn btn-default">Second button</button>
  <button type="button" class="btn btn-default">Third button</button>
</div>
{{</ example >}}

{{< callout warning >}}

#### Ensure correct `role` and provide a label

In order for assistive technologies (such as screen readers) to convey that a series of buttons is grouped, an appropriate `role` attribute needs to be provided. For button groups, this would be `role="group"`, while toolbars should have a role="toolbar".

In addition, groups and toolbars should be given an explicit label, as most assistive technologies will otherwise not announce them, despite the presence of the correct `role` attribute. In the examples provided here, we use `aria-label`, but alternatives such as `aria-labelledby` can also be used.

{{</ callout >}}

These classes can also be added to links. Use the `.active` class to highlight a link.

{{< example class="d-flex align-items-start gap-2 flex-wrap" >}}
<div class="btn-group">
  <a href="#" class="btn btn-default active" aria-current="page">Active link</a>
  <a href="#" class="btn btn-default">Link 2</a>
  <a href="#" class="btn btn-default">Link 3</a>
</div>
{{</ example >}}

## Outlined styles

Use the following button styles to show the colors only for the border of the element.

{{< example >}}
<div class="btn-group" role="group" aria-label="Basic example">
  <button type="button" class="btn btn-outline-primary">First button</button>
  <button type="button" class="btn btn-outline-primary">Second button</button>
  <button type="button" class="btn btn-outline-primary">Third button</button>
</div>
{{</ example >}}

## Button toolbar

Combine sets of button groups into button toolbars for more complex components. The spacing will be compacted between each of group button on the button toolbar.

{{< example >}}
<div class="btn-toolbar" role="toolbar" aria-label="Toolbar with button groups">
  <div class="btn-group" role="group" aria-label="First group">
    <button type="button" class="btn btn-primary">1</button>
    <button type="button" class="btn btn-primary">2</button>
    <button type="button" class="btn btn-primary">3</button>
    <button type="button" class="btn btn-primary">4</button>
  </div>
  <div class="btn-group ms-2" role="group" aria-label="Second group">
    <button type="button" class="btn btn-secondary">5</button>
    <button type="button" class="btn btn-secondary">6</button>
    <button type="button" class="btn btn-secondary">7</button>
  </div>
  <div class="btn-group ms-2" role="group" aria-label="Third group">
    <button type="button" class="btn btn-info">8</button>
  </div>
</div>
{{</ example >}}

Feel free to mix input groups with button groups in your toolbars. Similar to the example above, you’ll likely need some utilities though to space things properly.

{{< example class="d-grid gap-3" >}}
<div class="btn-toolbar" role="toolbar">
  <div class="btn-group me-3" role="group" aria-label="First group">
    <button type="button" class="btn btn-outline-primary">1</button>
    <button type="button" class="btn btn-outline-primary">2</button>
    <button type="button" class="btn btn-outline-primary">3</button>
    <button type="button" class="btn btn-outline-primary">4</button>
  </div>
  <div class="input-group">
    <div class="input-group-text">@</div>
    <input type="text" class="form-control" placeholder="Input group example" 
    aria-label="Input group example" aria-describedby="btnGroupAddon">
  </div>
</div>

<div class="btn-toolbar justify-content-between" role="toolbar">
  <div class="btn-group me-3" role="group" aria-label="First group">
    <button type="button" class="btn btn-outline-primary">1</button>
    <button type="button" class="btn btn-outline-primary">2</button>
    <button type="button" class="btn btn-outline-primary">3</button>
    <button type="button" class="btn btn-outline-primary">4</button>
  </div>
  <div class="input-group">
    <div class="input-group-text">@</div>
    <input type="text" class="form-control" placeholder="Input group example" 
    aria-label="Input group example" aria-describedby="btnGroupAddon2">
  </div>
</div>
{{</ example >}}

## Checkbox button groups

Combine [checkbox toggle button]({{< docsref "checkbox#checkbox-button-group" >}}) into a seamless looking button group.

{{< example >}}
<div class="btn-toolbar justify-content-between" role="toolbar">
  <div class="btn-group" role="group" aria-label="Basic checkbox toggle button group">
    <input type="checkbox" class="btn-check" id="btncheck1" autocomplete="off" checked />
    <label class="btn btn-default" for="btncheck1">Mon</label>
    <input type="checkbox" class="btn-check" id="btncheck2" autocomplete="off" />
    <label class="btn btn-default" for="btncheck2">Tue</label>
    <input type="checkbox" class="btn-check" id="btncheck3" autocomplete="off" />
    <label class="btn btn-default" for="btncheck3">Wed</label>
    <input type="checkbox" class="btn-check" id="btncheck4" autocomplete="off" />
    <label class="btn btn-default" for="btncheck4">Thu</label>
  </div>
</div>
{{</ example >}}

## Radio button groups

Combine [radio toggle button]({{< docsref "radio#radio-button-group" >}}) into a seamless looking button group.

{{< example >}}
<div class="btn-toolbar justify-content-between" role="toolbar">
  <div class="btn-group" role="group" aria-label="Basic radio toggle button group">
    <input type="radio" class="btn-check" name="btnradio" id="btnradio1" autocomplete="off" checked />
    <label class="btn btn-outline-primary" for="btnradio1">Mon</label>
    <input type="radio" class="btn-check" name="btnradio" id="btnradio2" autocomplete="off" />
    <label class="btn btn-outline-primary" for="btnradio2">Tue</label>
    <input type="radio" class="btn-check" name="btnradio" id="btnradio3" autocomplete="off" />
    <label class="btn btn-outline-primary" for="btnradio3">Wed</label>
    <input type="radio" class="btn-check" name="btnradio" id="btnradio4" autocomplete="off" />
    <label class="btn btn-outline-primary" for="btnradio4">Thu</label>
  </div>
</div>
{{</ example >}}

## Colors

Use the `.btn-{color}` to control the appearance of the button.

{{< example class="d-grid gap-3 auto-cols-min justify-content-center" >}}
<div class="btn-group" role="group">
  <button type="button" class="btn btn-primary">Left</button>
  <button type="button" class="btn btn-primary">Middle</button>
  <button type="button" class="btn btn-primary">Right</button>
</div>
<div class="btn-group" role="group">
  <button type="button" class="btn btn-secondary">Left</button>
  <button type="button" class="btn btn-secondary">Middle</button>
  <button type="button" class="btn btn-secondary">Right</button>
</div>
<div class="btn-group" role="group">
  <button type="button" class="btn btn-danger">Left</button>
  <button type="button" class="btn btn-danger">Middle</button>
  <button type="button" class="btn btn-danger">Right</button>
</div>
<div class="btn-group" role="group">
  <button type="button" class="btn btn-success">Left</button>
  <button type="button" class="btn btn-success">Middle</button>
  <button type="button" class="btn btn-success">Right</button>
</div>
{{</ example >}}

## Sizes

Instead of applying button sizing classes to every button in a group, just add `.btn-group-*` to each `.btn-group`, including each one when nesting multiple groups.

{{< example class="d-grid gap-3 auto-cols-min justify-content-center" >}}
<div class="btn-group btn-group-lg" role="group" aria-label="Large button group">
  <button type="button" class="btn btn-primary">Left</button>
  <button type="button" class="btn btn-primary">Middle</button>
  <button type="button" class="btn btn-primary">Right</button>
</div>
<div class="btn-group" role="group" aria-label="Default button group">
  <button type="button" class="btn btn-primary">Left</button>
  <button type="button" class="btn btn-primary">Middle</button>
  <button type="button" class="btn btn-primary">Right</button>
</div>
<div class="btn-group btn-group-sm" role="group" aria-label="Small button group">
  <button type="button" class="btn btn-primary">Left</button>
  <button type="button" class="btn btn-primary">Middle</button>
  <button type="button" class="btn btn-primary">Right</button>
</div>
{{</ example >}}

## Vertical stacked group

Use the `.btn-group-vertical` to make a set of buttons appear vertically stacked rather than horizontally. 

{{< example >}}
<div class="btn-group-vertical" role="group" aria-label="Vertical button group">
  <button type="button" class="btn btn-primary">Button 1</button>
  <button type="button" class="btn btn-primary">Button 2</button>
  <button type="button" class="btn btn-primary">Button 3</button>
  <button type="button" class="btn btn-primary">Button 4</button>
  <button type="button" class="btn btn-primary">Button 5</button>
</div>
{{</ example >}}

Remove the space between on each of button using [margin]({{< docsref "margin" >}}) helpers

{{< example >}}
<div class="btn-group-vertical ms-3" role="group" aria-label="Vertical button group">
  <button type="button" class="btn btn-primary rounded-0 rounded-top">Button 1</button>
  <button type="button" class="btn btn-primary rounded-0 mt-0">Button 2</button>
  <button type="button" class="btn btn-primary rounded-0 mt-0">Button 3</button>
  <button type="button" class="btn btn-primary rounded-0 mt-0">Button 4</button>
  <button type="button" class="btn btn-primary rounded-0 rounded-bottom mt-0">Button 5</button>
</div>
{{</ example >}}

You also can nesting the dropdown

{{< example >}}
<div class="btn-group-vertical" role="group" aria-label="Vertical button group">
  <button type="button" class="btn btn-primary">Button</button>
  <button type="button" class="btn btn-primary">Button</button>
  <div class="btn-group" role="group">
    <button type="button" class="btn btn-primary dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
      Dropdown
    </button>
    <ul class="dropdown-menu">
      <li><a class="dropdown-item" href="#">Dropdown link</a></li>
      <li><a class="dropdown-item" href="#">Dropdown link</a></li>
    </ul>
  </div>
  <button type="button" class="btn btn-primary">Button</button>
  <div class="btn-group" role="group">
    <button type="button" class="btn btn-primary dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
      Dropdown
    </button>
    <ul class="dropdown-menu">
      <li><a class="dropdown-item" href="#">Dropdown link</a></li>
      <li><a class="dropdown-item" href="#">Dropdown link</a></li>
    </ul>
  </div>
</div>
{{</ example >}}

## Nesting group

Place a `.btn-group` within another `.btn-group` when you want dropdown menus mixed with a series of buttons.

{{< example >}}
<div class="btn-toolbar">
  <div class="btn-group" role="group" aria-label="Button group with nested dropdown">
    <button type="button" class="btn btn-primary">1</button>
    <button type="button" class="btn btn-primary">2</button>
    <div class="btn-group" role="group">
      <button type="button" class="btn btn-primary dropdown-toggle"
       data-bs-toggle="dropdown" aria-expanded="false">Dropdown</button>
      <ul class="dropdown-menu">
        <li><a class="dropdown-item" href="#">Dropdown link</a></li>
        <li><a class="dropdown-item" href="#">Dropdown link</a></li>
      </ul>
    </div>
    <button type="button" class="btn btn-primary">3</button>
  </div>
</div>
{{</ example >}}
