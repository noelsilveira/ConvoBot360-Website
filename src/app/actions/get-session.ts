'use server';

import { setOTPHeaders } from './set-headers';
import { API_BASE_URL } from '@/constants/urls';
import { AddSessionPayloadResponseType } from '@/types/auth';
import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';
import { setOTPParamsToCookie } from './otp-actions';

export const getSessionFromAPI = async (session_id: string) => {
  // console.log('Session from client url: ', session_id);
  const myHeaders = await setOTPHeaders();
  const raw = '';
  const requestOptions: RequestInit | undefined = {
    method: 'POST',
    headers: myHeaders,
    body: raw,
    redirect: 'follow',
    next: {
      tags: ['session'],
    },
  };

  try {
    const response = await fetch(
      `${API_BASE_URL}/estore/get-session/${session_id}`,
      requestOptions
    );

    const responseData: AddSessionPayloadResponseType = await response.json();
    //   if(responseData.status_code ===200) for now it's returning 404 #FIXME
    // console.log('Session response: ', responseData);
    if (responseData) {
      await setOTPParamsToCookie(responseData.detail);
    }

    const noSession = responseData.detail as unknown;
    if (noSession === 'Session not found.') {
      console.error(
        'If this error is showing then need to change the static session_id in URL params',
        responseData.detail,
        session_id
      );
    }
    console.log(responseData.detail);

    return responseData.detail;
  } catch (error) {
    console.error(error);
    throw new Error('Server error!', error as Error);
  }
};

// export const updateCartFromSessionAPI = async () => {
//   const session_id = cookies().get('session_id');
//   if (!session_id?.value) {
//     console.log('No session id found');
//     redirect('/');
//   }
//   try {
//     const sessionResponse = await getSessionFromAPI(session_id.value);
//     console.log('Cart count response: ', sessionResponse);
//     sessionResponse.metadata.cart_count &&
//       cookies().set({
//         name: 'cart_count',
//         value: sessionResponse.metadata.cart_count,
//         httpOnly: true,
//         priority: 'high',
//         secure: true,
//         path: '/',
//       });
//     if (!sessionResponse.metadata) {
//       return null;
//     }
//     return sessionResponse;
//   } catch (error) {
//     console.error('Unable to update cart count');
//     throw new Error('Unable to update cart or Server down', error as Error);
//   }
// };
