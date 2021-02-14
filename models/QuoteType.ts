
// All quote types
type quoteType = { code: 'EUR', symbol: '€' } | { code: 'USD', symbol: '$' } | { code: 'BTC', symbol: '₿' };

export const possibleQuotes = [
  { code: 'EUR', symbol: '€' } as quoteType,
  { code: 'USD', symbol: '$' } as quoteType,
  { code: 'BTC', symbol: '₿' } as quoteType,
];

export default quoteType;
