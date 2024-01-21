import { Html, Head, Main, NextScript } from 'next/document';

export const metadata = {
  title: 'CB360 | Home - Your one stop e-commerce solution for the future',
  description:
    'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quibusdam at minima ratione fuga vitae voluptate nobis expedita excepturi, debitis praesentium molestiae. Necessitatibus natus pariatur laudantium, dolore itaque provident placeat suscipit.',
};

export default function Document() {
  return (
    <Html lang='en' className='scroll-smooth'>
      <Head />
      <body className='antialiased'>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
