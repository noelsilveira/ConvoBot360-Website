'use client'

import { API_BASE_URL } from '@/constants/urls'
import React from 'react'
import axios from 'axios'

const AddToCart = () => {
    const addToCartHandler = async () => {
        const data = {
            "branch_id": "b3cac885-ba05-4d0c-8a61-ac77da18a84d",
            "products": [
                {
                    "product_id": "2b1bcdec-a4e3-4b98-8bb3-2383ba5b4d57",
                    "quantity": 5,
                    "option_id": "69b9cb54-8720-487f-8158-9375ac72ac6b"
                }
            ]
        }
        try {
            const res = await axios.post(`${API_BASE_URL}/estore/cart`, data)
            console.log(res.data);
        }
        catch (e) {
            console.log(e);
        }

    }
    return (
        <button
            onClick={() => {
                addToCartHandler();
            }}
            className='mt-8 flex w-full items-center justify-center rounded-md border border-transparent bg-brand-500 px-8 py-3 text-base font-medium text-white duration-200 ease-out hover:bg-brand-600 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:ring-offset-2'
        >
            Add to cart
        </button>
    )
}

export default AddToCart