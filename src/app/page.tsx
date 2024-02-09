import AboutLogoCloud from '@/components/about/AboutLogoCloud';
import GetNotified from '@/components/about/GetNotified';
import BuildYourPresenceSection from '@/components/home/BuildYourPresenceSection';
import FeatureFullSection from '@/components/home/FeatureFullSection';
import HomeHeroSection from '@/components/home/HomeHeroSection';
import HomeStats from '@/components/home/HomeStats';
import SimpleFeatureSection from '@/components/home/SimpleFeatureSection';
import SingleTestimonialSection from '@/components/home/SingleTestimonialSection';
import WhatsAppIntegration from '@/components/home/WhatsAppIntegration';
import MainLayout from '@/components/layout/MainLayout';
import React from 'react';

const HomePage = () => {
  return (
    <MainLayout>
      <HomeHeroSection />
      {/* Category section */}
      {/* <TrustedPartners /> */}
      <AboutLogoCloud />
      <SimpleFeatureSection />

      {/* Featured section */}
      <FeatureFullSection />

      <BuildYourPresenceSection />
      <WhatsAppIntegration />
      <SingleTestimonialSection />
      <HomeStats />
      <GetNotified />
    </MainLayout>
  );
};

export default HomePage;
