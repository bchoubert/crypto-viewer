export const SETTINGS_KEYS = {
  QUOTE_STORAGE_KEY: 'CV_QUOTE_STORAGE_KEY',
  DATE_FORMAT_KEY: 'CV_DATE_FORMAT_KEY',
  WALLET_KEY: 'CV_WALLET_KEY',
  FAVOURITES_KEY: 'CV_FAVOURITES_KEY',
  GRAPH_MODE_KEY: 'CV_GRAPH_MODE_KEY',
  LANGUAGE: 'CV_LANGUAGE',
  DARK_MODE_KEY: 'CV_DARK_MODE_KEY',
  SHOW_OTHER_ASSETS_KEY: 'CV_SHOW_OTHER_ASSETS',
  SORT_ASSETS_KEY: 'CV_SORT_ASSETS',
};

export type SettingsKeysType = keyof typeof SETTINGS_KEYS;
