import { Buffer } from 'buffer';

import { fileTypeFromBuffer } from "file-type";
import * as fs from 'fs';

const SERVER_ROOT = 'https://api.coingecko.com/api/v3';
const SERVER_K = 'CG-ciAgnoPGbvmn2F9T8NdD7d5k';

const buildParameters = (parameters) => {
  if (!parameters || Object.keys(parameters).length === 0) {
    return '';
  }

  const params = new URLSearchParams();

  Object.entries(parameters || {}).forEach(([key, value]) => {
    params.append(key, value);
  });

  return `?${params.toString()}`;
}

const fetchApi = async (url, params) => {
  const preparedUrl = url;
  const fetchOptions = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      'x-cg-demo-api-key': SERVER_K,
    },
  };
  const parameters = buildParameters(params);

  const response = await fetch(`${SERVER_ROOT}${preparedUrl}${parameters}`, fetchOptions);

  if (!response.ok) {
    throw new Error('An error occured when fetch ' + url);
  }

  const data = await response.json();
  return data;
}

const fetchPage = (page) => {
  return fetchApi('/coins/markets', { 'vs_currency': 'usd', sparkline: 'true', 'per_page': '250', page: page.toString() });
};

const fetchAllPages = async () => {
  const pages = await Promise.all([
    fetchPage(1),
    fetchPage(2),
    fetchPage(3),
    fetchPage(4),
  ]);

  return [...pages[0], ...pages[1], ...pages[2], ...pages[3]];
};

const fetchImage = async (imageUrl) => {
  const response = await fetch(imageUrl);
  return response.arrayBuffer();
};

const fetchAllImages = async (imageUrlsPerSymbol) => {
  const response = {};

  await Promise.all(
    Object.entries(imageUrlsPerSymbol).map(async ([symbol, imageUrl]) => {
      const buffer = await fetchImage(imageUrl);
      response[symbol] = buffer;

      return buffer;
    }),
  );

  return response;
};

const saveImagesToDisk = async(directory, images) => {
  return Promise.all(
    Object.entries(images).map(([symbol, arrayBuffer]) => {
      return new Promise(async (resolve) => {
        const fileType = await fileTypeFromBuffer(arrayBuffer);
        fs.writeFile(`${directory}/${symbol}.${fileType.ext || 'png'}`, Buffer.from(arrayBuffer), () => resolve());
      })
    }),
  );
};

const main = async () => {
  const items = await fetchAllPages();

  const imageUrlsPerSymbol = {};
  items.forEach(i => {
    imageUrlsPerSymbol[i.symbol] = i.image;
  });

  const images = await fetchAllImages(imageUrlsPerSymbol);

  await saveImagesToDisk('./temp', images);
};

const asyncScript = () => {
  return new Promise(async (resolve) => {
    await main();
    resolve();
  });
}

asyncScript()
  .then(() => console.log('Finished!'));