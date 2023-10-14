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

## Avatar examples

Add `.avatar` to any `<img>` elements to make it an avatar.

{{< example class="d-flex gap-4" >}}
<img class="avatar" src="/images/avatar/1.jpg" />
<img class="avatar" src="/images/avatar/2.jpg" />
<img class="avatar" src="/images/avatar/3.jpg" />
{{</ example >}}

## Letter avatars

For letter avatar, You can use `text-bg-*` class to change the avatar background.

{{< example class="d-flex gap-4" >}}
<span class="avatar">H</span>
<span class="avatar text-bg-primary">U</span>
<span class="avatar text-bg-secondary">OP</span>
{{</ example >}}

## Icon avatars

{{< example class="d-flex gap-4" >}}
<span class="avatar"><i class="fas fa-user"></i></span>
<span class="avatar text-bg-primary"><i class="fas fa-star"></i></span>
<span class="avatar text-bg-secondary"><i class="fa-brands fa-apple"></i></span>
{{</ example >}}

## Variants

Use the `.rounded-*` utilities class to make squared or rounded avatars if you need.

### Squared 

{{< example class="d-flex gap-4" >}}
<span class="avatar rounded-0">N</span>
<span class="avatar rounded-0 text-bg-primary">N</span>
{{</ example >}}

### Rounded

{{< example class="d-flex gap-4 flex-wrap" >}}
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

## Related

- [Avatar group]({{< docsref "avatar-group" >}})
