'use server';

import CategoryLink from './CategoryLink';
import { CategoryType } from '@/types/products';
import { ProductListingParamsType } from '../../../(deprecated)/products-listing/page';
import React from 'react';
import { getCategories } from '../../../(deprecated)/products-listing/fetcher';

type CategoriesParams = ProductListingParamsType & {
  params: { category?: string };
};
const CategoriesSidebar = async ({ params }: CategoriesParams) => {
  const categories: CategoryType[] = await getCategories();

  return (
    <>
      {categories ? (
        categories.map((category, categoryIdx) => (
          <div key={category.title + categoryIdx} className='flex items-center'>
            {/* filter button with action */}
            <CategoryLink category={category} />
            {/* <FilterButton category={category} /> */}
          </div>
        ))
      ) : (
        <div>
          <p>No categories found</p>
        </div>
      )}
    </>
  );
};

export default CategoriesSidebar;
