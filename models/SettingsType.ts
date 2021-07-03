
import { AvailableTranslations } from '../assets/translations/TranslationType';
import { SettingsKeysType, SETTINGS_KEYS } from '../constants'
import dateFormats, { dateFormatType } from './DateFormat';
import { graphModeType } from './GraphMode';
import quoteType from './QuoteType';
import WalletItem from './WalletItem';

export type SettingsValue = AvailableTranslations | quoteType | dateFormatType | WalletItem[] | graphModeType | string[];
type SettingsType = Record<SettingsKeysType, SettingsValue>;

export const settingDetails: Record<SettingsKeysType, {
  needsParsing: boolean,
  defaultValue: SettingsValue,
}> = {
  QUOTE_STORAGE_KEY: { needsParsing: true, defaultValue: { code: 'USD', symbol: '$' } as quoteType },
  DATE_FORMAT_KEY: { needsParsing: false, defaultValue: dateFormats.american as dateFormatType },
  FAVOURITES_KEY: { needsParsing: true, defaultValue: [] as string[] },
  GRAPH_MODE_KEY: { needsParsing: false, defaultValue: 'Simple' as graphModeType },
  WALLET_KEY: { needsParsing: true, defaultValue: [] as WalletItem[] },
  LANGUAGE: { needsParsing: false, defaultValue: AvailableTranslations.en },
};

export const defaultSettings: SettingsType = Object.keys(settingDetails).reduce((result, key) => {
  result[key] = settingDetails[key].defaultValue;
  return result;
}, {} as SettingsType);

export default SettingsType;
