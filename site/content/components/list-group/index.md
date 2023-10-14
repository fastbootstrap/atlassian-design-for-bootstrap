---
layout: docs
title: List Group
description: "List gorup used for displays a continuous group of text or images."
toc: true
tabs: true
group: surfaces
menu:
  components:
---

{{< tabs "list-group" >}}
{{< tab "Overview" >}}

**Bootstrap 5 List group component**

Responsive List group built with the latest Bootstrap 5. List gorup component used for displays a continuous group of text or images.

List groups are a flexible and powerful component for displaying a series of content. Modify and extend them to support just about any content within.

## Basic example

The most basic list group is an unordered list with list items and the proper classes. Build upon it with the options that follow, or with your own CSS as needed.

{{< example class="bd-example-list-group d-flex justify-content-center" >}}
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

{{< example class="bd-example-list-group d-flex justify-content-center" >}}
<ul class="list-group">
  <li class="list-group-item list-group-item-action"><i class="fa-solid fa-inbox fa-lg me-3"></i> Inbox</li>
  <li class="list-group-item list-group-item-action active"><i class="fa-solid fa-envelope-open fa-lg me-3"></i> Draft</li>
  <hr/>
  <li class="list-group-item list-group-item-action">Trash</li>
  <li class="list-group-item list-group-item-action">Spam</li>
</ul>
{{</ example >}}

## Disabled items 

Add `.disabled` to a `.list-group-item` to make it appear disabled. Note that some elements with `.disabled` will also require custom JavaScript to fully disable their click events (e.g., links).

{{< example class="bd-example-list-group d-flex justify-content-center" >}}
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

Be sure to **not use the standard `.btn` classes here**.

### Links 

{{< example class="bd-example-list-group d-flex justify-content-center" >}}
<div class="list-group">
  <a class="list-group-item list-group-item-action" href="#">
    <i class="fa-solid fa-inbox fa-lg me-3"></i> Inbox
  </a>
  <a class="list-group-item list-group-item-action active" href="#">
    <i class="fa-solid fa-envelope-open fa-lg me-3"></i> Draft
  </a>
  <a class="list-group-item list-group-item-action" href="#">Trash</a>
  <a class="list-group-item list-group-item-action disabled" href="#">Disabled Spam</a>
</div>
{{</ example >}}

### Buttons

With `<button>`s, you can also make use of the disabled attribute instead of the `.disabled` class. Sadly, `<a>`s don’t support the disabled attribute.

{{< example class="bd-example-list-group d-flex justify-content-center" >}}
<div class="list-group">
  <button class="list-group-item list-group-item-action" type="button">
    <i class="fa-solid fa-inbox fa-lg me-3"></i> Inbox
  </button>
  <button class="list-group-item list-group-item-action active" type="button">
    <i class="fa-solid fa-envelope-open fa-lg me-3"></i> Draft
  </button>
  <button class="list-group-item list-group-item-action" type="button">Trash</button>
  <button class="list-group-item list-group-item-action" type="button" disabled>Disabled Spam</button>
</div>
{{</ example >}}

## Flush

Add `.list-group-flush` to add a border to render list group items edge-to-edge in a parent container (e.g., cards).

{{< example class="bd-example-list-group d-flex justify-content-center" >}}
<ul class="list-group list-group-flush border">
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

{{< example class="bd-example-list-group d-flex justify-content-center" >}}
<ol class="list-group list-group-numbered">
  <li class="list-group-item ">Single-line item</li>
  <li class="list-group-item">Single-line item</li>
  <li class="list-group-item">Single-line item</li>
</ol>
{{</ example >}}

These work great with custom content as well.

{{< example class="bd-example-list-group d-flex justify-content-center" >}}
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

Add `.list-group-horizontal` to change the layout of list group items from vertical to horizontal across all breakpoints. Alternatively, choose a responsive variant `.list-group-horizontal-{sm|md|lg|xl|xxl}` to make a list group horizontal starting at that breakpoint’s `min-width`. **Currently horizontal list groups cannot be combined with flush list groups.**

{{< callout >}}
ProTip: Want equal-width list group items when horizontal? Add `.flex-fill` to each list group item.
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

{{< example class="bd-example-list-group d-flex justify-content-center" >}}
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

