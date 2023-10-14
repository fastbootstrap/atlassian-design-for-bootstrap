---
layout: docs
title: Blankslate
description: "Blankslates are used as placeholders when there is a lack of content within a page or section."
toc: true
group: surfaces
status: new
menu:
  components:
---

**Bootstrap 5 Blankslate component**

Responsive blankslate built with the latest Bootstrap 5. Blankslate component is used as placeholders when there is a lack of content within a page or section.

Blankslate as placeholders to tell users what can do next when there is no content has been added yet, or is temporarily empty due to the nature of the feature. 

## Empty state

Empty states are used when a list, table, or chart has no items or data to show. This is an opportunity to provide explanation or guidance to help merchants progress.

Wrap some content in the outer `.blankslate` wrapper and add the `.blankslate-heading` class to headings to give it the blankslate appearance.

{{< example class="py-0" >}}
<div class="blankslate">
  <img class="blankslate-top-img" src="/images/blankslate/1.png" />
  <div class="blankslate-body">
    <h4>You don't have access to this issue</h4>
    <p>
      Make sure the issue exists in this project. If it does, ask a project
      admin for permission to see the project's issues.
    </p>
  </div>
  <div class="blankslate-actions">
    <button class="btn btn-default" type="button">Secondary action</button>
    <button class="btn btn-primary" type="button">Primary action</button>
  </div>
</div>
{{</ example >}}

## Show image

Add the `.blankslate-top-img` class to the image.

{{< example class="py-0" >}}
<div class="blankslate">
  <img class="blankslate-top-img" src="/images/blankslate/2.png" />
  <div class="blankslate-body">
    <h4>I am the header</h4>
  </div>
</div>
{{</ example >}}

## Actions

Add the `.blankslate-actions` to any button or link wrappers.

{{< example class="py-0" >}}
<div class="blankslate">
  <h4>You don't have access to this issue</h4>
  <p>Make sure the issue exists in this project. 
  If it does, ask a project admin for permission to see the project's issues.</p>
  <div class="blankslate-actions">
    <button class="btn btn-primary" type="button">Request access</button>
    <button class="btn btn-default" type="button">View permissions</button>
  </div>
  <div class="blankslate-actions">
    <a class="fw-semibold" href="#">Learn more</a>    
  </div>
</div>
{{</ example >}}

## Widths

Use `.blankslate-narrow` or `.mw-100` classes to change the blankslate default width: `464px`.

### Narrow width

Use `.blankslate-narrow` to narrow the width of blankslate container.

{{< example class="py-0" >}}
<div class="blankslate blankslate-narrow">
  <img class="blankslate-top-img" src="/images/blankslate/1.png" />
  <h4>You don't have access to this issue</h4>
  <p>Make sure the issue exists in this project. 
    If it does, ask a project admin for permission to see the project's issues.</p>
  <div class="blankslate-actions">
    <button class="btn btn-primary" type="button">Request access</button>
  </div>
</div>
{{</ example >}}

### Full width

Use `.mw-100` to expand the width of blankslate to the entire available width of parent container.

{{< example class="py-0" >}}
<div class="blankslate mw-100">
  <img class="blankslate-top-img" src="/images/blankslate/1.png" />
  <h4>You don't have access to this issue</h4>
  <p>Make sure the issue exists in this project. 
    If it does, ask a project admin for permission to see the project's issues.</p>
  <div class="blankslate-actions">
    <button class="btn btn-primary" type="button">Request access</button>
  </div>
</div>
{{</ example >}}