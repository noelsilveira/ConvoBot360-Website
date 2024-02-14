import { API_BASE_URL } from '@/constants/urls';
import CTASection from '@/components/sections/home-page/CTASection';
import CategorySideBySideSection from '@/components/sections/home-page/CategorySideBySideSection';
import FavoritesSection from '@/components/sections/home-page/FavoritesSection';
import FeaturedSection from '@/components/sections/home-page/FeaturedSection';
import MainLayout from '@/components/layout/MainLayout';
import { MerchantDetailsType } from '@/types/merchant';
import MerchantLayout from '@/components/layout/merchant-layout/MerchantLayout';
import React from 'react';
import cookie from 'cookie';
import nextCookie from 'next-cookies';
import { redirect } from 'next/navigation';

export type Merchant = {
  details: string;
};

export type MerchantParams = {
  params: { merchant_id: string };
};

const getMerchantDetails = async ({ params }: MerchantParams) => {
  const response = await fetch(
    `${API_BASE_URL}/estore/merchant-details/${params.merchant_id}`,
    {
      method: 'POST',
      // redirect: 'follow',
      next: {
        revalidate: 60, //cache data for 60 second
      },
    }
  );
  const data = await response.json();
  return data;
};

const MerchantPage = async ({ params }: MerchantParams) => {
  const merchant_detail: MerchantDetailsType = await getMerchantDetails({
    params,
  });
  // console.log('res_status: ', res.status);
  // if (merchant_detail.status_code != 200) {
  //   redirect('/')
  // }

  // console.log('M_D: ', merchant_detail);

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
