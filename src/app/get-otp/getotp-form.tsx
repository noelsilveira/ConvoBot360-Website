'use client'

import { useFormState, useFormStatus } from 'react-dom'

import React from 'react'
import { getOtpHandler } from './fetch-action'

const initialSate = {
    message: '',
}
const GetOtpForm = () => {
    const [state, formAction] = useFormState(getOtpHandler, initialSate)
    return (
        <form action={formAction} className="space-y-6"  >
            <div>
                <label htmlFor="phone_number" className="block text-sm font-medium leading-6 text-gray-900">
                    Enter Phone number
                </label>
                <div className="mt-2">
                    <input
                        id="phone_number"
                        name="phone_number"
                        type="text"
                        autoComplete="phone_number"
                        required
                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                </div>
            </div>

            <div>
                <SubmitButton />
            </div>
            <p>{state?.message}</p>
        </form>
    )
}

export default GetOtpForm

const SubmitButton = () => {
    const { pending } = useFormStatus()
    return (
        <button
            type="submit" area-disabled={pending}
            className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >
            Get OTP
        </button>
    )
}