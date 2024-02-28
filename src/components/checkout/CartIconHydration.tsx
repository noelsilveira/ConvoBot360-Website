'use client';

import { useCartStore } from '@/store/cartStore';
import * as React from 'react';

const CartIconHydration = () => {
  React.useEffect(() => {
    useCartStore.persist.rehydrate();
  }, []); // (b)

  return null;
};

export default CartIconHydration;
