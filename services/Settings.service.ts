import { SettingsKeysType, SETTINGS_KEYS } from '../constants';
import SettingsType, { settingDetails, SettingsValue } from '../models/SettingsType';
import StorageService from './Storage.service';

const SettingsService = {
  loadOneSetting: async (settingKey: SettingsKeysType): Promise<SettingsValue> => {
    const value = await StorageService.getData(SETTINGS_KEYS[settingKey]);
    if (value != null) {
      return settingDetails[settingKey].needsParsing ? JSON.parse(value) : value;
    }
    return settingDetails[settingKey].defaultValue;
  },
  changeSetting: async (
    settingKey: SettingsKeysType,
    newValue: SettingsValue,
  ): Promise<void> => StorageService.storeData(
    SETTINGS_KEYS[settingKey],
    (settingDetails[settingKey].needsParsing ? JSON.stringify(newValue) : newValue) as string,
  ),
  loadAll: async (): Promise<SettingsType> => {
    const values = await Promise.all(
      Object.keys(SETTINGS_KEYS).map(
        (settingKey) => SettingsService.loadOneSetting(settingKey as SettingsKeysType),
      ),
    );
    return Object.keys(SETTINGS_KEYS).reduce((result, settingKey, idx) => ({
      ...result,
      [settingKey]: values[idx],
    }), {} as SettingsType);
  },
};

export default SettingsService;
