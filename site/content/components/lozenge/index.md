---
layout: docs
title: Lozenge
description: "Lozenge is a visual indicator used to highlight an item's status for quick recognition."
toc: true
group: data-display
status: new
menu:
  components:
---

**Bootstrap 5 Lozenge component**

Lozenge from Atlassian design that used to highlight an item's status for quick recognition by the user. Lozenge is similar as the [badge component]({{< docsref "badge" >}}).

## Basic example

The base Lozenge style does not apply a background color.

{{< example class="d-flex flex-column flex-wrap align-items-start gap-2" >}}
<span class="fs-sm fw-semibold">Subtle</span>
<div>
  <span class="lozenge bg-neutral-40 text-neutral-500">Default</span>
  <span class="lozenge bg-green-50 text-green-500">Success</span>
  <span class="lozenge bg-red-50 text-red-500">Removed</span>
  <span class="lozenge bg-purple-50 text-purple-500">New</span>
  <span class="lozenge bg-blue-50 text-blue-500">In progress</span>
  <span class="lozenge bg-yellow-75">Moved</span>
</div>
<span class="fs-sm fw-semibold">Bold</span>
<div>
  <span class="lozenge bg-neutral-500 text-white">Default</span>
  <span class="lozenge bg-green-400 text-white">Success</span>
  <span class="lozenge bg-red-400 text-white">Removed</span>
  <span class="lozenge bg-purple-400 text-white">New</span>
  <span class="lozenge bg-blue-400 text-white">In progress</span>
  <span class="lozenge bg-yellow-500">Moved</span>
</div>
{{</ example >}}

## Overflowed Lozenge

For longer text in lozenges, you can add a `.text-truncate` class to truncate the text with an ellipsis. Avoid truncation wherever possible by using shorter text in lozenges.

## Status list

Lozenges are either subtle or bold and use color to indicate meanings that users can learn and recognize across products.

{{< bs-table "table" >}}
| Status | Description |
| --- | --- |
| `Default` | For a general status or state, such as: to do, unavailable, minor, not started. |
| `Success` | Represent constructive status or state, such as: available, completed, approved, resolved, added. |
| `Removed` | Represent a critical or problematic status or state, such as: errors, declined, deleted, failed. |
| `In progress` | Represent an in progress or current status or state, such as: in progress, open, modified. |
| `New` | Represent a new status or state, such as: new, created, help. |
| `Moved` | Represent a status or state for items that have been changed and require attention, such as: busy, blocked, missing, warning.|
{{< /bs-table >}}

{{< example >}}
<span class="lozenge lozenge-success text-truncate" style="width: 150px;">long text which truncates</span>
{{</ example >}}

## Related

- [Badge]({{< docsref "badge" >}})
- [Tag]({{< docsref "tag" >}})