'use client';

import React, { useEffect } from 'react';
import {
  EStoreLandingOTPParamsType,
  setOTPParamsToCookie,
} from './otp-actions';
import { useRouter } from 'next/navigation';

const OTPSetClient = (
  searchParams: EStoreLandingOTPParamsType['searchParams']
) => {
  const router = useRouter();
  useEffect(() => {
    const updateViews = async () => {
      const tokens = await setOTPParamsToCookie(searchParams);
    };

    updateViews();

    router.push('/get-otp');
  }, []);
  return <></>;
};

export default OTPSetClient;
