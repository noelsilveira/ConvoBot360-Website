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

// export const getServerSideProps = (async ({ params, query }) => {
//   // Fetch data from external API
//   const merchant_id = params;
//   const token = nextCookie(query);
//   console.log('Bearer Token:', token);

//   const res = await fetch(`${API_BASE_URL}/estore/home/${merchant_id}`);
//   const details: Merchant = await res.json();
//   console.log('merchant ID: ', merchant_id);
//   // console.log('data: ', details);
//   // Pass data to the page via props
//   return { props: { details } };
// }) satisfies GetServerSideProps<{ details: Merchant }>;
