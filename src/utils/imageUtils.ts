import { fallbackImages } from '../constants/images';

export const handleImageError = (e: React.SyntheticEvent<HTMLImageElement, Event>, type: 'portfolio' | 'news' | 'general' = 'general') => {
  const img = e.target as HTMLImageElement;
  img.src = fallbackImages[type];
};

export const getImageUrl = (path: string) => {
  try {
    return new URL(path, import.meta.url).href;
  } catch {
    return path;
  }
};
