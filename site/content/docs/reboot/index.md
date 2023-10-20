---
layout: docs
title: Reboot
description: "A collection of element-specific CSS to provide an elegant, consistent, and simple baseline to build upon."
toc: true
group: base-stypes
menu:
  docs:    
    weight: 10
---

For improved cross-browser rendering, we use Reboot to correct inconsistencies across browsers and devices while providing slightly more opinionated resets to common HTML elements.

## Overview

Reboot builds upon Normalize, providing many HTML elements with somewhat opinionated styles using only element selectors. Additional styling is done only with classes. For example, we reboot some `<table>` styles for a simpler baseline and later provide `.table`, `.table-bordered`, and more.

Here are our guidelines and reasons for choosing what to override in Reboot:

- Update some browser default values to use `rem`s instead of `em`s for scalable component spacing.
- Avoid `margin-top`. Vertical margins can collapse, yielding unexpected results. More importantly though, a single direction of `margin` is a simpler mental model.
- For easier scaling across device sizes, block elements should use `rem`s for `margin`s.
- Keep declarations of `font`-related properties to a minimum, using `inherit` whenever possible.

## CSS variables

With Bootstrap v5.1.1, we standardized our required `@import`s across all our CSS bundles (including `bootstrap.css`, `bootstrap-reboot.css`, and `bootstrap-grid.css`) to include `_root.scss`. This adds `:root` level CSS variables to all bundles, regardless of how many of them are used in that bundle. Ultimately Bootstrap 5 will continue to see more CSS variables added over time, in order to provide more real-time customization without the need to always recompile Sass. Our approach is to take our source Sass variables and transform them into CSS variables. That way, even if you don't use CSS variables, you still have all the power of Sass. **This is still in-progress and will take time to fully implement.**

## Page defaults

The `<html>` and `<body>` elements are updated to provide better page-wide defaults. More specifically:

- The `box-sizing` is globally set on every element—including `*::before` and `*::after`, to `border-box`. This ensures that the declared width of element is never exceeded due to padding or border.
  - No base `font-size` is declared on the `<html>`, but `16px` is assumed (the browser default). `font-size: 1rem` is applied on the `<body>` for easy responsive type-scaling via media queries while respecting user preferences and ensuring a more accessible approach. This browser default can be overridden by modifying the `$font-size-root` variable.
- The `<body>` also sets a global `font-family`, `font-weight`, `line-height`, and `color`. This is inherited later by some form elements to prevent font inconsistencies.

## Headings and paragraphs

All heading elements—e.g., `<h1>`—and `<p>` are reset to have their `margin-top` removed. Headings have `margin-bottom: .5rem` added and paragraphs `margin-bottom: 1rem` for easy spacing.

{{< bs-table "table" >}}
| Heading | Example |
| --- | --- |
| `<h1></h1>` | <span class="h1">h1. Bootstrap heading</span> |
| `<h2></h2>` | <span class="h2">h2. Bootstrap heading</span> |
| `<h3></h3>` | <span class="h3">h3. Bootstrap heading</span> |
| `<h4></h4>` | <span class="h4">h4. Bootstrap heading</span> |
| `<h5></h5>` | <span class="h5">h5. Bootstrap heading</span> |
| `<h6></h6>` | <span class="h6">h6. Bootstrap heading</span> |
{{< /bs-table >}}

## Horizontal rules

The `<hr>` element has been simplified. Similar to browser defaults, `<hr>`s are styled via `border-top`, have a default `opacity: .25`, and automatically inherit their `border-color` via `color`, including when `color` is set via the parent. They can be modified with text, border, and opacity utilities.

{{< example >}}
<hr>
<div class="text-success">
  <hr>
</div>
<hr class="border border-danger border-2 opacity-50">
<hr class="border border-primary border-3 opacity-75">
{{< /example >}}

## Lists

All lists—`<ul>`, `<ol>`, and `<dl>`—have their `margin-top` removed and a `margin-bottom: 1rem`. Nested lists have no `margin-bottom`. We've also reset the `padding-left` on `<ul>` and `<ol>` elements.

### Unordered list

{{< example >}}
<ul>
  <li>All lists have their top margin removed</li>
  <li>And their bottom margin normalized</li>
  <li>
    Nested lists have no bottom margin
    <ul>
      <li>This way they have a more even appearance</li>
      <li>Particularly when followed by more list items</li>
    </ul>
  </li>
  <li>The left padding has also been reset</li>
</ul>

{{</ example >}}

### Ordered list

{{< example >}}
<ol>
  <li>Here’s an ordered list</li>
  <li>With a few list items</li>
  <li>It has the same overall look</li>
  <li>As the previous unordered list</li>
</ol>
{{</ example >}}

For simpler styling, clear hierarchy, and better spacing, description lists have updated `margin`s. `<dd>`s reset `margin-left` to `0` and add `margin-bottom: .5rem`. `<dt>`s are **bolded**.

### Description list

