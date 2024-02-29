'use client';

import { Menu, Transition } from '@headlessui/react';
import React, { ChangeEvent, Fragment, useCallback, useState } from 'react';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';

import { ChevronDownIcon } from '@heroicons/react/24/outline';
import { cn } from '@/lib/utils';
import { revalidateTag } from 'next/cache';

type SortListProps = {
  sortBy: SortOptions;
  search?: boolean;
};

export type SortOptions =
  | `"price":"asc"`
  | `"price":"desc"`
  | `"title":"asc"`
  | `"title":"desc"`;

type SortProductsProps = {
  sortBy: SortOptions;
  setQueryParams: (name: string, value: SortOptions) => void;
};

const sortOptions = [
  {
    value: `"price":"asc"`,
    label: 'Price: Low to High',
  },
  {
    value: `"price":"desc"`,
    label: 'Price: High to Low',
  },
  {
    value: `"title":"asc"`,
    label: 'Name: A - Z',
  },
  {
    value: `"title":"desc"`,
    label: 'Name: Z - A',
  },
];

const SortFilterMenu = ({ sortBy }: SortListProps) => {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const [activeOption, setActiveSortOption] = useState(sortBy);

  const createQueryString = useCallback(
    (name: string, value: string) => {
      const params = new URLSearchParams(searchParams);
      params.set(name, value);

      return params.toString();
    },
    [searchParams]
  );

  const setQueryParams = (name: string, value: string) => {
    const query = createQueryString(name, value);
    router.push(`${pathname}?${query}`);
  };
  type HandleChangeType = (...args: any[]) => void;

  const handleChange: HandleChangeType = (
    e: ChangeEvent<HTMLButtonElement>
  ) => {
    const newSortBy = e.target.value as SortOptions;
    setQueryParams('sortBy', newSortBy);
    router.refresh();
    setActiveSortOption(newSortBy);
  };

  return (
    <Menu as='div' className='relative inline-block text-left'>
      <div>
        <Menu.Button className='group inline-flex items-center justify-center text-sm font-medium tracking-tight text-gallery-700 hover:text-gallery-800'>
          <span>Sort</span>
          <ChevronDownIcon
            className='-mr-1 ml-1 h-4 w-4 flex-shrink-0 text-gray-400 group-hover:text-gray-500'
            aria-hidden='true'
          />
        </Menu.Button>
      </div>

      <Transition
        as={Fragment}
        enter='transition ease-out duration-100'
        enterFrom='transform opacity-0 scale-95'
        enterTo='transform opacity-100 scale-100'
        leave='transition ease-in duration-75'
        leaveFrom='transform opacity-100 scale-100'
        leaveTo='transform opacity-0 scale-95'
      >
        <Menu.Items className='absolute right-0 z-10 mt-2 min-w-40 origin-top-right rounded-lg bg-white shadow-2xl ring-1 ring-black ring-opacity-5 focus:outline-none'>
          <div className='py-1'>
            {sortOptions.map((option) => (
              <Menu.Item
                key={option.label}
                as='div'
                className='group inline-flex w-full'
                onChange={(e: any) =>
                  handleChange(
                    e as unknown as ChangeEvent<HTMLButtonElement>,
                    option.value
                  )
                }
              >
                {({ active }: { active: boolean }) => (
                  <>
                    <input
                      type='radio'
                      name={option.label}
                      id={option.label}
                      value={option.value}
                      className={cn(
                        option.value === activeOption
                          ? 'font-medium text-gray-900'
                          : 'text-gray-500',
                        active ? 'bg-gray-100' : '',
                        'block w-0 appearance-none md:text-sm'
                      )}
                    />

                    <label
                      htmlFor={option.label}
                      className={cn(
                        option.value === activeOption
                          ? 'font-medium text-gray-900'
                          : 'text-gray-500',
                        active ? 'bg-gray-100' : '',
                        'block w-full px-4 py-2 text-sm'
                      )}
                    >
                      {option.label}
                    </label>
                  </>
                )}
              </Menu.Item>
            ))}
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  );
};

export default SortFilterMenu;
