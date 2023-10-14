---
layout: docs
title: Breadcrumb
description: "Breadcrumbs component are a navigation system show hierarchy and navigational context for a user’s location within an app."
toc: true
group: navigation
menu:
  components:
---

**Bootstrap 5 Breadcrumb component**

Responsive breadcrumb built with the latest Bootstrap 5. 

Breadcrumbs are used as a high-level representation of where users have navigated. Users can click the links to go back to previous pages.

## Basic breadcrumb

All items must contain links, and the last item must be selected.

{{< example >}}
<nav aria-label="Breadcrumb">
  <ol class="breadcrumb">
    <li class="breadcrumb-item">
      <a href="#">Business</a>
    </li>
    <li class="breadcrumb-item">
      <a href="#">Customers</a>
    </li>
    <li class="breadcrumb-item active">
      <a href="#" aria-current="page">MailChimp</a>
    </li>
  </ol>
</nav>
{{</ example >}}

## With icons

Add an icon to the breadcrumb component.

{{< example >}}
<nav aria-label="breadcrumb">
  <ol class="breadcrumb">
    <li class="breadcrumb-item">
      <a href="#"><i class="fas fa-home me-1"></i>Home</a>
    </li>
    <li class="breadcrumb-item">
      <a href="#">Library</a>
    </li>
    <li class="breadcrumb-item active" aria-current="page">
      <a href="#">Data</a>
    </li>
  </ol>
</nav>
{{</ example >}}

## With dropdown

Add a [dropdown]({{< docsref "dropdown" >}}) to the breadcrumb component.

{{< example >}}
<nav aria-label="breadcrumb">
  <ol class="breadcrumb">
    <li class="breadcrumb-item">
      <a href="#">Home</a>
    </li>
    <li class="breadcrumb-item">
      <a href="#">Library</a>
    </li>
    <li class="breadcrumb-item active" aria-current="page">
      <a class="dropdown-toggle" href="#" data-bs-toggle="dropdown" aria-expanded="false">Data</a>
      <ul class="dropdown-menu">
        <li>
          <a class="dropdown-item" href="#">Action</a>
        </li>
        <li><a class="dropdown-item" href="#">Another action</a></li>
        <li><a class="dropdown-item" href="#">Something else here</a></li>
      </ul>
    </li>
  </ol>
</nav>
{{</ example >}}

## Dividers

Dividers are automatically added in CSS through [::before](https://developer.mozilla.org/en-US/docs/Web/CSS/::before) and [content](https://developer.mozilla.org/en-US/docs/Web/CSS/content). They can be changed by modifying a local CSS custom property `--bs-breadcrumb-divider`, or through the `$breadcrumb-divider` Sass variable — and `$breadcrumb-divider-flipped` for its RTL counterpart, if needed. We default to our Sass variable, which is set as a fallback to the custom property. This way, you get a global divider that you can override without recompiling CSS at any time.

### Using local CSS variable

In here we use the `--bs-breadcrumb-divider` local CSS variable to custom the divider of Breadcrumb.

{{< example >}}
<nav style="--bs-breadcrumb-divider: '>'" aria-label="breadcrumb">
  <ol class="breadcrumb">
    <li class="breadcrumb-item"><a href="#">Item 1</a></li>
    <li class="breadcrumb-item"><a href="#">Item 2</a></li>
    <li class="breadcrumb-item"><a href="#">Item 3</a></li>
    <li class="breadcrumb-item active" aria-current="page">Item 4</li>
  </ol>
</nav>
{{</ example >}}

When modifying via Sass, the `quote` function is required to generate the quotes around a string. For example, using `>` as the divider, you can use this:

```css
$breadcrumb-divider: quote(">");
```

It’s also possible to use an **embedded SVG icon**. Apply it via our CSS custom property, or use the Sass variable.

### Using embedded SVG 

Inlining SVG as data URI requires to URL escape a few characters, most notably `<`, `>` and `#`. That’s why the `$breadcrumb-divider` variable is passed through our `escape-svg()` Sass function. When using the CSS custom property, you need to URL escape your SVG on your own.

{{< example >}}
<nav style="--bs-breadcrumb-divider: url(&#34;data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='8' height='8'%3E%3Cpath d='M2.5 0L1 1.5 3.5 4 1 6.5 2.5 8l4-4-4-4z' fill='%236c757d'/%3E%3C/svg%3E&#34;);" aria-label="breadcrumb">
  <ol class="breadcrumb">
    <li class="breadcrumb-item">
      <a href="#">Item 1</a>
    </li>
    <li class="breadcrumb-item">
      <a href="#">Item 2</a>
    </li>
    <li class="breadcrumb-item">
      <a href="#">Item 3</a>
    </li>
    <li class="breadcrumb-item active">Item 4</li>
  </ol>
</nav>
{{</ example >}}

```css
$breadcrumb-divider: url("data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' width='8' height='8'><path d='M2.5 0L1 1.5 3.5 4 1 6.5 2.5 8l4-4-4-4z' fill='#{$breadcrumb-divider-color}'/></svg>");
```

## Colored links

Use the [`.link-{color}`]({{< docsref "link#colored-links" >}}) helpers change the link color of breadcrumbs if you need.

{{< example >}}
<nav aria-label="breadcrumb">
  <ol class="breadcrumb">
    <li class="breadcrumb-item"><a class="link-primary" href="#">Item 1</a></li>
    <li class="breadcrumb-item"><a class="link-primary" href="#">Item 2</a></li>
    <li class="breadcrumb-item"><a class="link-primary" href="#">Item 3</a></li>
    <li class="breadcrumb-item active" aria-current="page">Item 4</li>
  </ol>
</nav>
<nav aria-label="breadcrumb">
  <ol class="breadcrumb">
    <li class="breadcrumb-item"><a class="link-secondary" href="#">Item 1</a></li>
    <li class="breadcrumb-item"><a class="link-secondary" href="#">Item 2</a></li>
    <li class="breadcrumb-item"><a class="link-secondary" href="#">Item 3</a></li>
    <li class="breadcrumb-item active" aria-current="page">Item 4</li>
  </ol>
</nav>
{{</ example >}}

## Accessibility 

(WAI-ARIA: [https://www.w3.org/WAI/ARIA/apg/patterns/breadcrumb/](https://www.w3.org/TR/wai-aria-practices/#breadcrumb))

Be sure to add a `aria-label="breadcrumb` description on the Breadcrumbs component.

- The set of links is structured using an ordered list (`<ol>` element).
- To prevent screen reader announcement of the visual separators between links, they are hidden with `aria-hidden`.
- A nav element labeled with `aria-label` identifies the structure as a breadcrumb trail and makes it a navigation landmark so that it is easy to locate.

## Related

- [Navbar]({{< docsref "navbar" >}})
- [Dropdown menu]({{< docsref "dropdown" >}})