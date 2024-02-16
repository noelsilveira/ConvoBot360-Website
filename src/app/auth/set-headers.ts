'use server';
import { branch_id } from '@/constants/products';
import { TOKEN_NAME } from '@/constants/urls';
import { cookies } from 'next/headers';

export const setOTPHeaders = async () => {
  const static_branch_id = 'b3cac885-ba05-4d0c-8a61-ac77da18a84d';
  const static_token =
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI5MTk4MjA4NTk2NjciLCJleHAiOjE3MDgwMzQyNzN9.BmGK0rCkGp4fkRvZBuWgE09H-VGDq7fqiz9E1zuOf3s';

  let token = cookies().get(TOKEN_NAME);
  if (!token) {
    // await setFixedTokenFromAPI();
    token = cookies().get(TOKEN_NAME);
    console.log('Token header: ', token);
  }

  const myHeaders = new Headers();
  myHeaders.append('Content-Type', 'application/json');
  myHeaders.append('Authorization', `Bearer ${token?.value}`);
  // myHeaders.append('Authorization', `Bearer ${static_token}`);
  // console.log('headers: ',myHeaders);
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

// export const setFixedTokenFromAPI = async () => {
//   const static_token =
//     'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJzaWRkaGVzaCIsImV4cCI6MTcwODAzMjYyMn0.doJum6vIYIc1NpXageClYSqNZ0-i0xTgdANAza0YZ7U';
//   cookies().set({
//     name: TOKEN_NAME,
//     value: static_token,
//     httpOnly: true,
//     priority: 'high',
//     secure: true,
//     path: '/',
//   });
//   return static_token;
// };
