'use client';

import React, { useEffect } from 'react';
import {
  EStoreLandingOTPParamsType,
  setOTPParamsToCookie,
} from './otp-actions';

const OTPSetClient = (
  searchParams: EStoreLandingOTPParamsType['searchParams']
) => {
  useEffect(() => {
    const updateViews = async () => {
      const tokens = await setOTPParamsToCookie(searchParams);
    };

    updateViews();
  }, []);
  return <></>;
};

export default OTPSetClient;
