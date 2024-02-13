import { NextRequest, NextResponse } from 'next/server';

import { TOKEN_NAME } from '@/constants/urls';

export function middleware (request: NextRequest) {

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


// const setRequestHeaders=async(request: NextRequest)=>{
//   const response = NextResponse.next();
//   const token =response.cookies.get(TOKEN_NAME);
//   const requestHeaders = new Headers(request.headers)

//   requestHeaders.set('Authorization', `Bearer ${token?.value}`)
//   requestHeaders.set('Content-Type', 'application/json')

//   return NextResponse.next({
//     request: {
//       headers: requestHeaders,
//     },
//   })
// }
