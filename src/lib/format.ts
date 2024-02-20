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

export function batchReduce<T>(arr: T[], batchSize: number): T[][] {
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

export const urlToStringParser = (url: string) => {
  const decoded_url = decodeURIComponent(url);
  const breakpoint = /\-/;
  const parsed_string = decoded_url.split(breakpoint).join(` `);
  return parsed_string;
};

export const removeSingleQuotes = (url: string): string => {
  // const decoded_url = JSON.stringify(url);
  const breakpoint = /'/g;
  const parsed_string = url.replace(/['\\]/g, '');
  return parsed_string;
};

function decodeUrlParameter(urlParameter: string): string {
  return decodeURIComponent(urlParameter);
}

function parseUrlParameter(urlParameter: string): {
  sort: { [key: string]: string };
} {
  const keyValueRegex = /(\w+)%3A"(\w+)"/g;
  const result: { [key: string]: string } = {};

  let match: RegExpExecArray | null;
  while ((match = keyValueRegex.exec(urlParameter)) !== null) {
    const key = match[1];
    const value = match[2];
    result[key] = value;
  }

  return { sort: result };
}
export function parseUrlSortString(urlParameter: string): {
  sort: { [key: string]: string };
} {
  console.log(urlParameter);
  const decodedParameter = decodeUrlParameter(urlParameter);
  const parsedObject = parseUrlParameter(decodedParameter);

  return parsedObject;
}

export function convertToSortObject(input: string): { [key: string]: string } {
  const keyValue = input.match(/"([^"]+)":"([^"]+)"/);
  if (keyValue && keyValue.length === 3) {
    const key = keyValue[1];
    const value = keyValue[2];
    return { [key]: value };
  }
  return {};
}

export const cleanJsonString = (jsonString: string): string => {
  // Remove backslashes
  let cleanedString = jsonString.replace(/\\/g, '');

  // Remove quotes around keys
  // cleanedString = cleanedString.replace(/"(\w+)"\s*:/g, '$1:');

  // Remove quotes around values
  // cleanedString = cleanedString.replace(/"([^"]*)"/g, '$1');

  // Remove quotes before {
  cleanedString = cleanedString.replace(/"{/g, '{');

  // Remove quotes after }
  cleanedString = cleanedString.replace(/}"/g, '}');

  return cleanedString;
};

export function decodeUrlToString(url: string) {
  const decoded_url = decodeURI(url);
  return decoded_url;
}
