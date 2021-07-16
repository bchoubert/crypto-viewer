/* eslint-disable no-bitwise */
import CryptoCurrenciesIconMap from '../components/Utils/CryptoCurrencyIconsMap';

const ColorService = {
  // Generates a rgba string from the hex and using the opacity
  hexToRgba(hex, opacity) {
    let c;
    if (/^#([A-Fa-f0-9]{3}){1,2}$/.test(hex)) {
      c = hex.substring(1).split('');
      if (c.length === 3) {
        c = [c[0], c[0], c[1], c[1], c[2], c[2]];
      }
      c = `0x${c.join('')}`;
      // eslint-disable-next-line no-bitwise
      return `rgba(${[(c >> 16) & 255, (c >> 8) & 255, c & 255].join(', ')}, ${1 - opacity})`;
    }
    throw new Error('Bad Hex');
  },
  // Get the color from the specific crypto currencies map
  getColorFromCrypto(crypto) {
    return CryptoCurrenciesIconMap[crypto?.toLowerCase()]?.color || '#000000';
  },

  lightenDarkenColor: (colorHEX: string, amount: number) => {
    // remove the # from the hex
    const colorHEXWithNoHash = colorHEX.slice(1);
    // parse the hex color
    const num = parseInt(colorHEXWithNoHash, 16);
    // compute red
    let r = (num >> 16) + amount;

    if (r > 255) r = 255;
    else if (r < 0) r = 0;

    // compute blue
    let b = ((num >> 8) & 0x00FF) + amount;

    if (b > 255) b = 255;
    else if (b < 0) b = 0;

    // compute green
    let g = (num & 0x0000FF) + amount;

    if (g > 255) g = 255;
    else if (g < 0) g = 0;

    // return the new #HEX color
    return `#${(g | (b << 8) | (r << 16)).toString(16)}`;
  },
};

export default ColorService;
