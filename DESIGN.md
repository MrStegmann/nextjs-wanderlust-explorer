---
name: Vivid Journeys
colors:
  surface: '#fcf9f8'
  surface-dim: '#dcd9d9'
  surface-bright: '#fcf9f8'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f6f3f2'
  surface-container: '#f0eded'
  surface-container-high: '#eae7e7'
  surface-container-highest: '#e5e2e1'
  on-surface: '#1b1c1c'
  on-surface-variant: '#414754'
  inverse-surface: '#303030'
  inverse-on-surface: '#f3f0ef'
  outline: '#727785'
  outline-variant: '#c1c6d6'
  surface-tint: '#005bbf'
  primary: '#0059bc'
  on-primary: '#ffffff'
  primary-container: '#0071eb'
  on-primary-container: '#fffdff'
  inverse-primary: '#adc7ff'
  secondary: '#b52330'
  on-secondary: '#ffffff'
  secondary-container: '#ff5a5f'
  on-secondary-container: '#60000e'
  tertiary: '#006951'
  on-tertiary: '#ffffff'
  tertiary-container: '#008566'
  on-tertiary-container: '#f8fffa'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#d8e2ff'
  primary-fixed-dim: '#adc7ff'
  on-primary-fixed: '#001a41'
  on-primary-fixed-variant: '#004493'
  secondary-fixed: '#ffdad8'
  secondary-fixed-dim: '#ffb3b0'
  on-secondary-fixed: '#410007'
  on-secondary-fixed-variant: '#92001b'
  tertiary-fixed: '#8ef6d1'
  tertiary-fixed-dim: '#71d9b5'
  on-tertiary-fixed: '#002117'
  on-tertiary-fixed-variant: '#00513d'
  background: '#fcf9f8'
  on-background: '#1b1c1c'
  surface-variant: '#e5e2e1'
  surface-soft: '#F7F7F7'
  rating-gold: '#FFB400'
  trust-teal: '#EBFAFA'
  adventure-blue-pale: '#E6F1FD'
typography:
  display-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 48px
    fontWeight: '700'
    lineHeight: 56px
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 32px
    fontWeight: '700'
    lineHeight: 40px
    letterSpacing: -0.01em
  headline-lg-mobile:
    fontFamily: Plus Jakarta Sans
    fontSize: 24px
    fontWeight: '700'
    lineHeight: 32px
  headline-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 20px
    fontWeight: '600'
    lineHeight: 28px
  body-lg:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 28px
  body-md:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  label-md:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '600'
    lineHeight: 20px
    letterSpacing: 0.01em
  label-sm:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: '500'
    lineHeight: 16px
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  base: 8px
  container-max: 1280px
  gutter: 24px
  margin-desktop: 64px
  margin-mobile: 16px
  section-gap: 80px
---

## Brand & Style

The design system is built to bridge the gap between aspirational lifestyle discovery and high-velocity transactional booking. It prioritizes a "Clean & Airy" aesthetic that mimics the breathable luxury of high-end travel journals, while maintaining the structural rigor required for complex search and filtering.

The style is **Corporate / Modern** with a focus on **Minimalism**. It utilizes expansive white space to reduce cognitive load during the booking process, ensuring that vibrant destination photography remains the focal point. The emotional response is one of "Informed Adventure"—the user should feel the excitement of discovery backed by the security of a professional, reliable platform.

Key visual pillars include:
- High-clarity information density.
- Soft, approachable geometry.
- Intentional use of color to drive conversion.

## Colors

