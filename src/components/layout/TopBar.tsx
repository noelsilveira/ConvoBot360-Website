import { useCurrencyStore } from '@/store/currencyStore';
import { ChevronDownIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';

const TopBar = () => {
  const { activeCurrency, currencies, changeCurrency } = useCurrencyStore();

  return (
    <div className='bg-gradient-to-r from-brand-500 to-brand-400'>
      <div className='mx-auto flex h-10 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8'>
        {/* Currency selector */}
        <form className='hidden lg:block lg:flex-1'>
          <div className='flex'>
            <label htmlFor='desktop-currency' className='sr-only'>
              Currency
            </label>
            <div className='group relative -ml-2 rounded-md border-transparent bg-transparent focus-within:ring-2 focus-within:ring-white'>
              <select
                id='desktop-currency'
                name='currency'
                onChange={(e) => changeCurrency(e.target.value)}
                className='flex appearance-none items-center rounded-md border-transparent bg-transparent bg-none py-0.5 pl-2 pr-5 text-sm font-medium uppercase text-white focus:border-transparent focus:outline-none focus:ring-0 group-hover:text-gray-100'
              >
                {currencies.map((currency) => (
                  <option key={currency.name} value={currency.name}>
                    {currency.name.toLocaleUpperCase()}
                  </option>
                ))}
              </select>
              <div className='pointer-events-none absolute inset-y-0 right-0 flex items-center'>
                <ChevronDownIcon
                  className='h-5 w-5 text-gray-100'
                  aria-hidden='true'
                />
              </div>
            </div>
          </div>
        </form>

        <p className='flex-1 text-center text-sm font-medium text-white lg:flex-none'>
          Get free delivery on orders over $100
        </p>

        <div className='hidden lg:flex lg:flex-1 lg:items-center lg:justify-end lg:space-x-6'>
          <Link
            href='/sign-up'
            className='text-sm font-medium text-white hover:text-gray-100'
          >
            Create an account
          </Link>
          <span className='h-6 w-px bg-gray-100' aria-hidden='true' />
          <Link
            href='/login'
            className='text-sm font-medium text-white hover:text-gray-100'
          >
            Sign in
          </Link>
        </div>
      </div>
    </div>
  );
};

export default TopBar;
