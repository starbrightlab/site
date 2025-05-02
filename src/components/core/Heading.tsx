import React from 'react';

type HeadingProps = {
  children: React.ReactNode;
  level?: 1 | 2 | 3 | 4 | 5 | 6;
  script?: boolean;
  color?: string;
  className?: string;
};

/**
 * Heading component for consistent typography styling
 *
 * According to the Design System document:
 * - H1: Retro Script, 42px (mobile) / 64px (desktop)
 * - H2: Retro Sans, 28px (mobile) / 36px (desktop), SemiBold, wide tracking
 * - H3: Retro Script, 24px (mobile) / 32px (desktop)
 * - H4: Retro Sans, 18px (mobile) / 24px (desktop), SemiBold, wide tracking
 */
export const Heading: React.FC<HeadingProps> = ({
  children,
  level = 1,
  script, // If undefined, will use the default for the heading level
  color = '',
  className = '',
}) => {
  // Determine if script font should be used based on heading level
  const useScript = script !== undefined ? script : level === 1 || level === 3; // H1 and H3 use script font by default

  // Font family class based on script property
  const fontClass = useScript ? 'font-retroScript' : 'font-retroSans';

  // Size and weight classes based on heading level
  const sizeClasses = {
    1: 'text-4xl md:text-6xl leading-tight',
    2: 'text-2xl md:text-4xl font-semibold tracking-wide',
    3: 'text-xl md:text-3xl leading-snug',
    4: 'text-lg md:text-2xl font-semibold tracking-wide',
    5: 'text-base md:text-xl font-semibold',
    6: 'text-sm md:text-lg font-semibold tracking-wide',
  };

  // Combine all classes
  const headingClasses = `
    ${fontClass}
    ${sizeClasses[level]}
    ${color}
    ${className}
  `;

  // Render the appropriate heading element based on level
  switch (level) {
    case 1:
      return <h1 className={headingClasses}>{children}</h1>;
    case 2:
      return <h2 className={headingClasses}>{children}</h2>;
    case 3:
      return <h3 className={headingClasses}>{children}</h3>;
    case 4:
      return <h4 className={headingClasses}>{children}</h4>;
    case 5:
      return <h5 className={headingClasses}>{children}</h5>;
    case 6:
      return <h6 className={headingClasses}>{children}</h6>;
    default:
      return <h1 className={headingClasses}>{children}</h1>;
  }
};

export default Heading;
