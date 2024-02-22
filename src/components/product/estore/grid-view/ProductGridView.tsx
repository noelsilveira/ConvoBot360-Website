import Link from 'next/link';
import ProductAddToCartButtonWithModal from '../ProductAddToCartButtonWithModal';
import ProductListImage from '../ProductListImage';
import { ProductListingParamsType, ProductsType } from '@/types/products';

const ProductGridView = ({
  products,
  params,
  branch_id,
}: ProductListingParamsType & {
  products: ProductsType[];
  branch_id?: string;
}) => {
  return (
    <div className='mx-0 grid grid-cols-2 border-l border-t border-gray-200 md:-mx-px md:grid-cols-3 lg:grid-cols-4'>
      {products &&
        products.map((product, index) => (
          <div
            key={'product-grid-view-id-' + product.id + index}
            className='relative border-b border-r border-gray-200 p-3'
          >
            <Link
              href={`/merchant/${params.merchant_id}/product/product-detail/${product.id}`}
            >
              <div className='aspect-h-1 aspect-w-1 group overflow-hidden rounded-lg bg-gray-200 group-hover:opacity-75'>
                {/* Image with broken url */}
                <ProductListImage product={product} />
              </div>
            </Link>

            <div className='flex items-start justify-between pb-0 pt-2 sm:pb-2'>
              <Link
                href={`/merchant/${params.merchant_id}/product/product-detail/${product.id}`}
                className='flex w-full flex-col text-start'
              >
                <h3 className='line-clamp-1 text-sm font-medium capitalize text-gray-950'>
                  <span>{product.title}</span>
                </h3>

                <p className='mt-1 text-xs font-semibold text-gallery-500'>
                  {product.currency} {product.price}
                </p>
                {product.category && (
                  <p className='text-xs font-medium text-gallery-400'>
                    {product.category}
                  </p>
                )}
              </Link>

              <div className='flex flex-1 flex-col items-end justify-end'>
                <ProductAddToCartButtonWithModal
                  branch_id={branch_id}
                  product={product}
                />
              </div>
            </div>
          </div>
        ))}
    </div>
  );
};

export default ProductGridView;
