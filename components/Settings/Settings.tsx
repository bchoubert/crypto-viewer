import React, { FC, memo, useMemo, useCallback } from 'react';
import { StyleSheet, FlatList } from 'react-native';

import SettingItem from './SettingItem';

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});

export type settingType = 'currency' | 'dateFormat' | 'graphMode' | 'language' | 'credits';

interface SettingsProps {};

// Settings view
// Render a list with all settings key in the correct order
const Settings: FC<SettingsProps> = ({
}) => {
  const settingList = useMemo(() => ([
    { key: 'currency' },
    { key: 'dateFormat' },
    { key: 'graphMode' },
    { key: 'language'},
    { key: 'credits' }
  ]), []);

  const renderSettingPart = useCallback(({ item }) => (
    <SettingItem settingKey={item.key as settingType} />
  ), []);

  return (
    <FlatList
      style={styles.container}
      data={settingList}
      renderItem={renderSettingPart}
    />
  );
}

export default memo(Settings);
