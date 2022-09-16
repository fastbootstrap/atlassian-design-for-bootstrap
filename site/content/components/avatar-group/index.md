---
layout: docs
title: Avatar Group
description: "Avatar group component displays a number of avatars grouped together in a stack."
toc: true
group: data-display
status: new
menu:
  components:
---

**Bootstrap 5 Avatar group component**

Responsive Avatar group built with the latest Bootstrap 5. Avatar group component displays a number of avatars grouped together in a stack.

## Basic example

Use a `.avatar-stack` wrap the list of `.avatar` element in the `.avatar-item`.

{{< example class="d-flex" >}}
<div class="avatar-stack">
  <div class="avatar-item">
    <img class="avatar" src="/images/avatar/1.jpg" />
  </div>
  <div class="avatar-item">
    <img class="avatar" src="/images/avatar/2.jpg" />
  </div>
  <div class="avatar-item">
    <img class="avatar" src="/images/avatar/4.jpg" />
  </div>
  <div class="avatar-item">
    <img class="avatar" src="/images/avatar/5.jpg" />
  </div>
  <div class="avatar-item">
    <span class="avatar">+6</span>
  </div>
</div>
{{</ example >}}

## Change direction

Add a `.avatar-stack-reverse` class to the `.avatar-stack` element to change an avatar stack direction.

{{< example class="d-flex" >}}
<div class="avatar-stack avatar-stack-reverse">
  <div class="avatar-item">
    <span class="avatar">+6</span>
  </div>
  <div class="avatar-item">
    <img class="avatar" src="/images/avatar/1.jpg" />
  </div>
  <div class="avatar-item">
    <img class="avatar" src="/images/avatar/2.jpg" />
  </div>
  <div class="avatar-item">
    <img class="avatar" src="/images/avatar/4.jpg" />
  </div>
  <div class="avatar-item">
    <img class="avatar" src="/images/avatar/5.jpg" />
  </div>
</div>
{{</ example >}}

## Related

- [Avatar]({{< docsref "avatar" >}})
