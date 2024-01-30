'use client';

import { ChevronDownIcon, PlusIcon } from '@heroicons/react/20/solid';
import { Disclosure, Menu, Transition } from '@headlessui/react';
import {
  FunnelIcon,
  MinusIcon,
  Squares2X2Icon,
} from '@heroicons/react/24/outline';
import React, { Children, FormEvent, Fragment, Suspense } from 'react';
import { filters, sortOptions, subCategories } from '@/constants/filters';
import {
  getCategories,
  getProducts,
} from '@/app/merchant/[merchant_id]/products-listing/fetcher';

import { CategoryType } from '@/types/products';
import FilterButton from './FilterButton';
import MobileFilterMenu from './MobileFilterMenu';
import { ProductListingParamsType } from '@/app/merchant/[merchant_id]/test-products-listing/page';
import SortFilterMenu from './SortFilterMenu';
import { cn } from '@/lib/utils';
import { productFilterUpdate } from '@/app/actions/product';
import useSwr from 'swr';

const ProductsListLayout = ({
  children,
  categories,
  params,
}: ProductListingParamsType & {
  children: React.ReactNode; categories: CategoryType[]
}) => {
  // const { data, isLoading, error } = useSwr('categories', () =>
  // getCategories()
  // );
  // const categories: CategoryType[] = data;

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


                <FilterListWrapper title="Categories" >

                  {categories && categories.map((category, categoryIdx) => (

                    <div
                      key={category.title + categoryIdx}
                      className='flex items-center'
                    >
                      {/* filter button with action */}
                      <FilterButton category={category} />
                    </div>

                  ))}

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

export default ProductsListLayout;


const FilterListWrapper = ({
  children,
  title
}: {
  children: React.ReactNode;
  title: string
}) => {
  return (
    <Disclosure
      as='div'
      defaultOpen={true}
      className='border-b border-gray-200 py-6'
    >
      {({ open }) => (
        <>
          <h3 className='-my-3 flow-root'>
            <Disclosure.Button className='flex w-full items-center justify-between bg-white py-3 text-sm text-gray-400 hover:text-gray-500'>
              <span className='font-medium text-gray-900'>
                {title}
              </span>
              <span className='ml-6 flex items-center'>
                {open ? (
                  <MinusIcon
                    className='h-5 w-5'
                    aria-hidden='true'
                  />
                ) : (
                  <PlusIcon
                    className='h-5 w-5'
                    aria-hidden='true'
                  />
                )}
              </span>
            </Disclosure.Button>
          </h3>
          <Disclosure.Panel className='pt-6'>
            <div className='space-y-4'>
              {children}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  )
}
