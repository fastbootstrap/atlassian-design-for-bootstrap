---
layout: docs
title: Position
description: "Use these shorthand utilities for quickly configuring the position of an element."
toc: true
group: layout
menu:
  docs:    
---

Quick positioning classes are available, though they are not responsive.

## Quick reference

{{< class-api "position" >}}

## Basic usage

### Arrange elements

Arrange elements easily with the edge positioning utilities. The format is `{property}-{position}`.

Where *property* is one of:

- `top` - for the vertical `top` position
- `start` - for the horizontal `left` position (in LTR)
- `bottom` - for the vertical `bottom` position
- `end` - for the horizontal `right` position (in LTR)

Where *position* is one of:

- `0` - for `0` edge position
- `50` - for `50%` edge position
- `100` - for `100%` edge position

{{< example class="bg-grid-slate-100 bg-neutral-subtler" show_source="false" >}}
<div class="position-relative bg-purple-subtler bd-h-40 max-w-2xl mx-auto">
  <div class="position-absolute top-0 start-0 bd-w-10 bd-h-10 text-bg-purple d-inline-flex align-items-center justify-content-center">01</div>
  <div class="position-absolute top-0 end-0 bd-w-10 bd-h-10 text-bg-purple d-inline-flex align-items-center justify-content-center">02</div>
  <div class="position-absolute top-50 start-50 bd-w-10 bd-h-10 text-bg-purple d-inline-flex align-items-center justify-content-center">03</div>
  <div class="position-absolute bottom-50 end-50 bd-w-10 bd-h-10 text-bg-purple d-inline-flex align-items-center justify-content-center">04</div>
  <div class="position-absolute bottom-0 start-0 bd-w-10 bd-h-10 text-bg-purple d-inline-flex align-items-center justify-content-center">05</div>
  <div class="position-absolute bottom-0 end-0 bd-w-10 bd-h-10 text-bg-purple d-inline-flex align-items-center justify-content-center">06</div>
</div>
{{< /example >}}

```html
<div class="position-relative">
  <div class="position-absolute top-0 start-0">01</div>
  <div class="position-absolute top-0 end-0">02</div>
  <div class="position-absolute top-50 start-50">03</div>
  <div class="position-absolute bottom-50 end-50">04</div>
  <div class="position-absolute bottom-0 start-0">05</div>
  <div class="position-absolute bottom-0 end-0">06</div>
</div>
```

### Center elements

In addition, you can also center the elements with the transform utility class `.translate-middle`.

This class applies the transformations `translateX(-50%)` and `translateY(-50%)` to the element which, in combination with the edge positioning utilities, allows you to absolute center an element.

{{< example class="bg-grid-slate-100 bg-neutral-subtler" show_source="false" >}}
<div class="position-relative bg-purple-subtler bd-h-40 max-w-2xl mx-auto">
  <div class="position-absolute top-0 start-0 translate-middle bd-w-10 bd-h-10 text-bg-purple d-inline-flex align-items-center justify-content-center">01</div>
  <div class="position-absolute top-0 start-50 translate-middle bd-w-10 bd-h-10 text-bg-purple d-inline-flex align-items-center justify-content-center">02</div>
  <div class="position-absolute top-0 start-100 translate-middle bd-w-10 bd-h-10 text-bg-purple d-inline-flex align-items-center justify-content-center">03</div>
  <div class="position-absolute top-50 start-0 translate-middle bd-w-10 bd-h-10 text-bg-purple d-inline-flex align-items-center justify-content-center">04</div>
  <div class="position-absolute top-50 start-50 translate-middle bd-w-10 bd-h-10 text-bg-purple d-inline-flex align-items-center justify-content-center">05</div>
  <div class="position-absolute top-50 start-100 translate-middle bd-w-10 bd-h-10 text-bg-purple d-inline-flex align-items-center justify-content-center">06</div>
  <div class="position-absolute top-100 start-0 translate-middle bd-w-10 bd-h-10 text-bg-purple d-inline-flex align-items-center justify-content-center">07</div>
  <div class="position-absolute top-100 start-50 translate-middle bd-w-10 bd-h-10 text-bg-purple d-inline-flex align-items-center justify-content-center">08</div>
  <div class="position-absolute top-100 start-100 translate-middle bd-w-10 bd-h-10 text-bg-purple d-inline-flex align-items-center justify-content-center">09</div>
</div>
{{< /example >}}

