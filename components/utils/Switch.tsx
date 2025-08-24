import { JSX, useContext, useMemo } from "react";
import { Dimensions, Pressable, StyleSheet, Text, View } from "react-native";
import { ThemeContext } from "../../contexts/theme.provider";
import TranslationText from "./TranslationText";

export interface SwitchItem<T> {
  label?: string;
  translationId?: string;
  value: T;

  icon?: () => JSX.Element;
}

interface SwitchProps<T> {
  items: SwitchItem<T>[];
  selectedItem: T;
  changeSelectedItem: (newValue: T) => void;
  color?: string;
}

function Switch<T extends string>({
  items,
  selectedItem,
  changeSelectedItem,
  color,
}: SwitchProps<T>) {
  const { theme } = useContext(ThemeContext);

  const styles = useMemo(() => StyleSheet.create({
    container: {
      width: Dimensions.get('window').width - 48,
      display: 'flex',
      flexDirection: 'row',
      height: 50,
      borderTopWidth: 1,
      borderBottomWidth: 1,
      borderColor: color || theme.colors.action,
      paddingHorizontal: 25,
      marginHorizontal: 8,
    },
    item: {
      flex: 1,
      height: 50,
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 25,
    },
    itemText: {
      color: theme.colors.text,
    },
    item__active: {
      backgroundColor: color || theme.colors.action,
    },
    itemText__active: {
      color: theme.colors.actionText,
      fontWeight: 'bold',
    },
  }), [theme, color]);

  return (
    <View style={styles.container}>
      {items.map(i => {
        const isSelected = (selectedItem === i.value);
        return (
          <Pressable key={i.value} style={[styles.item, isSelected && styles.item__active]} onPress={() => changeSelectedItem(i.value)}>
            {i.label ? (
              <Text style={[styles.itemText, isSelected && styles.itemText__active]}>{i.label}</Text>
            ): null}
            {i.translationId ? (
              <TranslationText id={i.translationId} style={[styles.itemText, isSelected && styles.itemText__active]} />
            ) : null}
          </Pressable>
        );
      })}
    </View>
  );
};

export default Switch;
