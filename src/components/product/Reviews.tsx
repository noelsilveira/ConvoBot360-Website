import { reviews } from '@/constants/reviews';
import { cn } from '@/lib/utils';
import { StarIcon } from '@heroicons/react/20/solid';
import React from 'react';
import { TbPencil } from 'react-icons/tb';

const Reviews = () => {
  return (
    <div className='bg-white'>
      <div className='mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8'>
        <h2 className='text-lg font-medium text-gray-900'>Recent reviews</h2>
        <div className='mt-6 space-y-10 divide-y divide-gray-200 border-b border-t border-gray-200 pb-10'>
          {reviews.map((review) => (
            <div
              key={review.id}
              className='pt-10 lg:grid lg:grid-cols-12 lg:gap-x-8'
            >
              <div className='lg:col-span-8 lg:col-start-5 xl:col-span-9 xl:col-start-4 xl:grid xl:grid-cols-3 xl:items-start xl:gap-x-8'>
                <div className='flex items-center xl:col-span-1'>
                  <div className='flex items-center'>
                    {[0, 1, 2, 3, 4].map((rating) => (
                      <StarIcon
                        key={rating}
                        className={cn(
                          review.rating > rating
                            ? 'text-yellow-400'
                            : 'text-gray-200',
                          'h-5 w-5 flex-shrink-0'
                        )}
                        aria-hidden='true'
                      />
                    ))}
                  </div>
                  <p className='ml-3 text-sm text-gray-700'>
                    {review.rating}
                    <span className='sr-only'> out of 5 stars</span>
                  </p>
                </div>

                <div className='mt-4 lg:mt-6 xl:col-span-2 xl:mt-0'>
                  <h3 className='text-sm font-medium text-gray-900'>
                    {review.title}
                  </h3>

                  <div
                    className='mt-3 space-y-6 text-sm text-gray-500'
                    dangerouslySetInnerHTML={{ __html: review.content }}
                  />
                </div>
              </div>

              <div className='mt-6 flex items-center text-sm lg:col-span-4 lg:col-start-1 lg:row-start-1 lg:mt-0 lg:flex-col lg:items-start xl:col-span-3'>
                <p className='font-medium text-gray-900'>{review.author}</p>
                <time
                  dateTime={review.datetime}
                  className='ml-4 border-l border-gray-200 pl-4 text-gray-500 lg:ml-0 lg:mt-2 lg:border-0 lg:pl-0'
                >
                  {review.date}
                </time>
              </div>
            </div>
          ))}
        </div>
        {/* Write or submit a review */}
        <div className='mx-auto mt-10 max-w-lg text-center'>
          <h3 className='text-lg font-medium text-gray-900'>
            Share your thoughts
          </h3>
          <p className='mt-1 text-sm text-gray-600'>
            If you’ve used this product, share your thoughts with other
            customers
          </p>

          <a
            href='#'
            className='mt-6 inline-flex w-full items-center justify-center gap-2 rounded-md border border-gray-300 bg-white px-8 py-2 text-sm font-medium text-gray-900 hover:bg-gray-50 sm:w-auto lg:w-full'
          >
            Write a review
            <TbPencil />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Reviews;
