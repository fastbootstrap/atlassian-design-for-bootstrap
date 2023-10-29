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

## Alert styles

By default, alert does not apply any style, use one of the eight required contextual classes (e.g., `.alert-success`) for proper styling. For inline dismissal, use the alerts JavaScript plugin.

### Success

Add `.alert-success` to the `.alert`.

{{< example >}}
<div class="alert alert-success" role="alert">
  <div class="d-flex gap-4">
    <span><i class="fa-solid fa-circle-check text-success"></i></span>
    <div>
      File has been uploaded.
    </div>
  </div>
</div>
{{</ example >}}

### Danger

Add `.alert-danger` to the `.alert`.

{{< example >}}
<div class="alert alert-danger" role="alert">
  <div class="d-flex gap-4">
    <span><i class="fa-solid fa-circle-exclamation text-danger"></i></span>
    <div class="d-flex flex-column gap-2">
      <h6 class="mb-0">This account has been permanently deleted</h6>
      <p class="mb-0">The user `IanAtlas` no longer has access to Atlassian services.</p>
    </div>
  </div>
</div>
{{</ example >}}

### Warning

Add `.alert-warning` to the `.alert`.

{{< example >}}
<div class="alert alert-warning" role="alert">
  <div class="d-flex gap-4">
    <span><i class="fa-solid fa-circle-exclamation text-warning"></i></span>
    <div class="d-flex flex-column gap-2">
      <h6 class="mb-0">Cannot connect to the database</h6>
      <p class="mb-0">We are unable to save any progress at this time.</p>
    </div>
  </div>
</div>
{{</ example >}}

### Primary

Add `.alert-primary` to the alert.

{{< example >}}
<div class="alert alert-primary" role="alert">
  <div class="d-flex gap-4">
    <span><i class="fa-solid fa-circle-info text-primary"></i></span>
    <div class="d-flex flex-column gap-2">
      <h6 class="mb-0">Editing is restricted</h6>
      <p class="mb-0">You're not allowed to change these restrictions. It's either due to the restrictions on the page, or permission settings for this space.</p>
    </div>
  </div>
</div>
{{</ example >}}

### More styles

Add `.alert-secondary` to the alert.

{{< example >}}
<div class="alert alert-secondary" role="alert">
  A simple secondary alert—check it out!
</div>
{{</ example >}}

Add `.alert-info` to the alert for display information.

{{< example >}}
<div class="alert alert-info" role="alert">
  A simple info alert—check it out!
</div>
{{</ example >}}

Add `.alert-light` to the alert.

{{< example >}}
<div class="alert alert-light" role="alert">
  A simple light alert—check it out!
</div>
{{</ example >}}

Add `.alert-dark` to the alert.

{{< example >}}
<div class="alert alert-dark" role="alert">
  A simple dark alert—check it out!
</div>
{{</ example >}}


## Description

Alerts can also contain additional HTML elements like headings, paragraphs and dividers. Add `.alert-heading` to a formatted title above the content.

{{< example >}}
<div class="alert alert-primary" role="alert">
  <h6 class="alert-heading">The Modern Prometheus</h6>
  <p class="mb-2">You will rejoice to hear that no disaster has accompanied the commencement of an enterprise which you have regarded with such evil forebodings. I arrived here yesterday, and my first task is to assure my dear sister of my welfare and increasing confidence in the success of my undertaking.</p>
  <hr>
  <a class="fw-semibold fs-sm" href="#">Learn more</a>
</div>
{{</ example >}}


## Dismiss button

Using the alert JavaScript plugin, it’s possible to dismiss any alert inline. Here’s how:

- Be sure you’ve loaded the alert plugin, or the compiled Bootstrap JavaScript.
- Add a [close button]({{< docsref "close-button" >}}) and the `.alert-dismissible` class, which adds extra padding to the right of the alert and positions the close button.
- On the close button, add the `data-bs-dismiss="alert"` attribute, which triggers the JavaScript functionality. Be sure to use the `<button>` element with it for proper behavior across all devices.
- To animate alerts when dismissing them, be sure to add the `.fade` and `.show` classes.

{{< example >}}

<div class="alert alert-success alert-dismissible fade show" role="alert">
  Holy guacamole! You should check in on some of those fields below.
  <button type="button" class="btn-close btn-close-sm" data-bs-dismiss="alert" aria-label="Close"></button>
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

## Link colors

Default link color.

{{< example >}}
<div class="alert alert-primary" role="alert">
  <div class="d-flex gap-4">
    <span><i class="fa-solid fa-circle-info text-primary"></i></span>
    <div class="d-flex flex-column gap-2">
      <h6 class="mb-0">Editing is restricted</h6>
      <p class="mb-0">
        You're not allowed to change these restrictions. It's either due to the
        restrictions on the page, or permission settings for this space.
      </p>
      <div class="d-flex gap-1">
        <a href="#">Request edit access</a>
        <span>·</span>
        <a href="#">Learn more</a>
      </div>
    </div>
  </div>
</div>
{{</ example >}}

Use the `.alert-link` utility class to quickly provide matching colored links within any alert.


{{< example >}}
<div class="alert alert-primary" role="alert">
  A simple primary alert with <a href="#" class="alert-link">an example link</a>. Give it a click if you like.
</div>
<div class="alert alert-secondary" role="alert">
  A simple secondary alert with <a href="#" class="alert-link">an example link</a>. Give it a click if you like.
</div>
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
<div class="alert alert-light" role="alert">
  A simple light alert with <a href="#" class="alert-link">an example link</a>. Give it a click if you like.
</div>
<div class="alert alert-dark" role="alert">
  A simple dark alert with <a href="#" class="alert-link">an example link</a>. Give it a click if you like.
</div>
{{</ example >}}

## Custom icon

Similarly, you can use flexbox utilities and Font Awesome Icons to create alerts with icons. Depending on your icons and content, you may want to add more utilities or custom styles.

{{< example >}}
<div class="alert alert-primary" role="alert">
  <div class="d-flex gap-4">
    <span>
    <svg width="24" height="24" viewBox="0 0 24 24"><g fill="rgb(12, 102, 228)" fill-rule="evenodd"><path d="M10.935 6v4.738L6.997 19h10.005l-3.938-8.262V6h-2.129zm7.873 12.14A2 2 0 0117.002 21H6.997a2 2 0 01-1.805-2.86l3.743-7.854V4h6.13v6.286l3.743 7.853z" fill-rule="nonzero"></path><path d="M9 13h6l3 7H6z"></path><rect x="8" y="3" width="8" height="2" rx="1"></rect></g></svg></span>
    <div class="d-flex flex-column gap-2">
      <h6 class="mb-0">The Modern Prometheus</h6>
      <p class="mb-0">You will rejoice to hear that no disaster has accompanied the commencement of an enterprise which you have regarded with such evil forebodings. </p>
    </div>
  </div>
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
const alertList = document.querySelectorAll(".alert");
const alerts = [...alertList].map((element) => new bootstrap.Alert(element));
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
const bsAlert = new bootstrap.Alert("#myAlert");
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
const alert = bootstrap.Alert.getOrCreateInstance("#myAlert");
alert.close();
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
const myAlert = document.getElementById("myAlert");
myAlert.addEventListener("closed.bs.alert", (event) => {
  // do something, for instance, explicitly move focus to the most appropriate element,
  // so it doesn't get lost/reset to the start of the page
  // document.getElementById('...').focus()
});
```

{{</ tab >}}
{{</ tabs >}}
