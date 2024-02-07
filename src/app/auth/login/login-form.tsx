'use client';

import { HiEnvelope, HiEye, HiKey } from 'react-icons/hi2';
import React, { useState } from 'react';

import { HiEyeOff } from 'react-icons/hi';
import Link from 'next/link';
import { handleSignInForm } from '@/app/actions/auth';
import { useFormStatus } from 'react-dom';
import { cn } from '@/lib/utils';

const LoginForm = () => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <form action={handleSignInForm} className='mt-6 grid grid-cols-6 gap-6'>
      <div className='col-span-6'>
        <label
          htmlFor='username'
          className='block text-sm font-medium leading-6 text-gray-900'
        >
          Username
        </label>
        <div className='relative mt-2 rounded-md shadow-sm'>
          <div className='pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3'>
            <HiEnvelope className='h-5 w-5 text-gray-300' aria-hidden='true' />
          </div>
          <input
            type='username'
            name='username'
            id='username'
            required
            className='block w-full rounded-md border-0 py-2 pl-10 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-brand-600 sm:text-sm sm:leading-6'
            placeholder='you@example.com'
          />
        </div>
      </div>
      <div className='col-span-6'>
        <label
          htmlFor='password'
          className='block text-sm font-medium leading-6 text-gray-900'
        >
          Password
        </label>
        <div className='relative mt-2 rounded-md shadow-sm'>
          <div className='pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3'>
            <HiKey className='h-5 w-5 text-gray-300' aria-hidden='true' />
          </div>
          <input
            type={!showPassword ? 'password' : 'text'}
            name='password'
            id='password'
            required
            className='block w-full rounded-md border-0 px-10 py-2 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-brand-600 sm:text-sm sm:leading-6'
            placeholder='Minimum 8 characters'
          />
          <button
            type='button'
            className='absolute inset-y-0 right-0 flex items-center px-3'
            onClick={() => setShowPassword(!showPassword)}
          >
            {!showPassword ? (
              <HiEye className='h-5 w-5 text-gray-300' aria-hidden='true' />
            ) : (
              <HiEyeOff className='h-5 w-5 text-gray-300' aria-hidden='true' />
            )}
          </button>
        </div>
      </div>

      <div className='col-span-6'>
        <div className='flex items-center justify-between'>
          <label htmlFor='MarketingAccept' className='flex gap-4'>
            <input
              type='checkbox'
              id='rememberBox'
              name='remember_accept'
              className='h-5 w-5 rounded-md border-gray-200 bg-white shadow-sm'
            />

            <span className='text-sm text-gray-700'>Remember me</span>
          </label>
          <div className='text-sm leading-6'>
            <a
              href='#'
              className='font-semibold text-brand-600 hover:text-brand-500'
            >
              Forgot password?
            </a>
          </div>
        </div>
      </div>
      <div className='col-span-6 sm:flex sm:items-center sm:gap-4'>
        {/* Sign in Button */}
        <SignInButton />

        <p className='mt-4 text-sm text-gray-500 sm:mt-0'>
          New here?
          <Link href='/auth/sign-up' className='ml-2 text-brand-600 underline'>
            Sign up instead
          </Link>
        </p>
      </div>
    </form>
  );
};

export default LoginForm;

const SignInButton = () => {
  const { pending } = useFormStatus();

  return (
    <button
      type='submit'
      disabled={pending}
      className={cn(
        'inline-block w-max min-w-56 shrink-0 rounded-md border border-brand-500 bg-brand-500 px-12 py-3 text-sm font-semibold text-brand-50 transition hover:bg-brand-600 hover:text-white focus:outline-none focus:ring active:text-brand-600',
        pending ? 'animate-pulse opacity-75' : ''
      )}
    >
      {pending ? <span>Signing in...</span> : <span>Sign in</span>}
    </button>
  );
};
