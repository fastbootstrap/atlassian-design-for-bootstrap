---
layout: docs
title: List Group
description: "List gorup used for displays a continuous group of text or images."
toc: true
group: surfaces
menu:
  components:
---

**Bootstrap 5 List group component**

Responsive List group built with the latest Bootstrap 5. List gorup component used for displays a continuous group of text or images.

List groups are a flexible and powerful component for displaying a series of content. Modify and extend them to support just about any content within.

## Basic example

The most basic list group is an unordered list with list items and the proper classes. Build upon it with the options that follow, or with your own CSS as needed.

{{< example class="bd-example-list-group d-flex justify-content-center bg-light" >}}
<ul class="list-group">
  <li class="list-group-item list-group-item-action">
    <i class="fa-solid fa-inbox fa-lg me-3"></i> Inbox
  </li>
  <li class="list-group-item list-group-item-action">
    <i class="fa-solid fa-envelope-open fa-lg me-3"></i> Draft
  </li>
  <hr/>
  <li class="list-group-item list-group-item-action">Trash</li>
  <li class="list-group-item list-group-item-action">Spam</li>
</ul>
{{</ example >}}

## Active items 

Add `.active` to `.list-group-item` to indicate the current active selection.

{{< example class="bd-example-list-group d-flex justify-content-center bg-light" >}}
<ul class="list-group">
  <li class="list-group-item list-group-item-action"><i class="fa-solid fa-inbox fa-lg me-3"></i> Inbox</li>
  <li class="list-group-item list-group-item-action active"><i class="fa-solid fa-envelope-open fa-lg me-3"></i> Draft</li>
  <hr/>
  <li class="list-group-item list-group-item-action">Trash</li>
  <li class="list-group-item list-group-item-action">Spam</li>
</ul>
{{</ example >}}

## Disabled items 

Add `.disabled` to `.list-group-item` to make it appear disabled. S

{{< example class="bd-example-list-group d-flex justify-content-center bg-light" >}}
<ul class="list-group">
  <li class="list-group-item list-group-item-action"><i class="fa-solid fa-inbox fa-lg me-3"></i> Inbox</li>
  <li class="list-group-item list-group-item-action disabled"><i class="fa-solid fa-envelope-open fa-lg me-3"></i> Draft</li>
  <hr/>
  <li class="list-group-item list-group-item-action">Trash</li>
  <li class="list-group-item list-group-item-action">Spam</li>
</ul>
{{</ example >}}

{{< callout >}}
Some elements with `.disabled` will also require custom JavaScript to fully disable their click events (e.g., links).
{{</ callout >}}

## Links and buttons

Use `<a>`s or `<button>`s to create actionable list group items with hover, disabled, and active states by adding `.list-group-item-action`. We separate these pseudo-classes to ensure list groups made of non-interactive elements (like `<li>`s or `<div>`s) don’t provide a click or tap affordance.

### Links 

{{< example class="bd-example-list-group d-flex justify-content-center bg-light" >}}
<div class="list-group">
  <a class="list-group-item list-group-item-action" href="#">
    <i class="fa-solid fa-inbox fa-lg me-3"></i> Inbox
  </a>
  <a class="list-group-item list-group-item-action active" href="#">
    <i class="fa-solid fa-envelope-open fa-lg me-3"></i> Draft
  </a>
  <a class="list-group-item list-group-item-action" href="#">Trash</a>
  <a class="list-group-item list-group-item-action disabled" href="#">Spam</a>
</div>
{{</ example >}}

### Buttons

With `<button>`s, you can also make use of the disabled attribute instead of the `.disabled` class. Sadly, `<a>`s don’t support the disabled attribute.

{{< example class="bd-example-list-group d-flex justify-content-center bg-light" >}}
<div class="list-group">
  <button class="list-group-item list-group-item-action" type="button">
    <i class="fa-solid fa-inbox fa-lg me-3"></i> Inbox
  </button>
  <button class="list-group-item list-group-item-action active" type="button">
    <i class="fa-solid fa-envelope-open fa-lg me-3"></i> Draft
  </button>
  <button class="list-group-item list-group-item-action" type="button">Trash</button>
  <button class="list-group-item list-group-item-action" type="button" disabled>Spam</button>
</div>
{{</ example >}}

## Flush

Add `.list-group-flush` to add a border to render list group items edge-to-edge in a parent container (e.g., cards).

{{< example class="bd-example-list-group d-flex justify-content-center bg-light" >}}
<ul class="list-group list-group-flush">
  <li class="list-group-item">An item</li>
  <li class="list-group-item">A second item</li>
  <li class="list-group-item">A third item</li>
  <li class="list-group-item">A fourth item</li>
  <li class="list-group-item">And a fifth one</li>
</ul>
{{</ example >}}

## Numbered 

Add the `.list-group-numbered` modifier class (and optionally use an `<ol>` element) to opt into numbered list group items. Numbers are generated via CSS (as opposed to a `<ol>`s default browser styling) for better placement inside list group items and to allow for better customization.

