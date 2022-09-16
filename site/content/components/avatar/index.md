---
layout: docs
title: Avatar
description: "Avatar component is a visual representation of an entity, such as a user or an organization."
toc: true
group: data-display
status: new
menu:
  components:
---

**Bootstrap 5 Avatar component**

Responsive avatar built with the latest Bootstrap 5. Avatar component is a visual representation of an entity, such as a user or an organization.

## Basic examples

Add `.avatar` to any `<img>` elements to make it an avatar.

{{< example >}}
<img class="avatar" src="/images/avatar/1.jpg" />
<img class="avatar" src="/images/avatar/2.jpg" />
<img class="avatar" src="/images/avatar/3.jpg" />
{{</ example >}}

## Letter avatars

{{< example >}}
<span class="avatar">H</span>
<span class="avatar text-bg-primary">U</span>
<span class="avatar text-bg-secondary">OP</span>
{{</ example >}}

## Icon avatars

{{< example >}}
<span class="avatar"><i class="fas fa-user"></i></span>
<span class="avatar text-bg-primary"><i class="fas fa-star"></i></span>
<span class="avatar text-bg-secondary"><i class="fa-brands fa-apple"></i></span>
{{</ example >}}

## Variants

Use the `.rounded-*` utilities class to make squared or rounded avatars if you need.

### Squared 

{{< example >}}
<span class="avatar rounded-0">N</span>
<span class="avatar rounded-0 text-bg-primary">N</span>
{{</ example >}}

### Rounded

{{< example >}}
<span class="avatar rounded-1">N</span>
<span class="avatar rounded-2 text-bg-primary">OP</span>
<span class="avatar rounded-3 text-bg-secondary">W</span>
<span class="avatar rounded-4 text-bg-info">N</span>
<span class="avatar rounded-5 text-bg-secondary">MUI</span>
{{</ example >}}

## Sizes

Avatars come in six different sizes: extra-small, small, medium, large, and extra large. The medium size is the default option.

{{< example >}}
<img class="avatar avatar-xs" src="/images/avatar/1.jpg" />
<img class="avatar avatar-sm" src="/images/avatar/1.jpg" />
<img class="avatar" src="/images/avatar/1.jpg" />
<img class="avatar avatar-lg" src="/images/avatar/1.jpg" />
<img class="avatar avatar-xl" src="/images/avatar/1.jpg" />
<img class="avatar avatar-xxl" src="/images/avatar/1.jpg" />
{{</ example >}}

## Status

Use the `.avatar-badge` to shows contextual information or the user's status, such as online, busy or away. 

{{< example >}}
<span class="avatar">
  <img src="/images/avatar/1.jpg" />
  <span class="avatar-badge border bg-green-300"></span>
</span>
<span class="avatar avatar-lg">
  <img src="/images/avatar/1.jpg" />
  <span class="avatar-badge border bg-red-300 p-1"></span>
</span>
<span class="avatar avatar-xl">
  <img src="/images/avatar/1.jpg" />
  <span class="avatar-badge border p-2 text-bg-success"><i class="fa-solid fa-check fa-2xs"></i></span>
</span>
{{</ example >}}

## Related

- [Avatar group]({{< docsref "avatar-group" >}})
