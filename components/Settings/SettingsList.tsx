import { FC, memo, useCallback, useContext, useMemo } from "react";
import { FlatList, StyleSheet } from "react-native";

import SettingsListItem from "./SettingsListItem";

import { SettingsEnum } from "@/types/settings.types";
import { ThemeContext } from "@/contexts/theme.provider";

const SettingsList: FC = memo(() => {
  const theme = useContext(ThemeContext);

  const settingsKeys = Object.values(SettingsEnum);

  const styles = useMemo(() => StyleSheet.create({
    container: {
      backgroundColor: theme['100']
    }
  }), [theme]);

  const renderItem = useCallback((props: { item: SettingsEnum }) => (
    <SettingsListItem
      item={props.item}
    />
  ), []);

  return (
    <FlatList
      style={styles.container}
      data={settingsKeys}
      renderItem={renderItem}
    ></FlatList>
  );
});

export default SettingsList;
