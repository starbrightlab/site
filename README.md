# Starbright Lab Website

A retro-futurist themed website for Starbright Lab, inspired by 1950s visions of the future and the visual language of Apple TV series like "Hello Tomorrow!" and "For All Mankind".

## 🚀 Project Status

The project is currently in Phase 3: Performance and Enhancement. Core sections are complete with working animations and responsive design.

## 🎨 Design Vision

The website embodies 1950s-1960s American retro-futurism with:
- Atomic-style starbursts and space-age elements
- A rich color palette featuring aqua blues, mint greens, warm oranges, and mustard yellows
- Typography combining retro script fonts with clean geometric sans-serif
- Animation that enhances the retro-futurist theme without compromising performance

## 🛠️ Tech Stack

- **Next.js**: React framework for server-side rendering and static site generation
- **Tailwind CSS**: Utility-first CSS framework with custom configuration for our design system
- **Framer Motion**: Animation library for React components
- **TypeScript**: For type safety and better developer experience

## 🧩 Key Components

The website includes:
- Responsive navigation with retro-futurist styling
- Hero section with atomic-age animations
- About section with tilted cards
- Services showcase with icon-based presentation
- Portfolio grid with filtering capabilities
- Contact form with retro styling
- Custom 404 page with space theme

## 💻 Development Principles

The project follows these key principles:
1. **Mobile-first design**: All elements are designed for smallest screens first
2. **Performance optimization**: Minimal payload size, progressive enhancement
3. **Accessibility**: Working toward WCAG 2.1 AA compliance
4. **Clean code**: Maintainable structure with atomic design principles

## 📂 Folder Structure

```
/
├── components/             # React components
│   ├── atoms/              # Smallest UI elements
│   ├── molecules/          # Combinations of atoms
│   ├── organisms/          # Larger UI sections
│   ├── templates/          # Page layouts
│   └── animations/         # Animation components
├── pages/                  # Next.js pages
├── public/                 # Static assets
│   ├── svg/                # SVG assets
│   ├── fonts/              # Custom fonts
│   └── images/             # Site images
├── styles/                 # Global styles and Tailwind config
└── docs/                   # Project documentation
```

## 📝 Documentation

For more detailed information about the project, refer to the following documents in the `/docs` directory:
- [Project Overview](./docs/project-overview.md)
- [Design System](./docs/design-system.md)
- [Mobile-First Principles](./docs/mobile-first-principles.md)
- [Technical Architecture](./docs/technical-architecture.md)
- [Implementation Plan](./docs/implementation-plan.md)

## 🏁 Next Steps

1. **Optimize images and media**
   - Implement Next.js Image component
   - Add proper loading states
   - Ensure performance optimization

2. **Enhance accessibility**
   - Implement ARIA attributes
   - Ensure keyboard navigation
   - Test with screen readers

3. **Connect form functionality**
   - Add form validation
   - Connect to backend service
   - Create success/error notifications

## 🚀 Getting Started

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```
3. Run the development server:
   ```bash
   npm run dev
   ```
4. Open [http://localhost:3000](http://localhost:3000) in your browser
