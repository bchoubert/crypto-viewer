import { ExchangeRates, ICrypto } from '../types/crypto.types';

export const apiProDomain = 'https://api.pro.coinbase.com';
export const apiDomain = 'https://api.coinbase.com/v2';

// Service to interact with APIs and network
const NetworkService = {
  fetchCryptos(): Promise<ICrypto[]> {
    return fetch(`${apiProDomain}/currencies`)
      .then((response) => response.json());
  },
  fetchCryptoExchangeRates(quoteCode: string): Promise<{ data: { rates: ExchangeRates } }> {
    return fetch(`${apiDomain}/exchange-rates?currency=${quoteCode}`)
      .then((response) => response.json());
  },

  // fetchCrypto24hrStats(crypto: ECrypto, quote: string): Promise<Stats> {
  //   return fetch(`${apiProDomain}/products/${crypto.toUpperCase()}-${quote.toUpperCase()}/stats`)
  //     .then((response) => response.json());
  // },

  // fetchCryptoBuyPrice(crypto: ECrypto, quote: string): Promise<Price> {
  //   return fetch(`${apiDomain}/prices/${crypto.toUpperCase()}-${quote.toUpperCase()}/buy`)
  //     .then((response) => response.json());
  // },
  // fetchCryptoSellPrice(crypto: ECrypto, quote: string): Promise<Price> {
  //   return fetch(`${apiDomain}/prices/${crypto.toUpperCase()}-${quote.toUpperCase()}/sell`)
  //     .then((response) => response.json());
  // },

  // fetchCryptoHistoricRates(
  //   crypto: ECrypto,
  //   quote: string,
  //   candle: CandleType,
  // ): Promise<number[][]> {
  //   const parameters = `?granularity=${candleGranularity[candle].granularity}&end=${candleGranularity[candle].getEndDate()}&start=${candleGranularity[candle].getStartDate()}`;
  //   return fetch(`${apiProDomain}/products/${crypto.toUpperCase()}-${quote.toUpperCase()}/candles${parameters}`)
  //     .then((response) => response.json());
  // },
};

export default NetworkService;
