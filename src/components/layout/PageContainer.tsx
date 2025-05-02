import React from 'react';
import Header from './Header';
import Footer from './Footer';

type PageContainerProps = {
  children: React.ReactNode;
  fullWidth?: boolean;
  withGrain?: boolean;
  className?: string;
  transparentHeader?: boolean;
};

/**
 * PageContainer component for consistent page layout with header and footer
 *
 * Container for all page content with consistent padding and max-width constraints.
 */
export const PageContainer: React.FC<PageContainerProps> = ({
  children,
  fullWidth = false,
  withGrain = true,
  className = '',
  transparentHeader = false,
}) => {
  return (
    <div
      className={`
      min-h-screen flex flex-col bg-retro-cream
      ${withGrain ? 'halftone-overlay' : ''}
      ${className}
    `}
    >
      <Header transparent={transparentHeader} />

      <main
        className={`
        flex-grow pt-20 
        ${fullWidth ? 'w-full' : 'max-w-6xl mx-auto px-4 md:px-6'}
      `}
      >
        {children}
      </main>

      <Footer />
    </div>
  );
};

export default PageContainer;
