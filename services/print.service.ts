
export const printNumber = (nb: number, suffix?: string) => {
  const truncated = Math.trunc(nb * 1000) / 1000;

  return `${truncated}${suffix ? ` ${suffix}` : ''}`;
}