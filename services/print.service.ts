import moment from "moment";

import { DateFormatType } from "@/types/date.types";

export const printNumber = (nb: number, suffix?: string) => {
  const truncated = Math.trunc(nb * 1000) / 1000;

  return `${truncated}${suffix ? ` ${suffix}` : ''}`;
}

export const printDate = (d: Date, format?: DateFormatType) => {
  return moment(d).format(format || 'YYYY-MM-DD');
}
