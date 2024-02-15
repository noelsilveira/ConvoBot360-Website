'use server';

import { setOTPHeaders } from '@/app/auth/set-headers';

import { API_BASE_URL } from '@/constants/urls';
import { OrderPayloadType } from '@/types/order';
import { redirect } from 'next/navigation';

export const addCartHandler = async (prevState: any, formData: FormData) => {
  const headers = await setOTPHeaders();
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
    redirect(`${value}`);
    return { message: value, link: value };
  } else {
    return { message: value, link: value };
  }
};

const getOrderId = async (payload: Object) => {
  console.log(payload);

  // const headers = await setOTPHeaders();
  const myHeaders = new Headers();
  myHeaders.append('Content-Type', 'application/json');
  myHeaders.append(
    'Authorization',
    'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI5MTk4MjA4NTk2NjciLCJleHAiOjE3MDgwMzQyNzN9.BmGK0rCkGp4fkRvZBuWgE09H-VGDq7fqiz9E1zuOf3s'
  );

  const raw = JSON.stringify({
    branch_id: 'b3cac885-ba05-4d0c-8a61-ac77da18a84d',
    products: [
      {
        product_id: '0b84623d-e9df-4a7f-8daf-9e3aa2c25ae5',
        quantity: 1,
        option_id: 'df605cf1-aff5-4905-ba2d-56137d60e235',
      },
    ],
  });
  let a = 'failed';

  const res = await fetch(API_BASE_URL + `/estore/cart`, {
    method: 'POST',
    headers: myHeaders,
    body: raw,
    redirect: 'follow',
  })
    .then((response) => response.text())
    .then((result) => {
      // console.log('r', JSON.parse(result) )
      const result_obj = JSON.parse(result);
      console.log('r_o', result_obj.detail);
      a = result_obj.detail;
    })
    .catch((error) => {
      console.error('e', error);
    });
  // console.log('a',a);
  return a;
};
