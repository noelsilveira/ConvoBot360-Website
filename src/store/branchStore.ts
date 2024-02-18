import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';

type BranchStoreType = {
  branch_id: string;
  phone: string;
  image: string;
  setBranchId: (value: string) => void;
  setPhone: (value: string) => void;
  setImage: (value: string) => void;
};

export const useBranchStore = create<BranchStoreType>()(
  persist(
    (set, get) => ({
      branch_id: '',
      phone: '',
      image: '',
      setBranchId: (value) => set((state) => ({ branch_id: value })),
      setPhone: (value) => set((state) => ({ phone: value })),
      setImage: (value) => set((state) => ({ image: value })),
    }),
    {
      name: 'branch_id',
      storage: createJSONStorage(() => sessionStorage),
    }
  )
);
