import Image from 'next/image';
import { Router, useRouter } from 'next/router';
import { useEffect, useState } from 'react';

function LogoLoading() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const handleStart = (url: Router['pathname']) =>
      url !== router.asPath && setLoading(true);
    const handleComplete = (url: Router['pathname']) =>
      url === router.asPath && setLoading(false);

    router.events.on('routeChangeStart', handleStart);
    router.events.on('routeChangeComplete', handleComplete);
    router.events.on('routeChangeError', handleComplete);

    return () => {
      router.events.off('routeChangeStart', handleStart);
      router.events.off('routeChangeComplete', handleComplete);
      router.events.off('routeChangeError', handleComplete);
    };
  });

  return (
    loading && (
      <div className='relative z-50 min-h-screen overflow-hidden overscroll-contain bg-white/30'>
        <div className='absolute flex h-full w-full items-center justify-center'>
          <Image
            src='/cb360-logo.svg'
            alt='CB360 logo loading'
            height={100}
            width={300}
            className='h-16 animate-pulse object-contain'
          />
        </div>
      </div>
    )
  );
}

export default LogoLoading;
