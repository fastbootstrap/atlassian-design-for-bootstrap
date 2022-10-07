---
layout: docs
title: Rating
description: "Rating provides rating to an item or experience，and can allow the user to submit a rating of their own."
toc: true
tabs: true
status: new
group: feedback
menu:
  components:
---

{{< tabs >}}
{{< tab "Overview" >}}
**Bootstrap 5 Rating component**

The Rating component provides the end-user to rating to an item or experience such as an image, a forum post, an item for sale in a marketplace, and more. This rating component supports both SVG and Icons.

Rating component is pure CSS component by default.

## Basic example 

Add `[data-fbs-toggle="rating"]` or manually active by JS to enable plugin to interactive.

- `.rating`: The container of rating component
  - `.rating-item`: The container of the rating's item, it usually used to wrapped input or image.
  - `.rating-icon`: A image container, you can put any SVG or Icons here. The first element in `.rating-item` is for empty icon; the second element is for filling icon.
- `data-fbs-toggle="rating"` is required if want to enable rating plugin.

{{< example class="d-flex flex-column gap-3 align-items-center" >}}
<div class="rating" data-fbs-toggle="rating">
  <label class="rating-item active">
    <span class="rating-icon"><i class="fa-regular fa-star"></i></span>
    <span class="rating-icon"><i class="fa-solid fa-star"></i></span>
  </label> 
  <label class="rating-item active">
    <span class="rating-icon"><i class="fa-regular fa-star"></i></span>
    <span class="rating-icon"><i class="fa-solid fa-star"></i></span>
  </label>
  <label class="rating-item">
    <span class="rating-icon"><i class="fa-regular fa-star"></i></span>
    <span class="rating-icon"><i class="fa-solid fa-star"></i></span>
  </label>
  <label class="rating-item">
    <span class="rating-icon"><i class="fa-regular fa-star"></i></span>
    <span class="rating-icon"><i class="fa-solid fa-star"></i></span>
  </label>
  <label class="rating-item">
    <span class="rating-icon"><i class="fa-regular fa-star"></i></span>
    <span class="rating-icon"><i class="fa-solid fa-star"></i></span>
  </label>
</div>
<div class="rating" data-fbs-toggle="rating">
  <label class="rating-item">
    <span class="rating-icon"><i class="fa-regular fa-star"></i></span>
    <span class="rating-icon"><i class="fa-solid fa-star"></i></span>
  </label> 
  <label class="rating-item">
    <span class="rating-icon"><i class="fa-regular fa-star"></i></span>
    <span class="rating-icon"><i class="fa-solid fa-star"></i></span>
  </label>
  <label class="rating-item">
    <span class="rating-icon"><i class="fa-regular fa-star"></i></span>
    <span class="rating-icon"><i class="fa-solid fa-star"></i></span>
  </label>
  <label class="rating-item">
    <span class="rating-icon"><i class="fa-regular fa-star"></i></span>
    <span class="rating-icon"><i class="fa-solid fa-star"></i></span>
  </label>
  <label class="rating-item">
    <span class="rating-icon"><i class="fa-regular fa-star"></i></span>
    <span class="rating-icon"><i class="fa-solid fa-star"></i></span>
  </label>
</div>
{{</ example >}}

## Hover feedback

You can display a label on hover to help the user pick the correct rating value. The demo uses the `changeActive` prop.

{{< example class="bd-example-rating-feedback d-flex flex-row-reverse gap-3 justify-content-center" >}}
<div class="bd-w-16" id="rating-feedback"></div>
<div class="rating" data-fbs-toggle="rating">
  <label class="rating-item">
    <span class="rating-icon"><i class="fa-regular fa-star"></i></span>
    <span class="rating-icon"><i class="fa-solid fa-star"></i></span>
  </label> 
  <label class="rating-item">
    <span class="rating-icon"><i class="fa-regular fa-star"></i></span>
    <span class="rating-icon"><i class="fa-solid fa-star"></i></span>
  </label>
  <label class="rating-item">
    <span class="rating-icon"><i class="fa-regular fa-star"></i></span>
    <span class="rating-icon"><i class="fa-solid fa-star"></i></span>
  </label>
  <label class="rating-item">
    <span class="rating-icon"><i class="fa-regular fa-star"></i></span>
    <span class="rating-icon"><i class="fa-solid fa-star"></i></span>
  </label>
  <label class="rating-item">
    <span class="rating-icon"><i class="fa-regular fa-star"></i></span>
    <span class="rating-icon"><i class="fa-solid fa-star"></i></span>
  </label>
