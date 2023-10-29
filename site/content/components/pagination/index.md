---
layout: docs
title: Pagination
description: "Pagination allows you to divide large amounts of content into smaller chunks across multiple pages."
toc: true
group: navigation
menu:
  components:
---

**Bootstrap 5 Pagination component**

Documentation and examples for showing pagination to indicate a series of related content exists across multiple pages.


Use pagination when there are too many results to show on the one page, so the user isn't overwhelmed by too much information.

## Pagination example

Pagination is built with list HTML elements so screen readers can announce the number of available links. Use a wrapping `<nav>` element to identify it as a navigation section to screen readers and other assistive technologies.

In addition, as pages likely have more than one such navigation section, it’s advisable to provide a descriptive `aria-label` for the `<nav>` to reflect its purpose. For example, if the pagination component is used to navigate between a set of search results, an appropriate label could be `aria-label="Search results pages"`.

{{< example >}}
<nav aria-label="Page navigation example">
  <ul class="pagination">
    <li class="page-item">
      <a class="page-link" href="#"><i class="fas fa-angle-left"></i></a>
    </li>
    <li class="page-item active"><a class="page-link" href="#">1</a></li>
    <li class="page-item"><a class="page-link" href="#">2</a></li>
    <li class="page-item"><a class="page-link" href="#">3</a></li>
    <li class="page-item"><a class="page-link" href="#">4</a></li>
    <li class="page-item"><a class="page-link" href="#">5</a></li>
    <li class="page-item"><a class="page-link" href="#">9</a></li>
    <li class="page-item">
      <a class="page-link" href="#"><i class="fas fa-angle-right"></i></a>
    </li>
  </ul>
</nav>
{{</ example >}}

## Custom icons 

Looking to use an icon or symbol in place of text for some pagination links? Be sure to provide proper screen reader support with `aria` attributes.

{{< example >}}
<nav aria-label="Page navigation example">
  <ul class="pagination">
    <li class="page-item">
      <a class="page-link" href="#" aria-label="Previous">
        <span aria-hidden="true">&laquo;</span>
      </a>
    </li>
    <li class="page-item"><a class="page-link" href="#">1</a></li>
    <li class="page-item"><a class="page-link" href="#">2</a></li>
    <li class="page-item"><a class="page-link" href="#">3</a></li>
    <li class="page-item">
      <a class="page-link" href="#" aria-label="Next">
        <span aria-hidden="true">&raquo;</span>
      </a>
    </li>
  </ul>
</nav>
{{</ example >}}

Use SVG as icon.

{{< example >}}
<nav aria-label="Page navigation example">
  <ul class="pagination">
    <li class="page-item">
      <a class="page-link" href="#" aria-label="Previous">
        <span aria-hidden="true">
          <svg width="24" height="24" viewBox="0 0 24 24" role="presentation">
            <path fill="currentColor" fill-rule="evenodd" d="M9.005 10.995l4.593-4.593a.99.99 0 111.4 1.4l-3.9 3.9 3.9 3.9a.99.99 0 01-1.4 1.4L9.005 12.41a1 1 0 010-1.414z"></path>
          </svg>
        </span>
      </a>
    </li>
    <li class="page-item active"><a class="page-link" href="#">1</a></li>
    <li class="page-item"><a class="page-link" href="#">2</a></li>
    <li class="page-item"><a class="page-link" href="#">3</a></li>
    <li class="page-item">
      <a class="page-link" href="#" aria-label="Next">
        <span aria-hidden="true">
          <svg width="24" height="24" viewBox="0 0 24 24" role="presentation">
            <path fill="currentColor" fill-rule="evenodd" d="M14.995 10.995a1 1 0 010 1.414l-4.593 4.593a.99.99 0 01-1.4-1.4l3.9-3.9-3.9-3.9a.99.99 0 011.4-1.4l4.593 4.593z"></path>
          </svg>
        </span>
      </a>
    </li>
  </ul>
</nav>
{{</ example >}}

## Disabled and active states

Pagination links are customizable for different circumstances. Use `.disabled` for links that appear un-clickable and `.active` to indicate the current page.

### Active

