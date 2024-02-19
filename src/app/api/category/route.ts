import { setSessionHeader } from '@/app/actions/set-headers';
import { branch_id } from '@/constants/products';
import { API_BASE_URL } from '@/constants/urls';

export async function GET() {
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

  return Response.json({ categories });
}
