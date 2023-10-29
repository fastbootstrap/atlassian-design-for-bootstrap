---
layout: docs
title: Modal
description: "Modals are overlays that display content in a layer above the page requires user interaction."
toc: true
tabs: true
group: feedback
menu:
  components:
---

{{< tabs "modal" >}}
{{< tab "Overview" >}}

**Bootstrap 5 Modal dialog component**

Responsive modal dialog built with the latest Bootstrap 5. Modal is used for display content in a layer above the page, includes prompts, configurations, cookie consents, etc.

Use Bootstrap’s JavaScript modal plugin to add dialogs to your site for lightboxes, user notifications, or completely custom content.

## Modal example

Toggle a working modal demo by clicking the button below. It will slide down and fade in from the top of the page.

{{< example >}}
<button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
  Open Modal
</button>
<div class="modal fade" tabindex="-1" id="exampleModal" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum pretium nisi nunc, 
        sit amet tincidunt ipsum faucibus vitae. Pellentesque eget odio tristique, mattis elit id.
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-subtle" data-bs-dismiss="modal">Secondary Action</button>
        <button type="button" class="btn btn-primary">Confirm</button>
      </div>
    </div>
  </div>
</div>
{{</ example >}}

## How it works

Before getting started with Bootstrap’s modal component, be sure to read the following as our menu options have recently changed.

