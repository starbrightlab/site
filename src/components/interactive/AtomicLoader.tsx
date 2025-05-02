import React from 'react';
import { motion } from 'framer-motion';

type AtomicLoaderProps = {
  size?: 'sm' | 'md' | 'lg';
  center?: boolean;
  color?: string;
  className?: string;
};

/**
 * AtomicLoader component for loading indicator with atomic orbit animation
 *
 * According to the Animation Guidelines document:
 * - Loading state should be visualized as an 'atomic reactor powering up' animation
 * - Maintains retro-futurist aesthetic for loading states
 */
export const AtomicLoader: React.FC<AtomicLoaderProps> = ({
  size = 'md',
  center = false,
  color = 'text-retro-orange',
  className = '',
}) => {
  // Size mapping
  const sizeMap = {
    sm: { width: 32, height: 32, core: 4, orbit: 2, particle: 4 },
    md: { width: 48, height: 48, core: 6, orbit: 2, particle: 6 },
    lg: { width: 64, height: 64, core: 8, orbit: 3, particle: 8 },
  };

  // Container classes
  const containerClasses = `
    relative
    ${center ? 'mx-auto' : ''}
    ${color}
    ${className}
  `;

  // Create orbital particles
  const particles = [0, 1, 2];

  return (
    <div
      className={containerClasses}
      style={{
        width: sizeMap[size].width,
        height: sizeMap[size].height,
      }}
      role="status"
      aria-label="Loading"
    >
      {/* Core */}
      <motion.div
        className="absolute rounded-full bg-current"
        style={{
          width: sizeMap[size].core * 2,
          height: sizeMap[size].core * 2,
          top: '50%',
          left: '50%',
          marginLeft: -sizeMap[size].core,
          marginTop: -sizeMap[size].core,
        }}
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.8, 1, 0.8],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />

      {/* Orbit rings */}
      <div
        className="absolute rounded-full border-current opacity-20"
        style={{
          width: '100%',
          height: '100%',
          top: 0,
          left: 0,
          borderWidth: sizeMap[size].orbit,
        }}
      />

      {/* Orbital particles */}
      {particles.map((particle, index) => (
        <motion.div
          key={index}
          className="absolute rounded-full bg-current"
          style={{
            width: sizeMap[size].particle,
            height: sizeMap[size].particle,
            top: '50%',
            left: '50%',
            marginLeft: -sizeMap[size].particle / 2,
            marginTop: -sizeMap[size].particle / 2,
          }}
          animate={{
            rotate: [0, 360],
          }}
          transition={{
            duration: 3 + index * 1.5, // Staggered orbit speeds
            repeat: Infinity,
            ease: 'linear',
          }}
        >
          <motion.div
            className="absolute rounded-full bg-current"
            style={{
              width: sizeMap[size].particle,
              height: sizeMap[size].particle,
              top: 0,
              left:
                sizeMap[size].width / 2 -
                sizeMap[size].particle / 2 -
                index * 2,
            }}
          />
        </motion.div>
      ))}

      {/* Screen reader text */}
      <span className="sr-only">Loading...</span>
    </div>
  );
};

export default AtomicLoader;
