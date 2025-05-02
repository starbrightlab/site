import React from 'react';
import { motion } from 'framer-motion';

type StarBurstProps = {
  size?: 'sm' | 'md' | 'lg';
  color?: string;
  position?:
    | 'center'
    | 'top-left'
    | 'top-right'
    | 'bottom-left'
    | 'bottom-right';
  animate?: boolean;
  className?: string;
};

/**
 * StarBurst component for atomic-style starburst decoration
 *
 * According to the Design Motifs in the Project Instructions document:
 * - Atomic-style starbursts are a key design element
 * - Animation should be subtle and purposeful
 */
export const StarBurst: React.FC<StarBurstProps> = ({
  size = 'md',
  color = 'text-retro-gold',
  position = 'center',
  animate = false,
  className = '',
}) => {
  // Size mapping
  const sizeMap = {
    sm: { width: 20, height: 20 },
    md: { width: 32, height: 32 },
    lg: { width: 48, height: 48 },
  };

  // Position classes
  const positionClasses = {
    center: 'relative',
    'top-left': 'absolute top-0 left-0',
    'top-right': 'absolute top-0 right-0',
    'bottom-left': 'absolute bottom-0 left-0',
    'bottom-right': 'absolute bottom-0 right-0',
  };

  // Animation variants
  const starburstVariants = {
    static: {},
    animated: {
      rotate: 360,
      scale: [0.95, 1.05, 0.95],
      transition: {
        rotate: {
          duration: 20,
          repeat: Infinity,
          ease: 'linear',
        },
        scale: {
          duration: 3,
          repeat: Infinity,
          ease: 'easeInOut',
        },
      },
    },
  };

  return (
    <motion.svg
      className={`${color} ${positionClasses[position]} ${className}`}
      width={sizeMap[size].width}
      height={sizeMap[size].height}
      viewBox="0 0 24 24"
      fill="currentColor"
      initial="static"
      animate={animate ? 'animated' : 'static'}
      variants={starburstVariants}
    >
      {/* 8-point starburst */}
      <path d="M12 0L14 8.25L22 10L14 11.75L12 20L10 11.75L2 10L10 8.25L12 0Z" />
    </motion.svg>
  );
};

export default StarBurst;
