---
layout: docs
title: Alerts
description: "Alerts is flash messages that shows contextual feedback messages for attracts the user's attention without interrupting the user's task."
toc: true
group: feedback
tabs: true
menu:
  components:
---

{{< tabs "alerts" >}}
{{< tab "Overview" >}}

**Bootstrap 5 Alerts component**

Responsive Alerts built with the latest Bootstrap 5. Alerts component shows contextual feedback messages for attracts the user's attention without interrupting the user's task.

Alerts are available for any length of text, as well as an optional close button. 

## Basic examples

By default, alert does not apply any style, use one of the eight required contextual classes (e.g., `.alert-success`) for proper styling.

{{< callout warning >}}
The `.alert-success`, `alert-warning`, `alert-info`, and `alert-danger` have a distinctive icon and color by default on FastBootstrap.
{{</ callout >}}

{{< example class="d-flex flex-column" >}}
<div class="alert alert-info" role="alert">
  This is an info alert — <a href="#">check it out</a>
</div>
<div class="alert alert-warning" role="alert">
  This is a warning alert — <a href="#">check it out</a>
</div>
<div class="alert alert-danger" role="alert">
  This is an error alert — <a href="#">check it out</a>
</div>
<div class="alert alert-success" role="alert">
  This is a success alert — <a href="#">check it out</a>
</div>
<div class="alert alert-primary" role="alert">
  This is a primary alert — <a href="#">check it out</a>
</div>
<div class="alert alert-secondary" role="alert">
  This is a secondary alert — <a href="#">check it out</a>
</div>
<div class="alert alert-light" role="alert">
  This is a light alert — <a href="#">check it out</a>
</div>
<div class="alert alert-dark" role="alert">
  This is a dark alert — <a href="#">check it out</a>
</div>
{{</ example >}}


## Dismiss button

Using the alert JavaScript plugin, it’s possible to dismiss any alert inline. Here’s how:

- Be sure you’ve loaded the alert plugin, or the compiled Bootstrap JavaScript.
- Add a close button and the `.alert-dismissible` class, which adds extra padding to the right of the alert and positions the close button.
- On the close button, add the `data-bs-dismiss="alert"` attribute, which triggers the JavaScript functionality. Be sure to use the `<button>` element with it for proper behavior across all devices.
- To animate alerts when dismissing them, be sure to add the `.fade` and `.show` classes.

{{< example >}}
<div class="alert alert-success alert-dismissible fade show" role="alert">
  This is an success alert — check it out!
  <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
</div>
<div class="alert alert-info alert-dismissible fade show" role="alert">
  <h5 class="alert-heading">More</h5>
  This is an info alert — check it out!
  <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
</div>
{{</ example >}}

{{< callout warning >}}
When an alert is dismissed, the element is completely removed from the page structure. If a keyboard user dismisses the alert using the close button, their focus will suddenly be lost and, depending on the browser, reset to the start of the page/document. For this reason, we recommend including additional JavaScript that listens for the `closed.bs.alert` event and programmatically sets `focus()` to the most appropriate location in the page. If you’re planning to move focus to a non-interactive element that normally does not receive focus, make sure to add `tabindex="-1"` to the element.
{{</ callout >}}

## Link color 

Use the `.alert-link` utility class to quickly provide matching colored links within any alert.

{{< example >}}
<div class="alert alert-success" role="alert">
  A simple success alert with <a href="#" class="alert-link">an example link</a>. Give it a click if you like.
</div>
<div class="alert alert-danger" role="alert">
  A simple danger alert with <a href="#" class="alert-link">an example link</a>. Give it a click if you like.
</div>
<div class="alert alert-warning" role="alert">
  A simple warning alert with <a href="#" class="alert-link">an example link</a>. Give it a click if you like.
</div>
<div class="alert alert-info" role="alert">
  A simple info alert with <a href="#" class="alert-link">an example link</a>. Give it a click if you like.
</div>
<div class="alert alert-primary" role="alert">
  A simple primary alert with <a href="#" class="alert-link">an example link</a>. Give it a click if you like.
</div>
<div class="alert alert-secondary" role="alert">
  A simple secondary alert with <a href="#" class="alert-link">an example link</a>. Give it a click if you like.
</div>
<div class="alert alert-light" role="alert">
  A simple light alert with <a href="#" class="alert-link">an example link</a>. Give it a click if you like.
</div>
<div class="alert alert-dark" role="alert">
  A simple dark alert with <a href="#" class="alert-link">an example link</a>. Give it a click if you like.
</div>
{{</ example >}}

## Description

Alerts can also contain additional HTML elements like headings, paragraphs and dividers. Add `.alert-heading` to a formatted title above the content.

