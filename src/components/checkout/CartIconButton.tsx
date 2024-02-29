'use client';

import { useCartItems } from '@/hooks/useCartItems';
import { useCartStore } from '@/store/cartStore';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React, { useEffect, useState } from 'react';

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
        {/* <MdOutlineShoppingCart
          className='h-6 w-6 flex-shrink-0 text-gallery-500 duration-300 ease-out group-hover:text-gray-500'
          aria-hidden='true'
        /> */}
        <span className='inline-flex items-center justify-center gap-1 rounded-full bg-blue-600 px-3 py-2 text-xs font-semibold tracking-tight text-white duration-150 ease-out hover:bg-blue-700'>
          View Cart{' '}
          {hydrated && cart_count !== 0 && (
            <span className='flex h-4 w-4 items-center justify-center rounded-full bg-white p-1 text-[0.6rem] font-semibold text-blue-600 group-hover:text-blue-600'>
              {cart_count}
              <span className='sr-only'>items in cart, view bag</span>
            </span>
          )}
        </span>
      </Link>
    </div>
  );
};

export default CartIconButton;