{{< example >}}
<nav aria-label="...">
  <ul class="pagination">
    <li class="page-item">
      <a class="page-link" href="#"><i class="fas fa-angle-left"></i></a>
    </li>
    <li class="page-item"><a class="page-link" href="#">1</a></li>
    <li class="page-item active" aria-current="page">
      <a class="page-link" href="#">2</a>
    </li>
    <li class="page-item"><a class="page-link" href="#">3</a></li>
    <li class="page-item">
      <a class="page-link" href="#"><i class="fas fa-angle-right"></i></a>
    </li>
  </ul>
</nav>
{{</ example >}}

### Disabled

While the `.disable`d class uses `pointer-events: none` to try to disable the link functionality of `<a>`s, that CSS property is not yet standardized and doesn’t account for keyboard navigation. As such, you should always add `tabindex="-1"` on disabled links and use custom JavaScript to fully disable their functionality.

{{< example >}}
<nav aria-label="...">
  <ul class="pagination">
    <li class="page-item">
      <a class="page-link disabled" href="#"><i class="fas fa-angle-left"></i></a>
    </li>
    <li class="page-item"><a class="page-link" href="#">1</a></li>
    <li class="page-item">
      <a class="page-link" href="#">2</a>
    </li>
    <li class="page-item"><a class="page-link" href="#">3</a></li>
    <li class="page-item">
      <a class="page-link disabled" href="#"><i class="fas fa-angle-right"></i></a>
    </li>
  </ul>
</nav>
{{</ example >}}

## Pagination size

Fancy larger or smaller pagination? Add `.pagination-lg` or `.pagination-sm` for additional sizes.

{{< example class="d-flex flex-column flex-wrap gap-3" >}}
<nav>
  <ul class="pagination pagination-sm">
    <li class="page-item">
      <a class="page-link" href="#"><i class="fas fa-angle-left"></i></a>
    </li>
    <li class="page-item active" aria-current="page">
      <span class="page-link">1</span>
    </li>
    <li class="page-item"><a class="page-link" href="#">2</a></li>
    <li class="page-item"><a class="page-link" href="#">3</a></li>
    <li class="page-item"><a class="page-link" href="#">4</a></li>
    <li class="page-item"><a class="page-link" href="#">5</a></li>
    <li class="page-item">
      <a class="page-link" href="#"><i class="fas fa-angle-right"></i></a>
    </li>
  </ul>
</nav>

<nav>
  <ul class="pagination">
    <li class="page-item">
      <a class="page-link" href="#"><i class="fas fa-angle-left"></i></a>
    </li>
    <li class="page-item active" aria-current="page">
      <span class="page-link">1</span>
    </li>
    <li class="page-item"><a class="page-link" href="#">2</a></li>
    <li class="page-item"><a class="page-link" href="#">3</a></li>
    <li class="page-item"><a class="page-link" href="#">4</a></li>
    <li class="page-item"><a class="page-link" href="#">5</a></li>
    <li class="page-item">
      <a class="page-link" href="#"><i class="fas fa-angle-right"></i></a>
    </li>
  </ul>
</nav>

<nav>
  <ul class="pagination pagination-lg">
    <li class="page-item">
      <a class="page-link" href="#"><i class="fas fa-angle-left"></i></a>
    </li>
    <li class="page-item active" aria-current="page">
      <span class="page-link">1</span>
    </li>
    <li class="page-item"><a class="page-link" href="#">2</a></li>
    <li class="page-item"><a class="page-link" href="#">3</a></li>
    <li class="page-item"><a class="page-link" href="#">4</a></li>
    <li class="page-item"><a class="page-link" href="#">5</a></li>
    <li class="page-item">
      <a class="page-link" href="#"><i class="fas fa-angle-right"></i></a>
    </li>
  </ul>
</nav>
{{</ example >}}

## Colors

Use the `.text-bg-{color}` to `.page-link` to modify the current active page backround.

{{< example >}}
<nav aria-label="Page navigation example">
  <ul class="pagination">
    <li class="page-item">
      <a class="page-link disabled" href="#"><i class="fas fa-angle-left"></i></a>
    </li>
    <li class="page-item active"><a class="page-link text-bg-primary" href="#">1</a></li>
    <li class="page-item"><a class="page-link" href="#">2</a></li>
    <li class="page-item"><a class="page-link" href="#">3</a></li>
    <li class="page-item"><a class="page-link" href="#">4</a></li>
    <li class="page-item"><a class="page-link" href="#">5</a></li>
    <li class="page-item">
      <a class="page-link" href="#"><i class="fas fa-angle-right"></i></a>
    </li>
  </ul>
