---
layout: docs
title: Hidden
seo_title: Visually Hidden
description: "Use these helpers to visually hide elements but keep them accessible to assistive technologies."
toc: true
group: layout
menu:
  docs:    
---


## Quick reference

{{< bs-table "table api-class-table" >}}
| Class | Properties |
| --- | --- |
| `.visually-hidden` | - |
| `.visually-hidden-focusable` | - |
{{< /bs-table >}}

Both `visually-hidden` and `visually-hidden-focusable` can also be used as mixins.

## Basic usage

### .visually-hidden

Use `visually-hidden` to hide an element, but while still allowing it to be exposed to assistive technologies (such as screen readers)

{{< example >}}
<h2 class="visually-hidden">Title for screen readers</h2>
{{</ example >}}

### .visually-hidden-focusable

Use `.visually-hidden-focusable` to visually hide an element by default, but to display it when it's focused (e.g. by a keyboard-only user). 

`.visually-hidden-focusable` can also be applied to a container–thanks to `:focus-within`, the container will be displayed when any child element of the container receives focus.

{{< example >}}
<a class="visually-hidden-focusable" href="#content">Skip to main content</a>
<div class="visually-hidden-focusable">A container with a <a href="#">focusable element</a>.</div>
{{< /example >}}

