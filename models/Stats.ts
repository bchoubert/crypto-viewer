
// The stats of a crypto is defined here
export default interface Stats {
  open: string,
  high: string,
  low: string,
  last: string,
  volume: string,
  volume_30day: string,

  rate?: number,
  
  message?: string
}
