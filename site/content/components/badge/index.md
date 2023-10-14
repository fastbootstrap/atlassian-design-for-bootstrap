---
layout: docs
title: Badge
description: "Badges are used to inform merchants of the status of an object or of an action that’s been taken."
toc: true
group: data-display
menu:
  components:
---

**Bootstrap 5 Badge component**

Responsive badge built with the latest Bootstrap 5. Badge component is a visual indicator for numeric values such as tallies and scores.

Badges are usually placed before or after the label of the thing they're quantifying, such as the number of votes for an issue. 

## Badge examples

Add the `.badge` class to any text elements to make it a badge. The base Badge style does not apply a background color.

### Heading

{{< example >}}
<h1>Example heading <span class="badge bg-secondary">New</span></h1>
<h2>Example heading <span class="badge bg-secondary">New</span></h2>
<h3>Example heading <span class="badge bg-secondary">New</span></h3>
<h4>Example heading <span class="badge bg-secondary">New</span></h4>
<h5>Example heading <span class="badge bg-secondary">New</span></h5>
<h6>Example heading <span class="badge bg-secondary">New</span></h6>
{{</ example >}}

### Button with badge

Badges can be used as part of links or buttons to provide a counter.

{{< example >}}
<button type="button" class="btn btn-default">
  Notifications <span class="badge bg-secondary">4</span>
</button>
{{</ example >}}

Note that depending on how they are used, badges may be confusing for users of screen readers and similar assistive technologies. While the styling of badges provides a visual cue as to their purpose, these users will simply be presented with the content of the badge. Depending on the specific situation, these badges may seem like random additional words or numbers at the end of a sentence, link, or button.

Unless the context is clear (as with the “Notifications” example, where it is understood that the “4” is the number of notifications), consider including additional context with a visually hidden piece of additional text.


### Positioned

Use utilities to modify a `.badge` and position it in the corner of a link or button.

{{< example >}}
<button type="button" class="btn btn-primary position-relative">
  Inbox
  <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill text-bg-danger">
    99+
    <span class="visually-hidden">unread messages</span>
  </span>
</button>
{{</ example >}}

### Dot badge

You can also replace the `.badge` class with a few more utilities without a count for a more generic indicator.

{{< example >}}
<button class="btn btn-primary position-relative">
  <i class="fa-solid fa-envelope"></i>
  <span class="position-absolute top-0 start-100 translate-middle p-1 text-bg-danger border border-light rounded-circle">
    <span class="visually-hidden">New alerts</span>
  </span>
</button>
{{</ example >}}

### With avatar

{{< example >}}
<span class="avatar">
  <span class="position-absolute top-0 start-100 translate-middle p-1 bg-danger border border-light rounded-circle">
    <span class="visually-hidden">New alerts</span>
  </span>
  <img src="/images/avatar/1.jpg" />
</span>
{{</ example >}}

## Background colors

Set a background-color with contrasting foreground color with our [.text-bg-{color}]({{< docsref "background-color" >}}) helpers. Previously it was required to manually pair your choice of [.text-{color}]({{< docsref "text-color" >}}) and [.bg-{color}]({{< docsref "background-color" >}}) utilities for styling, which you still may use if you prefer.

{{< example >}}
<span class="badge text-bg-primary">Primary</span>
<span class="badge text-bg-secondary">Secondary</span>
<span class="badge text-bg-success">Success</span>
<span class="badge text-bg-danger">Danger</span>
<span class="badge text-bg-warning">Warning</span>
<span class="badge text-bg-info">Info</span>
<span class="badge text-bg-light">Light</span>
<span class="badge text-bg-dark">Dark</span>
{{</ example >}}

## Pill badges 

Use the `.rounded-pill` utility class to make badges more rounded with a larger border-radius.

{{< example >}}
<span class="badge rounded-pill text-bg-primary">Primary</span>
<span class="badge rounded-pill text-bg-secondary">Secondary</span>
<span class="badge rounded-pill text-bg-success">Success</span>
<span class="badge rounded-pill text-bg-danger">Danger</span>
<span class="badge rounded-pill text-bg-warning">Warning</span>
<span class="badge rounded-pill text-bg-info">Info</span>
<span class="badge rounded-pill text-bg-light">Light</span>
<span class="badge rounded-pill text-bg-dark">Dark</span>
{{</ example >}}