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
