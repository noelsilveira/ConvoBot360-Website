import { TOKEN_NAME } from '@/constants/urls';
import { NextResponse, NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const auth_token = request.cookies.get(TOKEN_NAME)?.value;

  // If already authenticated, redirect away from /login to home
  if (auth_token && request.nextUrl.pathname === '/login') {
    return NextResponse.redirect(new URL('/', request.url));
  }

  // Otherwise, let the request proceed normally
  return NextResponse.next();
}

export const config = {
  matcher: '/login',
};
