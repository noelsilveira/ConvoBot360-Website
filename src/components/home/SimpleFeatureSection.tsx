import Link from 'next/link';
import React from 'react';
import { RiWhatsappLine } from 'react-icons/ri';
import {
  TbAnalyze,
  TbBolt,
  TbFileCheck,
  TbReportAnalytics,
  TbUserShield,
  TbVersions,
} from 'react-icons/tb';

const features = [
  {
    name: 'Get your instant WhatsApp Business store',
    description:
      'Easy store set up with a hassle-free onboarding process, helping you run an automated smooth conversational e-commerce business in no time.',
    href: '/about',
    icon: TbBolt,
  },
  {
    name: 'Get to know your customer',
    description:
      'Understand customer behaviors to deliver personalized experiences. With our customized dashboards, you can access all your customer data.',
    href: '/about',
    icon: TbUserShield,
  },
  {
    name: 'Powerful Analytics',
    description:
      'Gain a 360-degree view of your business with our intuitive tools & integrated features to make informed decisions, and optimize efficiency.',
    href: '/about',
    icon: TbReportAnalytics,
  },
];

const SimpleFeatureSection = () => {
  return (
    <div className='py-8 pt-20 sm:py-12 sm:pt-24'>
      <div className='mx-auto max-w-7xl px-6 lg:px-8'>
        <div className='max-w-2xl lg:text-left'>
          <h2 className='mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl'>
            <span className='font-serif italic text-brand-500'>
              Streamlined.
            </span>{' '}
            Setup for Success
          </h2>
          <p className='mt-6 text-lg leading-8 text-gray-600'>
            Experience a seamless setup process that&apos;s smart, simple, and
            efficient. Our innovative approach ensures a productive start on
            your path to success.
          </p>
        </div>
        <div className='mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none'>
          <dl className='grid max-w-xl grid-cols-1 gap-x-4 gap-y-6 lg:max-w-none lg:grid-cols-3'>
            {features.map((feature) => (
              <div
                key={feature.name}
                className='flex flex-col rounded-2xl bg-gallery-50 px-6 py-8'
              >
                <dt className='flex items-start justify-start gap-x-3 text-3xl font-bold leading-[1.65rem] text-gallery-950'>
                  <feature.icon
                    className='-mt-1 h-12 w-12 flex-none text-brand-600'
                    aria-hidden='true'
                  />
                  {feature.name}
                </dt>
                <dd className='mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600'>
                  <p className='flex-auto'>{feature.description}</p>
                  <p className='mt-6'>
                    <Link
                      href={feature.href}
                      className='text-sm font-semibold leading-6 text-brand-600'
                    >
                      Learn more <span aria-hidden='true'>→</span>
                    </Link>
                  </p>
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
};

export default SimpleFeatureSection;
