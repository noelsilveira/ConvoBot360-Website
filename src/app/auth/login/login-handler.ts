'use server';

import axios from "axios";

export const handleSigin = async (event: React.SyntheticEvent<HTMLFormElement>, {username, password}:{username: string; password:string}) => {
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
        const response = await axios.post('https://api-uat-ap-south-1-eks.sendbip.com/v1/estore/token', formData,
            // { headers: { redirect: 'follow' } }
        );
        // const response = await fetch(
        //     'https://api-uat-ap-south-1-eks.sendbip.com/v1/estore/token',
        //     {``
        //       method: 'POST',
        //       // credential,
        //       body: data,
        //       redirect: 'follow',
        //     }
        //   );

        // const d = await response.json();
        console.log('response: ', response.data);
        // toast.success('Successfully Login');
        // router.push('/organiser/home');
        // setLoading(false);
    } catch (e: any) {
        console.log(e);
        // toast.error('Cannot Login');
        // setLoading(false);
    }
    // console.log({
    //   email: email.value,
    //   password: sha256.hmac(`some-key-here ${email.value}`, password.value!),
    // });
};