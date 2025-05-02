# Starbright Lab - Component Library Documentation

This document outlines the technical specifications for all reusable UI components in the Starbright Lab website. Each component follows the retro-futurist design system while ensuring responsive behavior and accessibility.

## Component Hierarchy

```
├── Layout
│   ├── PageContainer
│   ├── Header
│   ├── Footer
│   ├── Section
│   └── SectionDivider
├── Navigation
│   ├── MainNav
│   ├── NavLink
│   ├── HamburgerMenu
│   └── MobileNav
├── Core
│   ├── Button
│   ├── Card
│   ├── IconButton
│   ├── Typography
│   │   ├── Heading
│   │   └── Text
│   └── Spinner
├── Form
│   ├── Input
│   ├── Select
│   ├── Checkbox
│   ├── Radio
│   └── FormGroup
└── Interactive
    ├── CometTrail
    ├── StarBurst
    ├── OrbitAnimation
    └── AtomicLoader
```

## Layout Components

### PageContainer

Container for all page content with consistent padding and max-width constraints.

**Props:**
- `children`: React.ReactNode
- `fullWidth`: boolean (default: false) - Removes max-width constraint
- `withGrain`: boolean (default: true) - Applies subtle grain texture

**Usage:**
```jsx
<PageContainer>
  <YourContent />
</PageContainer>
```

**Tailwind Classes:**
```jsx
<div className={`bg-retro-cream min-h-screen ${withGrain ? 'bg-grain' : ''} ${fullWidth ? 'w-full' : 'max-w-6xl mx-auto'}`}>
  {children}
</div>
```

### Header

Main site header with logo, navigation, and mobile menu.

**Props:**
- `transparent`: boolean (default: false) - For hero section overlay

**Usage:**
```jsx
<Header transparent />
```

**States:**
- Default: Solid background with shadow
- Transparent: For overlay on hero sections
- Scrolled: Shadow and background appear on scroll

### Section

Content section with consistent spacing and optional background variations.

**Props:**
- `id`: string - For navigation anchors
- `children`: React.ReactNode
- `variant`: 'default' | 'highlight' | 'dark' (default: 'default')
- `spacing`: 'normal' | 'compact' | 'wide' (default: 'normal')

**Usage:**
```jsx
<Section id="about" variant="highlight" spacing="wide">
  <YourContent />
</Section>
```

**Tailwind Classes:**
```jsx
<section 
  id={id}
  className={`
    px-6 
    ${spacing === 'compact' ? 'py-6 md:py-8' : spacing === 'wide' ? 'py-12 md:py-20' : 'py-10 md:py-16'}
    ${variant === 'highlight' ? 'bg-radial-burst text-white' : variant === 'dark' ? 'bg-retro-charcoal text-retro-cream' : 'bg-retro-cream text-retro-charcoal'}
  `}
>
  {children}
</section>
```

### SectionDivider

Decorative divider between sections with retro-futurist wave or geometric pattern.

**Props:**
- `variant`: 'wave' | 'orbital' | 'atomic' (default: 'wave')
- `flip`: boolean (default: false) - Flips the divider vertically
- `color`: string - Tailwind color class (default depends on variant)

**Usage:**
```jsx
<SectionDivider variant="orbital" flip />
```

## Navigation Components

### MainNav

Primary navigation component that adapts between mobile and desktop.

**Props:**
- `items`: Array of navigation items with label and href

**Usage:**
```jsx
const navItems = [
  { label: 'Mission', href: '#mission' },
  { label: 'Services', href: '#services' },
  { label: 'Team', href: '#team' },
  { label: 'Contact', href: '#contact' }
];

<MainNav items={navItems} />
```

### NavLink

Individual navigation link with hover and active states.

**Props:**
- `href`: string
- `children`: React.ReactNode
- `active`: boolean - Current page/section indicator
- `mobile`: boolean - For mobile styling variant

**Usage:**
```jsx
<NavLink href="#mission" active>Mission</NavLink>
```

**Tailwind Classes:**
```jsx
<a 
  href={href}
  className={`
    font-retroSans uppercase tracking-widest text-sm
    transition duration-300
    px-3 py-2
    ${mobile ? 'text-xl py-4' : ''}
    ${active 
      ? 'text-retro-orange relative after:content-[""] after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:w-2 after:h-2 after:bg-retro-orange after:rounded-full' 
      : 'hover:text-retro-orange'}
  `}
>
  {children}
</a>
```

## Core Components

### Button

Primary interaction element with multiple variants.

**Props:**
- `children`: React.ReactNode
- `variant`: 'primary' | 'secondary' | 'text' (default: 'primary')
- `size`: 'sm' | 'md' | 'lg' (default: 'md')
- `onClick`: () => void
- `disabled`: boolean
- `fullWidth`: boolean
- `icon`: React.ReactNode - Optional icon
- `iconPosition`: 'left' | 'right' (default: 'left')

