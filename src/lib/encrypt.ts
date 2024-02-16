export const key = Buffer.from(
  crypto.getRandomValues(new Uint8Array(32))
).toString('base64');

// ENCRYPTION
export const encryptSymmetric = async (plaintext: string, key: string) => {
  const iv = crypto.getRandomValues(new Uint8Array(12));
  const encodedPlaintext = new TextEncoder().encode(plaintext);
  const secretKey = await crypto.subtle.importKey(
    'raw',
    Buffer.from(key, 'base64'),
    {
      name: 'AES-GCM',
      length: 256,
    },
    true,
    ['encrypt', 'decrypt']
  );

  const cipherText = await crypto.subtle.encrypt(
    {
      name: 'AES-GCM',
      iv,
    },
    secretKey,
    encodedPlaintext
  );

  return {
    cipherText: Buffer.from(cipherText).toString('base64'),
    iv: Buffer.from(iv).toString('base64'),
  };
};

//   DECRYPTION
export const decryptSymmetric = async (
  cipherText: string,
  iv: string,
  key: string
) => {
  const secretKey = await crypto.subtle.importKey(
    'raw',
    Buffer.from(key, 'base64'),
    {
      name: 'AES-GCM',
      length: 256,
    },
    true,
    ['encrypt', 'decrypt']
  );

  const cleartext = await crypto.subtle.decrypt(
    {
      name: 'AES-GCM',
      iv: Buffer.from(iv, 'base64'),
    },
    secretKey,
    Buffer.from(cipherText, 'base64')
  );
  return new TextDecoder().decode(cleartext);
};