Numbers are generated by `counter-reset` on the `<ol>`, and then styled and placed with a `::before` pseudo-element on the `<li>` with counter-increment and content.

{{< example class="bd-example-list-group d-flex justify-content-center bg-light" >}}
<ol class="list-group list-group-numbered">
  <li class="list-group-item ">Single-line item</li>
  <li class="list-group-item">Single-line item</li>
  <li class="list-group-item">Single-line item</li>
</ol>
{{</ example >}}

These work great with custom content as well.

{{< example class="bd-example-list-group d-flex justify-content-center bg-light" >}}
<ol class="list-group list-group-numbered">
  <li class="list-group-item d-flex justify-content-between align-items-start">
    <div class="ms-2 me-auto">
      <div>Subheading</div>
      <p class="mb-0 fs-sm text-muted">Content for list item</p>
    </div>
    <span class="badge text-bg-primary">14</span>
  </li>
  <li class="list-group-item d-flex justify-content-between align-items-start">
    <div class="ms-2 me-auto">
      <div>Subheading</div>
      <p class="mb-0 fs-sm text-muted">Content for list item</p>
    </div>
    <span class="badge text-bg-primary">14</span>
  </li>
  <li class="list-group-item d-flex justify-content-between align-items-start">
    <div class="ms-2 me-auto">
      <div>Subheading</div>
      <p class="mb-0 fs-sm text-muted">Content for list item</p>
    </div>
    <span class="badge text-bg-primary">14</span>
  </li>
</ol>
{{</ example >}}

## Horizontal 

Add `.list-group-horizontal` to change the layout of list group items from vertical to horizontal across all breakpoints. Alternatively, choose a responsive variant `.list-group-horizontal-{sm|md|lg|xl|xxl}` to make a list group horizontal starting at that breakpoint’s min-width. 

{{< callout >}}
Want equal-width list group items when horizontal? Add `.flex-fill` to each list group item.
{{</ callout >}}

{{< example >}}
<ul class="list-group list-group-horizontal">
  <li class="list-group-item">First item</li>
  <li class="list-group-item">Second item</li>
  <li class="list-group-item">Third item</li>
</ul>
<ul class="list-group list-group-horizontal">
  <li class="list-group-item">First item</li>
  <li class="list-group-item">Second item</li>
  <li class="list-group-item">Third item</li>
</ul>
<ul class="list-group list-group-horizontal-md">
  <li class="list-group-item">First item</li>
  <li class="list-group-item">Second item</li>
  <li class="list-group-item">Third item</li>
</ul>
{{</ example >}}

## Contextual classes 

Use contextual classes to style list items with a stateful background and color. Or you can use our background color utilities to change .Check out [background color]({{< docsref "background-color" >}})

{{< example class="bd-example-list-group d-flex justify-content-center bg-light" >}}
<ul class="list-group gap-2">
  <li class="list-group-item">A simple default list group item</li>
  <li class="list-group-item list-group-item-primary">A simple primary list group item</li>
  <li class="list-group-item list-group-item-secondary">A simple secondary list group item</li>
  <li class="list-group-item list-group-item-success">A simple success list group item</li>
  <li class="list-group-item list-group-item-danger">A simple danger list group item</li>
  <li class="list-group-item list-group-item-warning">A simple warning list group item</li>
  <li class="list-group-item list-group-item-info">A simple info list group item</li>
  <li class="list-group-item list-group-item-light">A simple light list group item</li>
  <li class="list-group-item list-group-item-dark">A simple dark list group item</li>
</ul>
{{</ example >}}

## With badges

Add [badge]({{< ref "badge" >}}) to any list group item to show unread counts, activity, and more with the help of some utilities.

{{< example class="bd-example-list-group d-flex justify-content-center bg-light" >}}
<ul class="list-group">
  <li class="list-group-item list-group-item-action d-flex justify-content-between align-items-center">
    List item
    <span class="badge text-bg-primary">14</span>
  </li>
  <li class="list-group-item list-group-item-action d-flex justify-content-between align-items-center">
    List item
    <span class="badge text-bg-primary">+2</span>
  </li>
  <li class="list-group-item list-group-item-action d-flex justify-content-between align-items-center">
    List item
    <span class="badge text-bg-secondary">1</span>
  </li>
</ul>
{{</ example >}}

## Custom content 

In this example, we use [lozenge]({{< ref "lozenge" >}}) and any HTML element to any list group item to show the user status.

