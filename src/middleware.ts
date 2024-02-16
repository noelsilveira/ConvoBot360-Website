import { NextRequest, NextResponse } from 'next/server';

import { TOKEN_NAME } from '@/constants/urls';
import { CryptoAPIRoute } from './app/api/crypto/route';

export async function middleware(request: NextRequest) {
  CryptoAPIRoute(request);

  let res;
  if (!request.cookies.has(TOKEN_NAME)) {
    res = deleteToken();
  }
  const expiry = request.cookies.get('expiry');
  const expiry_date = Number(expiry?.value); // in seconds

  let date = new Date().toString();
  const current_date = new Date(date).getTime(); // in Seconds

  if (current_date > expiry_date) {
    res = deleteToken();
  }

  return res;
}

const deleteToken = async () => {
  const response = NextResponse.next();
  response.cookies.delete(TOKEN_NAME);
  response.cookies.delete('expiry');
  response.cookies.delete('token_type');

  return response;
};
