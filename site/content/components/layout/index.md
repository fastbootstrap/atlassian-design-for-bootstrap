---
layout: docs
title: Layout
description: "Layout are build page layouts with 2 columns."
toc: true
group: misc
status: beta
menu:
  components:
---

**Bootstrap 5 Layout component**

Responsive Layout built with the latest Bootstrap 5. Layout component used for handling the overall layout of a page.

The Layout is a page layout build page with 2 columns: `sidebar` and `main`.

- `layout` A layout container
    - `layout-main` the main container next to the sidebar
    - `layout-sidebar` the container on the edge left of page


`layout-sidebar` no width setting by default, it depended on the width of the child element or set fixed width by CSS style. 

## Basic example

`layout-sidebar` height is `100vh` by default, it will show scroll-bar if the child's height over parent.

{{< example class="bd-h-40 p-0 overflow-hidden" >}}
<div class="layout">
  <main class="layout-main">
    .layout-main
  </main>
  <aside class="layout-sidebar border-end" style="width:240px">
    .layout-sidebar
  </aside>
</div>
{{</ example >}}

## Spacing

`layout` using grid layout, you can make use of [gap utilities]({{< docsref "gap" >}}) on the `layout` element. 

{{< example class="bd-h-40 p-0 overflow-hidden" >}}
<div class="layout gap-4">
  <main class="layout-main">
    .layout-main
  </main>
  <aside class="layout-sidebar border-end" style="width:240px">
    .layout-sidebar
  </aside>
</div>
{{</ example >}}

## Related

- [Side Navigation]({{< docsref "side-navigation" >}})