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

{{< callout danger >}}
- `layout-sidebar` no width setting by default, it depended on the width of the child element or set fixed width by CSS style. 
- `layout-sidebar` height is `100vh` by default.
{{</ callout >}}

## Basic example

{{< example class="bd-h-60 p-0 overflow-hidden" >}}
<div class="layout">
  <main class="layout-main px-4">
    <h4>This is main section</h4>
  </main>
  <aside class="layout-sidebar">
    <div class="sidenav show bg-neutral-10">
      <div class="menu">
        <ul class="menu-list">
          <li>
            <a class="menu-item" href="#">Menu 1</a>
          </li>
          <li>
            <a class="menu-item" href="#">Menu 2</a>
          </li>
          <li>
            <a class="menu-item" href="#">Menu 3</a>
          </li>
          <li>
            <a class="menu-item active" href="#">Menu 4</a>
          </li>
        </ul>
      </div>
    </div>
  </aside>
</div>
{{</ example >}}

### Scroll-bar

`layout-sidebar` height is `100vh` by default, it will show scroll-bar if the child's height over parent.

{{< example class="bd-h-60 p-0" >}}
<div class="layout">
  <main class="layout-main px-4">
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus vestibulum nisl nunc, sed viverra diam volutpat non. In eu enim arcu. Nunc suscipit ornare ex, nec venenatis nisi gravida nec. Proin fermentum semper ligula, a condimentum libero interdum sed. Donec quis ante neque. Morbi dignissim est sit amet blandit vestibulum. Etiam ornare tortor a risus auctor blandit. Sed elementum quis ante eu feugiat. Donec id massa diam. Curabitur lacus metus, venenatis id varius a, porta vel erat. Fusce varius velit non porta vulputate. Mauris et ante eu orci mattis ullamcorper a eu velit. Maecenas quis neque in odio consequat mollis.</p>
  </main>
  <aside class="layout-sidebar bd-h-60">
    <div class="sidenav show bg-neutral-10">
      <div class="menu">
        <ul class="menu-list">
          <li>
            <a class="menu-item" href="#">Menu 1</a>
          </li>
          <li>
            <a class="menu-item" href="#">Menu 2</a>
          </li>
          <li>
            <a class="menu-item" href="#">Menu 3</a>
          </li>
          <li>
            <a class="menu-item" href="#">Menu 3</a>
          </li>
          <li>
            <a class="menu-item" href="#">Menu 1</a>
          </li>
          <li>
            <a class="menu-item" href="#">Menu 2</a>
          </li>
          <li>
            <a class="menu-item" href="#">Menu 3</a>
          </li>
          <li>
            <a class="menu-item" href="#">Menu 4</a>
          </li>
          <li>
            <a class="menu-item" href="#">Menu 1</a>
          </li>
          <li>
            <a class="menu-item" href="#">Menu 2</a>
          </li>
          <li>
            <a class="menu-item" href="#">Menu 3</a>
          </li>
          <li>
            <a class="menu-item" href="#">Menu 4</a>
          </li>
        </ul>
      </div>
    </div>
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