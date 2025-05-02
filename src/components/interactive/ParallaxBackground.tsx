import React, { useEffect, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

type StarShape = {
  id: number;
  x: number;
  y: number;
  size: number;
  opacity: number;
  color: string;
};

type ParallaxBackgroundProps = {
  starCount?: number;
  parallaxFactor?: number;
  className?: string;
};

/**
 * ParallaxBackground component for adding depth and motion on scroll
 *
 * According to the Animation Guidelines document:
 * - Should add parallax effects for depth on background elements
 * - Should implement scroll-based interactions
 * - Should respect reduced motion preferences
 */
export const ParallaxBackground: React.FC<ParallaxBackgroundProps> = ({
  starCount = 50,
  parallaxFactor = 0.3,
  className = '',
}) => {
  const [stars, setStars] = useState<StarShape[]>([]);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);
  const { scrollY } = useScroll();

  // Generate random stars on component mount
  useEffect(() => {
    // Check for reduced motion preference
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReducedMotion(mediaQuery.matches);

    // Generate stars with random positions and properties
    const newStars: StarShape[] = [];
    for (let i = 0; i < starCount; i++) {
      newStars.push({
        id: i,
        x: Math.random() * 100, // percent
        y: Math.random() * 100, // percent
        size: Math.random() * 3 + 1, // 1-4px
        opacity: Math.random() * 0.5 + 0.3, // 0.3-0.8
        color: getRandomStarColor(),
      });
    }
    setStars(newStars);
  }, [starCount]);

  // Get a random color for the star
  const getRandomStarColor = (): string => {
    const colors = [
      '#FFFFFF', // white (most common)
      '#FFF9C4', // pale yellow
      '#BBDEFB', // pale blue
      '#FFE0B2', // pale orange
    ];

    // White stars are more common
    const rand = Math.random();
    if (rand < 0.7) return colors[0];
    else if (rand < 0.8) return colors[1];
    else if (rand < 0.9) return colors[2];
    else return colors[3];
  };

  // Group stars into 3 layers for parallax effect
  const getStarLayers = () => {
    const foreground: StarShape[] = [];
    const middle: StarShape[] = [];
    const background: StarShape[] = [];

    stars.forEach((star) => {
      const rand = Math.random();
      if (rand < 0.3) foreground.push(star);
      else if (rand < 0.6) middle.push(star);
      else background.push(star);
    });

    return { foreground, middle, background };
  };

  const { foreground, middle, background } = getStarLayers();

  // Create parallax transformations for each layer
  const foregroundY = useTransform(
    scrollY,
    [0, 1000],
    [0, 200 * parallaxFactor]
  );
  const middleY = useTransform(scrollY, [0, 1000], [0, 100 * parallaxFactor]);
  const backgroundY = useTransform(
    scrollY,
    [0, 1000],
    [0, 50 * parallaxFactor]
  );

  // Don't apply parallax if user prefers reduced motion
  const shouldApplyParallax = !prefersReducedMotion;

  return (
    <div
      className={`absolute inset-0 overflow-hidden pointer-events-none z-0 ${className}`}
    >
      {/* Foreground stars - fastest movement */}
      <motion.div
        className="absolute inset-0"
        style={{ y: shouldApplyParallax ? foregroundY : 0 }}
      >
        {foreground.map((star) => (
          <div
            key={`fg-${star.id}`}
            className="absolute rounded-full"
            style={{
              left: `${star.x}%`,
              top: `${star.y}%`,
              width: `${star.size}px`,
              height: `${star.size}px`,
              backgroundColor: star.color,
              opacity: star.opacity,
            }}
          />
        ))}
      </motion.div>

      {/* Middle layer stars - medium movement */}
      <motion.div
        className="absolute inset-0"
        style={{ y: shouldApplyParallax ? middleY : 0 }}
      >
        {middle.map((star) => (
          <div
            key={`mid-${star.id}`}
            className="absolute rounded-full"
            style={{
              left: `${star.x}%`,
              top: `${star.y}%`,
              width: `${star.size * 0.8}px`,
              height: `${star.size * 0.8}px`,
              backgroundColor: star.color,
              opacity: star.opacity * 0.8,
            }}
          />
        ))}
      </motion.div>

      {/* Background stars - slowest movement */}
      <motion.div
        className="absolute inset-0"
        style={{ y: shouldApplyParallax ? backgroundY : 0 }}
      >
        {background.map((star) => (
          <div
            key={`bg-${star.id}`}
            className="absolute rounded-full"
            style={{
              left: `${star.x}%`,
              top: `${star.y}%`,
              width: `${star.size * 0.6}px`,
              height: `${star.size * 0.6}px`,
              backgroundColor: star.color,
              opacity: star.opacity * 0.6,
            }}
          />
        ))}
      </motion.div>

      {/* Static radial gradient overlay */}
      <div className="absolute inset-0 bg-gradient-radial from-transparent to-retro-charcoal opacity-40" />
    </div>
  );
};

export default ParallaxBackground;
