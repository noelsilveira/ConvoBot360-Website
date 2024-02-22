import React from 'react';

const static_array = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const ProductsLoading = () => {
  return (
    <>
      <section className='text-neutral-700'>
        <div className='w-full'>
          {/* List view loading animation */}

          <div className='flex min-h-svh w-full animate-pulse flex-col px-4 py-2 sm:hidden'>
            {static_array.map((item, i) => (
              <div
                key={'product-loading-list-card-' + (item * 22) / 7 + i}
                className='flex w-full items-start justify-start gap-3 bg-white py-6'
              >
                <div className='flex h-16 w-16 flex-shrink-0 rounded-2xl bg-gallery-200'></div>
                <div className='flex w-full flex-col gap-2'>
                  <div className='h-6 w-full rounded-lg bg-gallery-200'></div>
                  <div className='h-4 w-1/3 rounded-lg bg-gallery-100'></div>
                </div>
                <div className='flex flex-col'>
                  <div className='h-10 w-10 rounded-lg bg-gallery-100'></div>
                </div>
              </div>
            ))}
          </div>

          {/* Grid view loading animation */}
          <div className='hidden sm:block'>
            <div className='grid animate-pulse grid-cols-2 border-l border-t border-neutral-100 sm:mx-0 md:grid-cols-3 lg:grid-cols-4'>
              {static_array.map((item, i) => (
                <LoadingProductCard
                  key={'product-loading-card-' + (item * 22) / 7 + i}
                />
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

const LoadingProductCard = () => {
  return (
    <div className='p-0'>
      <div className='h-full overflow-hidden rounded-lg border-2 border-neutral-100'>
        <div className='w-full bg-neutral-300 object-cover object-center md:h-32 lg:h-40'></div>
        <div className='p-4'>
          <h2 className='mb-2 h-3 animate-pulse rounded-full bg-neutral-300'></h2>
          <h1 className='mb-4 h-4 animate-pulse rounded-full bg-neutral-400'></h1>
          <p className='mb-3 h-3 w-full animate-pulse rounded-md bg-neutral-300 leading-relaxed'></p>
        </div>
      </div>
    </div>
  );
};

export default ProductsLoading;
