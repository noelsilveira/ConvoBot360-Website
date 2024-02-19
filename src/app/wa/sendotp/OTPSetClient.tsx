'use client';

import React, { useEffect } from 'react';
import {
  AddSessionPayloadType,
  addSessionToAPI,
  setOTPParamsToCookie,
} from './otp-actions';
import { useRouter, useSearchParams } from 'next/navigation';
import { useBranchStore } from '@/store/branchStore';
import { LOGO_BASE_URL } from '@/constants/urls';

const OTPSetClient = () => {
  const router = useRouter();
  const { setBranchData } = useBranchStore();
  const branchParams = useSearchParams();

  const b = branchParams.get('b');
  const c = branchParams.get('c');
  const i = branchParams.get('i');

  const sessionPayload: AddSessionPayloadType = {
    branch_id: b,
    customer_no: c,
    logo_url: `${LOGO_BASE_URL}${i}`,
  };

  useEffect(() => {
    const addSession = async () => {
      const sessionResponse = await addSessionToAPI(sessionPayload);
      if (sessionResponse) {
        setBranchData(sessionResponse.metadata);
        const tokens = await setOTPParamsToCookie(sessionResponse);
        console.log('Server action executed success', tokens);
        router.push('/get-otp');
      } else {
        console.error('Invalid credentials!');
        router.push('/error');
      }
    };

    addSession();
  }, []);
  return <></>;
};

export default OTPSetClient;
