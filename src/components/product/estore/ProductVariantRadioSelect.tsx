import { cn } from '@/lib/utils';
import { ProductOptionsGroupsType, ProductsType } from '@/types/products';
import { RadioGroup } from '@headlessui/react';
import { Suspense, useState } from 'react';
import { TbCheck, TbSquare } from 'react-icons/tb';

export const ProductVariantRadioSelect = ({
  option_group,
  product,
}: {
  option_group: ProductOptionsGroupsType['options'];
  product: ProductsType;
}) => {
  const [selected, setSelected] = useState(option_group.at(0)?.optionId);

  return (
    <>
      <RadioGroup value={selected} onChange={setSelected} name='items'>
        <RadioGroup.Label className='sr-only'>Options Group</RadioGroup.Label>
        <div className='space-y-2 py-4'>
          {option_group.map((variant, vIndex) => (
            <Suspense
              fallback={
                <div className='text-sm text-gallery-200'>
                  Loading options...
                </div>
              }
              key={'option-' + variant.optionId + vIndex}
            >
              <RadioGroup.Option
                key={variant.optionId}
                value={variant.optionId}
                className={({ active, checked }) =>
                  cn(
                    `${active ? 'border-blue-200 bg-white' : ''}
                  ${
                    checked
                      ? 'border-blue-200 bg-blue-50 text-white'
                      : 'border-white'
                  }
                    relative flex cursor-pointer rounded-lg border-2 px-3 py-2 focus:outline-none`
                  )
                }
              >
                {({ active, checked }) => (
                  <>
                    <div className='flex w-full items-center justify-between'>
                      <div className='inline-flex items-center justify-between gap-6 text-sm'>
                        <RadioGroup.Label
                          as='p'
                          className={cn(
                            `font-medium capitalize  ${
                              checked ? 'text-gallery-900' : 'text-gallery-500'
                            }`
                          )}
                        >
                          {variant.name}
                        </RadioGroup.Label>
                        <RadioGroup.Description
                          as='span'
                          className={cn(
                            `inline font-medium ${
                              checked ? 'text-gallery-900' : 'text-gallery-500'
                            }`
                          )}
                        >
                          <span>
                            + {product.currency} {variant.price}
                          </span>
                        </RadioGroup.Description>
                      </div>
                      {checked ? (
                        <div className='shrink-0 text-blue-600'>
                          <TbCheck className='h-6 w-6' />
                        </div>
                      ) : (
                        <div className='shrink-0 text-gallery-400'>
                          <TbSquare className='h-6 w-6' />
                        </div>
                      )}
                    </div>
                  </>
                )}
              </RadioGroup.Option>
            </Suspense>
          ))}
        </div>
      </RadioGroup>
    </>
  );
};