**Usage:**
```jsx
<Button variant="primary" size="lg" onClick={handleClick}>
  Launch Demo
</Button>

<Button variant="secondary" icon={<RocketIcon />}>
  Blast Off
</Button>
```

**Tailwind Classes (Primary):**
```jsx
<button
  onClick={onClick}
  disabled={disabled}
  className={`
    bg-retro-orange text-white font-retroSans 
    rounded-full shadow-retro-pop
    uppercase tracking-widest
    transform transition duration-300
    hover:bg-retro-coral focus:outline-none focus:ring-2 focus:ring-retro-gold
    flex items-center justify-center
    ${size === 'sm' ? 'text-xs px-4 py-2' : size === 'lg' ? 'text-base px-8 py-4' : 'text-sm px-6 py-3'}
    ${fullWidth ? 'w-full' : ''}
    ${disabled ? 'opacity-50 cursor-not-allowed' : ''}
  `}
>
  {icon && iconPosition === 'left' && <span className="mr-2">{icon}</span>}
  {children}
  {icon && iconPosition === 'right' && <span className="ml-2">{icon}</span>}
</button>
```

### Card

Content container with retro-futurist styling.

**Props:**
- `children`: React.ReactNode
- `variant`: 'default' | 'feature' | 'alert' | 'premium' (default: 'default')
- `tilted`: boolean | 'left' | 'right' (default: false)
- `interactive`: boolean - For clickable cards
- `onClick`: () => void - For interactive cards

**Usage:**
```jsx
<Card variant="feature" tilted="right">
  <CardContent>
    <h3>Futurist Vision</h3>
    <p>Explore space-age innovation for everyday life.</p>
  </CardContent>
</Card>
```

**Tailwind Classes:**
```jsx
<div
  onClick={interactive ? onClick : undefined}
  className={`
    bg-white rounded-xl p-6 
    border-4 
    shadow-retro-pop
    transition duration-300
    ${variant === 'feature' ? 'border-retro-aqua' : 
      variant === 'alert' ? 'border-retro-coral' : 
      variant === 'premium' ? 'border-retro-gold' : 
      'border-retro-cream'}
    ${tilted === true || tilted === 'right' ? 'rotate-tilt' : 
      tilted === 'left' ? '-rotate-tilt' : ''}
    ${interactive ? 'cursor-pointer hover:transform hover:scale-105' : ''}
  `}
>
  {children}
</div>
```

### Typography

Consistent text styling components.

#### Heading

**Props:**
- `children`: React.ReactNode
- `level`: 1 | 2 | 3 | 4 | 5 | 6 (default: 1)
- `script`: boolean - Uses retroScript font (default depends on level)
- `color`: string - Tailwind color class
- `className`: string - Additional classes

**Usage:**
```jsx
<Heading level={2} script>Welcome to Tomorrow</Heading>
<Heading level={3} color="text-retro-teal">Our Services</Heading>
```

#### Text

**Props:**
- `children`: React.ReactNode
- `size`: 'xs' | 'sm' | 'base' | 'lg' | 'xl' (default: 'base')
- `weight`: 'normal' | 'medium' | 'semibold' (default: 'normal')
- `color`: string - Tailwind color class
- `uppercase`: boolean
- `tracking`: 'normal' | 'wide' | 'wider' | 'widest' (default: 'normal')
- `className`: string - Additional classes

**Usage:**
```jsx
<Text size="lg" weight="medium">
  Building the future one pixel at a time.
</Text>

<Text uppercase tracking="widest" size="sm">
  Established 2025
</Text>
```

## Form Components

### Input

Text input field with retro styling.

**Props:**
- `id`: string - Required for label association
- `name`: string
- `type`: 'text' | 'email' | 'password' | 'number' | 'tel' (default: 'text')
- `label`: string
- `placeholder`: string
- `value`: string
- `onChange`: (e: ChangeEvent<HTMLInputElement>) => void
- `error`: string - Error message
- `disabled`: boolean

**Usage:**
```jsx
<Input
  id="email"
  name="email"
  type="email"
  label="Email Address"
  placeholder="your@email.com"
  value={email}
  onChange={handleEmailChange}
  error={errors.email}
/>
```

**Tailwind Classes:**
```jsx
<div className="mb-4">
  {label && (
    <label htmlFor={id} className="block font-retroSans text-sm text-retro-charcoal mb-1">
      {label}
    </label>
  )}
  <input
    id={id}
    name={name}
    type={type}
    placeholder={placeholder}
    value={value}
    onChange={onChange}
    disabled={disabled}
    className={`
      w-full px-4 py-3
      bg-white border-2 rounded-lg
      font-retroSans text-retro-charcoal
      focus:outline-none focus:ring-2 focus:ring-retro-teal
      transition duration-300
      ${error ? 'border-retro-coral' : 'border-retro-charcoal'}
      ${disabled ? 'opacity-50 cursor-not-allowed' : ''}
    `}
  />
  {error && (
    <p className="mt-1 text-retro-coral text-sm">{error}</p>
  )}
</div>
```

