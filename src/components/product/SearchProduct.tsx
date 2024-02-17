'use client';

import { useCallback, useState } from 'react';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import debounce from 'lodash/debounce';
import { TbSearch } from 'react-icons/tb';

const SearchProduct = () => {
  const [query, setQuery] = useState('');
  const [open, setOpen] = useState(true);

  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

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
  let timeout = 500;

  function handleSearch(term: string) {
    if (term == '') {
      setQueryParams('', term);
      router.replace(`${pathname}`);
    } else {
      setQueryParams('search', term);
    }
    router.refresh();

    // setActiveSortOption(term);
  }

  const debouncedHandleSearch = useCallback(
    debounce(handleSearch, timeout),
    []
  );

  return (
    <div className='w-full max-w-md'>
      <div className='px-4 sm:px-0'>
        <label
          htmlFor='search'
          className='sr-only block text-sm font-medium leading-6 text-gray-900'
        >
          Search keyword
        </label>
        <div className='relative flex items-center'>
          <input
            type='text'
            name='search'
            id='search'
            onChange={(e) => {
              debouncedHandleSearch(e.target.value);
            }}
            placeholder='Search keyword...'
            className='block w-full rounded-xl bg-gallery-100 px-4 py-2.5 pl-8 text-sm font-medium text-gray-900 accent-blue-600 placeholder:text-gallery-400 sm:text-sm sm:leading-6'
          />
          <div className='absolute inset-y-0 left-0 flex items-center justify-center py-1.5 pl-2.5'>
            <TbSearch className='text-lg text-gray-400' />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchProduct;
