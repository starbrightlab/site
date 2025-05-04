import React, { ReactNode } from 'react';
import { motion } from 'framer-motion';

interface RetroCardProps {
  children: ReactNode;
  color?: 'aqua' | 'mustard' | 'coral' | 'teal';
  tilt?: 'left' | 'right' | 'none';
  hover?: boolean;
  className?: string;
  elevated?: boolean;
  variant?: 'solid' | 'outlined';
  rounded?: 'default' | 'bean';
}

const RetroCard: React.FC<RetroCardProps> = ({
  children,
  color = 'mustard',
  tilt = 'none',
  hover = true,
  className = '',
  elevated = true,
  variant = 'outlined',
  rounded = 'default',
}) => {
  // Base classes
  const baseClasses = 'transition-all duration-300 p-6';
  
  // Variant styles
  const variantClasses = {
    outlined: {
      aqua: 'bg-white border-4 border-aqua',
      mustard: 'bg-white border-4 border-mustard',
      coral: 'bg-white border-4 border-coral',
      teal: 'bg-white border-4 border-teal',
    },
    solid: {
      aqua: 'bg-aqua border-4 border-aqua/50 text-charcoal',
      mustard: 'bg-mustard border-4 border-mustard/50 text-charcoal',
      coral: 'bg-coral border-4 border-coral/50 text-white',
      teal: 'bg-teal border-4 border-teal/50 text-white',
    },
  };
  
  // Rounded corners
  const roundedClasses = {
    default: 'rounded-xl',
    bean: 'rounded-bean',
  };
  
  // Tilt classes
  const tiltClasses = {
    left: 'rotate-tilt-left',
    right: 'rotate-tilt-right',
    none: '',
  };
  
  // Hover effects
  const hoverClasses = hover
    ? 'transform hover:-translate-y-2 hover:-translate-x-1 hover:scale-[1.02] hover:shadow-retro-pop'
    : '';
  
  // Shadow styles
  const shadowClasses = elevated 
    ? 'shadow-card-shadow' 
    : '';
  
  // Combine all classes
  const cardClasses = `
    ${baseClasses} 
    ${variantClasses[variant][color]} 
    ${roundedClasses[rounded]} 
    ${tiltClasses[tilt]} 
    ${hoverClasses} 
    ${shadowClasses} 
    ${className}
  `;
  
  return (
    <motion.div 
      className={cardClasses}
      initial={tilt !== 'none' ? { rotate: tilt === 'left' ? -3 : 3 } : {}}
      whileHover={hover ? { y: -8, x: -4, scale: 1.02 } : {}}
      transition={{ type: "spring", stiffness: 300, damping: 15 }}
    >
      {children}
    </motion.div>
  );
};

export default RetroCard;
