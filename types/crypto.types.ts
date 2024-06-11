
export interface ICrypto {
  id: string;
  name: string;
  status: string;
  details: {
    type: string;
  },
}

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
