import React from 'react';

const Logo = ({ className = '' }) => {
  return (
    <div className={`flex items-center gap-2 select-none ${className}`}>
      {/* Icon portion resembling the 4-colored diamond in the image */}
      <div className="relative w-8 h-8 md:w-10 md:h-10 transform rotate-45 flex-shrink-0 grid grid-cols-2 shadow-sm rounded-sm overflow-hidden border border-brand-navy">
        <div className="bg-orange-500 w-full h-full flex items-center justify-center -rotate-45 text-[8px] sm:text-[10px] text-white">🏃</div>
        <div className="bg-red-500 w-full h-full flex items-center justify-center -rotate-45 text-[8px] sm:text-[10px] text-white">🦽</div>
        <div className="bg-blue-500 w-full h-full flex items-center justify-center -rotate-45 text-[8px] sm:text-[10px] text-white">🧍</div>
        <div className="bg-green-500 w-full h-full flex items-center justify-center -rotate-45 text-[8px] sm:text-[10px] text-white">🧘</div>
      </div>
      
      {/* Text portion */}
      <div className="flex flex-col justify-center">
        <span className="font-logo font-bold text-3xl md:text-4xl text-brand-navy leading-none tracking-tight">
          DEV
        </span>
        <span className="font-sans font-bold text-[8px] md:text-[10px] text-brand-yellow uppercase tracking-wider leading-tight drop-shadow-sm" style={{textShadow: '0.5px 0.5px 0 #1A1C4B'}}>
          A-Z Physio & Neuro Rehab
        </span>
      </div>
    </div>
  );
};

export default Logo;
