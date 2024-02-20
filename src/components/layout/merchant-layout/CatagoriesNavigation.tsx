'use client';

import { CategoryType, ProductListingParamsType } from '@/types/products';
import {
  batchReduce,
  stringToUrlParser,
  urlToStringParser,
} from '@/lib/format';

import Link from 'next/link';
import React from 'react';
import { cn } from '@/lib/utils';
import { getCategories } from '@/app/actions/product-fetcher';
import { useFiltersNavigationStore } from '@/store/navigationStore';
import useSWR from 'swr';

const CategoriesNavigation = ({ params }: ProductListingParamsType) => {
  const { category: activeCategory } = params;
  const { setCategoryMenuOpen } = useFiltersNavigationStore();
  const {
    data: categories,
    error,
    isLoading,
  } = useSWR<CategoryType[]>('/api/categories', getCategories);

  const slicedCategories = batchReduce<CategoryType>(categories!, 8);

  return isLoading ? (
    <div className='mt-6 space-y-6 sm:mt-4 sm:space-y-4'>
      <p>Loading categories...</p>
    </div>
  ) : (
    slicedCategories?.map((sliced, index) => (
      <ul
        role='list'
        key={'sliced-category-' + (index * 22) / 7}
        aria-labelledby={`heading`}
        className='mt-6 space-y-6 sm:mt-4 sm:space-y-4'
      >
        {sliced.map((category, j) => {
          const category_link = stringToUrlParser(category.title);
          const parsed_link = urlToStringParser(activeCategory as string);
          return (
            <li key={category.title} className='flex'>
              <Link
                href={`/merchant/36049357/estore-products/${category_link}`}
                onClick={() => setCategoryMenuOpen(false)}
                className={cn(
                  'duration-150 ease-out hover:text-gray-900 hover:underline',
                  parsed_link === category.title
                    ? 'font-medium text-gray-900 underline'
                    : ''
                )}
              >
                {category.title}
              </Link>
            </li>
          );
        })}
      </ul>
    ))
  );
};

export default CategoriesNavigation;
