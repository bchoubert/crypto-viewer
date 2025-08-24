import { SwitchItem } from "../components/utils/Switch";

export enum Currency {
  aed = 'aed',
  aud = 'aud',
  cad = 'cad',
  chf = 'chf',
  czk = 'czk',
  eur = 'eur',
  gbp = 'gbp',
  inr = 'inr',
  jpy = 'jpy',
  usd = 'usd',
}

const currencyNames: Record<Currency, string> = {
  [Currency.aed]: 'United Arab Emirates dirham',
  [Currency.aud]: 'Australian dollar',
  [Currency.cad]: 'Canadian dollar',
  [Currency.chf]: 'Swiss franc',
  [Currency.czk]: 'Czech koruna',
  [Currency.eur]: 'Euro',
  [Currency.gbp]: 'Pound sterling',
  [Currency.inr]: 'Indian rupee',
  [Currency.jpy]: 'Japanese yen',
  [Currency.usd]: 'United States dollar',
}

export const getCurrencyNames = (): SwitchItem<Currency>[] => {
  return Object.values(Currency).map(c => ({
    value: c,
    label: `${c} - ${currencyNames[c] || ''}`,
  }));
}
