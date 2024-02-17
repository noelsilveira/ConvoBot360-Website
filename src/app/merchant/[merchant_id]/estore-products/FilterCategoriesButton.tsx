'use client';

import { useFiltersNavigationStore } from '@/store/navigationStore';
import { FunnelIcon } from '@heroicons/react/24/outline';
import React from 'react';

const FilterCategoriesButton = () => {
  const { setMobileFiltersOpen } = useFiltersNavigationStore();

  return (
    <button
      type='button'
      className='-mr-2 ml-2 inline-flex items-center justify-center gap-1 px-2 text-xs font-medium text-gallery-600 hover:text-gallery-700 sm:ml-5 lg:hidden'
      onClick={() => setMobileFiltersOpen(true)}
    >
      <span>Filters</span>
      <FunnelIcon
        className='h-3 w-3 flex-shrink-0 text-gallery-600 group-hover:text-gallery-700'
        aria-hidden='true'
      />
    </button>
  );
};

export default FilterCategoriesButton;
