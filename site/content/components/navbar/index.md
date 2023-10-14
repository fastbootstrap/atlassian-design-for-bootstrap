---
layout: docs
title: Navbar
description: "Navbars are allows users quickly navigate the entire content of a product or a section of the application."
toc: true
group: navigation
menu:
  components:
---

**Bootstrap 5 Navbar component**

Responsive navbar built with the latest Bootstrap 5. Navbars are allows users quickly navigate the entire content of a product or a section of the application.

Documentation and examples for Bootstrap’s powerful, responsive navigation header, the navbar. Includes support for branding, navigation, and more, including support for our collapse plugin.

## Navbar example

The navbar is a horizontal list of links when in the expanding state. It can includes [Dropdown]({{< docsref "dropdown" >}}), [Button]({{< docsref "button" >}}), [Form]({{< docsref "form" >}}) etc if your need.

{{< example >}}
<nav class="navbar navbar-expand-lg">
  <div class="container-fluid">
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" 
    data-bs-target="#navbarExample" aria-controls="navbarExample" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <a class="navbar-brand" href="#"><img src="/images/bootstrap-logo.svg" width="36" /></a>
    <div class="collapse navbar-collapse" id="navbarExample">
      <ul class="navbar-nav me-auto mb-0">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" aria-current="page" href="#">Team</a>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">Projects</a>
          <ul class="dropdown-menu">
            <li><a class="dropdown-item" href="#">Action</a></li>
            <li><a class="dropdown-item" href="#">Another action</a></li>
            <li><hr class="dropdown-divider" /></li>
            <li><a class="dropdown-item" href="#">Something else here</a></li>
          </ul>
        </li>
      </ul>
      <div class="d-flex align-items-center flex-column flex-lg-row">
        <form class="me-2 mb-2 mb-lg-0">
          <input type="text" class="form-control form-control-sm" placeholder="Search" />
        </form>
        <a class="btn btn-primary" href="">Sign up</a>
      </div>
    </div>
  </div>
</nav>
{{</ example >}}

## How it works
Here's what you need to know before getting started with the navbar:

