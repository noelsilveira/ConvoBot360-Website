import React from 'react';

const ProductDetailLoading = () => {
  return (
    <section className='container mx-auto min-h-svh max-w-7xl bg-white px-6 py-8 lg:px-8 lg:py-12'>
      <div className='flex animate-pulse flex-col gap-8 lg:gap-12'>
        <div className='h-10 w-full rounded-xl bg-neutral-200'></div>
        <div className='grid grid-cols-1 gap-6 lg:grid-cols-5'>
          <div className='h-[25svh] w-full rounded-xl bg-neutral-200 lg:col-span-3'></div>
          <div className='lg:cols-span-2 h-full'>
            <div className='flex flex-col gap-8'>
              <div className='h-10 w-full rounded-lg bg-neutral-200'></div>
              <div className='h-20 w-full rounded-lg bg-neutral-200'></div>
              <div className='h-4 w-1/2 rounded bg-neutral-200'></div>
              <div className='h-28 w-full rounded-lg bg-neutral-200'></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductDetailLoading;
