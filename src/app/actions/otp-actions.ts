'use server';

import { API_BASE_URL } from '@/constants/urls';
import { setHeaderInCookie, setOTPHeaders } from './set-headers';
import { cookies } from 'next/headers';
import {
  AddSessionPayloadResponseType,
  AddSessionPayloadType,
} from '@/types/auth';
import { decodeUrlToString, urlToStringParser } from '@/lib/format';
/**
 *
 * Process the OTP from the OTP form in get-otp page and returns the verification status of the OTP in the process sets the access-token in the HTTP headers
 * @endpoint `${API_BASE_URL}/estore/token`
 * @param state
 * @param formData
 * @returns `{ message: "OTP verification status" }`
 */
export const getOtpHandler = async (state: any, formData: FormData) => {
  const myOTPheaders = await setOTPHeaders();

  // const username = '919820859667';
  const username = cookies().get('customer_no');
  const password = formData.get('otp');
  const newData = new FormData();

  if (!username) {
    return Response.json({ status: 404, message: 'No user data found' });
  } else {
    newData.append('username', username.value);
    password && newData.append('password', password);
  }

  try {
    const response = await fetch(API_BASE_URL + `/estore/token`, {
      method: 'POST',
      headers: myOTPheaders,
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

export const setOTPParamsToCookie = async (
  data: AddSessionPayloadResponseType['detail']
) => {
  try {
    // session id
    data.session_id &&
      cookies().set({
        name: 'session_id',
        value: data.session_id,
        httpOnly: true,
        maxAge: data.metadata.expiry,
        secure: true,
        path: '/',
      });
    // Access token
    data.metadata.access_token &&
      cookies().set({
        name: 'access_token',
        value: data.metadata.access_token,
        httpOnly: true,
        maxAge: data.metadata.expiry,
        secure: true,
        path: '/',
      });

    // branch id
    data.metadata.branch_id &&
      cookies().set({
        name: 'branch_id',
        value: data.metadata.branch_id,
        httpOnly: true,
        maxAge: data.metadata.expiry,
        secure: true,
        path: '/',
      });

    // customer number
    data.metadata.customer_no &&
      cookies().set({
        name: 'customer_no',
        value: data.metadata.customer_no,
        httpOnly: true,
        secure: true,
        maxAge: data.metadata.expiry,
        path: '/',
      });

    // logo url
    data.metadata.logo_url &&
      cookies().set({
        name: 'logo_url',
        value: data.metadata.logo_url,
        httpOnly: true,
        secure: true,
        maxAge: data.metadata.expiry,
        path: '/',
      });

    // order_id
    data.metadata.order_id &&
      cookies().set({
        name: 'order_id',
        value: data.metadata.order_id,
        httpOnly: true,
        secure: true,
        maxAge: data.metadata.expiry,
        path: '/',
      });

    // merchant no
    data.metadata.merchant_no &&
      cookies().set({
        name: 'merchant_no',
        value: data.metadata.merchant_no,
        httpOnly: true,
        maxAge: data.metadata.expiry,
        secure: true,
        path: '/',
      });

    return {
      status: 200,
      message: 'Successfully set all cookies',
      session_id: data.session_id,
    };
  } catch (error) {
    throw new Error('Unable to set branch cookies');
  }
};

// Add session to backend
export const addSessionToAPI = async (data: AddSessionPayloadType) => {
  const myOTPheaders = await setOTPHeaders();

  const raw = JSON.stringify(data);
  const requestOptions: RequestInit | undefined = {
    method: 'POST',
    headers: myOTPheaders,
    body: raw,
    redirect: 'follow',
  };

  try {
    const response = await fetch(
      `${API_BASE_URL}/estore/add-session`,
      requestOptions
    );
    const sessionData: AddSessionPayloadResponseType = await response.json();
    if (sessionData.status_code == 200) {
      return sessionData.detail;
    } else {
      throw new Error('Unable to get session, check OTP headers');
    }
  } catch (error) {
    throw new Error('Session server error!', error as Error);
  }
};
