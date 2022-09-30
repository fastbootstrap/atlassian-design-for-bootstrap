---
layout: docs
title: Color
description: "Default theme color for our components and element styles."
toc: true
group: customize
menu:
  docs:    
    weight: 20
---

We use a subset of all colors to create a smaller color palette for generating color schemes, also available as Sass variables and a Sass map in project’s `scss/_variables.scss` file.

## Theme Color 

<div class="row g-3 mb-3">
  <div class="col-md-4">
    {{< color-card "blue" "400">}}
     <span class="text-white fw-semibold">Primary</span>
    {{</ color-card >}}
  </div>
  <div class="col-md-4">
    {{< color-card "purple" "400" >}}
     <span class="text-white fw-semibold">Secondary</span>
    {{</ color-card >}}
  </div>
  <div class="col-md-4">
    {{< color-card "green" "400" >}}
     <span class="text-white fw-semibold">Success</span>
    {{</ color-card >}}
  </div>
  <div class="col-md-4">
    {{< color-card "red" "400" >}} 
     <span class="text-white fw-semibold">Danger</span>
    {{</ color-card >}}
  </div>
  <div class="col-md-4">
    {{< color-card "yellow" "300" >}} 
     <span class="text-blank fw-semibold">Warning</span>
    {{</ color-card >}}
  </div>
  <div class="col-md-4">
    {{< color-card "neutral" "500" >}}
     <span class="text-white fw-semibold">Info</span>
    {{</ color-card >}}
  </div>
  <div class="col-md-4">
    {{< color-card "neutral" "900" >}}
     <span class="text-white fw-semibold">Dark</span>
    {{</ color-card >}}
  </div>
  <div class="col-md-4">
    {{< color-card "neutral" "10" >}}
     <span class="text-blank fw-semibold">Light</span>
    {{</ color-card >}}
  </div>
</div>

All these colors are available as a Sass map, `$theme-colors`.

```scss
$theme-colors: (
  "primary":    $primary,
  "secondary":  $secondary,
  "success":    $success,
  "info":       $info,
  "warning":    $warning,
  "danger":     $danger,
  "light":      $light,
  "dark":       $dark
);
```

## All colors 


### Neutrals
Neutrals have varying degrees of saturation that allow for the appropriate level of warmth across marketing and product. Typically they are used for text and subtle backgrounds when we don't want to draw too much attention to a particular touchpoint or convey information such as "to do" or "disabled".

#### Dark neutrals

Dark neutrals are very effective for creating contrast and are therefore the primary color used for typography. Occasionally the dark neutrals are found in illustration but they rarely dominate the palette. Some exceptions are dark mode UI elements and illustrations.

<div class="row g-3 mb-3">
  <div class="col-md-4">
    {{< color-card "neutral" "900" />}}
  </div>
  <div class="col-md-4">
    {{< color-card "neutral" "800" />}}
  </div>
  <div class="col-md-4">
    {{< color-card "neutral" "700" />}}
  </div>
  <div class="col-md-4">
    {{< color-card "neutral" "600" />}}
  </div>
  <div class="col-md-4">
    {{< color-card "neutral" "500" />}}
  </div>
</div>

#### Mid-neutrals

Use mid-neutrals to create depth in components such as modal dialog blankets and cards. Avoid mid-neutrals as background colors because there is usually not enough contrast to remain AA compliant. The mid-neutrals N400 to N200 can be used for subtle text and icons on light-neutral backgrounds. You can find text style using these colors in Typography.


<div class="row g-3 mb-3">
  <div class="col-md-4">
    {{< color-card "neutral" "400" />}}
  </div>
  <div class="col-md-4">
    {{< color-card "neutral" "300" />}}
  </div>
  <div class="col-md-4">
    {{< color-card "neutral" "200" />}}
  </div>
  <div class="col-md-4">
    {{< color-card "neutral" "100" />}}
  </div>
  <div class="col-md-4">
    {{< color-card "neutral" "90" />}}
  </div>
  <div class="col-md-4">
    {{< color-card "neutral" "80" />}}
  </div>
  <div class="col-md-4">
    {{< color-card "neutral" "70" />}}
  </div>
  <div class="col-md-4">
    {{< color-card "neutral" "60" />}}
  </div>
</div>

####  Light neutrals

We use light neutrals as subtle backgrounds to indicate various interactive states such as hover and disabled, or simply to create secondary attention towards a component. You'll find light neutrals in buttons, text fields, tags, and illustrations.

Light neutrals are helpful for offsetting content in a primarily white layout without losing warmth and cleanliness and are therefore often used as a background color. Their subtlety allows for them to be helpful in creating subtle shadows or depth in illustration, and they can also be helpful in depicting illustrative objects that are typically made of metallic materials like hardware, or atmospheric elements in illustrations, like clouds.

<div class="row g-3 mb-3">
  <div class="col-md-4">
    {{< color-card "neutral" "50" />}}
  </div>
  <div class="col-md-4">
    {{< color-card "neutral" "40" />}}
  </div>
  <div class="col-md-4">
    {{< color-card "neutral" "30" />}}
  </div>
  <div class="col-md-4">
    {{< color-card "neutral" "20" />}}
  </div>
  <div class="col-md-4">
    {{< color-card "neutral" "10" />}}
  </div>
  <div class="col-md-4">
    {{< color-card "neutral" "0" />}}
  </div>
</div>

### Red

Red is mainly used for backgrounds in messages and in error states to draw attention to important information or actions that are destructive or block workflow. You'll find red used in components such as lozenges, banner, flag messages, buttons, illustrations, and typography.

