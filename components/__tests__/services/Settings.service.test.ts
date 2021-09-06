import { SettingsKeysType, SETTINGS_KEYS } from '../../../constants';
import { DarkModeType } from '../../../models/DarkMode';
import { defaultSettings } from '../../../models/SettingsType';
import WalletItem from '../../../models/WalletItem';
import SettingsService from '../../../services/Settings.service';
import StorageService from '../../../services/Storage.service';

describe('SettingsService', () => {
  const darkModeKey = 'DARK_MODE_KEY' as SettingsKeysType;
  const darkModeStorageKey = SETTINGS_KEYS[darkModeKey];
  const darkModeValueRetrieved = SETTINGS_KEYS[darkModeKey];

  const walletKey = 'WALLET_KEY' as SettingsKeysType;
  const walletStorageKey = SETTINGS_KEYS[walletKey];
  const walletValueRetrieved = { test: SETTINGS_KEYS[walletKey] };

  const languageKey = 'LANGUAGE' as SettingsKeysType;
  const languageStorageKey = SETTINGS_KEYS[languageKey];
  const languageValueRetrieved = defaultSettings[languageKey];

  let StorageServiceMock = {} as {
    getData: (key: string) => string,
    storeData: () => Promise<void>,
  };

  beforeAll(() => {
    StorageServiceMock = {
      getData: jest.fn((key: string) => {
        if (walletStorageKey === key) {
          return `{"test": "${key}"}`;
        }
        if (darkModeStorageKey === key) {
          return key;
        }
        return null;
      }),
      storeData: jest.fn(() => null),
    };

    jest.spyOn(StorageService, 'getData');
    jest.spyOn(StorageService, 'storeData');

    (StorageService.getData as unknown as jest.Mock)
      .mockImplementation(StorageServiceMock.getData);

    (StorageService.storeData as unknown as jest.Mock)
      .mockImplementation(StorageServiceMock.storeData);
  });

  it('loadOneSetting - simple', async () => {
    expect(StorageServiceMock.getData).toHaveBeenCalledTimes(0);

    const res = await SettingsService.loadOneSetting(darkModeKey);

    expect(res).toEqual(darkModeValueRetrieved);

    expect(StorageServiceMock.getData).toHaveBeenCalledTimes(1);
    expect(StorageServiceMock.getData).toHaveBeenCalledWith(darkModeStorageKey);
  });

  it('loadOneSetting - json', async () => {
    expect(StorageServiceMock.getData).toHaveBeenCalledTimes(1);

    const res = await SettingsService.loadOneSetting(walletKey);

    expect(res).toEqual(walletValueRetrieved);

    expect(StorageServiceMock.getData).toHaveBeenCalledTimes(2);
    expect(StorageServiceMock.getData).toHaveBeenCalledWith(walletStorageKey);
  });

  it('loadOneSetting - default', async () => {
    expect(StorageServiceMock.getData).toHaveBeenCalledTimes(2);

    const res = await SettingsService.loadOneSetting(languageKey);

    expect(res).toEqual(languageValueRetrieved);

    expect(StorageServiceMock.getData).toHaveBeenCalledTimes(3);
    expect(StorageServiceMock.getData).toHaveBeenCalledWith(languageStorageKey);
  });

  const allSettingValues = {
    ...defaultSettings,
    [walletKey]: { test: SETTINGS_KEYS[walletKey] },
    [darkModeKey]: darkModeValueRetrieved,
  };

  it('loadAll', async () => {
    expect(StorageServiceMock.getData).toHaveBeenCalledTimes(3);

    const res = await SettingsService.loadAll();

    expect(res).toEqual(allSettingValues);

    expect(StorageServiceMock.getData)
      .toHaveBeenCalledTimes(3 + Object.keys(defaultSettings).length);
  });

  it('changeSetting - simple', async () => {
    expect(StorageServiceMock.storeData).toHaveBeenCalledTimes(0);

    const valueToBeSet = 'light' as DarkModeType;

    await SettingsService.changeSetting(darkModeKey, valueToBeSet);

    expect(StorageServiceMock.storeData).toHaveBeenCalledTimes(1);
    expect(StorageServiceMock.storeData).toHaveBeenCalledWith(darkModeStorageKey, valueToBeSet);
  });

  it('changeSetting - json', async () => {
    expect(StorageServiceMock.storeData).toHaveBeenCalledTimes(1);

    const valueToBeSet = [
      {
        crypto: 'btc',
        amount: 2,
      },
    ] as WalletItem[];

    const stringifiedValue = JSON.stringify(valueToBeSet);

    await SettingsService.changeSetting(walletKey, valueToBeSet);

    expect(StorageServiceMock.storeData).toHaveBeenCalledTimes(2);
    expect(StorageServiceMock.storeData).toHaveBeenCalledWith(walletStorageKey, stringifiedValue);
  });
});
