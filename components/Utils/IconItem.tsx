import { FC, memo } from "react";
import Icon, { EIcon } from "./Icon";
import { StyleProp, StyleSheet, Text, View, ViewStyle } from "react-native";
import Colors from "@/assets/Colors";


interface IconItemProps {
  icon: EIcon;
  text: string;
  subtext: string;
  color: string;
  style?: object;
}

const styles = StyleSheet.create({
  container: {
    height: 40,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    marginTop: 10,
  },
  icon_container: {
    height: 40,
    width: 40,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
  },
  labels: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
  }
});

const IconItem: FC<IconItemProps> = memo(({
  icon,
  text,
  subtext,
  color,
  style,
}) => (
  <View style={{ ...styles.container, ...(style || {}) }}>
    <View style={{ ...styles.icon_container, backgroundColor: color }}>
      <Icon name={icon} color={Colors.white} />
    </View>
    <View style={styles.labels}>
      <Text>{text}</Text>
      <Text>{subtext}</Text>
    </View>
  </View>
));

export default IconItem;
