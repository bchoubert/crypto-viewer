// Currency type as returned by the API
export default interface Crypto {
  id: string,
  name: string,
  status: 'online' | 'offline',
  details: {
    type: string,
    symbol: string
  },
  price?: number
}