</nav>

<nav aria-label="Page navigation example">
  <ul class="pagination">
    <li class="page-item">
      <a class="page-link disabled" href="#"><i class="fas fa-angle-left"></i></a>
    </li>
    <li class="page-item active"><a class="page-link text-bg-secondary" href="#">1</a></li>
    <li class="page-item"><a class="page-link" href="#">2</a></li>
    <li class="page-item"><a class="page-link" href="#">3</a></li>
    <li class="page-item"><a class="page-link" href="#">4</a></li>
    <li class="page-item"><a class="page-link" href="#">5</a></li>
    <li class="page-item">
      <a class="page-link" href="#"><i class="fas fa-angle-right"></i></a>
    </li>
  </ul>
</nav>

<nav aria-label="Page navigation example">
  <ul class="pagination">
    <li class="page-item">
      <a class="page-link disabled" href="#"><i class="fas fa-angle-left"></i></a>
    </li>
    <li class="page-item active"><a class="page-link text-bg-light" href="#">1</a></li>
    <li class="page-item"><a class="page-link" href="#">2</a></li>
    <li class="page-item"><a class="page-link" href="#">3</a></li>
    <li class="page-item"><a class="page-link" href="#">4</a></li>
    <li class="page-item"><a class="page-link" href="#">5</a></li>
    <li class="page-item">
      <a class="page-link" href="#"><i class="fas fa-angle-right"></i></a>
    </li>
  </ul>
</nav>
{{</ example >}}

## Circular pagination

Add a `.rounded-circle` class to the `.page-link` makes to circle.

{{< example >}}
<nav aria-label="Page navigation example">
  <ul class="pagination">
    <li class="page-item active"><a class="page-link rounded-circle" href="#">1</a></li>
    <li class="page-item"><a class="page-link rounded-circle" href="#">2</a></li>
    <li class="page-item"><a class="page-link rounded-circle" href="#">3</a></li>
    <li class="page-item"><a class="page-link rounded-circle" href="#">4</a></li>
    <li class="page-item"><a class="page-link rounded-circle" href="#">5</a></li>
  </ul>
</nav>
{{</ example >}}

## Rounded pagination

Add a `rounded-*` class to the `.page-link`.

{{< example >}}
<nav aria-label="Page navigation example">
  <ul class="pagination">
    <li class="page-item active"><a class="page-link rounded-0" href="#">1</a></li>
    <li class="page-item"><a class="page-link rounded-0" href="#">2</a></li>
    <li class="page-item"><a class="page-link rounded-0" href="#">3</a></li>
    <li class="page-item"><a class="page-link rounded-0" href="#">4</a></li>
    <li class="page-item"><a class="page-link rounded-0" href="#">5</a></li>
  </ul>
</nav>
{{</ example >}}

## Alignment

Change the alignment of pagination components with [flexbox utilities]({{< docsref "justify-content" >}}). For example, with `.justify-content-center`:

{{< example >}}
<nav aria-label="Page navigation example">
  <ul class="pagination justify-content-center">
    <li class="page-item disabled">
      <a class="page-link">Previous</a>
    </li>
    <li class="page-item"><a class="page-link" href="#">1</a></li>
    <li class="page-item"><a class="page-link" href="#">2</a></li>
    <li class="page-item"><a class="page-link" href="#">3</a></li>
    <li class="page-item">
      <a class="page-link" href="#">Next</a>
    </li>
  </ul>
</nav>
{{</ example >}}

Or with `.justify-content-end`:

{{< example >}}
<nav aria-label="Page navigation example">
  <ul class="pagination justify-content-end">
    <li class="page-item disabled">
      <a class="page-link">Previous</a>
    </li>
    <li class="page-item"><a class="page-link" href="#">1</a></li>
    <li class="page-item"><a class="page-link" href="#">2</a></li>
    <li class="page-item"><a class="page-link" href="#">3</a></li>
    <li class="page-item">
      <a class="page-link" href="#">Next</a>
    </li>
  </ul>
</nav>
{{</ example >}}