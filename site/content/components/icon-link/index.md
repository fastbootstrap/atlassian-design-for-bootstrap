---
layout: docs
title: Icon link
description: "Quickly create stylized hyperlinks with Bootstrap Icons or other icons."
toc: true
group: utilities
menu:
  components:
---

The icon link helper component modifies our default link styles to enhance their appearance and quickly align any pairing of icon and text. Alignment is set via inline flexbox styling and a default `gap` value. We stylize the underline with a custom offset and color. Icons are automatically sized to `1em` to best match their associated text’s `font-size`.

Icon links assume [Bootstrap Icons](https://icons.getbootstrap.com/) are being used, but you can use any icon or image you like.

## Example

Take a regular `<a>` element, add `.icon-link`, and insert an icon on either the left or right of your link text. The icon is automatically sized, placed, and colored.

{{< example >}}
<a class="icon-link" href="#">
  <img src="/images/1.png" class="bi" />
  Icon link
</a>
{{</ example >}}

With Font Awesome icon.

{{< example >}}
<a class="icon-link" href="#">
  Icon link
  <i class="fa-solid fa-arrow-right bi"></i>
</a>
{{</ example >}}

## Style on hover 

Add `.icon-link-hover` to move the icon to the right on hover.

{{< example >}}
<a class="icon-link icon-link-hover" href="#">
  Icon link
  <svg class="bi" viewBox="0 0 16 16">
    <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"></path>
  </svg>
</a>
{{</ example >}}