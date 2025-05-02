# Starbright Lab Website

Welcome to the repository for the Starbright Lab company website. This project implements a retro-futurist design aesthetic inspired by 1950s visions of the future and the visual language of "Hello Tomorrow!"

## Project Vision

Starbright Lab's website embodies optimistic mid-century modernism, as if we were building the future from the vantage point of the 1950s. The design reflects space-age consumerism and atomic age optimism, where everything feels sleek, radiant, and forward-looking.

## Design Direction

The visual direction follows these key principles:

- **Era:** 1950s–1960s American retro-futurism
- **Influences:** *Hello Tomorrow!* (Apple TV), *The Jetsons*, Googie architecture, mid-century NASA posters
- **Mood:** Optimistic, imaginative, nostalgic yet forward-thinking
- **Color Palette:** Warm oranges, mustard yellows, aqua blues, mint greens with charcoal and metallic accents
- **Typography:** Mid-century inspired script paired with clean geometric sans-serif

## Getting Started

### Prerequisites

- Node.js (v16+)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/starbrightlab-site.git
cd starbrightlab-site
```

2. Install dependencies:
```bash
npm install
# or
yarn
```

3. Start the development server:
```bash
npm run dev
# or
yarn dev
```

4. Open your browser and navigate to `http://localhost:3000`

## Project Structure

This project follows a Next.js structure with Tailwind CSS for styling:

```
starbrightlab-site/
├── public/             # Static assets
├── src/                # Application source code
│   ├── components/     # React components
│   ├── pages/          # Next.js pages
│   ├── styles/         # Global styles
│   ├── utils/          # Utility functions
│   └── hooks/          # Custom React hooks
├── docs/               # Project documentation
├── tailwind.config.js  # Tailwind configuration
├── next.config.js      # Next.js configuration
└── package.json        # Dependencies and scripts
```

## Project Documentation

Detailed documentation for this project is available in the `/docs` directory:

- [Project Instructions](docs/project-instructions.md) - Overall guidelines and requirements
- [Design System](docs/design-system.md) - Color palette, typography, and component styling
- [Component Library](docs/components.md) - Technical specifications for UI components
- [Technical Architecture](docs/technical-architecture.md) - Stack details and implementation approach
- [Animation Guidelines](docs/animations.md) - Specifications for motion and interactions
- [Content Strategy](docs/content-strategy.md) - Voice, tone, and messaging guidelines

## Development Guidelines

### Mobile-First Approach

This project follows a strict mobile-first development approach:

- Design and implement for smallest screens first
- Progressive enhancement for larger viewports
- Touch-optimized interfaces with sufficient spacing
- Performance optimization for mobile devices

### Code Standards

- Follow the ESLint and Prettier configurations
- Use TypeScript for type safety
- Implement accessible components (WCAG 2.1 AA)
- Write unit tests for components and utilities

### Performance Targets

- Lighthouse performance score: 90+
- First Contentful Paint: < 1.2s
- Largest Contentful Paint: < 2.5s
- Time to Interactive: < 3.5s
- Bundle size: < 200KB (initial load)

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build production version
- `npm start` - Start production server
- `npm run lint` - Run ESLint
- `npm run format` - Run Prettier
- `npm run test` - Run unit tests

## Contributing

1. Create a feature branch from `main`
2. Implement your changes following the project guidelines
3. Ensure all tests pass and code meets quality standards
4. Submit a pull request with a clear description of changes

## License

This project is licensed under the [MIT License](LICENSE).

## Acknowledgments

- Design inspiration from Apple TV's "Hello Tomorrow!"
- Icons and illustrations created by the Starbright Lab design team
- Built with Next.js, React, and Tailwind CSS
