import React from 'react';

const ProductsLoading = () => {
  return (
    <>
      <section className='text-neutral-700'>
        <div className='w-full'>
          <div className='grid animate-pulse grid-cols-2 border-l border-t border-neutral-100 sm:mx-0 md:grid-cols-3 lg:grid-cols-4'>
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
