---
layout: docs
title: Pills
description: "Pills allows users navigate to another pages or switch to another content on the same page."
toc: true
tabs: true
group: navigation
menu:
  components:
---

{{< tabs "pills" >}}
{{< tab "Overview" >}}

**Bootstrap 5 Pills component**

Responsive pills built with the latest Bootstrap 5. Pills or called chips are button-like navigation components which can allows users navigate to another pages or switch to another content on the same page.

Documentation and examples for pills how to usage and JavaScript plugin.

## Basic pills

Use the `nav-pills` to `nav` element make its pills. 

{{< example >}}
<ul class="nav nav-pills">
  <li class="nav-item">
    <a class="nav-link active" aria-current="page" data-bs-toggle="pill" href="#">My templates</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" href="#" data-bs-toggle="pill">Featured</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" href="#" data-bs-toggle="pill">Popular</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" href="#" data-bs-toggle="pill">Design</a>
  </li>
</ul>
{{</ example >}}

See [Radio toggle buttons]({{< docsref "Radio" >}}) section.

## Tabs

Make the basic pills to generate a tabbed interface like [Tabs]({{< ref "tabs" >}}) using `data-bs-toggle="pill"`.

{{< example >}}
<ul class="nav nav-pills" role="tablist">
  <li class="nav-item">
    <a class="nav-link active" id="pill-tab-0" data-bs-toggle="pill" href="#pill-tabpanel-0" role="tab" aria-controls="pill-tabpanel-0" aria-selected="true">Tab 1</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" id="pill-tab-1" data-bs-toggle="pill" href="#pill-tabpanel-1" role="tab" aria-controls="pill-tabpanel-1" aria-selected="false">Tab 2</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" id="pill-tab-2" data-bs-toggle="pill" href="#pill-tabpanel-2" role="tab" aria-controls="pill-tabpanel-2" aria-selected="false">Tab 3</a>
  </li>
</ul>
<div class="tab-content py-3 mt-2">
  <div class="tab-pane active" id="pill-tabpanel-0" role="tabpanel" aria-labelledby="pill-tab-0">Tab 1 content</div>
  <div class="tab-pane" id="pill-tabpanel-1" role="tabpanel" aria-labelledby="pill-tab-1">Tab 2 content</div>
  <div class="tab-pane" id="pill-tabpanel-2" role="tabpanel" aria-labelledby="pill-tab-2">Tab 3 content</div>
</div>
{{</ example >}}


## Vertical

Stack your navigation by changing the flex item direction with the `.flex-column` utility. Need to stack them on some viewports but not others? Use the responsive versions (e.g., `.flex-sm-column`).

{{< example >}}
<div class="d-flex align-items-start">
  <div class="nav flex-column nav-pills me-3" id="v-pills-tab" role="tablist" aria-orientation="vertical">
    <button class="nav-link active" id="v-pills-home-tab" data-bs-toggle="pill" data-bs-target="#v-pills-home" type="button" role="tab" aria-controls="v-pills-home" aria-selected="true">Home</button>
    <button class="nav-link" id="v-pills-profile-tab" data-bs-toggle="pill" data-bs-target="#v-pills-profile" type="button" role="tab" aria-controls="v-pills-profile" aria-selected="false">Profile</button>
    <button class="nav-link" id="v-pills-messages-tab" data-bs-toggle="pill" data-bs-target="#v-pills-messages" type="button" role="tab" aria-controls="v-pills-messages" aria-selected="false">Messages</button>
  </div>
  <div class="tab-content mt-2" id="v-pills-tabContent">
    <div class="tab-pane fade show active" id="v-pills-home" role="tabpanel" aria-labelledby="v-pills-home-tab" tabindex="0">Home content</div>
    <div class="tab-pane fade" id="v-pills-profile" role="tabpanel" aria-labelledby="v-pills-profile-tab" tabindex="0">Profile content</div>
    <div class="tab-pane fade" id="v-pills-messages" role="tabpanel" aria-labelledby="v-pills-messages-tab" tabindex="0">Message content</div>
  </div>
</div>
{{</ example >}}

## Fill and justify

