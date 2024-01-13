import { create } from 'zustand';
type HeroStore = {
  showHero: boolean;
  showOffersHero: boolean;
  toggleHeader: (value: boolean) => void;
  toggleOffersHero: (value: boolean) => void;
};

export const useHeroStore = create<HeroStore>((set) => ({
  showHero: false,
  showOffersHero: false,
  toggleHeader: (value) =>
    set((state) => ({
      showHero: value,
    })),
  toggleOffersHero: (value) =>
    set((state) => ({
      showOffersHero: value,
    })),
}));
