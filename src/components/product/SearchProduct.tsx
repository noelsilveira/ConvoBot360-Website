'use client';

import { Fragment, useState } from 'react';
import { MagnifyingGlassIcon } from '@heroicons/react/20/solid';
import { Combobox, Dialog, Transition } from '@headlessui/react';
import { cn } from '@/lib/utils';
import { TbSearch } from 'react-icons/tb';

const people = [
  { id: 1, name: 'Leslie Alexander', url: '#!' },
  { id: 2, name: 'John Alexander', url: '#!' },
  { id: 3, name: 'Yuri Fa Nom', url: '#!' },
  { id: 4, name: 'Denis Ivy', url: '#!' },
  { id: 5, name: 'Jessica Sai', url: '#!' },
  // More people...
];

const SearchProduct = () => {
  const [query, setQuery] = useState('');
  const [open, setOpen] = useState(true);

  const filteredPeople =
    query === ''
      ? []
      : people.filter((person) => {
          return person.name.toLowerCase().includes(query.toLowerCase());
        });
  function handleSearch(term: string) {
    console.log(term);
  }

  return (
    <div>
      <div className='mx-auto max-w-sm px-4 sm:px-0'>
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
              handleSearch(e.target.value);
            }}
            placeholder='Search keyword...'
            className='block w-full rounded-xl border-0 px-4 py-2 pr-14 font-medium text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-brand-600 sm:text-sm sm:leading-6'
          />
          <div className='absolute inset-y-0 right-0 flex items-center justify-center py-1.5 pr-3'>
            <TbSearch className='text-lg text-gray-400' />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchProduct;
