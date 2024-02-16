import { create } from 'zustand';
type NavigationStore = {
  openMenu: boolean;
  toggleMenu: (value: boolean) => void;
};

export const useNavigationStore = create<NavigationStore>((set) => ({
  openMenu: false,
  toggleMenu: (value) =>
    set((state) => ({
      openMenu: value,
    })),
}));

type FiltersNavigationStore = {
  mobileFiltersOpen: boolean;
  setMobileFiltersOpen: (value: boolean) => void;
};

export const useFiltersNavigationStore = create<FiltersNavigationStore>(
  (set, get) => ({
    mobileFiltersOpen: false,
    setMobileFiltersOpen(value) {
      console.log('From store: ', value);
      set((state) => ({ mobileFiltersOpen: value }));
    },
  })
);
