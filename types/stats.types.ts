
export type Granularity = 60 | 300 | 900 | 3600 | 21600 | 86400;

export interface Stats {
  high: number;
  low: number;
  open: number;
  last: number;
  buy: number;
  sell: number;
}
