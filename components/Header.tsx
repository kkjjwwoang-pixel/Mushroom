import React from 'react';

export const Header: React.FC = () => {
  return (
    <header className="bg-[#1a331a] text-[#fdf6e3] min-h-[50vh] flex flex-col relative p-6 overflow-hidden border-b border-[#fdf6e3]">
      {/* Top Nav */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center text-sm font-grotesk tracking-widest mb-12 gap-4 md:gap-0">
        <div className="flex gap-4">
          <button className="bg-[#fdf6e3] text-[#1a331a] px-4 py-1 rounded-full hover:bg-[#e6decc] transition-colors font-medium">Index</button>
          <button className="border border-[#fdf6e3] px-4 py-1 rounded-full hover:bg-[#fdf6e3] hover:text-[#1a331a] transition-colors">About</button>
        </div>
        <div className="hidden md:block uppercase tracking-widest hover:underline cursor-pointer">Gallery</div>
        <div className="flex gap-6 uppercase">
          <button className="hover:underline">Search</button>
          <button className="hover:underline">Cart (0)</button>
        </div>
      </div>

      {/* Main Logo / Title */}
      <div className="flex-grow flex flex-col items-center justify-center z-10 mt-4 mb-12">
        <h1 className="text-center leading-none select-none">
          {/* Top line */}
          <div className="block text-5xl md:text-8xl lg:text-9xl font-pixel text-[#fdf6e3] mb-[-10px] md:mb-[-20px] tracking-tighter">
            Mushrooms
          </div>
          
          {/* Bottom line mixed fonts */}
          <div className="flex items-baseline justify-center gap-2 md:gap-6 flex-wrap">
            <span className="text-5xl md:text-8xl font-script font-light text-[#fdf6e3] transform -translate-y-4 md:-translate-y-8">
              in the
            </span>
            <span className="text-4xl md:text-8xl lg:text-9xl font-pixel text-[#fdf6e3] tracking-tighter">
              Forest
            </span>
          </div>
        </h1>
      </div>
      
      {/* Bottom Info */}
      <div className="mt-auto text-xs md:text-sm font-grotesk max-w-xs opacity-80 uppercase tracking-wider space-y-1">
        <p>INSTAGRAM @MUSHROOMS_FOREST</p>
        <p>EST. 2024</p>
        <p>FUNGAL ARCHIVE VOL. 1</p>
      </div>
    </header>
  );
};