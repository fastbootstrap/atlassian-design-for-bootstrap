---
layout: docs
title: Tabs
description: "Tabs organize content into multiple sections on the same page and allow users to navigate between them."
toc: true
tabs: true
group: navigation
menu:
  components:
---

{{< tabs "tabs" >}}
{{< tab "Overview" >}}

**Bootstrap 5 Tabs component**

Responsive tabs build with the latest Bootstrap 5. 

Tabs used to alternate among related views within the same context on the same page and without leaving the page.

## Basic tabs

Basic tabs includes two sections - The list of nav button and the content on tab panels.

{{< example >}}
<ul class="nav nav-tabs" role="tablist">
  <li class="nav-item" role="presentation">
    <a class="nav-link active" id="simple-tab-0" data-bs-toggle="tab" href="#simple-tabpanel-0" role="tab" aria-controls="simple-tabpanel-0" aria-selected="true">Tab 1</a>
  </li>
  <li class="nav-item" role="presentation">
    <a class="nav-link" id="simple-tab-1" data-bs-toggle="tab" href="#simple-tabpanel-1" role="tab" aria-controls="simple-tabpanel-1" aria-selected="false">Tab 2</a>
  </li>
  <li class="nav-item" role="presentation">
    <a class="nav-link" id="simple-tab-2" data-bs-toggle="tab" href="#simple-tabpanel-2" role="tab" aria-controls="simple-tabpanel-2" aria-selected="false">Tab 3</a>
  </li>
</ul>
<div class="tab-content pt-5" id="tab-content">
  <div class="tab-pane active" id="simple-tabpanel-0" role="tabpanel" aria-labelledby="simple-tab-0">Tab 1 selected</div>
  <div class="tab-pane" id="simple-tabpanel-1" role="tabpanel" aria-labelledby="simple-tab-1">Tab 2 selected</div>
  <div class="tab-pane" id="simple-tabpanel-2" role="tabpanel" aria-labelledby="simple-tab-2">Tab 3 selected</div>
</div>
{{</ example >}}

## Disabled tab

Add an `.disabled` to the `.nav-link` to disabled a table. Disabled tab have `pointer-events: none` applied to, preventing hover and active states from triggering.

{{< example >}}
<ul class="nav nav-tabs" role="tablist">
  <li class="nav-item" role="presentation">
    <a class="nav-link active" id="disabled-tab-0" data-bs-toggle="tab" href="#disabled-tabpanel-0" role="tab" aria-controls="disabled-tabpanel-0" aria-selected="true">Tab 1</a>
  </li>
  <li class="nav-item" role="presentation">
    <a class="nav-link" id="disabled-tab-1" data-bs-toggle="tab" href="#disabled-tabpanel-1" role="tab" aria-controls="disabled-tabpanel-1" aria-selected="false">Tab 2</a>
  </li>
  <li class="nav-item" role="presentation">
    <a class="nav-link disabled" id="disabled-tab-2" data-bs-toggle="tab" href="#disabled-tabpanel-2" role="tab" aria-controls="disabled-tabpanel-2" aria-selected="false">Tab 3</a>
  </li>
</ul>
<div class="tab-content pt-5" id="tab-content">
  <div class="tab-pane active" id="disabled-tabpanel-0" role="tabpanel" aria-labelledby="disabled-tab-0">Tab 1 selected</div>
  <div class="tab-pane" id="disabled-tabpanel-1" role="tabpanel" aria-labelledby="disabled-tab-1">Tab 2 selected</div>
  <div class="tab-pane" id="disabled-tabpanel-2" role="tabpanel" aria-labelledby="disabled-tab-2">Tab 3 selected</div>
</div>
{{</ example >}}

## Fixed tabs

### Full width

To proportionately fill all available space with your `.nav-items`, use `.nav-fill`. Notice that all horizontal space is occupied, but not every nav item has the same width.

{{< example >}}
<ul class="nav nav-fill nav-tabs" role="tablist">
  <li class="nav-item" role="presentation">
    <a class="nav-link active" id="fill-tab-0" data-bs-toggle="tab" href="#fill-tabpanel-0" role="tab" aria-controls="fill-tabpanel-0" aria-selected="true"> Tab 1 </a>
  </li>
  <li class="nav-item" role="presentation">
    <a class="nav-link" id="fill-tab-1" data-bs-toggle="tab" href="#fill-tabpanel-1" role="tab" aria-controls="fill-tabpanel-1" aria-selected="false"> Tab 2 </a>
  </li>
  <li class="nav-item" role="presentation">
    <a class="nav-link" id="fill-tab-2" data-bs-toggle="tab" href="#fill-tabpanel-2" role="tab" aria-controls="fill-tabpanel-2" aria-selected="false"> Tab 3 </a>
  </li>
