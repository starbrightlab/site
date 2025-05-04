import React, { ReactNode } from 'react';
import Header from '../organisms/Header';
import Footer from '../organisms/Footer';
import StarField from '../animations/StarField';

interface MainLayoutProps {
  children: ReactNode;
}

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  return (
    <div className="relative min-h-screen overflow-hidden bg-cream">
      {/* Background animations */}
      <StarField />
      
      {/* Main content */}
      <div className="relative z-10">
        <Header />
        <main className="relative">
          {/* Remove padding to allow section dividers to connect properly */}
          {children}
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default MainLayout;
