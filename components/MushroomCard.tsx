import React from 'react';
import { Mushroom } from '../types.ts';
import { BlobShape } from './BlobShape.tsx';

interface MushroomCardProps {
  mushroom: Mushroom;
  index: number;
}

export const MushroomCard: React.FC<MushroomCardProps> = ({ mushroom, index }) => {
  // Cycle through blob variants based on index
  const variant = (index % 3 + 1) as 1 | 2 | 3;

  return (
    <div className="flex flex-col items-start group cursor-pointer">
      <div className="relative w-full aspect-[4/5] rounded-[2rem] overflow-hidden bg-[#1a331a] mb-6 transition-transform duration-500 hover:-translate-y-2">
        <img 
          src={mushroom.imageUrl} 
          alt={mushroom.name}
          className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all duration-700 ease-in-out grayscale group-hover:grayscale-0"
        />
        {/* The overlay - either a custom image or a blob shape */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            {mushroom.overlayUrl ? (
               <img 
                 src={mushroom.overlayUrl} 
                 alt="" 
                 className="w-[60%] h-[60%] object-contain opacity-100" 
               />
            ) : (
                <BlobShape 
                    variant={variant} 
                    className="w-[60%] h-[60%] opacity-95 text-[#fdf6e3]" 
                    color="currentColor"
                />
            )}
        </div>
      </div>
      
      <div className="w-full border-t border-[#1a331a] pt-4">
        <h3 className="font-grotesk font-bold text-3xl uppercase text-[#1a331a] leading-none mb-1">
            {mushroom.name}
        </h3>
        <div className="flex justify-between items-baseline">
            <p className="font-script text-2xl text-[#1a331a] opacity-80">
                {mushroom.scientificName}
            </p>
             <span className="font-pixel text-[10px] uppercase bg-[#1a331a] text-[#fdf6e3] px-2 py-1 rounded">
                {mushroom.edibility}
            </span>
        </div>
        <p className="font-grotesk text-sm mt-3 text-[#1a331a] leading-snug max-w-[90%] opacity-70">
            {mushroom.description}
        </p>
      </div>
    </div>
  );
};