# Starbright Lab - Technical Architecture

This document outlines the technical architecture for the Starbright Lab website, detailing the technology stack, build configuration, folder structure, and development approach to achieve a performant, accessible, retro-futurist website.

## Technology Stack

### Core Technologies

- **HTML5**: Semantic markup for accessibility and SEO
- **CSS/Tailwind CSS**: For styling with atomic utility classes
- **JavaScript**: For interactive elements and animations
- **React**: Component-based UI development

### Build & Development Tools

- **Next.js**: React framework for server-side rendering and static site generation
- **TypeScript**: Type safety and developer experience
- **ESLint**: Code quality and consistency
- **Prettier**: Code formatting
- **PostCSS**: Processing Tailwind and custom CSS
- **Framer Motion**: For advanced animations

### Performance Optimization

- **Next.js Image**: Automatic image optimization
- **Next.js Font**: Web font optimization with zero layout shift
- **Incremental Static Regeneration**: For content updates without full rebuilds

## Project Structure

```
starbrightlab-site/
├── public/                  # Static assets
│   ├── fonts/               # Self-hosted fonts if needed
│   ├── images/              # Static images
│   │   ├── icons/           # Icons and SVGs
│   │   ├── backgrounds/     # Background patterns and textures
│   │   └── decorative/      # Decorative elements
│   └── favicons/            # Favicon variations
├── src/
│   ├── components/          # React components
│   │   ├── layout/          # Layout components
│   │   ├── core/            # Core UI components
│   │   ├── form/            # Form-related components
│   │   ├── navigation/      # Navigation components
│   │   └── interactive/     # Animation/interactive components
│   ├── pages/               # Next.js pages
│   │   ├── _app.tsx         # App wrapper
│   │   ├── _document.tsx    # Document customization
│   │   ├── index.tsx        # Homepage
│   │   ├── about.tsx        # About page
│   │   └── contact.tsx      # Contact page
│   ├── styles/              # Global styles
│   │   ├── globals.css      # Global CSS
│   │   └── animations.css   # Animation keyframes
│   ├── utils/               # Utility functions
│   │   ├── animations.ts    # Animation utilities
│   │   └── responsive.ts    # Responsive helpers
│   ├── hooks/               # Custom React hooks
│   │   ├── useMediaQuery.ts # Media query hook
│   │   └── useScrollPosition.ts # Scroll tracking
│   ├── context/             # React context providers
│   ├── types/               # TypeScript type definitions
│   └── data/                # Static site data
├── tailwind.config.js       # Tailwind configuration
├── postcss.config.js        # PostCSS configuration
├── tsconfig.json            # TypeScript configuration
├── .eslintrc.js             # ESLint configuration
├── .prettierrc              # Prettier configuration
├── next.config.js           # Next.js configuration
└── package.json             # Dependencies and scripts
```

## Build Configuration

### Tailwind Configuration

The Tailwind configuration extends the default theme with retro-futurist design tokens:

```js
// tailwind.config.js
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
  ],
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
        retroScript: ['var(--font-pacifico)', 'cursive'],
        retroSans: ['var(--font-space-grotesk)', 'sans-serif'],
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
  plugins: [
    require('@tailwindcss/forms'),
  ],
};
```

### ESLint Configuration

```js
// .eslintrc.js
module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
  env: {
    browser: true,
    node: true,
    es6: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'plugin:jsx-a11y/recommended',
    'plugin:prettier/recommended',
    'next',
    'next/core-web-vitals',
  ],
  rules: {
    'react/react-in-jsx-scope': 'off',
    'react/prop-types': 'off',
    'jsx-a11y/anchor-is-valid': [
      'error',
      {
        components: ['Link'],
        specialLink: ['hrefLeft', 'hrefRight'],
        aspects: ['invalidHref', 'preferButton'],
      },
    ],
    'prettier/prettier': ['error', {}, { usePrettierrc: true }],
  },
};
```

### Prettier Configuration

```js
// .prettierrc
{
  "semi": true,
  "trailingComma": "es5",
  "singleQuote": true,
  "printWidth": 80,
  "tabWidth": 2,
  "useTabs": false,
  "endOfLine": "auto"
}
```

### Next.js Configuration

```js
// next.config.js
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [], // Add any external image domains here
  },
  i18n: {
    locales: ['en'],
    defaultLocale: 'en',
  },
  // Reduce motion option for accessibility
  experimental: {
    // Any experimental features
  },
};

module.exports = nextConfig;
```

## Performance Strategy

### Core Web Vitals Optimization

1. **Largest Contentful Paint (LCP)**
   - Optimize critical rendering path
   - Preload hero images
   - Implement progressive font loading

2. **First Input Delay (FID)**
   - Minimize JavaScript execution time
   - Defer non-critical JS
   - Use Web Workers for complex calculations

3. **Cumulative Layout Shift (CLS)**
   - Set explicit dimensions for all media
   - Use Next.js Image component
   - Pre-calculate space for dynamic content

### Image Optimization

1. **SVG Usage**
   - Use SVG for all icons and decorative elements
   - Optimize SVGs with SVGO
   - Inline critical SVGs

2. **Raster Images**
   - Compress with WebP format
   - Use responsive images with srcset
   - Lazy load below-the-fold images

3. **Background Patterns**
   - Use small, tileable patterns
   - Implement as CSS background patterns where possible
   - Optimize SVG patterns for size

### Font Strategy

1. **Font Loading**
   - Use `next/font` for zero layout shift
   - Implement font-display: swap
   - Consider variable fonts for efficiency

2. **Font Subsetting**
   - Include only necessary characters
   - Use language-specific subsets

