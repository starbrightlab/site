import React from 'react';

type TextProps = {
  children: React.ReactNode;
  size?: 'xs' | 'sm' | 'base' | 'lg' | 'xl';
  weight?: 'normal' | 'medium' | 'semibold';
  color?: string;
  uppercase?: boolean;
  tracking?: 'normal' | 'wide' | 'wider' | 'widest';
  className?: string;
  as?: 'p' | 'span' | 'div';
};

/**
 * Text component for consistent typography styling
 *
 * According to the Design System document:
 * - Body: Retro Sans, 16px (mobile) / 18px (desktop), Regular, normal line height
 * - Small/Caption: Retro Sans, 14px, Regular, wide tracking
 */
export const Text: React.FC<TextProps> = ({
  children,
  size = 'base',
  weight = 'normal',
  color = '',
  uppercase = false,
  tracking = 'normal',
  className = '',
  as = 'p',
}) => {
  // Size classes
  const sizeClasses = {
    xs: 'text-xs',
    sm: 'text-sm',
    base: 'text-base md:text-lg',
    lg: 'text-lg md:text-xl',
    xl: 'text-xl md:text-2xl',
  };

  // Weight classes
  const weightClasses = {
    normal: 'font-normal',
    medium: 'font-medium',
    semibold: 'font-semibold',
  };

  // Tracking classes
  const trackingClasses = {
    normal: '',
    wide: 'tracking-wide',
    wider: 'tracking-wider',
    widest: 'tracking-widest',
  };

  // Combine all classes
  const textClasses = `
    font-retroSans
    ${sizeClasses[size]}
    ${weightClasses[weight]}
    ${trackingClasses[tracking]}
    ${uppercase ? 'uppercase' : ''}
    ${color}
    ${className}
  `;

  // Render the appropriate text element based on 'as' prop
  switch (as) {
    case 'span':
      return <span className={textClasses}>{children}</span>;
    case 'div':
      return <div className={textClasses}>{children}</div>;
    case 'p':
    default:
      return <p className={textClasses}>{children}</p>;
  }
};

export default Text;
