import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

type OrbitElement = {
  id: number;
  element: React.ReactNode;
  distance: number;
  speed: number;
  size: number;
  initialAngle?: number;
  clockwise?: boolean;
};

type OrbitAnimationProps = {
  elements: OrbitElement[];
  centerElement?: React.ReactNode;
  centerSize?: number;
  className?: string;
};

/**
 * OrbitAnimation component for creating orbital animations around a central element
 *
 * According to the Animation Guidelines document:
 * - Should create orbital path animations
 * - Should respect reduced motion preferences
 */
export const OrbitAnimation: React.FC<OrbitAnimationProps> = ({
  elements,
  centerElement,
  centerSize = 80,
  className = '',
}) => {
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  // Check for reduced motion preference
  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReducedMotion(mediaQuery.matches);
  }, []);

  // Calculate position on orbit
  const calculatePosition = (
    distance: number,
    angle: number
  ): { x: number; y: number } => {
    return {
      x: distance * Math.cos(angle * (Math.PI / 180)),
      y: distance * Math.sin(angle * (Math.PI / 180)),
    };
  };

  return (
    <div
      className={`relative ${className}`}
      style={{
        width: Math.max(...elements.map((e) => e.distance * 2 + e.size)) + 20,
        height: Math.max(...elements.map((e) => e.distance * 2 + e.size)) + 20,
      }}
    >
      {/* Center element */}
      {centerElement && (
        <div
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10"
          style={{
            width: centerSize,
            height: centerSize,
          }}
        >
          {centerElement}
        </div>
      )}

      {/* Orbit paths (decorative) */}
      {elements.map((element) => (
        <div
          key={`path-${element.id}`}
          className="absolute top-1/2 left-1/2 rounded-full border border-retro-charcoal border-opacity-10 transform -translate-x-1/2 -translate-y-1/2"
          style={{
            width: element.distance * 2,
            height: element.distance * 2,
          }}
        />
      ))}

      {/* Orbiting elements */}
      {elements.map((element) => {
        // Calculate initial position
        const initialAngle = element.initialAngle || Math.random() * 360;
        const initialPosition = calculatePosition(
          element.distance,
          initialAngle
        );

        // Animation duration (one complete orbit)
        const duration = 20 / element.speed;

        // Direction of orbit
        const direction = element.clockwise !== false;

        // Handle reduced motion preference
        if (prefersReducedMotion) {
          // Static position for reduced motion
          return (
            <div
              key={`element-${element.id}`}
              className="absolute"
              style={{
                width: element.size,
                height: element.size,
                top: '50%',
                left: '50%',
                marginTop: -element.size / 2,
                marginLeft: -element.size / 2,
                transform: `translate(${initialPosition.x}px, ${initialPosition.y}px)`,
              }}
            >
              {element.element}
            </div>
          );
        }

        return (
          <motion.div
            key={`element-${element.id}`}
            className="absolute"
            style={{
              width: element.size,
              height: element.size,
              top: '50%',
              left: '50%',
              marginTop: -element.size / 2,
              marginLeft: -element.size / 2,
            }}
            initial={{
              x: initialPosition.x,
              y: initialPosition.y,
              rotate: 0,
            }}
            animate={{
              x: [
                initialPosition.x,
                ...Array.from({ length: 3 }, (_, i) => {
                  const angle = initialAngle + (i + 1) * (direction ? 90 : -90);
                  return calculatePosition(element.distance, angle).x;
                }),
                initialPosition.x,
              ],
              y: [
                initialPosition.y,
                ...Array.from({ length: 3 }, (_, i) => {
                  const angle = initialAngle + (i + 1) * (direction ? 90 : -90);
                  return calculatePosition(element.distance, angle).y;
                }),
                initialPosition.y,
              ],
              rotate: direction ? 360 : -360,
            }}
            transition={{
              duration: duration,
              ease: 'linear',
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          >
            {element.element}
          </motion.div>
        );
      })}
    </div>
  );
};

export default OrbitAnimation;
