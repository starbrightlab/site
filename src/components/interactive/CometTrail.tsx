import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

type CometTrailProps = {
  size?: 'sm' | 'md' | 'lg';
  position?:
    | 'random'
    | 'top-left'
    | 'top-right'
    | 'bottom-left'
    | 'bottom-right';
  delay?: number;
  duration?: number;
  className?: string;
};

/**
 * CometTrail component for animated shooting star effect
 *
 * According to the Animation Guidelines document:
 * - Comet trails should have randomized size and path
 * - Animation timing should be appropriate (6s default)
 * - Should respect reduced motion preferences
 */
export const CometTrail: React.FC<CometTrailProps> = ({
  size = 'md',
  position = 'random',
  delay = 0,
  duration = 6000,
  className = '',
}) => {
  const [randomPosition, setRandomPosition] = useState({
    top: '10%',
    left: '0%',
    rotate: '-15deg',
  });

  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  // Size classes
  const sizeMap = {
    sm: { width: 24, height: 24 },
    md: { width: 32, height: 32 },
    lg: { width: 48, height: 48 },
  };

  // Set position based on prop or random
  useEffect(() => {
    // Check for reduced motion preference
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReducedMotion(mediaQuery.matches);

    // Only set random position if not already fixed
    if (position === 'random') {
      const topPos = Math.floor(Math.random() * 70) + 10 + '%';
      const leftPos = Math.floor(Math.random() * 20) + '%';
      const rotateVal = Math.floor(Math.random() * 30) - 15 + 'deg';

      setRandomPosition({
        top: topPos,
        left: leftPos,
        rotate: rotateVal,
      });
    }
  }, [position]);

  // Fixed positions
  const positionStyles = () => {
    switch (position) {
      case 'top-left':
        return { top: '10%', left: '0%', rotate: '-15deg' };
      case 'top-right':
        return { top: '10%', left: '70%', rotate: '-15deg' };
      case 'bottom-left':
        return { top: '60%', left: '0%', rotate: '-5deg' };
      case 'bottom-right':
        return { top: '60%', left: '70%', rotate: '-25deg' };
      case 'random':
      default:
        return randomPosition;
    }
  };

  // Animation variants
  const cometVariants = {
    initial: {
      x: '-150%',
      y: 0,
      opacity: 0,
    },
    animate: {
      x: '300%',
      y: -50,
      opacity: [0, 1, 1, 0],
      transition: {
        duration: duration / 1000, // convert to seconds for Framer
        delay: delay / 1000,
        ease: 'easeInOut',
        repeat: Infinity,
        repeatDelay: Math.random() * 5 + 2, // random delay between 2-7s
      },
    },
  };

  // If user prefers reduced motion, don't animate
  if (prefersReducedMotion) {
    return null;
  }

  return (
    <motion.svg
      className={`absolute ${className}`}
      style={positionStyles()}
      width={sizeMap[size].width}
      height={sizeMap[size].height}
      viewBox="0 0 64 64"
      fill="none"
      initial="initial"
      animate="animate"
      variants={cometVariants}
    >
      <path d="M64 32L0 0L18 32L0 64L64 32Z" fill="white" opacity="0.8" />
      <path d="M64 32L18 24L24 32L18 40L64 32Z" fill="white" />
    </motion.svg>
  );
};

export default CometTrail;