</ul>
<div class="tab-content pt-5" id="tab-content">
  <div class="tab-pane active" id="fill-tabpanel-0" role="tabpanel" aria-labelledby="fill-tab-0">Tab 1 selected</div>
  <div class="tab-pane" id="fill-tabpanel-1" role="tabpanel" aria-labelledby="fill-tab-1">Tab Tab 2 selected</div>
  <div class="tab-pane" id="fill-tabpanel-2" role="tabpanel" aria-labelledby="fill-tab-2">Tab Tab 3 selected</div>
</div>
{{</ example >}}

For equal-width elements, use `.nav-justified`. All horizontal space will be occupied by nav links, but unlike the `.nav-fill` above, every nav item will be the same width.

{{< example >}}
<ul class="nav nav-tabs nav-justified" role="tablist">
  <li class="nav-item" role="presentation">
    <a class="nav-link active" id="justified-tab-0" data-bs-toggle="tab" href="#justified-tabpanel-0" role="tab" aria-controls="justified-tabpanel-0" aria-selected="true"> Tab 1 </a>
  </li>
  <li class="nav-item" role="presentation">
    <a class="nav-link" id="justified-tab-1" data-bs-toggle="tab" href="#justified-tabpanel-1" role="tab" aria-controls="justified-tabpanel-1" aria-selected="false"> Much longer nav link </a>
  </li>
  <li class="nav-item" role="presentation">
    <a class="nav-link" id="justified-tab-2" data-bs-toggle="tab" href="#justified-tabpanel-2" role="tab" aria-controls="justified-tabpanel-2" aria-selected="false"> Tab 3 </a>
  </li>
</ul>
<div class="tab-content pt-5" id="tab-content">
  <div class="tab-pane active" id="justified-tabpanel-0" role="tabpanel" aria-labelledby="justified-tab-0">Tab 1 selected</div>
  <div class="tab-pane" id="justified-tabpanel-1" role="tabpanel" aria-labelledby="justified-tab-1">Tab 'Much longer nav link' selected</div>
  <div class="tab-pane" id="justified-tabpanel-2" role="tabpanel" aria-labelledby="justified-tab-2">Tab 3 selected</div>
</div>
{{</ example >}}

### Centered

To make centered tabs use the `.justify-content-center` utility.

{{< example >}}
<ul class="nav nav-tabs justify-content-center" role="tablist">
  <li class="nav-item" role="presentation">
    <a class="nav-link active" data-bs-toggle="tab" href="#" role="tab"> Tab 1 </a>
  </li>
  <li class="nav-item" role="presentation">
    <a class="nav-link" data-bs-toggle="tab" href="#" role="tab"> Tab 2 </a>
  </li>
  <li class="nav-item" role="presentation">
    <a class="nav-link" data-bs-toggle="tab" href="#" role="tab"> Tab 3 </a>
  </li>
</ul>
{{</ example >}}

## Vertical tabs

<span class="lozenge new fs-sm">New Feature</span>

To make vertical tabs instead of default horizontal ones, use `.nav-tabs-vertical`. For vertical tabs, you should also add `aria-orientation="vertical"` to the tab list container.

