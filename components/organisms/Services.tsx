import React from 'react';
import { motion } from 'framer-motion';
import RetroButton from '../atoms/RetroButton';
import CurveDivider from '../atoms/CurveDivider';
import SectionDivider from '../atoms/SectionDivider';

interface ServiceProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  index: number;
}

const Service: React.FC<ServiceProps> = ({ title, description, icon, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="flex flex-col md:flex-row items-start gap-6 p-6 rounded-xl hover:bg-cream/10 transition-all"
    >
      <div className="flex-shrink-0 w-16 h-16 bg-aqua rounded-xl flex items-center justify-center text-teal">
        {icon}
      </div>
      
      <div>
        <h3 className="font-retroScript text-2xl text-mustard mb-2">{title}</h3>
        <p className="text-cream/80 mb-4">{description}</p>
        
      </div>
    </motion.div>
  );
};

const Services: React.FC = () => {
  const services = [
    {
      title: 'Website Development',
      description: 'We create responsive, engaging websites with our distinctive retro-futurist aesthetic, built on modern frameworks for optimal performance.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-8 h-8">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
    },
    {
      title: 'Brand Identity',
      description: 'We develop comprehensive brand identities that capture the optimistic spirit of mid-century modernism while feeling fresh and contemporary.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-8 h-8">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
        </svg>
      ),
    },
    {
      title: 'UI/UX Design',
      description: 'Our interfaces combine the warmth of atomic-age aesthetics with intuitive, user-centered design principles for memorable digital experiences.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-8 h-8">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
        </svg>
      ),
    },
    {
      title: 'Motion Design',
      description: 'We craft animations and interactive elements that bring the dynamic energy of space-age optimism to digital interfaces and marketing materials.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-8 h-8">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
        </svg>
      ),
    },
  ];

  return (
    <>
      <section id="services" className="py-20 bg-charcoal relative overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-teal opacity-5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 left-1/4 w-48 h-48 bg-coral opacity-5 rounded-full blur-3xl"></div>
        
        <div className="container mx-auto px-6 relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="font-retroScript text-4xl text-cream mb-6">Our Services</h2>
            <p className="max-w-2xl mx-auto text-lg text-cream/80">
              Explore our range of services designed to bring retro-futurist 
              aesthetics to modern digital solutions.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <Service
                key={service.title}
                title={service.title}
                description={service.description}
                icon={service.icon}
                index={index}
              />
            ))}
          </div>
        </div>
      </section>
      
      <CurveDivider
        toColor="charcoal"
        fromColor="teal"
        height="lg"
        className="absolute top-0 left-0 w-full z-0"
      />
      </>
  );
};

export default Services;
