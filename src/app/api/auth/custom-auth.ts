import cookie from 'cookie';
import { NextApiRequest, NextApiResponse } from 'next';
import { jwtDecode } from 'jwt-decode';

const TOKEN_NAME = 'CB360_header';

export type CookieObjectType = {
  expiry: number;
  access_token: string;
  token_type: string;
};

const signInAndSetToken = async (req: NextApiRequest, res: NextApiResponse) => {
  const cookies = cookie.parse(req.headers?.cookie ?? '');
  const appCookie = cookies?.[TOKEN_NAME] ?? '';
  const parsedCookies = appCookie ? JSON.parse(appCookie) : {};
  const access_token = parsedCookies?.access_token ?? null;
  const expiry = parsedCookies?.expiry ?? null;

  if (!access_token) {
    res.status(200).json({ success: true, token: null });
  }
  //   const { exp } = jwtDecode(expiry);
  //   const isAccessTokenExpired = exp ? Date.now() / 1000 > expiry : true;
  const isAccessTokenExpired = true;

  const token_type = parsedCookies?.token_type;

  // form section
  const username = req.body.username;
  const password = req.body.password;

  // const { expiresIn, access_token, token_type } = req.body;

  const credential = {
    username,
    password,
  };

  var formData = new FormData();
  formData.append('username', username);
  formData.append('password', password);

  async function getNewAccessToken() {
    const response = await fetch(
      'https://api-uat-ap-south-1-eks.sendbip.com/v1/estore/token',
      {
        method: 'POST',
        // credential,
        body: formData,
        redirect: 'follow',
      }
    );
    return response.json();
  }
  // "/api/custom-auth"
  // If there is no token or if the token is expired
  if (isAccessTokenExpired) {
    try {
      const data: CookieObjectType = await getNewAccessToken();
      // console.log('Data: ', data);
      const cookieObject = {
        expiry: data.expiry,
        access_token: data.access_token,
        token_type: data.token_type,
      };

      res.setHeader('Set-Cookie', [
        cookie.serialize('___cb360', `Bearer ${data.access_token}`, {
          httpOnly: true,
          // secure: process.env.NODE_ENV !== 'development',
          // maxAge: 3600,
          // sameSite: 'strict',
          path: '/',
        }),
      ]);
      res
        .status(200)
        .json({ message: 'Cookie set successful!', success: true });

      //   res.setHeader(
      //     'Set-Cookie',
      //     cookie.serialize(TOKEN_NAME, JSON.stringify(cookieObject), {
      //       httpOnly: true,
      //       secure: true,
      //       maxAge: data.expiry,
      //       sameSite: 'strict',
      //       path: '/',
      //     })
      //   );
    } catch (error) {
      // if refresh token fails to get new access token
      res.status(400).json({
        success: false,
        message: 'Please logout user or push user to login route',
      });
    }

    res.status(200).json({
      success: true,
      token: parsedCookies?.access_token ?? null,
      message: 'Cookie set successful!',
    });
  }
};

export const setTokenCookie = ({
  expiry,
  access_token,
  token_type,
}: CookieObjectType) => {
  return fetch('/api/login', {
    method: 'post',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ expiry, access_token, token_type }),
  });
};

export const getTokenCookie = () => {
  return fetch('/api/access', {
    method: 'post',
    headers: {
      'Content-Type': 'application/json',
    },
  });
};

export default signInAndSetToken;

//   [How to handle submit data]
//   const handleSubmit = async (values) => {
//     try {
//       const { data } = await login({
//         variables: {
//           Username: SOME_NAME,
//           Password: SOME_PASSWORD,
//         },
//       });

//       const { AccessToken, ExpiresIn, RefreshToken } = data;
//       /**
//        * Setting http-only cookie
//        * */
//       await setTokenCookie(ExpiresIn, AccessToken, RefreshToken);
//     } catch (error) {
//       console.log("errror :", error);
//     }
//   };
