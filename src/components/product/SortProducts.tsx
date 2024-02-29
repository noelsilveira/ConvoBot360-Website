'use client';

import { ChangeEvent } from 'react';
import FilterRadioGroup from '@/components/product/FilterRadioGroup';
import { revalidateTag } from 'next/cache';
export type SortOptions =
  | `"price":"asc"`
  | `"price":"desc"`
  | `"title":"asc"`
  | `"title":"desc"`;

type SortProductsProps = {
  sortBy: SortOptions;
  setQueryParams: (name: string, value: SortOptions) => void;
};

const sortOptions = [
  {
    value: `"price":"asc"`,
    label: 'Price: Low to High',
  },
  {
    value: `"price":"desc"`,
    label: 'Price: High to Low',
  },
  {
    value: `"title":"asc"`,
    label: 'Name: A - Z',
  },
  {
    value: `"title":"desc"`,
    label: 'Name: Z - A',
  },
];

const SortProducts = ({ sortBy, setQueryParams }: SortProductsProps) => {
  const handleChange = (e: ChangeEvent<HTMLButtonElement>) => {
    const newSortBy = e.target.value as SortOptions;
    setQueryParams('sortBy', newSortBy);
    revalidateTag('estore_products');
  };

  return (
    <FilterRadioGroup
      title='Sort by'
      items={sortOptions}
      value={sortBy}
      handleChange={handleChange}
    />
  );
};

export default SortProducts;
