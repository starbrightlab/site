# Retro-Futurist Design System

## Aesthetic Direction

### Era and Influences

- 1950s-1960s American retro-futurism
- Apple TV's "Hello Tomorrow!" visual language
- The opening title sequence from "For All Mankind"
- Googie architecture and mid-century modernism
- Space-age consumerism and atomic age optimism
- NASA vintage posters and Pan-Am space advertisements

### Design Motifs

- Shooting stars, rockets, and ringed planets
- Atomic-style starbursts and sparkles
- Orbital patterns and constellation elements
- Radar rings and geometric abstractions

## Color Palette

### Primary Colors

- Aqua: #AEE8E2
- Orange: #F28C38
- Mustard: #F2C849
- Teal: #007C88
- Coral: #F25D50

### Secondary Colors

- Cream: #FFF7E6
- Charcoal: #2F2F2F
- Gold: #D4A24C

### Texture Elements

- Grainy gradients
- Halftone patterns
- Sunburst effects
- Space exploration backgrounds

## Typography

### Font Families

- Headings: Retro script fonts (Pacifico or similar)
- Body: Clean geometric sans-serif (Space Grotesk, Futura, Avenir)

### Typography Styling

- Mixed-case usage
- Stylized ligatures
- Wide kerning
- Tailwind Configuration:
  - retroScript: ['Pacifico', 'cursive']
  - retroSans: ['Space Grotesk', 'sans-serif']

## Component Design Guidelines

### Card Components

- Apply slight rotation (rotate-tilt) for dynamic visual appeal
- Use shadow-retro-pop (4px 4px 0px) for dimensional shadowing
- Implement colorful borders (3-4px) using the retro color palette
- Round corners appropriately (rounded-xl or custom bean shapes)

### Button Elements

- Use rounded-full or pill shapes for primary actions
- Apply hover states that maintain the retro aesthetic
- Include subtle animation on interaction
- Follow consistent naming convention (e.g., "Launch", "Orbit", "Blast Off")

### Navigation

- Simple, potentially single page with high-quality sections
- Mobile-friendly hamburger menu with retro-styled animation
- Consider a "space station" theme for main navigation
- Use orbital iconography for active/inactive states
- Apply appropriate spacing for touch targets

### Section Transitions

- Implement wave or curved dividers between sections
- Use SVG paths for custom section breaks
- Consider parallax scrolling effects for background elements
- Maintain consistent spacing rhythm (multiples of 4 or 8px)

### Iconography

- Use atomic, stellar, and space-age inspired icons
- Starbursts and retro-rockets (professional, not cartoonish)
- Maintain consistent stroke width and style
- Apply animation sparingly and purposefully
- Ensure accessible sizing on mobile devices

## Animation Principles

- Strategic use of subtle animations that enhance the retro-futurist theme
- Comet/shooting star elements with appropriate timing
- Parallax effects for depth where appropriate
- Network-aware animation throttling (reduce or disable in poor connectivity)
