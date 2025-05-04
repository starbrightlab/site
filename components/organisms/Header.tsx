import React, { useState } from 'react';
import Link from 'next/link';
import Logo from '../atoms/Logo';
import MobileMenu from '../molecules/MobileMenu';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="py-4 px-6 md:px-10 bg-cream bg-opacity-90 backdrop-blur-sm sticky top-0 z-40 shadow-sm">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex-shrink-0">
          <Link href="/" className="block" aria-label="Starbright Lab - Home">
            <Logo />
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8">
          <Link href="#about" className="text-charcoal hover:text-coral transition-all">
            About
          </Link>
          <Link href="#services" className="text-charcoal hover:text-coral transition-all">
            Services
          </Link>
          <Link href="#portfolio" className="text-charcoal hover:text-coral transition-all">
            Portfolio
          </Link>
          <Link href="#contact" className="text-charcoal hover:text-coral transition-all">
            Contact
          </Link>
        </nav>

        {/* Mobile menu button */}
        <button
          className="md:hidden p-2 rounded-full bg-teal text-cream hover:bg-coral transition-colors duration-300 shadow-retro-pop z-50 relative"
          onClick={toggleMenu}
          aria-label="Toggle mobile menu"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="w-6 h-6"
          >
            {isMenuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Navigation */}
      <MobileMenu isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
    </header>
  );
};

export default Header;
