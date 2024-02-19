'use server';

import { cookies, headers } from 'next/headers';

export const setHeaders = async () => {
  const cookieStore = cookies();
  const token = cookieStore.get('access_token');

  var myHeaders = new Headers();
  myHeaders.append('Content-Type', 'application/json');
  myHeaders.append('Authorization', `Bearer ${token?.value}`);
  return myHeaders;
};

export const setOTPHeaders = async () => {
  const token =
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJzaWRkaGVzaCIsImV4cCI6MTcwNzk5NzU2MH0.C7tR6bHqEVw4g-vnQEzy1a5z3vXHMq_QU8_viJ_3-AU';

  var myHeaders = new Headers();
  myHeaders.append('Content-Type', 'application/json');
  myHeaders.append('Authorization', `Bearer ${token}`);

  return myHeaders;
};
