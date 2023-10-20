---
layout: docs
title: Figures
description: "Utilities for controlling the displaying related images and text with the figure element."
toc: true
group: utilities
menu:
  components:    
aliases:
  - /docs/figures
---

Documentation and examples for displaying related images and text with the figure component in Bootstrap.

Anytime you need to display a piece of content—like an image with an optional caption, consider using a `<figure>`.

Use the included `.figure`, `.figure-img` and `.figure-caption` classes to provide some baseline styles for the HTML5 `<figure>` and `<figcaption>` elements. Images in figures have no explicit size, so be sure to add the `.img-fluid` class to your `<img>` to make it responsive.

### Basic usage

<div class="bd-example d-flex justify-content-center">
<figure class="figure">
  <img
    src="https://images.unsplash.com/photo-1559253664-ca249d4608c6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8bGl6YXJkfGVufDB8MHwwfHw%3D&auto=format&fit=crop&w=400&q=60"
    class="figure-img img-fluid rounded"
    alt="Taking up Water with a Spoon"
  />
  <figcaption class="figure-caption">A caption for the above image.</figcaption>
</figure>
</div>

```html
<figure class="figure">
  <img src="/images/path/to.jpg" class="figure-img img-fluid rounded" alt="...">
  <figcaption class="figure-caption">A caption for the above image.</figcaption>
</figure>
```

Aligning the figure's caption is easy with our [text alignment utilities]({{< docsref "text-align" >}}).

<div class="bd-example d-flex justify-content-center">
<figure class="figure">
 <img
    src="https://images.unsplash.com/photo-1559253664-ca249d4608c6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8bGl6YXJkfGVufDB8MHwwfHw%3D&auto=format&fit=crop&w=400&q=60"
    class="figure-img img-fluid rounded"
    alt="Taking up Water with a Spoon"
  />
  <figcaption class="figure-caption text-end">A caption for the above image.</figcaption>
</figure>
</div>

```html
<figure class="figure">
  <img src="/images/path/to.jpg" class="figure-img img-fluid rounded" alt="...">
  <figcaption class="figure-caption text-end">A caption for the above image.</figcaption>
</figure>
```