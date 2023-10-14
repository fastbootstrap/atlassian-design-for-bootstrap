---
layout: docs
title: Text field
description: "Text fields allow users to input custom text entries with a keyboard."
toc: true
group: inputs
menu:
  components:
---

**Bootstrap 5 Text fields component**

Give textual form controls like `<input>`s and `<textarea>`s an upgrade with custom styles, sizing, focus states, and more.

## Basic TextField

Using the `.form-control` class on the `<input>` element.

{{< example >}}
<input type="text" class="form-control" placeholder="Click here to input..." />
{{</ example >}}

## Disabled

Add the `disabled` boolean attribute on an `input` to give it a grayed out appearance, remove pointer events, and prevent focusing.

{{< example >}}
<input class="form-control" type="text" placeholder="can't touch this..."
 aria-label="disabled input example" disabled />
{{</ example >}}

## Readonly

Add the `readonly` boolean attribute on an `input` to prevent modification of the input’s value. `readonly` inputs can still be focused and selected, while `disabled` inputs cannot.

{{< example >}}
<input class="form-control" type="text" value="Is read only..."
 aria-label="readonly input example" readonly />
{{</ example >}}

## Readonly plain text

If you want to have `<input readonly>` elements in your form styled as plain text, replace `.form-control` with .`form-control-plaintext` to remove the default form field styling and preserve the correct `margin` and `padding`.

{{< example class="d-flex flex-column" >}}
<div class="mb-3 row">
  <label for="staticEmail" class="col-sm-2 col-form-label">Email</label>
  <div class="col-sm-10">
    <input type="text" readonly class="form-control-plaintext" id="staticEmail" value="email@example.com">
  </div>
</div>
<div class="mb-3 row">
  <label for="inputPassword" class="col-sm-2 col-form-label">Password</label>
  <div class="col-sm-10">
    <input type="password" class="form-control" id="inputPassword">
  </div>
 </div>
{{</ example >}}

## Sizes

Set heights using classes like `.form-control-lg` and `.form-control-sm`.

{{< example class="d-grid gap-3">}}
<input class="form-control form-control-sm" type="text" placeholder=".form-control-sm" />
<input class="form-control" type="text" placeholder=".form-control" />
<input class="form-control form-control-lg" type="text" placeholder=".form-control-lg" />
{{</ example >}}


## Validation

Use the `.is-invalid` and `is-valid` shows the error and success state for the text input.

{{< example >}}

<form class="was-validated">
  <div class="mb-3">
    <label for="validationDefault01" class="form-label">First name</label>
    <input type="text" class="form-control is-invalid" id="validationDefault01" required />
    <div class="invalid-feedback">This field is required.</div>
  </div>
  <div>
    <label for="validationDefault02" class="form-label">Last name</label>
    <input type="text" class="form-control is-valid" id="validationDefault02" />
    <div class="valid-feedback">Field validation is successful.</div>
  </div>
</form>
{{</ example >}}


See more information about how to validation at the [Validation section]({{< ref "validation" >}}).

## Input types

The `<input>` element support for all HTML5 types: `text`, `password`, `datetime`, `datetime-local`, `date`, `month`, `time`, `week`, `number`, `email`, `url`, `search`, `tel`, and `color`.

### File input

Set the `type="file"` to the `<input>`.

{{< example >}}
<input class="form-control" type="file" id="formFile">
{{</ example >}}

### Color input

Set the `type="color"` and add `.form-control-color` to the `<input>`. We use the modifier class to set fixed heights and override some inconsistencies between browsers. 

{{< example >}}
<label for="exampleColorInput" class="form-label">Color picker</label>
<input type="color" class="form-control form-control-sm form-control-color"
 id="exampleColorInput" value="#8777d9" title="Choose your color">
{{</ example >}}

You can use ` form-control-sm` or `.form-control-lg` to change its sizes.

### Email input

The input field `type="email"` defines the email address field. The input value is automatically validated to ensure that it is a properly formatted email address.

{{< example >}}
<input type="email" class="form-control" placeholder="Email input" />
{{</ example >}}

### Password input

The input field `type="password"` defines a password field, thus hiding characters as confidential information.

{{< example >}}
<input type="password" class="form-control" placeholder="Password input" />
{{</ example >}}

### Number input

The input `type="number"` defines field for entering a number.

{{< example >}}
<input type="number" class="form-control" placeholder="Number input" />
{{</ example >}}

### Phone number input

The input `type="tel"` defines a field for entering a telephone number.

{{< example >}}
<input type="tel" class="form-control" placeholder="Phone number input" />
{{</ example >}}

### URL input

The input `type="url"` defines a field for entering a URL.

{{< example >}}
<input type="url" class="form-control" placeholder="Url input" />
{{</ example >}}

## Multiline input

A `textarea` tag lets a user input a longer amount of text than a standard text field `input`.

{{< example >}}
<textarea class="form-control" id="textAreaExample" rows="3" placeholder="Add a message here"></textarea>
{{</ example >}}

## Datalist Input

Datalists allow you to create a group of `<option`>s that can be accessed (and autocompleted) from within an `<input>`. These are similar to `<select>` elements, but come with more menu styling limitations and differences.

While most browsers and operating systems include some support for `<datalist>` elements, their styling is inconsistent at best. Learn more about [support for datalist elements](https://caniuse.com/datalist).

{{< example >}}
<label for="exampleDataList" class="form-label">Datalist example</label>
<input class="form-control" list="datalistOptions" id="exampleDataList" placeholder="Type to search...">
<datalist id="datalistOptions">

  <option value="San Francisco">
  <option value="New York">
  <option value="Seattle">
  <option value="Los Angeles">
  <option value="Chicago">
</datalist>
{{</ example >}}

## Accessibility

- Avoid using placeholder text whenever possible. Make sure any critical information is communicated either in the field label or using helper text below the field. Search fields or brief examples are the only exceptions where placeholder text is OK.
