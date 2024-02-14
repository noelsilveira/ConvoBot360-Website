'use client';

import { ChevronDownIcon, PlusIcon } from '@heroicons/react/20/solid';
import { Disclosure, Menu, Transition } from '@headlessui/react';
import {
  FunnelIcon,
  MinusIcon,
  Squares2X2Icon,
} from '@heroicons/react/24/outline';
import React, { FormEvent, Fragment } from 'react';
import { filters, sortOptions, subCategories } from '@/constants/filters';
import {
  getCategories,
  getProducts,
} from '@/app/merchant/[merchant_id]/products-listing/fetcher';

import { CategoryType } from '@/types/products';
import MobileFilterMenu from './MobileFilterMenu';
import { cn } from '@/lib/utils';
import { productFilterUpdate } from '@/app/actions/product';
import useSwr from 'swr';
import SortFilterMenu from './SortFilterMenu';
import { ProductListingParamsType } from '@/app/merchant/[merchant_id]/test-products-listing/page';

const ProductsListLayout = ({
  children,
  params,
}: ProductListingParamsType & { children: React.ReactNode }) => {
  const { data, isLoading, error } = useSwr('categories', () =>
    getCategories()
  );
  const categories: CategoryType[] = data;

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
            <form className='hidden lg:block'>
              <div className='lg:sticky lg:top-16'>
                <h3 className='sr-only'>Categories</h3>
                <ul
                  role='list'
                  className='space-y-4 border-b border-gray-200 pb-6 text-sm font-medium text-gray-900'
                >
                  {isLoading ? (
                    <p>Loading categories...</p>
                  ) : (
                    categories &&
                    categories.map((category) => (
                      <form
                        key={category.title}
                        onSubmit={(e: FormEvent) => {
                          e.preventDefault();
                          productFilterUpdate({ filter: category.title });
                        }}
                      >
                        <input hidden name='filter' value={category.title} />
                        <button type='submit'>{category.title}</button>
                        {/* <p className='text-xs text-gray-500'>{category.description}</p> */}
                      </form>
                    ))
                  )}
                </ul>

                {filters.map((section) => (
                  <Disclosure
                    as='div'
                    key={section.id}
                    className='border-b border-gray-200 py-6'
                  >
                    {({ open }) => (
                      <>
                        <h3 className='-my-3 flow-root'>
                          <Disclosure.Button className='flex w-full items-center justify-between bg-white py-3 text-sm text-gray-400 hover:text-gray-500'>
                            <span className='font-medium text-gray-900'>
                              {section.name}
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
                            {section.options.map((option, optionIdx) => (
                              <div
                                key={option.value}
                                className='flex items-center'
                              >
                                <input
                                  id={`filter-${section.id}-${optionIdx}`}
                                  name={`${section.id}[]`}
                                  defaultValue={option.value}
                                  type='checkbox'
                                  defaultChecked={option.checked}
                                  className='h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500'
                                />
                                <label
                                  htmlFor={`filter-${section.id}-${optionIdx}`}
                                  className='ml-3 text-sm text-gray-600'
                                >
                                  {option.label}
                                </label>
                              </div>
                            ))}
                          </div>
                        </Disclosure.Panel>
                      </>
                    )}
                  </Disclosure>
                ))}
              </div>
            </form>

            {/* Product grid */}
            <div className='lg:col-span-3'>{children}</div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default ProductsListLayout;
