# Starbright Lab - Retro-Futurist Design System

This design system establishes the visual language for the Starbright Lab website, inspired by 1950s retro-futurism and the aesthetic of "Hello Tomorrow!" This document serves as the definitive reference for all design decisions.

## Color Palette

### Primary Colors

| Name | Hex | Sample | Usage |
|------|-----|--------|-------|
| Cream | `#FFF7E6` | ![Cream](https://via.placeholder.com/80x30/FFF7E6/000000?text=+) | Background, cards |
| Aqua | `#AEE8E2` | ![Aqua](https://via.placeholder.com/80x30/AEE8E2/000000?text=+) | Accents, borders |
| Orange | `#F28C38` | ![Orange](https://via.placeholder.com/80x30/F28C38/FFFFFF?text=+) | Primary buttons, highlights |
| Mustard | `#F2C849` | ![Mustard](https://via.placeholder.com/80x30/F2C849/000000?text=+) | Secondary accents, icons |
| Teal | `#007C88` | ![Teal](https://via.placeholder.com/80x30/007C88/FFFFFF?text=+) | Headlines, feature elements |
| Coral | `#F25D50` | ![Coral](https://via.placeholder.com/80x30/F25D50/FFFFFF?text=+) | Alerts, attention elements |
| Charcoal | `#2F2F2F` | ![Charcoal](https://via.placeholder.com/80x30/2F2F2F/FFFFFF?text=+) | Text, footers |
| Gold | `#D4A24C` | ![Gold](https://via.placeholder.com/80x30/D4A24C/000000?text=+) | Premium highlights |

### Gradients

| Name | Definition | Usage |
|------|------------|-------|
| Radial Burst | `radial-gradient(circle at top left, #F2C849, #F28C38)` | Hero backgrounds, feature highlights |
| Orbital Path | `linear-gradient(to right, #AEE8E2, #007C88)` | Section dividers, progress indicators |
| Cosmic Glow | `linear-gradient(45deg, #F25D50, #F28C38)` | Call-to-action elements |

### Accessibility Notes

* Primary text uses Charcoal (#2F2F2F) on Cream (#FFF7E6) for 13.5:1 contrast ratio
* Interactive elements maintain minimum 4.5:1 contrast ratio
* Critical buttons use Orange (#F28C38) with white text at 3.1:1 - use 18px+ font size to maintain AA compliance

## Typography

### Font Families

* **Retro Script**: 'Pacifico', cursive
  * Used for: Main headings, brand elements, callouts
  * Character: Flowing, optimistic, future-focused
  
* **Retro Sans**: 'Space Grotesk', sans-serif
  * Used for: Body text, navigation, buttons, UI elements
  * Character: Clean, geometric, modernist
  
### Type Scale

| Element | Font | Size (mobile) | Size (desktop) | Weight | Line Height | Tracking |
|---------|------|---------------|----------------|--------|-------------|----------|
| H1 | Retro Script | 42px (2.625rem) | 64px (4rem) | Regular (400) | 1.1 | Normal |
| H2 | Retro Sans | 28px (1.75rem) | 36px (2.25rem) | SemiBold (600) | 1.2 | Wide (0.05em) |
| H3 | Retro Script | 24px (1.5rem) | 32px (2rem) | Regular (400) | 1.2 | Normal |
| H4 | Retro Sans | 18px (1.125rem) | 24px (1.5rem) | SemiBold (600) | 1.3 | Wide (0.05em) |
| Body | Retro Sans | 16px (1rem) | 18px (1.125rem) | Regular (400) | 1.5 | Normal |
| Small/Caption | Retro Sans | 14px (0.875rem) | 14px (0.875rem) | Regular (400) | 1.4 | Wide (0.05em) |
| Buttons | Retro Sans | 16px (1rem) | 18px (1.125rem) | SemiBold (600) | 1 | Wide (0.05em) |

### Typography Guidelines

* Maintain all-caps styling for small subheadings with wide tracking
* Keep Retro Script usage limited to key headings and accents
* Body text should always be Retro Sans for readability
* Ensure proper fallbacks for web font loading

## Spacing System

Our spacing system uses an 8px base unit for consistency and alignment.

| Token | Size | Usage |
|-------|------|-------|
| space-0 | 0 | No spacing |
| space-1 | 4px (0.25rem) | Tight inline spacing |
| space-2 | 8px (0.5rem) | Standard inline spacing |
| space-3 | 12px (0.75rem) | Compact block spacing |
| space-4 | 16px (1rem) | Standard block spacing |
| space-6 | 24px (1.5rem) | Loose block spacing |
| space-8 | 32px (2rem) | Component separation |
| space-12 | 48px (3rem) | Section spacing (mobile) |
| space-16 | 64px (4rem) | Section spacing (desktop) |
| space-20 | 80px (5rem) | Large section spacing |

### Layout Guidelines

* Maintain 16px (1rem) standard padding for card elements
* Use 24px (1.5rem) minimum spacing between interactive elements for touch targets
* Section padding should be 24px (1.5rem) on mobile, 64px (4rem) on desktop
* Maintain a 12-column grid system with appropriate gutters

## Component Styling

### Cards

* Base styles: 
  * Background: Cream (#FFF7E6) or White
  * Border: 4px solid [accent color]
  * Border-radius: 12px (rounded-xl)
  * Shadow: 4px 4px 0px rgba(0, 0, 0, 0.25)
  * Padding: 24px (1.5rem)
  * Optional rotation: ±3° for dynamic layout

* Variations:
  * Feature Card: Border with Aqua (#AEE8E2)
  * Alert Card: Border with Coral (#F25D50)
  * Premium Card: Border with Gold (#D4A24C)

### Buttons

* Primary Button:
  * Background: Orange (#F28C38)
  * Text: White
  * Border-radius: 9999px (rounded-full)
  * Padding: 12px 24px (0.75rem 1.5rem)
  * Shadow: 4px 4px 0px rgba(0, 0, 0, 0.25)
  * Hover: Coral (#F25D50)
  
* Secondary Button:
  * Background: Transparent
  * Text: Teal (#007C88)
  * Border: 2px solid Teal (#007C88)
  * Border-radius: 9999px (rounded-full)
  * Padding: 10px 24px (0.625rem 1.5rem)
  * Hover: Background Teal (#007C88), Text White

* Button Label Conventions:
  * Use space-age terminology: "Launch", "Blast Off", "Orbit", "Explore"
  * All button text should be Retro Sans with wide tracking

### Form Elements

* Text Input:
  * Background: White
  * Border: 2px solid Charcoal (#2F2F2F)
  * Border-radius: 8px (rounded-lg)
  * Padding: 12px 16px (0.75rem 1rem)
  * Focus: Border Teal (#007C88), glow effect

* Select/Dropdown:
  * Styled as text input
  * Custom chevron icon in retro-futurist style
  * Focus: Border Teal (#007C88)

* Checkbox/Radio:
  * Custom styling with atomic/stellar motifs
  * Selected state: Teal (#007C88) or Orange (#F28C38)
  * Focus ring: Gold (#D4A24C) pulse animation

## Iconography

### Icon Style

* Line weight: 2px consistent stroke
* Corners: Slightly rounded line joins
* Style: Geometric, simplified atomic-age aesthetic
* Size: Base size 24px (can scale up/down as needed)
* Colors: Can use any color from the palette, primarily Teal or Orange

### System Icons

Standard interface icons should follow our retro-futurist aesthetic:
* Menu: Three stacked lines with slight curvature
* Close: Atomic burst X rather than standard X
* Search: Radar-like magnifying glass
* User: Atomic/satellite head rather than standard person

### Decorative Icons

Thematic icons for visual storytelling:
* Rocket ships
* Planets with rings
* Atomic starbursts
* Constellation patterns
* Radar signal waves

## Animation Guidelines

### Timing

* Fast interactions: 200ms
* Standard transitions: 300ms
* Elaborate animations: 500-800ms
* Attention-getting animations: 1500-3000ms with easing

### Easing Functions

* Standard: cubic-bezier(0.4, 0, 0.2, 1)
* Entry: cubic-bezier(0, 0, 0.2, 1)
* Exit: cubic-bezier(0.4, 0, 1, 1)
* Elastic: cubic-bezier(0.4, 0, 0.6, 1.4)

### Animation Types

* Hover states: Subtle scale (1.05) and color transitions
* Page transitions: Fade combined with slight directional movement
* Loading states: Atomic pulse or orbital spin
* Attention-grabbing: Comet trails, shooting stars (use sparingly)

## Breakpoints

| Name | Size | Typical Device |
|------|------|----------------|
| xs | < 640px | Mobile portrait |
| sm | >= 640px | Mobile landscape |
| md | >= 768px | Tablet portrait |
| lg | >= 1024px | Tablet landscape, small laptop |
| xl | >= 1280px | Desktop |
| 2xl | >= 1536px | Large desktop |

### Responsive Design Guidelines

* Mobile-first: Design and implement for smallest screens first
* Key breakpoint considerations:
  * Navigation transforms from hamburger to horizontal at md (768px)
  * Card grids change from 1 column to 2-3 columns at md (768px)
  * Typography scale adjusts at sm (640px) and lg (1024px)

## Decorative Elements

### Background Patterns

* Halftone Dots: Subtle texture for backgrounds
* Starburst: Radiating lines for accent areas
* Constellation Grid: Connecting dots pattern
* Wave/Curved Lines: Section dividers with atomic-age curves

### Special Effects

* Grain Texture: Subtle noise overlay for vintage feel (opacity 0.05-0.1)
* Vignette: Subtle darkening around edges for viewports or panels
* Chromatic Aberration: Slight RGB splitting for certain hover states
* Paper Texture: Very subtle texture for cards and documents

---

## Implementation in Tailwind

```js
// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      colors: {
        retro: {
          cream: '#FFF7E6',
          aqua: '#AEE8E2',
          orange: '#F28C38',
          mustard: '#F2C849',
          teal: '#007C88',
          coral: '#F25D50',
          charcoal: '#2F2F2F',
          gold: '#D4A24C',
        },
      },
      fontFamily: {
        retroScript: ['Pacifico', 'cursive'],
        retroSans: ['Space Grotesk', 'sans-serif'],
      },
      boxShadow: {
        'retro-pop': '4px 4px 0px rgba(0, 0, 0, 0.25)',
      },
      backgroundImage: {
        'radial-burst': 'radial-gradient(circle at top left, #F2C849, #F28C38)',
        'halftone-dots': "url('/images/halftone-dots.svg')",
        'orbital-path': 'linear-gradient(to right, #AEE8E2, #007C88)',
        'cosmic-glow': 'linear-gradient(45deg, #F25D50, #F28C38)',
      },
      rotate: {
        'tilt': '3deg',
        'tilt-reverse': '-3deg',
      },
      borderRadius: {
        'bean': '9999px 9999px 9999px 0',
      },
      keyframes: {
        'orbit': {
          '0%': { transform: 'rotate(0deg) translateX(10px) rotate(0deg)' },
          '100%': { transform: 'rotate(360deg) translateX(10px) rotate(-360deg)' },
        },
        'pulse-glow': {
          '0%, 100%': { opacity: 0.6, transform: 'scale(1)' },
          '50%': { opacity: 1, transform: 'scale(1.05)' },
        },
        'comet': {
          '0%': { transform: 'translateX(-150%) translateY(-50%)', opacity: 0 },
          '30%': { opacity: 1 },
          '70%': { transform: 'translateX(150%) translateY(-80%)', opacity: 1 },
          '100%': { opacity: 0 },
        }
      },
      animation: {
        'orbit': 'orbit 20s linear infinite',
        'pulse-glow': 'pulse-glow 2s ease-in-out infinite',
        'comet': 'comet 6s ease-in-out infinite',
      }
    },
  },
  plugins: [],
};
```

This document serves as the foundational reference for the Starbright Lab website's visual language. All design decisions should align with these guidelines, and any deviations must be documented and justified.