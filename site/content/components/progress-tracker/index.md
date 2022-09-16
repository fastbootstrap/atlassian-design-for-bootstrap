---
layout: docs
title: Progress Tracker
description: "Progress tracker displays a user’s steps and progress through a set of steps."
toc: true
tabs: true
status: new
group: feedback
menu:
  components:
---

{{< tabs "progress-tracker" >}}
{{< tab "Overview" >}}

**Bootstrap 5 Progress Tracker component**

Progress tracker component provide the status of each step within a multistep process and give visibility on the length of the overall sequence.

## Basic example

In the example below, can click the next and prev button to changing the current progress of actions.

<div class="bd-example bd-example-progressTracker">
<ol class="progress-tracker" id="basicProgressTracker">
  <li class="progress-tracker-item completed" data-bs-target="#basicExampleStep1">
    <span class="progress-tracker-label">Step 1</span>
  </li>
  <li class="progress-tracker-item active" data-bs-target="#basicExampleStep2">
    <span class="progress-tracker-label">Step 2</span>
  </li>
  <li class="progress-tracker-item" data-bs-target="#basicExampleStep3">
    <span class="progress-tracker-label">Step 3</span>
  </li>
  <li class="progress-tracker-item" data-bs-target="#basicExampleStep4">
    <span class="progress-tracker-label">Step 4</span>
  </li>
</ol>
<div class="tab-content mt-3 mb-5">
  <div class="tab-pane" id="basicExampleStep1">
    <p class="fs-5">Step 1 content</p>
  </div>
  <div class="tab-pane show active" id="basicExampleStep2">
    <p class="fs-5">Step 2 content</p>
  </div>
  <div class="tab-pane" id="basicExampleStep3">
    <p class="fs-5">Step 3 content</p>
  </div>
  <div class="tab-pane" id="basicExampleStep4">
    <p class="fs-5">Step 4 content</p>
  </div>
</div>
<div class="d-flex gap-2">
<button class="btn btn-default" data-bs-step="reset" data-bs-target="#basicProgressTracker">Reset</button>
  <button class="btn btn-subtle ms-auto" data-bs-step="prev" data-bs-target="#basicProgressTracker"><i class="fa-solid fa-arrow-left"></i> Prev</button>
  <button class="btn btn-subtle" data-bs-step="next" data-bs-target="#basicProgressTracker">Next <i class="fa-solid fa-arrow-right"></i></button>
</div>
</div>

```html
<ol class="progress-tracker" id="basicProgressTracker">
  <li class="progress-tracker-item completed" aria-current="true" data-bs-target="#basicExampleStep1">
    <span class="progress-tracker-label">Step 1</span>
  </li>
  <li class="progress-tracker-item active" aria-current="true" data-bs-target="#basicExampleStep2">
    <span class="progress-tracker-label">Step 2</span>
  </li>
  <li class="progress-tracker-item" data-bs-target="#basicExampleStep3">
    <span class="progress-tracker-label">Step 3</span>
  </li>
  <li class="progress-tracker-item" data-bs-target="#basicExampleStep4">
    <span class="progress-tracker-label">Step 4</span>
  </li>
</ol>
<div class="tab-content">
  <div class="tab-pane" id="basicExampleStep1">Step 1 content</div>
  <div class="tab-pane active" id="basicExampleStep2">Step 2 content</div>
  <div class="tab-pane" id="basicExampleStep3">Step 3 content</div>
  <div class="tab-pane" id="basicExampleStep4">Step 4 content</div>
</div>
```

## Completed

Add a `.completed` class to `.progress-tracker-item` to marked current step have been completed.

{{< example >}}
<ol class="progress-tracker">
  <li class="progress-tracker-item completed">
      <span class="progress-tracker-label">Step 1</span>
  </li>
  <li class="progress-tracker-item completed">
    <span class="progress-tracker-label">Step 2</span>
  </li>
  <li class="progress-tracker-item completed">
    <span class="progress-tracker-label">Step 3</span>
  </li>
  <li class="progress-tracker-item completed">
    <span class="progress-tracker-label">Step 4</span>
  </li>
