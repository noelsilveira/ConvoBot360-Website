'use client';

import { getProducts } from '@/app/merchant/[merchant_id]/products-listing/fetcher';

import { CategoryType } from '@/types/products';
import { ProductStore, categoryStore } from '@/store/productsStore';
import React from 'react';
import { cn } from '@/lib/utils';

const FilterButton = ({ category }: { category: CategoryType }) => {
  const { setProducts } = ProductStore();
  const { activeCategory, setActiveCategory } = categoryStore();

  const FilterByCategory = async () => {
    const data = await getProducts({
      filterParam: { category: category.title },
    });
    setActiveCategory(category.title);
    setProducts(data);
  };
  return (
    <>
      {/* <form
                action={() => productFilterUpdate({ filter: category.title })}
            > */}
      {/* <input hidden name='filter' value={category.title} /> */}
      <button
        onClick={() => {
          FilterByCategory();
        }}
        type='button'
        className={cn(
          'rounded text-sm text-gray-500',
          activeCategory === category.title ? 'font-medium text-gray-900' : ''
        )}
      >
        {category.title}
      </button>

      {/* </form> */}
    </>
  );
};

export default FilterButton;
