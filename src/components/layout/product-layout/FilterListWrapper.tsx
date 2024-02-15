'use client';

import { PlusIcon } from '@heroicons/react/20/solid';
import { Disclosure } from '@headlessui/react';
import { ProductStore, categoryStore } from '@/store/productsStore';
import { MinusIcon } from '@heroicons/react/24/outline';

const FilterListWrapper = ({
  children,
  title,
}: {
  children: React.ReactNode;
  title: string;
}) => {
  const { setProducts } = ProductStore();
  const { activeCategory, clearCategories } = categoryStore();

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
              {activeCategory !== '' && (
                <button
                  type='button'
                  onClick={() => {
                    clearCategories();
                  }}
                  className='rounded-full bg-gray-700 px-2 py-0.5 text-xs text-gray-100'
                >
                  Clear
                </button>
              )}
              {children}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
};

export default FilterListWrapper;
