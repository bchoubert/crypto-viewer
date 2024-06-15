import Colors from "@/assets/Colors";
import { FC, memo } from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";

export interface ToggleButtonItem {
  id: string;
  label: string;
}

interface ToggleButtonProps {
  items: ToggleButtonItem[];
  selectedItem: string;
  setSelectedItem: (c: string) => void;
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    width: '60%',
    minWidth: 200,
    alignItems: 'center',
  },
  item: {
    flex: 1,
    textAlign: 'center',
    borderRightWidth: 1,
    borderRightColor: Colors.blue,
    borderTopWidth: 1,
    borderTopColor: Colors.blue,
    borderBottomWidth: 1,
    borderBottomColor: Colors.blue,
    paddingTop: 5,
    paddingBottom: 5,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  selectedItem: {
    backgroundColor: 'blue',
  },
  firstItem: {
    borderLeftWidth: 1,
    borderLeftColor: Colors.blue,
    borderTopLeftRadius: 5,
    borderBottomLeftRadius: 5,
  },
  lastItem: {
    borderTopRightRadius: 5,
    borderBottomRightRadius: 5,
  },
  selectedItemText: {
    color: Colors.white,
  }
})

const ToggleButton: FC<ToggleButtonProps> = memo(({
  items,
  selectedItem,
  setSelectedItem,
}) => (
  <View style={styles.container}>
    {items.map((i, index) => (
      <Pressable
        key={i.id}
        style={{
          ...styles.item, 
          ...(index === 0 ? styles.firstItem : {}), 
          ...(selectedItem === i.id ? styles.selectedItem : {}),
          ...(index === (items.length - 1) ? styles.lastItem : {})
        }} 
        onPress={() => setSelectedItem(i.id)}
      >
        <Text style={{
          ...(selectedItem === i.id ? styles.selectedItemText : {}),
        }}>{i.label}</Text>
      </Pressable>
    ))}
  </View>
));

export default ToggleButton;
