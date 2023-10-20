---
layout: docs
title: Images
description: "Utilities for controlling images."
toc: true
group: utilities
menu:
  components:    
aliases:
  - /docs/images
---

Documentation and examples for opting images into responsive behavior (so they never become wider than their parent) and add lightweight styles to them—all via classes

## Responsive images

Images in Bootstrap are made responsive with `.img-fluid`. This applies `max-width: 100%;` and `height: auto;` to the image so that it scales with the parent width.

<div class="bd-example">
  <div class="col-md-8 mx-auto">
    <img src="https://images.unsplash.com/photo-1559253664-ca249d4608c6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8bGl6YXJkfGVufDB8MHwwfHw%3D&auto=format&fit=crop&w=800&q=60" class="img-fluid" text="Responsive image" />
  </div>
</div>


```html
<img class="img-fluid" src="path/to/image.jpg" />
```

## Image thumbnails 

In addition to our [border-radius utilities]({{< docsref "border-radius" >}}), you can use `.img-thumbnail` to give an image a rounded 1px border appearance.

<div class="bd-example text-center">
  <img src="https://images.unsplash.com/photo-1559253664-ca249d4608c6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8bGl6YXJkfGVufDB8MHwwfHw%3D&auto=format&fit=crop&w=320&q=60" class="img-fluid" text="Thumbnail image" />
</div>

```html
<img class="img-thumbnail" src="path/to/image.jpg" />
```

## Align images

Align images with the helper [float classes]({{< docsref "floats" >}}) or [text alignment classes]({{< docsref "text-align" >}}). 

<div class="bd-example">
    <div class="clearfix">
  <img class="img-fluid float-start rounded m-3" src="https://images.unsplash.com/photo-1559253664-ca249d4608c6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8bGl6YXJkfGVufDB8MHwwfHw%3D&auto=format&fit=crop&w=320&q=60" />
  <img class="img-fluid float-end rounded m-3" src="https://images.unsplash.com/photo-1559253664-ca249d4608c6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8bGl6YXJkfGVufDB8MHwwfHw%3D&auto=format&fit=crop&w=320&q=60" />
  </div>
</div>

```html
<img class="float-start ..." src="path/to/image.jpg" />
<img class="float-end ..." src="path/to/image.jpg" />
```

### Block-level

The block-level images can be centered using the `.mx-auto` margin utility class.

<div class="bd-example">
  <img class="d-block mx-auto rounded m-3" src="https://images.unsplash.com/photo-1559253664-ca249d4608c6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8bGl6YXJkfGVufDB8MHwwfHw%3D&auto=format&fit=crop&w=320&q=60" />
</div>

```html
<img class="d-block mx-auto ..." src="path/to/image.jpg" />
```

## Picture

If you are using the `<picture>` element to specify multiple `<source>` elements for a specific `<img>`, make sure to add the `.img-*` classes to the `<img>` and not to the `<picture>` tag.

```html
<picture>
  <source srcset="..." type="image/svg+xml">
  <img src="..." class="img-fluid img-thumbnail" alt="...">
</picture>
```