```html
<div class="position-relative">
  <div class="position-absolute top-0 start-0 translate-middle">01</div>
  <div class="position-absolute top-0 start-50 translate-middle">02</div>
  <div class="position-absolute top-0 start-100 translate-middle">03</div>
  <div class="position-absolute top-50 start-0 translate-middle">04</div>
  <div class="position-absolute top-50 start-50 translate-middle">05</div>
  <div class="position-absolute top-50 start-100 translate-middle">06</div>
  <div class="position-absolute top-100 start-0 translate-middle">07</div>
  <div class="position-absolute top-100 start-50 translate-middle">08</div>
  <div class="position-absolute top-100 start-100 translate-middle">09</div>
</div>
```

By adding `.translate-middle-x` or `.translate-middle-y` classes, elements can be positioned only in horizontal or vertical direction.

{{< example class="bg-grid-slate-100 bg-neutral-subtler" show_source="false" >}}
<div class="position-relative bg-purple-subtler bd-h-40 max-w-2xl mx-auto">
  <div class="position-absolute top-0 start-0 bd-w-10 bd-h-10 text-bg-purple d-inline-flex align-items-center justify-content-center">01</div>
  <div class="position-absolute top-0 start-50 translate-middle-x bd-w-10 bd-h-10 text-bg-purple d-inline-flex align-items-center justify-content-center">02</div>
  <div class="position-absolute top-0 end-0 bd-w-10 bd-h-10 text-bg-purple d-inline-flex align-items-center justify-content-center">03</div>
  <div class="position-absolute top-50 start-0 translate-middle-y bd-w-10 bd-h-10 text-bg-purple d-inline-flex align-items-center justify-content-center">04</div>
  <div class="position-absolute top-50 start-50 translate-middle bd-w-10 bd-h-10 text-bg-purple d-inline-flex align-items-center justify-content-center">05</div>
  <div class="position-absolute top-50 end-0 translate-middle-y bd-w-10 bd-h-10 text-bg-purple d-inline-flex align-items-center justify-content-center">06</div>
  <div class="position-absolute bottom-0 start-0 bd-w-10 bd-h-10 text-bg-purple d-inline-flex align-items-center justify-content-center">07</div>
  <div class="position-absolute bottom-0 start-50 translate-middle-x bd-w-10 bd-h-10 text-bg-purple d-inline-flex align-items-center justify-content-center">08</div>
  <div class="position-absolute bottom-0 end-0 bd-w-10 bd-h-10 text-bg-purple d-inline-flex align-items-center justify-content-center">09</div>
</div>
{{</ example >}}

```html
<div class="position-relative">
  <div class="position-absolute top-0 start-0">01</div>
  <div class="position-absolute top-0 start-50 translate-middle-x">02</div>
  <div class="position-absolute top-0 end-0">03</div>
  <div class="position-absolute top-50 start-0 translate-middle-y">04</div>
  <div class="position-absolute top-50 start-50 translate-middle">05</div>
  <div class="position-absolute top-50 end-0 translate-middle-y">06</div>
  <div class="position-absolute bottom-0 start-0">07</div>
  <div class="position-absolute bottom-0 start-50 translate-middle-x">08</div>
  <div class="position-absolute bottom-0 end-0">09</div>
</div>
```


## Examples

Here are some real life examples of these classes:

{{< example class="bd-example-position-examples d-flex justify-content-around" >}}
<button type="button" class="btn btn-primary position-relative">
  Mails <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill text-bg-purple">+99 <span class="visually-hidden">unread messages</span></span>
</button>

<button type="button" class="btn btn-primary position-relative">
  Marker <svg width="1em" height="1em" viewBox="0 0 16 16" class="position-absolute top-100 start-50 translate-middle mt-1" fill="var(--ds-text-brand)" xmlns="http://www.w3.org/2000/svg"><path d="M7.247 11.14L2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z"/></svg>
</button>

<button type="button" class="btn btn-primary position-relative">
  Alerts <span class="position-absolute top-0 start-100 translate-middle badge border border-light rounded-circle bg-danger p-2"><span class="visually-hidden">unread messages</span></span>
</button>
{{< /example >}}

You can use these classes with existing components to create new ones. Remember that you can extend its functionality by adding entries to the `$position-values` variable.

{{< example class="bd-example-position-examples" >}}
<div class="position-relative m-4">
  <div class="progress" style="height: 1px;">
    <div class="progress-bar bg-primary" role="progressbar" aria-label="Progress" style="width: 50%;" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
  </div>
  <button type="button" class="position-absolute top-0 start-0 translate-middle btn btn-sm btn-primary rounded-pill" style="width: 2rem; height:2rem;">1</button>
  <button type="button" class="position-absolute top-0 start-50 translate-middle btn btn-sm btn-primary rounded-pill" style="width: 2rem; height:2rem;">2</button>
  <button type="button" class="position-absolute top-0 start-100 translate-middle btn btn-sm btn-secondary rounded-pill" style="width: 2rem; height:2rem;">3</button>
</div>
{{< /example >}}