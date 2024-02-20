'use client';
import React, { useState } from 'react';
import Input from 'react-otp-input';

const OTPInput = () => {
  const [otp, setOtp] = useState<string>();

  const handleChange = (code: string) => {
    setOtp(code);
  };
  const handlePaste: React.ClipboardEventHandler = (event) => {
    const data = event.clipboardData.getData('text');
    // console.log(data);
  };
  return (
    <div className='mx-auto flex w-full flex-row items-center'>
      <div className='mx-auto'>
        <Input
          value={otp}
          onChange={handleChange}
          onPaste={handlePaste}
          renderSeparator={<span className='p-1'></span>}
          numInputs={6}
          shouldAutoFocus
          skipDefaultStyles
          inputType='text'
          inputStyle='flex h-16 w-16 flex-col items-center justify-center rounded-xl border border-gray-200 bg-white px-6 text-center text-lg font-semibold text-black outline-none ring-brand-500 focus:bg-gray-50 focus:ring-1'
          renderInput={(props) => <input {...props} />}
        />
      </div>
    </div>
  );
};

export default OTPInput;
