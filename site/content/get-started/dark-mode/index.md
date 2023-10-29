---
layout: docs
title: Dark Mode
description: "Using our new dark mode on your site."
toc: true
status: beta
menu:
  get-started:   
    weight: 20 
---

Now that dark mode is a first-class feature of many operating systems, it’s becoming more and more common to design a dark version of your website to go along with the default design.

Bootstrap now supports color modes since `v5.3.0` that support a `light mode` (default) and now `dark mode`. Color modes can be toggled globally on the <html> element, or on specific components and elements, thanks to the `data-bs-theme` attribute.

 Our new version of theme supports the dark mode now. To enable dark mode on your site just only add `data-bs-theme="dark"` attribute to the `html` element:

 ```html
<html data-bs-theme="dark">...</html>
 ```

This will apply the dark color mode on your website, includes all components and elements.

{{< bs-table >}}
| Color Mode | Description |
| --- | --- |
| `data-bs-theme="light"` | Light theme. This is default color mode |
| `data-bs-theme="dark"` | Dark theme |
{{< /bs-table >}}

## Basic usage

### Enable dark mode

Add data-bs-theme="dark" to the parent element `card`, no matter the global color mode, these card will display with the specified dark theme.

{{< example class="bg-grid-slate-100 bg-neutral-subtler p-0" show_source="false" >}}
<div class="row justify-content-center align-items-round">
  <div class="col col-md-6">
    <div class="d-flex flex-column p-8 pt-7">
      <p class="mb-2 fs-sm fw-medium">Light mode</p>
      <div class="card rounded-3 px-6 py-8 shadow-lg" data-bs-theme="light">
        <div>
          <span class="d-inline-flex align-items-center justify-content-center p-2 text-bg-purple rounded-2 shadow-lg">
            <svg class="bd-h-6 bd-w-6 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
              stroke="currentColor" aria-hidden="true">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z">
              </path>
            </svg>
          </span>
        </div>
        <h3 class="mt-5 fs-6">Writes Upside-Down</h3>
        <p class="mt-2 fs-sm">
          The Zero Gravity Pen can be used to write in any orientation, including upside-down. It even works in outer
          space.
        </p>
        <button class="btn btn-primary">Learn more</button>
      </div>
    </div>
  </div>
  <div class="col col-md-6">
    <div class="d-flex flex-column p-8 pt-7">
      <p class="mb-2 fs-sm fw-medium">Dark mode</p>
      <div class="card rounded-3 px-6 py-8 shadow-lg" data-bs-theme="dark">
        <div>
          <span class="d-inline-flex align-items-center justify-content-center p-2 text-bg-purple rounded-2 shadow-lg">
            <svg class="bd-h-6 bd-w-6 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
              stroke="currentColor" aria-hidden="true">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z">
              </path>
            </svg>
          </span>
        </div>
        <h3 class="mt-5 fs-6">Writes Upside-Down</h3>
        <p class="mt-2 fs-sm">
          The Zero Gravity Pen can be used to write in any orientation, including upside-down. It even works in outer
          space.
        </p>
        <button class="btn btn-primary">Learn more</button>
      </div>
    </div>
  </div>
</div>
{{</ example >}}

```html
<!-- Dark mode not enabled -->
<div class="card ..." data-bs-theme="light">
  <img src="..." />
  <h3>Writes Upside-Down</h3>
  <p>The Zero Gravity Pen can...</p>
  <button class="btn btn-primary">Learn more</button>
</div>

<!-- Dark mode enabled -->
<div class="card ..." data-bs-theme="dark">
  <img src="..." />
  <h3>Writes Upside-Down</h3>
  <p>The Zero Gravity Pen can...</p>
  <button class="btn btn-primary">Learn more</button>
</div>
```

## Toggling dark mode

### With Javascript 

To allow visitors or users to toggle color modes, you’ll need to create a toggle element to control the `data-bs-theme` attribute on the root element, `<html>`. We’ve built a toggler in our documentation that initially defers to a user’s current system color mode, but provides an option to override that and pick a specific color mode.

Here’s a look at the JavaScript that powers it. Feel free to inspect our own documentation navbar to see how it’s implemented using HTML and CSS from our own components. It is suggested to include the JavaScript at the top of your page to reduce potential screen flickering during reloading of your site. Note that if you decide to use media queries for your color modes, your JavaScript may need to be modified or removed if you prefer an implicit control.

```js
/*!
 * Color mode toggler for Bootstrap's docs (https://getbootstrap.com/)
 * Copyright 2011-2023 The Bootstrap Authors
 * Licensed under the Creative Commons Attribution 3.0 Unported License.
 */

(() => {
  'use strict'

  const getStoredTheme = () => localStorage.getItem('theme')
  const setStoredTheme = theme => localStorage.setItem('theme', theme)

  const getPreferredTheme = () => {
    const storedTheme = getStoredTheme()
    if (storedTheme) {
      return storedTheme
    }

    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
  }

  const setTheme = theme => {
    if (theme === 'auto' && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      document.documentElement.setAttribute('data-bs-theme', 'dark')
    } else {
      document.documentElement.setAttribute('data-bs-theme', theme)
    }
  }

  setTheme(getPreferredTheme())

  const showActiveTheme = (theme, focus = false) => {
    const themeSwitcher = document.querySelector('#bd-theme')

    if (!themeSwitcher) {
      return
    }

    const themeSwitcherText = document.querySelector('#bd-theme-text')
    const activeThemeIcon = document.querySelector('.theme-icon-active use')
    const btnToActive = document.querySelector(`[data-bs-theme-value="${theme}"]`)
    const svgOfActiveBtn = btnToActive.querySelector('svg use').getAttribute('href')

    document.querySelectorAll('[data-bs-theme-value]').forEach(element => {
      element.classList.remove('active')
      element.setAttribute('aria-pressed', 'false')
    })

    btnToActive.classList.add('active')
    btnToActive.setAttribute('aria-pressed', 'true')
    activeThemeIcon.setAttribute('href', svgOfActiveBtn)
    const themeSwitcherLabel = `${themeSwitcherText.textContent} (${btnToActive.dataset.bsThemeValue})`
    themeSwitcher.setAttribute('aria-label', themeSwitcherLabel)

    if (focus) {
      themeSwitcher.focus()
    }
  }

  window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', () => {
    const storedTheme = getStoredTheme()
    if (storedTheme !== 'light' && storedTheme !== 'dark') {
      setTheme(getPreferredTheme())
    }
  })

  window.addEventListener('DOMContentLoaded', () => {
    showActiveTheme(getPreferredTheme())

    document.querySelectorAll('[data-bs-theme-value]')
      .forEach(toggle => {
        toggle.addEventListener('click', () => {
          const theme = toggle.getAttribute('data-bs-theme-value')
          setStoredTheme(theme)
          setTheme(theme)
          showActiveTheme(theme, true)
        })
      })
  })
})()
```