import Image from 'next/image';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

function LogoLoading() {
  const router = useRouter();

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    let startTime: ReturnType<Date['getMilliseconds']>;
    let finishTime: ReturnType<Date['getMilliseconds']>;

    const handleStart = (url: string) => {
      url !== router.asPath && setLoading(true);
      startTime = new Date().getMilliseconds();
    };

    const handleComplete = (url: string) => {
      finishTime = new Date().getMilliseconds();
      let timeDiff = finishTime - startTime;
      if (timeDiff == 0 || timeDiff <= 700) {
        setTimeout(() => url === router.asPath && setLoading(false), 500);
      }
      url === router.asPath && setLoading(false);
    };

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
      <div className='relative z-[999] min-h-screen overflow-hidden overscroll-contain bg-white/50 backdrop-blur-md'>
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