- Navbars require a wrapping `.navbar` with `.navbar-expand{-sm|-md|-lg|-xl|-xxl}` for responsive collapsing and [color scheme](#color-schemes) classes.
- Navbars and their contents are fluid by default. Change the [container](#containers) to limit their horizontal width in different ways.
- Use our spacing [width]({{< docsref "width" >}}), [height]({{< docsref "height" >}}) and [flex]({{< docsref "flex" >}}) utility classes for controlling spacing and alignment within navbars.
- Navbars are responsive by default, but you can easily modify them to change that. Responsive behavior depends on our Collapse JavaScript plugin.
- Ensure accessibility by using a `<nav>` element or, if using a more generic element such as a `<div>`, add a `role="navigation"` to every navbar to explicitly identify it as a landmark region for users of assistive technologies.
- Indicate the current item by using `aria-current="page"` for the current page or `aria-current="true"` for the current item in a set.

## Pills nav

Add `.navbar-nav-pills` to the `navbar-nav` element makes all the items as pills.

{{< example >}}
<nav class="navbar navbar-expand-lg">
  <div class="container-fluid">
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarPillsExample" aria-controls="navbarExample" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <a class="navbar-brand" href="#"><img src="/images/bootstrap-logo.svg" width="36" /></a>
    <div class="collapse navbar-collapse" id="navbarPillsExample">
      <ul class="navbar-nav navbar-nav-pills">
        <li class="nav-item">
          <a class="nav-link" href="#">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Team</a>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle active" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">Projects</a>
          <ul class="dropdown-menu">
            <li><a class="dropdown-item" href="#">Action</a></li>
            <li><a class="dropdown-item" href="#">Another action</a></li>
            <li><hr class="dropdown-divider" /></li>
            <li><a class="dropdown-item" href="#">Something else here</a></li>
          </ul>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Profile</a>
        </li>
      </ul>
    </div>
  </div>
</nav>
{{</ example >}}

## Underline nav

<span class="lozenge new fs-sm">New Feature</span>

Add `.navbar-nav-underline` to the `navbar-nav` element.

{{< example >}}
<nav class="navbar navbar-expand-lg">
  <div class="container-fluid">
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarUnderlineExample" aria-controls="navbarExample" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <a class="navbar-brand" href="#"><img src="/images/bootstrap-logo.svg" width="36" /></a>
    <div class="collapse navbar-collapse" id="navbarUnderlineExample">
      <ul class="navbar-nav navbar-nav-underline">
        <li class="nav-item">
          <a class="nav-link" href="#">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Team</a>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle active" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">Projects</a>
          <ul class="dropdown-menu">
            <li><a class="dropdown-item" href="#">Action</a></li>
            <li><a class="dropdown-item" href="#">Another action</a></li>
            <li><hr class="dropdown-divider" /></li>
            <li><a class="dropdown-item" href="#">Something else here</a></li>
          </ul>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Profile</a>
        </li>
      </ul>
    </div>
  </div>
</nav>
{{</ example >}}

## Supported content

Navbars come with built-in support for a handful of sub-components. Choose from the following as needed:

- `.navbar-brand` for your company, product, or project name.
- `.navbar-nav` for a full-height and lightweight navigation (including support for dropdowns).
- `.navbar-toggler` for use with our collapse plugin and other [navigation toggling](#responsive-behaviors) behaviors.
- Flex and spacing utilities for any form controls and actions.
- `.navbar-text` for adding vertically centered strings of text.
- `.collapse.navbar-collapse` for grouping and hiding navbar contents by a parent breakpoint.
- Add an optional `.navbar-scroll` to set a `max-height` and [scroll expanded navbar content](#scrolling).

Apart from listed above, navbar supports also components like breadcrumbs, forms, buttons, icons, flags, avatars, badges, and a few more.

### Brand

The `.navbar-brand` can be applied to most elements, but an anchor works best, as some elements might require utility classes or custom styles.

#### Text

Add your text within an element with the `.navbar-brand` class.

{{< example >}}
<nav class="navbar">
  <div class="container">
    <a class="navbar-brand" href="#">
      Navbar
    </a>
  </div>
</nav>
{{</ example>}}

#### Image 

You can replace the text within the .navbar-brand with an <img>.

{{< example >}}
<nav class="navbar">
  <div class="container">
    <a class="navbar-brand" href="#">
      <img src="/images/bootstrap-logo.svg" width="36" alt="Logo" />
    </a>
  </div>
</nav>
{{</ example>}}

#### Image and text 

You can also make use of some additional utilities to add an image and text at the same time. Note the addition of `.d-inline-block` and `.align-text-top` on the `<img>`.

{{< example class="d-grid gap-3" >}}
<nav class="navbar">
  <div class="container">
    <a class="navbar-brand" href="#">
      <img src="/images/bootstrap-logo.svg" width="36"
       alt="Logo" 
       class="d-inline-block align-text-top" /> 
       Bootstrap
    </a>
  </div>
</nav>
{{</ example>}}

### Nav

Navbar navigation links build on our `.nav` options with their own modifier class and require the use of [toggler classes](#toggler) for proper responsive styling. 

{{< callout >}}
**Navigation `.nav` in navbars will also grow to occupy as much horizontal space as possible** to keep your navbar contents securely aligned.
{{</ callout >}}

Add the `.active` class on `.nav-link` to indicate the current page. 

Please note that you should also add the `aria-current` attribute on the active `.nav-link`.

{{< example >}}
<nav class="navbar navbar-expand-lg">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Navbar</a>
    <button class="navbar-toggler" 
    type="button" 
    data-bs-toggle="collapse" 
    data-bs-target="#navbarNav" 
    aria-controls="navbarNav" 
    aria-expanded="false" 
    aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Features</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Pricing</a>
        </li>
        <li class="nav-item">
          <a class="nav-link disabled">Disabled</a>
        </li>
      </ul>
    </div>
  </div>
</nav>
{{</ example >}}

And because we use classes for our navs, you can avoid the list-based approach entirely if you like.

{{< example >}}
<nav class="navbar navbar-expand-lg">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Navbar</a>
    <button class="navbar-toggler" 
    type="button" 
    data-bs-toggle="collapse" 
    data-bs-target="#navbarNavAltMarkup" 
    aria-controls="navbarNavAltMarkup" 
    aria-expanded="false" 
    aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div class="navbar-nav gap-2">
        <a class="nav-link active" aria-current="page" href="#">Home</a>
        <a class="nav-link" href="#">Features</a>
        <a class="nav-link" href="#">Pricing</a>
        <a class="nav-link disabled">Disabled</a>
      </div>
    </div>
  </div>
</nav>
{{</ example >}}

### Forms 

Place various form controls and components within a navbar:

{{< example >}}
<nav class="navbar">
  <div class="container-fluid">
    <form class="d-flex" role="search">
      <input class="form-control me-2" 
      type="search" 
      placeholder="Search..." 
      aria-label="Search">
      <button class="btn btn-subtle" type="submit">
      <i class="fa-solid fa-magnifying-glass fa-lg"></i>
      </button>
    </form>
  </div>
</nav>
{{</ example >}}

Immediate child elements of `.navbar` use flex layout and will default to `justify-content: space-between`. Use additional flex utilities as needed to adjust this behavior.

{{< example >}}
<nav class="navbar">
  <div class="container-fluid">
    <a class="navbar-brand">
    <img src="/images/bootstrap-logo.svg" width="36" alt="Logo" />
    </a>
    <form class="d-flex" role="search">
      <input class="form-control me-2" type="search" 
      placeholder="Search..." 
      aria-label="Search">
      <button class="btn btn-subtle" type="submit">
      <i class="fa-solid fa-magnifying-glass fa-lg"></i>
      </button>
    </form>
  </div>
</nav>
{{</ example >}}

[Input groups]({{< ref "input-group" >}}) work, too. If your navbar is an entire form, or mostly a form, you can use the `<form>` element as the container and save some HTML.

{{< example >}}
<nav class="navbar">
  <form class="container-fluid">
    <div class="input-group">
      <span class="input-group-text" id="basic-addon1">@</span>
      <input type="text" class="form-control" 
      placeholder="Username" 
      aria-label="Username" 
      aria-describedby="basic-addon1">
    </div>
  </form>
</nav>
{{</ example >}}

### Buttons

Various buttons are supported as part of these navbar forms, too. This is also a great reminder that vertical alignment utilities can be used to align different sized elements.

{{< example >}}
<nav class="navbar navbar-expand-lg">
  <div class="container">
    <button class="navbar-toggler" 
    type="button" 
    data-bs-toggle="collapse" 
    data-bs-target="#navbarButtonsExample" 
    aria-expanded="false" >
      <span class="navbar-toggler-icon"></span>
    </button>
    <a class="navbar-brand" href="#">
      <img src="/images/bootstrap-logo.svg" width="36" />
    </a>
    <div class="collapse navbar-collapse" id="navbarButtonsExample">
      <ul class="navbar-nav">
        <li class="nav-item">
          <a class="nav-link" aria-current="page" href="#">Dashboard</a>
        </li>
      </ul>
      <div class="d-flex align-items-center ms-auto">
        <button type="button" class="btn btn-default px-3 me-2">
          Login
        </button>
        <button type="button" class="btn btn-primary me-3">
          Sign up for free
        </button>
        <a
          class="btn btn-subtle px-3"
          href="https://github.com/mdbootstrap/mdb-ui-kit"
          role="button"
          ><i class="fab fa-github"></i
        ></a>
      </div>   
    </div>
  </div>
</nav>
{{</ example >}}

### Text 

Navbars may contain bits of text with the help of `.navbar-text`. This class adjusts vertical alignment and horizontal spacing for strings of text.

{{< example >}}
<nav class="navbar">
  <div class="container-fluid">
    <span class="navbar-text">
      Navbar text with an inline element
    </span>
  </div>
</nav>
{{</ example >}}

Mix and match with other components and utilities as needed.

{{< example >}}
<nav class="navbar navbar-expand-lg">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Navbar w/ text</a>
    <button class="navbar-toggler" 
    type="button" 
    data-bs-toggle="collapse" 
    data-bs-target="#navbarText" 
    aria-controls="navbarText" 
    aria-expanded="false" 
    aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarText">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Features</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Pricing</a>
        </li>
      </ul>
      <span class="navbar-text">Navbar text with an inline element</span>
    </div>
  </div>
</nav>

{{</ example >}}

### Dropdown

You can also use [dropdowns]({{< ref "dropdown" >}}) in your navbar nav. [Dropdown menus]({{< ref "dropdown" >}}) require a wrapping element for positioning, so be sure to use separate and nested elements for `.nav-item` and `.nav-link` as shown below.

{{< example >}}
<nav class="navbar navbar-expand-lg">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Navbar</a>
    <div class="collapse navbar-collapse" id="navbarNavDropdown">
      <ul class="navbar-nav">
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">Dropdown link</a>
          <ul class="dropdown-menu">
            <li><a class="dropdown-item" href="#">Action</a></li>
            <li><a class="dropdown-item" href="#">Another action</a></li>
            <li><a class="dropdown-item" href="#">Something else here</a></li>
          </ul>
        </li>
      </ul>
    </div>
  </div>
</nav>
{{</ example >}}

### Icons

Add an icon as link.

{{< callout >}}
We add `.d-flex` `.flex-row` classes to keep the icons inline when the navbar is collapsed. Without this, they will stack one under another. `.gap-3` will adding extra space between icons.

{{</ callout >}}
{{< example >}}
<nav class="navbar navbar-expand-lg">
  <div class="container-fluid">
    <ul class="navbar-nav d-flex flex-row gap-3">
      <!-- Icons -->
      <li class="nav-item me-3 me-lg-0">
        <a class="nav-link" href="#">
          <i class="fas fa-shopping-cart"></i>
        </a>
      </li>
      <li class="nav-item me-3 me-lg-0">
        <a class="nav-link" href="#">
          <i class="fab fa-twitter"></i>
        </a>
      </li>
      <!-- Icon dropdown -->
      <li class="nav-item dropdown">
        <a class="nav-link dropdown-toggle" 
        href="#" 
        id="navbarDropdown" 
        role="button" 
        data-bs-toggle="dropdown" 
        aria-expanded="false">
          <i class="fas fa-user"></i>
        </a>
        <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
          <li>
            <a class="dropdown-item" href="#">Action</a>
          </li>
          <li>
            <a class="dropdown-item" href="#">Another action</a>
          </li>
          <li><hr class="dropdown-divider" /></li>
          <li>
            <a class="dropdown-item" href="#">Something else here</a>
          </li>
        </ul>
      </li>
    </ul>
  </div>
</nav>
{{</ example >}}

### Badges

[Badges]({{< ref "badge" >}}) can be very useful for presenting counters, for example in the shopping cart.

{{< example >}}
<nav class="navbar navbar-expand-lg">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">
      <img src="/images/bootstrap-logo.svg" width="36" alt="Logo" />
    </a>
    <ul class="navbar-nav">
      <li class="nav-item">
        <a class="nav-link position-relative" href="#">
          <span class="badge position-absolute top-0 end-0 text-bg-danger">1</span>
          <span><i class="fas fa-shopping-cart"></i></span>
        </a>
      </li>
    </ul>
  </div>
</nav>
{{</ example >}}

### Avatar

Add an [Avatar]({{< ref "avatar" >}}) with [Dropdown]({{< ref "dropdown" >}}) to navbar show a user profile.

{{< example >}}
<nav class="navbar navbar-expand-lg">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">
      <img src="/images/bootstrap-logo.svg" width="36" alt="Logo" />
    </a>
    <ul class="navbar-nav">
      <li class="nav-item dropdown">
        <a class="avatar" href="#" data-bs-toggle="dropdown" aria-expanded="false">
          <img src="/images/avatar/1.jpg" />
          <span class="avatar-badge border bg-red-300 p-1"></span>
        </a>
        <ul class="dropdown-menu">
          <li><a class="dropdown-item" href="#">Settings</a></li>
          <li><a class="dropdown-item" href="#">Profile</a></li>
          <li><a class="dropdown-item" href="#">Logout</a></li>
        </ul>
      </li>
    </ul>
  </div>
</nav>
{{</ example >}}

## Position

Use our [position utilities]({{< docsref "position" >}}) to place navbars in non-static positions. Choose from fixed to the top, fixed to the bottom, stickied to the top (scrolls with the page until it reaches the top, then stays there), or stickied to the bottom (scrolls with the page until it reaches the bottom, then stays there).

### Fixed top

Fixed navbars use `position: fixed`, meaning they’re pulled from the normal flow of the DOM and may require custom CSS (e.g., `padding-top` on the `<body>`) to prevent overlap with other elements.

Add the `.fixed-top` class to the `.navbar`.

{{< example show_preview="false" >}}
<nav class="navbar fixed-top">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Fixed top</a>
  </div>
</nav>
{{</ example >}}

### Fixed bottom

Add the `.fixed-bottom` class to the `.navbar`.

{{< example show_preview="false" >}}
<nav class="navbar fixed-bottom">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Fixed bottom</a>
  </div>
</nav>
{{</ example >}}

### Sticky top

Sticky positioning is a hybrid of relative and fixed positioning, but it's treated as relative positioned until it crosses a specified threshold.

Add the `.sticky-top` class to the `.navbar`.

{{< example show_preview="false" >}}
<nav class="navbar sticky-top">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Sticky top</a>
  </div>
</nav>
{{</ example >}}

### Sticky bottom

 Add the `.sticky-bottom` class to the `.navbar`.

{{< example show_preview="false" >}}
<nav class="navbar sticky-bottom">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Sticky top</a>
  </div>
</nav>
{{</ example >}}

## Containers 

Although it’s not required, you can wrap a navbar in a `.container` to center it on a page–though note that an inner container is still required. Or you can add a container inside the `.navbar` to only center the contents of a fixed or static top navbar.

{{< example >}}
<div class="container">
  <nav class="navbar navbar-expand-lg">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">Navbar</a>
    </div>
  </nav>
</div>
{{</ example >}}

Use any of the responsive containers to change how wide the content in your navbar is presented.

{{< example >}}
<nav class="navbar navbar-expand-lg">
  <div class="container-md">
    <a class="navbar-brand" href="#">Navbar</a>
  </div>
</nav>
{{</ example >}}

## Content alignment

Use our [flex]({{< docsref "justify-content" >}}) utility classes to align navbar content to the right, left or center.

### Left aligned

Add `.me-auto` class to the `.navbar-nav` to align the content to the left.

{{< example >}}
<nav class="navbar navbar-expand-lg navbar-light">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Navbar</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div class="navbar-nav me-auto">
        <a class="nav-link active" aria-current="page" href="#">Home</a>
        <a class="nav-link" href="#">Features</a>
        <a class="nav-link" href="#">Pricing</a>
        <a class="nav-link disabled">Disabled</a>
      </div>
    </div>
  </div>
</nav>
{{</ example >}}

### Right aligned

Add `.ms-auto` class to the .navbar-nav to align the content to the right.


{{< example >}}
<nav class="navbar navbar-expand-lg navbar-light">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Navbar</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div class="navbar-nav ms-auto">
        <a class="nav-link active" aria-current="page" href="#">Home</a>
        <a class="nav-link" href="#">Features</a>
        <a class="nav-link" href="#">Pricing</a>
        <a class="nav-link disabled">Disabled</a>
      </div>
    </div>
  </div>
</nav>
{{</ example >}}

### Centered

Add `.mx-auto` class to the `.navbar-nav` to make content are centered.

{{< example >}}
<nav class="navbar navbar-expand-lg navbar-light">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Navbar</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div class="navbar-nav mx-auto">
        <a class="nav-link active" aria-current="page" href="#">Home</a>
        <a class="nav-link" href="#">Features</a>
        <a class="nav-link" href="#">Pricing</a>
        <a class="nav-link disabled">Disabled</a>
      </div>
    </div>
  </div>
</nav>
{{</ example >}}

## Scrolling

Add `.navbar-nav-scroll` to a `.navbar-nav` (or other navbar sub-component) to enable vertical scrolling within the toggleable contents of a collapsed navbar. By default, scrolling kicks in at `75vh` (or 75% of the viewport height), but you can override that with the local CSS custom property `--bs-navbar-height` or custom styles. At larger viewports when the navbar is expanded, content will appear as it does in a default navbar.

Please note that this behavior comes with a potential drawback of `overflow`—when setting `overflow-y: auto` (required to scroll the content here), `overflow-x` is the equivalent of auto, which will crop some horizontal content.

Here’s an example navbar using `.navbar-nav-scroll` with `style="--bs-scroll-height: 100px;"`, with some extra margin utilities for optimum spacing.

{{< example >}}
<nav class="navbar navbar-expand-lg">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Navbar scroll</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarScroll" aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarScroll">
      <ul class="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll" style="--bs-scroll-height: 100px;">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Link</a>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Link
          </a>
          <ul class="dropdown-menu">
            <li><a class="dropdown-item" href="#">Action</a></li>
            <li><a class="dropdown-item" href="#">Another action</a></li>
            <li><hr class="dropdown-divider"></li>
            <li><a class="dropdown-item" href="#">Something else here</a></li>
          </ul>
        </li>
        <li class="nav-item">
          <a class="nav-link disabled">Link</a>
        </li>
      </ul>
      <form class="d-flex" role="search">
        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
        <button class="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>
{{</ example >}}

## Responsive behaviors 

Navbars can use `.navbar-toggler`, `.navbar-collapse`, and `.navbar-expand{-sm|-md|-lg|-xl|-xxl}` classes to determine when their content collapses behind a button. In combination with other utilities, you can easily choose when to show or hide particular elements.

For navbars that never collapse, add the `.navbar-expand` class on the navbar. For navbars that always collapse, don’t add any `.navbar-expand` class.

### Toggler Button

Navbar togglers `.navbar-toggler` are left-aligned by default, but should they follow a sibling element like a `.navbar-brand`, they’ll automatically be aligned to the far right. Reversing your markup will reverse the placement of the toggler. 

Below are examples of different toggle styles With no `.navbar-brand` shown at the smallest breakpoint:

{{< example >}}
<nav class="navbar navbar-expand-lg">
  <div class="container-fluid">
    <button class="navbar-toggler" 
    type="button" 
    data-bs-toggle="collapse" 
    data-bs-target="#navbarTogglerDemo01" 
    aria-controls="navbarTogglerDemo01" 
    aria-expanded="false" 
    aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarTogglerDemo01">
      <a class="navbar-brand" href="#">Hidden brand</a>
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Link</a>
        </li>
        <li class="nav-item">
          <a class="nav-link disabled">Disabled</a>
        </li>
      </ul>
      <form class="d-flex" role="search">
        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
        <button class="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>
{{</ example >}}

With a brand name shown on the left and toggler on the right:

{{< example >}}
<nav class="navbar navbar-expand-lg">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Navbar</a>
    <button class="navbar-toggler" 
    type="button" 
    data-bs-toggle="collapse" 
    data-bs-target="#navbarTogglerDemo02" 
    aria-controls="navbarTogglerDemo02" 
    aria-expanded="false" 
    aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarTogglerDemo02">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Link</a>
        </li>
        <li class="nav-item">
          <a class="nav-link disabled">Disabled</a>
        </li>
      </ul>
      <form class="d-flex" role="search">
        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
        <button class="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>
{{</ example >}}

With a toggler on the left and brand name on the right:

{{< example >}}
<nav class="navbar navbar-expand-lg">
  <div class="container-fluid">
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <a class="navbar-brand" href="#">Navbar</a>
    <div class="collapse navbar-collapse" id="navbarTogglerDemo03">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Link</a>
        </li>
        <li class="nav-item">
          <a class="nav-link disabled">Disabled</a>
        </li>
      </ul>
      <form class="d-flex" role="search">
        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
        <button class="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>
{{</ example >}}

### External content 
Sometimes you want to use the collapse plugin to trigger a container element for content that structurally sits outside of the `.navbar` . Because our plugin works on the `id` and `data-bs-target` matching, that’s easily done!

{{< example >}}
<div class="collapse" id="navbarToggleExternalContent" data-bs-theme="dark">
  <div class="bg-dark p-4">
    <h5 class="text-body-emphasis h4">Collapsed content</h5>
    <span class="text-body-secondary">Toggleable via the navbar brand.</span>
  </div>
</div>
<nav class="navbar navbar-dark bg-dark">
  <div class="container-fluid">
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarToggleExternalContent" aria-controls="navbarToggleExternalContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
  </div>
</nav>
{{</ example >}}

When you do this, we recommend including additional JavaScript to move the focus programmatically to the container when it is opened. Otherwise, keyboard users and users of assistive technologies will likely have a hard time finding the newly revealed content - particularly if the container that was opened comes before the toggler in the document’s structure. We also recommend making sure that the toggler has the `aria-controls` attribute, pointing to the `id` of the content container. In theory, this allows assistive technology users to jump directly from the toggler to the container it controls–but support for this is currently quite patchy.

### Offcanvas

Transform your expanding and collapsing navbar into an offcanvas drawer with the offcanvas component. We extend both the offcanvas default styles and use our `.navbar-expand-*` classes to create a dynamic and flexible navigation sidebar.

In the example below, to create an offcanvas navbar that is always collapsed across all breakpoints, omit the .navbar-expand-* class entirely.

{{< example >}}
<nav class="navbar">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Offcanvas navbar</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
      <div class="offcanvas-header">
        <h5 class="offcanvas-title" id="offcanvasNavbarLabel">Offcanvas</h5>
        <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
      </div>
      <div class="offcanvas-body">
        <ul class="navbar-nav justify-content-end flex-grow-1 pe-3">
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="#">Home</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Link</a>
          </li>
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              Dropdown
            </a>
            <ul class="dropdown-menu">
              <li><a class="dropdown-item" href="#">Action</a></li>
              <li><a class="dropdown-item" href="#">Another action</a></li>
              <li>
                <hr class="dropdown-divider">
              </li>
              <li><a class="dropdown-item" href="#">Something else here</a></li>
            </ul>
          </li>
        </ul>
        <form class="d-flex" role="search">
          <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
          <button class="btn btn-primary" type="submit">Search</button>
        </form>
      </div>
    </div>
  </div>
</nav>
{{</ example >}}