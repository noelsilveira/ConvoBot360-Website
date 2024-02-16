'use client';

import { navigation } from '@/constants/navigation';
import { cn } from '@/lib/utils';
import { useFiltersNavigationStore } from '@/store/navigationStore';
import { Popover, Transition } from '@headlessui/react';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import React, { Fragment } from 'react';

const FlyoutMenu = ({ children }: { children: React.ReactNode }) => {
  const { merchant_id } = useParams();
  const { categoryMenuOpen, setCategoryMenuOpen } = useFiltersNavigationStore();

  return (
    <Popover.Group className='hidden lg:ml-8 lg:block lg:self-stretch'>
      <div className='flex h-full space-x-8'>
        {/* {categories && categories.map((category, index) => ( */}
        <Popover className='flex'>
          {({ open, close }) => (
            <>
              <div className='relative flex'>
                <Popover.Button
                  onClick={() => {
                    open
                      ? setCategoryMenuOpen(!open)
                      : setCategoryMenuOpen(true);
                  }}
                  className={cn(
                    categoryMenuOpen
                      ? 'border-brand-600 text-brand-600'
                      : 'border-transparent text-gray-700 hover:text-gray-800',
                    'relative z-10 -mb-px flex items-center border-b-2 pt-px text-sm font-medium transition-colors duration-200 ease-out focus:outline-none'
                  )}
                >
                  Categories
                </Popover.Button>
              </div>
              {/* <Popover.Overlay className='fixed inset-0 top-1/4 bg-black opacity-30' /> */}

              {categoryMenuOpen && (
                <Transition
                  as={Fragment}
                  enter='transition ease-out duration-200'
                  enterFrom='opacity-0'
                  enterTo='opacity-100'
                  leave='transition ease-in duration-150'
                  leaveFrom='opacity-100'
                  leaveTo='opacity-0'
                >
                  <Popover.Panel className='absolute inset-x-0 top-full z-10 text-sm text-gray-500'>
                    {/* Presentational element used to render the bottom shadow, if we put the shadow on the actual panel it pokes out the top, so we use this shorter element to hide the top of the shadow */}
                    <div
                      className='absolute inset-0 top-1/2 bg-white shadow'
                      aria-hidden='true'
                    />

                    {children}
                  </Popover.Panel>
                </Transition>
              )}
            </>
          )}
        </Popover>
        {/* ))} */}
        {/* merchant specific pages */}
        {navigation.merchant_related.map((page) => (
          <Link
            href={`${page.base_href}/${merchant_id}/estore-products`}
            key={'merchant-specific-page-' + page.name}
            className='flex items-center text-sm font-medium text-gray-700 hover:text-gray-800'
          >
            {page.name}
          </Link>
        ))}
      </div>
    </Popover.Group>
  );
};

export default FlyoutMenu;
