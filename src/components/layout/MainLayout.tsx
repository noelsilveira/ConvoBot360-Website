// import React, { useEffect } from 'react';

import Footer from './Footer';
import Header from './Header';
import { Inter } from 'next/font/google';
import MobileMenu from './MobileMenu';
import { cn } from '@/lib/utils';
import { twMerge } from 'tailwind-merge';

// import Head from 'next/head';



// import { Toaster } from 'react-hot-toast';



type MainLayoutProps = React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLElement>,
  HTMLElement
>;

const inter = Inter({ subsets: ['latin'] });

const MainLayout = ({
  children,
  title,
  className,
  ...rest
}: MainLayoutProps) => {
  return (
    <>
      {/* <Head>
        <title>{title}</title>
        <meta name='description' content='E-commerce for the future' />
        <meta
          property='og:title'
          content='CB360 - Your dream e-commerce store is here'
        />
        <meta property='og:image' content='cb360-logomark.svg' />

        <meta name='theme-color' content='#fd9c0a'></meta>
        <link
          rel='icon'
          href='/logomark.svg'
          type='image/svg'
          sizes='16x16 32x32'
        />
      </Head> */}
      {/* <Toaster position='bottom-center' /> */}

      <div>
        {/* Mobile menu */}
        <MobileMenu />

        {/* Top navigation */}
        <Header />
        <main className={cn(`${inter} ${className}`)} {...rest}>
          {children}
        </main>
        <Footer />
      </div>
    </>
  );
};

export default MainLayout;
