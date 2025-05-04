import React from 'react';

const Logo: React.FC = () => {
  return (
    <div className="flex items-center">
      <div className="mr-2 relative">
        {/* Decorative starburst */}
        <div className="absolute -top-1 -left-1 w-7 h-7 transform rotate-45">
          <div className="w-full h-full bg-aqua rounded-sm"></div>
          <div className="absolute top-0 left-0 w-full h-full bg-mustard rounded-sm transform rotate-45"></div>
        </div>
        
        {/* Main logo shape */}
        <div className="relative w-10 h-10 bg-teal rounded-full flex items-center justify-center z-10">
          <div className="w-4 h-4 bg-cream rounded-full"></div>
          
          {/* Orbit ring */}
          <div className="absolute inset-0 border-2 border-cream rounded-full transform rotate-45"></div>
        </div>
      </div>
      
      <div>
        <div className="font-retroScript text-xl text-teal">Starbright</div>
        <div className="text-xs tracking-widest uppercase -mt-1 text-charcoal">Lab</div>
      </div>
    </div>
  );
};

export default Logo;
