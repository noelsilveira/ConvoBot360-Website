import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';

export const currencyBaseURL =
  `https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/aed/` +
  `usd.json`;

const currencies = [
  {
    name: 'aed',
    symbol: 'AED',
  },
  {
    name: 'inr',
    symbol: '₹',
  },
  {
    name: 'usd',
    symbol: '$',
  },
  {
    name: 'eur',
    symbol: '€',
  },
];

type CurrencyType = (typeof currencies)[number]['name'];
type CurrencyStoreType = {
  currencies: typeof currencies;
  activeCurrency: CurrencyType;
  changeCurrency: (currency: CurrencyType) => void;
};

export const useCurrencyStore = create<CurrencyStoreType>()(
  persist(
    (set, get) => ({
      activeCurrency: 'aed',
      currencies: currencies,
      changeCurrency: (currency) =>
        set((state) => ({ activeCurrency: currency })),
    }),
    {
      name: 'currency',
      storage: createJSONStorage(() => sessionStorage),
    }
  )
);
