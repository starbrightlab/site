import React from 'react';
import { motion } from 'framer-motion';
import StarBurst from '@/components/interactive/StarBurst';
import Text from '@/components/core/Text';

export type TimelineEvent = {
  year: string;
  title: string;
  description: string;
  color?: 'orange' | 'teal' | 'aqua' | 'coral' | 'mustard' | 'gold';
};

type TimelineProps = {
  events: TimelineEvent[];
  className?: string;
};

/**
 * Timeline component for displaying company history in retro-futurist style
 *
 * According to the Animation Guidelines document:
 * - Timeline should have sequential reveal animation on scroll
 * - Should maintain the retro-futurist aesthetic while being responsive
 */
export const Timeline: React.FC<TimelineProps> = ({
  events,
  className = '',
}) => {
  // Color mapping to Tailwind classes
  const colorMap = {
    orange: 'bg-retro-orange border-retro-orange text-retro-orange',
    teal: 'bg-retro-teal border-retro-teal text-retro-teal',
    aqua: 'bg-retro-aqua border-retro-aqua text-retro-aqua',
    coral: 'bg-retro-coral border-retro-coral text-retro-coral',
    mustard: 'bg-retro-mustard border-retro-mustard text-retro-mustard',
    gold: 'bg-retro-gold border-retro-gold text-retro-gold',
  };

  // Animation variants for sequence reveal
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.1, 0.25, 1.0],
      },
    },
  };

  // Get default colors in alternating pattern
  const getDefaultColor = (
    index: number
  ): 'orange' | 'teal' | 'aqua' | 'coral' | 'mustard' | 'gold' => {
    const colors: (
      | 'orange'
      | 'teal'
      | 'aqua'
      | 'coral'
      | 'mustard'
      | 'gold'
    )[] = ['teal', 'orange', 'aqua', 'coral', 'mustard', 'gold'];
    return colors[index % colors.length];
  };

  return (
    <motion.div
      className={`relative flex flex-col ${className}`}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-100px' }}
      variants={containerVariants}
    >
      {/* Vertical line */}
      <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-retro-charcoal bg-opacity-20 transform -translate-x-1/2"></div>

      {events.map((event, index) => {
        const color = event.color || getDefaultColor(index);
        const isEven = index % 2 === 0;

        return (
          <motion.div
            key={index}
            className={`relative flex flex-col md:flex-row items-start mb-12 md:mb-16 ${isEven ? 'md:flex-row-reverse' : ''}`}
            variants={itemVariants}
          >
            {/* Timeline dot */}
            <div className="absolute left-4 md:left-1/2 top-0 w-8 h-8 transform -translate-x-1/2 z-10">
              <div
                className={`w-8 h-8 rounded-full border-4 ${colorMap[color]} flex items-center justify-center`}
              >
                <StarBurst size="sm" color={`text-white`} />
              </div>
            </div>

            {/* Content card */}
            <div
              className={`ml-16 md:ml-0 md:w-5/12 ${isEven ? 'md:pr-12' : 'md:pl-12'}`}
            >
              <div
                className={`rounded-lg p-5 bg-white shadow-retro-pop border-2 border-${color === 'aqua' ? 'retro-teal' : `retro-${color}`} ${isEven ? 'md:rotate-tilt-reverse' : 'md:rotate-tilt'}`}
              >
                <div className="flex items-center gap-2 mb-2">
                  <Text
                    size="lg"
                    weight="semibold"
                    color={`text-retro-${color}`}
                    className="inline-block"
                  >
                    {event.year}
                  </Text>
                </div>
                <Text weight="semibold" className="mb-2">
                  {event.title}
                </Text>
                <Text size="sm">{event.description}</Text>
              </div>
            </div>
          </motion.div>
        );
      })}
    </motion.div>
  );
};

export default Timeline;
