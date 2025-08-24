import DropDownPicker, { DropDownPickerProps } from 'react-native-dropdown-picker';
import { SwitchItem } from './Switch';
import { useContext, useState } from 'react';
import { Dimensions, StyleSheet, View } from 'react-native';
import { ThemeContext } from '../../contexts/theme.provider';

interface DropdownProps<T> {
  items: SwitchItem<T>[];
  selectedItem: T;
  changeSelectedItem: (newValue: T) => void;
  placeholder: string;
}

function Dropdown<T extends string>({
  items,
  selectedItem,
  changeSelectedItem,
  placeholder,
}: DropdownProps<T>) {
  const { theme, mode } = useContext(ThemeContext);

  const [open, setOpen] = useState(false);

  const setValue = (valueFn: DropDownPickerProps<T>['setValue']) => 
    changeSelectedItem((valueFn as () => T)());

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      marginHorizontal: 8,
    },
    dropdown: {
      borderColor: theme.colors.action,
    }
  });

  return (
    <View style={styles.container}>
      <DropDownPicker
        open={open}
        value={selectedItem}
        items={items}
        setOpen={setOpen}
        setValue={setValue}
        placeholder={placeholder}
        style={styles.dropdown}
        theme={mode}
        autoScroll
      />
    </View>      
  );
};

export default Dropdown;
