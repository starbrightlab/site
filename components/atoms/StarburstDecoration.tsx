// components/atoms/StarburstDecoration.tsx
import React from 'react';
import { motion } from 'framer-motion';

interface StarburstDecorationProps {
  size?: number;
  pointCount?: number;
  innerRadius?: number;
  outerRadius?: number;
  color?: string;
  secondaryColor?: string;
  className?: string;
  animate?: boolean;
}

const StarburstDecoration: React.FC<StarburstDecorationProps> = ({
  size = 200,
  pointCount = 12,
  innerRadius = 40,
  outerRadius = 80,
  color = 'mustard',
  secondaryColor,
  className = '',
  animate = true,
}) => {
  // Create points for the starburst
  const createStarburstPoints = (points: number, innerR: number, outerR: number): string => {
    let pathData = '';
    const angleStep = (Math.PI * 2) / (points * 2);

    for (let i = 0; i < points * 2; i++) {
      const radius = i % 2 === 0 ? outerR : innerR;
      const x = radius * Math.cos(i * angleStep);
      const y = radius * Math.sin(i * angleStep);
      
      if (i === 0) {
        pathData += `M ${x} ${y} `;
      } else {
        pathData += `L ${x} ${y} `;
      }
    }

    return pathData + 'Z';
  };

  // Convert color name to Tailwind class
  const colorClass = `text-${color}`;
  const secondaryColorClass = secondaryColor ? `text-${secondaryColor}` : '';

  // Animation variants
  const starburstVariants = {
    static: {},
    rotating: {
      rotate: 360,
      transition: {
        duration: 60,
        ease: "linear",
        repeat: Infinity,
      }
    },
    pulsing: {
      scale: [1, 1.05, 1],
      transition: {
        duration: 3,
        ease: "easeInOut",
        repeat: Infinity,
      }
    }
  };

  return (
    <motion.div 
      className={`inline-block relative ${className} ${colorClass}`}
      style={{ width: size, height: size }}
      initial="static"
      animate={animate ? ["rotating", "pulsing"] : "static"}
      variants={starburstVariants}
    >
      <svg
        width="100%"
        height="100%"
        viewBox={`-100 -100 200 200`}
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Main starburst */}
        <path
          d={createStarburstPoints(pointCount, innerRadius, outerRadius)}
          fill="currentColor"
        />
        
        {/* Secondary inner starburst (if secondary color provided) */}
        {secondaryColor && (
          <motion.path
            d={createStarburstPoints(pointCount, innerRadius * 0.3, innerRadius * 0.8)}
            fill={`var(--tw-${secondaryColor})`}
            animate={{ 
              rotate: -360,
            }}
            transition={{
              duration: 45,
              ease: "linear",
              repeat: Infinity,
            }}
            style={{ transformOrigin: 'center' }}
          />
        )}
        
        {/* Center circle */}
        <circle cx="0" cy="0" r={innerRadius * 0.4} fill={secondaryColor ? `var(--tw-${secondaryColor})` : 'white'} />
      </svg>
    </motion.div>
  );
};

export default StarburstDecoration;