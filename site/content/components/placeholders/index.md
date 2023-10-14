---
layout: docs
title: Placeholders
description: "Placeholders used for loading placeholders for your content before the data gets loaded on the page."
toc: true
group: feedback
menu:
  components:
---

**Bootstrap 5 Placeholder component**

Responsive placeholder/skeleton built with the latest Bootstrap 5. Placeholder component used for loading placeholders for your content before the data gets loaded on the page.

Use loading placeholders for your components or pages to indicate something may still be loading.

## Overview

Placeholders can be used to enhance the experience of your application. They’re built only with HTML and CSS, meaning you don’t need any JavaScript to create them. You will, however, need some custom JavaScript to toggle their visibility. Their appearance, color, and sizing can be easily customized with our utility classes.

## Placeholder example

In the example below, we take a typical card component and recreate it with placeholders applied to create a “loading card”. Size and proportions are the same between the two.

{{< example class="container" >}}
<div class="row g-5">
  <div class="col-12 col-lg-6">
    <div class="card">
      <div class="card-img-top ratio ratio-16x9">
        <span class="placeholder col-12 rounded-0" style="height:100%"></span>
      </div>
      <div class="card-body">
        <h5 class="card-title placeholder-glow">
          <span class="placeholder col-6"></span>
        </h5>
        <p class="card-text placeholder-glow">
          <span class="placeholder col-9"></span>
          <span class="placeholder col-4"></span>
        </p>
        <a href="#" tabindex="-1" class="btn placeholder col-5 pe-none"></a>
      </div>
    </div>
  </div>
  <div class="col-12 col-lg-6">
    <div class="card">
      <div class="card-img-top ratio ratio-16x9">
        <img src="/images/skeleton/1.jpg" class="img-fluid rounded" />
      </div>
      <div class="card-body">
        <h5 class="card-title">Card title</h5>
        <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        <a href="#" class="btn btn-primary">Go somewhere</a>
      </div>
    </div>
  </div>
</div>
{{</ example >}}

## How it works 

Create placeholders with the `.placeholder` class and a grid column class (e.g., `.col-6`) to set the width. They can replace the text inside an element or be added as a modifier class to an existing component.

We apply additional styling to `.btn`s via `::before` to ensure the `height` is respected. You may extend this pattern for other situations as needed, or add a `&nbsp;` within the element to reflect the height when actual text is rendered in its place.

{{< example >}}
<p aria-hidden="true">
  <span class="placeholder col-6"></span>
</p>

<a class="btn btn-primary disabled placeholder col-4" aria-disabled="true"></a>
{{</  example >}}

{{< callout >}}
The use of `aria-hidden="true"` only indicates that the element should be hidden to screen readers. The loading behavior of the placeholder depends on how authors will actually use the placeholder styles, how they plan to update things, etc. Some JavaScript code may be needed to swap the state of the placeholder and inform AT users of the update.
{{</ callout >}}

## Animations

Animate placeholders with `.placeholder-glow` or `.placeholder-wave` to better convey the perception of something being actively loaded.

### Glow

Add the `.placeholder-glow` as a container.

{{< example class="container" >}}
<div class="row g-3">
  <div class="col-md-4 placeholder-glow">  
      <span class="placeholder col-12 rounded bd-h-28"></span>
      <span class="placeholder col-12 mt-2"></span>
      <span class="placeholder col-7 mt-2"></span>
  </div>
  <div class="col-md-4 placeholder-glow">
      <span class="placeholder col-12 rounded-0 bd-h-28"></span>
      <span class="placeholder col-12 mt-2"></span>
      <span class="placeholder col-7 mt-2"></span>
  </div>
  <div class="col-md-4 placeholder-glow">
      <span class="placeholder col-12 rounded-0 bd-h-28"></span>
      <span class="placeholder col-12 mt-2"></span>
      <span class="placeholder col-7 mt-2"></span>
  </div>
</div>
{{</ example >}}

### Wave

Add the `.placeholder-wave` as a container.

{{< example class="container">}}
<div class="col-md-6 mx-auto">
  <div class="card">
    <div class="card-body placeholder-wave ">
      <div class="d-flex align-items-center">
        <span class="placeholder rounded-circle bd-h-10 bd-w-10"></span>
        <div class="ms-3 flex-grow-1">
          <span class="placeholder placeholder-xs col-10"></span>
          <span class="placeholder placeholder-xs col-4"></span>
        </div>
      </div>
    </div>
    <span class="placeholder col-12 rounded-0 bd-h-48"></span>
    <div class="card-body placeholder-wave">
        <span class="placeholder placeholder-xs col-12"></span>
        <span class="placeholder placeholder-xs col-9"></span>
    </div>
  </div>
</div>
{{</ example >}}

## Width

You can change the `width` through grid column classes, width utilities, or inline styles.

{{< example >}}
<span class="placeholder col-6"></span>
<span class="placeholder w-75"></span>
<span class="placeholder" style="width: 25%;"></span>
{{</ example >}}

## Size

By default, The size of `.placeholders` are based on the typographic style of the parent element. 

{{< example >}}
<div class="row">
  <h1 class="placeholder col-6"></h1>
  <h1 class="col-6">H1</h1>
</div>
<div class="row">
  <h3 class="placeholder col-6"></h3>
  <h3 class="col-6">H3</h3>
</div>
<div class="row">
  <span class="placeholder col-6"></span>
  <span class="col-6">body1</span>
</div>
{{</ example >}}

You can customize them with sizing modifiers: `.placeholder-lg`, `.placeholder-sm`, or `.placeholder-xs`.

{{< example class="d-grid gap-3" >}}
<span class="placeholder col-12 placeholder-lg"></span>
<span class="placeholder col-12"></span>
<span class="placeholder col-12 placeholder-sm"></span>
<span class="placeholder col-12 placeholder-xs"></span>
{{</ example >}}

## Color 

By default, the placeholder color can be overridden with a custom color or utility class.

{{< example class="d-flex flex-column gap-3" >}}
<span class="placeholder bg-primary"></span>
<span class="placeholder bg-secondary"></span>
<span class="placeholder bg-success"></span>
<span class="placeholder bg-danger"></span>
<span class="placeholder bg-warning"></span>
<span class="placeholder bg-info"></span>
<span class="placeholder bg-dark"></span>
{{</ example >}}

