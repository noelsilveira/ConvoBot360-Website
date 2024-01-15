import { cn } from '@/lib/utils';
import {
  ArrowLongLeftIcon,
  ArrowLongRightIcon,
} from '@heroicons/react/20/solid';

export default function Pagination() {
  return (
    <nav className=' mt-6 flex items-center justify-between border-gray-200 px-2 sm:px-0'>
      <div className='-mt-px flex w-0 flex-1'>
        <a
          href='#'
          className='inline-flex items-center border-transparent py-2 pr-1 text-sm font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700'
        >
          <ArrowLongLeftIcon
            className='mr-3 h-5 w-5 text-gray-400'
            aria-hidden='true'
          />
          Previous
        </a>
      </div>
      <div className='hidden gap-x-1 md:-mt-px md:flex'>
        <PageNumber number={1} />
        {/* Current: "border-brand-500 text-brand-600", Default: "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300" */}
        <PageNumber active number={2} />
        <PageNumber number={3} />
        {/* in between pages */}
        <span className='inline-flex items-center border-transparent px-4 py-2 text-sm font-medium text-gray-500'>
          ...
        </span>

        <PageNumber number={8} />
        <PageNumber number={9} />
        <PageNumber number={10} />
      </div>
      <div className='-mt-px flex w-0 flex-1 justify-end'>
        <a
          href='#'
          className='inline-flex items-center border-transparent py-2 pl-1 text-sm font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700'
        >
          Next
          <ArrowLongRightIcon
            className='ml-3 h-5 w-5 text-gray-400'
            aria-hidden='true'
          />
        </a>
      </div>
    </nav>
  );
}

const PageNumber = ({
  active = false,
  number,
  link = '#!',
}: {
  active?: boolean;
  number: number;
  link?: string;
}) => {
  return (
    <a
      href={link}
      aria-current={active ? 'page' : 'false'}
      className={cn(
        'inline-flex items-center rounded border-transparent px-2 py-2 text-sm font-medium ',
        active
          ? 'bg-brand-500 text-brand-50'
          : 'text-gray-500 hover:border-gray-300 hover:text-gray-700'
      )}
    >
      {number}
    </a>
  );
};
