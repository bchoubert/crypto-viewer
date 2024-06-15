import Colors from "@/assets/Colors";
import { SettingsContext } from "@/contexts/settings.provider";
import { TranslationsContext } from "@/contexts/translations.provider";
import { SettingsEnum, settingsDetails } from "@/types/settings.types";
import { FC, memo, useCallback, useContext, useMemo } from "react";
import { StyleSheet, Text, View } from "react-native";
import ToggleButton from "../Utils/ToggleButton";

interface SettingsListItemProps {
  item: SettingsEnum;
}

const styles = StyleSheet.create({
  container: {
    height: 60,
    borderBottomWidth: 1,
    borderBottomColor: Colors.lightGray,
    backgroundColor: Colors.white,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingLeft: 10,
    paddingRight: 10,
  }
});

const SettingsListItem: FC<SettingsListItemProps> = memo(({
  item
}) => {
  const { settings, changeSetting } = useContext(SettingsContext);
  const translation = useContext(TranslationsContext);

  const details = useMemo(() => settingsDetails[item](translation), [item, translation]);
  const value = useMemo(() => settings[details.accessor] as string, [details, settings]);

  const setSelectedItemProxy = useCallback((v: string) => {
    changeSetting(item, v, translation);
  }, [changeSetting, details]);

  return (
    <View style={styles.container}>
      <Text>{details.label}</Text>
      <ToggleButton
        items={details.options}
        selectedItem={value}
        setSelectedItem={setSelectedItemProxy}
      />
    </View>
  )
});

export default SettingsListItem;
