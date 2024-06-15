
export interface ICrypto {
  id: string;
  name: string;
  status: string;
  details: {
    type: string;
  };

  // computed
  rate?: number;
}

export type ICryptoFavourite = { cryptos: ICrypto[] };

export type Quote = 'USD' | 'EUR' | 'BTC';

export const quoteDetails: Record<Quote, { symbol: string }> = {
  'USD': {
    symbol: '$',
  },
  'EUR': {
    symbol: '€'
  },
  'BTC': {
    symbol: '฿',
  },
};

export type SortAssetsType = 'id' | 'name';
export type ShowOtherAssetsType = 'show' | 'hide';

export type ExchangeRates = Record<string, string>;
