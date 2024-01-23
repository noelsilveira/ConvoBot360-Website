import Image from 'next/image';
import React from 'react';
import { RiHotelBedLine, RiRestaurant2Line } from 'react-icons/ri';
import { TbBuildingStore, TbCake, TbRestore, TbSchool } from 'react-icons/tb';
const whatsappFeatures = [
  {
    id: 1,
    name: 'Restaurants & Cafés',
    href: '#!',
    icon: RiRestaurant2Line,
    description: [
      'Showcase menus',
      'Broadcasting Marketing Offer such as discounts, and buy 1 get 1 Free',
      'Manage catering leads',
      'Facilitate table reservations',
    ],
    salary: '$75,000 USD',
    location: 'San Francisco, CA',
  },
  {
    id: 2,
    name: 'Hotels',
    href: '#!',
    icon: RiHotelBedLine,
    description: [
      'Room bookings',
      'Room service F&B orders',
      'Restaurant reservations',
      'Event bookings',
    ],
  },

  {
    id: 3,
    name: 'Schools & Universities',
    href: '#!',
    icon: TbSchool,
    description: [
      'Fee payments',
      'Share activity news',
      'Send parent and students notifications',
    ],
  },
  {
    id: 4,
    name: 'Retail Outlets',
    href: '#!',
    icon: TbBuildingStore,
    description: [
      'Display catalogs (clothing, shoes, electronics, laundry)',
      'Broadcasting Marketing Offers such as discounts',
      'Bundle promotions',
    ],
  },
  {
    id: 5,
    name: 'Hypermarkets & Cold Stores',
    href: '#!',
    icon: TbCake,
    description: [
      'List entire store catalog',
      'Provide e-shop options',
      'Goods delivery and drive-through pick-up orders',
    ],
  },
  {
    id: 6,
    name: 'Hospitals & Pharmacies',
    href: '#!',
    icon: TbCake,
    description: [
      'Medicines deliveries',
      'Share lab reports',
      'Doctor appointment bookings',
      'Invoice Payments',
    ],
  },
  {
    id: 7,
    name: 'Service Centers and Car Washes',
    href: '#!',
    icon: TbCake,
    description: [
      'Schedule service appointments',
      'Manage spare parts and invoicing',
      'Arrange chauffeur services for car wash and polish',
    ],
  },
  {
    id: 8,
    name: 'Salons',
    href: '#!',
    icon: TbCake,
    description: ['Appointment bookings'],
  },
  {
    id: 9,
    name: 'Telecom & Banking Bots',
    href: '#!',
    icon: TbCake,
    description: ['Facilitate transactions inquiries'],
  },
  {
    id: 13,
    name: 'Charity Organizations',
    href: '#!',
    icon: TbCake,
    description: ['Donations', 'Share activity notifications and news'],
  },
  {
    id: 14,
    name: 'Bakery & Confections',
    href: '#!',
    icon: TbCake,
    description: ['Ordering cakes and pastry orders'],
  },
];

const WhatsAppIntegration = () => {
  return (
    <div className='mx-auto mt-32 max-w-7xl px-6 sm:mt-40 lg:px-8'>
      <div className='mx-auto flex max-w-2xl flex-col items-end justify-between gap-16 lg:mx-0 lg:max-w-none lg:flex-row'>
        <div className='w-full lg:max-w-xl lg:flex-auto'>
          <h2 className='text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl'>
            WhatsApp
            <span className='font-serif italic text-emerald-500'>
              {' '}
              Convo Bots
            </span>{' '}
            Use Cases
          </h2>
          <p className='mt-6 text-xl leading-8 text-gray-600'>
            Create and send automated sequence of WhatsApp messages for sequence
            page - Customer onboarding, Payment dunning, Event Reminders,
            Product launch updates
          </p>
          <Image
            height={300}
            width={300}
            src={'/assets/animations/hypermarket.gif'}
            alt='whatsapp-convobot-hypermarket'
            className='mt-16 aspect-[6/5] w-full rounded-2xl bg-gray-50 object-cover lg:aspect-auto lg:h-[34.5rem]'
          />
        </div>
        <dl className='col-span-2 grid grid-cols-1 gap-x-6 gap-y-6 sm:grid-cols-2'>
          {whatsappFeatures.slice(0, 4).map((feature) => (
            <div key={feature.name} className='rounded-3xl bg-brand-50 p-6'>
              <dt className='text-base font-semibold leading-7 text-gray-900'>
                <div className='mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-brand-500'>
                  <feature.icon
                    className='h-6 w-6 text-white'
                    aria-hidden='true'
                  />
                </div>
                {feature.name}
              </dt>
              <dd className='mt-1 text-base leading-7 text-gray-600'>
                <ol className='list-outside list-disc px-3'>
                  {feature.description.map((description, idx) => (
                    <li
                      key={'feature-description-' + description + idx}
                      className=''
                    >
                      {description}
                    </li>
                  ))}
                </ol>
              </dd>
            </div>
          ))}
        </dl>
      </div>
      {/* another one reversed */}
      <div className='mx-auto flex max-w-2xl flex-col items-end justify-between gap-16 lg:mx-0 lg:max-w-none lg:flex-row'>
        <dl className='col-span-2 grid grid-cols-1 gap-x-6 gap-y-6 sm:grid-cols-2'>
          {whatsappFeatures.slice(5, 9).map((feature) => (
            <div key={feature.name} className='rounded-3xl bg-brand-50 p-6'>
              <dt className='text-base font-semibold leading-7 text-gray-900'>
                <div className='mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-brand-500'>
                  <feature.icon
                    className='h-6 w-6 text-white'
                    aria-hidden='true'
                  />
                </div>
                {feature.name}
              </dt>
              <dd className='mt-1 text-base leading-7 text-gray-600'>
                <ol className='list-outside list-disc px-3'>
                  {feature.description.map((description, idx) => (
                    <li
                      key={'feature-description-' + description + idx}
                      className=''
                    >
                      {description}
                    </li>
                  ))}
                </ol>
              </dd>
            </div>
          ))}
        </dl>
        <div className='order-first mt-12 w-full lg:order-last lg:mt-24 lg:max-w-xl lg:flex-auto'>
          <h2 className='text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl'>
            Integrate your
            <span className='font-serif italic text-emerald-500'>
              {' '}
              product catalog
            </span>
          </h2>
          <p className='mt-6 text-xl leading-8 text-gray-600'>
            Create customer segments based on attributes and past behavior and
            Add rich media and create interactive messages directly in your
            whatsapp business
          </p>
          <Image
            height={300}
            width={300}
            src={'/assets/animations/hospital.gif'}
            alt='whatsapp-convobot-payments'
            className='mt-16 aspect-[6/5] w-full rounded-2xl bg-gray-50 object-cover lg:aspect-auto lg:h-[34.5rem]'
          />
        </div>
      </div>
    </div>
  );
};

export default WhatsAppIntegration;
