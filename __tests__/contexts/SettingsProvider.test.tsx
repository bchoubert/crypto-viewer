import { fireEvent } from '@testing-library/react-native';
import React, { FC, useCallback, useContext } from 'react';
import { Button, Text, View } from 'react-native';
import { act } from 'react-test-renderer';
import { renderNode } from '../../components/testUtils/bootstrap';

import { SettingsKeysType, SETTINGS_KEYS } from '../../constants';
import SettingsProvider, { SettingsContext } from '../../contexts/SettingsProvider';
import { DarkModeType } from '../../models/DarkMode';
import SettingsType, { settingDetails, SettingsValue } from '../../models/SettingsType';
import SettingsService from '../../services/Settings.service';

const settingKeyForTests: SettingsKeysType = 'DARK_MODE_KEY';

const SettingsTestComponent: FC = () => {
  const {
    settings,
    changeSettings,
  } = useContext(SettingsContext);

  const changeSetting = useCallback(
    () => changeSettings(settingKeyForTests, 'dark' as DarkModeType),
    [changeSettings],
  );

  return (
    <View>
      <Text>{settings[settingKeyForTests]}</Text>
      <Button title="Change setting" onPress={changeSetting} />
    </View>
  );
};

describe('SettingsProvider', () => {
  let SettingsServiceMock = {} as {
    loadAll: () => Promise<SettingsType>;
    changeSetting: (settingKey: SettingsKeysType, newValue: SettingsValue) => Promise<void>;
  };

  const settingsDefaultValues: SettingsType = Object.keys(SETTINGS_KEYS)
    .reduce((obj, settingKey) => ({
      ...obj,
      [settingKey]: settingDetails[settingKey].defaultValue as SettingsValue,
    }), {} as SettingsType);

  beforeAll(() => {
    // eslint-disable-next-line no-console -- we don't need error messages fron act
    console.error = () => null;

    SettingsServiceMock = {
      loadAll: jest.fn(
        () => new Promise((resolve) => resolve(settingsDefaultValues)),
      ),
      changeSetting: jest.fn(
        () => new Promise<void>((resolve) => resolve()),
      ),
    };

    jest.spyOn(SettingsService, 'loadAll');
    jest.spyOn(SettingsService, 'changeSetting');

    (SettingsService.loadAll as unknown as jest.Mock)
      .mockImplementation(SettingsServiceMock.loadAll);

    (SettingsService.changeSetting as unknown as jest.Mock)
      .mockImplementation(SettingsServiceMock.changeSetting);
  });

  it('Context', () => {
    const changeSettings = jest.fn(() => new Promise<void>((resolve) => resolve()));

    const settingsContext = {
      settings: settingsDefaultValues,
      changeSettings,
    };

    const node = renderNode(
      <SettingsContext.Provider value={settingsContext}>
        <SettingsTestComponent />
      </SettingsContext.Provider>,
    );

    const changeSettingButton = node.getByText('Change setting');

    node.getByText(settingsDefaultValues[settingKeyForTests] as string);

    expect(changeSettings).toHaveBeenCalledTimes(0);

    fireEvent.press(changeSettingButton);

    expect(changeSettings).toHaveBeenCalledTimes(1);
    expect(changeSettings).toHaveBeenCalledWith(settingKeyForTests, 'dark' as DarkModeType);
  });

  it('Provider', async () => {
    const node = await renderNode(
      <SettingsProvider>
        <SettingsTestComponent />
      </SettingsProvider>,
    );

    await act(async () => {
      const changeSettingButton = node.getByText('Change setting');

      node.getByText(settingsDefaultValues[settingKeyForTests] as string);

      expect(SettingsServiceMock.changeSetting).toHaveBeenCalledTimes(0);
      expect(SettingsServiceMock.loadAll).toHaveBeenCalledTimes(1);

      await act(() => {
        fireEvent.press(changeSettingButton);
      });

      expect(SettingsServiceMock.changeSetting).toHaveBeenCalledTimes(1);
      expect(SettingsServiceMock.changeSetting).toHaveBeenCalledWith(settingKeyForTests, 'dark' as DarkModeType);
    });
  });
});
