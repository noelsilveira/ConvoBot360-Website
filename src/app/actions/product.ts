import { FormEvent } from 'react';
import { branch_id } from '@/constants/products';
import { revalidateTag } from 'next/cache';

export const productFilterUpdate = async ({
  filter,
}: {
  filter: string | null;
}) => {
  // e.preventDefault()
  // const data = formData.get('filter')
  // console.log('filter_option: ', filter);
  const filters = { filter };
  // const rawFilter = JSON.stringify({
  //     "branch_id": branch_id,
  //     "filters": filters,
  //     "sort": {}
  //   });
  //   revalidateTag('products')
  return filter;
};
