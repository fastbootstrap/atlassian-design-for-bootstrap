---
layout: docs
title: Max Width
description: "Utilities for setting the maximum width of an element."
toc: true
status: new
group: sizing
menu:
  docs:    
    weight: 12
---

## Quick reference 

{{< class-api "max-width" true >}}

## Basic usage

### Setting the maximum width

Set the maximum width of an element using the `max-w-{size}` utilities.

<div class="bd-example">
  <div class="max-w-md mx-auto shadow border rounded p-3">
    <div class="d-flex">
      <img class="avatar avatar-xl" src="https://images.unsplash.com/photo-1501196354995-cbb51c65aaea?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=4&w=256&h=256&q=80" />
      <div class="ms-3">
        <h5>Andrew Alfred</h5>
        <p>Assistant to the Traveling Secretary</p>
      </div>
    </div>
  </div>
</div>

{{< example show_preview="false">}}
<div class="max-w-md mx-auto">
...
</div>
{{</ example >}}

## Constraining to your breakpoints

The `max-w-screen-{breakpoint}` classes can be used to give an element a `max-width` matching a specific breakpoint.
These values are automatically derived from the SASS variable  `$container-max-widths`. See [Breakpoints]({{< docsref "breakpoints" >}}) section.

{{< example class="d-flex flex-column gap-3" >}}
<div class="container max-w-screen-sm border">
.container, max-width 540px
</div>
<div class="container max-w-screen-md border">
.container, max-width 720px
</div>
<div class="container max-w-screen-lg border">
.container, max-width 960px
</div>
<div class="container max-w-screen-xl border">
.container, max-width 1140px
</div>
{{</ example >}}