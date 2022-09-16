---
layout: docs
title: Aspect Ratio
description: "Utilities for controlling the aspect ratio of an element."
toc: true
group: layout
menu:
  docs:
---

Use the ratio helper to manage the aspect ratios of external content like `<iframe>`s, `<embed>`s, `<video>`s, and `<object>`s. These helpers also can be used on any standard HTML child element (e.g., a `<div>` or `<img>`). Styles are applied from the parent `.ratio` class directly to the child.

{{< callout info >}}
**Pro-Tip!** You don't need `frameborder="0"` on your `<iframe>`s as we override that for you in Reboot.
{{< /callout >}}

## Quick reference

{{< bs-table "table" >}}
| Class | Description |
| --- | --- |
| `.ratio-1x1` | Square, 1:1  |
| `.ratio-4x3` | Rectangle, 4:3 |
| `.ratio-16x9` | video, 16:9 |
| `.ratio-21x9` | 21:9 |
{{< /bs-table >}}
      
## Basic usage

### Embed YouTube video

Wrap any embed, like an `<iframe>`, in a parent element with `.ratio` and an aspect ratio class. The immediate child element is automatically sized thanks to our universal selector `.ratio > *`.

{{< example >}}
<div class="ratio ratio-16x9">
  <iframe 
    src="https://www.youtube.com/embed/vlDzYIIOYmM"
    title="YouTube video"
    allowfullscreen
  ></iframe>
</div>
{{< /example >}}

### Keep image aspect ratio

Use the `radio-*` as a media container and put an image with `.img-fluid` as a child element.

<div class="bd-example">
  <div class="mx-auto" style="max-width:320px;">
    <div class="ratio ratio-4x3">
      <img class="img-fluid" src="https://images.unsplash.com/photo-1502657877623-f66bf489d236?auto=format&fit=crop&w=800" />
    </div>
  </div>
</div>

```html
<div class="ratio ratio-4x3">
  <img class="img-fluid" src="path/to/image.jpg" />
</div>
```

## Custom ratios 

Each `.ratio-*` class includes a CSS custom property (or CSS variable) in the selector. You can override this CSS variable to create custom aspect ratios on the fly with some quick math on your part.

For example, to create a 2x1 aspect ratio, set `--bs-aspect-ratio: 50%` on the `.ratio`.

<div class="bd-example">
  <div class="ratio bg-blue-50 mx-auto" style="width:10rem;--bs-aspect-ratio: 50%;">
    <div class="d-flex align-items-center justify-content-center fw-semibold">2x1</div>
  </div>
</div>

```html
<div class="ratio" style="--bs-aspect-ratio: 50%;">
  <div>2x1</div>
</div>
```

This CSS variable makes it easy to modify the aspect ratio across breakpoints. The following is 4x3 to start, but changes to a custom 2x1 at the medium breakpoint.

```scss
.ratio-4x3 {
  @include media-breakpoint-up(md) {
    --bs-aspect-ratio: 50%; // 2x1
  }
}
```