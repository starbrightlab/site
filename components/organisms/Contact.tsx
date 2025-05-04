import React from 'react';
import { motion } from 'framer-motion';
import RetroButton from '../atoms/RetroButton';
import RetroCard from '../atoms/RetroCard';
import SectionDivider from '../atoms/SectionDivider';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-20 bg-cream relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 right-1/4 w-64 h-64 bg-mustard opacity-10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-1/4 w-64 h-64 bg-coral opacity-10 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-retroScript text-4xl text-teal mb-6">Contact Mission Control</h2>
          <p className="max-w-2xl mx-auto text-lg text-charcoal">
            Ready to launch your next project with a retro-futurist vision? 
            Get in touch with our team to start the countdown.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <RetroCard color="teal" hover={false} className="h-full">
              <h3 className="font-retroScript text-2xl text-coral mb-6">Send a Transmission</h3>
              
              <form className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-charcoal mb-2">Your Name</label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-2 border-2 border-mustard rounded-lg focus:border-coral focus:outline-none transition-colors"
                    placeholder="Captain John Doe"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-charcoal mb-2">Email Address</label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-2 border-2 border-mustard rounded-lg focus:border-coral focus:outline-none transition-colors"
                    placeholder="john@futuremail.com"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-charcoal mb-2">Your Message</label>
                  <textarea
                    id="message"
                    rows={5}
                    className="w-full px-4 py-2 border-2 border-mustard rounded-lg focus:border-coral focus:outline-none transition-colors"
                    placeholder="Tell us about your mission..."
                  ></textarea>
                </div>
                
                <div className="text-center md:text-left">
                  <RetroButton
                    type="submit"
                    variant="primary"
                    size="lg"
                    label="Transmit Message"
                  />
                </div>
              </form>
            </RetroCard>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col gap-6"
          >
            <RetroCard color="coral" tilt="right">
              <h3 className="font-retroScript text-2xl text-teal mb-4">Location</h3>
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 mt-1">
                  <div className="w-10 h-10 bg-mustard rounded-full flex items-center justify-center text-charcoal">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                </div>
                <div>
                  <p className="text-charcoal">
                    123 Atomic Avenue<br />
                    Retro City, RC 12345<br />
                    United States
                  </p>
                </div>
              </div>
            </RetroCard>
            
            <RetroCard color="aqua" tilt="left">
              <h3 className="font-retroScript text-2xl text-teal mb-4">Contact Details</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 mt-1">
                    <div className="w-10 h-10 bg-coral rounded-full flex items-center justify-center text-cream">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                  </div>
                  <div>
                    <p className="text-charcoal mb-1 font-medium">Email Us:</p>
                    <a href="mailto:hello@starbrightlab.com" className="text-teal hover:text-coral transition-colors">
                      hello@starbrightlab.com
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 mt-1">
                    <div className="w-10 h-10 bg-coral rounded-full flex items-center justify-center text-cream">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    </div>
                  </div>
                  <div>
                    <p className="text-charcoal mb-1 font-medium">Call Us:</p>
                    <a href="tel:+1234567890" className="text-teal hover:text-coral transition-colors">
                      (123) 456-7890
                    </a>
                  </div>
                </div>
              </div>
            </RetroCard>
            
            {/* Add a decorative atomic-style element */}
            <div className="relative h-40 hidden md:block">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-20 h-20 bg-mustard rounded-full flex items-center justify-center starburst">
                  <div className="w-12 h-12 bg-coral rounded-full"></div>
                </div>
                
                {/* Orbit rings */}
                <div className="absolute w-40 h-40 border-2 border-dashed border-teal/30 rounded-full"></div>
                <div className="absolute w-32 h-32 border-2 border-dashed border-coral/30 rounded-full" style={{ transform: 'rotate(45deg)' }}></div>
                
                {/* Orbiting planet */}
                <div className="absolute w-full h-full">
                  <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                    <div className="w-6 h-6 bg-aqua rounded-full orbit-path"></div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