Force your `.nav`’s contents to extend the full available width one of two modifier classes.

### Filling width

To proportionately fill all available space with your `.nav-item`s, use `.nav-fill`. **Notice that all horizontal space is occupied, but not every nav item has the same width.**

{{< example >}}
<ul class="nav nav-pills nav-fill">
  <li class="nav-item">
    <a class="nav-link active" id="fill-tab-0" data-bs-toggle="pill" href="#fill-tabpanel-0" role="tab" aria-controls="fill-tabpanel-0" aria-selected="true">Active</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" id="fill-tab-0" data-bs-toggle="pill" href="#fill-tabpanel-1" role="tab" aria-controls="fill-tabpanel-1" aria-selected="true">Much longer nav link</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" id="fill-tab-0" data-bs-toggle="pill" href="#fill-tabpanel-2" role="tab" aria-controls="fill-tabpanel-2" aria-selected="true">Link</a>
  </li>
  <li class="nav-item">
    <a class="nav-link disabled">Disabled</a>
  </li>
</ul>
<div class="tab-content mt-3" id="tab-content">
  <div class="tab-pane active" id="fill-tabpanel-0" role="tabpanel" aria-labelledby="fill-tab-0">Item One</div>
  <div class="tab-pane" id="fill-tabpanel-1" role="tabpanel" aria-labelledby="fill-tab-1">Item Two</div>
  <div class="tab-pane" id="fill-tabpanel-2" role="tabpanel" aria-labelledby="fill-tab-2">Item Three</div>
</div>
{{</ example >}}

When using a `<nav>`-based navigation, you can safely omit `.nav-item` as only `.nav-link` is required for styling <a> elements.

{{< example >}}
<nav class="nav nav-pills nav-fill">
  <a class="nav-link active" aria-current="page" href="#">Active</a>
  <a class="nav-link" href="#">Much longer nav link</a>
  <a class="nav-link" href="#">Link</a>
  <a class="nav-link disabled">Disabled</a>
</nav>
{{</ example >}}

### Justified

For equal-width elements, use `.nav-justified`. All horizontal space will be occupied by nav links, but unlike the `.nav-fill` above, every nav item will be the same width.

{{< example >}}
<ul class="nav nav-pills nav-justified">
  <li class="nav-item">
    <a class="nav-link active" aria-current="page" href="#">Active</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" href="#">Much longer longer nav link</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" href="#">Link</a>
  </li>
  <li class="nav-item">
    <a class="nav-link disabled">Disabled</a>
  </li>
</ul>
{{</ example >}}

## Pills with dropdowns

{{< example >}}
<ul class="nav nav-pills">
  <li class="nav-item">
    <a class="nav-link" aria-current="page" href="#">Active</a>
  </li>
  <li class="nav-item dropdown">
    <a class="nav-link dropdown-toggle active" data-bs-toggle="dropdown" href="#" role="button" aria-expanded="false">Dropdown</a>
    <ul class="dropdown-menu">
      <li><a class="dropdown-item" href="#">Action</a></li>
      <li><a class="dropdown-item" href="#">Another action</a></li>
      <li><a class="dropdown-item" href="#">Something else here</a></li>
      <li><hr class="dropdown-divider"></li>
      <li><a class="dropdown-item" href="#">Separated link</a></li>
    </ul>
  </li>
  <li class="nav-item">
    <a class="nav-link" href="#">Link</a>
  </li>
</ul>
{{</ example >}}

## Icons pills

Add an icon to the pills element.

<div class="bd-example">
  <ul class="nav nav-pills">
    <li class="nav-item">
      <a class="nav-link active" href="#" data-bs-toggle="pill"><i class="fas fa-chart-pie"></i> Tab 1</a>
    </li>
    <li class="nav-item">
      <a class="nav-link" href="#" data-bs-toggle="pill"><i class="fas fa-chart-line"></i> Tab 2</a>
    </li>
    <li class="nav-item">
      <a class="nav-link" href="#" data-bs-toggle="pill">Link</a>
    </li>
  </ul>
</div>

