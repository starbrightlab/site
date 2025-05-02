import React from 'react';

type SectionDividerProps = {
  variant?: 'wave' | 'orbital' | 'atomic';
  flip?: boolean;
  color?: string;
  className?: string;
};

/**
 * SectionDivider component for creating visual separation between sections
 *
 * According to the Component Library Documentation:
 * - Implement wave or curved dividers between sections
 * - Use SVG paths for custom section breaks
 */
export const SectionDivider: React.FC<SectionDividerProps> = ({
  variant = 'wave',
  flip = false,
  color = '',
  className = '',
}) => {
  // Default color classes based on variant
  const defaultColors = {
    wave: 'text-retro-orange',
    orbital: 'text-retro-aqua',
    atomic: 'text-retro-mustard',
  };

  // Use provided color or default
  const textColor = color || defaultColors[variant];

  // Combine classes
  const dividerClasses = `
    w-full h-12 md:h-16
    ${textColor}
    ${className}
  `;

  // SVG transform for flipping
  const transform = flip ? 'rotate(180)' : '';

  // Different divider paths based on variant
  const renderPath = () => {
    switch (variant) {
      case 'wave':
        return (
          <path
            fill="currentColor"
            d="M0,100 C480,0 960,200 1440,100 L1440,0 L0,0 Z"
            transform={transform}
          />
        );
      case 'orbital':
        return (
          <path
            fill="currentColor"
            d="M0,100 Q360,40 720,100 T1440,100 L1440,0 L0,0 Z"
            transform={transform}
          />
        );
      case 'atomic':
        return (
          <path
            fill="currentColor"
            d="M0,100 Q180,20 360,100 T720,100 T1080,100 T1440,100 L1440,0 L0,0 Z"
            transform={transform}
          />
        );
      default:
        return (
          <path
            fill="currentColor"
            d="M0,100 C480,0 960,200 1440,100 L1440,0 L0,0 Z"
            transform={transform}
          />
        );
    }
  };

  return (
    <div className="w-full overflow-hidden relative">
      <svg
        className={dividerClasses}
        viewBox="0 0 1440 100"
        fill="none"
        preserveAspectRatio="none"
      >
        {renderPath()}
      </svg>
    </div>
  );
};

export default SectionDivider;