## Interactive Components

### CometTrail

Animated comet/shooting star effect for visual interest.

**Props:**
- `size`: 'sm' | 'md' | 'lg' (default: 'md')
- `position`: 'random' | 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right'
- `delay`: number - Animation delay in ms
- `duration`: number - Animation duration in ms (default: 6000)

**Usage:**
```jsx
<CometTrail size="lg" position="top-right" />
```

**Implementation Notes:**
- Uses CSS animations with randomization for natural effect
- Reduces frequency on smaller screens for performance
- Respects reduced motion preferences

### StarBurst

Atomic-style starburst decoration.

**Props:**
- `size`: 'sm' | 'md' | 'lg' (default: 'md')
- `color`: string - Tailwind color class (default: 'text-retro-gold')
- `position`: 'center' | 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right'
- `animate`: boolean - Pulsing animation (default: false)

**Usage:**
```jsx
<StarBurst size="sm" color="text-retro-aqua" position="top-right" animate />
```

### AtomicLoader

Loading indicator with atomic orbit animation.

**Props:**
- `size`: 'sm' | 'md' | 'lg' (default: 'md')
- `center`: boolean - Center in parent container
- `color`: string - Tailwind color class (default: 'text-retro-orange')

**Usage:**
```jsx
<AtomicLoader size="lg" center />
```

## Accessibility Considerations

All components are designed with the following accessibility features:

1. **Keyboard Navigation**
   - All interactive elements are focusable
   - Focus states are visually distinct
   - Logical tab order is maintained

2. **Screen Readers**
   - Proper aria labels for interactive elements
   - Semantic HTML structure
   - Hidden descriptive text for visual elements

3. **Color and Contrast**
   - Text meets WCAG AA standards (minimum 4.5:1 for regular text)
   - Interactive states have sufficient contrast
   - Non-color indicators for state changes

4. **Motion and Animation**
   - All animations respect prefers-reduced-motion
   - No essential content depends on animation
   - Animation timing is appropriate for cognitive accessibility

## Responsive Behavior

All components adapt to different screen sizes with these principles:

1. **Mobile-First Approach**
   - Components designed for smallest screens first
   - Progressive enhancement for larger screens
   - Touch-friendly target sizes (minimum 44×44px)

2. **Breakpoint Behavior**
   - Components maintain consistent functionality across breakpoints
   - Visual design adapts appropriately
   - Proper spacing/padding adjustments

3. **Performance Considerations**
   - Simpler animations on mobile
   - Appropriate image sizing
   - Reduced visual complexity on smaller screens

## Implementation Examples

### Hero Section with CometTrail

```jsx
<Section variant="highlight" spacing="wide" className="relative overflow-hidden">
  <CometTrail size="lg" position="top-right" />
  <CometTrail size="md" position="bottom-left" delay={2000} />
  
  <div className="max-w-4xl mx-auto text-center">
    <Heading level={1} script>Starbright Lab</Heading>
    <Heading level={2} className="mt-4">Designing Tomorrow, Today</Heading>
    
    <Text size="lg" className="mt-6 mb-8">
      Building tools with vintage vision and cosmic curiosity.
    </Text>
    
    <Button size="lg">
      Launch the Future
    </Button>
  </div>
</Section>
```

### Feature Cards Grid

```jsx
<Section id="services">
  <Heading level={2} className="text-center mb-12">Our Services</Heading>
  
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
    <Card variant="feature" tilted="right">
      <div className="flex items-center gap-2 mb-4">
        <StarBurst size="sm" color="text-retro-orange" />
        <Heading level={3} script color="text-retro-orange">Futurist Design</Heading>
      </div>
      <Text>
        We blend nostalgic charm with future-forward UX for immersive experiences.
      </Text>
    </Card>
    
    <Card variant="feature" tilted="left">
      <div className="flex items-center gap-2 mb-4">
        <StarBurst size="sm" color="text-retro-teal" />
        <Heading level={3} script color="text-retro-teal">Rocket-Speed Dev</Heading>
      </div>
      <Text>
        Our workflows are efficient, modular, and built to scale with your mission.
      </Text>
    </Card>
    
    <Card variant="feature" tilted="right">
      <div className="flex items-center gap-2 mb-4">
        <StarBurst size="sm" color="text-retro-gold" />
        <Heading level={3} script color="text-retro-gold">Cosmic Vision</Heading>
      </div>
      <Text>
        We're not just building apps—we're creating experiences that dream big.
      </Text>
    </Card>
  </div>
</Section>
```

This document serves as a technical reference for all UI components in the Starbright Lab website. Components should be implemented following these specifications to ensure consistency, accessibility, and responsive behavior across the site.