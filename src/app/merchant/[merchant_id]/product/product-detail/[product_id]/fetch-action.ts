'use server';

import { API_BASE_URL } from '@/constants/urls';
import { OrderType } from '@/types/order';
import {
  getSessionHeaderWithNoJSON,
  setSessionHeader,
} from '@/app/auth/set-headers';
import { redirect } from 'next/navigation';

export const addCartHandler = async (formData: FormData) => {
  console.log('new: ', formData);
  const myHeaders = await getSessionHeaderWithNoJSON();
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
  const return_value = await getOrderId(payload);
  const order_id = return_value?.detail.order_id;

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
      redirect(`/`);
    } else {
      throw new Error('Failed to create your order');
    }
  } catch (error) {
    console.error(error);
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
