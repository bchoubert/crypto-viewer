import moment from 'moment';

const formatString = 'YYYY-MM-DD';

// All granularity for graphs
const candleGranularity = {
  '6M': {
    granularity: 86400,
    getStartDate(): string {
      return moment().subtract(6, 'month').format(formatString);
    },
    getEndDate(): string {
      return moment().add(1, 'day').format(formatString);
    },
  },
  '3M': {
    granularity: 86400,
    getStartDate(): string {
      return moment().subtract(3, 'month').format(formatString);
    },
    getEndDate(): string {
      return moment().add(1, 'day').format(formatString);
    },
  },
  '1M': {
    granularity: 21600,
    getStartDate(): string {
      return moment().subtract(1, 'month').format(formatString);
    },
    getEndDate(): string {
      return moment().add(1, 'day').format(formatString);
    },
  },
  '1W': {
    granularity: 3600,
    getStartDate(): string {
      return moment().subtract(7, 'day').format(formatString);
    },
    getEndDate(): string {
      return moment().add(1, 'day').format(formatString);
    },
  },
  '3D': {
    granularity: 3600,
    getStartDate(): string {
      return moment().subtract(3, 'day').format(formatString);
    },
    getEndDate(): string {
      return moment().add(1, 'day').format(formatString);
    },
  },
  '1D': {
    granularity: 900,
    getStartDate(): string {
      return moment().subtract(1, 'day').format(formatString);
    },
    getEndDate(): string {
      return moment().add(1, 'day').format(formatString);
    },
  },
};

export type CandleType = '6M' | '3M' | '1M' | '1W' | '3D' | '1D';

export default candleGranularity;
