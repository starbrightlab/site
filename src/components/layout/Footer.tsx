import React from 'react';
import Link from 'next/link';
import StarBurst from '../interactive/StarBurst';

type FooterProps = {
  className?: string;
};

/**
 * Footer component
 *
 * Following the retro-futurist aesthetic with appropriate spacing,
 * typography, and decorative elements
 */
export const Footer: React.FC<FooterProps> = ({ className = '' }) => {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      className={`bg-retro-charcoal text-retro-cream pt-16 pb-8 relative overflow-hidden ${className}`}
    >
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-1 bg-orbital-path" />
      <StarBurst
        size="lg"
        position="top-right"
        animate
        color="text-retro-aqua"
        className="opacity-20 mr-8 mt-8"
      />

      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
          {/* Logo and tagline */}
          <div className="space-y-4">
            <Link href="/">
              <div className="flex items-center space-x-2">
                <div className="h-10 w-10 bg-retro-orange rounded-full flex items-center justify-center">
                  <svg
                    className="h-6 w-6 text-white"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
                  </svg>
                </div>
                <span className="font-retroScript text-xl text-retro-cream">
                  Starbright Lab
                </span>
              </div>
            </Link>
            <p className="text-sm opacity-80 max-w-xs">
              Building tools with vintage vision and cosmic curiosity, looking
              to tomorrow&apos;s horizon with today&apos;s technology.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-retroSans text-retro-aqua text-sm tracking-widest uppercase mb-6">
              Navigate
            </h4>
            <nav className="grid grid-cols-1 gap-3">
              <FooterLink href="#mission">Our Mission</FooterLink>
              <FooterLink href="#services">Services</FooterLink>
              <FooterLink href="#projects">Projects</FooterLink>
              <FooterLink href="#team">Our Team</FooterLink>
              <FooterLink href="#contact">Contact</FooterLink>
            </nav>
          </div>

          {/* Contact information */}
          <div>
            <h4 className="font-retroSans text-retro-coral text-sm tracking-widest uppercase mb-6">
              Mission Control
            </h4>
            <address className="not-italic space-y-3 text-sm">
              <p>123 Orbital Avenue</p>
              <p>Starcity, CA 94107</p>
              <p className="mt-6">
                <a
                  href="mailto:hello@starbrightlab.com"
                  className="text-retro-aqua hover:text-retro-cream transition"
                >
                  hello@starbrightlab.com
                </a>
              </p>
              <p>
                <a
                  href="tel:+14155551234"
                  className="text-retro-aqua hover:text-retro-cream transition"
                >
                  (415) 555-1234
                </a>
              </p>
            </address>
          </div>
        </div>

        {/* Copyright and social links */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center">
          <p className="font-retroSans tracking-widest uppercase text-xs opacity-60 text-center md:text-left">
            © {currentYear} Starbright Lab — &quot;Designed for Tomorrow&quot;
          </p>

          <div className="flex space-x-4 mt-6 md:mt-0">
            <SocialLink href="https://twitter.com" label="Twitter">
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M22 5.796a8.192 8.192 0 01-2.357.646 4.111 4.111 0 001.804-2.27 8.22 8.22 0 01-2.605.996 4.096 4.096 0 00-6.975 3.735 11.65 11.65 0 01-8.45-4.287 4.09 4.09 0 001.27 5.478 4.08 4.08 0 01-1.86-.513v.052a4.095 4.095 0 003.292 4.017 4.127 4.127 0 01-1.86.07 4.1 4.1 0 003.832 2.85A8.236 8.236 0 012 18.201a11.616 11.616 0 006.29 1.843c7.547 0 11.674-6.253 11.674-11.674 0-.177-.004-.354-.012-.53A8.35 8.35 0 0022 5.794z" />
              </svg>
            </SocialLink>
            <SocialLink href="https://linkedin.com" label="LinkedIn">
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
            </SocialLink>
            <SocialLink href="https://github.com" label="GitHub">
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
              </svg>
            </SocialLink>
          </div>
        </div>
      </div>

      <p className="font-retroScript text-retro-orange text-center text-xl mt-8">
        See you in orbit.
      </p>
    </footer>
  );
};

// FooterLink sub-component
type FooterLinkProps = {
  href: string;
  children: React.ReactNode;
};

const FooterLink: React.FC<FooterLinkProps> = ({ href, children }) => {
  return (
    <a
      href={href}
      className="text-retro-cream opacity-80 hover:opacity-100 hover:text-retro-aqua transition duration-300"
    >
      {children}
    </a>
  );
};

// SocialLink sub-component
type SocialLinkProps = {
  href: string;
  label: string;
  children: React.ReactNode;
};

const SocialLink: React.FC<SocialLinkProps> = ({ href, label, children }) => {
  return (
    <a
      href={href}
      aria-label={label}
      target="_blank"
      rel="noopener noreferrer"
      className="text-retro-cream opacity-60 hover:opacity-100 hover:text-retro-aqua transition duration-300"
    >
      {children}
    </a>
  );
};

export default Footer;
