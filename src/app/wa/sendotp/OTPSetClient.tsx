'use client';

import React, { useEffect } from 'react';
import {
  addSessionToAPI,
  setOTPParamsToCookie,
} from '@/app/actions/otp-actions';
import { useParams, useRouter, useSearchParams } from 'next/navigation';
import { useBranchStore } from '@/store/branchStore';
import { LOGO_BASE_URL } from '@/constants/urls';
import { AddSessionPayloadType } from '@/types/auth';
import { getSessionFromAPI } from '@/app/actions/get-session';
import { authTokenForToSendOTP } from '@/app/actions/auth-token';
import { urlToStringParser } from '@/lib/format';

const OTPSetClient = () => {
  const router = useRouter();
  const { setBranchData } = useBranchStore();
  const branchParams = useSearchParams();
  const { session_id } = useParams();

  const b = branchParams.get('b');
  const c = branchParams.get('c');
  const i = branchParams.get('i');
  const parsed_logo_url = urlToStringParser(i as string);

  // this is not used
  const sessionPayload: Partial<AddSessionPayloadType> = {
    branch_id: b,
    customer_no: c,
    logo_url: parsed_logo_url,
  };

  useEffect(() => {
    const getSession = async () => {
      !session_id && router.push('/');
      await authTokenForToSendOTP();

      // get the OTP access token using .env credentials
      // console.log(session_id);
      const sessionResponse = await getSessionFromAPI(
        JSON.parse(JSON.stringify(session_id))
      );

      if (sessionResponse) {
        setBranchData(sessionResponse.metadata);
        await setOTPParamsToCookie(sessionResponse);

        router.push('/get-otp');
      } else {
        console.error('Invalid credentials!');
        router.push('/error');
      }
    };

    getSession();
  }, []);
  return <></>;
};

export default OTPSetClient;
