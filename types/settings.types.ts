import { Quote, ShowOtherAssetsType, SortAssetsType, quoteDetails } from "./crypto.types";
import { DarkModeType } from "./darkMode.types";
import { DateFormatType } from "./date.types";
import { GraphModeType } from "./graph.types";
import { AvailableTranslationDetails, TranslationPossibility, TranslationType } from "./translation.types";
import { WalletItem } from "./wallet.types";

import { ToggleButtonItem } from "@/components/Utils/ToggleButton";

export const settingsStorageKey: string = 'CV_SETTINGS_KEY';

export enum SettingsEnum {
  QUOTE = 'QUOTE',
  DATE_FORMAT = 'DATE_FORMAT',
  GRAPH_MODE = 'GRAPH_MODE',
  LANGUAGE = 'LANGUAGE',
  DARK_MODE = 'DARK_MODE',
  SHOW_OTHER_ASSETS = 'SHOW_OTHER_ASSETS',
  SORT_ASSETS = 'SORT_ASSETS',
}

export const settingsDetails: Record<SettingsEnum, (t: TranslationType) => ({
  label: string;
  accessor: keyof SettingsType;
  options: ToggleButtonItem[];
})> = {
  [SettingsEnum.QUOTE]: t => ({
    label: t.settings.preferred_currency,
    accessor: 'quote',
    options: Object.entries(quoteDetails)
      .map(([key, value]) => ({
        id: key,
        label: `${key} (${value.symbol})`,
      }))
  }),
  [SettingsEnum.DATE_FORMAT]: t => ({
    label: t.settings.preferred_date_format,
    accessor: 'dateFormat',
    options: [
      { id: 'DD-MM-YYYY', label: 'DD-MM-YYYY' },
      { id: 'YYYY-MM-DD', label: 'YYYY-MM-DD' },
    ],
  }),
  [SettingsEnum.GRAPH_MODE]: t => ({
    label: t.settings.graph_mode,
    accessor: 'graphMode',
    options: [
      { id: 'simple', label: t.settings.values.graph_mode.simple },
      { id: 'advanced', label: t.settings.values.graph_mode.advanced }
    ]
  }),
  [SettingsEnum.LANGUAGE]: t => ({
    label: t.settings.language,
    accessor: 'language',
    options: Object.entries(AvailableTranslationDetails).map(([key, value]) => ({
      id: key,
      label: value.name,
    })),
  }),
  [SettingsEnum.DARK_MODE]: t => ({
    label: t.settings.dark_mode,
    accessor: 'darkMode',
    options: [
      { id: 'light', label: t.settings.values.dark_mode.light },
      { id: 'dark', label: t.settings.values.dark_mode.dark }
    ]
  }),
  [SettingsEnum.SHOW_OTHER_ASSETS]: t => ({
    label: t.list.other,
    accessor: 'showOtherAssets',
    options: [
      { id: 'hide', label: t.settings.values.show_other_assets.hide },
      { id: 'show', label: t.settings.values.show_other_assets.show },
    ]
  }),
  [SettingsEnum.SORT_ASSETS]: t => ({
    label: t.list.sort,
    accessor: 'sortAssets',
    options: [
      { id: 'id', label: t.settings.values.sort_assets.code },
      { id: 'name', label: t.settings.values.sort_assets.name },
    ]
  })
};

export type SettingsValue = string | Quote | DateFormatType | string[] | GraphModeType | WalletItem | WalletItem[] | 
  TranslationPossibility | DarkModeType | ShowOtherAssetsType | SortAssetsType;

export interface SettingsType {
  quote: Quote;
  dateFormat: DateFormatType;
  favourites: string[];
  graphMode: GraphModeType;
  wallet: WalletItem[],
  language: TranslationPossibility;
  darkMode: DarkModeType;
  showOtherAssets: ShowOtherAssetsType;
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
  showOtherAssets: 'show',
  sortAssets: 'id',
}