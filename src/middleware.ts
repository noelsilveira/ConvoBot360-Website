import { NextRequest, NextResponse } from 'next/server';

import { TOKEN_NAME } from '@/constants/urls';
import { CryptoAPIRoute } from './app/api/crypto/route';

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
  response.cookies.delete('expiry');
  response.cookies.delete('token_type');

  return response;
};
