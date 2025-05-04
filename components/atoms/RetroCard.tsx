import React, { ReactNode } from 'react';

interface RetroCardProps {
  children: ReactNode;
  color?: 'aqua' | 'mustard' | 'coral' | 'teal';
  tilt?: 'left' | 'right' | 'none';
  hover?: boolean;
  className?: string;
}

const RetroCard: React.FC<RetroCardProps> = ({
  children,
  color = 'mustard',
  tilt = 'none',
  hover = true,
  className = '',
}) => {
  // Base classes
  const baseClasses = 'bg-white rounded-xl p-6 border-4 transition-all duration-300';
  
  // Border color
  const borderClasses = {
    aqua: 'border-aqua',
    mustard: 'border-mustard',
    coral: 'border-coral',
    teal: 'border-teal',
  };
  
  // Tilt classes
  const tiltClasses = {
    left: 'rotate-tilt-left',
    right: 'rotate-tilt-right',
    none: '',
  };
  
  // Hover effects
  const hoverClasses = hover
    ? 'shadow-retro-pop hover:shadow-none hover:-translate-x-1 hover:-translate-y-1'
    : 'shadow-retro-pop';
  
  // Combine all classes
  const cardClasses = `${baseClasses} ${borderClasses[color]} ${tiltClasses[tilt]} ${hoverClasses} ${className}`;
  
  return <div className={cardClasses}>{children}</div>;
};

export default RetroCard;
