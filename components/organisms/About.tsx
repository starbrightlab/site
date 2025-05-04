import React from 'react';
import RetroCard from '../atoms/RetroCard';
import MountainDivider from '../atoms/MountainDivider';
import { motion } from 'framer-motion';

const About: React.FC = () => {
  // Animation variants for the cards
  const cardVariants = {
    offscreen: { y: 50, opacity: 0 },
    onscreen: (i: number) => ({
      y: 0,
      opacity: 1,
      transition: {
        type: 'spring',
        bounce: 0.4,
        duration: 0.8,
        delay: i * 0.2,
      },
    }),
  };

  // About cards data
  const aboutCards = [
    {
      title: 'Our Vision',
      content: 'Inspired by the optimistic futurism of the 1950s, we bring a fresh perspective to modern innovation. We believe in technology that empowers and delights.',
      color: 'aqua' as const,
      tilt: 'left' as const,
    },
    {
      title: 'Our Approach',
      content: 'We combine retro aesthetics with cutting-edge solutions to create memorable experiences. Every project is an opportunity to blend nostalgia with innovation.',
      color: 'coral' as const,
      tilt: 'none' as const,
    },
    {
      title: 'Our Promise',
      content: 'Quality, creativity, and attention to detail are at the heart of everything we do. We are committed to delivering solutions that exceed expectations.',
      color: 'mustard' as const,
      tilt: 'right' as const,
    },
  ];

  return (
    <>
      <section id="about" className="py-20 bg-teal text-cream relative overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-aqua opacity-10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-coral opacity-10 rounded-full blur-3xl"></div>
        
        <div className="container mx-auto px-6 relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="font-retroScript text-4xl mb-6">About Starbright Lab</h2>
            <p className="max-w-2xl mx-auto text-lg">
              We&apos;re a creative studio passionate about blending retro-futurist aesthetics with 
              modern technology to create memorable digital experiences.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-6">
            {aboutCards.map((card, index) => (
              <motion.div
                key={card.title}
                custom={index}
                initial="offscreen"
                whileInView="onscreen"
                viewport={{ once: true, margin: "-100px" }}
                variants={cardVariants}
              >
                <div className={`bg-white rounded-xl p-6 border-4 border-${card.color} shadow-card-shadow ${card.tilt === 'left' ? 'rotate-tilt-left' : card.tilt === 'right' ? 'rotate-tilt-right' : ''}`}>
                  <h3 className="font-retroScript text-2xl text-teal mb-4">{card.title}</h3>
                  <p className="text-charcoal">{card.content}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>  
      <MountainDivider fromColor="teal" toColor="charcoal" inverted />
    </>
  );
};

export default About;
