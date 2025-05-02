# Starbright Lab Website

A retro-futurist website inspired by 1950s visions of the future and the visual language of "Hello Tomorrow!"

## Overview

This project implements a company website for Starbright Lab with a distinctive retro-futurist aesthetic. The design embodies optimistic mid-century modernism while following modern web development best practices including:

- Mobile-first design approach
- Accessibility considerations
- Performance optimization
- Component-based architecture

## Tech Stack

- **Next.js**: React framework for server-side rendering
- **TypeScript**: Type safety and improved developer experience
- **Tailwind CSS**: Utility-first CSS framework
- **Framer Motion**: Animation library
- **ESLint/Prettier**: Code quality and formatting

## Getting Started

1. **Install dependencies**

   ```bash
   npm install
   ```

2. **Start the development server**

   ```bash
   npm run dev
   ```

3. **Open [http://localhost:3000](http://localhost:3000) in your browser**

## Project Structure

- `/src/components`: React components organized by type
  - `/core`: Basic UI components (Button, Card, Typography)
  - `/layout`: Layout components (Header, Footer, Section)
  - `/interactive`: Animation components (CometTrail, StarBurst)
- `/src/pages`: Next.js pages
- `/src/styles`: Global styles and animations
- `/public`: Static assets including images
- `/docs`: Project documentation
  - `design-system.md`: Color palette, typography, and component styling
  - `technical-architecture.md`: Technology stack and implementation details
  - `animations.md`: Animation guidelines and specifications
  - `components.md`: Component library documentation
  - `content-strategy.md`: Voice, tone, and messaging guidelines
  - `next-steps.md`: Upcoming development priorities

## Design System

The design follows a retro-futurist aesthetic inspired by 1950s visions of the future:

- **Color Palette**: Warm oranges, mustard yellows, aqua blues, mint greens
- **Typography**: Retro script fonts for headings, clean geometric sans-serif for body text
- **Design Motifs**: Shooting stars, rockets, atomic starbursts, curved lines
- **Animation**: Subtle animations enhancing the retro-futurist theme

## Commands

- `npm run dev`: Start development server
- `npm run build`: Build for production
- `npm start`: Start production server
- `npm run lint`: Run ESLint
- `npm run format`: Run Prettier

## License

This project is licensed under the MIT License - see the LICENSE file for details.
