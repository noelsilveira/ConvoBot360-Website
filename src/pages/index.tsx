import MainLayout from '@/components/layout/MainLayout';
import HomeHeroSection from '@/components/home/HomeHeroSection';
import FeatureFullSection from '@/components/home/FeatureFullSection';
import HomeStats from '@/components/home/HomeStats';
import AboutLogoCloud from '@/components/about/AboutLogoCloud';
import GetNotified from '@/components/about/GetNotified';
import BuildYourPresenceSection from '@/components/home/BuildYourPresenceSection';
import WhatsAppIntegration from '@/components/home/WhatsAppIntegration';
import SingleTestimonialSection from '@/components/home/SingleTestimonialSection';

export default function Home() {
  return (
    <MainLayout title='Home - CB360'>
      <HomeHeroSection />
      {/* Category section */}
      {/* <TrustedPartners /> */}
      <AboutLogoCloud />

      {/* Featured section */}
      <FeatureFullSection />

      <HomeStats />
      <BuildYourPresenceSection />
      <WhatsAppIntegration />
      <SingleTestimonialSection />
      <GetNotified />
    </MainLayout>
  );
}
