import Image from 'next/image';
import React, { Suspense } from 'react';
import OTPSetClient from '../OTPSetClient';
import VerificationLoading from '@/components/ui/VerificationLoading';

export type StatusType = boolean | '';

const EStoreLandingOTPPage = async () => {
  return (
    <>
      <Suspense fallback={<div>Verifying...</div>}>
        <OTPSetClient />
      </Suspense>

      {/* <TestEncrypt /> */}
      <div className='flex min-h-svh flex-1 flex-col justify-start px-6 py-12 lg:px-8'>
        <div className='sm:mx-auto sm:w-full sm:max-w-sm'>
          <Image
            className='mx-auto h-16 w-auto'
            src={'/cb360-logo.svg'}
            alt='Convobot360 logo'
            height={60}
            width={200}
          />
        </div>

        <div className='mt-6 sm:mx-auto sm:w-full sm:max-w-2xl'>
          <div className='relative flex flex-col justify-start overflow-hidden py-12'>
            <div className='relative mx-auto w-full max-w-2xl rounded-2xl bg-white px-6 pb-9 pt-4'>
              <div className='mx-auto flex w-full max-w-2xl flex-col justify-start space-y-16'>
                <div className='flex flex-col items-center justify-start space-y-2 text-center'>
                  {/* <div className='text-3xl font-semibold'>
                    <p>Verification</p>
                  </div> */}
                  <div className='flex max-w-xs flex-col gap-y-6 text-center text-sm font-medium text-gray-400'>
                    <VerificationLoading />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default EStoreLandingOTPPage;
