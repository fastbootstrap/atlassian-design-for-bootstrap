---
layout: docs
title: Spinner
description: "Spinner is an animated spinning icon that lets users know content is being loaded. "
toc: true
group: feedback
menu:
  components:
---

**Bootstrap 5 Spinner component**

Responsive loading spinners for Bootstrap 5. 

Use spinner while loading content or performing another process that the user needs to wait on, such as loading an app, submitting a form, or saving updates. Spinner also can represent determinate or indeterminate progress.

Indicate the loading state of a component or page with Bootstrap spinners, built entirely with HTML, CSS, and no JavaScript.

## Spinner

Bootstrap “spinners” can be used to show the loading state in your projects. They’re built only with HTML and CSS, meaning you don’t need any JavaScript to create them. You will, however, need some custom JavaScript to toggle their visibility. Their appearance, alignment, and sizing can be easily customized with our amazing utility classes.

For accessibility purposes, each loader here includes `role="status"` and a nested `<span class="visually-hidden">Loading...</span>`.

## Spin spinner

<span class="lozenge new fs-sm">New Feature</span>

This ia a most common spinner. Just add the `.spinner-spin` class to the element to create a spinner that wrap the SVG circle element.

{{< example >}}
<div class="spinner-spin">
  <svg viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
    <circle cx="8" cy="8" r="7"></circle>
  </svg>
  <span class="visually-hidden">Loading...</span>
</div>
{{</ example >}}

### Colors

This circular spinner uses `currentColor` for `stroke` of circle element, you can easy customize the color with [text color utilities]({{< docsref "text-color" >}}) to change the spinner apperance.

{{< example >}}
<div class="spinner-spin text-primary">
  <svg viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
    <circle cx="8" cy="8" r="7"></circle>
  </svg>
  <span class="visually-hidden">Loading...</span>
</div>
<div class="spinner-spin text-secondary">
  <svg viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
    <circle cx="8" cy="8" r="7"></circle>
  </svg>
  <span class="visually-hidden">Loading...</span>
</div>
<div class="spinner-spin text-success">
  <svg viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
    <circle cx="8" cy="8" r="7"></circle>
  </svg>
  <span class="visually-hidden">Loading...</span>
</div>
<div class="spinner-spin text-danger">
  <svg viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
    <circle cx="8" cy="8" r="7"></circle>
  </svg>
  <span class="visually-hidden">Loading...</span>
</div>
<div class="spinner-spin text-warning">
  <svg viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
    <circle cx="8" cy="8" r="7"></circle>
  </svg>
  <span class="visually-hidden">Loading...</span>
</div>
<div class="spinner-spin text-info">
  <svg viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
    <circle cx="8" cy="8" r="7"></circle>
  </svg>
  <span class="visually-hidden">Loading...</span>
</div>
<div class="spinner-spin text-dark">
  <svg viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
    <circle cx="8" cy="8" r="7"></circle>
  </svg>
  <span class="visually-hidden">Loading...</span>
</div>
{{</ example >}}

### Sizes

Fancy larger or smaller buttons? Add `.spinner-spin-lg` or `.spinner-spin-sm` for additional sizes, that can quickly be used within other components.

{{< example class="d-grid gap-2" >}}
<span>Small</span>
<div class="spinner-spin spinner-spin-sm">
  <svg viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
    <circle cx="8" cy="8" r="7"></circle>
  </svg>
  <span class="visually-hidden">Loading...</span>
</div>
<span>Normal</span>
<div class="spinner-spin">
  <svg viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
    <circle cx="8" cy="8" r="7"></circle>
  </svg>
  <span class="visually-hidden">Loading...</span>
</div>
<span>Large</span>
<div class="spinner-spin spinner-spin-lg">
  <svg viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
    <circle cx="8" cy="8" r="7"></circle>
  </svg>
  <span class="visually-hidden">Loading...</span>
</div>
{{</ example >}}

## Border spinner

Use the border spinners for a lightweight loading indicator.

{{< example >}}
<div class="spinner-border" role="status">
  <span class="visually-hidden">Loading...</span>
</div>
{{</ example >}}

### Colors

The border spinner uses `currentColor` for its `border-color`, meaning you can customize the color with [text color utilities]({{< docsref "text-color" >}}). You can use any of our text color utilities on the standard spinner.

{{< example >}}
<div class="spinner-border text-primary" role="status">
  <span class="visually-hidden">Loading...</span>
</div>
<div class="spinner-border text-secondary" role="status">
  <span class="visually-hidden">Loading...</span>
</div>
<div class="spinner-border text-success" role="status">
  <span class="visually-hidden">Loading...</span>
</div>
<div class="spinner-border text-danger" role="status">
  <span class="visually-hidden">Loading...</span>
</div>
<div class="spinner-border text-warning" role="status">
  <span class="visually-hidden">Loading...</span>
</div>
<div class="spinner-border text-info" role="status">
  <span class="visually-hidden">Loading...</span>
</div>
<div class="spinner-border text-light" role="status">
  <span class="visually-hidden">Loading...</span>
</div>
<div class="spinner-border text-dark" role="status">
  <span class="visually-hidden">Loading...</span>
</div>
{{</ example >}}

{{< callout >}}
#### Why not use `border-color` utilities?

Each border spinner specifies a `transparent` border for at least one side, so `.border-{color}` utilities would override that.
{{</ callout >}}

### Sizes

Add `.spinner-border-sm` or `.spinner-border-lg` to make a smaller spinner that can quickly be used within other components.

