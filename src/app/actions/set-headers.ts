'use server';
import { TOKEN_NAME } from '@/constants/urls';
import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';
import { TokenType } from './auth';
import { authTokenForToSendOTP } from './auth-token';

/**
 * Server Action to set token in server side HTTP cookies
 */
export const setHeaderInCookie = async (data: TokenType) => {
  const today = new Date();
  const now = new Date();
  const expiry_milliseconds = data.expiry * 150;
  const expiry_date = today.setTime(today.getTime() + expiry_milliseconds);
  const expiry = expiry_date.toString();

  cookies().set({
    name: TOKEN_NAME,
    value: data.access_token,
    httpOnly: true,
    secure: true,
    maxAge: data.expiry * 60,
    path: '/',
  });
  cookies().set({
    name: 'token_type',
    value: data.token_type,
    httpOnly: true,
    secure: true,
    path: '/',
  });
};

/**
 *
 * Server Action to set the token for OTP verification (for now static) to be sent to the endpoint with `Authorization` `Bearer ${token.value}`
 * @returns `OTP headers object with data from HTTP cookies`
 */
export const setOTPHeaders = async () => {
  let otpToken = cookies().get('OTP_ACCESS_TOKEN');
  if (!otpToken?.value) {
    // await setFixedTokenFromAPI('OTP_ACCESS_TOKEN', static_otp_token);
    await authTokenForToSendOTP();
    otpToken = cookies().get('OTP_ACCESS_TOKEN');
  }

  const myHeaders = new Headers();
  myHeaders.append('Authorization', `Bearer ${otpToken?.value}`);

  return myHeaders;
};

/**
 *
 * Server Action to set the access_token or session_token for other requests to the endpoint with `Authorization` `Bearer ${token.value}`
 * @returns `headers object with data from HTTP cookies`
 */
export const setSessionHeader = async () => {
  let token = cookies().get(TOKEN_NAME);
  if (!token) {
    redirect('/');
  }

  const myHeaders = new Headers();
  myHeaders.append('Content-Type', 'application/json');
  myHeaders.append('Authorization', `Bearer ${token?.value}`);

  return myHeaders;
};

/**
 *
 * Server Action to set the access_token or session_token for other requests to the endpoint with `Authorization` `Bearer ${token.value}` no `Content-Type` as `application/json` is set to the header tat doesn't want the header to be set on the request.
 * @returns `headers object with data from HTTP cookies`
 */
export const getSessionHeaderWithNoJSON = async () => {
  let token = cookies().get(TOKEN_NAME);
  if (!token) {
    redirect('/');
  }

  const myHeaders = new Headers();
  myHeaders.append('Authorization', `Bearer ${token?.value}`);

  return myHeaders;
};

/**
 *
 * Temporary Server Action solution to set the fixed token for testing purposes
 */
export const setFixedTokenFromAPI = async (
  token_name: string,
  token_value: string
) => {
  cookies().set({
    name: token_name,
    value: token_value,
    httpOnly: true,
    priority: 'high',
    secure: true,
    path: '/',
  });
};
