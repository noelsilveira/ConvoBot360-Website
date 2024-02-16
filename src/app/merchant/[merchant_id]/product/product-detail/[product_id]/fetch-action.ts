'use server';

import { API_BASE_URL } from '@/constants/urls';
import { OrderPayloadType } from '@/types/order';
import { redirect } from 'next/navigation';
import { setSessionHeader } from '@/app/auth/set-headers';

export const addCartHandler = async (prevState: any, formData: FormData) => {
  console.log('new: ', formData);
  const headers = await setSessionHeader();
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

  let value = 'failed';
  if (return_value != 'failed') {
    const link_res = await fetch(
      `${API_BASE_URL}/estore/continue/${return_value}`,
      {
        method: 'POST',
        headers: headers,
        redirect: 'follow',
      }
    )
      .then((response) => response.text())
      .then((result) => {
        const result_obj = JSON.parse(result);
        value = result_obj.detail.toString();
      })
      .catch((error) => console.error(error));
      console.log('f ', value);
  

    redirect(`${value}`);
    // return { message: value, link: value };
  } else {
    return { message: value, link: value };
  }
};

const getOrderId = async (payload: Object) => {


  const myHeaders = await setSessionHeader();

  const raw = JSON.stringify(payload);
  let a = 'failed';

  const res = await fetch(API_BASE_URL + `/estore/cart`, {
    method: 'POST',
    headers: myHeaders,
    body: raw,
    redirect: 'follow',
  })
    .then((response) => response.text())
    .then((result) => {
     
      const result_obj = JSON.parse(result);
    
      a = result_obj.detail;
    })
    .catch((error) => {
      console.error('e', error);
    });
  // console.log('a',a);
  return a;
};
