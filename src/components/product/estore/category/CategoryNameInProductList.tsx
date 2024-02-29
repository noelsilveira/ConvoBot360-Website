'use client';

import { urlToStringParser } from '@/lib/format';
import { useParams } from 'next/navigation';
import React from 'react';

const CategoryNameInProductList = () => {
  const params = useParams();
  const parsed_link = urlToStringParser(params.category as string);
  return params.category ? (
    <div className='group -mb-0.5 line-clamp-1 inline-flex items-baseline justify-center gap-1 px-3 text-sm font-medium text-gallery-700 hover:text-gallery-800'>
      <span>Category: </span>
      <span className='line-clamp-1 text-blue-600'>{parsed_link}</span>
    </div>
  ) : (
    <></>
  );
};

export default CategoryNameInProductList;
