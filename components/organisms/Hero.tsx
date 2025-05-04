import React from 'react';
import { motion } from 'framer-motion';
import OrbitalAnimation from '../animations/OrbitalAnimation';
import StarburstDecoration from '../atoms/StarburstDecoration';
import RetroButton from '../atoms/RetroButton';
import SectionDivider from '../atoms/SectionDivider';

const Hero: React.FC = () => {
  return (
    <section id="home" className="relative bg-cream pt-16 md:pt-20 pb-0">
      {/* Background decorative elements */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        {/* Large orbital animation positioned in background - hidden on small screens */}
        <div className="absolute -right-24 -bottom-24 opacity-20 hidden md:block">
          <OrbitalAnimation 
            size="lg" 
            centerColor="bg-teal" 
            planetColors={['bg-coral', 'bg-mustard', 'bg-aqua']} 
            speed="slow" 
          />
        </div>
        
        {/* Small starburst in top left - adjusted position for mobile */}
        <div className="absolute left-4 top-12 md:left-10 md:top-24 hidden md:block">
          <StarburstDecoration 
            size={60} 
            color="coral" 
            secondaryColor="mustard" 
            pointCount={8} 
            className="md:scale-100 scale-75"
          />
        </div>
        
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-cream/40 to-cream"></div>
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        {/* Mobile-first layout: Animation followed by text */}
        <div className="md:hidden flex flex-col items-center justify-start pt-10 pb-0">
          {/* Visual orbital animation first on mobile */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex justify-center mb-8"
          >
            <div className="relative">
              {/* Main orbital animation - custom sized for optimal mobile display */}
              <div className="transform scale-110">
                <OrbitalAnimation 
                  size="md"
                  centerColor="bg-mustard"
                  planetColors={['bg-charcoal', 'bg-coral', 'bg-aqua']} 
                  className="z-10"
                  speed='slow'
                />
              </div>
            </div>
          </motion.div>
          
          {/* Text content second on mobile */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            className="text-center"
          >
            <h1 className="text-3xl sm:text-4xl font-retroScript text-teal mb-3">
              Exploring Tomorrow&apos;s <span className="text-coral">Horizons</span> Today
            </h1>
            
            <p className="text-base text-charcoal mb-5 max-w-lg mx-auto">
              Join us on a journey through the cosmos of innovation, where retro-futuristic 
              vision meets cutting-edge technology.
            </p>
            
            <div className="flex flex-col gap-3 max-w-xs mx-auto mb-10">
              <RetroButton
                variant="primary"
                size="md"
                label="Launch Mission"
                href="#contact"
                className="w-full"
                icon={
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 1.414L10.586 9H7a1 1 0 100 2h3.586l-1.293 1.293a1 1 0 101.414 1.414l3-3a1 1 0 000-1.414z" clipRule="evenodd" />
                  </svg>
                }
              />
              
              <RetroButton
                variant="secondary"
                size="md"
                label="Explore Services"
                href="#services"
                className="w-full"
              />
            </div>
          </motion.div>
        </div>
        
        {/* Desktop layout: Side by side grid */}
        <div className="hidden md:grid grid-cols-2 gap-12 items-center py-12">
          {/* Text content - left side */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <h1 className="text-5xl lg:text-6xl font-retroScript text-teal mb-6">
              Exploring Tomorrow&apos;s <span className="text-coral">Horizons</span> Today
            </h1>
            
            <p className="text-lg md:text-xl text-charcoal mb-8 max-w-xl">
              Join us on a journey through the cosmos of innovation, where retro-futuristic 
              vision meets cutting-edge technology.
            </p>
            
            <div className="flex flex-row gap-4 mb-8">
              <RetroButton
                variant="primary"
                size="lg"
                label="Launch Mission"
                href="#contact"
                icon={
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 1.414L10.586 9H7a1 1 0 100 2h3.586l-1.293 1.293a1 1 0 101.414 1.414l3-3a1 1 0 000-1.414z" clipRule="evenodd" />
                  </svg>
                }
              />
              
              <RetroButton
                variant="secondary"
                size="lg"
                label="Explore Services"
                href="#services"
              />
            </div>
          </motion.div>
          
          {/* Visual content - right side */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            className="flex justify-center"
          >
            <div className="relative">
              {/* Main orbital animation */}
              <OrbitalAnimation 
                size="lg" 
                centerColor="bg-mustard" 
                planetColors={['bg-charcoal', 'bg-coral', 'bg-aqua']} 
                className="z-10"
                speed='slow'
              />
              
              {/* Decorative starburst behind the orbital */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-0 -rotate-12">
                <StarburstDecoration 
                  size={280} 
                  color="mustard" 
                  secondaryColor="teal" 
                  pointCount={16} 
                  className="opacity-20" 
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
      
      {/* Section divider with negative margins to eliminate gaps */}
      <div className="w-full -mb-px overflow-hidden">
        <div className="translate-y-1">
          <SectionDivider 
            type='mountains' 
            position='bottom' 
            height='sm' 
            fillColor='teal' 
            className="block md:hidden" 
          />
          <SectionDivider 
            type='mountains' 
            position='bottom' 
            height='lg' 
            fillColor='teal' 
            className="hidden md:block" 
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;