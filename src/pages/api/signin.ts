import type { NextApiRequest, NextApiResponse } from "next";

import { serialize } from "cookie";

export default async function (req: NextApiRequest, res: NextApiResponse) {
  const username = req.body.username;
  const password = req.body.password;

  const credential = {
    username,
    password,
  };

  var formdata = new FormData();
formdata.append("username", username);
formdata.append("password",password);

  const response = await fetch("https://api-uat-ap-south-1-eks.sendbip.com/v1/estore/token", {
    method: "POST",
    // credential,
    body: formdata,
    redirect: 'follow',
  });

  const data = await response.json();
  console.log('response: ', data);

  res.setHeader("Set-Cookie", [
    serialize("headers",  `Bearer ${data.access_token}`, {
      httpOnly: true,
      // secure: true,
      path: "/",
    }),
   
  ]);
  res.status(200).json({ message: "Successfully set cookie" });
}
