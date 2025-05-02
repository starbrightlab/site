import React from 'react';

type SectionProps = {
  children: React.ReactNode;
  id?: string;
  variant?: 'default' | 'highlight' | 'dark';
  spacing?: 'normal' | 'compact' | 'wide';
  className?: string;
  withGrain?: boolean;
};

/**
 * Section component for consistent layout and spacing
 *
 * According to the Component Library documentation, sections should have:
 * - Consistent spacing (normal, compact, wide options)
 * - Optional background variations
 * - Appropriate padding that adapts to screen size
 */
export const Section: React.FC<SectionProps> = ({
  children,
  id,
  variant = 'default',
  spacing = 'normal',
  className = '',
  withGrain = false,
}) => {
  // Base classes
  const baseClasses = 'relative px-6';

  // Spacing classes - mobile first approach with responsive padding
  const spacingClasses = {
    compact: 'py-6 md:py-8',
    normal: 'py-10 md:py-16',
    wide: 'py-12 md:py-20',
  };

  // Variant classes for background and text colors
  const variantClasses = {
    default: 'bg-retro-cream text-retro-charcoal',
    highlight: 'bg-radial-burst text-white',
    dark: 'bg-retro-charcoal text-retro-cream',
  };

  // Combine all classes
  const sectionClasses = `
    ${baseClasses}
    ${spacingClasses[spacing]}
    ${variantClasses[variant]}
    ${withGrain ? 'halftone-overlay' : ''}
    ${className}
  `;

  return (
    <section id={id} className={sectionClasses}>
      {children}
    </section>
  );
};

export default Section;
