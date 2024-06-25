import { FC, memo, useMemo } from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";

import Colors from "@/assets/Colors";

export interface ToggleButtonItem {
  id: string;
  label: string;
}

interface ToggleButtonProps {
  items: ToggleButtonItem[];
  selectedItem: string;
  setSelectedItem: (c: string) => void;

  fullWidth?: boolean;
  color?: string;
}

const ToggleButton: FC<ToggleButtonProps> = memo(({
  items,
  selectedItem,
  setSelectedItem,
  fullWidth,
  color,
}) => {
  const styles = useMemo(() => StyleSheet.create({
    container: {
      display: 'flex',
      flexDirection: 'row',
      width: fullWidth ? '100%' : '60%',
      minWidth: 200,
      alignItems: 'center',
    },
    item: {
      flex: 1,
      textAlign: 'center',
      borderRightWidth: 1,
      borderRightColor: color || Colors.blue,
      borderTopWidth: 1,
      borderTopColor: color || Colors.blue,
      borderBottomWidth: 1,
      borderBottomColor: color || Colors.blue,
      paddingTop: 5,
      paddingBottom: 5,
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
    },
    selectedItem: {
      backgroundColor: color || Colors.blue,
    },
    firstItem: {
      borderLeftWidth: 1,
      borderLeftColor: color || Colors.blue,
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
  }), [fullWidth, color]);
  
  return (
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
  );
});

export default ToggleButton;
