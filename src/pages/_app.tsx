import LogoLoading from '@/components/layout/LogoLoading';
import '@/styles/global.css';
import type { AppProps } from 'next/app';
import NextNProgress from 'nextjs-progressbar';

const topGradient =
  'linear-gradient(90deg, rgba(131,58,180,1) 0%, rgba(253,29,29,1) 50%, rgba(252,176,69,1) 100%)';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <NextNProgress
        color={topGradient}
        height={3}
        stopDelayMs={200}
        startPosition={0.3}
        showOnShallow={true}
      />
      <LogoLoading />
      <Component {...pageProps} />;
    </>
  );
}
