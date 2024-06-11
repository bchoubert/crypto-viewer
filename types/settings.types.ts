import { Quote, SortAssetsType } from "./crypto.types";
import { DarkModeType } from "./darkMode.types";
import { DateFormatType } from "./date.types";
import { GraphModeType } from "./graph.types";
import { TranslationPossibility } from "./translation.types";
import { WalletItem } from "./wallet.types";

export const settingsStorageKey: string = 'CV_SETTINGS_KEY';

export interface SettingsType {
  quote: Quote;
  dateFormat: DateFormatType;
  favourites: string[];
  graphMode: GraphModeType;
  wallet: WalletItem[],
  language: TranslationPossibility;
  darkMode: DarkModeType;
  showOtherAssets: boolean;
  sortAssets: SortAssetsType;
}

export const defaultSettings: SettingsType = {
  quote: 'USD',
  dateFormat: 'DD-MM-YYYY',
  favourites: [],
  graphMode: 'simple',
  wallet: [],
  language: 'EN',
  darkMode: 'light',
  showOtherAssets: false,
  sortAssets: 'id',
}