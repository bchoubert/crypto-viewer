
import * as fs from 'fs';
import path from 'path';

import { extractColors } from "extract-colors";
import getPixels from 'get-pixels';

const readImageUrls = (directory) => {
  return new Promise((resolve) => {

    fs.readdir(directory, (err, files) => {
      if (err) {
        console.error(err);
      }

      resolve(files);
    });
  });
};

const getPixelsFromImageUrl = (imageUrl) => {
  return new Promise((resolve) => {
    getPixels(`./temp/${imageUrl}`, (err, pixels) => {
      if (err) {
        console.error(err);
      }
      resolve(pixels);
    });
  });
}

const getColorsFromImageUrl = (imageUrl) => {
  return new Promise(async (resolve) => {
    try {
      const pixels = await getPixelsFromImageUrl(imageUrl);
      
      const data = [...pixels.data];
      const [width, height] = pixels.shape;

      const colors = await extractColors({ data, width, height }, { format: 'hex' });
      resolve(colors[0].hex);
    } catch {
      resolve('#000000');
    }
  });
};

const main = async () => {
  const imageUrls = await readImageUrls('./temp');
  const result = {};

  for (let i = 0; i < imageUrls.length; i++) {
    try {
      result[imageUrls[i].split('.')[0]] = await getColorsFromImageUrl(imageUrls[i]);
    } catch {
      //
    }
  }

  console.log(result);
};

const asyncScript = () => {
  return new Promise(async (resolve) => {
    await main();
    resolve();
  });
}

asyncScript()
  .then(() => console.log('Finished!'));