'use server';

import { API_BASE_URL } from '@/constants/urls';
import { cookies } from 'next/headers';

export type AuthTokenOTPResponseType = {
  access_token: string;
  token_type: string;
  expiry: number;
};

/**
 * Server Action to fetch access token from backend api and store the OTP token in server side HTTP cookies
 * @endpoint `${API_BASE_URL}/users/token`
 * @param username - from `.env`
 * @param password - from `.env`
 */
export const authTokenForToSendOTP = async () => {
  const username = process.env.AUTH_USERNAME;
  const password = process.env.AUTH_PASSWORD;
  const formData = new FormData();

  if (username && password) {
    formData.append('username', username);
    formData.append('password', password);
  } else {
    return Response.json({ status: 404, message: 'No username or password!' });
  }

  const requestOptions: RequestInit | undefined = {
    method: 'POST',
    body: formData,
    redirect: 'follow',
  };

  const otp_access_token = cookies().get('OTP_ACCESS_TOKEN');
  if (otp_access_token?.value) {
    return otp_access_token;
  }

  try {
    const response = await fetch(`${API_BASE_URL}/users/token`, requestOptions);
    const tokenObject: AuthTokenOTPResponseType = await response.json();

    console.log(
      'OTP token credential verification success. Storing response in cookies.',
      tokenObject
    );

    await setAuthTokenOTPInCookies(tokenObject);

    console.log(
      "OTP access token set in cookies success. You'll be able to access to server rendered pages using cookies().get('token_name')"
    );
    return tokenObject;
  } catch (error) {
    throw new Error('Server error!', error as Error);
  }
};

/**
 * Server Action to store OTP token in server side HTTP cookies
 */
export const setAuthTokenOTPInCookies = async (
  data: AuthTokenOTPResponseType
) => {
  cookies().set({
    name: 'OTP_ACCESS_TOKEN',
    value: data.access_token,
    httpOnly: true,
    secure: true,
    maxAge: data.expiry * 6,
    path: '/',
  });
};
