export interface Mushroom {
  id: string;
  name: string;
  scientificName: string;
  description: string;
  edibility: string;
  imageUrl: string;
  overlayUrl?: string;
}

export enum LoadingState {
  IDLE = 'IDLE',
  LOADING = 'LOADING',
  SUCCESS = 'SUCCESS',
  ERROR = 'ERROR'
}