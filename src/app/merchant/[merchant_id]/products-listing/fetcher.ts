'use server';

import { API_BASE_URL } from '@/constants/urls';
import { setSessionHeader } from '@/app/auth/set-headers';
import { ProductListingParamsType } from '@/types/products';
import { SearchParamsType } from '../estore-products/[category]/page';
import { convertToSortObject } from '@/lib/format';
import { branch_id } from '@/constants/products';

export type FilterParamType = {
  keywords: string;
  category: string;
};
export const getProducts = async ({
  filterParam,
}: {
  filterParam: FilterParamType | {};
}) => {
  const my_headers = await setSessionHeader();
  var raw = JSON.stringify({
    branch_id: branch_id,
    filters: filterParam,
    // "filters": filters === null || filters === undefined ? {}: {"category": filters},
    sort: {
      price: 'asc',
      title: 'desc',
    },
  });

  const res = await fetch(API_BASE_URL + `/estore/catalog/${1}/${20}`, {
    method: 'POST',
    redirect: 'follow',
    body: raw,
    headers: my_headers,
    next: {
      revalidate: 5, //cache data for 40 second
      tags: ['products'],
    },
    // shallow: true
  });
  const pro_obj = await res.json();
  return pro_obj.detail;
};

export const getCategories = async () => {
  const headers = await setSessionHeader();

  const res = await fetch(API_BASE_URL + `/estore/categories/${branch_id}`, {
    method: 'POST',
    redirect: 'follow',
    headers,
    next: {
      revalidate: 100,
      tags: ['categories'],
    },
  });
  const categories = await res.json();

  return categories;
};

export const getFilterProducts = async (
  { filterParam }: { filterParam: FilterParamType | {} }
  // filter: string|null
) => {
  'use client';

  const my_headers = await setSessionHeader();
  var raw = JSON.stringify({
    branch_id: branch_id,
    filters: filterParam,
    sort: {
      price: 'asc',
      title: 'desc',
    },
  });

  const res = await fetch(API_BASE_URL + `/estore/catalog/${1}/${20}`, {
    method: 'POST',
    redirect: 'follow',
    body: raw,
    headers: my_headers,
  });
  const pro_obj = await res.json();
  return pro_obj.detail;
};

export const getEStoreProducts = async (
  filter?: string,
  sort?: { price: string; title: string },
  page?: number,
  limit?: number
) => {
  const filterParam = { category: filter };

  const my_headers = await setSessionHeader();
  let raw = JSON.stringify({
    branch_id: branch_id,
    filters: filterParam,
    sort: sort || {
      price: 'asc',
      title: 'desc',
    },
  });

  const res = await fetch(
    API_BASE_URL + `/estore/catalog/${page || 1}/${limit || 20}`,
    {
      method: 'POST',
      redirect: 'follow',
      body: raw,
      headers: my_headers,
      next: {
        revalidate: 30, //cache data for 40 second
        tags: ['products'],
      },
      // shallow: true
    }
  );
  const pro_obj = await res.json();
  return pro_obj.detail;
};

export const getEStoreProductsListWithSort = async ({
  queryParams,
  categoryParams,
  limit,
  page,
  searchParams,
}: {
  page?: number;
  limit?: number;
  categoryParams?: ProductListingParamsType['params']['category'];
  queryParams?: ProductListingParamsType;
  searchParams?: SearchParamsType;
}) => {
  const categoryParam = { category: categoryParams };
  const sortBy = searchParams?.sortBy;
  const sortObject = sortBy ? convertToSortObject(sortBy as string) : {};

  const my_headers = await setSessionHeader();
  const bid = 'b3cac885-ba05-4d0c-8a61-ac77da18a84d';

  let raw = JSON.stringify({
    branch_id: bid,
    filters: categoryParam,
    sort: sortObject,
  });

  try {
    const res = await fetch(
      API_BASE_URL + `/estore/catalog/${page || 1}/${limit || 20}`,
      {
        method: 'POST',
        redirect: 'follow',
        body: raw,
        headers: my_headers,
        next: {
          revalidate: 30, //cache data for 40 second
          tags: ['estore-products'],
        },
        // shallow: true
      }
    );

    const productObject = await res.json();
    return productObject.detail;
  } catch (error) {
    throw new Error('Server error!');
  }
};
