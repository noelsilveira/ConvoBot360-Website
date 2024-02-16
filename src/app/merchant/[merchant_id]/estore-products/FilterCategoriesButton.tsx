'use client';

import { useFiltersNavigationStore } from '@/store/navigationStore';
import { FunnelIcon } from '@heroicons/react/24/outline';
import React from 'react';

const FilterCategoriesButton = () => {
  const { setMobileFiltersOpen } = useFiltersNavigationStore();

  return (
    <button
      type='button'
      className='-m-2 ml-4 inline-flex items-center justify-center gap-1 p-2 text-sm font-medium text-gray-700 hover:text-gray-900 sm:ml-6 lg:hidden'
      onClick={() => setMobileFiltersOpen(true)}
    >
      <span>Filters</span>
      <FunnelIcon
        className='h-4 w-4 flex-shrink-0 text-gray-400 group-hover:text-gray-500'
        aria-hidden='true'
      />
    </button>
  );
};

export default FilterCategoriesButton;