{{< example class="bd-example-list-group d-flex justify-content-center" >}}
<ul class="list-group">
  <li class="list-group-item d-flex justify-content-between align-items-center">
    A list item
    <span class="badge bg-primary rounded-pill">14</span>
  </li>
  <li class="list-group-item d-flex justify-content-between align-items-center">
    A second list item
    <span class="badge bg-primary rounded-pill">2</span>
  </li>
  <li class="list-group-item d-flex justify-content-between align-items-center">
    A third list item
    <span class="badge bg-primary rounded-pill">1</span>
  </li>
</ul>
{{</ example >}}

## Custom content 

Add nearly any HTML within, even for linked list groups like the one below, with the help of flexbox utilities.

{{< example class="bd-example-list-group d-flex justify-content-center" >}}
<ul class="list-group">
  <li class="list-group-item d-flex justify-content-between align-items-center">
    <div class="d-flex align-items-center">
      <img class="avatar avatar-lg" src="/images/avatar/1.jpg" alt="" />
      <div class="ms-3">
        <p class="fw-bold mb-0">John Doe</p>
        <p class="text-muted mb-0 fs-sm">john.doe@gmail.com</p>
      </div>
    </div>
    <span class="badge text-bg-success">Active</span>
  </li>
  <li class="list-group-item d-flex justify-content-between align-items-center">
    <div class="d-flex align-items-center">
      <img class="avatar avatar-lg" src="/images/avatar/2.jpg" alt="" />
      <div class="ms-3">
        <p class="fw-bold mb-0">Alex Ray</p>
        <p class="text-muted mb-0 fs-sm">alex.ray@gmail.com</p>
      </div>
    </div>
    <span class="badge text-bg-danger">Removed</span>
  </li>
  <li class="list-group-item d-flex justify-content-between align-items-center">
    <div class="d-flex align-items-center">
      <img class="avatar avatar-lg" src="/images/avatar/3.jpg" alt="" />
      <div class="ms-3">
        <p class="fw-bold mb-0">Kate Hunington</p>
        <p class="text-muted mb-0 fs-sm">kate.hunington@gmail.com</p>
      </div>
    </div>
    <span class="badge text-bg-warning">Awaiting</span>
  </li>
</ul>
{{</ example >}}

## Checkboxes and radios

Place [checkboxes]({{< ref "checkbox" >}}) and [radios]({{< ref "radio" >}}) within list group items and customize as needed. You can use them without `<label>`s, but please remember to include an `aria-label` attribute and value for accessibility.

{{< example class="bd-example-list-group d-flex justify-content-center" >}}
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

{{< example class="bd-example-list-group d-flex justify-content-center" >}}
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

{{</ tab >}}
{{< tab "API" >}}

## Usage


Use the [tab plugin]({{< ref "tabs" >}}) to extend our list group to create tabbable panes of local content. Check out [tabs compoment]({{< ref "tabs" >}}) for more information.

<div class="bd-example" role="tabpanel">
  <div class="row">
    <div class="col-4">
      <div class="list-group border-0" id="list-tab" role="tablist">
        <a class="list-group-item list-group-item-action active" id="list-home-list" data-bs-toggle="tab" href="#list-home" role="tab" aria-controls="list-home">Home</a>
        <a class="list-group-item list-group-item-action" id="list-profile-list" data-bs-toggle="tab" href="#list-profile" role="tab" aria-controls="list-profile">Profile</a>
        <a class="list-group-item list-group-item-action" id="list-messages-list" data-bs-toggle="tab" href="#list-messages" role="tab" aria-controls="list-messages">Messages</a>
        <a class="list-group-item list-group-item-action" id="list-settings-list" data-bs-toggle="tab" href="#list-settings" role="tab" aria-controls="list-settings">Settings</a>
      </div>
    </div>
    <div class="col-8">
      <div class="tab-content" id="nav-tabContent">
        <div class="tab-pane fade show active" id="list-home" role="tabpanel" aria-labelledby="list-home-list">
          <p>Some placeholder content in a paragraph relating to "Home". And some more content, used here just to pad out and fill this tab panel. In production, you would obviously have more real content here. And not just text. It could be anything, really. Text, images, forms.</p>
        </div>
        <div class="tab-pane fade" id="list-profile" role="tabpanel" aria-labelledby="list-profile-list">
          <p>Some placeholder content in a paragraph relating to "Profile". And some more content, used here just to pad out and fill this tab panel. In production, you would obviously have more real content here. And not just text. It could be anything, really. Text, images, forms.</p>
        </div>
        <div class="tab-pane fade" id="list-messages" role="tabpanel" aria-labelledby="list-messages-list">
          <p>Some placeholder content in a paragraph relating to "Messages". And some more content, used here just to pad out and fill this tab panel. In production, you would obviously have more real content here. And not just text. It could be anything, really. Text, images, forms.</p>
        </div>
        <div class="tab-pane fade" id="list-settings" role="tabpanel" aria-labelledby="list-settings-list">
          <p>Some placeholder content in a paragraph relating to "Settings". And some more content, used here just to pad out and fill this tab panel. In production, you would obviously have more real content here. And not just text. It could be anything, really. Text, images, forms.</p>
        </div>
      </div>
    </div>
  </div>