{{< example >}}
<dl>
  <dt>Description lists</dt>
  <dd>A description list is perfect for defining terms.</dd>
  <dt>Term</dt>
  <dd>Definition for the term.</dd>
  <dd>A second definition for the same term.</dd>
  <dt>Another term</dt>
  <dd>Definition for this other term.</dd>
</dl>
{{</ example >}}

### Unstyled 

Remove the default `list-style` and left margin on list items (immediate children only). This only applies to immediate children list items, meaning you will need to add the class for any nested lists as well.

{{< example >}}
<ul class="list-unstyled">
  <li>This is a list.</li>
  <li>It appears completely unstyled.</li>
  <li>Structurally, it's still a list.</li>
  <li>However, this style only applies to immediate child elements.</li>
  <li>Nested lists:
    <ul>
      <li>are unaffected by this style</li>
      <li>will still show a bullet</li>
      <li>and have appropriate left margin</li>
    </ul>
  </li>
  <li>This may still come in handy in some situations.</li>
</ul>
{{</ example >}}

### Inline items

Remove a list’s bullets and apply some light `margin` with a combination of two classes, `.list-inline` and `.list-inline-item`.

{{< example >}}
<ul class="list-inline">
  <li class="list-inline-item text-primary">This is a list item.</li>
  <li class="list-inline-item text-secondary">And another one.</li>
  <li class="list-inline-item text-success">But they're displayed inline.</li>
</ul>
{{</ example >}}

## Inline code

Wrap inline snippets of code with `<code>`. Be sure to escape HTML angle brackets.

{{< example >}}
For example, <code>&lt;section&gt;</code> should be wrapped as inline.
{{< /example >}}

## Code blocks

Use `<pre>`s for multiple lines of code. Once again, be sure to escape any angle brackets in the code for proper rendering. The `<pre>` element is reset to remove its `margin-top` and use `rem` units for its `margin-bottom`.

{{< example >}}
<pre><code>&lt;p&gt;Sample text here...&lt;/p&gt;
&lt;p&gt;And another line of sample text here...&lt;/p&gt;
</code></pre>
{{< /example >}}

## Variables

For indicating variables use the `<var>` tag.

{{< example >}}
<var>y</var> = <var>m</var><var>x</var> + <var>b</var>
{{< /example >}}

## Inline text elements

Styling for common inline HTML5 elements.

{{< example >}}
<p>You can use the mark tag to <mark>highlight</mark> text.</p>
<p><del>This line of text is meant to be treated as deleted text.</del></p>
<p><s>This line of text is meant to be treated as no longer accurate.</s></p>
<p><ins>This line of text is meant to be treated as an addition to the document.</ins></p>
<p><u>This line of text will render as underlined.</u></p>
<p><small>This line of text is meant to be treated as fine print.</small></p>
<p><strong>This line rendered as bold text.</strong></p>
<p><em>This line rendered as italicized text.</em></p>
{{</ example >}}

Beware that those tags should be used for semantic purpose:

- `<mark>` represents text which is marked or highlighted for reference or notation purposes.
- `<small>` represents side-comments and small print, like copyright and legal text.
- `<s>` represents element that are no longer relevant or no longer accurate.
- `<u>` represents a span of inline text which should be rendered in a way that indicates that it has a non-textual annotation.

If you want to style your text, you should use the following classes instead:

- `.mark` will apply the same styles as `<mark>`.
- `.small` will apply the same styles as `<small>`.
- `.text-decoration-underline` will apply the same styles as `<u>`.
- `.text-decoration-line-through` will apply the same styles as `<s>`.

While not shown above, feel free to use `<b>` and `<i>` in HTML5. `<b>` is meant to highlight words or phrases without conveying additional importance, while `<i>` is mostly for voice, technical terms, etc.

## User input

Use the `<kbd>` to indicate input that is typically entered via keyboard.

{{< example >}}
To switch directories, type <kbd>cd</kbd> followed by the name of the directory.<br>
To edit settings, press <kbd><kbd>ctrl</kbd> + <kbd>,</kbd></kbd>
{{< /example >}}

## Sample output

For indicating sample output from a program use the `<samp>` tag.

{{< example >}}
<samp>This text is meant to be treated as sample output from a computer program.</samp>
{{< /example >}}

## Table

Tables are slightly adjusted to style `<caption>`s, collapse borders, and ensure consistent `text-align` throughout. Additional changes for borders, padding, and more come with [the `table` component]({{< docsref "table" >}}).

<div class="bd-example">
<table class="table">
  <caption>
    This is an example table, and this is its caption to describe the contents.
  </caption>
  <thead>
    <tr>
      <th>Table heading</th>
      <th>Table heading</th>
      <th>Table heading</th>
      <th>Table heading</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Table cell</td>
      <td>Table cell</td>
      <td>Table cell</td>
      <td>Table cell</td>
    </tr>
    <tr>
      <td>Table cell</td>
      <td>Table cell</td>
      <td>Table cell</td>
      <td>Table cell</td>
    </tr>
    <tr>
      <td>Table cell</td>
      <td>Table cell</td>
      <td>Table cell</td>
      <td>Table cell</td>
    </tr>
  </tbody>
