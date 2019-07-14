
export default interface Currency {
  id: string,
  name: string,
  status: 'online'|'offline',
  details: {
    type: string,
    symbol: string
  },
  price?: number
};
