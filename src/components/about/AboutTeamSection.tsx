import React from 'react';
import { FaLinkedinIn } from 'react-icons/fa';
import { TbBrandXFilled } from 'react-icons/tb';

const team = [
  {
    name: 'Michael Foster',
    role: 'Co-Founder / CEO',
    imageUrl:
      'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80',
    bio: [
      'Hailing from France, Michael spent 7 years leading the Facebook’s EMEA Travel Industry, but that’s not all. He’s led divisions at Microsoft, L’Oreal, Quiksilver, and MakeMeReach.',
      'At SB360, he brings the marketing know-how from the world’s biggest brands to local businesses, ensuring their sustainable growth and continued success.',
    ],
    xUrl: '#!',
    linkedinUrl: '#!',
  },
  {
    name: 'Leslie Alexander',
    role: 'Co-Founder / CTO',
    imageUrl:
      'https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80',
    bio: [
      'Leslie has been building software products and leading technology teams for more than 15 years in different sectors including enterprises, government agencies, SMBs, and startups in Brazil, Ireland, and the Middle East.',
      'At CB360, she is responsible for building and scaling Engineering teams that can deliver world class technology at scale for thousands of merchants, and millions of consumers.',
    ],
    xUrl: '#!',
    linkedinUrl: '#!',
  },
  // More people...
];

const AboutTeamSection = () => {
  return (
    <div className='mx-auto mt-32 max-w-7xl px-6 sm:mt-48 lg:px-8'>
      <div className='mx-auto max-w-2xl lg:mx-0'>
        <h2 className='text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl'>
          Meet the founders
        </h2>
        <p className='mt-6 text-lg leading-8 text-gray-600'>
          Tech shouldn’t block an entrepreneur&apos;s ability to grow their
          business sustainably and innovate. The movement they started is
          essential to thousands of local businesses, empowering them with best
          in class technology to succeed online.
        </p>
      </div>
      <ul role='list' className='mt-6 space-y-12 divide-y divide-gray-200'>
        {team.map((person) => (
          <li
            key={person.name}
            className='flex flex-col gap-10 gap-y-8 pt-12 sm:flex-row'
          >
            <img
              className='aspect-[4/5] w-64 flex-none rounded-2xl object-cover'
              src={person.imageUrl}
              alt={person.name}
            />
            <div className='max-w-xl flex-auto'>
              <h3 className='text-lg font-semibold leading-8 tracking-tight text-gray-900'>
                {person.name}
              </h3>
              <p className='text-base leading-7 text-gray-600'>{person.role}</p>
              <ul>
                {person.bio.map((bio, idx) => (
                  <li
                    key={'bio-' + idx * 3.14}
                    className='mt-6 text-base leading-7 text-gray-600'
                  >
                    {bio}
                  </li>
                ))}
              </ul>
              <ul role='list' className='mt-6 flex gap-x-6'>
                <li>
                  <a
                    href={person.xUrl}
                    className='text-gray-400 hover:text-gray-500'
                  >
                    <span className='sr-only'>X</span>
                    <TbBrandXFilled className='h-5 w-5' />
                  </a>
                </li>
                <li>
                  <a
                    href={person.linkedinUrl}
                    className='text-gray-400 hover:text-gray-500'
                  >
                    <span className='sr-only'>LinkedIn</span>
                    <FaLinkedinIn className='h-5 w-5' />
                  </a>
                </li>
              </ul>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AboutTeamSection;