{{< example >}}
<div class="row gx-3 gx-lg-5">
  <div class="col-3">
    <ul class="nav nav-tabs nav-tabs-vertical" role="tablist">
      <li class="nav-item" role="presentation">
        <a class="nav-link active" id="vertical-tab-0" data-bs-toggle="tab" href="#vertical-tabpanel-0" role="tab" aria-controls="vertical-tabpanel-0" aria-selected="true">Tab 1</a>
      </li>
      <li class="nav-item" role="presentation">
        <a class="nav-link" id="vertical-tab-1" data-bs-toggle="tab" href="#vertical-tabpanel-1" role="tab" aria-controls="vertical-tabpanel-1" aria-selected="false">Tab 2</a>
      </li>
      <li class="nav-item" role="presentation">
        <a class="nav-link" id="vertical-tab-2" data-bs-toggle="tab" href="#vertical-tabpanel-2" role="tab" aria-controls="vertical-tabpanel-2" aria-selected="false">Tab 3</a>
      </li>
    </ul>
  </div>
  <div class="col-9">
    <div class="tab-content" id="tab-content" aria-orientation="vertical">
      <div class="tab-pane active" id="vertical-tabpanel-0" role="tabpanel" aria-labelledby="vertical-tab-0">Content of Tab 1</div>
      <div class="tab-pane" id="vertical-tabpanel-1" role="tabpanel" aria-labelledby="vertical-tab-1">Content of Tab 2</div>
      <div class="tab-pane" id="vertical-tabpanel-2" role="tabpanel" aria-labelledby="vertical-tab-2">Content of Tab 3</div>
    </div>
  </div>
</div>
{{</ example >}}

## Icon tabs

Tab labels may be either all icons or all text.

{{< example >}}
<ul class="nav nav-tabs" role="tablist">
  <li class="nav-item" role="presentation">
    <a class="nav-link active" id="icon-tab-0" data-bs-toggle="tab" href="#icon-tabpanel-0" role="tab" aria-controls="icon-tabpanel-0" aria-selected="true"><i class="fa-solid fa-plane-up"></i> Flights</a>
  </li>
  <li class="nav-item" role="presentation">
    <a class="nav-link" id="icon-tab-1" data-bs-toggle="tab" href="#icon-tabpanel-1" role="tab" aria-controls="icon-tabpanel-1" aria-selected="false"><i class="fa-solid fa-suitcase"></i> Trips</a>
  </li>
  <li class="nav-item" role="presentation">
    <a class="nav-link" id="icon-tab-2" data-bs-toggle="tab" href="#icon-tabpanel-2" role="tab" aria-controls="icon-tabpanel-2" aria-selected="false"><i class="fa-solid fa-star"></i> Favorites</a>
  </li>
</ul>
<div class="tab-content pt-5" id="tab-content">
  <div class="tab-pane active" id="icon-tabpanel-0" role="tabpanel" aria-labelledby="icon-tab-0">Content of Tab 1</div>
  <div class="tab-pane" id="icon-tabpanel-1" role="tabpanel" aria-labelledby="icon-tab-1">Content of Tab 2</div>
  <div class="tab-pane" id="icon-tabpanel-2" role="tabpanel" aria-labelledby="icon-tab-2">Content of Tab 3</div>
</div>
{{</ example >}}


## Tabs with dropdowns

Add [dropdown menus]({{< ref "dropdown" >}}) into the `.nav-link`.

{{< example >}}
<ul class="nav nav-tabs" role="tablist">
  <li class="nav-item" role="presentation">
    <a class="nav-link active" data-bs-toggle="tab" href="#" role="tab"> Tab 1 </a>
  </li>
  <li class="nav-item" role="presentation">
    <a class="nav-link" data-bs-toggle="tab" href="#" role="tab"> Tab 2 </a>
  </li>
  <li class="nav-item" role="presentation">
    <a class="nav-link" data-bs-toggle="dropdown" href="#" role="button" aria-expanded="false">
      <span class="dropdown-toggle"> Dropdown </span>
    </a>
    <ul class="dropdown-menu">
      <li><a class="dropdown-item" href="#">Action</a></li>
      <li><a class="dropdown-item" href="#">Another action</a></li>
      <li><a class="dropdown-item" href="#">Something else here</a></li>
      <li><hr class="dropdown-divider" /></li>
      <li><a class="dropdown-item" href="#">Separated link</a></li>
    </ul>
  </li>
</ul>
{{</ example >}}

## Accessibility

