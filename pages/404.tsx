import React from 'react';
import Link from 'next/link';
import Head from 'next/head';
import { motion } from 'framer-motion';
import RetroButton from '../components/atoms/RetroButton';

export default function Custom404() {
  return (
    <>
      <Head>
        <title>404 - Page Not Found | Starbright Lab</title>
        <meta name="description" content="The page you're looking for has been lost in space" />
      </Head>
      
      <div className="min-h-screen bg-charcoal text-cream flex flex-col items-center justify-center p-6 relative overflow-hidden">
        {/* Background stars animation */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(50)].map((_, i) => (
            <div
              key={i}
              className="absolute rounded-full bg-white"
              style={{
                width: Math.random() * 3 + 1 + 'px',
                height: Math.random() * 3 + 1 + 'px',
                top: Math.random() * 100 + '%',
                left: Math.random() * 100 + '%',
                opacity: Math.random() * 0.7 + 0.3,
                animation: `twinkle ${Math.random() * 4 + 3}s ease-in-out infinite`,
                animationDelay: Math.random() * 5 + 's',
              }}
            ></div>
          ))}
        </div>
        
        {/* Content */}
        <div className="max-w-2xl w-full z-10 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
          >
            <div className="mb-6 relative">
              <h1 className="font-retroScript text-6xl md:text-8xl mb-2 text-coral">404</h1>
              <h2 className="font-retroScript text-2xl md:text-4xl mb-6 text-aqua">Lost in Space</h2>
              
              {/* Decorative elements */}
              <div className="absolute -top-10 -right-10 w-20 h-20 text-mustard opacity-60">
                <svg viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12,0 L15,9 L24,12 L15,15 L12,24 L9,15 L0,12 L9,9 Z" />
                </svg>
              </div>
            </div>
            
            <div className="bg-teal/10 backdrop-blur-sm rounded-xl p-8 border-2 border-aqua shadow-retro-pop mb-10">
              <p className="text-lg mb-6">
                The mission control has lost contact with the page you&apos;re looking for.
                It may have been moved to a different orbit, or it could be exploring the furthest reaches of space.
              </p>
              
              <div className="flex flex-col items-center">
                <div className="relative w-32 h-32 mb-6">
                  {/* Simple rocket illustration */}
                  <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-8 h-16 bg-coral rounded-t-full"></div>
                  <div className="absolute top-16 left-1/2 transform -translate-x-1/2 w-16 h-8 bg-mustard rounded-lg"></div>
                  <div className="absolute top-24 left-1/2 transform -translate-x-1/2 w-8 h-8 bg-aqua rounded-b-lg"></div>
                  
                  {/* Flame animation */}
                  <div className="absolute top-32 left-1/2 transform -translate-x-1/2">
                    <div className="w-6 h-10 bg-gradient-to-b from-coral via-mustard to-transparent rounded-b-full animate-pulse"></div>
                  </div>
                </div>
                
                <p className="text-aqua mb-6">
                  Would you like to return to the safety of mission control?
                </p>
              </div>
            </div>
            
            <Link href="/" className="inline-block">
              <RetroButton
                variant="primary"
                size="lg"
                label="Return to Home Base"
              />
            </Link>
          </motion.div>
        </div>
      </div>
    </>
  );
}
