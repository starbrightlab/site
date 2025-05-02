import React from 'react';
import { motion } from 'framer-motion';

type CardProps = {
  children: React.ReactNode;
  variant?: 'default' | 'feature' | 'alert' | 'premium';
  tilted?: boolean | 'left' | 'right';
  interactive?: boolean;
  onClick?: () => void;
  className?: string;
};

/**
 * Card component following the retro-futurist design system
 *
 * As specified in the Component Library Documentation:
 * - Cards have colorful borders (3-4px)
 * - Use shadow-retro-pop for dimensional shadowing
 * - Apply slight rotation for dynamic visual appeal
 * - Rounded corners for the retro look
 */
export const Card: React.FC<CardProps> = ({
  children,
  variant = 'default',
  tilted = false,
  interactive = false,
  onClick,
  className = '',
}) => {
  // Base classes
  const baseClasses =
    'bg-white rounded-xl p-6 border-4 shadow-retro-pop transition duration-300';

  // Variant classes for border colors
  const variantClasses = {
    default: 'border-retro-cream',
    feature: 'border-retro-aqua',
    alert: 'border-retro-coral',
    premium: 'border-retro-gold',
  };

  // Tilt classes
  const getTiltClasses = () => {
    if (tilted === true || tilted === 'right') return 'rotate-tilt';
    if (tilted === 'left') return '-rotate-tilt';
    return '';
  };

  // Interactive classes
  const interactiveClasses = interactive
    ? 'cursor-pointer hover:transform hover:scale-105'
    : '';

  // Combine all classes
  const cardClasses = `
    ${baseClasses}
    ${variantClasses[variant]}
    ${getTiltClasses()}
    ${interactiveClasses}
    ${className}
  `;

  // Card animations
  const cardVariants = {
    hover: {
      y: -5,
      boxShadow: '6px 6px 0px rgba(0, 0, 0, 0.25)',
    },
  };

  return interactive ? (
    <motion.div
      className={cardClasses}
      onClick={onClick}
      whileHover="hover"
      variants={cardVariants}
    >
      {children}
    </motion.div>
  ) : (
    <div className={cardClasses}>{children}</div>
  );
};

export default Card;
