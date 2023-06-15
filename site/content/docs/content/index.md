---
layout: docs
title: Content
description: "Utilities for controlling the content of the before and after pseudo-elements."
toc: true
status: new
group: typography
menu:
  docs:
---

## Quick reference

{{< class-api "content" >}}

## Basic examples

### Remove the `::before` and `::after` Pseudo-element

Use `content-none` to disable the `::before` and `::after` pseudo-elements appear on the child of current element.

{{< example >}}
<div class="content-none">The quick brown fox jumps over the lazy dog.</div>
{{</ example >}}
