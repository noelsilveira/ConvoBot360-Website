import React from 'react';

const team = [
  {
    name: 'Michael Foster',
    role: 'Co-Founder / CTO',
    imageUrl:
      'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80',
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
      <ul
        role='list'
        className='mx-auto mt-20 grid max-w-2xl grid-cols-2 gap-x-8 gap-y-16 text-center sm:grid-cols-3 md:grid-cols-3 lg:mx-0 lg:max-w-none lg:grid-cols-3 xl:grid-cols-3'
      >
        {team.map((person) => (
          <>
            <li key={person.name}>
              <img
                className='mx-auto h-[20rem] w-auto rounded-md object-cover'
                src={person.imageUrl}
                alt=''
              />
              {/* <h3 className='mt-6 text-base font-semibold leading-7 tracking-tight text-gray-900'>
                {person.name}
              </h3> */}
              {/* <p className='text-sm leading-6 text-gray-600'>{person.role}</p> */}
            </li>
            <li className='flex flex-col gap-y-1 text-left text-lg text-gray-600'>
              <h4 className='font-semibold leading-7 tracking-tight text-gray-900'>
                {person.name}
              </h4>
              <p className='text-sm leading-6 text-gray-600'>{person.role}</p>
              <div className='mt-6 flex flex-col gap-6'>
                <p>
                  Hailing from France, Michael spent 7 years leading the
                  Facebook’s EMEA Travel Industry, but that’s not all. He’s led
                  divisions at Microsoft, L’Oreal, Quiksilver, and MakeMeReach.
                </p>
                <p>
                  At CB360, he brings the marketing know-how from the world’s
                  biggest brands to local businesses, ensuring their sustainable
                  growth and continued success.
                </p>
              </div>
            </li>
          </>
        ))}
      </ul>
    </div>
  );
};

export default AboutTeamSection;
