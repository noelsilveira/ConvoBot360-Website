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
  categoryMenuOpen: boolean;
  setMobileFiltersOpen: (value: boolean) => void;
  setCategoryMenuOpen: (value: boolean) => void;
};

export const useFiltersNavigationStore = create<FiltersNavigationStore>(
  (set, get) => ({
    mobileFiltersOpen: false,
    categoryMenuOpen: false,
    setMobileFiltersOpen(value) {
      set((state) => ({ mobileFiltersOpen: value }));
    },
    setCategoryMenuOpen(value) {
      console.log('from store', value);
      set((state) => ({ categoryMenuOpen: value }));
    },
  })
);
