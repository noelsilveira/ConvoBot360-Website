'use server';

import { API_BASE_URL, TOKEN_NAME, static_merchant_id } from '@/constants/urls';
import { setOTPHeaders } from '../auth/set-headers';
import { setHeaderInCookie } from '../actions/auth';
import { redirect } from 'next/navigation';

export const getOtpHandler = async (state: any, formData: FormData) => {
  'use server';
  const headers = await setOTPHeaders();

  const username = '919820859667';
  const password = formData.get('otp');

  const newData = new FormData();
  newData.append('username', username);
  password && newData.append('password', password);

  const phone_number = 919820859667;

  try {
    const response = await fetch(API_BASE_URL + `/estore/token`, {
      method: 'POST',
      headers,
      body: newData,
      redirect: 'follow',
    });
    const responseData = await response.json();

    if (!response.ok) {
      return { message: `OTP verification failed` };
    } else {
      await setHeaderInCookie(responseData);
      return { message: `OTP verification successful` };
    }
  } catch (error) {
    console.log('Server error!', error);
  }
};
