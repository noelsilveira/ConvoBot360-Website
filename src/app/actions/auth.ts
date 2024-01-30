'use server';
import { cookies } from 'next/headers';
import { API_BASE_URL, TOKEN_NAME } from '@/constants/urls';

export type TokenType = {
  access_token: string;
  expiry: number;
  token_type: string;
};

export async function handleSignInForm(formData: FormData) {
  const response = await fetch(`${API_BASE_URL}/estore/token`, {
    method: 'POST',
    // credential,
    body: formData,
    redirect: 'follow',
  });

  const data: TokenType = await response.json();

  if (!data) {
    return 'No data from backend';
  }
  cookies().set({
    name: TOKEN_NAME,
    value: data.access_token,
    httpOnly: true,
    secure: true,
    path: '/',
  });
  cookies().set({
    name: 'expiry',
    value: data.expiry.toString(),
    httpOnly: true,
    secure: true,
    path: '/',
  });
  cookies().set({
    name: 'token_type',
    value: data.token_type,
    httpOnly: true,
    secure: true,
    path: '/',
  });
}
