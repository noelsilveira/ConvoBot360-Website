'use client';

import { cn } from '@/lib/utils';
import { ProductStore, categoryStore } from '@/store/productsStore';
import { Disclosure } from '@headlessui/react';
import { MinusIcon, PlusIcon } from '@heroicons/react/24/outline';
import { useParams, useRouter } from 'next/navigation';
import React from 'react';

const FilterListWrapper = ({
  children,
  title,
}: {
  children: React.ReactNode;
  title: string;
}) => {
  const { category: activeCategory } = useParams();
  const router = useRouter();

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
              <span className='font-medium text-gray-900'>{title}</span>
              <span className='ml-6 flex items-center'>
                {open ? (
                  <MinusIcon className='h-5 w-5' aria-hidden='true' />
                ) : (
                  <PlusIcon className='h-5 w-5' aria-hidden='true' />
                )}
              </span>
            </Disclosure.Button>
          </h3>
          <Disclosure.Panel className='pt-4'>
            <div className='space-y-2'>
              <button
                type='button'
                onClick={() => {
                  router.push('/merchant/36049357/estore-products/');
                }}
                className={cn(
                  'text-sm text-gray-500',
                  activeCategory !== '' ? 'text-black' : ''
                )}
              >
                All Categories
              </button>

              {children}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
};

export default FilterListWrapper;
