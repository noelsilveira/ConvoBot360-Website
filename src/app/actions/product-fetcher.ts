'use server';

import { API_BASE_URL } from '@/constants/urls';
import { ProductListingParamsType } from '@/types/products';
import { convertToSortObject } from '@/lib/format';
import { setSessionHeader } from '@/app/actions/set-headers';
import { cookies } from 'next/headers';

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
  const branch_id = cookies().get('branch_id');
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
  const myHeaders = await setSessionHeader();
  const branch_id = cookies().get('branch_id');
  // console.log('Branch id in get categories', branch_id?.value);

  try {
    const res = await fetch(
      API_BASE_URL + `/estore/categories/${branch_id?.value}`,
      {
        method: 'POST',
        headers: myHeaders,
        redirect: 'follow',
        next: {
          revalidate: 100,
          tags: ['categories'],
        },
      }
    );
    const categories = await res.json();
    // console.log('Categories Response: ', categories);
    if (!categories || categories.detail === 'No Categories Found') {
      console.error(categories.detail);
      throw new Error('Unable to fetch categories', categories);
    }

    return categories;
  } catch (error) {
    throw new Error('Server error in fetching categories', error as Error);
  }
};

export const getFilterProducts = async (
  { filterParam }: { filterParam: FilterParamType | {} }
  // filter: string|null
) => {
  const branch_id = cookies().get('branch_id');
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
  const branch_id = cookies().get('branch_id');

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
  searchParams?: ProductListingParamsType['searchParams'];
}) => {
  const search = searchParams?.search;
  const categoryParam = { category: categoryParams, keywords: search };
  const sortBy = searchParams?.sortBy;

  const sortObject = sortBy ? convertToSortObject(sortBy as string) : {};

  let testObject = {
    page,
    limit,
    categoryParam,
    sortBy,
  };

  console.log(testObject);

  const my_headers = await setSessionHeader();
  const bid = cookies().get('branch_id');

  let raw = JSON.stringify({
    branch_id: bid?.value,
    filters: categoryParam,
    sort: sortObject,
  });

  try {
    const res = await fetch(
      API_BASE_URL + `/estore/catalog/${page || 1}/${limit || 50}`,
      {
        method: 'POST',
        redirect: 'follow',
        body: raw,
        headers: my_headers,
        next: {
          revalidate: 5, //cache data for 40 second
          tags: ['estore-products'],
        },
        // shallow: true
      }
    );

    const productObject = await res.json();

    if (!productObject || productObject.detail == 'No Items Found') {
      console.log(productObject.detail);
      return productObject.detail;
    }

    return productObject.detail;
  } catch (error) {
    console.error(error);
    throw new Error('Server error in products fetching', error as Error);
  }
};
