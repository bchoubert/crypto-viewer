import moment from 'moment';

import CryptoCurrenciesIconMap from './../components/Utils/CryptoCurrencyIconsMap';

// Generic usage service
const UtilsService = {
  // Sort function to order string inside arrays / Objects
  sortFnOnStringProperty(prop1, prop2, property) {
    if (prop1[property].toLowerCase() < prop2[property].toLowerCase()) { return -1 }
    if (prop1[property].toLowerCase() > prop2[property].toLowerCase()) { return 1 }
    return 0;
  },
  // Truncate number for prices  amounts. Default is truncated at 2
  truncateNumber(nb: number | string, trunc = 2) {
    if (typeof nb === 'string') {
      nb = parseFloat(nb);
    }
    return nb.toFixed(trunc);
  },
  // Specific function for graphs. Permits to only show the first and last label (clear all other labels)
  generateLabels(arr) {
    return arr.map((item, index) => {
      if (index === 0 || index === arr.length - 1) {
        return item;
      }
      return '';
    });
  },
  // Generates a rgba string from the hex and using the opacity
  hexToRgba(hex, opacity) {
    var c;
    if (/^#([A-Fa-f0-9]{3}){1,2}$/.test(hex)) {
      c = hex.substring(1).split('');
      if (c.length == 3) {
        c = [c[0], c[0], c[1], c[1], c[2], c[2]];
      }
      c = '0x' + c.join('');
      return `rgba(${[(c >> 16) & 255, (c >> 8) & 255, c & 255].join(', ')}, ${1 - opacity})`;
    }
    throw new Error('Bad Hex');
  },
  // Print the date using moment for timezones and format
  printDate(date, formatString) {
    return moment(date).format(formatString);
  },
  // Print the time using moment for timezones and format
  printTime(date) {
    return moment(date).format('HH:mm');
  },
  // Get the color from the specific crypto currencies map
  getColorFromCrypto(crypto) {
    return CryptoCurrenciesIconMap[crypto?.toLowerCase()]?.color || '#000000';
  }
}

export default UtilsService;
