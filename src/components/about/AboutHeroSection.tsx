import React from 'react';

const AboutHeroSection = () => {
  return (
    <div className='relative isolate -z-10'>
      {/* SVG background pattern */}
      <SVGBackgroundPattern />
      {/* Background gradient */}
      <BackgroundGradient />

      {/* main content section */}
      <div className='overflow-hidden'>
        <div className='mx-auto max-w-7xl px-6 pb-32 pt-28 sm:pt-60 lg:px-8 lg:pt-32'>
          <div className='mx-auto max-w-2xl gap-x-14 lg:mx-0 lg:flex lg:max-w-none lg:items-center'>
            <div className='w-full max-w-xl lg:shrink-0 xl:max-w-2xl'>
              <h1 className='text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl'>
                Creating a sustainable future for hospitality businesses
              </h1>
              <p className='relative mt-6 text-lg leading-8 text-gray-600 sm:max-w-md lg:max-w-none'>
                We’re passionate about building the technology to give your
                guests a seamless, personalized and rewarding experience at
                every meal while ensuring you get the reward of your passion and
                hard work.
              </p>
            </div>
            <div className='mt-14 flex justify-end gap-8 sm:-mt-44 sm:justify-start sm:pl-20 lg:mt-0 lg:pl-0'>
              <div className='ml-auto w-44 flex-none space-y-8 pt-32 sm:ml-0 sm:pt-80 lg:order-last lg:pt-36 xl:order-none xl:pt-80'>
                <div className='relative'>
                  <img
                    src='https://images.unsplash.com/photo-1481414981591-5732874c7193?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjJ8fG9yYW5nZSUyMGFic3RyYWN0fGVufDB8fDB8fHww'
                    alt='About-hero-1'
                    className='aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg'
                  />
                  <div className='pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10' />
                </div>
              </div>
              <div className='mr-auto w-44 flex-none space-y-8 sm:mr-0 sm:pt-52 lg:pt-36'>
                <div className='relative'>
                  <img
                    src='https://images.unsplash.com/photo-1514847923519-16bf190741fc?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjZ8fG9yYW5nZSUyMGFic3RyYWN0fGVufDB8fDB8fHww'
                    alt='About-hero-2'
                    className='aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg'
                  />
                  <div className='pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10' />
                </div>
                <div className='relative'>
                  <img
                    src='https://images.unsplash.com/photo-1633596683562-4a47eb4983c5?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDN8fG9yYW5nZSUyMGFic3RyYWN0fGVufDB8fDB8fHww'
                    alt='About-hero-3'
                    className='aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg'
                  />
                  <div className='pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10' />
                </div>
              </div>
              <div className='w-44 flex-none space-y-8 pt-32 sm:pt-0'>
                <div className='relative'>
                  <img
                    src='https://images.unsplash.com/photo-1595815393077-018a6d4e0b59?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8b3JhbmdlJTIwYWJzdHJhY3R8ZW58MHx8MHx8fDA%3D'
                    alt='About-hero-4'
                    className='aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg'
                  />
                  <div className='pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10' />
                </div>
                <div className='relative'>
                  <img
                    src='https://images.unsplash.com/photo-1489648022186-8f49310909a0?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fG9yYW5nZSUyMGFic3RyYWN0fGVufDB8fDB8fHww'
                    alt='About-hero-5'
                    className='aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg'
                  />
                  <div className='pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10' />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const BackgroundGradient = () => {
  return (
    <div
      className='absolute left-1/2 right-0 top-0 -z-10 -ml-24 transform-gpu overflow-hidden blur-3xl lg:ml-24 xl:ml-48'
      aria-hidden='true'
    >
      <div
        className='aspect-[801/1036] w-[50.0625rem] bg-gradient-to-tr from-[#ffb050] to-[#4c3fff] opacity-75'
        style={{
          clipPath:
            'polygon(63.1% 29.5%, 100% 17.1%, 76.6% 3%, 48.4% 0%, 44.6% 4.7%, 54.5% 25.3%, 59.8% 49%, 55.2% 57.8%, 44.4% 57.2%, 27.8% 47.9%, 35.1% 81.5%, 0% 97.7%, 39.2% 100%, 35.2% 81.4%, 97.2% 52.8%, 63.1% 29.5%)',
        }}
      />
    </div>
  );
};

const SVGBackgroundPattern = () => {
  return (
    <svg
      className='absolute inset-x-0 top-0 -z-10 h-[64rem] w-full stroke-gray-200 [mask-image:radial-gradient(32rem_32rem_at_center,white,transparent)]'
      aria-hidden='true'
    >
      <defs>
        <pattern
          id='1f932ae7-37de-4c0a-a8b0-a6e3b4d44b84'
          width={200}
          height={200}
          x='50%'
          y={-1}
          patternUnits='userSpaceOnUse'
        >
          <path d='M.5 200V.5H200' fill='none' />
        </pattern>
      </defs>
      <svg x='50%' y={-1} className='overflow-visible fill-brand-200'>
        <path
          d='M-200 0h201v201h-201Z M600 0h201v201h-201Z M-400 600h201v201h-201Z M200 800h201v201h-201Z'
          strokeWidth={0}
        />
      </svg>
      <rect
        width='100%'
        height='100%'
        strokeWidth={0}
        fill='url(#1f932ae7-37de-4c0a-a8b0-a6e3b4d44b84)'
      />
    </svg>
  );
};

export default AboutHeroSection;
