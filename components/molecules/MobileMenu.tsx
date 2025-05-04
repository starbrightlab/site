import React, { useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

const MobileMenu: React.FC<MobileMenuProps> = ({ isOpen, onClose }) => {
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => e.key === 'Escape' && onClose();
    window.addEventListener('keydown', handleEsc);
    document.body.style.overflow = isOpen ? 'hidden' : '';
    return () => {
      window.removeEventListener('keydown', handleEsc);
      document.body.style.overflow = '';
    };
  }, [isOpen, onClose]);

  const panelVariants = {
    hidden:   { y: '-100%' },
    visible:  { y: 0, transition: { type: 'spring', stiffness: 280, damping: 30 } },
    exit:     { y: '-100%', transition: { type: 'spring', stiffness: 280, damping: 30 } },
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* full‑screen backdrop */}
          <motion.div
            key="backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/50"
            onClick={onClose}
          />

          {/* sliding panel */}
          <motion.div
            key="mobile-menu"
            variants={panelVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="fixed top-0 left-0 right-0 z-60 bg-cream md:hidden shadow-xl"
          >
            {/* only as tall as content, but scroll if > viewport */}
            <div
              className="relative flex flex-col max-h-screen overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Header */}
              <header className="flex justify-between items-center p-6 border-b-3 border-teal">
                <span className="text-2xl font-retroScript text-teal">Navigation</span>
                <button
                  onClick={onClose}
                  aria-label="Close menu"
                  className="w-8 h-8 flex items-center justify-center rounded-full bg-teal text-cream hover:bg-coral transition-colors duration-300"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-5 h-5">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </header>

              {/* Nav links */}
              <nav className="flex flex-col p-6 space-y-8">
                {[
                  { href: '#about',     label: 'About',     dot: 'bg-mustard' },
                  { href: '#services',  label: 'Services',  dot: 'bg-coral' },
                  { href: '#portfolio', label: 'Portfolio', dot: 'bg-aqua' },
                  { href: '#contact',   label: 'Contact',   dot: 'bg-orange' },
                ].map(({ href, label, dot }) => (
                  <Link
                    key={href}
                    href={href}
                    onClick={onClose}
                    className="relative px-8 py-2 text-charcoal text-lg font-retroSans hover:text-teal transition-colors duration-300 group"
                  >
                    <span className={`absolute left-0 top-1/2 -translate-y-1/2 h-3 w-3 rounded-full ${dot} group-hover:bg-teal transition-colors duration-300`} />
                    {label}
                    <span className="absolute left-4 right-4 bottom-0 h-0.5 bg-teal scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
                  </Link>
                ))}
              </nav>

              {/* Decorative + social */}
            <div className="mt-auto p-6 border-t-3 border-teal relative">
              {/* Retro orbit SVG */}
              <div className="absolute top-0 right-0 -mt-32 -mr-4 opacity-15 pointer-events-none select-none">
                <svg width="150" height="150" viewBox="0 0 150 150" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="75" cy="75" r="50" stroke="#F28C38" strokeWidth="1" strokeDasharray="5 3" />
                  <circle cx="75" cy="75" r="65" stroke="#007C88" strokeWidth="1" strokeDasharray="5 3" />
                  <circle cx="75" cy="75" r="35" stroke="#F2C849" strokeWidth="1" strokeDasharray="5 3" />
                </svg>
              </div>

              <p className="text-center mb-4 text-sm text-teal font-retroSans">Connect with us</p>
              <div className="flex justify-center space-x-6">
                {/* X / Twitter */}
                <a href="https://x.com/starbrightlab" aria-label="X (formerly Twitter)" className="w-10 h-10 flex items-center justify-center rounded-full bg-aqua/30 text-teal hover:bg-teal hover:text-cream transition-all duration-300">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" /></svg>
                </a>
                {/* LinkedIn */}
                <a href="https://www.linkedin.com/company/starbrightlab" aria-label="LinkedIn" className="w-10 h-10 flex items-center justify-center rounded-full bg-coral/30 text-teal hover:bg-teal hover:text-cream transition-all duration-300">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" viewBox="0 0 24 24"><path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" /></svg>
                </a>
                {/* Instagram */}
                <a href="https://www.instagram.com/starbright.lab" aria-label="Instagram" className="w-10 h-10 flex items-center justify-center rounded-full bg-mustard/30 text-teal hover:bg-teal hover:text-cream transition-all duration-300">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162 0 3.403 2.759 6.162 6.162 6.162 3.403 0 6.162-2.759 6.162-6.162 0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" /></svg>
                </a>
              </div>
            </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default MobileMenu;