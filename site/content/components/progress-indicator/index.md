---
layout: docs
title: Progress Indicator
description: "Progress indicator shows the position of the current screen in a list of screens."
toc: true
group: feedback
status: new
menu:
  components:
---

**Bootstrap 5 Progress indicator component**

The progress indicator is a UI element from Atlassian design that display a list of dots to allow user to keep track of their progress, they are typically accompanied by a [carousel]({{< docsref "carousel" >}}) or another UI like a [pills]({{< docsref "pills" >}}).

Examples for a progress indicator interactive with Pills and Carousel.

## Basic indicator

Shows a list of dots on the horizontal in the below.

{{< example >}}
<div class="progress-indicator">
  <button class="active" type="button" aria-current="true" aria-label="tab1"></button>
  <button type="button" aria-label="tab2"></button>
  <button type="button" aria-label="tab3"></button>
  <button type="button" aria-label="tab4"></button>
  <button type="button" aria-label="tab5"></button>
  <button type="button" aria-label="tab6"></button>
</div>
{{</ example >}}

## Interactive with carousel

In this example use the [carousel component]({{< docsref "carousel" >}}) and Javascript API with the progress indicator plugin to switch one screen. You required add a `data-bs-indicator=".progress-indicator"` to the progress indicator.

{{< example >}}
<div id="carouselExample" class="carousel" data-bs-indicator=".progress-indicator">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <h5>Panel 1</h5>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In porttitor.</p>
    </div>
    <div class="carousel-item">
      <h5>Panel 2</h5>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In porttitor.</p>
    </div>
    <div class="carousel-item">
      <h5>Panel 3</h5>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In porttitor.</p>
    </div>
    <div class="carousel-item">
      <h5>Panel 4</h5>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In porttitor.</p>
    </div>
    <div class="carousel-item">
      <h5>Panel 5</h5>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In porttitor.</p>
    </div>
  </div>
  <div class="d-flex justify-content-between py-4 align-items-center" >
    <button class="btn btn-default" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">Previous</button>
    <div class="progress-indicator">
      <button class="active" type="button" data-bs-target="#carouselExample" data-bs-slide-to="0" aria-current="true" aria-label="Slide 1"></button>
      <button type="button" data-bs-target="#carouselExample" data-bs-slide-to="1" aria-label="Slide 2"></button>
      <button type="button" data-bs-target="#carouselExample" data-bs-slide-to="2" aria-label="Slide 3"></button>
      <button type="button" data-bs-target="#carouselExample" data-bs-slide-to="3" aria-label="Slide 4"></button>
      <button type="button" data-bs-target="#carouselExample" data-bs-slide-to="4" aria-label="Slide 5"></button>
    </div>
    <button class="btn btn-default" type="button" data-bs-target="#carouselExample" data-bs-slide="next">Next</button>
  </div>
</div>
{{</ example >}}

## Interactive with pills

In this example use the [pills component]({{< docsref "pills" >}})'s API with our progress indicator plugin to switch one screen.

{{< example >}}
<div class="tab-content">
  <div class="tab-pane active" id="pill-tabpanel-0" role="tabpanel" aria-labelledby="pill-tab-0">
    <div class="card col-md-6 mx-auto">
      <div class="card-body text-bg-secondary rounded">
        <p>Quickly switch between your most recent projects by selecting the project name and icon.</p>
        <span class="fs-sm fw-semibold">1/3</span>
      </div>
    </div>
  </div>
  <div class="tab-pane" id="pill-tabpanel-1" role="tabpanel" aria-labelledby="pill-tab-1">
    <div class="card col-md-6 mx-auto">
      <div class="card-body text-bg-secondary rounded">
        <p>Quickly switch between your most recent projects by selecting the project name and icon.</p>
        <span class="fs-sm fw-semibold">2/3</span>
      </div>
    </div>
  </div>
  <div class="tab-pane" id="pill-tabpanel-2" role="tabpanel" aria-labelledby="pill-tab-2">
    <div class="card col-md-6 mx-auto">
      <div class="card-body text-bg-secondary rounded">
        <p>Quickly switch between your most recent projects by selecting the project name and icon.</p>
        <span class="fs-sm fw-semibold">3/3</span>
      </div>
    </div>
  </div>
</div>

<div class="progress-indicator mt-3" role="tablist">
  <button class="active" data-bs-toggle="pill" data-bs-target="#pill-tabpanel-0" type="button" aria-selected="true"></button>
  <button type="button" data-bs-toggle="pill" data-bs-target="#pill-tabpanel-1" aria-selected="false"></button>
  <button type="button" data-bs-toggle="pill" data-bs-target="#pill-tabpanel-2" aria-selected="false"></button>
</div>
{{</ example >}}

## Colors

Fancy the more colors of progress indicator? Add a `.progress-indicator-primary` and `.progress-indicator-secondary` to the `.progress-indicator` element.

{{< example class="d-flex flex-column gap-3 flex-wrap" >}}
<div class="progress-indicator progress-indicator-primary">
  <button class="active" type="button" aria-current="true" aria-label="tab1"></button>
  <button type="button" aria-label="tab2"></button>
  <button type="button" aria-label="tab3"></button>
  <button type="button" aria-label="tab4"></button>
  <button type="button" aria-label="tab5"></button>
  <button type="button" aria-label="tab6"></button>
</div>
<div class="progress-indicator progress-indicator-secondary">
  <button class="active" type="button" aria-current="true" aria-label="tab1"></button>
  <button type="button" aria-label="tab2"></button>
  <button type="button" aria-label="tab3"></button>
  <button type="button" aria-label="tab4"></button>
  <button type="button" aria-label="tab5"></button>
  <button type="button" aria-label="tab6"></button>
</div>
{{</ example >}}

## Sizes

Fancy larger or smaller progress indicator? Add a `.progress-indicator-lg` or `.progress-indicator-sm` for additional sizes.


{{< example class="d-flex flex-column flex-wrap gap-3" >}}
<div class="progress-indicator progress-indicator-sm">
  <button class="active" type="button" aria-current="true" aria-label="tab1"></button>
  <button type="button" aria-label="tab2"></button>
  <button type="button" aria-label="tab3"></button>
  <button type="button" aria-label="tab4"></button>
  <button type="button" aria-label="tab5"></button>
  <button type="button" aria-label="tab6"></button>
</div>
<div class="progress-indicator">
  <button class="active" type="button" aria-current="true" aria-label="tab1"></button>
  <button type="button" aria-label="tab2"></button>
  <button type="button" aria-label="tab3"></button>
  <button type="button" aria-label="tab4"></button>
  <button type="button" aria-label="tab5"></button>
  <button type="button" aria-label="tab6"></button>
</div>
<div class="progress-indicator progress-indicator-lg">
  <button class="active" type="button" aria-current="true" aria-label="tab1"></button>
  <button type="button" aria-label="tab2"></button>
  <button type="button" aria-label="tab3"></button>
  <button type="button" aria-label="tab4"></button>
  <button type="button" aria-label="tab5"></button>
  <button type="button" aria-label="tab6"></button>
</div>
{{</ example >}}

## Related

- [Pills]({{< docsref "pills" >}})
- [Carousel]({{< docsref "carousel" >}})