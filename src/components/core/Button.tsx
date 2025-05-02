import React from 'react';
import { motion } from 'framer-motion';

type ButtonProps = {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'text';
  size?: 'sm' | 'md' | 'lg';
  onClick?: () => void;
  disabled?: boolean;
  fullWidth?: boolean;
  icon?: React.ReactNode;
  iconPosition?: 'left' | 'right';
  className?: string;
  type?: 'button' | 'submit' | 'reset';
};

/**
 * Button component that follows the retro-futurist design system
 *
 * As specified in the Component Library Documentation, buttons use
 * rounded-full shapes with retro styling and consistent naming conventions
 * (e.g., "Launch", "Orbit", "Blast Off")
 */
export const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  size = 'md',
  onClick,
  disabled = false,
  fullWidth = false,
  icon,
  iconPosition = 'left',
  className = '',
  type = 'button',
}) => {
  // Base classes for all buttons
  const baseClasses =
    'font-retroSans rounded-full transform transition duration-300 uppercase tracking-widest flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-retro-gold';

  // Size specific classes
  const sizeClasses = {
    sm: 'text-xs px-4 py-2',
    md: 'text-sm px-6 py-3',
    lg: 'text-base px-8 py-4',
  };

  // Variant specific classes
  const variantClasses = {
    primary: 'bg-retro-orange text-white shadow-retro-pop hover:bg-retro-coral',
    secondary:
      'bg-transparent text-retro-teal border-2 border-retro-teal hover:bg-retro-teal hover:text-white',
    text: 'bg-transparent text-retro-teal hover:underline',
  };

  // Combine all classes
  const buttonClasses = `
    ${baseClasses}
    ${sizeClasses[size]}
    ${variantClasses[variant]}
    ${fullWidth ? 'w-full' : ''}
    ${disabled ? 'opacity-50 cursor-not-allowed' : ''}
    ${className}
  `;

  // Button hover animation
  const hoverAnimation = !disabled
    ? {
        scale: 1.05,
        transition: { duration: 0.2 },
      }
    : {};

  return (
    <motion.button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={buttonClasses}
      whileHover={hoverAnimation}
      whileTap={{ scale: disabled ? 1 : 0.98 }}
    >
      {icon && iconPosition === 'left' && <span className="mr-2">{icon}</span>}
      {children}
      {icon && iconPosition === 'right' && <span className="ml-2">{icon}</span>}
    </motion.button>
  );
};

export default Button;
