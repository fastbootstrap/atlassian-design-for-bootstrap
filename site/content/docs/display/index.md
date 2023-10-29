---
layout: docs
title: Display
description: "Quickly and responsively toggle the display value of components and more with our display utilities. Includes support for some of the more common values, as well as some extras for controlling display when printing."
toc: true
group: layout
menu:
  docs:
---

## Quick reference

{{< class-api "display" >}}

## How it works

Change the value of the [`display` property](https://developer.mozilla.org/en-US/docs/Web/CSS/display) with our responsive display utility classes. We purposely support only a subset of all possible values for `display`. Classes can be combined for various effects as you need.

## Basic usage

### Block & Inline

Use `d-inline`, `d-inline-block`, and `d-block` to control the flow of text and elements.

{{< example class="bg-neutral-subtler" show_source="false" >}}

<div class="card mx-auto bd-max-w-80">
  <div class="card-body">
    When controlling the flow of text, using the CSS property
    <span class="d-inline"><code>display: inline</code></span>
    will cause the text inside the element to wrap normally. <br/><br/>While using the property <span class="d-inline-block"><code>display: inline-block</code></span> will wrap the element to prevent the text inside from extending beyond its
    parent. <br/><br/>Lastly, using the property <span class="d-block"><code>display: block</code></span>
    will put the element on its own line and fill its parent.
  </div>
</div>
{{</ example >}}

```html
<div>
  When controlling the flow of text, using the CSS property
  <span class="d-inline">display: inline</span>
  will cause the text inside the element to wrap normally. While using the
  property <span class="d-inline-block">display: inline-block</span> will wrap
  the element to prevent the text inside from extending beyond its parent.
  Lastly, using the property <span class="d-block">display: block</span>
  will put the element on its own line and fill its parent.
</div>
```

### Flex

Use `d-flex` to create a block-level flex container.

{{< example class="bg-neutral-subtler" show_source="false" >}}

<div class="card mx-auto bd-max-w-80">
  <div class="card-body">
    <div class="d-flex align-items-center">
      <img class="avatar avatar-lg" src="/images/avatar/1.jpg" />
      <div class="ms-3">
        <strong class="d-block">Andrew Alfred</strong>
        <span class="d-block">Technical advisor</span>
      </div>
    </div>
  </div>
</div>
{{</ example >}}

```html
<div class="flex align-items-center">
  <img src="path/to/image.jpg" />
  <div>
    <strong>Andrew Alfred</strong>
    <span>Technical advisor</span>
  </div>
</div>
```

### Inline Flex

Use `d-inline-flex` to create an inline flex container that flows with text.

{{< example class="bg-neutral-subtler" show_source="false" >}}

<div class="card mx-auto max-w-lg">
  <div class="card-body">
    <p class="lh-lg">
      Today I spent most of the day researching ways to take advantage of the fact that bottles can be returned for 10 cents in Michigan, but only 5 cents here.
      <span class="d-inline-flex align-items-baseline">
        <img src="https://images.unsplash.com/photo-1501196354995-cbb51c65aaea?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=4&w=256&h=256&q=80" class="avatar avatar-sm mx-1 align-self-center"/>
        <span class="fw-semibold">Kramer</span>
      </span>
      keeps telling me there is no way to make it work, that he has run the numbers on every possible approach, but I just have to believe there's a way to make it work, there's simply too much opportunity here.
    </p>
  </div>
</div>
{{</ example >}}

```html
<p>
  Today I spent most of the day researching ways to ...
  <span class="inline-flex align-items-baseline">
    <img
      src="path/to/image.jpg"
      class="avatar avatar-sm align-self-center mx-1"
    />
    <span>Kramer</span>
  </span>
  keeps telling me there is no way to make it work, that ...
</p>
```

### Grid

Use `grid` to create a grid container.

{{< callout warning >}}
CSS Grid is `disabled` by default on Bootstrap. You can see our [CSS Grid]({{< docsref "css-grid" >}}) section to knowns more.
{{</ callout >}}

{{< example class="bg-neutral-subtler" show_source="false" >}}

<div class="grid gap-4 text-center fw-semibold bg-striped-purple rounded-3">
  <div class="g-col-4 p-3 text-bg-purple rounded-3">01</div>
  <div class="g-col-4 p-3 text-bg-purple rounded-3">02</div>
  <div class="g-col-4 p-3 text-bg-purple rounded-3">03</div>
  <div class="g-col-4 p-3 text-bg-purple rounded-3">04</div>
  <div class="g-col-4 p-3 text-bg-purple rounded-3">05</div>
  <div class="g-col-4 p-3 text-bg-purple rounded-3">06</div>
  <div class="g-col-4 p-3 text-bg-purple rounded-3">07</div>
  <div class="g-col-4 p-3 text-bg-purple rounded-3">08</div>
  <div class="g-col-4 p-3 text-bg-purple rounded-3">09</div>
</div>
{{</ example >}}

```html
<div class="grid gap-4">
  <div class="g-col-4">01</div>
  <div class="g-col-4">02</div>
  <div class="g-col-4">03</div>
  <!-- ... -->
</div>
```

### Table

Use the `d-table`, `d-table-row`, `d-table-cell` utilities to create elements that behave like their respective table elements.

{{< example class="bg-neutral-subtler" show_source="false" >}}

<div class="d-table border w-100 fs-sm bg-body">
  <div class="d-table-row">
    <div class="d-table-cell text-left p-2 fw-semibold">Song</div>
    <div class="d-table-cell text-left p-2 fw-semibold">Artist</div>
    <div class="d-table-cell text-left p-2 fw-semibold">Year</div>
  </div>
  <div class="d-table-row">
    <div class="d-table-cell p-2 border-bottom">The Sliding Mr. Bones (Next Stop, Pottersville)</div>
    <div class="d-table-cell p-2 border-bottom">Malcolm Lockyer</div>
    <div class="d-table-cell p-2 border-bottom">1961</div>
  </div>
  <div class="d-table-row">
    <div class="d-table-cell p-2 border-bottom">Witchy Woman</div>
    <div class="d-table-cell p-2 border-bottom">The Eagles</div>
    <div class="d-table-cell p-2 border-bottom">1972</div>
  </div>
  <div class="d-table-row">
    <div class="d-table-cell p-2">Shining Star</div>
    <div class="d-table-cell p-2">Earth, Wind, and Fire</div>
    <div class="d-table-cell p-2">1975</div>
  </div>
</div>
{{</ example >}}

```html
<div class="d-table ...">
  <div class="d-table-row ...">
    <div class="d-table-cell ...">Song</div>
    <div class="d-table-cell">Artist</div>
    <div class="d-table-cell">Year</div>
  </div>
  <div class="d-table-row ...">
    <div class="d-table-cell ...">
      The Sliding Mr. Bones (Next Stop, Pottersville)
    </div>
    <div class="d-table-cell ...">Malcolm Lockyer</div>
    <div class="d-table-cell ...">1961</div>
  </div>
  <div class="d-table-row ...">
    <div class="d-table-cell ...">Witchy Woman</div>
    <div class="d-table-cell ...">The Eagles</div>
    <div class="d-table-cell ...">1972</div>
  </div>
  <div class="d-table-row ...">
    <div class="d-table-cell ...">Shining Star</div>
    <div class="d-table-cell ...">Earth, Wind, and Fire</div>
    <div class="d-table-cell ...">1975</div>
  </div>
</div>
```

### Hiding

Use `d-none` to set an element to `display: none` and remove it from the page layout.

{{< example show_source="false" >}}

<div class="d-flex gap-4 bg-striped-purple text-center">
  <div class="d-flex align-items-center justify-content-center bd-w-14 bd-h-14 d-none">01</div>
  <div class="d-flex align-items-center justify-content-center bd-w-14 bd-h-14 text-bg-purple">02</div>
  <div class="d-flex align-items-center justify-content-center bd-w-14 bd-h-14 text-bg-purple">03</div>
</div>
{{</ example >}}

```html
<div class="d-flex ...">
  <div class="d-none ...">01</div>
  <div>02</div>
  <div>03</div>
</div>
```

## Hiding elements

For faster mobile-friendly development, use responsive display classes for showing and hiding elements by device. Avoid creating entirely different versions of the same site, instead hide elements responsively for each screen size.

To hide elements simply use the `.d-none` class or one of the `.d-{sm,md,lg,xl,xxl}-none` classes for any responsive screen variation.

To show an element only on a given interval of screen sizes you can combine one `.d-*-none` class with a `.d-*-*` class, for example `.d-none .d-md-block .d-xl-none .d-xxl-none` will hide the element for all screen sizes except on medium and large devices.

{{< bs-table "table api-class-table" >}}
| Screen size | Class |
| --- | --- |
| Hidden on all | `.d-none` |
| Hidden only on xs | `.d-none`, `.d-sm-block` |
| Hidden only on sm | `.d-sm-none`, `.d-md-block` |
| Hidden only on md | `.d-md-none`, `.d-lg-block` |
| Hidden only on lg | `.d-lg-none`, `.d-xl-block` |
| Hidden only on xl | `.d-xl-none` |
| Hidden only on xxl | `.d-xxl-none`, `.d-xxl-block` |
| Visible on all | `.d-block` |
| Visible only on xs | `.d-block`, `.d-sm-none` |
| Visible only on sm | `.d-none`, `.d-sm-block`, `.d-md-none` |
| Visible only on md | `.d-none`, `.d-md-block`, `.d-lg-none` |
| Visible only on lg | `.d-none`, `.d-lg-block`, `.d-xl-none` |
| Visible only on xl | `.d-none`, `.d-xl-block`, `.d-xxl-none` |
| Visible only on xxl | `.d-none`, `.d-xxl-block` |
{{< /bs-table >}}

### Dynamically hiding 

{{< example >}}
<div class="p-5 text-bg-primary d-lg-none">hide on lg and wider screens</div>
<div class="p-5 text-bg-purple d-none d-lg-block">hide on screens smaller than lg</div>
{{< /example >}}

## Breakpoints

The display utility classes that apply to all [breakpoints]({{< docsref "breakpoints" >}}), from `xs` to `xxl`, have no breakpoint abbreviation in them. This is because those classes are applied from `min-width: 0;` and up, and thus are not bound by a media query. The remaining breakpoints, however, do include a breakpoint abbreviation.

As such, the classes are named using the format:

- `.d-{value}` for `xs`
- `.d-{breakpoint}-{value}` for `sm`, `md`, `lg`, `xl`, and `xxl`.

Where _value_ is one of:

- `none`
- `inline`
- `inline-block`
- `block`
- `grid`
- `table`
- `table-cell`
- `table-row`
- `flex`
- `inline-flex`

The display values can be altered by changing the `display` values defined in `$utilities` and recompiling the SCSS.

{{< markdown >}}
{{< flex.inline >}}
{{- range $bp := $.Site.Data.breakpoints }}
{{- if ne .abbr "" }}
{{- range (slice "none" "inline" "inline-block" "block" "grid" "table" "table-cell" "table-row" "flex" "inline-flex" ) }}

- `.d{{ $bp.abbr }}-{{.}}`
  {{- end -}}
  {{- end -}}
  {{- end -}}
  {{< /flex.inline >}}
  {{< /markdown >}}

The media queries affect screen widths with the given breakpoint _or larger_. For example, `.d-lg-none` sets `display: none;` on `lg`, `xl`, and `xxl` screens.

{{< example >}}

<div class="d-block d-md-inline-block text-bg-primary p-2">xs=block md=inline-block</div>
<div class="d-block d-md-inline-block text-bg-dark p-2">xs=block md=inline-block</div>
{{</ example >}}

## Display in print

Change the `display` value of elements when printing with our print display utility classes. Includes support for the same `display` values as our responsive `.d-*` utilities.

- `.d-print-none`
- `.d-print-inline`
- `.d-print-inline-block`
- `.d-print-block`
- `.d-print-grid`
- `.d-print-table`
- `.d-print-table-row`
- `.d-print-table-cell`
- `.d-print-flex`
- `.d-print-inline-flex`

The print and display classes can be combined.

{{< example >}}

<div class="d-print-none">Screen Only (Hide on print only)</div>
<div class="d-none d-print-block">Print Only (Hide on screen only)</div>
<div class="d-none d-lg-block d-print-block">Hide up to large on screen, but always show on print</div>
{{< /example >}}
