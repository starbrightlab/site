import React from 'react';
import RetroButton from '../atoms/RetroButton';
import MountainDivider from '../atoms/MountainDivider';
import { motion } from 'framer-motion';
import SectionDivider from '../atoms/SectionDivider';

const Hero: React.FC = () => {
  return (
    <><section className="pt-10 pb-20 md:py-20 lg:py-32 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute -top-20 -right-20 w-64 h-64 bg-aqua opacity-20 rounded-full blur-3xl"></div>
      <div className="absolute top-1/2 -left-20 w-48 h-48 bg-coral opacity-10 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-10 md:mb-0 md:pr-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="font-retroScript text-4xl md:text-5xl lg:text-6xl text-teal mb-6">
                Optimistic Innovation
              </h1>

              <p className="text-lg md:text-xl mb-8 text-charcoal">
                Welcome to Starbright Lab. We&apos;re exploring the frontiers
                of innovation with a distinctive retro-futurist vision.
              </p>

              <div className="flex flex-wrap gap-4">
                <RetroButton
                  variant="primary"
                  size="lg"
                  label="Launch Mission"
                  onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })} />
                <RetroButton
                  variant="secondary"
                  size="lg"
                  label="Contact Control"
                  onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })} />
              </div>
            </motion.div>
          </div>

          <div className="md:w-1/2">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              {/* Placeholder for hero image or animation */}
              <div className="aspect-square max-w-md mx-auto bg-gradient-to-br from-aqua via-teal to-coral rounded-full p-1">
                <div className="w-full h-full rounded-full bg-cream flex items-center justify-center relative overflow-hidden">
                  {/* Orbital rings */}
                  <div className="absolute w-[150%] h-[150%] border-2 border-dashed border-teal/30 rounded-full"></div>
                  <div className="absolute w-[110%] h-[110%] border-2 border-dashed border-coral/30 rounded-full animate-spin" style={{ animationDuration: '60s' }}></div>

                  {/* Central rocket or planet */}
                  <div className="w-20 h-20 bg-mustard rounded-full flex items-center justify-center z-10">
                    <div className="w-14 h-14 bg-cream rounded-full flex items-center justify-center">
                      <div className="w-8 h-8 bg-teal rounded-full"></div>
                    </div>
                  </div>

                  {/* Orbiting elements */}
                  <div className="absolute w-full h-full animation-orbit z-20">
                    <div className="absolute top-[5%] left-[50%] w-6 h-6 bg-coral rounded-full transform -translate-x-1/2"></div>
                  </div>

                  <div className="absolute w-full h-full animation-orbit z-20" style={{ animationDelay: '-5s' }}>
                    <div className="absolute top-[12%] left-[30%] w-4 h-4 bg-aqua rounded-full transform -translate-x-1/2"></div>
                  </div>
                </div>
              </div>

              {/* Star decorations */}
              <div className="absolute -top-4 -right-4 w-8 h-8 text-mustard">
                <svg viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12,0 L15,9 L24,12 L15,15 L12,24 L9,15 L0,12 L9,9 Z" />
                </svg>
              </div>
              <div className="absolute -bottom-2 -left-2 w-6 h-6 text-coral">
                <svg viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12,0 L15,9 L24,12 L15,15 L12,24 L9,15 L0,12 L9,9 Z" />
                </svg>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section><SectionDivider type='mountains' position='bottom' height='lg' fillColor='teal' /></>
  );
};

export default Hero;
