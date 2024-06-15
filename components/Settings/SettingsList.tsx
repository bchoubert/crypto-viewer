import { SettingsEnum } from "@/types/settings.types";
import { FC, memo, useCallback } from "react";
import { FlatList } from "react-native";
import SettingsListItem from "./SettingsListItem";

const SettingsList: FC = memo(() => {
  const settingsKeys = Object.values(SettingsEnum);

  const renderItem = useCallback((props: { item: SettingsEnum }) => (
    <SettingsListItem
      item={props.item}
    />
  ), []);

  return (
    <FlatList
      data={settingsKeys}
      renderItem={renderItem}
    ></FlatList>
  );
});

export default SettingsList;
