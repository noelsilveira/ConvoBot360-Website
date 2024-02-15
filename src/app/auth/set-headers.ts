import { cookies, headers } from 'next/headers';

export const setHeaders = async () => {
  'use server';
  const cookieStore = cookies();
  const token = cookieStore.get('access_token');

  var myHeaders = new Headers();
  myHeaders.append('Content-Type', 'application/json');
  myHeaders.append('Authorization', `Bearer ${token?.value}`);
  // console.log('headers: ',myHeaders);
  return myHeaders;
};
