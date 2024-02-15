import { FunnelIcon, Squares2X2Icon } from '@heroicons/react/24/outline';
import React, { Suspense } from 'react';
import { ProductListingParamsType } from '@/app/merchant/[merchant_id]/products-listing/page';
import MobileFilterMenu from '@/components/layout/product-layout/MobileFilterMenu';
import SortFilterMenu from '@/components/layout/product-layout/SortFilterMenu';
import CategoriesSidebar from './CategoriesSidebar';
import FilterListWrapper from './FilterListWrapper';

const EStoreProductsLayout = ({
  children,
  params,
}: ProductListingParamsType & { children: React.ReactNode }) => {
  return (
    <div>
      {/* Mobile filter dialog */}
      <MobileFilterMenu />

      <main className='mx-auto mt-8 max-w-7xl px-4 sm:px-6 lg:px-8'>
        <div className='flex items-baseline justify-end border-gray-200 pb-0 pt-4'>
          <div className='flex items-center'>
            {/* Sort filter menu */}
            <SortFilterMenu sortBy={params.sortBy || 'price-asc'} />

            <button
              type='button'
              className='-m-2 ml-5 hidden p-2 text-gray-400 hover:text-gray-500 sm:ml-7'
            >
              <span className='sr-only'>View grid</span>
              <Squares2X2Icon className='h-5 w-5' aria-hidden='true' />
            </button>
            <button
              type='button'
              className='-m-2 ml-4 inline-flex items-center justify-center gap-1 p-2 text-sm font-medium text-gray-700 hover:text-gray-900 sm:ml-6 lg:hidden'
              // onClick={() => setMobileFiltersOpen(true)}
            >
              <span>Filters</span>
              <FunnelIcon
                className='h-4 w-4 flex-shrink-0 text-gray-400 group-hover:text-gray-500'
                aria-hidden='true'
              />
            </button>
          </div>
        </div>

        <section aria-labelledby='products-heading' className='py-6 lg:pb-8'>
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