</div>
{{</ example >}}

## Getting ratings score

The example below shows how to getting the rating score on the server-side through the HTML [`<label>` for attribute](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/label) and the `radio input group` elements when submit a form on client-side.

{{< example class="bd-example-get-rating-value d-flex flex-column gap-3 align-items-center" >}}
<div class="rating" data-fbs-toggle="rating">
  <label class="rating-item" for="ratingBad">
    <span class="rating-icon"><i class="fa-regular fa-star"></i></span>
    <span class="rating-icon"><i class="fa-solid fa-star"></i></span>
  </label>
  <input type="radio" id="ratingBad" name="exampleRatingScore" value="1" aria-label="Bad" />
  <label class="rating-item" for="ratingPoor">
    <span class="rating-icon"><i class="fa-regular fa-star"></i></span>
    <span class="rating-icon"><i class="fa-solid fa-star"></i></span>
  </label>
  <input type="radio" id="ratingPoor" name="exampleRatingScore"  value="2" aria-label="Poor"/>
  <label class="rating-item" for="ratingOK">
    <span class="rating-icon"><i class="fa-regular fa-star"></i></span>
    <span class="rating-icon"><i class="fa-solid fa-star"></i></span>
  </label>
  <input type="radio" id="ratingOK" name="exampleRatingScore" value="3" aria-label="OK" />
  <label class="rating-item" for="ratingGood">
    <span class="rating-icon"><i class="fa-regular fa-star"></i></span>
    <span class="rating-icon"><i class="fa-solid fa-star"></i></span>
  </label>
  <input type="radio" id="ratingGood" name="exampleRatingScore" value="4" aria-label="Good" />
  <label class="rating-item" for="ratingExcellent">
    <span class="rating-icon"><i class="fa-regular fa-star"></i></span>
    <span class="rating-icon"><i class="fa-solid fa-star"></i></span>
  </label>
  <input type="radio" id="ratingExcellent" name="exampleRatingScore" value="5" aria-label="Excellent" />
</div>
<button type="button" class="btn btn-primary">Submit</button>
<div>Result: <label id="scoreResult"></label></div>
{{</ example >}}

## Custom Icons

You can use different icons in `.rating-item` for the rating.

{{< example class="d-flex flex-column gap-3 align-items-center" >}}
<div class="rating" data-fbs-toggle="rating">
  <label class="rating-item">
    <span class="rating-icon"><i class="fa-regular fa-heart"></i></span>
    <span class="rating-icon"><i class="fa-solid fa-heart"></i></span>
  </label> 
  <label class="rating-item">
    <span class="rating-icon"><i class="fa-regular fa-heart"></i></span>
    <span class="rating-icon"><i class="fa-solid fa-heart"></i></span>
  </label>
  <label class="rating-item">
    <span class="rating-icon"><i class="fa-regular fa-heart"></i></span>
    <span class="rating-icon"><i class="fa-solid fa-heart"></i></span>
  </label>
  <label class="rating-item">
    <span class="rating-icon"><i class="fa-regular fa-heart"></i></span>
    <span class="rating-icon"><i class="fa-solid fa-heart"></i></span>
  </label>
  <label class="rating-item">
    <span class="rating-icon"><i class="fa-regular fa-heart"></i></span>
    <span class="rating-icon"><i class="fa-solid fa-heart"></i></span>
  </label>
</div>
{{</ example >}}

## Readonly ratings

Add `[data-bs-readonly="true"]` to the rating component to make the rating action is readonly.

{{< example class="d-flex flex-column gap-3 align-items-center" >}}
<div class="rating" data-fbs-toggle="rating" data-bs-readonly="true">
  <label class="rating-item active">
    <span class="rating-icon"><i class="fa-regular fa-star"></i></span>
    <span class="rating-icon"><i class="fa-solid fa-star"></i></span>
  </label> 
  <label class="rating-item active">
    <span class="rating-icon"><i class="fa-regular fa-star"></i></span>
    <span class="rating-icon"><i class="fa-solid fa-star"></i></span>
  </label>
  <label class="rating-item">
    <span class="rating-icon"><i class="fa-regular fa-star"></i></span>
    <span class="rating-icon"><i class="fa-solid fa-star"></i></span>
  </label>
  <label class="rating-item">
    <span class="rating-icon"><i class="fa-regular fa-star"></i></span>
    <span class="rating-icon"><i class="fa-solid fa-star"></i></span>
  </label>
  <label class="rating-item">
    <span class="rating-icon"><i class="fa-regular fa-star"></i></span>
    <span class="rating-icon"><i class="fa-solid fa-star"></i></span>
  </label>
