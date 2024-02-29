'use server';

import { API_BASE_URL } from '@/constants/urls';
import { OrderType } from '@/types/order';
import { setSessionHeader } from '@/app/actions/set-headers';
import { redirect } from 'next/navigation';
import { cookies } from 'next/headers';
import { cleanJsonString } from '@/lib/format';
import { AddToCartObjectType, AddToCartResponseType } from '@/types/products';

export const generatePayload = async (formData: FormData) => {
  const payload = {
    branch_id: formData.get('branch_id'),
    products: [
      {
        product_id: formData.get('product_id'),
        quantity: formData.get('quantity'),
        option_id: formData.get('option_id'),
      },
    ],
  };
  if (payload.branch_id === null) {
    throw new Error('Error with Branch ID');
  }
  return payload;
};

export const addCartHandler = async (formData: FormData) => {
  const payload = await generatePayload(formData);

  try {
    const cartResponse = await getCartResponse(payload);
    // const return_value = await getOrderId(payload);
    if (cartResponse?.status_code === 200) {
      const cartDetails = cartResponse.detail;

      cookies().set({
        name: 'order_id',
        value: cartDetails.order_id,
        httpOnly: true,
        priority: 'high',
        maxAge: 1440,
        secure: true,
        path: '/',
      });

      return cartDetails;
    }
  } catch (error) {
    throw new Error('Error getting cart response');
  }
};

// extraction to make redirect work
export const tryCatchExtractedForOrderId = async (order_id: string) => {
  const myHeaders = await setSessionHeader();

  try {
    const response = await fetch(
      `${API_BASE_URL}/estore/continue/${order_id}`,
      {
        method: 'POST',
        headers: myHeaders,
        redirect: 'follow',
      }
    );
    const response_with_whatsapp_link = await response.json();

    if (response_with_whatsapp_link?.status_code === 200) {
      const whatsapp_link = response_with_whatsapp_link.detail;
      // whatsapp_link ? redirect(whatsapp_link) : redirect(`/checkout/cart`);
      return whatsapp_link;
    } else {
      throw new Error('Failed to create your order');
    }
  } catch (error) {
    console.error(error);
  }
};

export const generateOrderIDLink = async (order_id: string) => {
  const responseLink = await tryCatchExtractedForOrderId(order_id);
  if (responseLink) {
    redirect(responseLink);
  } else {
    redirect('/checkout/cart');
  }
};

const getOrderId = async (payload: Object) => {
  const myHeaders = await setSessionHeader();

  const raw = JSON.stringify(payload);

  try {
    const res = await fetch(API_BASE_URL + `/estore/cart`, {
      method: 'POST',
      headers: myHeaders,
      body: raw,
      redirect: 'follow',
    });
    const resultObject: { detail: OrderType } = await res.json();
    return resultObject;
  } catch (error) {
    console.error('e', error);
  }
};

export const getCartResponse = async (
  payload: AddToCartObjectType | string
) => {
  const myHeaders = await setSessionHeader();

  const raw = JSON.stringify(payload);

  try {
    const res = await fetch(API_BASE_URL + `/estore/cart`, {
      method: 'POST',
      headers: myHeaders,
      body: raw,
      redirect: 'follow',
    });
    const resultObject: AddToCartResponseType = await res.json();
    console.log('getCartResponse: ', resultObject);
    return resultObject;
  } catch (error) {
    console.error('e', error);
  }
};

// addToCartModalAction
export const addToCartModalAction = async (formData: FormData) => {
  const products = formData.getAll('items');
  console.log('Adding these products/options to payload...: ', products);
  const payload = {
    branch_id: formData.get('branch_id'),
    products: products,
  };
  console.log('Adding payload to cart...: ', payload);

  const stringPayload = JSON.stringify(payload);
  const cleanedPayload = cleanJsonString(stringPayload);
  const payloadObject = JSON.parse(cleanedPayload);

  try {
    const cartResponse = await getCartResponse(payloadObject);

    if (cartResponse?.status_code === 200) {
      const cartDetails = cartResponse.detail;

      cookies().set({
        name: 'order_id',
        value: cartDetails.order_id,
        httpOnly: true,
        maxAge: 1440,
        priority: 'high',
        secure: true,
        path: '/',
      });

      return cartDetails;
    } else throw new Error('Error creating your order!');
  } catch (error) {
    throw new Error('Error getting cart response', error as ErrorOptions);
  }
};
