import { Inter } from 'next/font/google';
import Head from 'next/head';
import React, { useEffect } from 'react';
import { twMerge } from 'tailwind-merge';
import Footer from '../Footer';
import MobileMenu from '../MobileMenu';
import { useHeroStore } from '@/store/heroStore';
import { useRouter } from 'next/router';
import { Toaster } from 'react-hot-toast';
import MerchantHeader from './MerchantHeader';

type MerchantLayoutProps = React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLElement>,
  HTMLElement
>;

const inter = Inter({ subsets: ['latin'] });

const MerchantLayout = ({
  children,
  title,
  className,
  ...rest
}: MerchantLayoutProps) => {
  const { toggleHeader, toggleOffersHero } = useHeroStore();
  const router = useRouter();

  useEffect(() => {
    const isHomepage = router.pathname === `/merchant/[merchantId]`;
    isHomepage ? toggleHeader(true) : toggleHeader(false);
    isHomepage ? toggleOffersHero(true) : toggleOffersHero(false);
  }, [router]);
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name='description' content='E-commerce for the future' />
        <meta
          property='og:title'
          content='CB360 - Your dream e-commerce store is here'
        />
        <meta property='og:image' content='cb360-logomark.svg' />

        <meta name='theme-color' content='#ff9c0a'></meta>
        <link
          rel='icon'
          href='/cb360-logomark.svg'
          type='image/svg'
          sizes='16x16 32x32'
        />
      </Head>
      <Toaster position='bottom-center' />

      <div>
        {/* Mobile menu */}
        <MobileMenu />

        {/* Top navigation */}
        <MerchantHeader />
        <main className={twMerge(`${inter} ${className}`)} {...rest}>
          {children}
        </main>
        <Footer />
      </div>
    </>
  );
};

export default MerchantLayout;
