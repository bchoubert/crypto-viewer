import moment from "moment";

export const printNumber = (nb: number, suffix?: string) => {
  const truncated = Math.trunc(nb * 1000) / 1000;

  return `${truncated}${suffix ? ` ${suffix}` : ''}`;
}

export const printDate = (d: Date, format: string) => {
  return moment(d).format(format);
}