'use server';

import { API_BASE_URL, TOKEN_NAME } from '@/constants/urls';
import { cookies } from 'next/headers';
import { setHeaderInCookie } from './set-headers';

export type TokenType = {
  access_token: string;
  expiry: number;
  token_type: string;
};

/**
 * Server Action to handle sign in using FormData values
 * from the form action and set cookies in the http cookies server side
 * Calls the @function setHeaderInCookie
 */
export async function handleSignInForm(formData: FormData) {
  const response = await fetch(`${API_BASE_URL}/estore/token`, {
    method: 'POST',
    // credential,
    body: formData,
    redirect: 'follow',
    next: { tags: ['token'] },
  });

  const data: TokenType = await response.json();

  if (!data) {
    return 'No data from backend';
  }

  await setHeaderInCookie(data);
}

/**
 * Server Action to handle logout by deleting all the cookies
 * Calls the @function accessTokenChecker
 */
export async function handleLogout() {
  cookies().delete(TOKEN_NAME);
  cookies().delete('expiry');
  cookies().delete('token_type');
  const logoutStatus = await accessTokenChecker();
  return !logoutStatus;
}

/**
 * Server Action to check the access_token from the http cookies
 */
export async function accessTokenChecker() {
  const access_token = cookies().get(TOKEN_NAME);
  if (
    !access_token ||
    access_token === undefined ||
    access_token.toString() === '' ||
    access_token.toString() === 'undefined'
  ) {
    return false;
  }
  return true;
}

/**
 * Server Action to add seconds to date @unused
 */
export async function addSeconds(date: Date, seconds: number) {
  date.setSeconds(date.getSeconds() + seconds);
  return date;
}
