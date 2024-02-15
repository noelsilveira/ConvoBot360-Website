import { FaFacebook } from 'react-icons/fa';
import { FcGoogle } from 'react-icons/fc';
import Image from 'next/image';
import Link from 'next/link';
import LoginForm from './login-form';
import React from 'react';
import { TOKEN_NAME } from '@/constants/urls';
import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';

type FormElements = {
  email: HTMLInputElement;
  password: HTMLInputElement;
} & HTMLFormControlsCollection;

type UserFormElement = {
  readonly elements: FormElements;
} & HTMLFormElement;

const LoginPage = () => {
  const cookieStore = cookies();
  const access_token = cookieStore.get(TOKEN_NAME);
  if (access_token) {
    redirect(`/`);
  }

  return (
    <section className='bg-white'>
      <div className='lg:grid lg:min-h-screen lg:grid-cols-12'>
        <aside className='relative block h-20 lg:order-last lg:col-span-5 lg:h-full xl:col-span-6'>
          <Image
            height={1000}
            width={1000}
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

            {/* Login form component */}
            <LoginForm />
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
          // onClick={() => toast.success('Success')}
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

// export const getServerSideProps = async ({
//   req,
//   res,
// }: {
//   req: NextApiRequest;
//   res: NextApiResponse;
// }) => {
//   // Fetch data from external API
//   const cookies = new Cookies(req, res);
//   const token = cookies.get(TOKEN_NAME);
//   if (!token || token === 'undefined' || token === undefined || token === ' ')
//     return { props: { token: null } };

//   console.log('Bearer Token:', token);

//   // console.log('data: ', details);
//   // Pass data to the page via props
//   return { props: { token } };
// };
