import MainLayout from '@/components/layout/MainLayout';
import MerchantLayout from '@/components/layout/merchant-layout/MerchantLayout';
import CTASection from '@/components/sections/home-page/CTASection';
import CategorySideBySideSection from '@/components/sections/home-page/CategorySideBySideSection';
import FavoritesSection from '@/components/sections/home-page/FavoritesSection';
import FeaturedSection from '@/components/sections/home-page/FeaturedSection';
import { API_BASE_URL } from '@/constants/urls';
import React from 'react';
import type { InferGetServerSidePropsType, GetServerSideProps } from 'next';

// export const getMerchantDetails = async ({
//   merchant_id,
// }: {
//   merchant_id: string;
// }) => {
//   const res = await fetch(`${API_BASE_URL}/estore/home/${merchant_id}`);
//   return res.json();
// };
export type Merchant = {
  details: string;
};

const MerchantPage = ({
  details,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  return (
    <MerchantLayout>
      <p>{details.details}</p>
      {/* Category section */}
      <CategorySideBySideSection />

      {/* Featured section */}
      <FeaturedSection />

      {/* Favorites section */}
      <FavoritesSection />

      {/* CTA section */}
      <CTASection />
    </MerchantLayout>
  );
};

export default MerchantPage;

export const getServerSideProps = (async ({ params }) => {
  // Fetch data from external API
  const merchant_id = params;
  const res = await fetch(`${API_BASE_URL}/estore/home/${merchant_id}`);
  const details: Merchant = await res.json();
  console.log('merchant ID: ', merchant_id);
  console.log('data: ', details);
  // Pass data to the page via props
  return { props: { details } };
}) satisfies GetServerSideProps<{ details: Merchant }>;
