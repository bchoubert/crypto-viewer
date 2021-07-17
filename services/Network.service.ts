import ExchangeRates from '../models/ExhangeRates';
import Currency from '../models/Crypto';
import Price from '../models/Price';
import Stats from '../models/Stats';
import candleGranularity, { CandleType } from '../models/CandleGranularity';

const apiProDomain = 'https://api.pro.coinbase.com';
const apiDomain = 'https://api.coinbase.com/v2';

// Service to interact with APIs and network
const NetworkService = {
  fetchCryptos(): Promise<Currency[]> {
    return fetch(`${apiProDomain}/currencies`)
      .then((response) => response.json());
  },
  fetchCryptoExchangeRates(quoteCode: string): Promise<ExchangeRates> {
    return fetch(`${apiDomain}/exchange-rates?currency=${quoteCode}`)
      .then((response) => response.json());
  },

  fetchCrypto24hrStats(crypto: string, quote: string): Promise<Stats> {
    return fetch(`${apiProDomain}/products/${crypto.toUpperCase()}-${quote.toUpperCase()}/stats`)
      .then((response) => response.json());
  },

  fetchCryptoBuyPrice(crypto: string, quote: string): Promise<Price> {
    return fetch(`${apiDomain}/prices/${crypto.toUpperCase()}-${quote.toUpperCase()}/buy`)
      .then((response) => response.json());
  },
  fetchCryptoSellPrice(crypto: string, quote: string): Promise<Price> {
    return fetch(`${apiDomain}/prices/${crypto.toUpperCase()}-${quote.toUpperCase()}/sell`)
      .then((response) => response.json());
  },

  fetchCryptoHistoricRates(
    crypto: string,
    quote: string,
    candle: CandleType,
  ): Promise<number[][]> {
    const parameters = `?granularity=${candleGranularity[candle].granularity}&end=${candleGranularity[candle].getEndDate()}&start=${candleGranularity[candle].getStartDate()}`;
    return fetch(`${apiProDomain}/products/${crypto.toUpperCase()}-${quote.toUpperCase()}/candles${parameters}`)
      .then((response) => response.json());
  },
};

export default NetworkService;