</table>
</div>

## Forms

Various form elements have been rebooted for simpler base styles. Here are some of the most notable changes:

- `<fieldset>`s have no borders, padding, or margin so they can be easily used as wrappers for individual inputs or groups of inputs.
- `<legend>`s, like fieldsets, have also been restyled to be displayed as a heading of sorts.
- `<label>`s are set to `display: inline-block` to allow `margin` to be applied.
- `<input>`s, `<select>`s, `<textarea>`s, and `<button>`s are mostly addressed by Normalize, but Reboot removes their `margin` and sets `line-height: inherit`, too.
- `<textarea>`s are modified to only be resizable vertically as horizontal resizing often "breaks" page layout.
- `<button>`s and `<input>` button elements have `cursor: pointer` when `:not(:disabled)`.

See [Form component]({{< docsref "form" >}})

### Pointers on buttons

Reboot includes an enhancement for `role="button"` to change the default cursor to `pointer`. Add this attribute to elements to help indicate elements are interactive. This role isn't necessary for `<button>` elements, which get their own `cursor` change.

{{< example >}}
<span role="button" tabindex="0">Non-button element button</span>
{{< /example >}}

## Abbreviations

Stylized implementation of HTML's `<abbr>` element for abbreviations and acronyms to show the expanded version on hover. Abbreviations have a default underline and gain a help cursor to provide additional context on hover and to users of assistive technologies.

Add `.initialism` to an abbreviation for a slightly smaller font-size.

{{< example >}}
<p><abbr title="attribute">attr</abbr></p>
<p><abbr title="HyperText Markup Language" class="initialism">HTML</abbr></p>
{{< /example >}}

## Blockquote

The default `margin` on blockquotes is `1em 40px`, so we reset that to `0 0 1rem` for something more consistent with other elements.

{{< example >}}
<blockquote class="blockquote">
  <p>A well-known quote, contained in a blockquote element.</p>
</blockquote>
<p>Someone famous in <cite title="Source Title">Source Title</cite></p>
{{</ example >}}

### Naming a source

The HTML spec requires that blockquote attribution be placed outside the `<blockquote>`. When providing attribution, wrap your `<blockquote>` in a `<figure>` and use a `<figcaption>` or a block level element (e.g.,` <p>`) with the `.blockquote-footer` class. Be sure to wrap the name of the source work in `<cite>` as well.

{{< example >}}
<figure>
  <blockquote class="blockquote">
    <p>A well-known quote, contained in a blockquote element.</p>
  </blockquote>
  <figcaption class="blockquote-footer">
    Someone famous in <cite title="Source Title">Source Title</cite>
  </figcaption>
</figure>
{{</ example >}}


## Misc elements

### Address

The `<address>` element is updated to reset the browser default `font-style` from `italic` to `normal`. `line-height` is also now inherited, and `margin-bottom: 1rem` has been added. `<address>`s are for presenting contact information for the nearest ancestor (or an entire body of work). Preserve formatting by ending lines with `<br>`.

{{< example >}}
<address>
  <strong>Twitter, Inc.</strong><br>
  1355 Market St, Suite 900<br>
  San Francisco, CA 94103<br>
  <abbr title="Phone">P:</abbr> (123) 456-7890
</address>

<address>
  <strong>Full Name</strong><br>
  <a href="mailto:first.last@example.com">first.last@example.com</a>
</address>
{{</ example >}}

### Inline elements

The `<abbr>` element receives basic styling to make it stand out amongst paragraph text.

{{< example >}}
The <abbr title="HyperText Markup Language">HTML</abbr> abbreviation element.
{{</ example >}}

### Summary

The default `cursor` on summary is `text`, so we reset that to `pointer` to convey that the element can be interacted with by clicking on it.

{{< example >}}
<details>
  <summary>Some details</summary>
  <p>More info about the details.</p>
</details>

<details open>
  <summary>Even more details</summary>
  <p>Here are even more details about the details.</p>
</details>
{{</ example >}}

## HTML5 `[hidden]` attribute

HTML5 adds [a new global attribute named `[hidden]`](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/hidden), which is styled as `display: none` by default. Borrowing an idea from [PureCSS](https://purecss.io/), we improve upon this default by making `[hidden] { display: none !important; }` to help prevent its `display` from getting accidentally overridden.

```html
<input type="text" hidden>
```

{{< callout warning >}}
##### jQuery incompatibility

`[hidden]` is not compatible with jQuery's `$(...).hide()` and `$(...).show()` methods. Therefore, we don't currently especially endorse `[hidden]` over other techniques for managing the `display` of elements.
{{< /callout >}}

To merely toggle the visibility of an element, meaning its `display` is not modified and the element can still affect the flow of the document, use [the `.invisible` class]({{< docsref "visibility" >}}) instead.

