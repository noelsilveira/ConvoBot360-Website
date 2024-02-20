'use server';

import { setOTPHeaders } from './set-headers';
import { API_BASE_URL } from '@/constants/urls';
import { AddSessionPayloadResponseType } from '@/types/auth';

export const getSessionFromAPI = async (session_id: string) => {
  console.log('Session from client url: ', session_id);
  const myHeaders = await setOTPHeaders();
  const raw = '';
  const requestOptions: RequestInit | undefined = {
    method: 'POST',
    headers: myHeaders,
    body: raw,
    redirect: 'follow',
  };

  try {
    const response = await fetch(
      `${API_BASE_URL}/estore/get-session/${session_id}`,
      requestOptions
    );

    const responseData: AddSessionPayloadResponseType = await response.json();
    //   if(responseData.status_code ===200) for now it's returning 404 #FIXME
    console.log('Session response: ', responseData);

    const noSession = responseData.detail as unknown;
    if (noSession === 'Session not found.') {
      console.error(
        'If this error is showing then need to change the static session_id in URL params',
        responseData.detail,
        session_id
      );
    }

    return responseData.detail;
  } catch (error) {
    console.error(error);
    throw new Error('Server error!', error as Error);
  }
};
