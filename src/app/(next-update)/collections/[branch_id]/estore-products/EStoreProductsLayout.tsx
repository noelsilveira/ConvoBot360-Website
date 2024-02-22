import React, { Suspense } from 'react';

import CategoriesSidebar from './CategoriesSidebar';
import FilterCategoriesButton from './FilterCategoriesButton';
import FilterListWrapper from './FilterListWrapper';
import MobileFilterMenu from '@/components/layout/product-layout/MobileFilterMenu';
import SortFilterMenu from '@/components/layout/product-layout/SortFilterMenu';
import { Squares2X2Icon } from '@heroicons/react/24/outline';
import SearchProduct from '@/components/product/SearchProduct';
import { ProductListingParamsType } from '@/types/products';

const EStoreProductsLayout = ({
  children,
  params,
}: ProductListingParamsType & { children: React.ReactNode }) => {
  return (
    <div>
      {/* Mobile filter dialog */}
      <MobileFilterMenu />

      <main className='mx-auto mt-0 max-w-7xl px-0 sm:px-6 lg:px-8'>
        <div className='mt-1 flex flex-1 items-center justify-end sm:hidden md:mt-0'>
          <SearchProduct />
        </div>
        <div className='flex items-baseline justify-end border-gray-200 pb-0 pt-2'>
          {/* Search */}
          <div className='hidden flex-1 items-center justify-end sm:flex'>
            <SearchProduct />
          </div>
          <div className='flex items-center px-4'>
            {/* Sort filter menu */}
            <SortFilterMenu sortBy={params.sortBy || `"price":"asc"`} />

            <button
              type='button'
              className='-m-2 ml-3 hidden p-2 text-gray-400 hover:text-gray-500 sm:ml-5'
            >
              <span className='sr-only'>View grid</span>
              <Squares2X2Icon className='h-4 w-4' aria-hidden='true' />
            </button>
            {/* Filter categories mobile button */}
            <FilterCategoriesButton />
          </div>
        </div>

        <section aria-labelledby='products-heading' className='py-4 lg:pb-8'>
          <h2 id='products-heading' className='sr-only'>
            Products
          </h2>

          <div className='grid grid-cols-1 gap-x-8 gap-y-10 lg:grid-cols-4'>
            {/* Filters */}
            <div className='hidden lg:block'>
              <div className='lg:sticky lg:top-16'>
                <FilterListWrapper title='Categories'>
                  <Suspense
                    fallback={
                      <div className='h-6 w-full animate-pulse bg-gray-200' />
                    }
                  >
                    <CategoriesSidebar params={params} />
                  </Suspense>

                  {/* <ProductCategories categories={categories} /> */}
                </FilterListWrapper>
              </div>
            </div>

            {/* Product grid */}
            <div className='lg:col-span-3'>{children}</div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default EStoreProductsLayout;
