import React, {
  createContext, FC, memo, ReactNode, useState, useEffect, useMemo, useCallback,
} from 'react';
import { Text } from 'react-native';

import { SettingsKeysType } from '../constants';
import SettingsType, { defaultSettings, SettingsValue } from '../models/SettingsType';
import SettingsService from '../services/Settings.service';

export const SettingsContext = createContext({
  settings: defaultSettings as SettingsType,
  changeSettings: null as (key: SettingsKeysType, newValue: SettingsValue) => void | null,
});

interface SettingsProviderProps {
  children: ReactNode;
}

const SettingsProvider: FC<SettingsProviderProps> = ({
  children,
}) => {
  const [isLoading, setLoading] = useState<boolean>(true);
  const [values, setValues] = useState<SettingsType>(defaultSettings);

  useEffect(
    () => {
      const loadSettings = async () => {
        const settings = await SettingsService.loadAll();
        setValues(settings);
        setLoading(false);
      };
      loadSettings();
    },
    [],
  );

  const handleChangeSettings = useCallback(
    async (key: SettingsKeysType, newValue: SettingsValue) => {
      await SettingsService.changeSetting(key, newValue);
      setValues((v) => ({
        ...v,
        [key]: newValue,
      }));
    },
    [],
  );

  const contextValues = useMemo(() => ({
    settings: values,
    changeSettings: handleChangeSettings,
  }), [values, handleChangeSettings]);

  if (isLoading) {
    return <Text>Loading...</Text>;
  }

  return (
    <SettingsContext.Provider value={contextValues}>
      {children}
    </SettingsContext.Provider>
  );
};

export default memo(SettingsProvider);
