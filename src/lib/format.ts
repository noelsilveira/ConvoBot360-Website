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

//  Array slicer
export const partition = <T>(array: T[] | undefined, parts: number) => {
  if (array === undefined) {
    return [];
  }
  array.reduce(
    (acc, value, i) => (acc[i % parts].push(value), acc),
    [...Array(parts)].map(() => []) as T[][]
  );
};

export async function batchReduce<T>(
  arr: T[],
  batchSize: number
): Promise<T[][]> {
  if (typeof arr == undefined) return [];
  return arr.reduce((batches, curr, i) => {
    if (i % batchSize === 0) batches.push([]);
    batches[batches.length - 1].push(arr[i]);
    return batches;
  }, [] as T[][]);
}

export const stringToUrlParser = (link: string) => {
  const breakpoint = /\ /;
  const parsed_link = link.split(breakpoint).join(`-`);
  return parsed_link;
};

export const urlToSTringParser = (url: string) => {
  const decoded_url = decodeURIComponent(url);
  const breakpoint = /\-/;
  const parsed_string = decoded_url.split(breakpoint).join(` `);
  return parsed_string;
};
