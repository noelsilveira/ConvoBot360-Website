import { ChangeEvent } from 'react';
import { cn } from '@/lib/utils';

type FilterRadioGroupProps = {
  title: string;
  items: {
    value: string;
    label: string;
  }[];
  value: any;
  handleChange: (...args: any[]) => void;
};

const FilterRadioGroup = ({
  title,
  items,
  value,
  handleChange,
}: FilterRadioGroupProps) => {
  return (
    <div className='flex flex-col gap-x-3 gap-y-3'>
      <label className='text-base font-semibold text-gray-900'>{title}</label>
      <fieldset className='mt-4'>
        <legend className='sr-only'>sort method</legend>
        <div className='space-y-4'>
          {items?.map((item, index) => (
            <div
              key={item.value + index}
              onChange={(e) =>
                handleChange(
                  e as unknown as ChangeEvent<HTMLButtonElement>,
                  item.value
                )
              }
              className='group flex items-center'
            >
              <input
                type='radio'
                id={item.value}
                name={item.label}
                value={item.value}
                // checked={item.value === value}
                className='appearance-none border-gray-300 text-indigo-600 focus:ring-indigo-600'
              />
              <label
                htmlFor={item.value}
                className={cn(
                  'block cursor-pointer text-sm font-medium leading-6 text-gray-600 duration-150 ease-out group-hover:text-gray-800',
                  item.value === value ? 'text-gray-900' : ''
                )}
              >
                {item.label}
              </label>
            </div>
          ))}
        </div>
      </fieldset>
    </div>
  );
};

export default FilterRadioGroup;
