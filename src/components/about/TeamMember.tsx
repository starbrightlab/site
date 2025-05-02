import React from 'react';
import { motion } from 'framer-motion';
import Text from '@/components/core/Text';
import Heading from '@/components/core/Heading';

type TeamMemberProps = {
  name: string;
  title: string;
  bio: string;
  photoUrl: string;
  orbitElements?: {
    icon: React.ReactNode;
    color: string;
    size?: number;
    distance?: number;
    duration?: number;
    delay?: number;
  }[];
  className?: string;
};

/**
 * TeamMember component for displaying team information with orbital animations
 *
 * According to the Animation Guidelines document:
 * - Team Member Cards should have orbital animation around photos
 * - Should maintain the retro-futurist aesthetic
 * - Should respect reduced motion preferences
 */
export const TeamMember: React.FC<TeamMemberProps> = ({
  name,
  title,
  bio,
  photoUrl,
  orbitElements = [],
  className = '',
}) => {
  // Animation variants for reveal
  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.7,
        ease: [0.25, 0.1, 0.25, 1.0],
      },
    },
  };

  // Function to generate orbital positions
  const calculateOrbitPosition = (
    distance: number,
    angle: number
  ): { x: number; y: number } => {
    return {
      x: distance * Math.cos(angle * (Math.PI / 180)),
      y: distance * Math.sin(angle * (Math.PI / 180)),
    };
  };

  return (
    <motion.div
      className={`flex flex-col items-center text-center ${className}`}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-50px' }}
      variants={cardVariants}
    >
      {/* Photo with orbital elements */}
      <div className="relative w-48 h-48 mb-6">
        {/* Main photo */}
        <div className="w-full h-full rounded-full overflow-hidden border-4 border-retro-teal shadow-retro-pop bg-white">
          {photoUrl ? (
            <div
              className="w-full h-full bg-cover bg-center"
              style={{ backgroundImage: `url(${photoUrl})` }}
            ></div>
          ) : (
            <div className="w-full h-full bg-retro-aqua flex items-center justify-center">
              <Text size="lg">{name.charAt(0)}</Text>
            </div>
          )}
        </div>

        {/* Orbital elements */}
        {orbitElements.map((element, index) => {
          const distance = element.distance || 80; // Default distance from center
          const duration = element.duration || 20; // Default orbit duration in seconds
          const delay = element.delay || index * 2; // Staggered delay
          const size = element.size || 36; // Default element size

          return (
            <motion.div
              key={index}
              className="absolute"
              style={{
                width: size,
                height: size,
                top: '50%',
                left: '50%',
                marginTop: -size / 2,
                marginLeft: -size / 2,
              }}
              initial={{
                x: calculateOrbitPosition(distance, 0).x,
                y: calculateOrbitPosition(distance, 0).y,
              }}
              animate={{
                x: [
                  calculateOrbitPosition(distance, 0).x,
                  calculateOrbitPosition(distance, 90).x,
                  calculateOrbitPosition(distance, 180).x,
                  calculateOrbitPosition(distance, 270).x,
                  calculateOrbitPosition(distance, 360).x,
                ],
                y: [
                  calculateOrbitPosition(distance, 0).y,
                  calculateOrbitPosition(distance, 90).y,
                  calculateOrbitPosition(distance, 180).y,
                  calculateOrbitPosition(distance, 270).y,
                  calculateOrbitPosition(distance, 360).y,
                ],
              }}
              transition={{
                x: {
                  duration: duration,
                  ease: 'linear',
                  repeat: Infinity,
                  delay: delay,
                },
                y: {
                  duration: duration,
                  ease: 'linear',
                  repeat: Infinity,
                  delay: delay,
                },
              }}
            >
              <div
                className={`${element.color} w-full h-full flex items-center justify-center`}
              >
                {element.icon}
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Name and title */}
      <Heading level={3} script className="mb-1">
        {name}
      </Heading>
      <Text
        uppercase
        tracking="widest"
        size="sm"
        color="text-retro-teal"
        className="mb-3"
      >
        {title}
      </Text>

      {/* Bio text */}
      <Text size="sm" className="max-w-sm">
        {bio}
      </Text>
    </motion.div>
  );
};

export default TeamMember;
