import React from 'react';
import { BlobShape } from './BlobShape';

export const FooterHero: React.FC = () => {
  return (
    <div className="relative w-full min-h-[70vh] bg-[#1a331a] overflow-hidden mt-12 flex flex-col justify-end">
        {/* Background Image */}
        <img 
            src="https://picsum.photos/seed/forestfloor/1600/900" 
            alt="Mushroom environment"
            className="w-full h-full object-cover absolute inset-0 opacity-60 mix-blend-overlay"
        />
        
        {/* Overlay Shapes */}
        <div className="absolute top-1/4 left-10 md:left-20 w-64 md:w-96 opacity-90 animate-pulse" style={{animationDuration: '8s'}}>
            <BlobShape variant={2} color="#fdf6e3" />
        </div>

        <div className="absolute bottom-20 right-10 md:right-32 w-40 md:w-56 opacity-90">
             <BlobShape variant={1} color="#fdf6e3" />
        </div>

        {/* Text Overlay */}
        <div className="relative z-10 p-6 md:p-12 lg:p-24">
            <h2 className="font-grotesk text-4xl md:text-7xl text-[#fdf6e3] uppercase leading-[0.9] tracking-tighter">
                Join the<br/>
                <span className="ml-8 md:ml-16 opacity-90">Mycelial</span><br/>
                <span className="font-pixel text-2xl md:text-4xl tracking-normal normal-case block mt-4 ml-2 md:ml-4">Network</span>
            </h2>
            
             <div className="mt-8 flex gap-4">
                <button className="bg-[#fdf6e3] text-[#1a331a] px-6 py-3 rounded-full font-grotesk font-bold hover:bg-white transition-colors uppercase text-sm tracking-widest">
                    Newsletter
                </button>
                 <button className="border border-[#fdf6e3] text-[#fdf6e3] px-6 py-3 rounded-full font-grotesk font-bold hover:bg-[#fdf6e3] hover:text-[#1a331a] transition-colors uppercase text-sm tracking-widest">
                    Shop Spores
                </button>
            </div>
        </div>
    </div>
  );
};