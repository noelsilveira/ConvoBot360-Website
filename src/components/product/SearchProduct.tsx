'use client';

import { useEffect, useRef, useState } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { TbSearch } from 'react-icons/tb';
import { useDebounce } from 'use-debounce';

const SearchProduct = () => {
  const initialRender = useRef(true);

  const router = useRouter();
  const searchParams = useSearchParams();
  const search = searchParams.get('search');

  const [text, setText] = useState(search || '');
  const [query] = useDebounce(text, 750);

  useEffect(() => {
    if (initialRender.current) {
      initialRender.current = false;
      return;
    }

    if (!query) {
      router.push(`/merchant/36049357/estore-products`);
    } else {
      router.push(`/merchant/36049357/estore-products?search=${query}`);
    }
  }, [query]);

  return (
    <div className='w-full sm:max-w-md'>
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
            value={text}
            onChange={(e) => setText(e.target.value)}
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
