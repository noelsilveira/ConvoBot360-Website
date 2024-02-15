import React from 'react';

const ProductsLoading = () => {
  return (
    <>
      <section className='text-neutral-700'>
        <div className='container mx-auto grid grid-cols-1 px-5 py-24 lg:grid-cols-6'>
          <div className='col-span-2 hidden h-full animate-pulse flex-col gap-8 lg:flex lg:w-44'>
            <div className='h-10 w-full rounded-md bg-neutral-300'></div>
            <div className='h-10 w-full rounded-md bg-neutral-300'></div>
            <div className='h-10 w-full rounded-md bg-neutral-300'></div>
            <div className='h-10 w-full rounded-md bg-neutral-300'></div>
            <div className='h-10 w-full rounded-md bg-neutral-300'></div>
          </div>
          <div className='col-span-4 -mx-px grid animate-pulse grid-cols-2 border-l border-t border-neutral-200 sm:mx-0 md:grid-cols-3 lg:grid-cols-4'>
            {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((item, i) => (
              <LoadingProductCard
                key={'product-loading-card-' + (item * 22) / 7 + i}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

const LoadingProductCard = () => {
  return (
    <div className='p-4'>
      <div className='h-full overflow-hidden rounded-lg border-2 border-neutral-200'>
        <div className='w-full bg-neutral-300 object-cover object-center md:h-36 lg:h-48'></div>
        <div className='p-6'>
          <h2 className='mb-2 h-4 animate-pulse bg-neutral-300'></h2>
          <h1 className='mb-4 h-6 animate-pulse bg-neutral-400'></h1>
          <p className='mb-3 h-3 w-full animate-pulse bg-neutral-300 leading-relaxed'></p>
          <p className='mb-3 h-3 animate-pulse bg-neutral-300 leading-relaxed'></p>
          <p className='mb-3 h-3 animate-pulse bg-neutral-300 leading-relaxed'></p>
          <div className='flex flex-wrap items-center '>
            <div className='mt-2 inline-flex h-4 animate-pulse items-center bg-neutral-300 md:mb-2 lg:mb-0'></div>
            <span className='ml-auto mr-3 mt-2 inline-flex h-4 animate-pulse items-center bg-neutral-300 px-2 py-1 pr-5 text-sm leading-none'></span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductsLoading;
