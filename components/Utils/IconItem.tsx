import { FC, memo, useContext, useMemo } from "react";
import { StyleSheet, Text, View } from "react-native";

import Icon, { EIcon } from "./Icon";

import Colors from "@/assets/Colors";
import { ThemeContext } from "@/contexts/theme.provider";


interface IconItemProps {
  icon: EIcon;
  text: string;
  subtext: string;
  color: string;
  style?: object;
}

const IconItem: FC<IconItemProps> = memo(({
  icon,
  text,
  subtext,
  color,
  style,
}) => {
  const theme = useContext(ThemeContext);

  const styles = useMemo(() => StyleSheet.create({
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
    },
    text: {
      color: theme[900]
    }
  }), [theme]);

  return (
    <View style={{ ...styles.container, ...(style || {}) }}>
      <View style={{ ...styles.icon_container, backgroundColor: color }}>
        <Icon name={icon} color={Colors.white} />
      </View>
      <View style={styles.labels}>
        <Text style={styles.text}>{text}</Text>
        <Text style={styles.text}>{subtext}</Text>
      </View>
    </View>
  );
});

export default IconItem;
