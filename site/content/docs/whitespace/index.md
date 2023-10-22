---
layout: docs
title: Whitespace
description: "Utilities for controlling an element's white-space property."
toc: true
group: typography
menu:
  docs:    
---

## Quick reference

{{< class-api "white-space" >}}

## Basic usage

### Wrap

Use `text-wrap` to cause text to wrap normally within an element. Newlines and spaces will be collapsed.

{{< example class="bg-neutral-subtler bg-grid-slate-100" show_source="false" >}}
  <div class="bg-body mx-auto max-w-sm p-8 shadow-lg border rounded">
    <p class="text-wrap m-0">Hey everyone! It's almost 2022 and we still don't know if there is aliens living among us, or do we? Maybe the person writing this is an alien. You will never know.</p>
  </div>
{{</ example >}}

```html
<div class="max-w-sm">
  <!-- max-w-sm : 384px -->
  <p class="text-wrap">Hey everyone! It's almost 2022 and we ...</p>
</div>
```

### No wrap

Use `text-nowrap` to prevent text from wrapping within an element. Newlines and spaces will be collapsed.


{{< example class="bg-neutral-subtler bg-grid-slate-100" show_source="false" >}}
  <div class="overflow-x-auto bg-body mx-auto max-w-sm p-8 shadow-lg border rounded">
    <p class="text-nowrap m-0">Hey everyone! It's almost 2022 and we still don't know if there is aliens living among us, or do we? Maybe the person writing this is an alien. You will never know.</p>
  </div>
{{</ example >}}

```html
<div class="overflow-x-auto max-w-sm">
  <!-- max-w-sm : 384px -->
  <p class="text-nowrap">Hey everyone! It's almost 2022 and we ...</p>
</div>
```