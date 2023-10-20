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

## Quick reference

{{< class-api "overflow" >}}

## Basic usage

### Showing content that overflows

Use `overflow-visible` to prevent content within an element from being clipped. Note that any content that overflows the bounds of the element will then be visible.

{{< example class="bg-neutral-subtler bg-grid-slate-100" show_source="false" >}}
<div class="overflow-visible bd-h-24 bd-max-w-64 mx-auto border bg-body p-3">
  This is an example of using <code>.overflow-visible</code> on an element with set width and height dimensions.
</div>
{{</ example >}}

```html
<div class="overflow-visible">...</div>
```

### Hiding content that overflows

Use `overflow-hidden` to clip any content within an element that overflows the bounds of that element.

{{< example class="bg-neutral-subtler bg-grid-slate-100" show_source="false" >}}
<div class="overflow-hidden bd-h-24 bd-max-w-64 mx-auto border bg-body p-3">
  This is an example of using <code>.overflow-hidden</code> on an element with set width and height dimensions.
</div>
{{</ example >}}

```html
<div class="overflow-hidden">...</div>
```

### Scrolling if needed

Use `overflow-auto` to add scrollbars to an element in the event that its content overflows the bounds of that element. Unlike `.overflow-scroll`, which always shows scrollbars, this utility will only show them if scrolling is necessary.

{{< example class="bg-neutral-subtler bg-grid-slate-100" show_source="false" >}}
<div class="overflow-auto bd-h-20 bd-max-w-80 mx-auto border bg-body p-3">
    This is an example of using <code>.overflow-auto</code> on an element with set width and height dimensions. By design, this content will vertically scroll.
  </div>
{{</ example >}}

```html
<div class="overflow-auto">...</div>
```

### Scrolling in all directions

Use `overflow-scroll` to add scrollbars to an element. Unlike `.overflow-auto`, which only shows scrollbars if they are necessary, this utility always shows them. 

{{< example class="bg-neutral-subtler bg-grid-slate-100" show_source="false" >}}
<div class="overflow-scroll bd-h-24 bd-max-w-80 mx-auto border bg-body p-3">
    This is an example of using <code>.overflow-scroll</code> on an element with set width and height dimensions.
</div>
{{</ example >}}

```html
<div class="overflow-scroll">...</div>
```

### Scrolling horizontally if needed

Use `overflow-x-auto` to allow horizontal scrolling if needed.

{{< example class="bg-neutral-subtler bg-grid-slate-100" show_source="false" >}}
<div class="overflow-x-auto bd-h-24 bd-max-w-80 mx-auto border bg-body p-3">
    <div class="text-nowrap p-2">This is an example of using <code>.overflow-x-auto</code> on an element with set width and height dimensions.</div>
  </div>
{{</ example >}}

```html
<div class="overflow-x-auto">...</div>
```

### Scrolling vertically if needed

Use `overflow-y-auto` to allow vertical scrolling if needed.

{{< example class="bg-neutral-subtler bg-grid-slate-100" show_source="false" >}}
<div class="overflow-y-auto bd-h-24 bd-max-w-80 mx-auto border bg-body p-3">
    This is an example of using <code>.overflow-y-auto</code> on an element with set width and height dimensions. By design, this content will vertically scroll.
  </div>
{{</ example >}}

```html
<div class="overflow-y-auto">...</div>
```