(WAI-ARIA: https://www.w3.org/WAI/ARIA/apg/patterns/tabpanel/)

Dynamic tabbed interfaces, as described in the [ARIA Authoring Practices Guide tabs pattern](https://www.w3.org/WAI/ARIA/apg/patterns/tabpanel/), require `role="tablist"`, `role="tab"`, `role="tabpanel"`, and additional `aria-` attributes in order to convey their structure, functionality, and current state to users of assistive technologies (such as screen readers). As a best practice, we recommend using `<button>` elements for the tabs, as these are controls that trigger a dynamic change, rather than links that navigate to a new page or location.

In line with the ARIA Authoring Practices pattern, only the currently active tab receives keyboard focus. When the JavaScript plugin is initialized, it will set `tabindex="-1"` on all inactive tab controls. Once the currently active tab has focus, the cursor keys activate the previous/next tab, with the plugin changing the [roving `tabindex`](https://www.w3.org/WAI/ARIA/apg/practices/keyboard-interface/) accordingly. However, note that the JavaScript plugin does not distinguish between horizontal and vertical tab lists when it comes to cursor key interactions: regardless of the tab list's orientation, both the up *and* left cursor go to the previous tab, and down *and* right cursor go to the next tab.

{{< callout warning >}}
In general, to facilitate keyboard navigation, it's recommended to make the tab panels themselves focusable as well, unless the first element containing meaningful content inside the tab panel is already focusable. The JavaScript plugin does not try to handle this aspect—where appropriate, you'll need to explicitly make your tab panels focusable by adding `tabindex="0"` in your markup.
{{< /callout >}}

{{< callout danger >}}
The tab JavaScript plugin **does not** support tabbed interfaces that contain dropdown menus, as these cause both usability and accessibility issues. From a usability perspective, the fact that the currently displayed tab's trigger element is not immediately visible (as it's inside the closed dropdown menu) can cause confusion. From an accessibility point of view, there is currently no sensible way to map this sort of construct to a standard WAI ARIA pattern, meaning that it cannot be easily made understandable to users of assistive technologies.
{{< /callout >}}

{{</ tab >}}

{{< tab "API" >}}

## Usage

### Using data attributes 

You can activate a tab navigation without writing any JavaScript by simply specifying `data-bs-toggle="tab"` on an element. Use these data attributes on `.nav-tabs`.

```html
<!-- Nav tabs -->
<ul class="nav nav-tabs" id="myTab" role="tablist">
  <li class="nav-item" role="presentation">
    <button class="nav-link active" id="home-tab" data-bs-toggle="tab" data-bs-target="#home" type="button" role="tab" aria-controls="home" aria-selected="true">Home</button>
  </li>
  <li class="nav-item" role="presentation">
    <button class="nav-link" id="profile-tab" data-bs-toggle="tab" data-bs-target="#profile" type="button" role="tab" aria-controls="profile" aria-selected="false">Profile</button>
  </li>
  <li class="nav-item" role="presentation">
    <button class="nav-link" id="messages-tab" data-bs-toggle="tab" data-bs-target="#messages" type="button" role="tab" aria-controls="messages" aria-selected="false">Messages</button>
  </li>
  <li class="nav-item" role="presentation">
    <button class="nav-link" id="settings-tab" data-bs-toggle="tab" data-bs-target="#settings" type="button" role="tab" aria-controls="settings" aria-selected="false">Settings</button>
  </li>
</ul>

<!-- Tab panes -->
<div class="tab-content">
  <div class="tab-pane active" id="home" role="tabpanel" aria-labelledby="home-tab" tabindex="0">...</div>
  <div class="tab-pane" id="profile" role="tabpanel" aria-labelledby="profile-tab" tabindex="0">...</div>
  <div class="tab-pane" id="messages" role="tabpanel" aria-labelledby="messages-tab" tabindex="0">...</div>
  <div class="tab-pane" id="settings" role="tabpanel" aria-labelledby="settings-tab" tabindex="0">...</div>
</div>
```

### Via JavaScript

Enable tabbable tabs via JavaScript (each tab needs to be activated individually):

```js
const triggerTabList = document.querySelectorAll('#myTab button')
triggerTabList.forEach(triggerEl => {
  const tabTrigger = new bootstrap.Tab(triggerEl)

  triggerEl.addEventListener('click', event => {
    event.preventDefault()
    tabTrigger.show()
  })
})
```

You can activate individual tabs in several ways:

```js
const triggerEl = document.querySelector('#myTab button[data-bs-target="#profile"]')
bootstrap.Tab.getInstance(triggerEl).show() // Select tab by name

const triggerFirstTabEl = document.querySelector('#myTab li:first-child button')
bootstrap.Tab.getInstance(triggerFirstTabEl).show() // Select first tab
```

## Fade effect

To make tabs fade in, add `.fade` to each `.tab-pane`. The first tab pane must also have `.show` to make the initial content visible.

```html
<div class="tab-content">
  <div class="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab" tabindex="0">...</div>
  <div class="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab" tabindex="0">...</div>
  <div class="tab-pane fade" id="messages" role="tabpanel" aria-labelledby="messages-tab" tabindex="0">...</div>
  <div class="tab-pane fade" id="settings" role="tabpanel" aria-labelledby="settings-tab" tabindex="0">...</div>
</div>
```

## Methods

{{< callout danger >}}
{{< partial "callout-danger-async-methods.md" >}}
{{< /callout >}}

### constructor

Activates a tab element and content container. Tab should have either a `data-bs-target` or, if using a link, an `href` attribute, targeting a container node in the DOM.

```html
<ul class="nav nav-tabs" id="myTab" role="tablist">
  <li class="nav-item" role="presentation">
    <button class="nav-link active" id="home-tab" data-bs-toggle="tab" data-bs-target="#home" type="button" role="tab" aria-controls="home" aria-selected="true">Home</button>
  </li>
  <li class="nav-item" role="presentation">
    <button class="nav-link" id="profile-tab" data-bs-toggle="tab" data-bs-target="#profile" type="button" role="tab" aria-controls="profile" aria-selected="false">Profile</button>
  </li>
  <li class="nav-item" role="presentation">
    <button class="nav-link" id="messages-tab" data-bs-toggle="tab" data-bs-target="#messages" type="button" role="tab" aria-controls="messages" aria-selected="false">Messages</button>
  </li>
  <li class="nav-item" role="presentation">
    <button class="nav-link" id="settings-tab" data-bs-toggle="tab" data-bs-target="#settings" type="button" role="tab" aria-controls="settings" aria-selected="false">Settings</button>
  </li>
</ul>

<div class="tab-content">
  <div class="tab-pane active" id="home" role="tabpanel" aria-labelledby="home-tab" tabindex="0">...</div>
  <div class="tab-pane" id="profile" role="tabpanel" aria-labelledby="profile-tab" tabindex="0">...</div>
  <div class="tab-pane" id="messages" role="tabpanel" aria-labelledby="messages-tab" tabindex="0">...</div>
  <div class="tab-pane" id="settings" role="tabpanel" aria-labelledby="settings-tab" tabindex="0">...</div>
</div>

<script>
  const firstTabEl = document.querySelector('#myTab li:last-child button')
  const firstTab = new bootstrap.Tab(firstTabEl)

  firstTab.show()
</script>
```

### show

Selects the given tab and shows its associated pane. Any other tab that was previously selected becomes unselected and its associated pane is hidden. **Returns to the caller before the tab pane has actually been shown** (i.e. before the `shown.bs.tab` event occurs).

```js
const someTabTriggerEl = document.querySelector('#someTabTrigger')
const tab = new bootstrap.Tab(someTabTriggerEl)

tab.show()
```

### dispose

Destroys an element's tab.

### getInstance

*Static* method which allows you to get the tab instance associated with a DOM element

```js
const tab = bootstrap.Tab.getInstance('#trigger') // Returns a Bootstrap tab instance
```

### getOrCreateInstance

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

If no tab was already active, then the `hide.bs.tab` and `hidden.bs.tab` events will not be fired.

{{< bs-table >}}
| Event type | Description |
| --- | --- |
| `hide.bs.tab` | This event fires when a new tab is to be shown (and thus the previous active tab is to be hidden). Use `event.target` and `event.relatedTarget` to target the current active tab and the new soon-to-be-active tab, respectively. |
| `hidden.bs.tab` | This event fires after a new tab is shown (and thus the previous active tab is hidden). Use `event.target` and `event.relatedTarget` to target the previous active tab and the new active tab, respectively. |
| `show.bs.tab` | This event fires on tab show, but before the new tab has been shown. Use `event.target` and `event.relatedTarget` to target the active tab and the previous active tab (if available) respectively. |
| `shown.bs.tab` | This event fires on tab show after a tab has been shown. Use `event.target` and `event.relatedTarget` to target the active tab and the previous active tab (if available) respectively. |
{{< /bs-table >}}

```js
const tabEl = document.querySelector('button[data-bs-toggle="tab"]')
tabEl.addEventListener('shown.bs.tab', event => {
  event.target // newly activated tab
  event.relatedTarget // previous active tab
})
```

{{</ tab >}}
{{</ tabs >}}