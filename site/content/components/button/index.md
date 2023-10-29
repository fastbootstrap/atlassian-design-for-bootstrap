---
layout: docs
title: Button
description: "Buttons allow users to perform an action or to navigate to another page, with a single tap."
toc: true
tabs: true
group: actions
menu:
  components:
---

{{< tabs "button" >}}
{{< tab "Overview" >}}

**Bootstrap 5 Button component**

Responsive button built with the latest Bootstrap 5. 

Use Bootstrap’s custom button styles for actions in forms, dialogs, and more with support for multiple sizes, states, and more.

## Basic class

Bootstrap has a base `.btn` class that sets up basic styles such as padding and content alignment. By default, `.btn` controls have a transparent border and background color, and lack any explicit focus and hover styles.

{{< example >}}
<button type="button" class="btn">Base Button</button>
{{</ example >}}

The `.btn` class is intended to be used in conjunction with our button variants, or to serve as a basis for your own custom styles.

{{< callout >}}
If you are using the `.btn` class on its own, remember to at least define some explicit `:focus` and/or `:focus-visible` styles.
{{</ callout >}}

## Button types

Bootstrap includes several predefined button styles, each serving its own semantic purpose, with a few extras thrown in for more control.

### Default button

<span class="lozenge new fs-sm">New Feature</span>

The default form of a button, used for most cases. They are not impactful enough to represent the primary action in a container.

Use `.btn-default` to a standard button for form actions and general page actions.

{{< example class="d-flex align-items-start gap-2 flex-wrap" >}}
<button type="button" class="btn btn-default">Default button</button>
<button type="button" class="btn btn-default" disabled>Disabled</button>
<button type="button" class="btn btn-default active">Selected</button>
{{</ example >}}

### Primary button

Use a primary button to call attention to an action on a form or to highlight the strongest call to action on a page. Primary buttons should only appear once per container (not including the application header or in a modal dialog). Not every screen requires a primary button. Add `.btn-primary`.

{{< example class="d-flex align-items-start gap-2 flex-wrap" >}}
<button type="button" class="btn btn-primary">Primary button</button>
<button type="button" class="btn btn-primary" disabled>Disabled</button>
<button type="button" class="btn btn-primary active">Selected</button>
{{</ example >}}

### Subtle button

<span class="lozenge new fs-sm">New Feature</span>

Subtle button usually for the secondary actions, such as “Cancel". Use `.btn-subtle`. 

{{< example class="d-flex align-items-start gap-2 flex-wrap" >}}
<button type="button" class="btn btn-subtle">Subtle button</button>
<button type="button" class="btn btn-subtle" disabled>Disabled</button>
<button type="button" class="btn btn-subtle active">Selected</button>
{{</ example >}}


### Link button

Use a link button to navigate to another page. These should open in the same window unless information may be lost (for example, when someone is filling out a form), or when the destination is an external site (for example, a knowledge base article). Just add `.btn-link` class to any `<a>` elements, and with `role="button"`.

{{< example class="d-flex align-items-start gap-2 flex-wrap" >}}
<a role="button" class="btn btn-link" href="#">Link button</a>
<a role="button" class="btn btn-link disabled" href="#">Disabled</a>
<a role="button" class="btn btn-link active" href="#">Selected</a>
{{</ example >}}

### Warning button

A warning button appears before we request the user to take action, usually in anticipation of a significant change. These are found mostly in confirmation modals—just add  `btn-warning`.

{{< example class="d-flex align-items-start gap-2 flex-wrap" >}}
<button type="button" class="btn btn-warning">Warning button</button>
<button class="btn btn-warning" disabled>Disabled</button>
<button type="button" class="btn btn-warning active">Selected</button>
{{</ example >}}

### Danager button

The danger button appears as a final confirmation for a destructive action such as deleting. These are found mostly in confirmation modals. Just add `.btn-danger`.

{{< example class="d-flex align-items-start gap-2 flex-wrap" >}}
<button type="button" class="btn btn-danger">Danager button</button>
<button type="button" class="btn btn-danger" disabled>Disabled</button>
<button type="button" class="btn btn-danger active">Selected</button>
{{</ example >}}

### More variants

Needs more variant button? The following buttons also supports by our theme.

{{< example class="d-flex align-items-start gap-2 flex-wrap" >}}
<button type="button" class="btn btn-secondary">Secondary button</button>
<button type="button" class="btn btn-info">Info button</button>
<button type="button" class="btn btn-light">Light button</button>
<button type="button" class="btn btn-dark">Dark button</button>
{{</ example >}}


{{< callout >}}
##### Conveying meaning to assistive technologies 

