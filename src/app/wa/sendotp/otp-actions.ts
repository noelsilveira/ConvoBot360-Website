'use server';

import { cookies } from 'next/headers';

export type EStoreLandingOTPParamsType = {
  params: string;
  searchParams: {
    c: string;
    b: string;
    i: string;
  };
};

const BRANCH_ID_NAME = 'branch_id';
const PHONE_NAME = 'phone';
export const setOTPParamsToCookie = async (
  data: EStoreLandingOTPParamsType['searchParams']
) => {
  cookies().set({
    name: BRANCH_ID_NAME,
    value: data.b,
    httpOnly: true,
    secure: true,
    path: '/',
  });
  cookies().set({
    name: PHONE_NAME,
    value: data.c,
    // value: data.expiry.toString(),
    httpOnly: true,
    secure: true,
    path: '/',
  });
};
