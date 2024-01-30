'use client';
import React, { Fragment, useEffect } from 'react';
import HeroSection from '../sections/home-page/HeroSection';
import Navbar from './Navbar';
import OffersHero from '../sections/home-page/OffersHero';
import { useHeroStore } from '@/store/heroStore';
import TopBar from './TopBar';
import { usePathname } from 'next/navigation';

const Header = () => {
  const { showHero, showOffersHero } = useHeroStore();
  const { toggleHeader, toggleOffersHero } = useHeroStore();
  // const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    // const isHomepage = router.pathname === '/';
    const isHomepage = false;
    isHomepage ? toggleHeader(true) : toggleHeader(false);
    isHomepage ? toggleOffersHero(true) : toggleOffersHero(false);
  }, [pathname]);

  return (
    <header className='relative'>
      {/* Top navigation */}
      <TopBar />

      <Navbar />

      {/* Hero section */}
      {showOffersHero && <OffersHero />}
      {showHero && <HeroSection />}
    </header>
  );
};

export default Header;
