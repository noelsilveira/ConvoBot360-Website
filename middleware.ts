import { TOKEN_NAME } from '@/constants/urls';
import { NextResponse, NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  // Get a cookie
  const auth_token = request.cookies.get(TOKEN_NAME)?.value;

  // Get all cookies
  request.cookies.getAll();

  if (auth_token && request.nextUrl.pathname === '/login') {
    return NextResponse.redirect(new URL('/', request.url));
  } else {
    return NextResponse.redirect(new URL('/login', request.url));
  }

  const response = NextResponse.next();
  // Delete a cookie
  response.cookies.delete(TOKEN_NAME);
}

export const config = {
  matcher: '/login',
};
