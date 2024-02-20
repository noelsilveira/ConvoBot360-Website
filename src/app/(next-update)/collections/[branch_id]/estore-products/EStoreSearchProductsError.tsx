import { ProductSearchTooShortType, ProductsType } from '@/types/products';

const EStoreSearchProductsError = ({
  products,
}: {
  products: ProductsType[] | ProductSearchTooShortType[] | string;
}) => {
  const noItemsMessage = 'No Items Found';

  const tooShortObject = products.at(0) as ProductSearchTooShortType;

  return (
    <>
      {products === noItemsMessage && (
        <div className='flex flex-col items-center justify-center py-6'>
          <p className='text-center text-sm text-gallery-500'>
            {noItemsMessage}
          </p>
        </div>
      )}
      {tooShortObject.type === 'string_too_short' && (
        <div className='flex flex-col items-center justify-center py-6'>
          <p className='text-center text-sm text-gallery-500'>
            {tooShortObject.msg}
          </p>
        </div>
      )}
    </>
  );
};

export default EStoreSearchProductsError;
