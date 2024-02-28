import { Metadata } from 'next';
import '@/styles/global.css';
import CartIconHydration from '@/components/checkout/CartIconHydration';

export const metadata: Metadata = {
  title: 'CB360 | Home - Your one stop e-commerce solution for the future',
  description:
    'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quibusdam at minima ratione fuga vitae voluptate nobis expedita excepturi, debitis praesentium molestiae. Necessitatibus natus pariatur laudantium, dolore itaque provident placeat suscipit.',
};

export default function RootLayout({
  // Layouts must accept a children prop.
  // This will be populated with nested layouts or pages
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en' className='scroll-smooth' suppressHydrationWarning={true}>
      <head>
        <meta name='theme-color' content='#fd9c0a'></meta>
      </head>
      <body className='antialiased'>
        <CartIconHydration />
        {children}
      </body>
    </html>
  );
}
