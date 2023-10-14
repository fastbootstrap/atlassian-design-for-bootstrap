---
layout: docs
title: Progress bar
description: "Progress bar indicators commonly known as spinners, express an unspecified wait time or display the length of a process."
toc: true
group: feedback
menu:
  components:
---

**Bootstrap 5 Progress bar component**

Responsive Progress bar built with the latest Bootstrap 5.

Documentation and examples for using Bootstrap custom progress bars featuring support for stacked bars, animated backgrounds, and text labels.

## How it works 

Progress bar components are built with two HTML elements, some CSS to set the width, and a few attributes. We don’t use the HTML5 [`<progress>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/progress) element, ensuring you can stack progress bars, animate them, and place text labels over them.

- We use the `.progress` as a wrapper to indicate the max value of the progress bar.
- We use the inner `.progress-bar` purely for the visual bar and label.
- The `.progress-bar` requires an inline style, utility class, or custom CSS to set their width.
- The `.progress-bar` also requires some role and aria attributes to make it accessible, including an accessible name (using `aria-label`, `aria-labelledby`, or similar).
- We provide a special `.progress-stacked` class to create multiple/stacked progress bars.

Put that all together, and you have the following examples.

{{< example class="d-flex flex-column gap-4" >}}
<div class="progress">
  <div class="progress-bar" role="progressbar" aria-label="Basic example" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100"></div>
</div>
<div class="progress">
  <div class="progress-bar" role="progressbar" aria-label="Basic example" style="width: 25%" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
</div>
<div class="progress">
  <div class="progress-bar" role="progressbar" aria-label="Basic example" style="width: 50%" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
</div>
<div class="progress">
  <div class="progress-bar" role="progressbar" aria-label="Basic example" style="width: 75%" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
</div>
<div class="progress">
  <div class="progress-bar" role="progressbar" aria-label="Basic example" style="width: 100%" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"></div>
</div>
{{</ example >}}


## Width

Bootstrap provides a handful of [utilities for setting width]({{< docsref "width" >}}). Depending on your needs, these may help with quickly configuring progress.

{{< example >}}
<div class="progress">
  <div class="progress-bar w-75" role="progressbar" aria-label="Basic example" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
</div>
{{</ example >}}

## Height

You only set a height value on the `.progress`, so if you change that value the inner `.progress-bar` will automatically resize accordingly.

{{< example >}}
<div class="progress" style="height: 20px;">
  <div class="progress-bar" role="progressbar" aria-label="Example 20px high"
   style="width: 25%;" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
</div>
{{</ example >}}

## With Label

Add labels to your progress bars by placing text within the `.progress-bar`.

To make the label visible you need to set a proper height to the bar.

{{< example >}}
<div class="progress" style="height: 20px;">
  <div class="progress-bar bg-primary" role="progressbar"
   style="width: 25%;" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">25%</div>
</div>
{{</ example >}}

Even using the flex utility class if you need.

{{< example >}}
<div class="d-flex flex-column">
  <span class="small mb-2">25%</span>
  <div class="progress">
    <div class="progress-bar" role="progressbar" aria-label="Example with label"
     style="width: 25%;" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
  </div>
</div>
{{</ example >}}


## Colors

Use [background color utility]({{< docsref "background-color" >}}) classes to change the appearance of individual progress bars.

{{< example class="d-grid gap-3" >}}
<div class="progress">
  <div class="progress-bar bg-success" role="progressbar" aria-label="Success example"
   style="width: 25%" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
</div>
<div class="progress">
  <div class="progress-bar bg-info" role="progressbar" aria-label="Info example"
   style="width: 50%" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
</div>
<div class="progress">
  <div class="progress-bar bg-warning" role="progressbar" aria-label="Warning example"
   style="width: 75%" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
</div>
<div class="progress">
  <div class="progress-bar bg-danger" role="progressbar" aria-label="Danger example"
   style="width: 100%" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"></div>
</div>
{{</ example >}}

## Indeterminate progress

Add a `.progress-linear` to any `.progress` make the progres to the linear animation.

{{< example >}}
<div class="progress progress-linear">
  <div class="progress-bar"
   role="progressbar" aria-label="Basic example">
    <span class="visually-hidden">progress bar</span>
  </div>
</div>
{{</ example >}}

Apply the [background color]({{< docsref "background-color" >}}) to indeterminate progress bars.

{{< example >}}
<div class="progress progress-linear">
  <div class="progress-bar bg-success" role="progressbar" aria-label="Basic example"></div>
</div>
{{</ example >}}

## Striped progress

Add `.progress-bar-striped` to any `.progress-bar` to apply a stripe via CSS gradient over the progress bar’s background color.

{{< example class="d-flex flex-column gap-4" >}}
<div class="progress" role="progressbar" aria-label="Default striped example" aria-valuenow="10" aria-valuemin="0" aria-valuemax="100">
  <div class="progress-bar progress-bar-striped" style="width: 10%"></div>
</div>
<div class="progress" role="progressbar" aria-label="Success striped example" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">
  <div class="progress-bar progress-bar-striped bg-success" style="width: 25%"></div>
</div>
<div class="progress" role="progressbar" aria-label="Info striped example" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100">
  <div class="progress-bar progress-bar-striped bg-info" style="width: 50%"></div>
</div>
<div class="progress" role="progressbar" aria-label="Warning striped example" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">
  <div class="progress-bar progress-bar-striped bg-warning" style="width: 75%"></div>
</div>
<div class="progress" role="progressbar" aria-label="Danger striped example" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100">
  <div class="progress-bar progress-bar-striped bg-danger" style="width: 100%"></div>
</div>
{{</ example >}}

## Animated stripes

The striped gradient can also be animated. Add `.progress-bar-animated` to `.progress-bar` to animate the stripes right to left via CSS3 animations.

{{< example >}}
<div class="progress">
  <div
    class="progress-bar progress-bar-striped progress-bar-animated"
    role="progressbar"
    aria-label="Animated striped example"
    aria-valuenow="75"
    aria-valuemin="0"
    aria-valuemax="100"
    style="width: 75%"></div>
</div>
{{</ example >}}

## Multiple bars 

Include multiple progress bars in a progress component if you need.

{{< example >}}
<div class="progress-stacked">
  <div class="progress" role="progressbar" aria-label="Segment one" aria-valuenow="15" aria-valuemin="0" aria-valuemax="100" style="width: 15%">
    <div class="progress-bar"></div>
  </div>
  <div class="progress" role="progressbar" aria-label="Segment two" aria-valuenow="30" aria-valuemin="0" aria-valuemax="100" style="width: 30%">
    <div class="progress-bar bg-success"></div>
  </div>
  <div class="progress" role="progressbar" aria-label="Segment three" aria-valuenow="20" aria-valuemin="0" aria-valuemax="100" style="width: 20%">
    <div class="progress-bar bg-info"></div>
  </div>
</div>
{{</ example >}}

## Inline progress

For inline progress indicators, use the Progress and `d-inline-flex` with an inline element such as `<span>` and add a custom width style.

{{< example >}}
<span class="fs-sm text-muted me-2">4 of 16</span>
<div class="progress d-inline-flex" style="width: 160px">
  <div class="progress-bar bg-success" role="progressbar" style="width: 25%"></div>  
</div>
{{</ example >}}

## Accessibility

(WAI-ARIA: https://www.w3.org/TR/wai-aria/#progressbar)

The `aria-labe`, `aria-valuemin`, and `aria-valuemax` are static and must be configured in the HTML. `aria-valuenow` is updated dynamically by the foundation when the progress value is updated in determinate progress bars.

