'use server';
import { setSessionHeader } from '@/app/actions/set-headers';

import { API_BASE_URL } from '@/constants/urls';
import { revalidatePath, revalidateTag } from 'next/cache';
import { cookies } from 'next/headers';

export const getCartItems = async () => {
  const myHeaders = await setSessionHeader();
  const order_id = cookies().get('order_id')?.value;

  if (!order_id) {
    return null;
  }

  try {
    const response = await fetch(
      `${API_BASE_URL}/estore/view-cart/${order_id}`,
      {
        method: 'POST',
        headers: myHeaders,
        redirect: 'follow',
        next: { tags: ['cart_items'], revalidate: 0 },
      }
    );

    if (response.ok) {
      const cartResponse = await response.json();

      if (cartResponse?.status_code === 200) {
        const cartDetails = cartResponse;

        return cartDetails;
      } else {
        console.error('Failed to fetch cart data');
        return cartResponse as string;
      }
    }
  } catch (error) {
    console.error(error);
    throw new Error('Failed to fetch cart');
  }
};

export const updateCart = async ({
  product_id,
  quantity,
  option_id,
}: {
  product_id: string;
  quantity: number;
  option_id: string;
}) => {
  const myHeaders = await setSessionHeader();

  const branch_id = cookies().get('branch_id')?.value;

  if (!branch_id) {
    return null;
  }

  const raw = JSON.stringify({
    branch_id: branch_id,
    products: [
      { product_id: product_id, quantity: quantity, option_id: option_id },
    ],
  });
  try {
    const response = await fetch(`${API_BASE_URL}/estore/cart`, {
      method: 'POST',
      headers: myHeaders,
      body: raw,
      redirect: 'follow',
      next: { tags: ['update_cart_items'], revalidate: 0 },
    });

    if (response.ok) {
      revalidatePath('/checkout/cart');
      revalidateTag('cart_items');
      const cartResponse = await response.json();

      if (cartResponse?.status_code === 200) {
        const cartDetails = cartResponse.detail;

        return cartDetails;
      }
      if (cartResponse?.status_code === 404) {
        cookies().delete('order_id');
        return null;
      } else console.error('Failed to fetch cart data');
    }
  } catch (error) {
    console.error(error);
    throw new Error('Failed to fetch cart');
  }
};
