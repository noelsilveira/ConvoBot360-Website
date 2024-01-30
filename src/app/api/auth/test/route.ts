import { TOKEN_NAME } from '@/constants/urls';
import { NextApiRequest, NextApiResponse } from 'next';
import { serialize } from 'cookie';

export type TokenType = {
  access_token: string;
  expiry: number;
  token_type: string;
};

async function POST(req: NextApiRequest, res: NextApiResponse) {
  const { username, password } = req.body;

  const formData = new FormData();
  formData.append('username', username);
  formData.append('password', password);
  const response = await fetch(
    'https://api-uat-ap-south-1-eks.sendbip.com/v1/estore/token',
    {
      method: 'POST',
      // credential,
      body: formData,
      redirect: 'follow',
    }
  );
  //   const token_object = await response.json();
  //   console.log('New API: ', token_object);
  const { token_object }: { token_object: TokenType } = req.body;

  res.setHeader('Set-Cookie', [
    serialize(TOKEN_NAME, `${token_object.access_token}`, {
      httpOnly: true,
      secure: process.env.NODE_ENV !== 'development',
      maxAge: token_object.expiry,
      sameSite: 'strict',
      path: '/',
    }),
  ]);
  res.status(200).json({ message: 'Cookie set successful!', success: true });
}
