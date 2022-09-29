---
layout: docs
title: Overview
description: "FastBootstrap is a frontend framework with the beautifully UI components that implements Atlassian Design."
toc: true
group: getting-started
menu:
  docs:   
    weight: 10
---

## Introduction

FastBootstrap is a free, open source frontend framework for rapidly build responsive websites. It built on Bootstrap and Atlassian design, so you can easily migrate from Bootstrap to FastBootstrap without any change HTML, or migrate from FastBootstrap to Bootstrap at any time. 

## Dependencies

FastBootstrap are dependencies on Bootstrap.

{{< bs-table >}}
| FastBootstrap | Bootstrap | Popper
| --- | --- | --- |
1.x | 5.2.x | 2.11.x |
{{</ bs-table >}}

## Extended components

In addition to Bootstrap's base component, FastBootstrap pre-builts more extended components ready for your next project. 

- [Avatar]({{< docsref "avatar" >}})
- [Avatar Group]({{< docsref "avatar-group" >}})
- [Blankslate]({{< docsref "blankslate" >}})
- [Lozenge]({{< docsref "lozenge" >}})
- [Menu]({{< docsref "menu" >}})
- [Progress Indicator]({{< docsref "progress-indicator" >}})
- [Progress Tracker]({{< docsref "progress-tracker" >}})
- [Sidenav]({{< docsref "side-navigation" >}})
- [Tag]({{< docsref "tag" >}})
- [Layout]({{< docsref "layout" >}})

## Javascript Plugin

`fastbootstrap.js` includes [Popper JS](https://popper.js.org/), Bootstrap's basic JS plugin and our extended plugin. You can use our `fastbootstrap.js` instead of `bootstrap.js`.

{{< bs-table >}}
| JS | Basic Plugins | Popper | Extended Plugins | 
| --- | --- | --- | --- |
`bootstrap.js` | <i class="fa-solid fa-check fa-sm"></i> |  | |
`bootstrap.bundle.js` | <i class="fa-solid fa-check fa-sm"></i> | <i class="fa-solid fa-check fa-sm"></i> | |
`fastbootstrap.js` | <i class="fa-solid fa-check fa-sm"></i> | <i class="fa-solid fa-check fa-sm"></i> | <i class="fa-solid fa-check fa-sm"></i> |
{{</ bs-table >}}

### Extended plugins

- [Progress Indicator]({{< docsref "progress-indicator" >}})
- [Progress Tracker]({{< docsref "progress-tracker" >}})
- [Sidenav]({{< docsref "side-navigation" >}})
- [Tag]({{< docsref "tag" >}})


## Utility-first CSS

Inspired by TailwindCSS, FastBootstrap provide more utility CSS that helps developers and designers can easily development without leaveing HTML. All help classes is declares in `/src/scss/_utilities.scss`.
