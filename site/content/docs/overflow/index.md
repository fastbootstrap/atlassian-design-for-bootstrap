---
layout: docs
title: Overflow
description: "Use these shorthand utilities for quickly configuring how content overflows an element."
toc: true
group: layout
menu:
  docs:    
---

Adjust the `overflow` property on the fly with four default values and classes. These classes are not responsive by default.

{{< class-api "overflow" >}}

## Basic examples

### Showing content that overflows

Use `overflow-visible` to prevent content within an element from being clipped. Note that any content that overflows the bounds of the element will then be visible.

<div class="bd-example d-flex justify-content-center bg-light">
 <div class="overflow-visible p-3 mb-3 mb-md-0 me-md-3 bg-white shadow" style="max-width: 260px; max-height: 100px;">
    This is an example of using <code>.overflow-visible</code> on an element with set width and height dimensions.
  </div>
</div>

```html
<div class="overflow-visible">...</div>
```

### Hiding content that overflows

Use `overflow-hidden` to clip any content within an element that overflows the bounds of that element.

<div class="bd-example d-flex justify-content-center bg-light">
 <div class="overflow-hidden p-3 mb-3 mb-md-0 me-md-3 bg-white shadow" style="max-width: 260px; max-height: 100px;">
    This is an example of using <code>.overflow-hidden</code> on an element with set width and height dimensions.
  </div>
</div>

```html
<div class="overflow-hidden">...</div>
```

### Scrolling if needed

Use `overflow-auto` to add scrollbars to an element in the event that its content overflows the bounds of that element. Unlike `.overflow-scroll`, which always shows scrollbars, this utility will only show them if scrolling is necessary.

<div class="bd-example d-flex justify-content-center bg-light">
 <div class="overflow-auto p-3 mb-3 mb-md-0 me-md-3 bg-white shadow" style="max-width: 260px; max-height: 100px;">
    This is an example of using <code>.overflow-auto</code> on an element with set width and height dimensions. By design, this content will vertically scroll.
  </div>
</div>

```html
<div class="overflow-auto">...</div>
```

### Scrolling in all directions

Use `overflow-scroll` to add scrollbars to an element. Unlike `.overflow-auto`, which only shows scrollbars if they are necessary, this utility always shows them. 

<div class="bd-example d-flex justify-content-center bg-light">
 <div class="overflow-scroll p-3 mb-3 mb-md-0 me-md-3 bg-white shadow" style="max-width: 260px; max-height: 100px;">
    This is an example of using <code>.overflow-scroll</code> on an element with set width and height dimensions.
  </div>
</div>

```html
<div class="overflow-scroll">...</div>
```

### Scrolling horizontally if needed

Use `overflow-x-auto` to allow horizontal scrolling if needed.

<div class="bd-example d-flex justify-content-center bg-light">
 <div class="overflow-x-auto p-3 mb-3 mb-md-0 me-md-3 bg-white shadow" style="max-width: 260px; max-height: 100px;">
    <div class="text-nowrap p-2">This is an example of using <code>.overflow-scroll</code> on an element with set width and height dimensions.</div>
  </div>
</div>

```html
<div class="overflow-x-auto">...</div>
```

### Scrolling vertically if needed

Use `overflow-y-auto` to allow vertical scrolling if needed.

<div class="bd-example d-flex justify-content-center bg-light">
 <div class="overflow-y-auto p-3 mb-3 mb-md-0 me-md-3 bg-white shadow" style="max-width: 260px; max-height: 100px;">
    This is an example of using <code>.overflow-y-auto</code> on an element with set width and height dimensions. By design, this content will vertically scroll.
  </div>
</div>


```html
<div class="overflow-y-auto">...</div>
```