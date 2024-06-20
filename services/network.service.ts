import { ExchangeRates, ICrypto } from '../types/crypto.types';
import ECrypto from '../constants/cryptos.enum';

export const apiProDomain = 'https://api.pro.coinbase.com';
export const apiDomain = 'https://api.coinbase.com/v2';

// LIST
export const fetchCryptos = (): Promise<ICrypto[]> => {
  return fetch(`${apiProDomain}/currencies`)
    .then((response) => response.json());
};

export const fetchCryptoExchangeRates = (quoteCode: string): Promise<{ data: { rates: ExchangeRates } }> => {
  return fetch(`${apiDomain}/exchange-rates?currency=${quoteCode}`)
    .then((response) => response.json());
};

// DETAILS
export const fetchCrypto24hrStats = (crypto: ECrypto, quote: string): Promise<any> => {
  return fetch(`${apiProDomain}/products/${crypto.toUpperCase()}-${quote.toUpperCase()}/stats`)
    .then((response) => response.json());
};

export const fetchCryptoBuyPrice = (crypto: ECrypto, quote: string): Promise<any> => {
  return fetch(`${apiDomain}/prices/${crypto.toUpperCase()}-${quote.toUpperCase()}/buy`)
    .then((response) => response.json());
};

export const fetchCryptoSellPrice = (crypto: ECrypto, quote: string): Promise<any> => {
  return fetch(`${apiDomain}/prices/${crypto.toUpperCase()}-${quote.toUpperCase()}/sell`)
    .then((response) => response.json());
};

  // fetchCryptoHistoricRates(
  //   crypto: ECrypto,
  //   quote: string,
  //   candle: CandleType,
  // ): Promise<number[][]> {
  //   const parameters = `?granularity=${candleGranularity[candle].granularity}&end=${candleGranularity[candle].getEndDate()}&start=${candleGranularity[candle].getStartDate()}`;
  //   return fetch(`${apiProDomain}/products/${crypto.toUpperCase()}-${quote.toUpperCase()}/candles${parameters}`)
  //     .then((response) => response.json());
  // },
