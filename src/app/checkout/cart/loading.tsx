import React from 'react';

const CartLoadingPage = () => {
  return (
    <div className='flex flex-col items-center justify-center gap-4'>
      <div className='h-20 w-full animate-pulse rounded-xl bg-gray-100'></div>
      <div className='h-10 w-full animate-pulse rounded-xl bg-gray-100'></div>
      <div className='h-6 w-full animate-pulse rounded-xl bg-gray-100'></div>
      <div className='h-6 w-2/3 animate-pulse rounded-xl bg-gray-100'></div>
      <div className='h-4 w-1/3 animate-pulse rounded-xl bg-gray-100'></div>
    </div>
  );
};

export default CartLoadingPage;