```html
<ul class="nav nav-pills">
  <li class="nav-item">
    <a class="nav-link active" href="#"><i class="fas fa-chart-pie"></i> Tab 1</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" href="#"><i class="fas fa-chart-line"></i> Tab 2</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" href="#">Link</a>
  </li>
</ul>
```


## Accessibility

If you’re using navs to provide a navigation bar, be sure to add a `role="navigation"` to the most logical parent container of the `<ul>`, or wrap a `<nav>` element around the whole navigation. Do not add the role to the `<ul>` itself, as this would prevent it from being announced as an actual list by assistive technologies.

Note that navigation bars, even if visually styled as pills with the `.nav-pills` class, should not be given `role="tablist"``, role="tab"` or `role="tabpanel"` attributes. These are only appropriate for dynamic tabbed interfaces, as described in the [WAI ARIA Authoring Practices](https://www.w3.org/TR/wai-aria-practices/#tabpanel). The `aria-current` attribute is not necessary on dynamic tabbed interfaces since our JavaScript handles the selected state by adding `aria-selected="true"` on the active tab.

## Related

- [Tabs]({{< docsref "tabs" >}})

{{</ tab >}}

{{< tab "API" >}}
## Usage

### Using data attributes 

You can activate a pill navigation without writing any JavaScript by simply specifying `data-bs-toggle="pill"` on an element. Use these data attributes on `.nav-pills`.

```html
<ul class="nav nav-pills" id="myTab" role="tablist">
  <li class="nav-item" role="presentation">
    <button class="nav-link active" id="home-tab" data-bs-toggle="pill" data-bs-target="#home" type="button" role="tab" aria-controls="home" aria-selected="true">Home</button>
  </li>
  <li class="nav-item" role="presentation">
    <button class="nav-link" id="profile-tab" data-bs-toggle="pill" data-bs-target="#profile" type="button" role="tab" aria-controls="profile" aria-selected="false">Profile</button>
  </li>
  <li class="nav-item" role="presentation">
    <button class="nav-link" id="messages-tab" data-bs-toggle="pill" data-bs-target="#messages" type="button" role="tab" aria-controls="messages" aria-selected="false">Messages</button>
  </li>
  <li class="nav-item" role="presentation">
    <button class="nav-link" id="settings-tab" data-bs-toggle="pill" data-bs-target="#settings" type="button" role="tab" aria-controls="settings" aria-selected="false">Settings</button>
  </li>
</ul>

<div class="tab-content">
  <div class="tab-pane active" id="home" role="tabpanel" aria-labelledby="home-tab" tabindex="0">...</div>
  <div class="tab-pane" id="profile" role="tabpanel" aria-labelledby="profile-tab" tabindex="0">...</div>
  <div class="tab-pane" id="messages" role="tabpanel" aria-labelledby="messages-tab" tabindex="0">...</div>
  <div class="tab-pane" id="settings" role="tabpanel" aria-labelledby="settings-tab" tabindex="0">...</div>
</div>
```

### Via JavaScript

Enable tabbable pills via JavaScript (each tab needs to be activated individually):

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
### Fade effect

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

{{< bs-table >}}
| Method | Description |
| --- | --- |
| `constructor` | Activates a tab element and content container. |
| `getInstance` | Static method which allows you to get the tab instance associated with a DOM element, you can use it like this: `bootstrap.Tab.getInstance(element)` |
| `getOrCreateInstance` | Static method which allows you to get the tab instance associated with a DOM element, or create a new one in case it wasn’t initialized. You can use it like this: `bootstrap.Tab.getOrCreateInstance(element)` |
| `dispose` | Destroys an element’s tab. |
| `show` | Selects the given tab and shows its associated pane.  |
{{< /bs-table >}}

### constructor

Activates a tab element and content container. Tab should have either a `data-bs-target` or, if using a link, an `href` attribute, targeting a container node in the DOM.

```js
const lastTabEl = document.querySelector('#myTab li:last-child button')
const tab = new bootstrap.Tab(lastTabEl)
```

### show

Selects the given tab and shows its associated pane. Any other tab that was previously selected becomes unselected and its associated pane is hidden. **Returns to the caller before the tab pane has actually been shown** (i.e. before the `shown.bs.tab` event occurs).

```js
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