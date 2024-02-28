'use client';

import { useCartItems } from '@/hooks/useCartItems';
import { useCartStore } from '@/store/cartStore';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React, { useEffect, useState } from 'react';
import { MdOutlineShoppingCart } from 'react-icons/md';

const CartIconButton = () => {
  const path = usePathname();
  const { cart_count } = useCartStore();
  const [hydrated, setHydrated] = useState<boolean>(false);
  useEffect(() => {
    setHydrated(true);
  }, []);

  return (
    <div className='ml-0 flow-root lg:ml-4'>
      <Link
        href='/checkout/cart'
        className='group relative -m-2 flex items-center p-2'
      >
        <MdOutlineShoppingCart
          className='h-6 w-6 flex-shrink-0 text-gallery-500 duration-300 ease-out group-hover:text-gray-500'
          aria-hidden='true'
        />
        {hydrated && cart_count !== 0 && (
          <span className='absolute right-1 top-2 ml-2 flex h-4 w-4 items-center justify-center rounded-full bg-blue-600 p-1 text-[0.6rem] font-semibold text-white group-hover:text-gray-100'>
            {cart_count}
            <span className='sr-only'>items in cart, view bag</span>
          </span>
        )}
      </Link>
    </div>
  );
};

export default CartIconButton;
