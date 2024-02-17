// import { decryptSymmetric, encryptSymmetric } from '@/lib/encrypt';
// import { NextRequest } from 'next/server';

// export async function CryptoAPIRoute(request: NextRequest) {
//   const key = Buffer.from(crypto.randomUUID().slice(0, 32)).toString('base64');
//   if (request.nextUrl.pathname.startsWith('/wa')) {
//     const { host, pathname, search } = request.nextUrl;

//     const encrypted = await encryptSymmetric(search, key);
//     const plaintext = await decryptSymmetric(
//       encrypted.cipherText,
//       encrypted.iv,
//       key
//     );
//     const t = request.nextUrl.search.replace(search, encrypted.cipherText);
//     console.log('Encrypted in middleware: ', t);
//     // console.log('Decrypted from middleware:', plaintext);

//     return;
//   }
// }
