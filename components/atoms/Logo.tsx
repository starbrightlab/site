// components/Logo.tsx
import React from 'react';
import PlanetMotif from './PlanetMotif';

const Logo: React.FC = () => (
  <div className="flex items-center">
    {/* Reuse the standalone planet motif */}
    <PlanetMotif size={48} className="mr-3" planetColor='#007C88'/>

    {/* Wordmark */}
    <div>
      <div className="font-retroScript text-2xl text-teal">Starbright</div>
      <div className="text-xs tracking-widest uppercase -mt-1 text-charcoal">
        Lab
      </div>
    </div>
  </div>
);

export default Logo;
