import { Inter } from 'next/font/google';
import Head from 'next/head';
import React, { useEffect } from 'react';
import { twMerge } from 'tailwind-merge';
import Header from './Header';
import Footer from './Footer';
import MobileMenu from './MobileMenu';
import { useHeroStore } from '@/store/heroStore';
import { useRouter } from 'next/router';
import { Toaster } from 'react-hot-toast';

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
  const { toggleHeader, toggleOffersHero } = useHeroStore();
  const router = useRouter();

  useEffect(() => {
    const isHomepage = router.pathname === '/';
    isHomepage ? toggleHeader(true) : toggleHeader(false);
    isHomepage ? toggleOffersHero(true) : toggleOffersHero(false);
  }, []);
  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <Toaster position='bottom-center' />

      <div>
        {/* Mobile menu */}
        <MobileMenu />

        {/* Top navigation */}
        <Header />
        <main className={twMerge(`${inter} ${className}`)} {...rest}>
          {children}
        </main>
        <Footer />
      </div>
    </>
  );
};

export default MainLayout;
