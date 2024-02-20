import { AddSessionPayloadType } from '@/types/auth';
import { StateCreator, create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';

type BranchStoreType = Partial<AddSessionPayloadType> & {
  setBranchData: (value: AddSessionPayloadType) => void;
};

const getInitialBranchID = () => {
  const branch_id = sessionStorage.getItem('branch-store') || false;
  return branch_id;
};

export const useBranchStore = create<BranchStoreType>()(
  persist(
    (set, get) => ({
      branch_id: '',
      customer_no: '',
      logo_url: '',
      setBranchData: async (value) =>
        set((state) => ({
          branch_id: value.branch_id,
          customer_no: value.customer_no,
          logo_url: value.logo_url,
        })),
    }),
    {
      name: 'branch_store',
      storage: createJSONStorage(() => sessionStorage),
    }
  )
);
