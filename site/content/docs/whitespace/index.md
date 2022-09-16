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

<div class="bd-example">
  <div class="shadow mx-auto" style="width: 384px">
    <p class="text-wrap p-4">Hey everyone! It's almost 2022 and we still don't know if there is aliens living among us, or do we? Maybe the person writing this is an alien. You will never know.</p>
  </div>
</div>

```html
<div style="width: 384px">
  <p class="text-wrap">Hey everyone! It's almost 2022 and we ...</p>
</div>
```

### No wrap

Use `text-nowrap` to prevent text from wrapping within an element. Newlines and spaces will be collapsed.

<div class="bd-example">
  <div class="shadow mx-auto overflow-x-auto" style="width: 384px">
    <p class="text-nowrap p-4 mb-0">Hey everyone! It's almost 2022 and we still don't know if there is aliens living among us, or do we? Maybe the person writing this is an alien. You will never know.</p>
  </div>
</div>

```html
<div class="overflow-x-auto" style="width: 384px">
  <p class="text-nowrap">Hey everyone! It's almost 2022 and we ...</p>
</div>
```