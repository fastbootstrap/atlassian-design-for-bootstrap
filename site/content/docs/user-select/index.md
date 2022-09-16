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

## Basic examples

### Disabling text selection

Use `user-select-none` to prevent selecting text in an element and its children.

{{< example >}}
<div class="user-select-none">The quick brown fox jumps over the lazy dog.</div>
{{</ example >}}

*Try selecting the text to see the expected behaviour*

### Selecting all text in one click

Use `user-select-all` to automatically select all the text in an element when a user clicks.

{{< example >}}
<div class="user-select-all">The quick brown fox jumps over the lazy dog.</div>
{{</ example >}}

*Try selecting the text to see the expected behaviour*

### Using auto select behaviour

Use `user-select-auto` to use the default browser behavior for selecting text. Useful for undoing other classes like `.user-select-none` at different breakpoints.

{{< example >}}
<div class="user-select-auto">The quick brown fox jumps over the lazy dog.</div>
{{</ example >}}

*Try selecting the text to see the expected behaviour*