{{< example class="d-grid gap-2" >}}
<span class="text-muted">Small</span>
<div class="spinner-border spinner-border-sm" role="status">
  <span class="visually-hidden">Loading...</span>
</div>
<span class="text-muted">Normal</span>
<div class="spinner-border" role="status">
  <span class="visually-hidden">Loading...</span>
</div>
<span class="text-muted">Large</span>
<div class="spinner-border spinner-border-lg" role="status">
  <span class="visually-hidden">Loading...</span>
</div>
{{</ example >}}

Or, use custom CSS or inline styles to change the dimensions as needed.

{{< example >}}

<div class="spinner-border" style="width: 3rem; height: 3rem;" role="status">
  <span class="visually-hidden">Loading...</span>
</div>

{{</ example >}}

## Growing spinner

If you don’t fancy a border spinner, switch to the grow spinner. While it doesn’t technically spin, it does repeatedly grow!

{{< example >}}
<div class="spinner-grow" role="status">
  <span class="visually-hidden">Loading...</span>
</div>
{{</ example >}}

### Colors

This spinner is built with `currentColor`, so you can easily change its appearance with [text color utilities]({{< docsref "text-color" >}}). Here it is in blue, along with the supported variants.

{{< example >}}
<div class="spinner-grow text-primary" role="status">
  <span class="visually-hidden">Loading...</span>
</div>
<div class="spinner-grow text-secondary" role="status">
  <span class="visually-hidden">Loading...</span>
</div>
<div class="spinner-grow text-success" role="status">
  <span class="visually-hidden">Loading...</span>
</div>
<div class="spinner-grow text-danger" role="status">
  <span class="visually-hidden">Loading...</span>
</div>
<div class="spinner-grow text-warning" role="status">
  <span class="visually-hidden">Loading...</span>
</div>
<div class="spinner-grow text-info" role="status">
  <span class="visually-hidden">Loading...</span>
</div>
<div class="spinner-grow text-light" role="status">
  <span class="visually-hidden">Loading...</span>
</div>
<div class="spinner-grow text-dark" role="status">
  <span class="visually-hidden">Loading...</span>
</div>

{{</ example >}}

### Sizes

Add `.spinner-grow-sm` or `.spinner-grow-lg` to make a smaller spinner that can quickly be used within other components.

{{< example class="d-grid gap-2" >}}
<span class="text-muted">Small</span>
<div class="spinner-grow spinner-grow-sm" role="status">
  <span class="visually-hidden">Loading...</span>
</div>
<span class="text-muted">Normal</span>
<div class="spinner-grow" role="status">
  <span class="visually-hidden">Loading...</span>
</div>
<span class="text-muted">Large</span>
<div class="spinner-grow spinner-grow-lg" role="status">
  <span class="visually-hidden">Loading...</span>
</div>
{{</ example >}}

## Alignment

Spinners in Bootstrap are built with `rem`s, `currentColor`, and `display: inline-flex`. This means they can easily be resized, recolored, and quickly aligned.

### Margin

Use [margin utilities]({{< docsref "margin" >}}) class like `.m-5` for easy spacing.

{{< example >}}
<div class="spinner-border m-5" role="status">
  <span class="visually-hidden">Loading...</span>
</div>
{{</ example >}}

### Placement

Use [flexbox utilities]({{< docsref "flex" >}}), [float utilities]({{< docsref "floats" >}}), or [text alignment utilities]({{< docsref "text-align" >}}) to place spinners exactly where you need them in any situation.

#### Flex

{{< example >}}
<div class="d-flex justify-content-center">
  <div class="spinner-border" role="status">
    <span class="visually-hidden">Loading...</span>
  </div>
</div>
{{</ example >}}

{{< example >}}
<div class="d-flex align-items-center">
  <strong>Loading...</strong>
  <div class="spinner-border ms-auto" role="status" aria-hidden="true"></div>
</div>
{{</ example >}}

#### Floats

{{< example >}}
<div class="clearfix">
  <div class="spinner-border float-end" role="status">
    <span class="visually-hidden">Loading...</span>
  </div>
</div>
{{</ example >}}

#### Text align

{{< example >}}
<div class="text-center">
  <div class="spinner-border" role="status">
    <span class="visually-hidden">Loading...</span>
  </div>
</div>
{{</ example >}}

## Buttons

Use spinners within buttons to indicate an action is currently processing or taking place. You may also swap the text out of the spinner element and utilize button text as needed.

### Border spinner

Use the `.spinner-border` class inside the button.

{{< example >}}
<button class="btn btn-primary" type="button">
  <span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
  <span class="visually-hidden">Loading...</span>
</button>
<button class="btn btn-primary" type="button">
  <span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
  Loading...
</button>
<button class="btn btn-primary" type="button" disabled>
  <span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
  Disabled
</button>
{{</ example >}}

### Growing spinner

Use the `.spinner-grow` class inside button if you want the spinner/loader to grow instead of spin.

{{< example >}}
<button class="btn btn-primary" type="button">
  <span class="spinner-grow spinner-grow-sm" role="status" aria-hidden="true"></span>
  <span class="visually-hidden">Loading...</span>
</button>

<button class="btn btn-primary" type="button">
  <span class="spinner-grow spinner-grow-sm" role="status" aria-hidden="true"></span>
  Loading...
</button>

<button class="btn btn-primary" type="button" disabled>
  <span class="spinner-grow spinner-grow-sm" role="status" aria-hidden="true"></span>
  Disabled
</button>
{{</ example >}}

## Accessibility

- The spinner should add `role="status"` attribute on the element and a nested `<span class="visually-hidden">Loading...</span>`.
- When place the spinner in the button, `disable` the button while the spinner is visible.
