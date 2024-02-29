import { NextRequest, NextResponse } from 'next/server';

import { TOKEN_NAME } from '@/constants/urls';
import { cookies } from 'next/headers';
import { getSessionFromAPI } from './app/actions/get-session';
import { setOTPParamsToCookie } from './app/actions/otp-actions';
import { redirect } from 'next/navigation';

export async function middleware(request: NextRequest) {
  // CryptoAPIRoute(request);

  let res;
  if (!request.cookies.has(TOKEN_NAME)) {
    res = deleteToken();
    NextResponse.redirect(new URL('/', request.url));
  }
  const expiry = Number(request.cookies.get('expiry')?.value);
  const expiry_created = Number(request.cookies.get('expiry_created')?.value);

  if (expiry > expiry_created) {
    // TODO
    // res = deleteToken();
  }

  return res;
}

const deleteToken = async () => {
  const response = NextResponse.next();
  response.cookies.delete(TOKEN_NAME);
  response.cookies.delete('OTP_TOKEN');
  response.cookies.delete('order_id');
  response.cookies.delete('session_id');
  response.cookies.delete('merchant_no');
  response.cookies.delete('customer_no');
  response.cookies.delete('logo_url');
  // response.cookies.delete('expiry');
  // response.cookies.delete('token_type');

  return response;
};
