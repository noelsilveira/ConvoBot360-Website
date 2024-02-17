import Footer from '@/components/layout/Footer';
import MobileMenu from '@/components/layout/MobileMenu';
import MerchantHeader from '@/components/layout/merchant-layout/MerchantHeader';
import { cn } from '@/lib/utils';
import { ProductListingParamsType } from '@/types/products';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

const MerchantLayout = ({
  children,
  params,
}: Pick<ProductListingParamsType, 'params'> & {
  children: React.ReactNode;
}) => {
  return (
    <>
      <div>
        {/* Mobile menu */}
        <MobileMenu />

        {/* Top navigation */}
        <MerchantHeader params={params} />
        <main className={cn(`${inter}`)}>{children}</main>
        {/* <Footer /> */}
      </div>
    </>
  );
};

export default MerchantLayout;
