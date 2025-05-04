import React from 'react';
import { motion } from 'framer-motion';

interface RetroLoaderProps {
  size?: 'sm' | 'md' | 'lg';
  text?: string;
  className?: string;
}

const RetroLoader: React.FC<RetroLoaderProps> = ({
  size = 'md',
  text = 'Loading',
  className = '',
}) => {
  // Size mappings
  const sizes = {
    sm: {
      container: 'w-16 h-16',
      outerRing: 'w-16 h-16',
      middleRing: 'w-12 h-12',
      innerRing: 'w-8 h-8',
      core: 'w-4 h-4',
      textClass: 'text-xs mt-2',
    },
    md: {
      container: 'w-24 h-24',
      outerRing: 'w-24 h-24',
      middleRing: 'w-16 h-16',
      innerRing: 'w-10 h-10',
      core: 'w-5 h-5',
      textClass: 'text-sm mt-3',
    },
    lg: {
      container: 'w-32 h-32',
      outerRing: 'w-32 h-32',
      middleRing: 'w-24 h-24',
      innerRing: 'w-16 h-16',
      core: 'w-8 h-8',
      textClass: 'text-base mt-4',
    },
  };

  // Animation variants
  const ringVariants = {
    animate: (custom: number) => ({
      rotate: [0, 360],
      transition: {
        repeat: Infinity,
        duration: 3,
        ease: 'linear',
        delay: custom * 0.2,
      },
    }),
  };
  
  const pulseVariants = {
    animate: {
      scale: [0.8, 1.2, 0.8],
      opacity: [0.7, 1, 0.7],
      transition: {
        repeat: Infinity,
        duration: 2,
        ease: 'easeInOut',
      },
    },
  };
  
  const textVariants = {
    animate: {
      opacity: [0.5, 1, 0.5],
      transition: {
        repeat: Infinity,
        duration: 1.5,
        ease: 'easeInOut',
      },
    },
  };

  return (
    <div className={`flex flex-col items-center justify-center ${className}`}>
      <div className={`relative ${sizes[size].container}`}>
        {/* Outer ring */}
        <motion.div
          className={`absolute border-4 border-dashed border-coral rounded-full ${sizes[size].outerRing}`}
          variants={ringVariants}
          custom={0}
          animate="animate"
        ></motion.div>
        
        {/* Middle ring */}
        <motion.div
          className={`absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 border-3 border-dotted border-aqua rounded-full ${sizes[size].middleRing}`}
          variants={ringVariants}
          custom={1}
          animate="animate"
          style={{ rotate: 45 }}
        ></motion.div>
        
        {/* Inner ring */}
        <motion.div
          className={`absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 border-2 border-mustard rounded-full ${sizes[size].innerRing}`}
          variants={ringVariants}
          custom={2}
          animate="animate"
          style={{ rotate: 90 }}
        ></motion.div>
        
        {/* Central atom */}
        <motion.div
          className={`absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-teal rounded-full ${sizes[size].core}`}
          variants={pulseVariants}
          animate="animate"
        ></motion.div>
      </div>
      
      {text && (
        <motion.div
          className={`font-retroScript text-teal ${sizes[size].textClass}`}
          variants={textVariants}
          animate="animate"
        >
          {text}
        </motion.div>
      )}
    </div>
  );
};

export default RetroLoader;
