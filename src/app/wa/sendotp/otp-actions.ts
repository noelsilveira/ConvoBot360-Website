'use server';

import { setOTPHeaders } from '@/app/auth/set-headers';
import { API_BASE_URL } from '@/constants/urls';
import { cookies } from 'next/headers';

export type EStoreLandingOTPParamsType = {
  // Previous version
  c: string | null;
  b: string | null;
  i: string | null;
};

export type AddSessionPayloadType = {
  customer_no: string | null;
  branch_id: string | null;
  logo_url: string | null;
};

export type AddSessionPayloadResponseType = {
  status_code: number;
  detail: {
    session_id: string;
    metadata: AddSessionPayloadType;
    created_by: string;
    created_at: string;
  };
  headers: null | string;
};

const BRANCH_ID_NAME = 'branch_id';
const PHONE_NAME = 'phone';

export const setOTPParamsToCookie = async (
  data: AddSessionPayloadResponseType['detail']
) => {
  try {
    if (data.session_id) {
      cookies().set({
        name: 'session_id',
        value: data.session_id,
        httpOnly: true,
        secure: true,
        path: '/',
      });
    }
    if (
      data.metadata.branch_id &&
      data.metadata.customer_no &&
      data.metadata.logo_url
    ) {
      cookies().set({
        name: 'branch_id',
        value: data.metadata.branch_id,
        httpOnly: true,
        secure: true,
        path: '/',
      });
      cookies().set({
        name: 'customer_no',
        value: data.metadata.customer_no,
        httpOnly: true,
        secure: true,
        path: '/',
      });
      cookies().set({
        name: 'logo_url',
        value: data.metadata.logo_url,
        httpOnly: true,
        secure: true,
        path: '/',
      });
    }
    return {
      status: 200,
      message: 'Successfully set all cookies',
      session_id: data.session_id,
    };
  } catch (error) {
    throw new Error('Unable to set branch cookies');
  }
};

// Add session to backend
export const addSessionToAPI = async (data: AddSessionPayloadType) => {
  const myOTPheaders = await setOTPHeaders();

  const raw = JSON.stringify(data);
  const requestOptions: RequestInit | undefined = {
    method: 'POST',
    headers: myOTPheaders,
    body: raw,
    redirect: 'follow',
  };

  try {
    const response = await fetch(
      `${API_BASE_URL}/estore/add-session`,
      requestOptions
    );
    const sessionData: AddSessionPayloadResponseType = await response.json();
    if (sessionData.status_code == 200) {
      return sessionData.detail;
    } else {
      throw new Error('Unable to get session, check OTP headers');
      return;
    }
  } catch (error) {
    throw new Error('Session server error!', error as Error);
  }
};
