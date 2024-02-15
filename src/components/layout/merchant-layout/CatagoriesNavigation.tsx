'use server';

import { getCategories } from '@/app/merchant/[merchant_id]/products-listing/fetcher';
import { batchReduce } from '@/lib/format';
import { CategoryType } from '@/types/products';
import Link from 'next/link';
import React from 'react';

const CategoriesNavigation = async () => {
  const categories: CategoryType[] = await getCategories();
  const slicedCategories = await batchReduce<CategoryType>(categories!, 8);

  return slicedCategories?.map((sliced, index) => (
    <ul
      role='list'
      key={'sliced-category-' + (index * 22) / 7}
      aria-labelledby={`heading`}
      className='mt-6 space-y-6 sm:mt-4 sm:space-y-4'
    >
      {sliced.map((category, j) => (
        <li key={category.title} className='flex'>
          <Link
            href={'#!'}
            className='duration-150 ease-out hover:text-gray-900 hover:underline'
          >
            {category.title}
          </Link>
        </li>
      ))}{' '}
    </ul>
  ));
};

export default CategoriesNavigation;
