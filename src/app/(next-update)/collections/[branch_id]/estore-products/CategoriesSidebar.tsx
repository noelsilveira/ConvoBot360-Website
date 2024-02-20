'use server';

import { getCategories } from '@/app/actions/product-fetcher';
import CategoryLink from './CategoryLink';
import { CategoryType, ProductListingParamsType } from '@/types/products';
import React from 'react';

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
