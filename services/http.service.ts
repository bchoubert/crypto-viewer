const SERVER_ROOT = 'https://api.coingecko.com/api/v3';
const SERVER_K = 'CG-ciAgnoPGbvmn2F9T8NdD7d5k';

export const fetchApi = async <T>(
  url: string,
  urlParameters?: Record<string, string>,
): Promise<T> => {
  const preparedUrl = prepareUrl(url);
  const fetchOptions = buildOptions();
  const parameters = buildParameters(urlParameters);

  const response = await fetch(`${SERVER_ROOT}${preparedUrl}${parameters}`, fetchOptions);

  if (!response.ok) {
    throw new Error('An error occured when fetch ' + url);
  }

  const data = await response.json() as T;
  return data;
};

const buildParameters = (parameters?: Record<string, string>): string => {
  if (!parameters || Object.keys(parameters).length === 0) {
    return '';
  }

  const params = new URLSearchParams();

  Object.entries(parameters || {}).forEach(([key, value]) => {
    params.append(key, value);
  });

  return `?${params.toString()}`;
}

const buildOptions = () => ({
  method: 'GET',
  headers: {
    accept: 'application/json',
    'x-cg-demo-api-key': SERVER_K,
  },
});

const prepareUrl = (url: string) => {
  if (url.startsWith('/')) {
    return url;
  }
  return `/${url}`;
};

