---
layout: docs
title: User Select
description: "Utilities for controlling whether the user can select text in an element."
toc: true
group: interactivity
menu:
  docs:
---

Change the way in which the content is selected when the user interacts with it.

## Quick reference

{{< class-api "user-select" >}}

## Basic usage

### Disabling text selection

Use `user-select-none` to prevent selecting text in an element and its children.

{{< example class="bg-neutral-subtler bg-grid-slate-100 text-center" >}}
<div class="user-select-none fw-semibold">The quick brown fox jumps over the lazy dog.</div>
{{</ example >}}

*Try selecting the text to see the expected behaviour*

### Selecting all text in one click

Use `user-select-all` to automatically select all the text in an element when a user clicks.

{{< example class="bg-neutral-subtler bg-grid-slate-100 text-center" >}}
<div class="user-select-all fw-semibold">The quick brown fox jumps over the lazy dog.</div>
{{</ example >}}

*Try selecting the text to see the expected behaviour*

### Using auto select behaviour

Use `user-select-auto` to use the default browser behavior for selecting text. Useful for undoing other classes like `.user-select-none` at different breakpoints.

{{< example class="bg-neutral-subtler bg-grid-slate-100 text-center" >}}
<div class="user-select-auto fw-semibold">The quick brown fox jumps over the lazy dog.</div>
{{</ example >}}

*Try selecting the text to see the expected behaviour*