---
layout: docs
title: Badge
description: "Badge component is a visual indicator for numeric values such as tallies and scores."
toc: true
group: data-display
menu:
  components:
---

**Bootstrap 5 Badge component**

Responsive badge built with the latest Bootstrap 5. Badge component is a visual indicator for numeric values such as tallies and scores.

Badges are usually placed before or after the label of the thing they're quantifying, such as the number of votes for an issue. 

## Basic examples

Add the `.badge` class to any text elements to make it a badge. The base Badge style does not apply a background color.

{{< example >}}
<span class="badge bg-neutral-40">5</span>
<span class="badge text-bg-primary">5K</span>
<span class="badge text-bg-danger">25</span>
<span class="badge bg-red-50 text-red-500">-100</span>
<span class="badge bg-green-50 text-green-500">99+</span>
{{</ example >}}

## Button with badge

Badges can be used as part of links or buttons to provide a counter.

{{< example >}}
<button type="button" class="btn btn-primary">
  Notifications <span class="badge text-bg-danger ms-2">4</span>
</button>
{{</ example >}}

Note that depending on how they are used, badges may be confusing for users of screen readers and similar assistive technologies. While the styling of badges provides a visual cue as to their purpose, these users will simply be presented with the content of the badge. Depending on the specific situation, these badges may seem like random additional words or numbers at the end of a sentence, link, or button.

Unless the context is clear (as with the “Notifications” example, where it is understood that the “4” is the number of notifications), consider including additional context with a visually hidden piece of additional text.


## Positioned

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

## Dot badge

You can also replace the `.badge` class with a few more utilities without a count for a more generic indicator.

{{< example >}}
<button class="btn btn-primary position-relative">
  <i class="fa-solid fa-envelope"></i>
  <span class="position-absolute top-0 start-100 translate-middle p-1 text-bg-danger border border-light rounded-circle">
    <span class="visually-hidden">New alerts</span>
  </span>
</button>
{{</ example >}}

## With avatar

{{< example >}}
<span class="avatar rounded">
  <span class="position-absolute top-0 start-100 translate-middle p-1 bg-danger border border-light rounded-circle">
    <span class="visually-hidden">New alerts</span>
  </span>
  <img class="rounded" src="/images/avatar/1.jpg" />
</span>
{{</ example >}}

## Icon notifications

You can use our icons and `.position` help classes to create a facebook-like notification.

{{< example class="d-grid gap-2" >}}
<a class="position-relative" href="#">
  <i class="fa-solid fa-envelope fa-lg"></i>
  <span class="badge position-absolute translate-middle-x text-bg-danger border p-1">
    <span class="visually-hidden">New alerts</span>
  </span>
</a>
<a class="position-relative" href="#">
  <i class="fa-solid fa-envelope fa-2xl"></i>
   <span class="position-absolute translate-middle badge rounded-pill text-bg-danger">99+</span>
</a>
{{</ example >}}

## Background colors

**Since Bootstrap 5.2**, set a background-color with contrasting foreground color with our [.text-bg-{color}]({{< docsref "background-color" >}}) helpers. Previously it was required to manually pair your choice of [.text-{color}]({{< docsref "text-color" >}}) and [.bg-{color}]({{< docsref "background-color" >}}) utilities for styling, which you still may use if you prefer.

{{< example >}}
<span class="badge text-bg-primary">5</span>
<span class="badge text-bg-secondary">5K</span>
<span class="badge text-bg-danger">25</span>
<span class="badge text-bg-success">+99</span>
<span class="badge text-bg-warning">5</span>
<span class="badge text-bg-info">20</span>
<span class="badge bg-green-50 text-green-500">99+</span>
{{</ example >}}

## Related

- For non-numeric status information, use a [lozenge]({{< ref "lozenge" >}}).
- To visually label UI objects, use a [tag]({{< docsref "tag" >}}).