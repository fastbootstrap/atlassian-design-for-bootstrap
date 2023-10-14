---
layout: docs
title: Offcanvas
description: "Offcanvas is a hidden sidebar on the page used for navigation, shopping carts, etc."
toc: true
tabs: true
group: navigation
menu:
  components:
---

{{< tabs "offcanvas" >}}
{{< tab "Overview" >}}

**Bootstrap 5 Offcanvas component**

Responsive offcanvas/drawer built with the latest Bootstrap 5. Offcanvas component used for hidden sidebar on the page for navigation, shopping carts etc.

Examples for build hidden sidebars into your project for navigation, shopping carts, and more with a few classes and our JavaScript plugin.

## Offcanvas components

Offcanvas includes support for a header with a close button and an optional body class for some initial `padding`. We suggest that you include offcanvas headers with dismiss actions whenever possible, or provide an explicit dismiss action.

{{< example class="bd-example-offcanvas overflow-hidden" >}}
<div class="offcanvas offcanvas-start show shadow" tabindex="-1" id="offcanvas" aria-labelledby="offcanvasLabel">
  <div class="offcanvas-header">
    <h4 class="offcanvas-title" id="offcanvasLabel">Offcanvas</h4>
    <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
  </div>
  <div class="offcanvas-body">
    Content for the offcanvas goes here. You can place just about any Bootstrap component or custom elements here.
  </div>
</div>
{{</ example >}}

## Offcanvas example

Use the buttons below to show and hide an offcanvas element via JavaScript that toggles the `.show` class on an element with the `.offcanvas` class.

- `.offcanvas` hides content (default)
- `.offcanvas.show` shows content

You can use a link with the `href` attribute, or a button with the `data-bs-target` attribute. In both cases, the `data-bs-toggle="offcanvas"` is required.

{{< example >}}
<!-- With Href-->
<a class="btn btn-link" data-bs-toggle="offcanvas" href="#offcanvasExample" role="button" aria-controls="offcanvasExample">
  Link with href
</a>
<!-- with data-bs-toggle="offcanvas" -->
<button class="btn btn-primary" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasExample" aria-controls="offcanvasExample">
  Button with data-bs-target
</button>
<div class="offcanvas offcanvas-start" tabindex="-1" id="offcanvasExample" aria-labelledby="offcanvasExampleLabel">
  <div class="offcanvas-header">
    <h4 class="offcanvas-title" id="offcanvasExampleLabel">Offcanvas</h4>
    <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
  </div>
  <div class="offcanvas-body">
      Some text as placeholder. In real life you can have the elements 
      you have chosen. Like, text, images, lists, etc.
  </div>
</div>
{{</ example >}}

## Static backdrop

When backdrop is set to static, the offcanvas will not close when clicking outside of it.

{{< example >}}
<button class="btn btn-primary" type="button" data-bs-toggle="offcanvas" data-bs-target="#staticBackdrop" aria-controls="staticBackdrop">
  Static offcanvas
</button>
<div class="offcanvas offcanvas-start" data-bs-backdrop="static" tabindex="-1" id="staticBackdrop" aria-labelledby="staticBackdropLabel">
  <div class="offcanvas-header">
    <h4 class="offcanvas-title" id="staticBackdropLabel">Offcanvas</h4>
    <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
  </div>
  <div class="offcanvas-body">
    <div>
      I will not close if you click outside of me.
    </div>
  </div>
</div>
{{< /example >}}

## Body scrolling

Scrolling the `<body>` element is disabled when an offcanvas and its backdrop are visible. Use the `data-bs-scroll="true"` attribute to enable `<body>` scrolling.

{{< example >}}
<button class="btn btn-primary" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasScrolling" aria-controls="offcanvasScrolling">Enable body scrolling</button>
<div class="offcanvas offcanvas-start" data-bs-scroll="true" data-bs-backdrop="false" tabindex="-1" id="offcanvasScrolling" aria-labelledby="offcanvasScrollingLabel">
  <div class="offcanvas-header">
    <h4 class="offcanvas-title" id="offcanvasScrollingLabel">Offcanvas with body scrolling</h4>
    <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
  </div>
  <div class="offcanvas-body">
    <p>Try scrolling the rest of the page to see this option in action.</p>
  </div>
</div>
{{< /example >}}

### Body scrolling with backdrop 

You can also enable <body> scrolling with a visible backdrop by disabled the `data-bs-backdrop` attribute or set `data-bs-backdrop="true"`.

{{< example >}}
<button class="btn btn-primary" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasWithBothOptions" aria-controls="offcanvasWithBothOptions">
  Enable both scrolling & backdrop