Using color to add meaning only provides a visual indication, which will not be conveyed to users of assistive technologies – such as screen readers. Ensure that information denoted by the color is either obvious from the content itself (e.g. the visible text), or is included through alternative means, such as additional text hidden with the `.visually-hidden` class.
{{</ callout >}}


## Outlined buttons

In need of a button, but not the hefty background colors they bring? Replace the default modifier classes with the `.btn-outline-*` ones to remove all background images and colors on any button.

### Standard outline

<span class="lozenge new fs-sm">New Feature</span>

Use `.btn-outline-default` for the standard button.

{{< example class="d-flex align-items-start gap-2 flex-wrap" >}}
<button type="button" class="btn btn-outline-default">Default</button>
<button type="button" class="btn btn-outline-default" disabled>Disabled</button>
<button type="button" class="btn btn-outline-default active">Selected </button>
{{</ example >}}

### More outline buttons

The below outline buttons that used by Bootstrap by add `.btn-outline-*`.

{{< example class="d-flex align-items-start gap-2 flex-wrap" >}}
<button type="button" class="btn btn-outline-primary">Primary</button>
<button type="button" class="btn btn-outline-secondary">Secondary</button>
<button type="button" class="btn btn-outline-success">Success</button>
<button type="button" class="btn btn-outline-danger">Danger</button>
<button type="button" class="btn btn-outline-warning">Warning</button>
<button type="button" class="btn btn-outline-info">Info</button>
<button type="button" class="btn btn-outline-light">Light</button>
<button type="button" class="btn btn-outline-dark">Dark</button>
{{</ example >}}

## Button states

### Disabled state

Make buttons look inactive by adding the `disabled` boolean attribute to any `<button>` element. Disabled buttons have `pointer-events: none` applied to, preventing hover and active states from triggering.

{{< example class="d-flex align-items-start gap-2 flex-wrap" >}}
<button type="button" class="btn btn-primary" disabled>Disabled button</button>
<button type="button" class="btn btn-outline-primary" disabled>Disabled outline</button>
{{</ example >}}

Disabled buttons using the `<a>` element behave a bit different:

- `<a>`s don’t support the disabled attribute, so you must add the `.disabled` class to make it visually appear disabled.
- Some future-friendly styles are included to disable all `pointer-events` on anchor buttons.
- Disabled buttons using `<a>` should include the `aria-disabled="true"` attribute to indicate the state of the element to assistive technologies.
- Disabled buttons using `<a>` should not include the `href` attribute.

{{< example >}}
<a class="btn btn-link disabled" role="button" aria-disabled="true">Disabled link</a>
{{</ example >}}


#### Link functionality caveat

To cover cases where you have to keep the `href` attribute on a disabled link, the `.disabled` class uses `pointer-events: none` to try to disable the link functionality of `<a>`s. Note that this CSS property is not yet standardized for HTML, but all modern browsers support it. In addition, even in browsers that do support `pointer-events: none`, keyboard navigation remains unaffected, meaning that sighted keyboard users and users of assistive technologies will still be able to activate these links. So to be safe, in addition to `aria-disabled="true"`, also include a `tabindex="-1"` attribute on these links to prevent them from receiving keyboard focus, and use custom JavaScript to disable their functionality altogether.

{{< example >}}
<a href="#" class="btn btn-primary disabled" tabindex="-1" role="button" aria-disabled="true">Primary link</a>
{{< /example >}}

### Selected state

Adding an `.active` to indicate the button is selected. Selected button should include the `aria-selected="true"` attribute to indicate the state of the element to assistive technologies.

{{< example >}}
<button class="btn btn-primary active" type="button" aria-selected="true">Selected button</button>
<a class="btn btn-link active" role="button" aria-selected="true">Selected link</a>
{{</ example >}}

## Rounded buttons

Add `.rounded-*` class to make the button rounded and squared. Check out our [border radius utilities]({{< docsref "border-radius" >}}) for more supported border radius.

{{< example class="d-flex align-items-start gap-2 flex-wrap" >}}
<button type="button" class="btn btn-primary rounded-0">Squared</button>
<button type="button" class="btn btn-primary rounded-2">rounded-2</button>
<button type="button" class="btn btn-primary rounded-3">rounded-3</button>
<button type="button" class="btn btn-primary rounded-pill">Pill</button>
<button type="button" class="btn btn-primary rounded-circle">C</button>
{{</ example >}}

## Colors

This component already includes several predefined button styles, each serving its own semantic purpose, with a few extras thrown in for more control. You can use the `.btn-{color}` or `.bg-{color}` to change the appearance of the button. Check out [background color]({{< docsref "background-color" >}}) and [text color]({{< docsref "text-color" >}}) for get all colors.

