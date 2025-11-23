import React from 'react';

interface MarqueeProps {
  text: string;
  className?: string;
}

export const Marquee: React.FC<MarqueeProps> = ({ text, className = "" }) => {
  // Repeat text enough times to fill width
  const repeatedText = Array(20).fill(text).join(" * ");

  return (
    <div className={`overflow-hidden w-full border-y border-[#1a331a] bg-[#fdf6e3] py-1 ${className}`}>
      <div className="animate-marquee whitespace-nowrap text-xl sm:text-2xl font-grotesk text-[#1a331a] tracking-wider">
        {repeatedText}
      </div>
    </div>
  );
};
