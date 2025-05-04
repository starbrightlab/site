# Technical Architecture

## Core Technology Stack

### Framework

- **Next.js**: Provides server-side rendering, static site generation, and optimized performance
- **React 18+**: For component-based UI development

### Styling

- **Tailwind CSS**: For utility-first styling that aligns with our design system
- **PostCSS**: For processing Tailwind and other CSS enhancements

### Animation

- **CSS Animations**: For simple, repeating motions
- **GSAP (GreenSock Animation Platform)**: For more complex animations like comet trails and parallax effects
- **Framer Motion**: For React component animations and transitions

### Performance Optimization

- **Next.js Image**: For automatic image optimization
- **Code Splitting**: Via Next.js built-in features
- **Lazy Loading**: For non-critical components and assets

### Development Tools

- **TypeScript**: For type safety and better developer experience
- **ESLint**: For code quality and consistency
- **Prettier**: For code formatting
- **Husky**: For pre-commit hooks to enforce code quality

## Tailwind CSS Configuration

### Custom Extensions

```javascript
// Example tailwind.config.js structure
module.exports = {
  theme: {
    extend: {
      colors: {
        cream: '#FFF7E6',
        aqua: '#AEE8E2',
        orange: '#F28C38',
        mustard: '#F2C849',
        teal: '#007C88',
        coral: '#F25D50',
        charcoal: '#2F2F2F',
        gold: '#D4A24C',
      },
      fontFamily: {
        retroScript: ['Pacifico', 'cursive'],
        retroSans: ['Space Grotesk', 'sans-serif'],
      },
      boxShadow: {
        'retro-pop': '4px 4px 0px rgba(0, 0, 0, 0.8)',
      },
      // Add custom rotation classes for tilted cards
      rotate: {
        'tilt-left': '-2deg',
        'tilt-right': '2deg',
      },
    },
  },
  plugins: [
    // Add any required Tailwind plugins here
  ],
};
```

## SVG Implementation

- Store SVG assets in `/public/svg/` directory
- Import SVGs as React components for interactive elements
- Implement CSS animations on SVG elements where appropriate
- Optimize all SVGs with SVGO before inclusion

## File Structure

plaintext```
/
├── components/             # React components
│   ├── atoms/              # Smallest UI elements
│   ├── molecules/          # Combinations of atoms
│   ├── organisms/          # Larger UI sections
│   ├── templates/          # Page layouts
│   └── animations/         # Animation components
├── contexts/               # React contexts
├── hooks/                  # Custom React hooks
├── pages/                  # Next.js pages
├── public/                 # Static assets
│   ├── svg/                # SVG assets
│   ├── fonts/              # Custom fonts
│   └── images/             # Site images
├── styles/                 # Global styles and Tailwind config
├── utils/                  # Utility functions
└── docs/                   # Project documentation

```plaintext

## Code Quality Standards

- Maximum file length: 250 lines (when possible)
- Component organization: Atomic Design principles
- Consistent naming:
  - camelCase for JavaScript/TypeScript variables and functions
  - PascalCase for React components and interfaces
  - kebab-case for CSS classes and file names

## Performance Targets

- Google Lighthouse scores:
  - Performance: ≥ 90
  - Accessibility: ≥ 95
  - Best Practices: ≥ 95
  - SEO: ≥ 90
- First Contentful Paint: < 1.2s
- Time to Interactive: < 3.0s
- First Input Delay: < 100ms

## Build and Deployment

- Next.js default build process
- Vercel deployment recommended for optimal Next.js performance
- CI/CD pipeline with automatic linting and testing
