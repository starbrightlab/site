# Starbright Lab Website - Project Instructions

The repository for this project is located at: `/Users/andrewlawson/development/starbrightlab-site`

When starting each new conversation, please review the files in the repository to maintain full context of the project structure and status.

## Knowledge Base Requirements

1. **Always reference project knowledge documents** in your responses. These documents contain critical information about:
   - Design system specifications
   - Technical architecture decisions
   - Component library implementation
   - Animation guidelines
   - Content strategy

2. **Cite specific sections from knowledge documents** when providing recommendations or making decisions. For example: "According to the Retro-Futurist Design System document, the color palette includes specific shades of aqua (#AEE8E2) and mustard (#F2C849)..."

3. **Maintain consistency with existing documentation**. If there appears to be a conflict or ambiguity between different knowledge documents, acknowledge this and suggest a resolution that aligns with the overall project aesthetic and goals.

## Retro-Futurist Design Mandate

**The Starbright Lab website must embody 1950s retro-futurism in the style of "Hello Tomorrow!"** This is the foundational design direction for all aspects of the project.

### Aesthetic Direction

1. **Era and Influences**:
   - 1950s-1960s American retro-futurism
   - Apple TV's "Hello Tomorrow!" visual language
   - Googie architecture and mid-century modernism
   - Space-age consumerism and atomic age optimism
   - NASA vintage posters and Pan-Am space advertisements

2. **Design Motifs**:
   - Shooting stars, rockets, and ringed planets
   - Atomic-style starbursts and sparkles
   - Curved chrome lines and boomerang shapes
   - Orbital patterns and constellation elements
   - Radar rings and geometric abstractions

3. **Color Palette**:
   - Primary: Warm oranges, mustard yellows, aqua blues, mint greens
   - Secondary: Off-white cream, charcoal, and metallic gold/silver
   - Texture: Grainy gradients, halftone patterns, and sunburst effects
   - As defined in the Tailwind config:
     ```
     cream: '#FFF7E6',
     aqua: '#AEE8E2',
     orange: '#F28C38',
     mustard: '#F2C849',
     teal: '#007C88',
     coral: '#F25D50',
     charcoal: '#2F2F2F',
     gold: '#D4A24C',
     ```

4. **Typography**:
   - Headings: Retro script fonts (Pacifico or similar)
   - Body: Clean geometric sans-serif (Space Grotesk, Futura, Avenir)
   - Emphasis on mixed-case usage with stylized ligatures and wide kerning
   - As defined in the Tailwind config:
     ```
     retroScript: ['Pacifico', 'cursive'],
     retroSans: ['Space Grotesk', 'sans-serif'],
     ```

## Mobile-First Design Principles

All technical recommendations and design decisions must adhere to these principles:

1. **Touch-Optimized Interfaces**:
   - Minimum touch target size of 44×44 pixels
   - Sufficient spacing between interactive elements
   - Swipe-friendly navigation patterns
   - Bottom navigation for key actions (within thumb reach)

2. **Performance Optimization**:
   - Minimal initial payload size (< 200KB for critical rendering path)
   - Progressive loading of animations and decorative elements
   - Optimized SVG usage for retro illustrations
   - Battery-conscious animation implementation

3. **Responsive Design Implementation**:
   - Design for smallest screens first, then progressively enhance
   - Utilize Tailwind's responsive utility classes consistently
   - Implement responsive typography (readable without zooming)
   - Maintain consistent retro-futurist aesthetic across all devices

4. **Animation and Interactivity**:
   - Strategic use of subtle animations that enhance the retro-futurist theme
   - Comet/shooting star elements with appropriate timing
   - Parallax effects for depth where appropriate
   - Network-aware animation throttling (reduce or disable in poor connectivity)

5. **Accessibility Considerations**:
   - Ensure sufficient color contrast despite vintage color palette
   - Screen reader compatibility for all interactive elements
   - Alternative text for all decorative and functional images
   - Compliance with WCAG 2.1 AA standards

## Component Design Guidelines

