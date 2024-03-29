import React, { FC, memo, useContext } from 'react';
import {
  TouchableOpacity, View, Text, StyleSheet,
} from 'react-native';

import Colors from '../../assets/Colors';
import { ThemeContext } from '../../contexts/ThemeProvider';

const styles = StyleSheet.create({
  selector_container: {
    flexDirection: 'row',
    alignSelf: 'stretch',
    borderRadius: 18,
    borderTopWidth: 1,
    borderBottomWidth: 1,
    height: 35,
  },
  selector_item: {
    flex: 1,
    height: 34,
    textAlign: 'center',
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 17,
  },
  selector_item_text: {
    color: Colors.white,
    flex: 1,
    textAlign: 'center',
  },
});

interface SelectorProps {
  items: (string | any)[];
  activeItem: string;
  setActiveItem: (item: string) => void;
  color: string;
  renderItem?: (item: any) => string;
}

const Selector: FC<SelectorProps> = ({
  items,
  activeItem,
  setActiveItem,
  color,
  renderItem,
}) => {
  const theme = useContext(ThemeContext);

  return (
    <View style={{ ...styles.selector_container, borderColor: color }}>
      {items.map((item: string | any) => (
        <TouchableOpacity
          key={renderItem?.(item) || item}
          style={{
            ...styles.selector_item,
            ...((activeItem === item) ? { backgroundColor: color } : []),
          }}
          onPress={() => setActiveItem(item)}
        >
          <Text
            style={{
              ...styles.selector_item_text,
              ...((activeItem !== item) ? { color: theme.textColor } : []),
            }}
          >
            {renderItem?.(item) || item}
          </Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

export default memo(Selector);
