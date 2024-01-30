export function formatNumber(number: number) {
  return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.');
}

// Number to Indian currency converter
export const toBHDCurrency = (num: number) => {
  const curr = num.toLocaleString('en-US', {
    style: 'currency',
    currency: 'BHD',
    maximumFractionDigits: 2,
  });
  return curr;
};