```jsx
// Example font implementation in _app.tsx
import { Space_Grotesk, Pacifico } from 'next/font/google';

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-space-grotesk',
  display: 'swap',
});

const pacifico = Pacifico({
  weight: ['400'],
  variable: '--font-pacifico',
  display: 'swap',
});

export default function App({ Component, pageProps }) {
  return (
    <main className={`${spaceGrotesk.variable} ${pacifico.variable}`}>
      <Component {...pageProps} />
    </main>
  );
}
```

## Animation Implementation

### Animation Strategy

1. **CSS Animations**
   - Use for simple, repeating animations
   - Implement with Tailwind's animation utilities
   - Optimize with will-change property

2. **Framer Motion**
   - Use for complex, interaction-based animations
   - Implement shared layout animations
   - Handle entrance/exit animations

3. **Scroll-Based Animations**
   - Implement with Intersection Observer
   - Use minimal animations on mobile

4. **Reduced Motion**
   - Respect prefers-reduced-motion media query
   - Provide static alternatives
   
```jsx
// Example of respecting reduced motion preferences
import { useReducedMotion } from 'framer-motion';

const MyComponent = () => {
  const prefersReducedMotion = useReducedMotion();
  
  const animationProps = prefersReducedMotion
    ? { initial: {}, animate: {} } // No animation
    : {
        initial: { opacity: 0, y: 20 },
        animate: { opacity: 1, y: 0 },
        transition: { duration: 0.5 },
      };
  
  return <motion.div {...animationProps}>Content</motion.div>;
};
```

## Accessibility Implementation

### Accessibility Strategy

1. **Semantic HTML**
   - Use appropriate HTML5 elements
   - Implement proper heading hierarchy
   - Use landmarks and ARIA roles

2. **Keyboard Navigation**
   - Ensure all interactive elements are keyboard accessible
   - Implement visible focus states
   - Test tab order

3. **Screen Readers**
   - Provide alt text for all images
   - Use aria-label for interactive elements
   - Implement skip links

4. **Color Contrast**
   - Ensure text meets WCAG AA guidelines
   - Provide high contrast mode option
   - Test with color blindness simulators

5. **ARIA Implementation**
   - Use aria-expanded for toggles
   - Implement aria-live for dynamic content
   - Test with screen readers

## Mobile-First Implementation

Following the mobile-first mandate, all components and layouts are developed with the following approach:

1. **Start with Mobile Design**
   - Design and implement for smallest screens first
   - Use Tailwind's responsive utilities to enhance for larger screens
   - Test interaction on touch devices

2. **Progressive Enhancement**
   - Basic functionality works on all devices
   - Enhance with more complex animations on desktop
   - Optimize touch targets for mobile

3. **Performance Considerations**
   - Reduce animation complexity on mobile
   - Optimize image sizes for different viewports
   - Implement resource hints and preloading

Example of mobile-first implementation in a component:

```jsx
// ExampleCard.tsx
const ExampleCard = ({ title, description, icon }) => {
  return (
    <div className="
      bg-white 
      rounded-xl 
      p-4 md:p-6 
      border-4 border-retro-aqua 
      shadow-retro-pop
      w-full md:w-auto
      transform
      rotate-tilt
      transition duration-300
    ">
      <div className="flex flex-col md:flex-row items-start md:items-center gap-2 mb-2">
        {icon && <div className="text-retro-orange">{icon}</div>}
        <h3 className="font-retroScript text-retro-orange text-xl md:text-2xl">
          {title}
        </h3>
      </div>
      <p className="font-retroSans text-sm md:text-base">
        {description}
      </p>
    </div>
  );
};
```

## Deployment Strategy

### CI/CD Pipeline

1. **GitHub Actions**
   - Automated testing
   - Linting and type checking
   - Build preview for PRs

2. **Vercel Deployment**
   - Production deployment on main branch
   - Preview deployments for PRs
   - Automated performance monitoring

3. **Quality Gates**
   - Lighthouse CI for performance monitoring
   - Bundle size limits
   - Accessibility testing

### Environment Configuration

1. **Production**
   - Fully optimized build
   - CDN caching
   - Analytics enabled

2. **Staging**
   - Mirror of production
   - Testing environment
   - Reduced caching

3. **Development**
   - Fast refresh enabled
   - Debug tools
   - No optimizations

## Development Workflow

### Setup Process

1. Clone repository
2. Install dependencies with `npm install`
3. Start development server with `npm run dev`
4. Access site at http://localhost:3000

### Development Commands

- `npm run dev` - Start development server
- `npm run build` - Build production version
- `npm start` - Start production server
- `npm run lint` - Run ESLint
- `npm run format` - Run Prettier
- `npm run type-check` - Run TypeScript type checking

### Pre-commit Hooks

Implement with Husky:
- Run ESLint
- Run Prettier
- Validate commit messages

## Browser Support

The website targets modern browsers with the following support matrix:

- Chrome (latest 2 versions)
- Firefox (latest 2 versions)
- Safari (latest 2 versions)
- Edge (latest 2 versions)
- iOS Safari (latest 2 versions)
- Android Chrome (latest 2 versions)

Legacy browser support is provided through:
- Autoprefixer
- Core-js polyfills
- Graceful degradation of animations and effects

## Conclusion

This technical architecture provides a solid foundation for building the Starbright Lab website with a retro-futurist aesthetic while ensuring mobile-first design, accessibility, and performance. All technical decisions should align with this document and the accompanying design system.

By implementing this architecture, we'll create a website that feels like it came from the future as imagined by the 1950s — fun, elegant, and full of promise — while delivering a modern, responsive, and accessible user experience.