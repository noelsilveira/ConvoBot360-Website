'use server';

import { API_BASE_URL, TOKEN_NAME } from '@/constants/urls';

import { cookies } from 'next/headers';

// import { Checking } from '@/components/layout/TopBar';


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

  let date = new Date().toString();
  const d = new Date(date);
  const expire_date = addSeconds(d, data.expiry).toString();

  const expiry_time = new Date(expire_date).getTime()

  cookies().set({
    name: TOKEN_NAME,
    value: data.access_token,
    httpOnly: true,
    secure: true,
    path: '/',
  });
  cookies().set({
    name: 'expiry',
    value: expiry_time.toString(),
    // value: data.expiry.toString(),
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

export async function handleLogout() {
  cookies().delete(TOKEN_NAME);
  cookies().delete('expiry');
  cookies().delete('token_type');
  // const status = Checking()
}

export async function accessTokenChecker() {
  const access_token = cookies().get(TOKEN_NAME);
  if (
    !access_token ||
    access_token === undefined ||
    access_token.toString() === '`' ||
    access_token.toString() === 'undefined'
  ) {
    return false;
  }
  return true
  // const now = 100;
  // const expiry = cookies().get('expiry');
  // return expiry ? now < Number(expiry.value) : false;
}



function addSeconds(date: Date, seconds: number) {
  date.setSeconds(date.getSeconds() + seconds);
  return date;
}