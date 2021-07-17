// All quote types
type QuoteType = { code: 'EUR', symbol: '€' } | { code: 'USD', symbol: '$' } | { code: 'BTC', symbol: '₿' };

export const possibleQuotes = [
  { code: 'EUR', symbol: '€' } as QuoteType,
  { code: 'USD', symbol: '$' } as QuoteType,
  { code: 'BTC', symbol: '₿' } as QuoteType,
];

export default QuoteType;