{{< example class="d-flex align-items-start gap-2 flex-wrap" >}}
<button type="button" class="btn btn-primary">Primary</button>
<button type="button" class="btn btn-secondary">Secondary</button>
<button type="button" class="btn btn-success">Success</button>
<button type="button" class="btn btn-info">Info</button>
<button type="button" class="btn btn-light">Light</button>
<button type="button" class="btn btn-dark">Dark</button>
{{</ example >}}

See example of [Social buttons](#social-buttons).

## Sizes 

Fancy larger or smaller buttons? Add `.btn-lg` or `.btn-sm` for additional sizes.

{{< example class="d-flex flex-column gap-4" >}}
<div>
  <button type="button" class="btn btn-default btn-sm">Small</button>
  <button type="button" class="btn btn-default">Medium</button>
  <button type="button" class="btn btn-default btn-lg">Large</button>
</div>
<div>
  <button type="button" class="btn btn-outline-default btn-sm">Small</button>
  <button type="button" class="btn btn-outline-default">Medium</button>
  <button type="button" class="btn btn-outline-default btn-lg">Large</button>
</div>
<div>
  <button type="button" class="btn btn-primary btn-sm">Small</button>
  <button type="button" class="btn btn-primary">Medium</button>
  <button type="button" class="btn btn-primary btn-lg">Large</button>
</div>
{{</ example >}}

You can even roll your own custom sizing with CSS variables: `--bs-btn-padding-y`, `--bs-btn-padding-x` and `--bs-btn-font-size`.

{{< example >}}
<button type="button" class="btn btn-primary" style="
        --bs-btn-padding-y: 0.75rem; 
        --bs-btn-padding-x: 1.25rem; 
        --bs-btn-font-size: 1rem;">
  Custom Size
</button>
{{</ example >}}

## Block buttons

Buttons can be expanded to full width to fill its parent container.

Create responsive stacks of full-width, “block buttons” like those in Bootstrap 4 with a mix of our display and gap utilities. By using utilities instead of button specific classes, we have much greater control over spacing, alignment, and responsive behaviors.

{{< example >}}
<div class="d-grid gap-2">
  <button class="btn btn-primary" type="button">Button</button>
  <button class="btn btn-primary" type="button">Button</button>
</div>
{{</ example >}}

Here we create a responsive variation, starting with vertically stacked buttons until the `md` breakpoint, where `.d-md-block` replaces the `.d-grid` class, thus nullifying the `gap-2` utility. Resize your browser to see them change.

{{< example >}}
<div class="d-grid gap-2 d-md-block">
  <button class="btn btn-primary" type="button">Button</button>
  <button class="btn btn-primary" type="button">Button</button>
</div>
{{</ example >}}


You can adjust the width of your block buttons with grid column width classes. For example, for a half-width "block button", use `.col-6`. Center it horizontally with `.mx-auto`, too.

{{< example >}}
<div class="d-grid gap-2 col-6 mx-auto">
  <button class="btn btn-primary" type="button">Button</button>
  <button class="btn btn-primary" type="button">Button</button>
</div>
{{< /example >}}

Additional utilities can be used to adjust the alignment of buttons when horizontal. Here we've taken our previous responsive example and added some flex utilities and a margin utility on the button to right align the buttons when they're no longer stacked.

{{< example >}}
<div class="d-grid gap-2 d-md-flex justify-content-md-end">
  <button class="btn btn-primary me-md-2" type="button">Button</button>
  <button class="btn btn-primary" type="button">Button</button>
</div>
{{< /example >}}

## With icons

Buttons may include an icon before or after the text.

{{< example >}}
<button class="btn btn-default"><i class="fas fa-bars"></i></button>
<button class="btn btn-default"><i class="fas fa-search"></i></button>
<button class="btn btn-default"><i class="fas fa-star"></i> Icon before</button>
<button class="btn btn-default">Icon after <i class="fas fa-star"></i> </button>
{{</ example >}}

## Button elements

The `.btn` classes are designed to be used with the `<button>` element. However, you can also use these classes on `<a>` or `<input>` elements (though some browsers may apply a slightly different rendering).

When using button classes on `<a>` elements that are used to trigger in-page functionality (like collapsing content), rather than linking to new pages or sections within the current page, these links should be given a `role="button"` to appropriately convey their purpose to assistive technologies such as screen readers.

{{< example class="d-flex align-items-start gap-2 flex-wrap" >}}
<a class="btn btn-primary" href="#" role="button">Link</a>
<button class="btn btn-primary" type="submit">Button</button>
<input class="btn btn-primary" type="button" value="Input">
<input class="btn btn-primary" type="submit" value="Submit">
<input class="btn btn-primary" type="reset" value="Reset">
{{</ example >}}

## Disable text wrapping

If you don’t want the button text to wrap, you can add the [`.text-nowrap`]({{< docsref "whitespace" >}}) class to the button. In Sass, you can set `$btn-white-space: nowrap` to disable text wrapping for each button.

## Social buttons

Combining our icons and custom colors you can create social buttons. Combining our icons and custom colors you can create social buttons. 

{{< example >}}
<a class="btn btn-primary border-0" style="background-color: #3b5998;" href="#" role="button">
  <i class="fa-brands fa-facebook-f"></i>
</a>
<a class="btn btn-primary border-0" style="background-color: #1d9bf0;" href="#" role="button">
  <i class="fa-brands fa-twitter"></i>
</a>
<a class="btn btn-primary border-0" style="background-color: #dd4b39;" href="#" role="button">
  <i class="fa-brands fa-google"></i>
</a>
<a class="btn btn-primary border-0" style="background-color: #ac2bac;" href="#" role="button">
  <i class="fa-brands fa-instagram"></i>
</a>
<a class="btn btn-primary border-0" style="background-color: #0082ca;" href="#" role="button">
  <i class="fa-brands fa-linkedin-in"></i>
</a>
<a class="btn btn-primary border-0" style="background-color: #c61118;" href="#" role="button">
  <i class="fa-brands fa-pinterest"></i>
</a>
{{</ example >}}

You also can be changed by modifying a local CSS custom property `--bs-btn-bg`,`--bs-btn-hover-bg` and `--bs-btn-active-bg`. 
See the [Bootstrap button variables](https://getbootstrap.com/docs/5.2/components/buttons/#variables).

{{< example >}}
<a class="btn btn-primary border-0" href="#" role="button"
 style="--bs-btn-bg: #1d9bf0; --bs-btn-hover-bg: #0c7abf">
  <i class="fa-brands fa-twitter"></i> Tweet
</a>
{{</ example >}}

{{</ tab >}}
{{< tab "API" >}}

## Button plugin

The button plugin allows you to create simple on/off toggle buttons.

{{< callout info >}}
Visually, these toggle buttons are identical to the [checkbox toggle buttons]({{< docsref "checkbox#checkbox-toggle-buttons" >}}). However, they are conveyed differently by assistive technologies: the checkbox toggles will be announced by screen readers as "checked"/"not checked" (since, despite their appearance, they are fundamentally still checkboxes), whereas these toggle buttons will be announced as "button"/"button pressed". The choice between these two approaches will depend on the type of toggle you are creating, and whether or not the toggle will make sense to users when announced as a checkbox or as an actual button.
{{< /callout >}}

## Toggle states

Add `data-bs-toggle="button"` to toggle a button’s active state. If you’re pre-toggling a button, you must manually add the `.active` class and `aria-pressed="true"` to ensure that it is conveyed appropriately to assistive technologies.

{{< example >}}
<button type="button" class="btn btn-primary" data-bs-toggle="button">
  Toggle button
</button>
<button type="button" class="btn btn-primary active" data-bs-toggle="button" aria-pressed="true">
  Active toggle button
</button>
<button type="button" class="btn btn-primary" disabled data-bs-toggle="button">
  Disabled toggle button
</button>
{{</ example >}}

For `<a>` element.

{{< example >}}
<a href="#" class="btn btn-primary" role="button" data-bs-toggle="button">
  Toggle link
</a>
<a href="#" class="btn btn-primary active" role="button" data-bs-toggle="button" aria-pressed="true">
  Active toggle link
</a>
<a class="btn btn-primary disabled" aria-disabled="true" role="button" data-bs-toggle="button">
  Disabled toggle link
</a>
{{</ example >}}


## Methods

You can create a button instance with the button constructor, for example:

```js
const bsButton = new bootstrap.Button('#myButton')
```

{{< bs-table "table" >}}
| Method | Description |
| --- | --- |
| `toggle` | Toggles push state. Gives the button the appearance that it has been activated. |
| `dispose` | Destroys an element's button. (Removes stored data on the DOM element) |
| `getInstance` | Static method which allows you to get the button instance associated to a DOM element, you can use it like this: `bootstrap.Button.getInstance(element)`|
| `getOrCreateInstance` | Static method which returns a button instance associated to a DOM element or create a new one in case it wasn't initialized. You can use it like this: `bootstrap.Button.getOrCreateInstance(element)` |
{{< /bs-table >}}

For example, to toggle all buttons

```js
document.querySelectorAll('.btn').forEach(buttonElement => {
  const button = bootstrap.Button.getOrCreateInstance(buttonElement)
  button.toggle()
})
```


{{</ tab >}}
{{</ tabs >}}