</div>
{{</ example >}}

## Disabled ratings

Add`.disabled` class to the rating components to makes the rating is unavilable. `.disabled` will apply the `opacity` CSS on the rating component.

{{< example class="d-flex flex-column gap-3 align-items-center" >}}
<div class="rating disabled" data-fbs-toggle="rating">
  <label class="rating-item">
    <span class="rating-icon"><i class="fa-regular fa-star"></i></span>
    <span class="rating-icon"><i class="fa-solid fa-star"></i></span>
  </label> 
  <label class="rating-item">
    <span class="rating-icon"><i class="fa-regular fa-star"></i></span>
    <span class="rating-icon"><i class="fa-solid fa-star"></i></span>
  </label>
  <label class="rating-item">
    <span class="rating-icon"><i class="fa-regular fa-star"></i></span>
    <span class="rating-icon"><i class="fa-solid fa-star"></i></span>
  </label>
  <label class="rating-item">
    <span class="rating-icon"><i class="fa-regular fa-star"></i></span>
    <span class="rating-icon"><i class="fa-solid fa-star"></i></span>
  </label>
  <label class="rating-item">
    <span class="rating-icon"><i class="fa-regular fa-star"></i></span>
    <span class="rating-icon"><i class="fa-solid fa-star"></i></span>
  </label>
</div>
{{</ example >}}

## Number of icons

If you want to display more or less icons in your rating, just adds the `.rating-item` with icons or removes a one.

{{< example class="d-flex flex-column gap-3 align-items-center" >}}
<div class="rating" data-fbs-toggle="rating">
  <label class="rating-item">
    <span class="rating-icon"><i class="fa-regular fa-star"></i></span>
    <span class="rating-icon"><i class="fa-solid fa-star"></i></span>
  </label> 
  <label class="rating-item">
    <span class="rating-icon"><i class="fa-regular fa-star"></i></span>
    <span class="rating-icon"><i class="fa-solid fa-star"></i></span>
  </label>
  <label class="rating-item">
    <span class="rating-icon"><i class="fa-regular fa-star"></i></span>
    <span class="rating-icon"><i class="fa-solid fa-star"></i></span>
  </label>
  <label class="rating-item">
    <span class="rating-icon"><i class="fa-regular fa-star"></i></span>
    <span class="rating-icon"><i class="fa-solid fa-star"></i></span>
  </label>
  <label class="rating-item">
    <span class="rating-icon"><i class="fa-regular fa-star"></i></span>
    <span class="rating-icon"><i class="fa-solid fa-star"></i></span>
  </label>
  <label class="rating-item">
    <span class="rating-icon"><i class="fa-regular fa-star"></i></span>
    <span class="rating-icon"><i class="fa-solid fa-star"></i></span>
  </label>
  <label class="rating-item">
    <span class="rating-icon"><i class="fa-regular fa-star"></i></span>
    <span class="rating-icon"><i class="fa-solid fa-star"></i></span>
  </label>
  <label class="rating-item">
    <span class="rating-icon"><i class="fa-regular fa-star"></i></span>
    <span class="rating-icon"><i class="fa-solid fa-star"></i></span>
  </label>
  <label class="rating-item">
    <span class="rating-icon"><i class="fa-regular fa-star"></i></span>
    <span class="rating-icon"><i class="fa-solid fa-star"></i></span>
  </label>
  <label class="rating-item">
    <span class="rating-icon"><i class="fa-regular fa-star"></i></span>
    <span class="rating-icon"><i class="fa-solid fa-star"></i></span>
  </label>
</div>
{{</ example >}}

## Icons custom color

Use our [text color]({{< docsref "text-color" >}}) help classes to change the icons color to fit your apps colors.

