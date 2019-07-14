import ExchangeRates from '../models/ExhangeRates';
import Currency from '../models/Currency';
import Price from '../models/Price';
import Stats from '../models/Stats';

const apiProDomain = 'https://api.pro.coinbase.com';
const apiDomain = 'https://api.coinbase.com/v2';

const NetworkService = {
  fetchCurrencies(): Promise<Currency[]> {
    return fetch(apiProDomain + '/currencies')
      .then(response => response.json());
  },
  fetchExchangeRates(quoteCode: string): Promise<ExchangeRates> {
    return fetch(apiDomain + '/exchange-rates?currency=' + quoteCode)
      .then(response => response.json());
  },

  get24htStats(crypto: string, quote: string): Promise<Stats> {
    return fetch(`${apiProDomain}/products/${crypto.toUpperCase()}-${quote.toUpperCase()}/stats`)
      .then(response => response.json());
  },

  getBuyPrice(crypto: string, quote: string): Promise<Price> {
    return fetch(`${apiDomain}/prices/${crypto.toUpperCase()}-${quote.toUpperCase()}/buy`)
      .then(response => response.json());
  },
  getSellPrice(crypto: string, quote: string): Promise<Price> {
    return fetch(`${apiDomain}/prices/${crypto.toUpperCase()}-${quote.toUpperCase()}/sell`)
      .then(response => response.json());
  },

  fetchHistoricRates(crypto: string, quote: string): Promise<number[][]> {
    return fetch(`${apiProDomain}/products/${crypto.toUpperCase()}-${quote.toUpperCase()}/candles`)
      .then(response => response.json());
  }
};

export default NetworkService;
