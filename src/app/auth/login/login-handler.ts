'use server';

import axios from 'axios';

export const handleSigin = async (
  event: React.SyntheticEvent<HTMLFormElement>,
  { username, password }: { username: string; password: string }
) => {
  event.preventDefault();
  // const { email, password } = event.currentTarget;

  const data = {
    username: username,
    password: password,
  };

  console.log(data);

  let formData = new FormData();
  formData.append('username', username);
  formData.append('password', password);

  try {
    const response = await axios.post(
      'https://api-uat-ap-south-1-eks.sendbip.com/v1/estore/token',
      formData
    );
    console.log('response: ', response.data);
  } catch (e: any) {
    console.log(e);
  }
  // console.log({
  //   email: email.value,
  //   password: sha256.hmac(`some-key-here ${email.value}`, password.value!),
  // });
};
