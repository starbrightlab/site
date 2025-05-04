// components/animations/OrbitalAnimation.tsx
import React from 'react';
import { motion } from 'framer-motion';

interface OrbitalAnimationProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
  centerColor?: string;
  planetColors?: string[];
  speed?: 'slow' | 'medium' | 'fast';
}

const OrbitalAnimation: React.FC<OrbitalAnimationProps> = ({
  className = '',
  size = 'md',
  centerColor = 'bg-mustard',
  planetColors = ['bg-charcoal', 'bg-teal', 'bg-aqua'],
  speed = 'medium',
}) => {
  // Size configurations - updated with proper orbital positioning
  const sizeConfig = {
    sm: {
      wrapper: 'w-32 h-32',
      center: 'w-10 h-10',
      planets: ['w-3 h-3', 'w-4 h-4', 'w-3 h-3'],
      // Define orbit radii in pixels to match the dashed circles
      orbitRadii: [20, 32, 48], 
    },
    md: {
      wrapper: 'w-48 h-48',
      center: 'w-16 h-16',
      planets: ['w-4 h-4', 'w-6 h-6', 'w-5 h-5'],
      orbitRadii: [30, 48, 72],
    },
    lg: {
      wrapper: 'w-64 h-64',
      center: 'w-20 h-20',
      planets: ['w-6 h-6', 'w-8 h-8', 'w-7 h-7'],
      orbitRadii: [90, 120, 160],
    },
  };

  // Animation durations based on speed
  const speedConfig = {
    slow: [30, 45, 60],
    medium: [20, 30, 40],
    fast: [10, 15, 20],
  };

  // Extract the orbit diameters from the size config for CSS classes
  const orbitSizes = {
    sm: ['w-10 h-10', 'w-16 h-16', 'w-24 h-24'],
    md: ['w-16 h-16', 'w-24 h-24', 'w-36 h-36'],
    lg: ['w-20 h-20', 'w-32 h-32', 'w-48 h-48'],
  };

  return (
    <div className={`relative ${sizeConfig[size].wrapper} ${className}`}>
      {/* Center "sun" or "planet" */}
      <div className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 ${centerColor} rounded-full ${sizeConfig[size].center} flex items-center justify-center`}>
        {/* Inner starburst effect */}
        <div className="w-3/4 h-3/4 bg-white opacity-30 rounded-full"></div>
      </div>

      {/* Orbital rings */}
      {sizeConfig[size].orbitRadii.map((radius, index) => {
        // Calculate diameter (2 * radius) for the orbital ring
        const diameter = radius * 2;
        
        return (
          <div 
            key={`orbit-${index}`} 
            className="absolute top-1/2 left-1/2 border-2 border-dashed border-opacity-30 rounded-full"
            style={{ 
              borderColor: index === 0 ? 'var(--tw-colors-teal, #007C88)' : 
                          index === 1 ? 'var(--tw-colors-coral, #F25D50)' : 
                                      'var(--tw-colors-aqua, #AEE8E2)',
              width: `${diameter}px`,
              height: `${diameter}px`,
              transform: `translate(-50%, -50%) rotate(${index * 15}deg)`,
            }}
          ></div>
        );
      })}

      {/* Orbiting planets */}
      {planetColors.map((planetColor, index) => {
        const orbitDuration = speedConfig[speed][index];
        const orbitDelay = index * 2;
        const orbitRadius = sizeConfig[size].orbitRadii[index];
        const planetSize = sizeConfig[size].planets[index];
        
        // Extract width number from planetSize (e.g., 'w-4' => 4)
        const planetSizeNum = parseInt(planetSize.split('-')[1]);
        
        return (
          <motion.div
            key={`planet-${index}`}
            className="absolute top-1/2 left-1/2"
            animate={{
              rotate: 360,
            }}
            transition={{
              duration: orbitDuration,
              ease: "linear",
              repeat: Infinity,
              delay: orbitDelay,
            }}
            style={{ 
              width: '1px', // Just a point for rotation
              height: '1px',
              zIndex: 10,
            }}
          >
            <div
              className={`absolute ${planetColor} rounded-full ${planetSize}`}
              style={{ 
                // Position planet at the orbit radius, adjusted for planet size
                left: `${orbitRadius}px`,
                top: `-${planetSizeNum / 2}px`, // Center the planet vertically
                transform: 'translateX(-50%)', // Center horizontally
              }}
            >
              {/* Ring effect for middle planet */}
              {index === 1 && (
                <div className="absolute top-1/2 left-1/2 w-8 h-4 border border-white border-opacity-40 rounded-full -translate-x-1/2 -translate-y-1/2 transform rotate-12"></div>
              )}
            </div>
          </motion.div>
        );
      })}

      {/* Shooting star animation */}
      <motion.div 
        className="absolute w-2 h-1 bg-white opacity-70 rounded-full"
        style={{ filter: "blur(1px)" }}
        initial={{ top: "10%", left: "10%" }}
        animate={{ 
          top: "80%", 
          left: "80%",
          opacity: [0, 1, 0]
        }}
        transition={{
          duration: 2,
          ease: "easeOut",
          repeat: Infinity,
          repeatDelay: 5
        }}
      >
        <div className="w-4 h-0.5 bg-white opacity-30 -ml-3 rounded-full"></div>
      </motion.div>
    </div>
  );
};

export default OrbitalAnimation;