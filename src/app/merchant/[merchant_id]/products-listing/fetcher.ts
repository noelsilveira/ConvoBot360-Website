'use server'

import { API_BASE_URL } from "@/constants/urls";
import { branch_id } from "@/constants/products";
import {headers} from 'next/headers'
import { productFilterUpdate } from "@/app/actions/product";
import { setHeaders } from "@/app/auth/set-headers";

export type FilterParamType ={
  keywords: string
     category: string
}
export const getProducts = async ({filterParam}:{filterParam:FilterParamType|{}}
  // filter: string|null
  )=>{
  
  // const url = new URL(headers().get('filter'))
  // const {filter} = searchParams
  // const filters = await productFilterUpdate({filter})
  
  // console.log("Filters : ", filters);

    const my_headers = await setHeaders()
  var raw = JSON.stringify({
    "branch_id": branch_id,
    "filters":filterParam,
    // "filters": filters === null || filters === undefined ? {}: {"category": filters},
    "sort": {
      "price": "asc",
      "title": "desc"
    }
  });

  const res = await fetch(
    API_BASE_URL + `/estore/catalog/${1}/${20}`,
    {
      
      method: 'POST',
      redirect: 'follow',
      body: raw,
      headers:my_headers,
      next: {
        revalidate: 5, //cache data for 40 second
        tags: ['products'] 
      },
      // shallow: true
    }
    
  );
  const pro_obj = await res.json()
return pro_obj.detail
}


export const getCategories = async ()=>{

    const headers = await setHeaders()

  const res = await fetch(
    API_BASE_URL + `/estore/categories/${branch_id}`,
    {
      method: 'POST',
      redirect: 'follow',
      headers,
      next: {
        revalidate: 100, 
        // tags: ['categories']
      },
    }
  );
  const categories = await res.json()

return categories
}

export const getFilterProducts = async ({filterParam}:{filterParam:FilterParamType|{}}
  // filter: string|null
  )=>{
    'use client'

    const my_headers = await setHeaders()
  var raw = JSON.stringify({
    "branch_id": branch_id,
    "filters":filterParam,
    "sort": {
      "price": "asc",
      "title": "desc"
    }
  });

  const res = await fetch(
    API_BASE_URL + `/estore/catalog/${1}/${20}`,
    { 
      method: 'POST',
      redirect: 'follow',
      body: raw,
      headers:my_headers,
    }
    
  );
  const pro_obj = await res.json()
return pro_obj.detail
}