- Modals are built with HTML, CSS, and JavaScript. They're positioned over everything else in the document and remove scroll from the `<body>` so that modal content scrolls instead.
- Clicking on the modal "backdrop" will automatically close the modal.
- Bootstrap only supports one modal window at a time. Nested modals aren't supported as we believe them to be poor user experiences.
- Modals use `position: fixed`, which can sometimes be a bit particular about its rendering. Whenever possible, place your modal HTML in a top-level position to avoid potential interference from other elements. You'll likely run into issues when nesting a `.modal` within another fixed element.
- Once again, due to `position: fixed`, there are some caveats with using modals on mobile devices. 
- Due to how HTML5 defines its semantics, [the `autofocus` HTML attribute](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#attr-autofocus) has no effect in Bootstrap modals. To achieve the same effect, use some custom JavaScript:

```js
const myModal = document.getElementById('myModal')
const myInput = document.getElementById('myInput')

myModal.addEventListener('shown.bs.modal', () => {
  myInput.focus()
})
```

## Modal components

Below is a static modal example (meaning its [position]({{< docsref "position" >}}) and [display]({{< docsref "display" >}}) have been overridden). Included are the modal header, modal body (required for `padding`), and modal footer (optional). We ask that you include modal headers with dismiss actions whenever possible, or provide another explicit dismiss action.

{{< example class="bd-example-modal-static p-0" >}}
<div class="modal" tabindex="-1">
  <div class="modal-dialog shadow">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title">Modal title</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        <p class="mb-0">Modal body text goes here.</p>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-subtle" data-bs-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary">Save changes</button>
      </div>
    </div>
  </div>
</div>
{{</ example >}}

## Static backdrop

When backdrop is set to static by `data-bs-backdrop="static"`, the modal will not close when clicking outside of it. Click the button below to try it.

{{< example >}}
<button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
  Open static backdrop modal
</button>
<div class="modal fade" id="staticBackdrop" data-bs-backdrop="static"
 data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="staticBackdropLabel">Modal title</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        Sit nulla est ex deserunt exercitation anim occaecat. Nostrud ullamco 
        deserunt aute id consequat veniam incididunt duis in sint irure nisi. 
        Mollit officia cillum Lorem ullamco minim nostrud elit officia tempor esse quis.
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-subtle" data-bs-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary">Understood</button>
      </div>
    </div>
  </div>
</div>
{{</ example >}}

## Width

Modals have three optional sizes, available via modifier classes to be placed on a `.modal-dialog`. These sizes kick in at certain breakpoints to avoid horizontal scrollbars on narrower viewports.

{{< bs-table "table" >}}
| Size | Class | Modal max-width
| --- | --- | --- |
| Small | `.modal-sm` | `400px` |
| Default | <span class="text-muted">None</span> | `600px` |
| Large | `.modal-lg` | `800px` |
| Extra large | `.modal-xl` | `968px` |
{{< /bs-table >}}

Our default modal without modifier class constitutes the `“medium”` size modal.

{{< example >}}
<button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModalSm">
  Small model
</button>
<button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModalMd">
  Medium model
</button>
<button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModalLg">
  Large model
</button>
<button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModalXl">
  X-large model
</button>
{{</ example >}}

<div class="modal fade" id="exampleModalSm" tabindex="-1" aria-hidden="true">
  <div class="modal-dialog modal-sm">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title">Easily set up your own projects</h5>
      </div>
      <div class="modal-body">
        We simplified the way you set up issue types, workflows, fields, and screens. 
        Check out the new, independent project experience to see it in action.
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-subtle" data-bs-dismiss="modal">Skip</button>
        <button type="button" class="btn btn-primary">Get started</button>
      </div>
    </div>
  </div>
</div>

<div class="modal fade" id="exampleModalMd" tabindex="-1" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title">Easily set up your own projects</h5>
      </div>
      <div class="modal-body">
        We simplified the way you set up issue types, workflows, fields, and screens. 
        Check out the new, independent project experience to see it in action.
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-subtle" data-bs-dismiss="modal">Skip</button>
        <button type="button" class="btn btn-primary">Get started</button>
      </div>
    </div>
  </div>
</div>

<div class="modal fade" id="exampleModalLg" tabindex="-1" aria-hidden="true">
  <div class="modal-dialog modal-lg">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title">Easily set up your own projects</h5>
      </div>
      <div class="modal-body">
        We simplified the way you set up issue types, workflows, fields, and screens. 
        Check out the new, independent project experience to see it in action.
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-subtle" data-bs-dismiss="modal">Skip</button>
        <button type="button" class="btn btn-primary">Get started</button>
      </div>
    </div>
  </div>
</div>


<div class="modal fade" id="exampleModalXl" tabindex="-1" aria-hidden="true">
  <div class="modal-dialog modal-xl">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title">Easily set up your own projects</h5>
      </div>
      <div class="modal-body">
        We simplified the way you set up issue types, workflows, fields, and screens. 
        Check out the new, independent project experience to see it in action.
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-subtle" data-bs-dismiss="modal">Skip</button>
        <button type="button" class="btn btn-primary">Get started</button>
      </div>
    </div>
  </div>
</div>

## Scrolling long content

By default, when modals become too long for the user’s viewport or device, they scroll independent of the page itself. You can also create a scrollable modal that allows scroll the modal body by adding `.modal-dialog-scrollable` to `.modal-dialog`.

{{< example >}}
<button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#scrollBodyModal">
  Scroll inside body
</button>
<button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#scrollViewportModal">
  Scroll inside viewport
</button>
<div class="modal fade" id="scrollBodyModal" data-bs-keyboard="false" tabindex="-1" aria-hidden="true">
  <div class="modal-dialog modal-dialog-scrollable">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title">Modal title</h5>
      </div>
      <div class="modal-body">
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In aliquet nunc massa, sed posuere eros feugiat ac. Ut vestibulum purus vitae tempor laoreet. Pellentesque mollis cursus ipsum ut interdum. Fusce faucibus a dolor vitae condimentum. Nulla id ex interdum, consequat risus non, elementum lectus. Vestibulum felis dolor, iaculis vel pellentesque sit amet, mattis in lacus. Donec eu aliquam turpis. Pellentesque dignissim sem id sem commodo viverra. Maecenas a ligula eu quam tincidunt pellentesque at at nunc. Quisque euismod, nisi fermentum consequat euismod, sapien urna malesuada augue, a pellentesque mi felis at magna. Nam dignissim arcu ac dolor iaculis faucibus.</p>
        <p>In interdum eget lorem in tincidunt. Mauris cursus sollicitudin consectetur. Ut sodales pulvinar ante vitae gravida. Etiam ipsum eros, egestas eget ex vitae, lobortis vestibulum est. Cras eu dui consectetur, porttitor tortor nec, rutrum tellus. Pellentesque sagittis, leo vel pulvinar tempor, neque nisl vestibulum ante, non cursus quam lectus suscipit turpis. Cras aliquam massa orci, quis convallis odio imperdiet tempus. Pellentesque facilisis et purus id semper. Quisque mi nisl, consectetur auctor nunc non, tempor porta sapien. Pellentesque et velit quis leo accumsan ultrices sed et felis. Proin malesuada mi eu odio dignissim, et vehicula ante ultrices.</p>
        <p>Aenean et posuere tortor. Suspendisse eleifend ipsum ligula. Fusce quis ornare enim. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque auctor velit in purus malesuada aliquam. Praesent vehicula blandit erat, nec vulputate turpis posuere vitae. Nam pharetra vehicula tortor, ut molestie ligula tincidunt ut. Aliquam sit amet venenatis ipsum, at commodo nunc. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ullamcorper nibh et mauris vulputate fringilla.</p>
        <p>Phasellus vitae justo sem. Phasellus eget rutrum massa, vitae pharetra orci. Phasellus sollicitudin bibendum urna in suscipit. Morbi posuere nulla at lorem sagittis blandit. Quisque non velit eget metus vehicula suscipit sed ut nunc. Etiam sollicitudin sagittis mi, sed tincidunt neque feugiat vel. Fusce elementum aliquet feugiat. Morbi et egestas dui, eget dignissim leo. Etiam a facilisis lacus. Integer convallis sodales magna, dignissim fermentum purus facilisis eu. Pellentesque eleifend id nulla et mattis. Morbi quis sodales augue, ut convallis nisi. Nulla pharetra magna dolor, et rhoncus urna pulvinar eget.</p>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-primary" data-bs-dismiss="modal">Close</button>
      </div>
    </div>
  </div>
</div>
<div class="modal fade" id="scrollViewportModal" data-bs-keyboard="false" tabindex="-1" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title">Modal title</h5>       
      </div>
      <div class="modal-body">
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In aliquet nunc massa, sed posuere eros feugiat ac. Ut vestibulum purus vitae tempor laoreet. Pellentesque mollis cursus ipsum ut interdum. Fusce faucibus a dolor vitae condimentum. Nulla id ex interdum, consequat risus non, elementum lectus. Vestibulum felis dolor, iaculis vel pellentesque sit amet, mattis in lacus. Donec eu aliquam turpis. Pellentesque dignissim sem id sem commodo viverra. Maecenas a ligula eu quam tincidunt pellentesque at at nunc. Quisque euismod, nisi fermentum consequat euismod, sapien urna malesuada augue, a pellentesque mi felis at magna. Nam dignissim arcu ac dolor iaculis faucibus.</p>
        <p>In interdum eget lorem in tincidunt. Mauris cursus sollicitudin consectetur. Ut sodales pulvinar ante vitae gravida. Etiam ipsum eros, egestas eget ex vitae, lobortis vestibulum est. Cras eu dui consectetur, porttitor tortor nec, rutrum tellus. Pellentesque sagittis, leo vel pulvinar tempor, neque nisl vestibulum ante, non cursus quam lectus suscipit turpis. Cras aliquam massa orci, quis convallis odio imperdiet tempus. Pellentesque facilisis et purus id semper. Quisque mi nisl, consectetur auctor nunc non, tempor porta sapien. Pellentesque et velit quis leo accumsan ultrices sed et felis. Proin malesuada mi eu odio dignissim, et vehicula ante ultrices.</p>
        <p>Aenean et posuere tortor. Suspendisse eleifend ipsum ligula. Fusce quis ornare enim. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque auctor velit in purus malesuada aliquam. Praesent vehicula blandit erat, nec vulputate turpis posuere vitae. Nam pharetra vehicula tortor, ut molestie ligula tincidunt ut. Aliquam sit amet venenatis ipsum, at commodo nunc. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ullamcorper nibh et mauris vulputate fringilla.</p>
        <p>Phasellus vitae justo sem. Phasellus eget rutrum massa, vitae pharetra orci. Phasellus sollicitudin bibendum urna in suscipit. Morbi posuere nulla at lorem sagittis blandit. Quisque non velit eget metus vehicula suscipit sed ut nunc. Etiam sollicitudin sagittis mi, sed tincidunt neque feugiat vel. Fusce elementum aliquet feugiat. Morbi et egestas dui, eget dignissim leo. Etiam a facilisis lacus. Integer convallis sodales magna, dignissim fermentum purus facilisis eu. Pellentesque eleifend id nulla et mattis. Morbi quis sodales augue, ut convallis nisi. Nulla pharetra magna dolor, et rhoncus urna pulvinar eget.</p>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-primary" data-bs-dismiss="modal">Close</button>
      </div>
    </div>
  </div>
</div>
{{</ example >}}

## Vertically centered

Add `.modal-dialog-centered` to `.modal-dialog` to vertically center the modal.

{{< example >}}
<button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModalCenter">
  Vertically centered modal
</button>
<button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModalCenteredScrollable">
  Vertically centered scrollable modal
</button>
<div class="modal fade" id="exampleModalCenter" data-bs-keyboard="false" tabindex="-1" aria-hidden="true">
  <div class="modal-dialog modal-dialog-centered">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title">Modal title</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum pretium nisi nunc, 
        sit amet tincidunt ipsum faucibus vitae. Pellentesque eget odio tristique, mattis elit id.
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-subtle" data-bs-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary">Save changes</button>
      </div>
    </div>
  </div>
</div>
<div class="modal fade" id="exampleModalCenteredScrollable" data-bs-keyboard="false" tabindex="-1" aria-hidden="true">
  <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title">Modal title</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
         <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In aliquet nunc massa, sed posuere eros feugiat ac. Ut vestibulum purus vitae tempor laoreet. Pellentesque mollis cursus ipsum ut interdum. Fusce faucibus a dolor vitae condimentum. Nulla id ex interdum, consequat risus non, elementum lectus. Vestibulum felis dolor, iaculis vel pellentesque sit amet, mattis in lacus. Donec eu aliquam turpis. Pellentesque dignissim sem id sem commodo viverra. Maecenas a ligula eu quam tincidunt pellentesque at at nunc. Quisque euismod, nisi fermentum consequat euismod, sapien urna malesuada augue, a pellentesque mi felis at magna. Nam dignissim arcu ac dolor iaculis faucibus.</p>
        <p>In interdum eget lorem in tincidunt. Mauris cursus sollicitudin consectetur. Ut sodales pulvinar ante vitae gravida. Etiam ipsum eros, egestas eget ex vitae, lobortis vestibulum est. Cras eu dui consectetur, porttitor tortor nec, rutrum tellus. Pellentesque sagittis, leo vel pulvinar tempor, neque nisl vestibulum ante, non cursus quam lectus suscipit turpis. Cras aliquam massa orci, quis convallis odio imperdiet tempus. Pellentesque facilisis et purus id semper. Quisque mi nisl, consectetur auctor nunc non, tempor porta sapien. Pellentesque et velit quis leo accumsan ultrices sed et felis. Proin malesuada mi eu odio dignissim, et vehicula ante ultrices.</p>
        <p>Aenean et posuere tortor. Suspendisse eleifend ipsum ligula. Fusce quis ornare enim. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque auctor velit in purus malesuada aliquam. Praesent vehicula blandit erat, nec vulputate turpis posuere vitae. Nam pharetra vehicula tortor, ut molestie ligula tincidunt ut. Aliquam sit amet venenatis ipsum, at commodo nunc. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ullamcorper nibh et mauris vulputate fringilla.</p>
        <p>Phasellus vitae justo sem. Phasellus eget rutrum massa, vitae pharetra orci. Phasellus sollicitudin bibendum urna in suscipit. Morbi posuere nulla at lorem sagittis blandit. Quisque non velit eget metus vehicula suscipit sed ut nunc. Etiam sollicitudin sagittis mi, sed tincidunt neque feugiat vel. Fusce elementum aliquet feugiat. Morbi et egestas dui, eget dignissim leo. Etiam a facilisis lacus. Integer convallis sodales magna, dignissim fermentum purus facilisis eu. Pellentesque eleifend id nulla et mattis. Morbi quis sodales augue, ut convallis nisi. Nulla pharetra magna dolor, et rhoncus urna pulvinar eget.</p>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-subtle" data-bs-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary">Save changes</button>
      </div>
    </div>
  </div>
</div>
{{</ example >}}

## Tooltips and popovers 

[Tooltips]({{< ref "tooltip" >}}) and [popovers]({{< ref "popover" >}}) can be placed within modals as needed. When modals are closed, any tooltips and popovers within are also automatically dismissed.

{{< example >}}
<button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModalPopovers">
  Open model
</button>
<div class="modal fade" id="exampleModalPopovers" tabindex="-1" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title">Modal title</h5>
      </div>
      <div class="modal-body">
        <h5>Popover in a modal</h5>
        <p>This <a href="#" role="button" class="btn btn-primary" data-bs-toggle="popover" title="Popover title" data-bs-content="Popover body content is set in this attribute.">button</a> triggers a popover on click.</p>
        <hr>
        <h5>Tooltips in a modal</h5>
        <p><a href="#" data-bs-toggle="tooltip" title="Tooltip">This link</a> and <a href="#" data-bs-toggle="tooltip" title="Tooltip">that link</a> have tooltips on hover.</p>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-subtle" data-bs-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary">Save changes</button>
      </div>
    </div>
  </div>
</div>
{{</ example >}}

## Using the grid 

Utilize the Bootstrap grid system within a modal by nesting `.container-fluid` within the `.modal-body`. Then, use the normal grid system classes as you would anywhere else.

{{< example class="bd-example-grid" >}}
<button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#gridSystemModal">
  Open model
</button>
<div class="modal fade" id="gridSystemModal" tabindex="-1" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title">Modal title</h5>
      </div>
      <div class="modal-body">
        <div class="container-fluid">
          <div class="row">
            <div class="col-md-4 ">.col-md-4</div>
            <div class="col-md-4 ms-auto">.col-md-4 .ms-auto</div>
          </div>
          <div class="row">
            <div class="col-md-3 ms-auto">.col-md-3 .ms-auto</div>
            <div class="col-md-2 ms-auto">.col-md-2 .ms-auto</div>
          </div>
          <div class="row">
            <div class="col-md-6 ms-auto">.col-md-6 .ms-auto</div>
          </div>
          <div class="row">
            <div class="col-sm-9">
              Level 1: .col-sm-9
              <div class="row">
                <div class="col-8 col-sm-6">Level 2: .col-8 .col-sm-6</div>
                <div class="col-4 col-sm-6">Level 2: .col-4 .col-sm-6</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-subtle" data-bs-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary">Save changes</button>
      </div>
    </div>
  </div>
</div>
{{</ example >}}

## Multiple modals

Toggle between multiple modals with some clever placement of the `data-bs-target` and `data-bs-toggle` attributes. For example, you could toggle a password reset modal from within an already open sign in modal. 

{{< callout warning>}}
Multiple modals cannot be open at the same time. This method simply toggles between two separate modals.
{{</ callout >}}

{{< example >}}
<button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModalToggle">
  Open: first modal
</button>
<div class="modal fade" id="exampleModalToggle" aria-hidden="true" tabindex="-1">
  <div class="modal-dialog modal-lg">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalToggleLabel">First Modal</h5>
      </div>
      <div class="modal-body">
        Show a second modal and hide this one with the button below.
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-subtle" data-bs-dismiss="modal">Close</button>
        <button class="btn btn-primary" data-bs-target="#exampleModalToggle2" data-bs-toggle="modal">
          Open: second modal
        </button>
      </div>
    </div>
  </div>
</div>
<div class="modal fade" id="exampleModalToggle2" aria-hidden="true" tabindex="-1">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalToggleLabel2">Second modal</h5>        
      </div>
      <div class="modal-body">
        Hide this modal and show the first with the button below.
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-subtle" data-bs-dismiss="modal">Close</button>
        <button class="btn btn-primary" data-bs-target="#exampleModalToggle" data-bs-toggle="modal">
          Back: first modal
        </button>
      </div>
    </div>
  </div>
</div>
{{</ example >}}

## Fullscreen Modals

Another override is the option to pop up a modal that covers the user viewport, available via modifier classes that are placed on a `.modal-dialog`.

{{< bs-table >}}
| Class | Availability |
| --- | --- | --- |
| `.modal-fullscreen` | Always |
| `.modal-fullscreen-sm-down` | `576px` |
| `.modal-fullscreen-md-down` | `768px` |
| `.modal-fullscreen-lg-down` | `992px` |
| `.modal-fullscreen-xl-down` | `1200px` |
| `.modal-fullscreen-xxl-down` | `1400px` |
{{< /bs-table >}}


<div class="bd-example">
  <button type="button" class="btn btn-primary mb-2" data-bs-toggle="modal" data-bs-target="#exampleModalFullscreen">Full screen</button>
  <button type="button" class="btn btn-primary mb-2" data-bs-toggle="modal" data-bs-target="#exampleModalFullscreenSm">Full screen below sm</button>
  <button type="button" class="btn btn-primary mb-2" data-bs-toggle="modal" data-bs-target="#exampleModalFullscreenMd">Full screen below md</button>
  <button type="button" class="btn btn-primary mb-2" data-bs-toggle="modal" data-bs-target="#exampleModalFullscreenLg">Full screen below lg</button>
  <button type="button" class="btn btn-primary mb-2" data-bs-toggle="modal" data-bs-target="#exampleModalFullscreenXl">Full screen below xl</button>
  <button type="button" class="btn btn-primary mb-2" data-bs-toggle="modal" data-bs-target="#exampleModalFullscreenXxl">Full screen below xxl</button>
</div>

<div class="modal fade" id="exampleModalFullscreen" tabindex="-1" aria-labelledby="exampleModalFullscreenLabel" aria-hidden="true">
  <div class="modal-dialog modal-fullscreen">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title h4" id="exampleModalFullscreenLabel">Full screen modal</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        ...
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-primary" data-bs-dismiss="modal">Close</button>
      </div>
    </div>
  </div>
</div>

<div class="modal fade" id="exampleModalFullscreenSm" tabindex="-1" aria-labelledby="exampleModalFullscreenSmLabel" aria-hidden="true">
  <div class="modal-dialog modal-fullscreen-sm-down">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title h4" id="exampleModalFullscreenSmLabel">Full screen below sm</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        ...
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-primary" data-bs-dismiss="modal">Close</button>
      </div>
    </div>
  </div>
</div>

<div class="modal fade" id="exampleModalFullscreenMd" tabindex="-1" aria-labelledby="exampleModalFullscreenMdLabel" aria-hidden="true">
  <div class="modal-dialog modal-fullscreen-md-down">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title h4" id="exampleModalFullscreenMdLabel">Full screen below md</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        ...
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-primary" data-bs-dismiss="modal">Close</button>
      </div>
    </div>
  </div>
</div>

<div class="modal fade" id="exampleModalFullscreenLg" tabindex="-1" aria-labelledby="exampleModalFullscreenLgLabel" aria-hidden="true">
  <div class="modal-dialog modal-fullscreen-lg-down">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title h4" id="exampleModalFullscreenLgLabel">Full screen below lg</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        ...
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-primary" data-bs-dismiss="modal">Close</button>
      </div>
    </div>
  </div>
</div>

<div class="modal fade" id="exampleModalFullscreenXl" tabindex="-1" aria-labelledby="exampleModalFullscreenXlLabel" aria-hidden="true">
  <div class="modal-dialog modal-fullscreen-xl-down">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title h4" id="exampleModalFullscreenXlLabel">Full screen below xl</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        ...
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-primary" data-bs-dismiss="modal">Close</button>
      </div>
    </div>
  </div>
</div>

<div class="modal fade" id="exampleModalFullscreenXxl" tabindex="-1" aria-labelledby="exampleModalFullscreenXxlLabel" aria-hidden="true">
  <div class="modal-dialog modal-fullscreen-xxl-down">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title h4" id="exampleModalFullscreenXxlLabel">Full screen below xxl</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        ...
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-primary" data-bs-dismiss="modal">Close</button>
      </div>
    </div>
  </div>
</div>

```html
<div class="modal-dialog modal-fullscreen">
  ...
</div>

<div class="modal-dialog modal-fullscreen-sm-down">
  ...
</div>
```

## Change animation

The `$modal-fade-transform` variable determines the transform state of `.modal-dialog` before the modal fade-in animation, the `$modal-show-transform` variable determines the transform of `.modal-dialog` at the end of the modal fade-in animation.

If you want for example a zoom-in animation, you can set `$modal-fade-transform: scale(.8)`.

## Remove animation

For modals that simply appear rather than fade in to view, remove the `.fade` class from your modal markup.

```html
<div class="modal" tabindex="-1" aria-labelledby="..." aria-hidden="true">
  ...
</div>
```

## Dynamic heights

If the height of a modal changes while it is open, you should call `myModal.handleUpdate()` to readjust the modal's position in case a scrollbar appears.

## Embedding YouTube videos

Embedding YouTube videos in modals requires additional JavaScript not in Bootstrap to automatically stop playback and more. See [this helpful Stack Overflow post](https://stackoverflow.com/questions/18622508/bootstrap-3-and-youtube-in-modal) for more information.

## Accessibility 

(WAI-ARIA: https://www.w3.org/WAI/ARIA/apg/patterns/dialogmodal/)

- Be sure to add `aria-labelledby="id..."`, referencing the modal title, to `.modal`. Additionally, you may give a description of your modal dialog with `aria-describedby="id..."` on `.modal`. Note that you don’t need to add `role="dialog"` since we already add it via JavaScript.
- The [WAI-ARIA authoring practices](https://www.w3.org/WAI/ARIA/apg/example-index/dialog-modal/dialog.html) can help you set the initial focus on the most relevant element, based on your modal content.

## Related

- [Offcanvas]({{< docsref "offcanvas" >}})

{{</ tab >}}

{{< tab "API" >}}
## Usage

The modal plugin toggles your hidden content on demand, via data attributes or JavaScript. It also overrides default scrolling behavior and generates a `.modal-backdrop` to provide a click area for dismissing shown modals when clicking outside the modal.

### Use data attributes

#### Toggle

Activate a modal without writing JavaScript. Set `data-bs-toggle="modal"` on a controller element, like a button, along with a `data-bs-target="#foo"` or `href="#foo"` to target a specific modal to toggle.

```html
<button type="button" data-bs-toggle="modal" data-bs-target="#myModal">Launch modal</button>
```

#### Dismiss

{{% js-dismiss "modal" %}}

{{< callout warning >}}
While both ways to dismiss a modal are supported, keep in mind that dismissing from outside a modal does not match the [ARIA Authoring Practices Guide dialog (modal) pattern](https://www.w3.org/WAI/ARIA/apg/patterns/dialogmodal/). Do this at your own risk.
{{< /callout >}}

### Use JavaScript

Create a modal with a single line of JavaScript:

```js
const myModal = new bootstrap.Modal(document.getElementById('myModal'), options)
// or
const myModalAlternative = new bootstrap.Modal('#myModal', options)
```

## Options

{{< markdown >}}
{{< partial "js-data-attributes.md" >}}
{{< /markdown >}}

{{< bs-table "table" >}}
| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `backdrop` | boolean, `'static'` | `true` | Includes a modal-backdrop element. Alternatively, specify `static` for a backdrop which doesn't close the modal when clicked. |
| `focus` | boolean | `true` | Puts the focus on the modal when initialized. |
| `keyboard` | boolean | `true` | Closes the modal when escape key is pressed. |
{{< /bs-table >}}

## Methods

{{< callout danger >}}
{{< partial "callout-danger-async-methods.md" >}}
{{< /callout >}}

### Passing options

Activates your content as a modal. Accepts an optional options `object`.

```js
const myModal = new bootstrap.Modal('#myModal', {
  keyboard: false
})
```

{{< bs-table "table" >}}
| Method | Description |
| --- | --- |
| `dispose` | Destroys an element's modal. (Removes stored data on the DOM element) |
| `getInstance` | *Static* method which allows you to get the modal instance associated with a DOM element. |
| `getOrCreateInstance` | *Static* method which allows you to get the modal instance associated with a DOM element, or create a new one in case it wasn't initialized. |
| `handleUpdate` | Manually readjust the modal's position if the height of a modal changes while it is open (i.e. in case a scrollbar appears). |
| `hide` | Manually hides a modal. **Returns to the caller before the modal has actually been hidden** (i.e. before the `hidden.bs.modal` event occurs). |
| `show` | Manually opens a modal. **Returns to the caller before the modal has actually been shown** (i.e. before the `shown.bs.modal` event occurs). Also, you can pass a DOM element as an argument that can be received in the modal events (as the `relatedTarget` property). (i.e. `const modalToggle = document.getElementById('toggleMyModal'); myModal.show(modalToggle)` |
| `toggle` | Manually toggles a modal. **Returns to the caller before the modal has actually been shown or hidden** (i.e. before the `shown.bs.modal` or `hidden.bs.modal` event occurs). |
{{< /bs-table >}}

## Events

Bootstrap's modal class exposes a few events for hooking into modal functionality. All modal events are fired at the modal itself (i.e. at the `<div class="modal">`).

{{< bs-table >}}
| Event | Description |
| --- | --- |
| `hide.bs.modal` | This event is fired immediately when the `hide` instance method has been called. |
| `hidden.bs.modal` | This event is fired when the modal has finished being hidden from the user (will wait for CSS transitions to complete). |
| `hidePrevented.bs.modal` | This event is fired when the modal is shown, its backdrop is `static` and a click outside of the modal is performed. The event is also fired when the escape key is pressed and the `keyboard` option is set to `false`. |
| `show.bs.modal` | This event fires immediately when the `show` instance method is called. If caused by a click, the clicked element is available as the `relatedTarget` property of the event. |
| `shown.bs.modal` | This event is fired when the modal has been made visible to the user (will wait for CSS transitions to complete). If caused by a click, the clicked element is available as the `relatedTarget` property of the event. |
{{< /bs-table >}}

```js
const myModalEl = document.getElementById('myModal')
myModalEl.addEventListener('hidden.bs.modal', event => {
  // do something...
})
```

{{</ tab >}}
{{</ tabs >}}