</div>

```html
<div class="row">
  <div class="col-4">
    <div class="list-group" id="list-tab" role="tablist">
      <a class="list-group-item list-group-item-action active" id="list-home-list" data-bs-toggle="list" href="#list-home" role="tab" aria-controls="list-home">Home</a>
      <a class="list-group-item list-group-item-action" id="list-profile-list" data-bs-toggle="list" href="#list-profile" role="tab" aria-controls="list-profile">Profile</a>
      <a class="list-group-item list-group-item-action" id="list-messages-list" data-bs-toggle="list" href="#list-messages" role="tab" aria-controls="list-messages">Messages</a>
      <a class="list-group-item list-group-item-action" id="list-settings-list" data-bs-toggle="list" href="#list-settings" role="tab" aria-controls="list-settings">Settings</a>
    </div>
  </div>
  <div class="col-8">
    <div class="tab-content" id="nav-tabContent">
      <div class="tab-pane fade show active" id="list-home" role="tabpanel" aria-labelledby="list-home-list">...</div>
      <div class="tab-pane fade" id="list-profile" role="tabpanel" aria-labelledby="list-profile-list">...</div>
      <div class="tab-pane fade" id="list-messages" role="tabpanel" aria-labelledby="list-messages-list">...</div>
      <div class="tab-pane fade" id="list-settings" role="tabpanel" aria-labelledby="list-settings-list">...</div>
    </div>
  </div>
</div>
```

### Using data attributes

You can activate a list group navigation without writing any JavaScript by simply specifying `data-bs-toggle="list"` or on an element. Use these data attributes on `.list-group-item`.

```html
<div role="tabpanel">
  <!-- List group -->
  <div class="list-group" id="myList" role="tablist">
    <a class="list-group-item list-group-item-action active" data-bs-toggle="list" href="#home" role="tab">Home</a>
    <a class="list-group-item list-group-item-action" data-bs-toggle="list" href="#profile" role="tab">Profile</a>
    <a class="list-group-item list-group-item-action" data-bs-toggle="list" href="#messages" role="tab">Messages</a>
    <a class="list-group-item list-group-item-action" data-bs-toggle="list" href="#settings" role="tab">Settings</a>
  </div>

  <!-- Tab panes -->
  <div class="tab-content">
    <div class="tab-pane active" id="home" role="tabpanel">...</div>
    <div class="tab-pane" id="profile" role="tabpanel">...</div>
    <div class="tab-pane" id="messages" role="tabpanel">...</div>
    <div class="tab-pane" id="settings" role="tabpanel">...</div>
  </div>
</div>
```

### Via JavaScript

Enable tabbable list item via JavaScript (each list item needs to be activated individually):

```js
const triggerTabList = document.querySelectorAll('#myTab a')
triggerTabList.forEach(triggerEl => {
  const tabTrigger = new bootstrap.Tab(triggerEl)

  triggerEl.addEventListener('click', event => {
    event.preventDefault()
    tabTrigger.show()
  })
})
```

You can activate individual list item in several ways:

```js
const triggerEl = document.querySelector('#myTab a[href="#profile"]')
bootstrap.Tab.getInstance(triggerEl).show() // Select tab by name

const triggerFirstTabEl = document.querySelector('#myTab li:first-child a')
bootstrap.Tab.getInstance(triggerFirstTabEl).show() // Select first tab
```

