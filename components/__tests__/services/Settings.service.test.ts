import { SettingsKeysType, SETTINGS_KEYS } from '../../../constants';
import { defaultSettings } from '../../../models/SettingsType';
import SettingsService from '../../../services/Settings.service';
import StorageService from '../../../services/Storage.service';

describe('SettingsService', () => {
  const darkModeKeyToTest = 'DARK_MODE_KEY' as SettingsKeysType;
  const darkModeCalledValue = SETTINGS_KEYS[darkModeKeyToTest];
  const darkModeValueRetrieved = SETTINGS_KEYS[darkModeKeyToTest];

  const walletKeyToTest = 'WALLET_KEY' as SettingsKeysType;
  const walletCalledValue = SETTINGS_KEYS[walletKeyToTest];
  const walletValueRetrieved = { test: SETTINGS_KEYS[walletKeyToTest] };

  const languageKeyToTest = 'LANGUAGE' as SettingsKeysType;
  const languageCalledValue = SETTINGS_KEYS[languageKeyToTest];
  const languageValueRetrieved = defaultSettings[languageKeyToTest];

  let SettingsServiceMock = {} as {
    getData: (key: string) => string,
    storeData: () => Promise<void>,
  };

  beforeAll(() => {
    SettingsServiceMock = {
      getData: jest.fn((key: string) => {
        if (walletCalledValue === key) {
          return `{"test": "${key}"}`;
        }
        if (darkModeCalledValue === key) {
          return key;
        }
        return null;
      }),
      storeData: jest.fn(() => null),
    };

    jest.spyOn(StorageService, 'getData');
    jest.spyOn(StorageService, 'storeData');

    (StorageService.getData as unknown as jest.Mock)
      .mockImplementation(SettingsServiceMock.getData);

    (StorageService.storeData as unknown as jest.Mock)
      .mockImplementation(SettingsServiceMock.storeData);
  });

  it('loadOneSetting - simple', async () => {
    expect(SettingsServiceMock.getData).toHaveBeenCalledTimes(0);

    const res = await SettingsService.loadOneSetting(darkModeKeyToTest);

    expect(res).toEqual(darkModeValueRetrieved);

    expect(SettingsServiceMock.getData).toHaveBeenCalledTimes(1);
    expect(SettingsServiceMock.getData).toHaveBeenCalledWith(darkModeCalledValue);
  });

  it('loadOneSetting - json', async () => {
    expect(SettingsServiceMock.getData).toHaveBeenCalledTimes(1);

    const res = await SettingsService.loadOneSetting(walletKeyToTest);

    expect(res).toEqual(walletValueRetrieved);

    expect(SettingsServiceMock.getData).toHaveBeenCalledTimes(2);
    expect(SettingsServiceMock.getData).toHaveBeenCalledWith(walletCalledValue);
  });

  it('loadOneSetting - default', async () => {
    expect(SettingsServiceMock.getData).toHaveBeenCalledTimes(2);

    const res = await SettingsService.loadOneSetting(languageKeyToTest);

    expect(res).toEqual(languageValueRetrieved);

    expect(SettingsServiceMock.getData).toHaveBeenCalledTimes(3);
    expect(SettingsServiceMock.getData).toHaveBeenCalledWith(languageCalledValue);
  });
});
