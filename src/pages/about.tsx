import AboutHeroSection from '@/components/about/AboutHeroSection';
import AboutLogoCloud from '@/components/about/AboutLogoCloud';
import AboutMissionSection from '@/components/about/AboutMissionSection';
import AboutTeamSection from '@/components/about/AboutTeamSection';
import AboutValuesSection from '@/components/about/AboutValuesSection';
import GetNotified from '@/components/about/GetNotified';
import MainLayout from '@/components/layout/MainLayout';
import React from 'react';

const AboutPage = () => {
  return (
    <MainLayout title='About Us | CB360 - Buy everything be everywhere'>
      <main className='isolate'>
        {/* About Hero section */}
        <AboutHeroSection />

        {/* About Mission section */}
        <AboutMissionSection />

        {/* Image section */}
        <div className='mt-32 sm:mt-40 xl:mx-auto xl:max-w-7xl xl:px-8'>
          <img
            src='https://images.unsplash.com/photo-1529156069898-49953e39b3ac?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2832&q=80'
            alt='about-image-banner'
            className='aspect-[5/2] h-[40vh] w-full object-cover xl:rounded-3xl'
          />
        </div>

        {/* Values section */}
        <AboutValuesSection />

        {/* Logo cloud */}
        <AboutLogoCloud />

        {/* Team section */}
        <AboutTeamSection />
        <GetNotified />

        {/* Blog section */}
      </main>
    </MainLayout>
  );
};

export default AboutPage;
