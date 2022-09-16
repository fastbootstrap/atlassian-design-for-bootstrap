---
layout: docs
title: Tag
description: "Tags allow users to label, categorize or organize content to describe them."
toc: true
group: data-display
status: new
tabs: true
menu:
  components:
---

{{< tabs "tag" >}}
{{< tab "Overview" >}}

**Bootstrap 5 Tags component**

Documents and examples for Tags used how to removed it by JavaScript plugin.

## Basic Tag

Tag component can used for any text element(etc. `<span>`) or `<a>` element.

{{< example >}}
<div class="hstack gap-2">
  <span class="tag">
    <span class="tag-text">Base Tag</span>
  </span>
  <span class="tag">
    <span class="tag-text">Croissant topping tiramisu gummi bears. Bonbon chocolate bar danish soufflé</span>
  </span>
  <span class="tag">
    <a class="tag-text" href="#">Linked tag</a>
  </span>
  <span class="tag">
    <a class="tag-text" href="#">Croissant topping tiramisu gummi bears. Bonbon chocolate bar danish soufflé</a>
  </span>
  <span class="tag bg-purple-50">
    <a class="tag-text" href="#">Colored tag</a>
  </span>
</div>
{{</ example >}}

## Removable Tag

Add a [close button]({{< docsref "close-button" >}}) with `[data-bs-dismiss="tag"]` and the `.tag-removable` class, which modify the tag alignment.

{{< example >}}
<div class="hstack gap-2">
  <span class="tag tag-removable">    
    <span class="tag-text">Rustic</span>
    <button class="btn-close btn-close-sm" data-bs-dismiss="tag" aria-label="close tag"></button>
  </span>
  <span class="tag tag-removable">
    <span class="tag-text">Antique</span>
    <button class="btn-close btn-close-sm" data-bs-dismiss="tag" aria-label="close tag"></button>
  </span>
  <span class="tag tag-removable">
    <span class="tag-text">Vinyl</span>
    <button class="btn-close btn-close-sm" data-bs-dismiss="tag" aria-label="close tag"></button>
  </span>
  <span class="tag tag-removable">
    <span class="tag-text">Refurbished</span>
    <button class="btn-close btn-close-sm" data-bs-dismiss="tag" aria-label="close tag"></button>
  </span>
</div>
{{</ example >}}

### Animated

Use the `.fade` and `.show` utlities to add a fade out animate when you removing a tag.

{{< example >}}
<div class="hstack gap-2">
  <span class="tag tag-removable fade show">    
    <span class="tag-text">Rustic</span>
    <button class="btn-close btn-close-sm" data-bs-dismiss="tag" aria-label="close tag"></button>
  </span>
  <span class="tag tag-removable fade show">
    <span class="tag-text">Antique</span>
    <button class="btn-close btn-close-sm" data-bs-dismiss="tag" aria-label="close tag"></button>
  </span>
  <span class="tag tag-removable fade show">
    <span class="tag-text">Vinyl</span>
    <button class="btn-close btn-close-sm" data-bs-dismiss="tag" aria-label="close tag"></button>
  </span>
  <span class="tag tag-removable fade show">
    <span class="tag-text">Refurbished</span>
    <button class="btn-close btn-close-sm" data-bs-dismiss="tag" aria-label="close tag"></button>
  </span>
</div>
{{</ example >}}

## Avatar Tag

Use the [avatar component]({{< docsref "avatar" >}}) and [margin]({{< docsref "margin" >}}) utilities. Check out [avatar]({{< docsref "avatar" >}}) for how to usage.

{{< example >}}
<div class="hstack gap-2">
  <span class="tag rounded-pill">
    <div class="d-inline-flex me-1"><span class="avatar avatar-xs text-bg-primary">N</span></div>
    <a class="tag-text" href="#">A. Cool Name</a>    
  </span>
  <span class="tag rounded-pill">
    <div class="d-inline-flex me-1"><img class="avatar avatar-xs" src="/images/avatar/1.jpg" /></div>
    <span class="tag-text">Avatar</span>
  </span>
  <span class="tag tag-removable rounded-pill bg-blue-50">
    <div class="d-inline-flex ms-n1 me-1"><img class="avatar avatar-sm" src="/images/avatar/1.jpg" /></div>
    <span class="tag-text">Avatar sm</span>
    <button class="btn-close btn-close-sm" data-bs-dismiss="tag" aria-label="close tag"></button>
  </span>
</div>
{{</ example >}}

## Colors

You can use the [background color]({{< docsref "background-color" >}}) and [text color]({{< docsref "text-color" >}}) to change the tag styles.

{{< example >}}
<div class="hstack gap-2">
  <span class="tag">
    <span class="tag-text">standard Tag</span>
  </span>
  <span class="tag bg-blue-400 text-white">
    <span class="tag-text">blue Tag</span>
  </span>
  <span class="tag bg-green-100">
    <span class="tag-text">green Tag</span>
  </span>
  <span class="tag bg-yellow-400">
    <span class="tag-text">yellow Tag</span>
  </span>
  <span class="tag bg-purple-50">
    <span class="tag-text">purple Tag</span>
  </span>
</div>
{{< / example >}}

## Related

- For status information, use a [lozenge]({{< docsref "lozenge" >}}).
- For tallies or counts, use a [badge]({{< docsref "badge" >}}).

{{</ tab >}}
{{< tab "API">}}

## Methods

You can create a tag instance with the tag constructor, for example:

```js
const myTag = new bootstrap.Tag('#myTag')
```

{{< bs-table >}}
| Method | Description |
| --- | --- |
| `close` | Closes an tag by removing it from the DOM. If the `.fade` and `.show` classes are present on the element, the tag will fade out before it is removed. |
| `dispose` | Destroys an element's tag. (Removes stored data on the DOM element) |
| `getInstance` | Static method which allows you to get the tag instance associated to a DOM element. For example: `bootstrap.Tag.getInstance(tag)`. |
| `getOrCreateInstance` | Static method which returns an tag instance associated to a DOM element or create a new one in case it wasn't initialized. You can use it like this: `bootstrap.Tag.getOrCreateInstance(element)`. |
{{< /bs-table >}}

Basic usage:

```js
const myTag = bootstrap.Tag.getOrCreateInstance('#myTag')
myTag.close()
```

## Event

FastBootstrap's tag plugin exposes a few events for hooking into tag functionality.

{{< bs-table >}}
| Event | Description |
| --- | --- |
| `close.fbs.tag` | Fires immediately when the `close` instance method is called. |
| `closed.fbs.tag` | Fired when the tag has been closed and CSS transitions have completed. |
{{< /bs-table >}}

```js
const myTag = document.getElementById('myTag')
myTag.addEventListener('closed.fbs.tag', event => {
  // do something, for instance, explicitly move focus to the most appropriate element,
  // so it doesn't get lost/reset to the start of the page
  // document.getElementById('...').focus()
})
```

{{</ tab >}}
{{</ tabs >}}