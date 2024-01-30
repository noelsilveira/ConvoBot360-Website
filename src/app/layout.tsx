import { Metadata } from 'next';
import '@/styles/global.css';

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
    <html lang='en' className='scroll-smooth'>
      <body className='antialiased'>{children}</body>
    </html>
  );
}
