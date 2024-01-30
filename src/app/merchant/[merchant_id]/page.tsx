import MainLayout from '@/components/layout/MainLayout';
import MerchantLayout from '@/components/layout/merchant-layout/MerchantLayout';
import CTASection from '@/components/sections/home-page/CTASection';
import CategorySideBySideSection from '@/components/sections/home-page/CategorySideBySideSection';
import FavoritesSection from '@/components/sections/home-page/FavoritesSection';
import FeaturedSection from '@/components/sections/home-page/FeaturedSection';
import { API_BASE_URL } from '@/constants/urls';
import React from 'react';
import nextCookie from 'next-cookies';
import cookie from 'cookie';
import type { InferGetServerSidePropsType, GetServerSideProps } from 'next';

export type Merchant = {
  details: string;
};

const MerchantPage = () => {
  return (
    <>
      <CategorySideBySideSection />
      {/* Featured section */}
      <FeaturedSection />
      {/* Favorites section */}
      <FavoritesSection />
      {/* CTA section */}
      <CTASection />
    </>
  );
};

export default MerchantPage;
