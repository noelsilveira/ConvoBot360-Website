'use server';
import { static_otp_token } from '@/constants/auth';
import { TOKEN_NAME } from '@/constants/urls';
import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';

const OTP_TOKEN_NAME = 'OTP_TOKEN';

export const setOTPHeaders = async () => {
  let token = cookies().get(OTP_TOKEN_NAME);
  if (!token) {
    await setFixedTokenFromAPI(OTP_TOKEN_NAME, static_otp_token);
    token = cookies().get(OTP_TOKEN_NAME);
  }

  const myHeaders = new Headers();
  myHeaders.append('Authorization', `Bearer ${token?.value}`);

  return myHeaders;
};

export const setSessionHeader = async () => {
  let token = cookies().get(TOKEN_NAME);
  if (!token) {
    // await setFixedTokenFromAPI(TOKEN_NAME, static_access_token);
    // token = cookies().get(TOKEN_NAME);
    redirect('/');
  }

  const myHeaders = new Headers();
  myHeaders.append('Content-Type', 'application/json');
  myHeaders.append('Authorization', `Bearer ${token?.value}`);

  return myHeaders;
};

export const getSessionHeaderWithNoJSON = async () => {
  let token = cookies().get(TOKEN_NAME);
  if (!token) {
    redirect('/');
  }

  const myHeaders = new Headers();
  myHeaders.append('Authorization', `Bearer ${token?.value}`);

  return myHeaders;
};

// export const setBranchId = async (branch_id: string) => {
//   cookies().set({
//     name: 'branch_id',
//     value: branch_id,
//     httpOnly: true,
//     priority: 'high',
//     secure: true,
//     path: '/',
//   });
// };

export const setFixedTokenFromAPI = async (
  token_name: string,
  token_value: string
) => {
  cookies().set({
    name: token_name,
    value: token_value,
    httpOnly: true,
    priority: 'high',
    secure: true,
    path: '/',
  });
};
