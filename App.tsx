import React, { useEffect, useState } from 'react';
import { Header } from './components/Header.tsx';
import { Marquee } from './components/Marquee.tsx';
import { MushroomCard } from './components/MushroomCard.tsx';
import { FooterHero } from './components/FooterHero.tsx';
import { fetchMushroomData } from './services/geminiService.ts';
import { Mushroom, LoadingState } from './types.ts';
import { Loader2 } from 'lucide-react';

const App: React.FC = () => {
  const [mushrooms, setMushrooms] = useState<Mushroom[]>([]);
  const [status, setStatus] = useState<LoadingState>(LoadingState.IDLE);

  useEffect(() => {
    const loadData = async () => {
      setStatus(LoadingState.LOADING);
      const data = await fetchMushroomData();
      setMushrooms(data);
      setStatus(LoadingState.SUCCESS);
    };
    loadData();
  }, []);

  return (
    <div className="min-h-screen bg-[#fdf6e3] flex flex-col font-sans selection:bg-[#1a331a] selection:text-[#fdf6e3]">
      <Header />
      
      <Marquee text="The hidden kingdom under our feet * Sustainable foraging guide * Edible wonders of the forest *" />
      
      <main className="px-6 py-16 md:px-12 lg:px-24 max-w-8xl mx-auto w-full">
        <div className="mb-16">
          <h2 className="text-4xl md:text-6xl font-grotesk font-bold text-[#1a331a] uppercase tracking-tight">
            Curated Specimens<span className="font-pixel align-top text-2xl ml-2 text-[#1a331a]">*</span>
          </h2>
          <p className="text-xl font-grotesk text-[#1a331a] mt-4 opacity-80 max-w-2xl">
            Explore our collection of edible and medicinal fungi. Each specimen is selected for its unique properties and flavor profile.
          </p>
        </div>

        {status === LoadingState.LOADING ? (
            <div className="flex justify-center items-center h-64 w-full">
                <Loader2 className="w-12 h-12 animate-spin text-[#1a331a]" />
            </div>
        ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
            {mushrooms.map((mushroom, index) => (
                <MushroomCard key={mushroom.id} mushroom={mushroom} index={index} />
            ))}
            </div>
        )}
      </main>

      <Marquee text="Let nature take its course * Spores of life * The cycle of decay and rebirth *" className="border-t border-b-0" />
      
      <FooterHero />
    </div>
  );
};

export default App;