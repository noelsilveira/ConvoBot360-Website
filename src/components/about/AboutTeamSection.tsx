import React from 'react';
import { FaLinkedinIn } from 'react-icons/fa';
import { TbBrandXFilled } from 'react-icons/tb';

const team = [
  {
    name: 'Noel Silveira',
    role: 'Founder / CEO',
    imageUrl:
      'https://images.unsplash.com/photo-1556157382-97eda2d62296?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHBlb3BsZSUyMG1hbiUyMGZvdW5kZXJ8ZW58MHx8MHx8fDA%3D',
    bio: [
      'Noel is a seasoned Strategist with a proven track record in the Telecommunications, Banking, Payment Aggregators and FinTech startup sectors. Having held senior positions as Head of Sales and Business Development in prestigious companies, Noel consistently transforms profiles into compelling success stories.',
      ' At CB360, he brings the marketing know-how from the world’s biggest brands to local businesses, ensuring their sustainable growth and continued success.',
    ],
    xUrl: '#!',
    linkedinUrl: '#!',
  },
  {
    name: 'Siddhesh Ajarekar',
    role: 'Co-Founder / CTO',
    imageUrl:
      'https://images.unsplash.com/photo-1557862921-37829c790f19?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjN8fHRlY2glMjBtYW4lMjBmb3VuZGVyfGVufDB8fDB8fHww',
    bio: [
      'Siddesh is an IT professional with a robust background in IT architecture, automation, IT security, Cloud computing. His experience spans various industries, showcasing a successful track record of overseeing and implementing innovative IT solutions.',
      'Siddesh’s  expertise in digital transformation makes the tech cutting edge services which nobody can offer instantly',
    ],
    xUrl: '#!',
    linkedinUrl: '#!',
  },
  {
    name: 'Hussein Obeed',
    role: 'Partner',
    imageUrl:
      'https://images.unsplash.com/photo-1613181013804-1dcba09e6a9d?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGJ1c2luZXNzJTIwbWFufGVufDB8fDB8fHww',
    bio: [
      'Hussein is a highly accomplished businessman with a solid foundation in Information Technology. As a seasoned entrepreneur, he has achieved remarkable success by leveraging his IT expertise to navigate the business landscape effectively.',
      "Hussein's strategic vision and business acumen have propelled him to success in various ventures, establishing him as a prominent figure in the business community in Saudi Arabia",
    ],
    xUrl: '#!',
    linkedinUrl: '#!',
  },
  // More people...
];

const AboutTeamSection = () => {
  return (
    <div
      id='teamSection'
      className='mx-auto mt-32 max-w-7xl px-6 sm:mt-48 lg:px-8'
    >
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
