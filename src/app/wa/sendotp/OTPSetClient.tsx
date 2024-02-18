'use client';

import React, { useEffect } from 'react';
import {
  EStoreLandingOTPParamsType,
  setOTPParamsToCookie,
} from './otp-actions';
import { useRouter } from 'next/navigation';
import { useBranchStore } from '@/store/branchStore';

const OTPSetClient = (
  searchParams: EStoreLandingOTPParamsType['searchParams']
) => {
  const router = useRouter();
  const { setBranchId, setPhone, setImage } = useBranchStore();
  useEffect(() => {
    const updateViews = async () => {
      const tokens = await setOTPParamsToCookie(searchParams);
    };
    setBranchId(searchParams.b);
    setPhone(searchParams.c);
    setImage(searchParams.i);
    updateViews();

    router.push('/get-otp');
  }, []);
  return <></>;
};

export default OTPSetClient;
