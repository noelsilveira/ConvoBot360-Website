import { useCartStore } from '@/store/cartStore';
import Link from 'next/link';
import React, { useEffect } from 'react';

import { HiOutlineShoppingBag } from 'react-icons/hi2';

const CartIconButton = () => {
  const { countCart } = useCartStore();

  useEffect(() => {
    useCartStore.persist.rehydrate();
  }, []);

  return (
    <div className='ml-4 flow-root lg:ml-6'>
      <Link
        href='/checkout/cart'
        className='group relative -m-2 flex items-center p-2'
      >
        <HiOutlineShoppingBag
          className='h-6 w-6 flex-shrink-0 text-gray-400 duration-300 ease-out group-hover:text-gray-500'
          aria-hidden='true'
        />
        <CartLabel item={countCart()} />
      </Link>
    </div>
  );
};

const CartLabel: React.FC<{ item: number }> = ({ item }) => {
  if (item === 0)
    return (
      <span className='absolute right-1 top-2 ml-2 flex h-4 w-4 items-center justify-center rounded-full bg-transparent bg-clip-text p-1 text-[0.6rem] font-semibold text-transparent'>
        0<span className='sr-only'>items in cart, view bag</span>
      </span>
    );

  return (
    <span className='absolute right-1 top-2 ml-2 flex h-4 w-4 items-center justify-center rounded-full bg-brand-500 p-1 text-[0.6rem] font-semibold text-white group-hover:text-gray-100'>
      {item}
      <span className='sr-only'>items in cart, view bag</span>
    </span>
  );
};

export default CartIconButton;
