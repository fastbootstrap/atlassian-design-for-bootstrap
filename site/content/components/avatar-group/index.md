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

## Stacked avatar

Include multiple avatars in stacked.

{{< example >}}
<div class="avatar-stack">
    <span class="avatar">+6</span>
    <img class="avatar" src="/images/avatar/1.jpg" />
    <img class="avatar" src="/images/avatar/2.jpg" />
    <img class="avatar" src="/images/avatar/4.jpg" />
    <img class="avatar" src="/images/avatar/5.jpg" />
</div>
{{</ example >}}


## Border color

The color of the border around the avatar. Any color that the CSS border-color property accepts can be used.

{{< example >}}

<div class="avatar-stack avatar-stack-reverse">
    <span class="avatar border-danger">+6</span>
    <img class="avatar border-danger" src="/images/avatar/1.jpg" />
    <img class="avatar border-danger" src="/images/avatar/2.jpg" />
    <img class="avatar border-danger" src="/images/avatar/4.jpg" />
    <img class="avatar border-danger" src="/images/avatar/5.jpg" />
</div>
{{</ example >}}

## Grouped avatar

{{< example>}}
<div class="avatar-group">
    <img class="avatar" src="/images/avatar/1.jpg" />
    <img class="avatar" src="/images/avatar/2.jpg" />
    <img class="avatar" src="/images/avatar/4.jpg" />
    <img class="avatar" src="/images/avatar/5.jpg" />
    <span class="avatar">+6</span>
</div>
{{</ example >}}

## Related

- [Avatar]({{< docsref "avatar" >}})
