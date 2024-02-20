'use client';
import { updateCartFromSessionAPI } from '@/app/actions/get-session';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React, { useEffect, useState } from 'react';
import { MdOutlineShoppingCart } from 'react-icons/md';

const CartIconButton = ({ cart_count }: { cart_count: number }) => {
  const path = usePathname();
  // const { countCart, } = useCartStore();
  const [cartCount, setCartCount] = useState(cart_count);

  async function updateCartCount() {
    const response = await updateCartFromSessionAPI();
    setCartCount(response.metadata.cart_count);
  }
  // useEffect(() => {
  //   useCartStore.persist.rehydrate();
  // }, []);
  useEffect(() => {
    updateCartCount();
  }, [path]);

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
        <span className='absolute right-1 top-2 ml-2 flex h-4 w-4 items-center justify-center rounded-full bg-blue-600 p-1 text-[0.6rem] font-semibold text-white group-hover:text-gray-100'>
          {cartCount}
          <span className='sr-only'>items in cart, view bag</span>
        </span>
        {/* <HiOutlineShoppingBag
          className='h-6 w-6 flex-shrink-0 text-gray-400 duration-300 ease-out group-hover:text-gray-500'
          aria-hidden='true'
        /> */}
        {/* <CartLabel item={countCart()} /> */}
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
