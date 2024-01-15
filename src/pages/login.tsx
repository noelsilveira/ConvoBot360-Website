import CustomToaster from '@/components/toasts/CustomToast';
import { hashedPassword } from '@/lib/auth';
import { error } from 'console';
import { sha256 } from 'js-sha256';
import Image from 'next/image';
import Link from 'next/link';
import React, { ElementRef, useRef, useState } from 'react';
import toast from 'react-hot-toast';
import { FaFacebook } from 'react-icons/fa';
import { FcGoogle } from 'react-icons/fc';
import { HiEyeOff } from 'react-icons/hi';
import { HiEnvelope, HiEye, HiKey } from 'react-icons/hi2';

type FormElements = {
  email: HTMLInputElement;
  password: HTMLInputElement;
} & HTMLFormControlsCollection;

type UserFormElement = {
  readonly elements: FormElements;
} & HTMLFormElement;

const LoginPage = () => {
  const [showPassword, setShowPassword] = useState(false);
  // const formData = useRef<ElementRef<'form'>>(null);

  // function handleSubmit(event: React.SyntheticEvent<HTMLFormElement>) {
  //   event.preventDefault();
  //   const { email, password } = event.currentTarget;
  //   console.log({
  //     email: email.value,
  //     password: sha256.hmac(`some-key-here ${email.value}`, password.value!),
  //   });
  // }

  return (
    <section className='bg-white'>
      <div className='lg:grid lg:min-h-screen lg:grid-cols-12'>
        <aside className='relative block h-20 lg:order-last lg:col-span-5 lg:h-full xl:col-span-6'>
          <Image
            height={2000}
            width={2000}
            alt='Pattern'
            src='https://images.unsplash.com/photo-1541471943749-e5976783f6c3?q=80&w=2671&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
            className='absolute inset-0 h-full w-full object-cover'
          />
        </aside>

        <main className='flex items-center justify-center px-6 py-8 sm:px-12 lg:col-span-7 lg:px-16 lg:py-12 xl:col-span-6'>
          <div className='w-full max-w-2xl md:w-max lg:max-w-3xl'>
            <Link className='block text-brand-600' href='/'>
              <span className='sr-only'>Home</span>
              <Image
                height={50}
                width={100}
                className='h-10 w-auto md:h-12'
                src={'/cb360-logo.svg'}
                alt='CB360 Logo'
              />
            </Link>

            <h1 className='mt-6 text-2xl font-bold text-gray-900 sm:text-3xl md:text-4xl'>
              Sign in to your account
            </h1>

            <p className='mt-4 max-w-md leading-relaxed text-gray-500'>
              Let us take care of all your shopping needs!
            </p>

            <form className='mt-6 grid grid-cols-6 gap-6'>
              <div className='col-span-6'>
                <label
                  htmlFor='email'
                  className='block text-sm font-medium leading-6 text-gray-900'
                >
                  Email
                </label>
                <div className='relative mt-2 rounded-md shadow-sm'>
                  <div className='pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3'>
                    <HiEnvelope
                      className='h-5 w-5 text-gray-300'
                      aria-hidden='true'
                    />
                  </div>
                  <input
                    type='email'
                    name='email'
                    id='email'
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
                    <HiKey
                      className='h-5 w-5 text-gray-300'
                      aria-hidden='true'
                    />
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
                      <HiEye
                        className='h-5 w-5 text-gray-300'
                        aria-hidden='true'
                      />
                    ) : (
                      <HiEyeOff
                        className='h-5 w-5 text-gray-300'
                        aria-hidden='true'
                      />
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
                <button
                  type='submit'
                  className='inline-block w-max min-w-56 shrink-0 rounded-md border border-brand-500 bg-brand-500 px-12 py-3 text-sm font-semibold text-brand-50 transition hover:bg-brand-600 hover:text-white focus:outline-none focus:ring active:text-brand-600'
                >
                  Sign in
                </button>

                <p className='mt-4 text-sm text-gray-500 sm:mt-0'>
                  New here?
                  <Link
                    href='/sign-up'
                    className='ml-2 text-brand-600 underline'
                  >
                    Sign up instead
                  </Link>
                </p>
              </div>
            </form>
            <SocialLogin />
          </div>
        </main>
      </div>
    </section>
  );
};

const SocialLogin = () => {
  return (
    <div className='mt-10'>
      <div className='relative'>
        <div className='absolute inset-0 flex items-center' aria-hidden='true'>
          <div className='w-full border-t border-gray-200' />
        </div>
        <div className='relative flex justify-center text-sm font-medium leading-6'>
          <span className='bg-white px-6 text-gray-900'>Or continue with</span>
        </div>
      </div>

      <div className='mt-6 grid grid-cols-2 gap-4'>
        <button
          //   href='#'
          onClick={() => toast.success('Success')}
          className='flex w-full items-center justify-center gap-3 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus-visible:ring-transparent'
        >
          <FcGoogle className='h-5 w-5' />
          <span className='text-sm font-semibold leading-6'>Google</span>
        </button>

        <a
          href='#'
          className='flex w-full items-center justify-center gap-3 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus-visible:ring-transparent'
        >
          <FaFacebook className='h-5 w-5 text-blue-600' />
          <span className='text-sm font-semibold leading-6'>Facebook</span>
        </a>
      </div>
    </div>
  );
};

export default LoginPage;
