'use server';

import axios from 'axios';

/**
 * @deprecated handleSigIn
 */
export const handleSigIn = async (
  event: React.SyntheticEvent<HTMLFormElement>,
  { username, password }: { username: string; password: string }
) => {
  event.preventDefault();
  const data = {
    username: username,
    password: password,
  };

  let formData = new FormData();
  formData.append('username', username);
  formData.append('password', password);

  try {
    const response = await axios.post(
      'https://api-uat-ap-south-1-eks.sendbip.com/v1/estore/token',
      formData
    );
  } catch (e: any) {
    console.log(e);
  }
};