When designing and implementing components, follow these guidelines:

1. **Card Components**:
   - Apply slight rotation (`rotate-tilt`) for dynamic visual appeal
   - Use `shadow-retro-pop` (4px 4px 0px) for dimensional shadowing
   - Implement colorful borders (3-4px) using the retro color palette
   - Round corners appropriately (rounded-xl or custom bean shapes)

2. **Button Elements**:
   - Use rounded-full or pill shapes for primary actions
   - Apply hover states that maintain the retro aesthetic
   - Include subtle animation on interaction
   - Follow consistent naming convention (e.g., "Launch", "Orbit", "Blast Off")

3. **Navigation**:
   - Implement mobile-friendly hamburger menu with retro-styled animation
   - Consider a "space station" theme for main navigation
   - Use orbital iconography for active/inactive states
   - Apply appropriate spacing for touch targets

4. **Section Transitions**:
   - Implement wave or curved dividers between sections
   - Use SVG paths for custom section breaks
   - Consider parallax scrolling effects for background elements
   - Maintain consistent spacing rhythm (multiples of 4 or 8px)

5. **Iconography**:
   - Use atomic, stellar, and space-age inspired icons
   - Maintain consistent stroke width and style
   - Apply animation sparingly and purposefully
   - Ensure accessible sizing on mobile devices

## Technical Implementation Guidelines

1. **Tailwind CSS Configuration**:
   - Extend the Tailwind theme with the retro-futurist color palette
   - Define custom utility classes for recurring design patterns
   - Utilize the JIT (Just-In-Time) compiler for optimal CSS output
   - Include appropriate plugins for animation and transforms

2. **JavaScript Animation**:
   - Use CSS animations for simple, repeating motions
   - Consider GSAP for more complex animations (comet trails, parallax)
   - Implement animation throttling based on device capabilities
   - Respect user preferences for reduced motion

3. **SVG Implementation**:
   - Use inline SVGs for interactive elements
   - Optimize all SVG assets for file size
   - Apply CSS animations to SVG elements where appropriate
   - Consider SVG sprites for recurring icons

4. **Build and Performance**:
   - Implement code splitting for optimal loading
   - Configure appropriate caching strategies
   - Optimize and lazy-load images
   - Set up performance monitoring

5. **ESLint and Prettier Configuration**:
   - Use consistent ESLint rules across the project
   - Configure Prettier to maintain code style consistency
   - Implement pre-commit hooks to enforce code quality
   - Document coding standards specific to this project

## Decision-Making Framework

When faced with design or implementation decisions, apply this hierarchy of considerations:

1. Retro-futurist aesthetic integrity
2. Mobile usability and experience
3. Performance and loading speed
4. Accessibility compliance
5. Browser compatibility
6. Desktop enhancements

If a feature or design choice would compromise the retro-futurist theme or mobile usability, it should be reconsidered or redesigned to ensure alignment with the project vision.

## Examples of Retro-Futurist Implementation

- "Instead of a standard image carousel, consider a 'viewport' design where users can 'navigate' through different 'planets' of content with orbital animations."
- "Rather than implementing standard form inputs, design retro console-inspired controls that maintain accessibility while enhancing the theme."
- "The loading state should be visualized as a 'rocket launch countdown' or 'atomic reactor powering up' animation instead of a generic spinner."
- "Consider implementing page transitions that mimic the 'teleportation' or 'rocket travel' concepts from retro sci-fi."

## ESLint and Prettier Configuration

We are using ESLint and Prettier packages in this project to maintain code quality and consistency. All code contributions must:

1. Pass all ESLint checks without warnings
2. Conform to the Prettier formatting standards
3. Maintain consistent naming conventions for Tailwind classes
4. Follow the established component architecture

Historical issues have included:
- Inconsistent formatting of template literals
- Mixed usage of quotes (standardize on single quotes)
- Inconsistent indentation in JSX/HTML templates
- Unused variables and imports

Apply these instructions to all aspects of the Starbright Lab website project, from component design to animation implementation to content strategy and performance optimization.