'use client';

import { useFormState, useFormStatus } from 'react-dom';

import React, { useState } from 'react';
import OTPInput from 'react-otp-input';
import { cn } from '@/lib/utils';
import toast, { Toaster } from 'react-hot-toast';
import { getOtpHandler } from '../../actions/otp-actions';

const initialSate = {
  message: '',
};
const GetOtpForm = () => {
  const { pending } = useFormStatus();
  const [state, formAction] = useFormState(getOtpHandler, initialSate);
  const [otp, setOtp] = useState<string>();

  const handleChange = (code: string) => {
    setOtp(code);
  };
  const clearOtp = async () => {
    setOtp('');
  };

  const handlePaste: React.ClipboardEventHandler = (event) => {
    const data = event.clipboardData.getData('text');
  };

  return (
    <>
      <form
        action={async (formData) => {
          await Promise.all([formAction(formData), clearOtp()]);
        }}
        className='space-y-6'
      >
        <div>
          <div className='mx-auto flex flex-row items-center justify-start'>
            <div
              className={cn(
                'mx-auto',
                pending ? 'animate-pulse opacity-50' : ''
              )}
              aria-disabled={pending}
            >
              <input type='hidden' id='otp' name='otp' defaultValue={otp} />
              <OTPInput
                value={otp}
                onChange={handleChange}
                onPaste={handlePaste}
                renderSeparator={<span className='p-1'></span>}
                numInputs={6}
                shouldAutoFocus
                skipDefaultStyles
                inputType='number'
                inputStyle='flex accent-blue-600 h-12 w-12 md:h-16 md:w-16 flex-col items-center justify-center rounded-xl appearance-none border border-gray-200 bg-white px-4 text-center text-lg font-semibold text-black outline-none ring-blue-500 focus:bg-gray-50 focus:ring-1'
                renderInput={(props) => (
                  <input
                    pattern='[0-9]*'
                    onSubmit={() => setOtp('')}
                    {...props}
                  />
                )}
              />
            </div>
          </div>
        </div>

        <div className='mx-auto max-w-md'>
          <SubmitButton />
        </div>
        {/* <p>{state?.message}</p> */}
      </form>
    </>
  );
};

export default GetOtpForm;

const SubmitButton = () => {
  const { pending } = useFormStatus();
  return (
    <button
      type='submit'
      aria-disabled={pending}
      className={cn(
        'flex w-full justify-center rounded-xl bg-blue-600 px-8 py-4 text-base font-semibold leading-6 text-white shadow-sm duration-150 ease-out hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600',
        pending ? 'cursor-not-allowed opacity-60' : 'animate-none'
      )}
    >
      {pending ? 'Submitting...' : 'Verify OTP'}
    </button>
  );
};
