'use client';

import { Dialog, Disclosure, Transition } from '@headlessui/react';
import { MinusIcon, PlusIcon, XMarkIcon } from '@heroicons/react/24/outline';
import React, { Fragment } from 'react';
import CategoryLink from '@/components/product/estore/CategoryLink';
import { CategoryType } from '@/types/products';
import { cn } from '@/lib/utils';
import { getCategories } from '@/app/actions/product-fetcher';
import { useFiltersNavigationStore } from '@/store/navigationStore';
import useSWR from 'swr';
import { useParams, useRouter } from 'next/navigation';

const MobileFilterMenu = () => {
  const { mobileFiltersOpen, setMobileFiltersOpen } =
    useFiltersNavigationStore();
  const router = useRouter();
  const { category: activeCategory } = useParams();

  const {
    data: categories,
    error,
    isLoading,
  } = useSWR<CategoryType[]>('/api/categories', getCategories);

  return (
    <Transition.Root show={mobileFiltersOpen} as={Fragment}>
      <Dialog
        as='div'
        className='relative z-40 lg:hidden'
        onClose={setMobileFiltersOpen}
      >
        <Transition.Child
          as={Fragment}
          enter='transition-opacity ease-linear duration-300'
          enterFrom='opacity-0'
          enterTo='opacity-100'
          leave='transition-opacity ease-linear duration-300'
          leaveFrom='opacity-100'
          leaveTo='opacity-0'
        >
          <div className='fixed inset-0 bg-black bg-opacity-25' />
        </Transition.Child>

        <div className='fixed inset-0 z-40 flex'>
          <Transition.Child
            as={Fragment}
            enter='transition ease-in-out duration-300 transform'
            enterFrom='translate-x-full'
            enterTo='translate-x-0'
            leave='transition ease-in-out duration-300 transform'
            leaveFrom='translate-x-0'
            leaveTo='translate-x-full'
          >
            <Dialog.Panel className='relative ml-auto flex h-full w-full max-w-xs flex-col overflow-y-auto bg-white py-2 pb-12 shadow-xl'>
              <div className='flex items-center justify-between px-4'>
                <h2 className='text-base font-medium text-gray-900'>Filters</h2>
                <button
                  type='button'
                  className='-mr-2 flex h-10 w-10 items-center justify-center rounded-md bg-white p-2 text-gray-400'
                  onClick={() => setMobileFiltersOpen(false)}
                >
                  <span className='sr-only'>Close menu</span>
                  <XMarkIcon className='h-6 w-6' aria-hidden='true' />
                </button>
              </div>

              {/* Filters */}
              <form className='mt-2'>
                <h3 className='sr-only'>Categories</h3>

                <Disclosure
                  as='div'
                  defaultOpen={true}
                  className='border-t border-gallery-200 px-4 py-6'
                >
                  {({ open }: { open: boolean }) => (
                    <>
                      <h3 className='-mx-2 -my-3 flow-root'>
                        <Disclosure.Button className='flex w-full items-center justify-between bg-white px-2 py-2 text-gray-400 hover:text-gray-500'>
                          <span className='font-medium text-gray-900'>
                            Categories
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
                        <div className='space-y-2'>
                          {isLoading && (
                            <p className='text-sm'>Loading categories...</p>
                          )}
                          <div className='flex items-center px-4'>
                            <button
                              type='button'
                              onClick={() => {
                                setMobileFiltersOpen(false);
                                router.push(
                                  '/merchant/36049357/estore-products/'
                                );
                              }}
                              className={cn(
                                'text-sm text-gray-500',
                                activeCategory == ''
                                  ? 'text-black underline'
                                  : ''
                              )}
                            >
                              All Categories
                            </button>
                          </div>
                          {categories &&
                            categories.map((category, index) => (
                              <div
                                key={category.title + index}
                                className='flex items-center px-4'
                              >
                                <CategoryLink category={category} />
                              </div>
                            ))}
                        </div>
                      </Disclosure.Panel>
                    </>
                  )}
                </Disclosure>
              </form>
            </Dialog.Panel>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition.Root>
  );
};

export default MobileFilterMenu;
