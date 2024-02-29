'use client';

import SearchProduct from '@/components/product/SearchProduct';
import CategoryNameInProductList from '@/components/product/estore/category/CategoryNameInProductList';
import React from 'react';
import SortFilterMenu from '../product-layout/SortFilterMenu';
import { useParams, usePathname } from 'next/navigation';
import { SortOptions } from '@/components/product/SortProducts';
import { TbFilterFilled } from 'react-icons/tb';
import FilterCategoriesButton from '@/components/product/estore/FilterCategoriesButton';

const SearchAndFilterHeader = () => {
  const params: { sortBy: SortOptions } = useParams();
  const pathName = usePathname();

  //   if (pathName == '/merchant/[merchant_id]/estore-products') return null;
  return pathName !== '/merchant/36049357/estore-products' ? null : (
    <div>
      <div className='mt-0 flex flex-1 items-center justify-end md:mt-0 md:hidden'>
        <SearchProduct />
      </div>
      <div className='flex items-center justify-end px-4 pb-1.5 pt-1'>
        {/* Sort filter menu */}
        <CategoryNameInProductList />
        <SortFilterMenu sortBy={params.sortBy || `"price":"asc"`} />

        <button
          type='button'
          className='-m-2 ml-3 hidden p-2 text-gray-400 hover:text-gray-500 sm:ml-5'
        >
          <span className='sr-only'>View grid</span>
          <TbFilterFilled className='h-4 w-4' aria-hidden='true' />
        </button>
        {/* Filter categories mobile button */}
        <FilterCategoriesButton />
      </div>
    </div>
  );
};

export default SearchAndFilterHeader;
