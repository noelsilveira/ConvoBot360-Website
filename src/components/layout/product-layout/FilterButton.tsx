'use client';

import { ProductStore, categoryStore } from '@/store/productsStore';

import { CategoryType } from '@/types/products';
import React from 'react';
import { cn } from '@/lib/utils';
import { getProducts } from '@/app/actions/product-fetcher';

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