</ol>
{{</ example >}}

## Disabled a step

Use a `.disabled` to disable one of progress steps. Since this progress step is disabled will not allows prev and next to this step.

{{< example >}}
<ol class="progress-tracker">
  <li class="progress-tracker-item disabled completed">
      <span class="progress-tracker-label">Disabled step</span>
  </li>
  <li class="progress-tracker-item completed">
    <span class="progress-tracker-label">Completed step</span>
  </li>
  <li class="progress-tracker-item active" aria-current="true">
    <span class="progress-tracker-label">Current step</span>
  </li>
  <li class="progress-tracker-item">
    <span class="progress-tracker-label">Uncompleted step 1</span>
  </li>
</ol>
{{</ example >}}

## Sizes

The progress tracker component has 1 additional size: `.progress-tracker-sm` for small of the progress tracker.

{{< example class="d-flex flex-column gap-3">}}
<div>
  <p class="text-muted fs-sm">Small</p>
  <ol class="progress-tracker progress-tracker-sm">
    <li class="progress-tracker-item completed">
      <span class="progress-tracker-label">Step 1 </span>
    </li>
    <li class="progress-tracker-item active">
      <span class="progress-tracker-label">Step 2</span>
    </li>
    <li class="progress-tracker-item">
      <span class="progress-tracker-label">Step 3</span>
    </li>
  </ol>
</div>
<div>
  <p class="text-muted fs-sm">Large</p>
  <ol class="progress-tracker">
    <li class="progress-tracker-item completed">
      <span class="progress-tracker-label">Step 1</span>
    </li>
    <li class="progress-tracker-item active">
      <span class="progress-tracker-label">Step 2</span>
    </li>
    <li class="progress-tracker-item">
      <span class="progress-tracker-label">Step 3</span>
    </li>
  </ol>
</div>
{{</ example >}}

## Related

- [Progress bar]({{< docsref "progress-bar" >}})
- [Progress indicator]({{< docsref "progress-indicator" >}})

{{</ tab >}}
{{< tab "API" >}}

## Usage

### Via JavaScript

The progress tracker component only manually to active with:

```js
const progressTracker = new bootstrap.ProgressTracker('#myProgressTracker');
```

## Methods

You can create a progress tracker instance with the progress tracker constructor with an optional options `object`.

```js
const myProgressTrackerElement = document.querySelector('#myProgressTracker');
const progressTracker = new bootstrap.ProgressTracker(myProgressTrackerElement);
```

{{< bs-table >}}
| Method | Description |
| --- | --- |
| `dispose` | Destroys an element's carousel. (Removes stored data on the DOM element) |
| `getInstance` | Static method which allows you to get the progress tracker instance associated to a DOM element, you can use it like this: `bootstrap.ProgressTracker.getInstance(element)` |
| `getOrCreateInstance` | Static method which returns a tracker instance instance associated to a DOM element or create a new one in case it wasn't initialized. You can use it like this: `bootstrap.ProgressTracker.getOrCreateInstance(element)` |
| `next` | Selects and focuses the next step in list. |
| `prev` | Selects and focuses the previous step in list. |
| `reset` | Resets all steps to initial state. |
{{< /bs-table >}}

## Events

The product tracker component exposes a few events for hooking into the product tracker.

{{< bs-table >}}
| Event type | Description |
| --- | --- |
| `change.fbs.progressTracker` | This event fires when the step is to be change. |
| `changed.fbs.progressTracker` | This event fires after the step has been changed. |
{{< /bs-table >}}

All event have the following additional properties:

- `selectedIndex`: The index of the selected step in the step list
- `selectedStep`: The DOM element of the selected step
- `previouslySelectedIndex`: The index of the previous step in the step list
- `previouslySelectedStep`: The DOM element of the previous step

```js
const myProgressTracker = document.getElementById('myProgressTracker')
myProgressTracker.addEventListener('change.fbs.progressTracker', event => {
  // do something, for instance, explicitly move focus to the most appropriate element,
  // so it doesn't get lost/reset to the start of the page
  // document.getElementById('...').focus()
})
```
{{</ tab >}}
{{</ tabs >}}