

import { getData, storeData } from './storage.service';

import { SettingsType, defaultSettings, settingsStorageKey } from '@/types/settings.types';

export const loadSettings = async (): Promise<SettingsType> => {
  const value = await getData(settingsStorageKey);

  if (value) {
    return {
      ...defaultSettings,
      ...JSON.parse(value),
    };
  }
  return defaultSettings;
};

export const saveSettings = async (value: SettingsType): Promise<void> => {
  if (value) {
    return storeData(settingsStorageKey, JSON.stringify(value));
  }
};