### Fade effect

To make tabs panel fade in, add `.fade` to each `.tab-pane`. The first tab pane must also have `.show` to make the initial content visible.

```html
<div class="tab-content">
  <div class="tab-pane fade show active" id="home" role="tabpanel">...</div>
  <div class="tab-pane fade" id="profile" role="tabpanel">...</div>
  <div class="tab-pane fade" id="messages" role="tabpanel">...</div>
  <div class="tab-pane fade" id="settings" role="tabpanel">...</div>
</div>
```


## Methods

#### constructor

Activates a list item element and content container. Tab should have either a `data-bs-target` or an `href` targeting a container node in the DOM.

```html
<div class="list-group" id="myList" role="tablist">
  <a class="list-group-item list-group-item-action active" data-bs-toggle="list" href="#home" role="tab">Home</a>
  <a class="list-group-item list-group-item-action" data-bs-toggle="list" href="#profile" role="tab">Profile</a>
  <a class="list-group-item list-group-item-action" data-bs-toggle="list" href="#messages" role="tab">Messages</a>
  <a class="list-group-item list-group-item-action" data-bs-toggle="list" href="#settings" role="tab">Settings</a>
</div>

<div class="tab-content">
  <div class="tab-pane active" id="home" role="tabpanel">...</div>
  <div class="tab-pane" id="profile" role="tabpanel">...</div>
  <div class="tab-pane" id="messages" role="tabpanel">...</div>
  <div class="tab-pane" id="settings" role="tabpanel">...</div>
</div>

<script>
  const firstTabEl = document.querySelector('#myTab a:last-child')
  const firstTab = new bootstrap.Tab(firstTabEl)

  firstTab.show()
</script>
```

#### show

Selects the given list item and shows its associated pane. Any other list item that was previously selected becomes unselected and its associated pane is hidden. **Returns to the caller before the tab pane has actually been shown** (for example, before the `shown.bs.tab` event occurs).

```js
const tab = new bootstrap.Tab('#someListItem')

tab.show()
```

#### dispose

Destroys an element's tab.

#### getInstance

*Static* method which allows you to get the tab instance associated with a DOM element

```js
const tab = bootstrap.Tab.getInstance('#trigger') // Returns a Bootstrap tab instance
```

#### getOrCreateInstance

*Static* method which allows you to get the tab instance associated with a DOM element, or create a new one in case it wasn't initialized

```js
const tab = bootstrap.Tab.getOrCreateInstance('#trigger') // Returns a Bootstrap tab instance
```

## Events

When showing a new tab, the events fire in the following order:

1. `hide.bs.tab` (on the current active tab)
2. `show.bs.tab` (on the to-be-shown tab)
3. `hidden.bs.tab` (on the previous active tab, the same one as for the `hide.bs.tab` event)
4. `shown.bs.tab` (on the newly-active just-shown tab, the same one as for the `show.bs.tab` event)

If no tab was already active, the `hide.bs.tab` and `hidden.bs.tab` events will not be fired.

{{< bs-table >}}
| Event type | Description |
| --- | --- |
| `hide.bs.tab` | This event fires when a new tab is to be shown (and thus the previous active tab is to be hidden). Use `event.target` and `event.relatedTarget` to target the current active tab and the new soon-to-be-active tab, respectively. |
| `hidden.bs.tab` | This event fires after a new tab is shown (and thus the previous active tab is hidden). Use `event.target` and `event.relatedTarget` to target the previous active tab and the new active tab, respectively. |
| `show.bs.tab` | This event fires on tab show, but before the new tab has been shown. Use `event.target` and `event.relatedTarget` to target the active tab and the previous active tab (if available) respectively. |
| `shown.bs.tab` | This event fires on tab show after a tab has been shown. Use `event.target` and `event.relatedTarget` to target the active tab and the previous active tab (if available) respectively. |
{{< /bs-table >}}

```js
const tabElms = document.querySelectorAll('a[data-bs-toggle="list"]')
tabElms.forEach(tabElm => {
  tabElm.addEventListener('shown.bs.tab', event => {
    event.target // newly activated tab
    event.relatedTarget // previous active tab
  })
})
```

{{</ tab >}}
{{</ tabs >}}