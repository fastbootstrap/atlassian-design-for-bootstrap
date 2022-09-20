---
layout: docs
title: Menu
description: "Menus allows users take one action from a list of options, configure settings, and more."
toc: true
group: navigation
status: new
menu:
  components:
---

**Bootstrap 5 Menu navigation component**

Responsive a vertical navigation menu component built with the latest Bootstrap 5. Menu component is a vertical nagivation that allows take one action or redirect to another pages or section from a list of chooses.

A menu will fill its parent element's width by default. If you like, just use our [grid columns]({{< docsref "columns" >}}) as a parent. Otherwise, apply a custom width.

## Basic example

The menu is a vertical list of links in the example below. Add a `.active` to indicate the current page.

{{< example class="pb-5" >}}
<div class="col-12 col-md-4 mx-auto p-3 shadow">
  <div class="menu">
    <span class="menu-header">General</span>
    <ul class="menu-list">
      <li>
        <a class="menu-item" href="#">
          <i class="fa-solid fa-bullhorn me-2"></i> Dashboard
          <i class="fa-solid fa-star text-yellow-300 ms-auto"></i>
        </a>
      </li>
      <li>
        <a class="menu-item active" href="#" aria-current="page"><i class="fa-solid fa-tag me-2"></i> Orders </a>
      </li>
      <li>
        <a class="menu-item" href="#"><i class="fa-regular fa-circle-user me-2"></i> Customers </a>
      </li>
    </ul>
    <span class="menu-header">Settings</span>
    <ul class="menu-list">
      <li>
        <a class="menu-item" href="#">Change Password</a>
      </li>
      <li>
        <a class="menu-item" href="#">Logout</a>
      </li>
    </ul>
  </div>
</div>
{{</ example >}}

## Button items

A menu item wrapped in an `<button>` tag if you need.

{{< example class="pb-5" >}}
<div class="col-12 col-md-4 mx-auto p-3 shadow">
  <div class="menu">
    <span class="menu-header">General</span>
    <ul class="menu-list">
      <li>
        <button class="menu-item" type="button"><i class="fa-solid fa-bullhorn me-2"></i> Dashboard</button>
      </li>
      <li>
        <button class="menu-item" type="button"><i class="fa-solid fa-tag me-2"></i> Orders</button>
      </li>
      <li>
        <button class="menu-item" type="button"><i class="fa-regular fa-circle-user me-2"></i> Customers</button>
      </li>
    </ul>
    <span class="menu-header">Settings</span>
    <ul class="menu-list">
      <li>
        <button class="menu-item" type="button">Change Password</button>
      </li>
      <li>
        <button class="menu-item" type="button">Logout</button>
      </li>
    </ul>
  </div>
</div>
{{</ example >}}

## Nested menus

Wrapped the drop-down menus in the `.menu-list` adding to the parent menu. It can be nested up to 2 levels.

{{< example class="pb-5" >}}
<div class="col-12 col-md-4 mx-auto p-3 shadow">
  <div class="menu">
    <ul class="menu-list">
      <li>
        <a class="menu-item" href="#"><i class="fa-solid fa-house me-2"></i> Home</a>
      </li>
      <li>
        <a class="menu-item" href="#"><i class="fa-solid fa-tag me-2"></i> Products</a>
        <ul class="menu-list px-5">
          <li>
            <a class="menu-item" href="#">All Products</a>
          </li>
          <li>
            <a class="menu-item" href="#">Collections</a>
          </li>
          <li>
            <a class="menu-item" href="#">Gift cards</a>
          </li>
        </ul>
      </li>
      <li>
        <a class="menu-item" href="#"><i class="fa-solid fa-chart-column me-2"></i> Analytics</a>
        <ul class="menu-list px-5">
          <li>
            <a class="menu-item" href="#">Insights</a>
          </li>
          <li>
            <a class="menu-item" href="#">Reports</a>
          </li>
        </ul>
      </li>
      <li>
        <a class="menu-item" href="#"><i class="fa-solid fa-store me-2"></i> Markets</a>
      </li>
    </ul>
  </div>
</div>
{{</ example >}}

## Nested menus with collapse

Like the above example but allows the user to show or hide the submenus. [Accordion]({{< docsref "accordion" >}}) or [Collapse]({{< docsref "collapse" >}}) both provides the show or hide the contents. 

{{< example class="pb-5" >}}

<div class="col-12 col-md-4 mx-auto p-3 shadow">
  <div class="menu accordion">
    <ul class="menu-list">
      <li>
        <a class="menu-item" href="#"><i class="fa-solid fa-house me-2"></i> Home</a>
      </li>
      <li>
        <div class="menu-item">
          <button class="accordion-button p-0 fw-normal bg-transparent text-reset" type="button" data-bs-toggle="collapse" aria-expanded="true" data-bs-target="#submenu-1">
            <i class="fa-solid fa-tag me-2"></i> Products
          </button>
        </div>
        <div class="accordion-collapse collapse show" id="submenu-1">
          <ul class="menu-list px-5">
            <li>
              <a class="menu-item" href="#">All Products</a>
            </li>
            <li>
              <a class="menu-item" href="#">Collections</a>
            </li>
            <li>
              <a class="menu-item" href="#">Gift cards</a>
            </li>
          </ul>
        </div>
      </li>
      <li>
        <div class="menu-item">
          <button class="accordion-button collapsed p-0 fw-normal bg-transparent text-reset" type="button" data-bs-toggle="collapse" aria-expanded="false" data-bs-target="#submenu-2">
            <i class="fa-solid fa-chart-column me-2"></i> Analytics
          </button>
        </div>
        <div class="accordion-collapse collapse" id="submenu-2">
          <ul class="menu-list px-5">
            <li>
              <a class="menu-item" href="#">Insights</a>
            </li>
            <li>
              <a class="menu-item" href="#">Reports</a>
            </li>
          </ul>
        </div>
      </li>
      <li>
        <a class="menu-item" href="#"><i class="fa-solid fa-store me-2"></i> Markets</a>
      </li>
    </ul>
  </div>
</div>
{{</ example >}}

## Disabled states

Use `.disabled` to the link menus or `[disabled]` boolean attribute to the button menus that will applied to `pointer-events: none`,  preventing hover and active states from triggering.

{{< example class="pb-5" >}}
<div class="col-12 col-md-4 mx-auto p-3 shadow">
  <div class="menu">
    <span class="menu-header">Actions</span>
    <ul class="menu-list">
      <li>
        <a class="menu-item" href="#"><i class="fa-solid fa-magnifying-glass me-2"></i> Search your items</a>
      </li>
      <li>
        <a class="menu-item disabled" href="#"><i class="fa-solid fa-pen"></i> Add new item (disabled)</a>
      </li>
      <li>
        <a class="menu-item disabled" href="#"><i class="fa-solid fa-trash me-2"></i> Delete item (disabled)</a>
      </li>
    </ul>
  </div>
</div>
{{</ example >}}

## Related

- [Accordion]({{< docsref "accordion" >}})
- [Collapse]({{< docsref "collapse" >}})
- [List Group]({{< docsref "list-group" >}})