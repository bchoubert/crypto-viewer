import { AvailableTranslations } from '../assets/translations/TranslationUtils';
import { SettingsKeysType } from '../constants';
import dateFormats, { DateFormatType } from './DateFormat';
import { GraphModeType } from './GraphMode';
import { DarkModeType } from './DarkMode';
import QuoteType from './QuoteType';
import WalletItem from './WalletItem';

export type SettingsValue = AvailableTranslations |
QuoteType | DateFormatType | WalletItem[] | GraphModeType | DarkModeType | string[];
type SettingsType = Record<SettingsKeysType, SettingsValue>;

export const settingDetails: Record<SettingsKeysType, {
  needsParsing: boolean,
  defaultValue: SettingsValue,
}> = {
  QUOTE_STORAGE_KEY: { needsParsing: true, defaultValue: { code: 'USD', symbol: '$' } as QuoteType },
  DATE_FORMAT_KEY: { needsParsing: false, defaultValue: dateFormats.american as DateFormatType },
  FAVOURITES_KEY: { needsParsing: true, defaultValue: [] as string[] },
  GRAPH_MODE_KEY: { needsParsing: false, defaultValue: 'Simple' as GraphModeType },
  WALLET_KEY: { needsParsing: true, defaultValue: [] as WalletItem[] },
  LANGUAGE: { needsParsing: false, defaultValue: AvailableTranslations.en },
  DARK_MODE_KEY: { needsParsing: false, defaultValue: 'light' as DarkModeType },
};

export const defaultSettings: SettingsType = Object.keys(settingDetails).reduce((result, key) => ({
  ...result,
  [key]: settingDetails[key].defaultValue,
}), {} as SettingsType);

export default SettingsType;
