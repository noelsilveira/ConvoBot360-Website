'use client';

import { Suspense, useEffect, useState } from 'react';
import { ProductOptionsType, ProductsType } from '@/types/products';
import WhatsappProductListInModal from './WhatsappProductListModal';
import { useRouter } from 'next/navigation';
import { addToCartModalAction } from '@/app/actions/product-actions';
import { ProductVariantSubmitButton } from './ProductVariantSubmitButton';
import { ProductVariantModalWrapper } from './ProductVariantModalWrapper';

import { useCartStore } from '@/store/cartStore';
import MultipleSelectOptionInModal from './MultipleSelectOptionInModal';
import SingleSelectOptionInModal from './SingleSelectOptionInModal';

const ProductAddToCartButtonWithModal = ({
  product,
  size = 'small',
  branch_id,
}: {
  product: ProductsType;
  branch_id?: string;
  size?: 'small' | 'large';
}) => {
  const [quantity, setQuantity] = useState(1);
  const [open, setOpen] = useState(false);
  const router = useRouter();
  const { updateCartCount } = useCartStore();

  const [activeOption, setActiveOption] = useState();
  const [activeOptionPrice, setActiveOptionPrice] = useState<number>(
    product.price
  );

  const findOptionPrice = (): ProductOptionsType['price'] => {
    const optionPrice = product.options
      .filter((x) => x.id === activeOption)
      .map((x) => x.price)
      ?.at(0);
    return optionPrice || 0;
  };

  useEffect(() => {
    if (
      activeOptionPrice !== undefined ||
      activeOptionPrice !== product.price
    ) {
      setActiveOptionPrice((product.price + findOptionPrice()) * quantity);
    }
  }, [activeOption, quantity]);

  return (
    <ProductVariantModalWrapper
      open={open}
      setOpen={setOpen}
      product={product}
      size={size}
    >
      <form
        action={async (formData: FormData) => {
          const response = await addToCartModalAction(formData);
          console.log(response.products.length);
          response.products && updateCartCount(response.products.length);

          if (response?.order_id) {
            const params = new URLSearchParams(
              JSON.stringify(response.order_id)
            );
            setOpen(false);
            router.refresh();
          }
        }}
        className='flex flex-col'
      >
        <div className='w-full'>
          <WhatsappProductListInModal product={product} />
        </div>

        {/* {product.options?.length > 0 && (
          <OptionHeading>
            Choose Options ({product.options.length} options)
          </OptionHeading>
        )} */}

        <div className='no-scrollbar max-h-[50svh] overflow-y-auto'>
          <div className='flex w-full flex-col items-center justify-center gap-2'>
            {product.optionsGroups &&
              product.optionsGroups?.map((option_group, oIndex) => (
                <div
                  className='w-full'
                  key={'option-group-' + option_group.id + oIndex}
                >
                  <OptionHeading>{option_group.title}</OptionHeading>

                  <div className='py-3'>
                    {option_group.maxSelectable === 1
                      ? option_group.options.map((variant, sIndex) => (
                          <SingleSelectOptionInModal
                            key={'variant-item-' + variant.optionId + sIndex}
                            product={product}
                            option_group={option_group.id}
                            variant={variant}
                            maxSelectable={1}
                          />
                        ))
                      : option_group.maxSelectable > 1 &&
                        option_group.options.map((variant, mIndex) => (
                          <MultipleSelectOptionInModal
                            key={'variant-item-' + variant.optionId + mIndex}
                            product={product}
                            variant={variant}
                            maxSelectable={option_group.maxSelectable}
                          />
                        ))}
                  </div>
                </div>
              ))}
          </div>
        </div>

        <div className='mt-6 flex flex-col gap-2'>
          <input type='hidden' defaultValue={branch_id} name='branch_id' />

          <input type='hidden' defaultValue={product.id} name='product_id' />

          <div className='mb-4 hidden flex-col gap-1'>
            <label htmlFor='total' className='text-sm text-gray-500'>
              Total
            </label>
            <p className='font-semibold text-gallery-900'>
              {product.currency} {activeOptionPrice}
            </p>
          </div>
        </div>
        {/* Submit button */}

        <ProductVariantSubmitButton />
      </form>
    </ProductVariantModalWrapper>
  );
};

export default ProductAddToCartButtonWithModal;

export const OptionHeading = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className='sticky top-0 z-10 flex w-full bg-white py-1 text-left'>
      <label
        htmlFor='variants-heading'
        className='text-xs font-medium uppercase text-gallery-400'
      >
        {children}
      </label>
    </div>
  );
};
