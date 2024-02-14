"use client"

import { getFilterProducts, getProducts } from '@/app/merchant/[merchant_id]/products-listing/fetcher'

import { API_BASE_URL } from '@/constants/urls'
import { CategoryType } from '@/types/products'
import { ProductStore } from '@/store/productsStore'
import React from 'react'
import axios from 'axios'
import { branch_id } from '@/constants/products'
import { productFilterUpdate } from '@/app/actions/product'
import useSWR from 'swr'

const FilterButton = ({ category }: { category: CategoryType }) => {
    const { setProducts } = ProductStore()


    const FilterByCategory = async () => {
        const data = await getProducts({ filterParam: { "category": category.title } })

        setProducts(data)

    }
    return (
        <>
            {/* <form
                action={() => productFilterUpdate({ filter: category.title })}
            > */}
            {/* <input hidden name='filter' value={category.title} /> */}
            <button
                onClick={() => {
                    FilterByCategory()
                }}

                type='button'

                className='h-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500'
            >{category.title}</button>


            {/* </form> */}
        </>
    )
}

export default FilterButton