{{< example class="d-flex flex-column gap-3 align-items-center" >}}
<div class="rating text-primary" data-fbs-toggle="rating">
  <label class="rating-item active">
    <span class="rating-icon"><i class="fa-regular fa-star"></i></span>
    <span class="rating-icon"><i class="fa-solid fa-star"></i></span>
  </label> 
  <label class="rating-item active">
    <span class="rating-icon"><i class="fa-regular fa-star"></i></span>
    <span class="rating-icon"><i class="fa-solid fa-star"></i></span>
  </label>
  <label class="rating-item active text-secondary">
    <span class="rating-icon"><i class="fa-regular fa-star"></i></span>
    <span class="rating-icon"><i class="fa-solid fa-star"></i></span>
  </label>
  <label class="rating-item text-secondary">
    <span class="rating-icon"><i class="fa-regular fa-star"></i></span>
    <span class="rating-icon"><i class="fa-solid fa-star"></i></span>
  </label>
  <label class="rating-item text-secondary">
    <span class="rating-icon"><i class="fa-regular fa-star"></i></span>
    <span class="rating-icon"><i class="fa-solid fa-star"></i></span>
  </label>
</div>
{{</ example >}}

## Rating precision

Add `.w-50` class to the second icon of `.rating-icon` in the active rating to display a half of filling icon. (Notes: The API not support yet.)

{{< example class="d-flex flex-column gap-3 align-items-center" >}}
<div class="rating" data-fbs-toggle="rating" data-bs-readonly="true">
  <label class="rating-item active">
    <span class="rating-icon"><i class="fa-regular fa-star"></i></span>
    <span class="rating-icon"><i class="fa-solid fa-star"></i></span>
  </label> 
  <label class="rating-item active">
    <span class="rating-icon"><i class="fa-regular fa-star"></i></span>
    <span class="rating-icon w-50"><i class="fa-solid fa-star"></i></span>
  </label>
  <label class="rating-item">
    <span class="rating-icon"><i class="fa-regular fa-star"></i></span>
    <span class="rating-icon"><i class="fa-solid fa-star"></i></span>
  </label>
  <label class="rating-item">
    <span class="rating-icon"><i class="fa-regular fa-star"></i></span>
    <span class="rating-icon"><i class="fa-solid fa-star"></i></span>
  </label>
  <label class="rating-item">
    <span class="rating-icon"><i class="fa-regular fa-star"></i></span>
    <span class="rating-icon"><i class="fa-solid fa-star"></i></span>
  </label>
</div>
{{</ example >}}
{{</ tab >}}
{{< tab "API" >}}
## Usage

### Using data attributes
You can activate a rating component without writing any JavaScript by simply specifying `data-fbs-toggle="rating"` on an element. Use these data attributes on `.rating`.

```html
<div class="rating" data-fbs-toggle="rating">
  <label class="rating-item">...</label>
</div>
```

### Via JavaScript

Enable a rating via JavaScript with:

```js
const myRatingElement = document.querySelector('#myRating');
const rating = new bootstrap.Rating(myRatingElement);
```

## Options

{{< markdown >}}
{{< partial "js-data-attributes.md" >}}
{{< /markdown >}}

{{< bs-table >}}
| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `readonly` | boolean | `false` | If `true`, the rating can't be changed. |
{{< /bs-table >}}

## Methods

You can create a rating instance with the rating constructor, for example, to initialize with additional options:

```js
const myRatingElement = document.querySelector('#myRating')
const rating = new bootstrap.Rating(myRatingElement, {
  readonly: true
})
```


{{< bs-table >}}
| Method | Description |
| --- | --- |
| `getInstance` | Static method which allows you to get the rating instance associated to a DOM element, you can use it like this: `bootstrap.Rating.getInstance(element)` |
| `getOrCreateInstance` | Static method which returns a rating instance associated to a DOM element or create a new one in case it wasn't initialized. You can use it like this: `bootstrap.Rating.getOrCreateInstance(element)` |
{{< /bs-table >}}

## Events

The rating component exposes a few events for hooking into the rating state changing.

{{< bs-table >}}
| Event type | Description |
| --- | --- |
| `changeActive.fbs.rating` | Fired when the hover state changes. |
| `change.fbs.rating` | Fired when the rating value changes when selected one of rating. |
{{< /bs-table >}}

Both events have the following additional properties:

- `element`: The HTML element of the current active item `.rating-item`. Return `null` if no any values changed
- `index`: The index of the active item on the rating items, starts with `0`. Return `-1` if no any values changed.
{{</ tab >}}
{{</ tabs >}}