<div class="row g-3 mb-3">
  <div class="col-md-4">
    {{< color-card "red" "500" />}}
  </div>
  <div class="col-md-4">
    {{< color-card "red" "400" />}}
  </div>
  <div class="col-md-4">
    {{< color-card "red" "300" />}}
  </div>
  <div class="col-md-4">
    {{< color-card "red" "200" />}}
  </div>
  <div class="col-md-4">
    {{< color-card "red" "100" />}}
  </div>
  <div class="col-md-4">
    {{< color-card "red" "75" />}}
  </div>
  <div class="col-md-4">
    {{< color-card "red" "50" />}}
  </div>
</div>


### Yellow

Yellow indicates a warning or that progress is impeded. Yellow feels right at home in components like lozenges, banners, flag messages, and buttons.

<div class="row g-3 mb-3">
  <div class="col-md-4">
    {{< color-card "yellow" "500" />}}
  </div>
  <div class="col-md-4">
    {{< color-card "yellow" "400" />}}
  </div>
  <div class="col-md-4">
    {{< color-card "yellow" "300" />}}
  </div>
  <div class="col-md-4">
    {{< color-card "yellow" "200" />}}
  </div>
  <div class="col-md-4">
    {{< color-card "yellow" "100" />}}
  </div>
  <div class="col-md-4">
    {{< color-card "yellow" "75" />}}
  </div>
  <div class="col-md-4">
    {{< color-card "yellow" "50" />}}
  </div>
</div>

### Green

We use green to indicate success or to celebrate a win. Green goes well with lozenges, badges, toggles, messages, and illustrations. Keep in mind that our green is very vibrant, which can cause eye strain in large doses. However, because of this vibrancy, it can also stand out well among many other elements on a page, which is why it is a good choice for calls-to-action and buttons in marketing.

<div class="row g-3 mb-3">
  <div class="col-md-4">
    {{< color-card "green" "500" />}}
  </div>
  <div class="col-md-4">
    {{< color-card "green" "400" />}}
  </div>
  <div class="col-md-4">
    {{< color-card "green" "300" />}}
  </div>
  <div class="col-md-4">
    {{< color-card "green" "200" />}}
  </div>
  <div class="col-md-4">
    {{< color-card "green" "100" />}}
  </div>
  <div class="col-md-4">
    {{< color-card "green" "75" />}}
  </div>
  <div class="col-md-4">
    {{< color-card "green" "50" />}}
  </div>
</div>

### Blue

Blue is used to help us reinforce our presence and unify our touchpoints from marketing to product. It's sharp and clear, making it bold and optimistic, while at the same time it's soft and inviting, paying homage to the practical, human origins of Atlassian. It is at the heart of every communication and should be used intentionally but sparingly. As with all colors in the palette, you should be mindful of the color values provided in these guidelines. When used appropriately and accurately, the colors have an incredible impact.

Blue is used to indicate authentication, connectivity, or progress. You'll find blue in messages, buttons, navigation, lozenges, badges, tabs, and the progress tracker.

<div class="row g-3 mb-3">
  <div class="col-md-4">
    {{< color-card "blue" "500" />}}
  </div>
  <div class="col-md-4">
    {{< color-card "blue" "400" />}}
  </div>
  <div class="col-md-4">
    {{< color-card "blue" "300" />}}
  </div>
  <div class="col-md-4">
    {{< color-card "blue" "200" />}}
  </div>
  <div class="col-md-4">
    {{< color-card "blue" "100" />}}
  </div>
  <div class="col-md-4">
    {{< color-card "blue" "75" />}}
  </div>
  <div class="col-md-4">
    {{< color-card "blue" "50" />}}
  </div>
</div>

### Teal

Teal can typically be found in illustrations or as an accent color for components such a tags.

<div class="row g-3 mb-3">
  <div class="col-md-4">
    {{< color-card "teal" "500" />}}
  </div>
  <div class="col-md-4">
    {{< color-card "teal" "400" />}}
  </div>
  <div class="col-md-4">
    {{< color-card "teal" "300" />}}
  </div>
  <div class="col-md-4">
    {{< color-card "teal" "200" />}}
  </div>
  <div class="col-md-4">
    {{< color-card "teal" "100" />}}
  </div>
  <div class="col-md-4">
    {{< color-card "teal" "75" />}}
  </div>
  <div class="col-md-4">
    {{< color-card "teal" "50" />}}
  </div>
</div>

### Purple

Purple indicates help and support and is used in spotlight, buttons, messages, lozenges, and image callouts. It is also used to display visited links in web typography and as an accent color in illustration. However, it is best used in small doses in illustration as it can sometimes clash with blue.


<div class="row g-3 mb-3">
  <div class="col-md-4">
    {{< color-card "purple" "500" />}}
  </div>
  <div class="col-md-4">
    {{< color-card "purple" "400" />}}
  </div>
  <div class="col-md-4">
    {{< color-card "purple" "300" />}}
  </div>
  <div class="col-md-4">
    {{< color-card "purple" "200" />}}
  </div>
  <div class="col-md-4">
    {{< color-card "purple" "100" />}}
  </div>
  <div class="col-md-4">
    {{< color-card "purple" "75" />}}
  </div>
  <div class="col-md-4">
    {{< color-card "purple" "50" />}}
  </div>
</div>

## Related

All colors are available for background and text color.

- [Text color]({{< docsref "text-color" >}})
- [Background color]({{< docsref "background-color" >}})
- [Border color]({{< docsref "border-color" >}})