</button>
<div class="offcanvas offcanvas-start" data-bs-scroll="true" tabindex="-1" id="offcanvasWithBothOptions" aria-labelledby="offcanvasWithBothOptionsLabel">
  <div class="offcanvas-header">
    <h4 class="offcanvas-title" id="offcanvasWithBothOptionsLabel">Backdrop with scrolling</h4>
    <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
  </div>
  <div class="offcanvas-body">
    <p>Try scrolling the rest of the page to see this option in action.</p>
  </div>
</div>
{{</ example >}}

## Placement

There's no default placement for offcanvas components, so you must add one of the modifier classes below.

- `.offcanvas-start` places offcanvas on the left of the viewport (shown above)
- `.offcanvas-end` places offcanvas on the right of the viewport
- `.offcanvas-top` places offcanvas on the top of the viewport
- `.offcanvas-bottom` places offcanvas on the bottom of the viewport

Try the top, right, and bottom examples out below.

{{< example >}}
<button class="btn btn-primary" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasTop" aria-controls="offcanvasTop">Top offcanvas</button>
<button class="btn btn-primary" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasLeft" aria-controls="offcanvasLeft">Left offcanvas</button>
<button class="btn btn-primary" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight">Right offcanvas</button>
<button class="btn btn-primary" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasBottom" aria-controls="offcanvasBottom">Bottom offcanvas</button>
<!-- offcanvas -->
<div class="offcanvas offcanvas-top" tabindex="-1" id="offcanvasTop" aria-labelledby="offcanvasTopLabel">
  <div class="offcanvas-header">
    <h4 class="offcanvas-title" id="offcanvasTopLabel">Offcanvas top</h4>
    <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
  </div>
  <div class="offcanvas-body">
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sit.
  </div>
</div>
<div class="offcanvas offcanvas-start" tabindex="-1" id="offcanvasLeft" aria-labelledby="offcanvasLeftLabel">
  <div class="offcanvas-header">
    <h4 class="offcanvas-title" id="offcanvasLeftLabel">Offcanvas bottom</h4>
    <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
  </div>
  <div class="offcanvas-body small">
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sit.
  </div>
</div>
<div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
  <div class="offcanvas-header">
    <h4 class="offcanvas-title" id="offcanvasRightLabel">Offcanvas right</h4>
    <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
  </div>
  <div class="offcanvas-body">
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sit.
  </div>
</div>
<div class="offcanvas offcanvas-bottom" tabindex="-1" id="offcanvasBottom" aria-labelledby="offcanvasBottomLabel">
  <div class="offcanvas-header">
    <h4 class="offcanvas-title" id="offcanvasBottomLabel">Offcanvas bottom</h4>
    <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
  </div>
  <div class="offcanvas-body small">
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sit.
  </div>
</div>
{{< /example >}}

## Responsive

Responsive offcanvas classes hide content outside the viewport from a specified breakpoint and down. Above that breakpoint, the contents within will behave as usual. 

For example, `.offcanvas-lg` hides content in an offcanvas below the `lg` breakpoint, but shows the content above the `lg` breakpoint.

{{< example >}}
<button class="btn btn-primary d-lg-none" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasResponsive" aria-controls="offcanvasResponsive">
  Toggle offcanvas
</button>
<div class="alert alert-info d-none d-lg-block">
  Resize your browser to show the responsive offcanvas toggle.
</div>
<div class="offcanvas-lg offcanvas-end" tabindex="-1" id="offcanvasResponsive" aria-labelledby="offcanvasResponsiveLabel">
  <div class="offcanvas-header">
    <h4 class="offcanvas-title" id="offcanvasResponsiveLabel">Responsive offcanvas</h4>
    <button type="button" class="btn-close" data-bs-dismiss="offcanvas" data-bs-target="#offcanvasResponsive" aria-label="Close"></button>
  </div>
  <div class="offcanvas-body">
    <p class="mb-0">
      This is content within an <code>.offcanvas-lg</code>.
    </p>
  </div>
</div>
{{< /example >}}

Responsive offcanvas classes are available across for each breakpoint.

- `.offcanvas`
- `.offcanvas-sm`
- `.offcanvas-md`
- `.offcanvas-lg`
- `.offcanvas-xl`
- `.offcanvas-xxl`

## Accessibility 
Since the offcanvas panel is conceptually a modal dialog, be sure to add `aria-labelledby="..."`, referencing the offcanvas title—to `.offcanvas`. Note that you don’t need to add `role="dialog"` since we already add it via JavaScript.

## Related

- [Modal]({{< docsref "modal" >}})

