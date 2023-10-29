---
layout: docs
title: Stretched Link
description: "Stretched link allow users to navigate to a different location on overlay elements."
toc: true
group: utilities
menu:
  components:
---

**Bootstrap 5 Stretched link**

Stretched link allow users to navigate to a different location on overlay elements, Commonly used on [card]({{< docsref "card" >}}) component.

## Basic example

Add `.stretched-link` to a link to make its containing block clickable via a `::after` pseudo element. In most cases, this means that an element with `position: relative`; that contains a link with the `.stretched-link` class is clickable. Please note given how CSS position works, `.stretched-link` cannot be mixed with most table elements.

[Cards]({{< docsref "card" >}}) have `position: relative` by default in Bootstrap, so in this case you can safely add the `.stretched-lin`k class to a link in the card without any other HTML changes.

Multiple links and tap targets are not recommended with stretched links. However, some position and [`z-index`]({{< docsref "z-index" >}}) styles can help should this be required.

{{< example >}}
<div class="card col-md-5 mx-auto">
  <img src="/images/cards/1.jpg" class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">Card with stretched link</h5>
    <p class="card-text">
      Some quick example text to build on the card title and make up the bulk of the card's content.
    </p>
    <a href="#" class="btn btn-primary stretched-link">Go somewhere</a>
  </div>
</div>
{{</ example >}}

{{< callout >}}
Most custom components do not have `position: relative` by default, so we need to add the `.position-relative` here to prevent the link from stretching outside the parent element.
{{</ callout >}}

## Columns with stretched link

{{< example >}}
<div class="row g-0 position-relative">
  <div class="col-12 col-md-5 mb-md-0 p-md-4">
    <img src="/images/cards/1.jpg" class="img-fluid" alt="...">
  </div>
  <div class="col-12 col-md-7 p-4 ps-md-0">
    <h5 class="mt-0">Columns with stretched link</h5>
    <p>
    Another instance of placeholder content for this other custom component. 
    It is intended to mimic what some real-world content would look like, 
    and we're using it here to give the component a bit of body and size.
    </p>
    <a href="#" class="stretched-link">Go somewhere</a>
  </div>
</div>
{{</ example >}}

## Custom with stretched link

{{< example >}}
<div class="d-flex align-items-start position-relative">
  <div class="d-flex flex-shrink-0 me-3 bd-w-36">
    <div class="ratio ratio-4x3">
      <img class="img-fluid" src="/images/cards/1.jpg" />
    </div>
  </div>
  <div>
    <h5 class="mt-0">Custom component with stretched link</h5>
    <p>This is some placeholder content for the custom component. 
    It is intended to mimic what some real-world content would look like, 
    and we're using it here to give the component a bit of body and size.</p>
    <a href="#" class="stretched-link">Go somewhere</a>
  </div>
</div>
{{</ example >}}


## Identifying the containing block 

If the stretched link doesn’t seem to work, the [containing block](https://developer.mozilla.org/en-US/docs/Web/CSS/Containing_block#Identifying_the_containing_block) will probably be the cause. The following CSS properties will make an element the containing block:

- A `position` value other than `static`
- A `transform` or `perspective` value other than `none`
- A `will-change` value of `transform` or `perspective`
- A `filter` value other than `none` or a `will-change` value of `filter` (*only works on Firefox*)

{{< example >}}
<div class="card col-md-5 mx-auto">
  <img src="/images/cards/2.jpg" class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">Card with stretched links</h5>
    <p class="card-text">
    Some quick example text to build on the card title and make up the bulk of the card's content.
    </p>
    <p class="card-text">
      <a href="#" class="stretched-link text-danger position-relative">
      Stretched link will not work here, because <code>position: relative</code> is added to the link
      </a>
    </p>
    <p class="card-text" style="transform: rotate(0);">
      This 
      <a href="#" class="stretched-link"><code>stretched link</code></a> 
      will only be spread over the <code>p</code>-tag, because a transform is applied to it.
    </p>
  </div>
</div>
{{</ example >}}