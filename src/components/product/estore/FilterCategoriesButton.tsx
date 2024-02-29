'use client';

import { useFiltersNavigationStore } from '@/store/navigationStore';
import React from 'react';
import { TbFilterFilled } from 'react-icons/tb';

const FilterCategoriesButton = () => {
  const { setMobileFiltersOpen } = useFiltersNavigationStore();

  return (
    <button
      type='button'
      className='-mb-0.5 -mr-2 ml-2 inline-flex items-center justify-center gap-1 px-2 text-sm font-medium tracking-tight text-gallery-700 hover:text-gallery-800 sm:ml-5 lg:hidden'
      onClick={() => setMobileFiltersOpen(true)}
    >
      <span>Filters</span>
      <TbFilterFilled
        className='h-3 w-3 flex-shrink-0 text-gallery-600 group-hover:text-gallery-700'
        aria-hidden='true'
      />
    </button>
  );
};

export default FilterCategoriesButton;