{{< example >}}
<div class="alert alert-info" role="alert">
  <h6 class="alert-heading">The Modern Prometheus</h6>
  <p>You will rejoice to hear that no disaster has accompanied the commencement of an enterprise which you have regarded with such evil forebodings. I arrived here yesterday, and my first task is to assure my dear sister of my welfare and increasing confidence in the success of my undertaking.</p>
  <a class="fw-semibold fs-sm" href="#">Learn more</a>
</div>
{{</ example >}}

## Icons

Similarly, you can use flexbox utilities and Font Awesome Icons to create alerts with icons. Depending on your icons and content, you may want to add more utilities or custom styles.

{{< example >}}
<div class="alert alert-primary" role="alert">
  <i class="fa-solid fa-circle-info fa-lg text-blue-400"></i> This is a primary alert — check it out!
</div>
{{</ example >}}

## Variants

Use flex and our color utilities: [`text-{color}`]({{< docsref "text-color" >}}) and [`bg-{color}`]({{< docsref "background-color" >}}) to change alert style.

### Filled

{{< example >}}
<div class="alert bg-neutral-500 text-white" role="alert">
  This is a simple alert — check it out!
</div>
<div class="alert text-bg-primary" role="alert">
  <i class="fa-solid fa-circle-info fa-lg text-white me-2"></i>
  This is a simple alert — check it out!
</div>
<div class="alert text-bg-secondary" role="alert">
  <i class="fa-solid fa-circle-question fa-lg text-white me-2"></i>
  This is a simple alert — check it out!
</div>
{{</ example >}}

### Outlined

Use [`border-{color}`]({{< docsref "border-color" >}}) utilities to change the border color of alter.

{{< example >}}
<div class="alert alert-info border border-blue-400 bg-transparent" role="alert">
  This is a simple alert — check it out!
</div>
<div class="alert alert-danger border border-red-400 bg-transparent" role="alert">
  This is a simple alert — check it out!
</div>
<div class="alert alert-warning border border-yellow-400 bg-transparent" role="alert">
  This is a simple alert — check it out!
</div>
{{</ example >}}

## Accessibility

(WAI-ARIA: https://www.w3.org/WAI/ARIA/apg/patterns/alert/)

When the component is dynamically displayed, the content is automatically announced by most screen readers. At this time, screen readers do not inform users of alerts that are present when the page loads.

Using color to add meaning only provides a visual indication, which will not be conveyed to users of assistive technologies such as screen readers. Ensure that information denoted by the color is either obvious from the content itself (for example the visible text), or is included through alternative means, such as additional hidden text.

Actions must have a tab index of 0 so that they can be reached by keyboard-only users.

{{</ tab >}}

{{< tab "API" >}}

## Usage 

### Initialize

Initialize elements as alerts

```js
const alertList = document.querySelectorAll('.alert')
const alerts = [...alertList].map(element => new bootstrap.Alert(element))
```

{{< callout info >}}
For the sole purpose of dismissing an alert, it isn't necessary to initialize the component manually via the JS API. By making use of `data-bs-dismiss="alert"`, the component will be initialized automatically and properly dismissed.

See the [triggers](#triggers) section for more details.
{{< /callout >}}

### Triggers

{{% js-dismiss "alert" %}}

**Note that closing an alert will remove it from the DOM.**

## Methods

You can create an alert instance with the alert constructor, for example:

```js
const bsAlert = new bootstrap.Alert('#myAlert')
```

This makes an alert listen for click events on descendant elements which have the `data-bs-dismiss="alert"` attribute. (Not necessary when using the data-api’s auto-initialization.)

{{< bs-table >}}
| Method | Description |
| --- | --- |
| `close` | Closes an alert by removing it from the DOM. If the `.fade` and `.show` classes are present on the element, the alert will fade out before it is removed. |
| `dispose` | Destroys an element's alert. (Removes stored data on the DOM element) |
| `getInstance` | Static method which allows you to get the alert instance associated to a DOM element. For example: `bootstrap.Alert.getInstance(alert)`. |
| `getOrCreateInstance` | Static method which returns an alert instance associated to a DOM element or create a new one in case it wasn't initialized. You can use it like this: `bootstrap.Alert.getOrCreateInstance(element)`. |
{{< /bs-table >}}

Basic usage:

```js
const alert = bootstrap.Alert.getOrCreateInstance('#myAlert')
alert.close()
```

## Events

Bootstrap's alert plugin exposes a few events for hooking into alert functionality.

{{< bs-table >}}
| Event | Description |
| --- | --- |
| `close.bs.alert` | Fires immediately when the `close` instance method is called. |
| `closed.bs.alert` | Fired when the alert has been closed and CSS transitions have completed. |
{{< /bs-table >}}

```js
const myAlert = document.getElementById('myAlert')
myAlert.addEventListener('closed.bs.alert', event => {
  // do something, for instance, explicitly move focus to the most appropriate element,
  // so it doesn't get lost/reset to the start of the page
  // document.getElementById('...').focus()
})
```

{{</ tab >}}
{{</ tabs >}}