{{< example class="bd-example-list-group d-flex justify-content-center bg-light" >}}
<ul class="list-group">
  <li class="list-group-item d-flex justify-content-between align-items-center">
    <div class="d-flex align-items-center">
      <img class="avatar avatar-lg" src="/images/avatar/1.jpg" alt="" />
      <div class="ms-3">
        <p class="fw-bold mb-0">John Doe</p>
        <p class="text-muted mb-0 fs-sm">john.doe@gmail.com</p>
      </div>
    </div>
    <span class="lozenge lozenge-success">Active</span>
  </li>
  <li class="list-group-item d-flex justify-content-between align-items-center">
    <div class="d-flex align-items-center">
      <img class="avatar avatar-lg" src="/images/avatar/2.jpg" alt="" />
      <div class="ms-3">
        <p class="fw-bold mb-0">Alex Ray</p>
        <p class="text-muted mb-0 fs-sm">alex.ray@gmail.com</p>
      </div>
    </div>
    <span class="lozenge lozenge-removed">Removed</span>
  </li>
  <li class="list-group-item d-flex justify-content-between align-items-center">
    <div class="d-flex align-items-center">
      <img class="avatar avatar-lg" src="/images/avatar/3.jpg" alt="" />
      <div class="ms-3">
        <p class="fw-bold mb-0">Kate Hunington</p>
        <p class="text-muted mb-0 fs-sm">kate.hunington@gmail.com</p>
      </div>
    </div>
    <span class="lozenge lozenge-inprogress">Awaiting</span>
  </li>
</ul>
{{</ example >}}

## Checkboxes and radios

Place [checkboxes]({{< ref "checkbox" >}}) and [radios]({{< ref "radio" >}}) within list group items and customize as needed. You can use them without `<label>`s, but please remember to include an `aria-label` attribute and value for accessibility.

{{< example class="bd-example-list-group d-flex justify-content-center bg-light" >}}
<ul class="list-group">
  <li class="list-group-item list-group-item-action">
    <div class="d-flex flex-row-reverse justify-content-between">
      <input class="form-check-input me-1" type="checkbox" value="" checked id="firstCheckbox" />
      <label class="form-check-label" for="firstCheckbox">List item 1</label>
    </div>
  </li>
  <li class="list-group-item list-group-item-action">
    <div class="d-flex flex-row-reverse justify-content-between">
      <input class="form-check-input me-1" type="checkbox" value="" id="secondCheckbox" />
      <label class="form-check-label d-block" for="secondCheckbox">List item 2</label>
    </div>
  </li>
  <li class="list-group-item list-group-item-action">
    <div class="d-flex flex-row-reverse justify-content-between">
      <input class="form-check-input me-1" type="checkbox" value="" id="thirdCheckbox" />
      <label class="form-check-label d-block" for="thirdCheckbox">List item 3</label>
    </div>
  </li>
</ul>
{{</ example >}}

{{< example class="bd-example-list-group d-flex justify-content-center bg-light" >}}
<ul class="list-group">
  <li class="list-group-item list-group-item-action">
    <div class="d-flex flex-row-reverse justify-content-between">
      <input class="form-check-input me-1" type="radio" name="listGroupRadio" value="" id="firstRadio">
      <label class="form-check-label" for="firstRadio">List item 1</label>
    </div>
  </li>
  <li class="list-group-item list-group-item-action">
    <div class="d-flex flex-row-reverse justify-content-between">
      <input class="form-check-input me-1" type="radio" name="listGroupRadio" value="" id="secondRadio">
      <label class="form-check-label" for="secondRadio">List item 2</label>
    </div>
  </li>
  <li class="list-group-item list-group-item-action">
    <div class="d-flex flex-row-reverse justify-content-between">
      <input class="form-check-input me-1" type="radio" name="listGroupRadio" value="" id="thirdRadio">
      <label class="form-check-label" for="thirdRadio">List item 3</label>
    </div>
  </li>
</ul>
{{</ example >}}

## Customization

### With Tabs

Use the [tab plugin]({{< ref "tabs" >}}) to extend our list group to create tabbable panes of local content. Check out our [tabs compoment]({{< ref "tabs" >}}) for more information.

{{< example >}}
<div class="row">
  <div class="col-4">
    <div class="list-group" id="list-tab" role="tablist">
      <a class="list-group-item list-group-item-action active" id="list-home-list" data-bs-toggle="list" href="#list-home" role="tab" aria-controls="list-home">
        Home
      </a>
      <a class="list-group-item list-group-item-action" id="list-profile-list" data-bs-toggle="list" href="#list-profile" role="tab" aria-controls="list-profile">
        Profile
      </a>
      <a class="list-group-item list-group-item-action" id="list-messages-list" data-bs-toggle="list" href="#list-messages" role="tab" aria-controls="list-messages">
        Messages
      </a>
      <a class="list-group-item list-group-item-action" id="list-settings-list" data-bs-toggle="list" href="#list-settings" role="tab" aria-controls="list-settings">
        Settings
      </a>
    </div>
  </div>
  <div class="col-8">
    <div class="tab-content" id="nav-tabContent">
      <div class="tab-pane  show active" id="list-home" role="tabpanel" aria-labelledby="list-home-list">
        Home content
      </div>
      <div class="tab-pane " id="list-profile" role="tabpanel" aria-labelledby="list-profile-list">
        Profile content
      </div>
      <div class="tab-pane " id="list-messages" role="tabpanel" aria-labelledby="list-messages-list">
        Messages content
      </div>
      <div class="tab-pane " id="list-settings" role="tabpanel" aria-labelledby="list-settings-list">
        Settings content
      </div>
    </div>
  </div>
</div>
{{</ example >}}