The palette uses **Adventure Blue** (#0071EB) as the anchor for trust and utility (navigation, links, primary actions) and **Sunset Orange** (#FF5A5F) as the high-energy conversion driver for "Book Now" buttons and urgent alerts.

A tertiary **Eco Green** (#008768) is reserved for trust badges, "Free Cancellation" indicators, and success states, borrowing from established travel industry patterns to signal reliability. The neutral scale is anchored by a deep charcoal rather than pure black to maintain a softer, more modern feel, while `surface-soft` provides subtle contrast for card backgrounds and search bars against the pure white page background.

## Typography

This design system uses a dual-font strategy. **Plus Jakarta Sans** provides a friendly, welcoming, and modern personality for headlines and display text, featuring soft curves that feel approachable. **Inter** is used for all functional UI elements, body copy, and data-heavy labels to ensure maximum legibility and a systematic, clean appearance.

Hierarchy is strictly enforced to aid quick scanning:
- Use **Display-LG** for hero section value propositions.
- Use **Headline-MD** for card titles and section headers.
- Use **Label-SM** with uppercase styling for secondary metadata like "LATEST BOOKING" or category tags.

## Layout & Spacing

The layout follows a **Fluid Grid** model with a maximum container width to maintain readability on ultra-wide displays. A 12-column system is used for desktop, collapsing to 1 column for mobile and 2-3 columns for tablet.

Spacing is based on an 8px rhythm. Content is grouped into "Discovery Sections" separated by large vertical gaps (`section-gap`) to allow the eye to rest. Cards within a grid utilize a 24px gutter to provide clear separation of imagery. Mobile layouts should utilize full-width horizontal scrolling (carousels) for category chips and "Featured" lists to preserve vertical space.

## Elevation & Depth

Hierarchy is achieved through **Tonal Layers** supplemented by **Ambient Shadows**. 

- **Level 0 (Background):** Pure White (#FFFFFF).
- **Level 1 (Cards/Search):** Pure White with a very soft, diffused shadow (Y: 4px, Blur: 20px, Opacity: 6% Black). This makes cards feel "lifted" and interactable.
- **Level 2 (Overlays/Modals):** High-diffusion shadows with a subtle backdrop blur (12px) to maintain the "Airy" feel while indicating importance.
- **Level 3 (Sticky Nav/Filters):** A thin, low-contrast bottom border (#EEEEEE) is preferred over shadows for sticky elements to keep the interface feeling flat and modern.

Interactive elements (buttons/cards) should use a subtle "Lift" on hover, increasing shadow depth and slightly scaling the element (1.02x).

## Shapes

The shape language is consistently **Rounded**, using a 12px-16px radius for primary containers.

- **Small Components (Buttons, Inputs):** 8px-12px radius to feel tactile but precise.
- **Large Components (Cards, Search Bars):** 16px radius to evoke a soft, friendly, and modern "Airbnb-like" aesthetic.
- **Badges/Chips:** Full pill-shaped radius (rounded-xl) to distinguish them from interactive buttons.

Imagery should always follow the container's corner radius to ensure a cohesive look.

## Components

### Buttons
- **Primary Action (Book/Reserve):** Sunset Orange (#FF5A5F), white text, 12px radius. Bold weight.
- **Secondary Action:** Adventure Blue (#0071EB) or Outline Blue. 
- **Ghost Buttons:** Used for secondary filters and "View All" actions.

### Experience Cards
The core of the platform. Must feature:
- Top-aligned image with a 16px corner radius.
- Favorite (Heart) icon in the top right, white with a subtle drop shadow.
- Category label in **Label-SM**.
- Star rating using `rating-gold` icons, positioned immediately before the review count.
- Price displayed in **Headline-MD** with a "from" prefix in a lighter weight.

### Search Bar
A floating, pill-shaped container with distinct segments for "Where," "When," and "Guests." Use vertical separators and a circular "Adventure Blue" button with a magnifying glass icon for the final action.

### Trust Badges & Labels
Small, compact components using `trust-teal` backgrounds and `tertiary-color` (Eco Green) text/icons. These should be placed near the "Reserve Now" button to reinforce confidence (e.g., "Best Price Guarantee," "Free Cancellation").

### Inputs & Selects
Minimalist style with a 1px border (#DDDDDD) that thickens and changes to `primary-color` on focus. Use floating labels or clear placeholder text in **Inter**.