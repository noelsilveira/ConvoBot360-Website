import type { NextApiRequest, NextApiResponse } from 'next';

import { TOKEN_NAME } from '@/constants/urls';
import { serialize } from 'cookie';

async function signIn(req: NextApiRequest, res: NextApiResponse) {
  const username = req.body.username;
  const password = req.body.password;

  const credential = {
    username,
    password,
  };

  let formData = new FormData();
  formData.append('username', username);
  formData.append('password', password);

  // console.log('FD: ',formData);

  const response = await fetch(
    'https://api-uat-ap-south-1-eks.sendbip.com/v1/estore/token',
    {
      method: 'POST',
      // credential,
      body: formData,
      redirect: 'follow',
    }
  );

  const data = await response.json();
  // console.log('response: ', data);

  res.setHeader('Set-Cookie', [
    serialize(TOKEN_NAME, `${data.access_token}`, {
      httpOnly: true,
      secure: process.env.NODE_ENV !== 'development',
      maxAge: 300,
      sameSite: 'strict',
      path: '/',
    }),
  ]);
  res.status(200).json({ message: 'Cookie set successful!', success: true });
}

export default signIn;
