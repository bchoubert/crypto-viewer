import React, { FC } from 'react';
import {
  TouchableOpacity, View, Text, StyleSheet,
} from 'react-native';

import Colors from '../../assets/Colors';

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
  items: string[];
  activeItem: string;
  setActiveItem: (item: string) => void;
  color: string;
}

const Selector: FC<SelectorProps> = ({
  items,
  activeItem,
  setActiveItem,
  color,
}) => (
  <View style={{ ...styles.selector_container, borderColor: color }}>
    {items.map((item: string) => (
      <TouchableOpacity
        key={item}
        style={{
          ...styles.selector_item,
          ...((activeItem === item) ? { backgroundColor: color } : []),
        }}
        onPress={() => setActiveItem(item)}
      >
        <Text style={{ ...styles.selector_item_text, ...((activeItem !== item) ? { color } : []) }}>
          {item}
        </Text>
      </TouchableOpacity>
    ))}
  </View>
);

export default Selector;
