'use client';

import {
  getFilterProducts,
  getProducts,
} from '@/app/merchant/[merchant_id]/products-listing/fetcher';

import { API_BASE_URL } from '@/constants/urls';
import { CategoryType } from '@/types/products';
import { ProductStore, categoryStore } from '@/store/productsStore';
import React, { useState } from 'react';
import axios from 'axios';
import { branch_id } from '@/constants/products';
import { productFilterUpdate } from '@/app/actions/product';
import useSWR from 'swr';
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
