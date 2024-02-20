import Footer from './Footer';
import Header from './Header';
import { Inter } from 'next/font/google';
import MobileMenu from './MobileMenu';
import { cn } from '@/lib/utils';

type MainLayoutProps = React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLElement>,
  HTMLElement
>;

const inter = Inter({ subsets: ['latin'] });

const MainLayout = ({
  children,
  title,
  className,
  ...rest
}: MainLayoutProps) => {
  return (
    <>
      {/* Mobile menu */}
      <MobileMenu />

      {/* Top navigation */}
      <Header />
      <main className={cn(`${inter} ${className}`)} {...rest}>
        {children}
      </main>
      <Footer />
    </>
  );
};

export default MainLayout;
