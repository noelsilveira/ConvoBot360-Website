import { decryptSymmetric, encryptSymmetric, key } from '@/lib/encrypt';
import React from 'react';

// decryption
const text =
  '?c=919820859667&b=b3cac885-ba05-4d0c-8a61-ac77da18a84d&i=cb360-logo.png';

const TestEncrypt = async () => {
  const encrypted = await encryptSymmetric(text, key);
  const plaintext = await decryptSymmetric(
    encrypted.cipherText,
    encrypted.iv,
    key
  );
  return (
    <div>
      <p>plain text: {text}</p>
      <p>Encrypted text: {encrypted.cipherText}</p>
      <p>Decrypted text: {plaintext}</p>
    </div>
  );
};

export default TestEncrypt;
