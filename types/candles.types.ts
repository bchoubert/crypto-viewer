import moment from "moment";

export interface RatesAttributes {
  length: number;
  minValue: number;
  maxValue: number;
}

export enum CandleEnum {
  '6m' = '6m',
  '3m' = '3m',
  '1m' = '1m',
  '1w' = '1w',
  '3d' = '3d',
  '1d' = '1d',
}

const formatString = 'YYYY-MM-DD';

export const candleDetails: Record<CandleEnum, {
  granularity: number,
  getStartDate: () => string,
  getEndDate: () => string,
}> = {
  [CandleEnum["6m"]]: {
    granularity: 86400,
    getStartDate(): string {
      return moment().subtract(6, 'month').format(formatString);
    },
    getEndDate(): string {
      return moment().add(1, 'day').format(formatString);
    },
  },
  [CandleEnum["3m"]]: {
    granularity: 86400,
    getStartDate(): string {
      return moment().subtract(3, 'month').format(formatString);
    },
    getEndDate(): string {
      return moment().add(1, 'day').format(formatString);
    },
  },
  [CandleEnum["1m"]]: {
    granularity: 21600,
    getStartDate(): string {
      return moment().subtract(1, 'month').format(formatString);
    },
    getEndDate(): string {
      return moment().add(1, 'day').format(formatString);
    },
  },
  [CandleEnum["1w"]]: {
    granularity: 3600,
    getStartDate(): string {
      return moment().subtract(7, 'day').format(formatString);
    },
    getEndDate(): string {
      return moment().add(1, 'day').format(formatString);
    },
  },
  [CandleEnum["3d"]]: {
    granularity: 3600,
    getStartDate(): string {
      return moment().subtract(3, 'day').format(formatString);
    },
    getEndDate(): string {
      return moment().add(1, 'day').format(formatString);
    },
  },
  [CandleEnum["1d"]]: {
    granularity: 900,
    getStartDate(): string {
      return moment().subtract(1, 'day').format(formatString);
    },
    getEndDate(): string {
      return moment().add(1, 'day').format(formatString);
    },
  },
};
