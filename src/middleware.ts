import { NextRequest, NextResponse } from 'next/server';

import { TOKEN_NAME } from '@/constants/urls';

export function middleware(request: NextRequest) {
   console.log('A_T: ',request.cookies.has(TOKEN_NAME));
   let res
   if(!request.cookies.has(TOKEN_NAME)){
    res = deleteToken()
   }
 const expiry =  request.cookies.get('expiry')
 const expiry_date = Number(expiry?.value) // in seconds

 let date = new Date().toString();
const current_date = new Date(date).getTime(); // in Seconds


if(current_date>expiry_date){
  res=  deleteToken()
}

console.log(current_date,' ',expiry_date);

 console.log(current_date>expiry_date);

 return res
}

const deleteToken = async ()=>{
    const response = NextResponse.next()
    response.cookies.delete(TOKEN_NAME)
    response.cookies.delete('expiry')
    response.cookies.delete('token_type')

   return response

}
