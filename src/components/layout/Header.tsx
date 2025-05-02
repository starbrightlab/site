import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import NavLink from './NavLink';

type HeaderProps = {
  transparent?: boolean;
  className?: string;
};

/**
 * Header component with navigation
 *
 * According to the Navigation section in the Component Design Guidelines:
 * - Implements mobile-friendly hamburger menu with retro-styled animation
 * - Adapts between mobile and desktop
 * - Uses orbital iconography for active/inactive states
 */
export const Header: React.FC<HeaderProps> = ({
  transparent = false,
  className = '',
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Navigation items
  const navItems = [
    { label: 'Home', href: '/' },
    { label: 'About', href: '/about' },
    { label: 'Services', href: '/#services' },
    { label: 'Projects', href: '/#projects' },
    { label: 'Contact', href: '/#contact' },
  ];

  // Handle scroll events to change header appearance
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Determine header background styles
  const bgStyles =
    transparent && !isScrolled
      ? 'bg-transparent'
      : 'bg-retro-cream shadow-retro-pop';

  return (
    <header
      className={`
        fixed top-0 left-0 right-0 z-50
        transition-all duration-300
        ${bgStyles}
        py-3 px-4 md:px-6
        ${className}
      `}
    >
      <div className="max-w-6xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <Link href="/">
          <div className="flex items-center space-x-2">
            <div className="h-10 w-10 bg-retro-orange rounded-full flex items-center justify-center">
              <StarIcon className="h-6 w-6 text-white" />
            </div>
            <span className="font-retroScript text-xl text-retro-charcoal">
              Starbright Lab
            </span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-1">
          {navItems.map((item) => (
            <NavLink key={item.label} href={item.href}>
              {item.label}
            </NavLink>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden flex items-center"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
        >
          <motion.div
            className="w-8 h-6 flex flex-col justify-between"
            initial={false}
            animate={isMenuOpen ? 'open' : 'closed'}
          >
            <motion.span
              className="w-full h-0.5 bg-retro-charcoal rounded-full"
              variants={{
                closed: { rotate: 0, translateY: 0 },
                open: { rotate: 45, translateY: 10 },
              }}
            />
            <motion.span
              className="w-full h-0.5 bg-retro-charcoal rounded-full"
              variants={{
                closed: { opacity: 1 },
                open: { opacity: 0 },
              }}
            />
            <motion.span
              className="w-full h-0.5 bg-retro-charcoal rounded-full"
              variants={{
                closed: { rotate: 0, translateY: 0 },
                open: { rotate: -45, translateY: -10 },
              }}
            />
          </motion.div>
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            className="md:hidden absolute top-full left-0 right-0 bg-retro-cream shadow-retro-pop"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <nav className="flex flex-col px-4 py-4">
              {navItems.map((item) => (
                <NavLink
                  key={item.label}
                  href={item.href}
                  mobile
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </NavLink>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

// NavLink component is now imported from separate file

// Simple star icon for the logo
const StarIcon: React.FC<{ className?: string }> = ({ className = '' }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
  </svg>
);

export default Header;
