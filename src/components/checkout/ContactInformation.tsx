'use client';
import { cn } from '@/lib/utils';
import { RadioGroup } from '@headlessui/react';
import { CheckCircleIcon } from '@heroicons/react/20/solid';
import React, { useState } from 'react';

const deliveryMethods = [
  {
    id: 1,
    title: 'Standard',
    turnaround: '4–10 business days',
    price: '$5.00',
  },
  { id: 2, title: 'Express', turnaround: '2–5 business days', price: '$16.00' },
];
const paymentMethods = [
  { id: 'credit-card', title: 'Credit card' },
  { id: 'paypal', title: 'PayPal' },
  { id: 'etransfer', title: 'eTransfer' },
];

const ContactInformation = () => {
  const [selectedDeliveryMethod, setSelectedDeliveryMethod] = useState(
    deliveryMethods[0]
  );
  return (
    <div>
      <div>
        <h2 className='text-2xl font-medium text-gray-900'>
          Contact information
        </h2>

        <div className='mt-4'>
          <label
            htmlFor='email-address'
            className='block text-sm font-medium text-gray-700'
          >
            Email address
          </label>
          <div className='mt-1'>
            <input
              type='email'
              id='email-address'
              name='email-address'
              autoComplete='email'
              placeholder='Enter your email'
              className='block w-full rounded-md border border-gray-300 px-4 py-2.5 font-medium shadow-sm focus:border-brand-500 focus:outline-brand-500 focus:ring-brand-500 sm:text-sm'
            />
          </div>
        </div>
      </div>

      <div className='mt-10 border-t border-gray-200 pt-10'>
        <h2 className='text-lg font-medium text-gray-900'>
          Shipping information
        </h2>

        <div className='mt-4 grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-4'>
          <div>
            <label
              htmlFor='first-name'
              className='block text-sm font-medium text-gray-700'
            >
              First name
            </label>
            <div className='mt-1'>
              <input
                type='text'
                id='first-name'
                name='first-name'
                placeholder='Enter your first name'
                autoComplete='given-name'
                className='block w-full rounded-md border border-gray-300 px-4 py-2.5 shadow-sm focus:border-brand-500 focus:outline-brand-500 focus:ring-brand-500 sm:text-sm'
              />
            </div>
          </div>

          <div>
            <label
              htmlFor='last-name'
              className='block text-sm font-medium text-gray-700'
            >
              Last name
            </label>
            <div className='mt-1'>
              <input
                type='text'
                id='last-name'
                name='last-name'
                placeholder='Enter your last name'
                autoComplete='family-name'
                className='block w-full rounded-md border border-gray-300 px-4 py-2.5 shadow-sm focus:border-brand-500 focus:outline-brand-500 focus:ring-brand-500 sm:text-sm'
              />
            </div>
          </div>

          <div className='sm:col-span-2'>
            <label
              htmlFor='company'
              className='block text-sm font-medium text-gray-700'
            >
              Company
            </label>
            <div className='mt-1'>
              <input
                type='text'
                name='company'
                id='company'
                className='block w-full rounded-md border border-gray-300 px-4 py-2.5 shadow-sm focus:border-brand-500 focus:outline-brand-500 focus:ring-brand-500 sm:text-sm'
              />
            </div>
          </div>

          <div className='sm:col-span-2'>
            <label
              htmlFor='address'
              className='block text-sm font-medium text-gray-700'
            >
              Address
            </label>
            <div className='mt-1'>
              <input
                type='text'
                name='address'
                id='address'
                autoComplete='street-address'
                className='block w-full rounded-md border border-gray-300 px-4 py-2.5 shadow-sm focus:border-brand-500 focus:outline-brand-500 focus:ring-brand-500 sm:text-sm'
              />
            </div>
          </div>

          <div className='sm:col-span-2'>
            <label
              htmlFor='apartment'
              className='block text-sm font-medium text-gray-700'
            >
              Apartment, suite, etc.
            </label>
            <div className='mt-1'>
              <input
                type='text'
                name='apartment'
                id='apartment'
                className='block w-full rounded-md border border-gray-300 px-4 py-2.5 shadow-sm focus:border-brand-500 focus:outline-brand-500 focus:ring-brand-500 sm:text-sm'
              />
            </div>
          </div>

          <div>
            <label
              htmlFor='city'
              className='block text-sm font-medium text-gray-700'
            >
              City
            </label>
            <div className='mt-1'>
              <input
                type='text'
                name='city'
                id='city'
                autoComplete='address-level2'
                className='block w-full rounded-md border border-gray-300 px-4 py-2.5 shadow-sm focus:border-brand-500 focus:outline-brand-500 focus:ring-brand-500 sm:text-sm'
              />
            </div>
          </div>

          <div>
            <label
              htmlFor='country'
              className='block text-sm font-medium text-gray-700'
            >
              Country
            </label>
            <div className='mt-1'>
              <select
                id='country'
                name='country'
                autoComplete='country-name'
                className='block w-full appearance-none rounded-md border border-gray-300 px-4 py-2.5 shadow-sm focus:border-brand-500 focus:outline-brand-500 focus:ring-brand-500 sm:text-sm'
              >
                <option>United States</option>
                <option>India</option>
                <option>United Kingdom</option>
              </select>
            </div>
          </div>

          <div>
            <label
              htmlFor='region'
              className='block text-sm font-medium text-gray-700'
            >
              State / Province
            </label>
            <div className='mt-1'>
              <input
                type='text'
                name='region'
                id='region'
                autoComplete='address-level1'
                className='block w-full rounded-md border border-gray-300 px-4 py-2.5 shadow-sm focus:border-brand-500 focus:outline-brand-500 focus:ring-brand-500 sm:text-sm'
              />
            </div>
          </div>

          <div>
            <label
              htmlFor='postal-code'
              className='block text-sm font-medium text-gray-700'
            >
              Postal code
            </label>
            <div className='mt-1'>
              <input
                type='text'
                name='postal-code'
                id='postal-code'
                autoComplete='postal-code'
                className='block w-full rounded-md border border-gray-300 px-4 py-2.5 shadow-sm focus:border-brand-500 focus:outline-brand-500 focus:ring-brand-500 sm:text-sm'
              />
            </div>
          </div>

          <div className='sm:col-span-2'>
            <label
              htmlFor='phone'
              className='block text-sm font-medium text-gray-700'
            >
              Phone
            </label>
            <div className='mt-1'>
              <input
                type='text'
                name='phone'
                id='phone'
                autoComplete='tel'
                className='block w-full rounded-md border border-gray-300 px-4 py-2.5 shadow-sm focus:border-brand-500 focus:outline-brand-500 focus:ring-brand-500 sm:text-sm'
              />
            </div>
          </div>
        </div>
      </div>

      <div className='mt-10 border-t border-gray-200 pt-10'>
        <RadioGroup
          value={selectedDeliveryMethod}
          onChange={setSelectedDeliveryMethod}
        >
          <RadioGroup.Label className='text-lg font-medium text-gray-900'>
            Delivery method
          </RadioGroup.Label>

          <div className='mt-4 grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-4'>
            {deliveryMethods.map((deliveryMethod) => (
              <RadioGroup.Option
                key={deliveryMethod.id}
                value={deliveryMethod}
                className={({ checked, active }) =>
                  cn(
                    checked ? 'border-transparent' : 'border-gray-300',
                    active ? 'ring-2 ring-brand-500' : '',
                    'relative flex cursor-pointer rounded-lg border bg-white p-4 shadow-sm focus:outline-none'
                  )
                }
              >
                {({ checked, active }) => (
                  <>
                    <span className='flex flex-1'>
                      <span className='flex flex-col'>
                        <RadioGroup.Label
                          as='span'
                          className='block text-sm font-medium text-gray-900'
                        >
                          {deliveryMethod.title}
                        </RadioGroup.Label>
                        <RadioGroup.Description
                          as='span'
                          className='mt-1 flex items-center text-sm text-gray-500'
                        >
                          {deliveryMethod.turnaround}
                        </RadioGroup.Description>
                        <RadioGroup.Description
                          as='span'
                          className='mt-6 text-sm font-medium text-gray-900'
                        >
                          {deliveryMethod.price}
                        </RadioGroup.Description>
                      </span>
                    </span>
                    {checked ? (
                      <CheckCircleIcon
                        className='h-5 w-5 text-brand-600'
                        aria-hidden='true'
                      />
                    ) : null}
                    <span
                      className={cn(
                        active ? 'border' : 'border-2',
                        checked ? 'border-brand-500' : 'border-transparent',
                        'pointer-events-none absolute -inset-px rounded-lg'
                      )}
                      aria-hidden='true'
                    />
                  </>
                )}
              </RadioGroup.Option>
            ))}
          </div>
        </RadioGroup>
      </div>

      {/* Payment */}
      <div className='mt-10 border-t border-gray-200 pt-10'>
        <h2 className='text-lg font-medium text-gray-900'>Payment</h2>

        <fieldset className='mt-4'>
          <legend className='sr-only'>Payment type</legend>
          <div className='space-y-4 sm:flex sm:items-center sm:space-x-10 sm:space-y-0'>
            {paymentMethods.map((paymentMethod, paymentMethodIdx) => (
              <div key={paymentMethod.id} className='flex items-center'>
                {paymentMethodIdx === 0 ? (
                  <input
                    id={paymentMethod.id}
                    name='payment-type'
                    type='radio'
                    defaultChecked
                    className='h-4 w-4 border border-gray-300 text-brand-600 focus:ring-brand-500'
                  />
                ) : (
                  <input
                    id={paymentMethod.id}
                    name='payment-type'
                    type='radio'
                    className='h-4 w-4 border border-gray-300 text-brand-600 focus:ring-brand-500'
                  />
                )}

                <label
                  htmlFor={paymentMethod.id}
                  className='ml-3 block text-sm font-medium text-gray-700'
                >
                  {paymentMethod.title}
                </label>
              </div>
            ))}
          </div>
        </fieldset>

        <div className='mt-6 grid grid-cols-4 gap-x-4 gap-y-6'>
          <div className='col-span-4'>
            <label
              htmlFor='card-number'
              className='block text-sm font-medium text-gray-700'
            >
              Card number
            </label>
            <div className='mt-1'>
              <input
                type='text'
                id='card-number'
                name='card-number'
                autoComplete='cc-number'
                placeholder='Enter your card number'
                className='block w-full rounded-md border border-gray-300 px-4 py-2.5 shadow-sm focus:border-brand-500 focus:outline-brand-500 focus:ring-brand-500 sm:text-sm'
              />
            </div>
          </div>

          <div className='col-span-4'>
            <label
              htmlFor='name-on-card'
              className='block text-sm font-medium text-gray-700'
            >
              Name on card
            </label>
            <div className='mt-1'>
              <input
                type='text'
                id='name-on-card'
                name='name-on-card'
                autoComplete='cc-name'
                placeholder='Enter name on card'
                className='block w-full rounded-md border border-gray-300 px-4 py-2.5 shadow-sm focus:border-brand-500 focus:outline-brand-500 focus:ring-brand-500 sm:text-sm'
              />
            </div>
          </div>

          <div className='col-span-3'>
            <label
              htmlFor='expiration-date'
              className='block text-sm font-medium text-gray-700'
            >
              Expiration date (MM/YYYY)
            </label>
            <div className='mt-1'>
              <input
                type='text'
                name='expiration-date'
                id='expiration-date'
                placeholder='MM/YYYY'
                autoComplete='cc-exp'
                className='block w-full rounded-md border border-gray-300 px-4 py-2.5 shadow-sm focus:border-brand-500 focus:outline-brand-500 focus:ring-brand-500 sm:text-sm'
              />
            </div>
          </div>

          <div>
            <label
              htmlFor='cvc'
              className='block text-sm font-medium text-gray-700'
            >
              CVC
            </label>
            <div className='mt-1'>
              <input
                type='password'
                name='cvc'
                id='cvc'
                autoComplete='csc'
                className='block w-full rounded-md border border-gray-300 px-4 py-2.5 shadow-sm focus:border-brand-500 focus:outline-brand-500 focus:ring-brand-500 sm:text-sm'
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactInformation;