{{</ tab >}}

{{< tab "API" >}}

## Usage

The offcanvas plugin utilizes a few classes and attributes to handle the heavy lifting:

- `.offcanvas` hides the content
- `.offcanvas.show` shows the content
- `.offcanvas-start` hides the offcanvas on the left
- `.offcanvas-end` hides the offcanvas on the right
- `.offcanvas-top` hides the offcanvas on the top
- `.offcanvas-bottom` hides the offcanvas on the bottom

Add a dismiss button with the `data-bs-dismiss="offcanvas"` attribute, which triggers the JavaScript functionality. Be sure to use the `<button>` element with it for proper behavior across all devices.

### Via data attributes

#### Toggle

Add `data-bs-toggle="offcanvas"` and a `data-bs-target` or `href` to the element to automatically assign control of one offcanvas element. The `data-bs-target` attribute accepts a CSS selector to apply the offcanvas to. Be sure to add the class `offcanvas` to the offcanvas element. If you'd like it to default open, add the additional class `show`.

#### Dismiss

{{% js-dismiss "offcanvas" %}}

{{< callout warning >}}
While both ways to dismiss an offcanvas are supported, keep in mind that dismissing from outside an offcanvas does not match the [ARIA Authoring Practices Guide dialog (modal) pattern](https://www.w3.org/WAI/ARIA/apg/patterns/dialogmodal/). Do this at your own risk.
{{< /callout >}}

### Via JavaScript

Enable manually with:

```js
const offcanvasElementList = document.querySelectorAll('.offcanvas')
const offcanvasList = [...offcanvasElementList].map(offcanvasEl => new bootstrap.Offcanvas(offcanvasEl))
```


## Options

{{< markdown >}}
{{< partial "js-data-attributes.md" >}}
{{< /markdown >}}

{{< bs-table "table" >}}
| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `backdrop` | boolean or the string `static` | `true` | Apply a backdrop on body while offcanvas is open. Alternatively, specify `static` for a backdrop which doesn't close the offcanvas when clicked. |
| `keyboard` | boolean | `true` | Closes the offcanvas when escape key is pressed |
| `scroll` | boolean | `false` | Allow body scrolling while offcanvas is open |
{{< /bs-table >}}

## Methods

{{< callout danger >}}
{{< partial "callout-danger-async-methods.md" >}}
{{< /callout >}}

Activates your content as an offcanvas element. Accepts an optional options `object`.

You can create an offcanvas instance with the constructor, for example:

```js
const bsOffcanvas = new bootstrap.Offcanvas('#myOffcanvas')
```

{{< bs-table "table" >}}
| Method | Description |
| --- | --- |
| `getInstance` | *Static* method which allows you to get the offcanvas instance associated with a DOM element |
| `getOrCreateInstance` | *Static* method which allows you to get the offcanvas instance associated with a DOM element, or create a new one in case it wasn't initialized |
| `hide` | Hides an offcanvas element. **Returns to the caller before the offcanvas element has actually been hidden** (i.e. before the `hidden.bs.offcanvas` event occurs).|
| `show` | Shows an offcanvas element. **Returns to the caller before the offcanvas element has actually been shown** (i.e. before the `shown.bs.offcanvas` event occurs).|
| `toggle` | Toggles an offcanvas element to shown or hidden. **Returns to the caller before the offcanvas element has actually been shown or hidden** (i.e. before the `shown.bs.offcanvas` or `hidden.bs.offcanvas` event occurs). |
{{< /bs-table >}}

## Events

Bootstrap's offcanvas class exposes a few events for hooking into offcanvas functionality.

{{< bs-table "table" >}}
| Event type | Description |
| --- | --- |
| `hide.bs.offcanvas` | This event is fired immediately when the `hide` method has been called. |
| `hidden.bs.offcanvas` | This event is fired when an offcanvas element has been hidden from the user (will wait for CSS transitions to complete). |
| `hidePrevented.bs.offcanvas` | This event is fired when the offcanvas is shown, its backdrop is `static` and a click outside of the offcanvas is performed. The event is also fired when the escape key is pressed and the `keyboard` option is set to `false`. |
| `show.bs.offcanvas` | This event fires immediately when the `show` instance method is called. |
| `shown.bs.offcanvas` | This event is fired when an offcanvas element has been made visible to the user (will wait for CSS transitions to complete). |
{{< /bs-table >}}

```js
const myOffcanvas = document.getElementById('myOffcanvas')
myOffcanvas.addEventListener('hidden.bs.offcanvas', event => {
  // do something...
})
```
{{</ tab >}}
{{</ tabs >}}