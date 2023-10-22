---
layout: docs
title: Pointer Events
description: "Utilities for controlling whether an element responds to pointer events."
toc: true
group: interactivity
menu:
  docs:
---

Bootstrap provides `.pe-none` and `.pe-auto` classes to prevent or add element interactions.

## Quick reference

{{< class-api "pointer-events" >}}

The `.pe-none` class (and the `pointer-events` CSS property it sets) only prevents interactions with a pointer (mouse, stylus, touch). Links and controls with `.pe-none` are, by default, still focusable and actionable for keyboard users. To ensure that they are completely neutralized even for keyboard users, you may need to add further attributes such as `tabindex="-1"` (to prevent them from receiving keyboard focus) and `aria-disabled="true"` (to convey the fact they are effectively disabled to assistive technologies), and possibly use JavaScript to completely prevent them from being actionable.

If possible, the simpler solution is:

- For form controls, add the `disabled` HTML attribute.
* For links, remove the `href` attribute, making it a non-interactive anchor or placeholder link.

## Basic usage

{{< example class="bg-neutral-subtler bg-grid-slate-100" >}}
<p><a href="#" class="pe-none" tabindex="-1" aria-disabled="true">This link</a> can not be clicked.</p>
<p><a href="#" class="pe-auto">This link</a> can be clicked (this is default behavior).</p>
<p class="pe-none"><a href="#" tabindex="-1" aria-disabled="true">This link</a> can not be clicked because the <code>pointer-events</code> property is inherited from its parent. However, <a href="#" class="pe-auto">this link</a> has a <code>pe-auto</code> class and can be clicked.</p>
{{< /example >}}

