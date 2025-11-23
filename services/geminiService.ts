import { GoogleGenAI, Type } from "@google/genai";
import { Mushroom } from "../types";

// Safely handle process.env for local/browser environments where 'process' is undefined
const getApiKey = () => {
  try {
    if (typeof process !== 'undefined' && process.env) {
      return process.env.API_KEY || '';
    }
  } catch (e) {
    // Ignore error if process is accessed in strict browser env
  }
  return '';
};

const apiKey = getApiKey();
// Only initialize AI if we have a key, otherwise we rely on static data
const ai = apiKey ? new GoogleGenAI({ apiKey }) : null;

export const fetchMushroomData = async (): Promise<Mushroom[]> => {
  // Returning static curated list to ensure specific assets (Morel) are displayed as requested
  // This works even without an API key
  return [
    {
      id: '1',
      name: 'Morel',
      scientificName: 'Morchella esculenta',
      description: 'Brain-like honeycombs hiding in the spring shadows.',
      edibility: 'Choice Edible',
      // Using user provided local assets
      imageUrl: './mushroom1.png',
      overlayUrl: './mushroom1_a.png'
    },
    {
      id: '2',
      name: 'Chanterelle',
      scientificName: 'Cantharellus cibarius',
      description: 'Golden trumpets singing silent melodies from the mossy deep.',
      edibility: 'Choice Edible',
      imageUrl: 'https://picsum.photos/seed/chant/600/800'
    },
    {
      id: '3',
      name: 'Black Trumpet',
      scientificName: 'Craterellus cornucopioides',
      description: 'Dark horns emerging from the earth, the shadows of flavor.',
      edibility: 'Choice Edible',
      imageUrl: 'https://picsum.photos/seed/trumpet/600/800'
    }
  ];
};
