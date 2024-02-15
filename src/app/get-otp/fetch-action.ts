'use server'

import { API_BASE_URL } from "@/constants/urls";
import { setOTPHeaders } from "../auth/set-headers";

export const getOtpHandler = async ( prevState: {
    message: string;
  },
  formData: FormData,) => {
    'use server'
    const headers = await setOTPHeaders()
    console.log('p_n: ', formData.get('phone_number'));

    const res = await fetch(
        API_BASE_URL + `/estore/send-otp/${formData.get('phone_number')}`,
        {
            method: 'POST',
            redirect: 'follow',
            headers,
            cache: 'no-store'
        }
    );
    console.log(res.ok);
    if (res.ok) {
        return { message: `OTP sent seccessfull` };
    } else {
        return { message: `OTP sent Failed ` };
    }
}