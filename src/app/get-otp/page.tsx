import Image from 'next/image';
import GetOtpForm from './getotp-form';
import React from 'react';
import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';
import { TOKEN_NAME, static_merchant_id } from '@/constants/urls';

export type StatusType = boolean | '';
const GetOtpPage = async () => {
  const access_token = cookies().get(TOKEN_NAME);
  if (access_token) {
    redirect(`/merchant/${static_merchant_id}/estore-products/`);
  }
  return (
    <>
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
                  <div className='text-3xl font-semibold'>
                    <p>OTP Verification</p>
                  </div>
                  <div className='flex flex-row text-sm font-medium text-gray-400'>
                    <p>We have sent a code to your phone 91xxxxxxxx67</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <GetOtpForm />
          <p className='mt-10 text-center text-sm text-gray-500'>
            Didn&apos;t receive code?{' '}
            <a
              href='#'
              className='font-semibold leading-6 text-blue-600 hover:text-blue-500'
            >
              Resend code
            </a>
          </p>
        </div>
      </div>
    </>
  );
};

export default GetOtpPage;
