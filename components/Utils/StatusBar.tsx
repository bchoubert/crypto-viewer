import { FC, memo } from "react";
import { Platform, StyleSheet, View } from "react-native";
import Constants from 'expo-constants';

const StatusBar: FC = memo(() => {
  const styles = StyleSheet.create({
    statusBar: {
      flexBasis: Platform.OS === 'ios' ? 20 : Constants.statusBarHeight,
    }
  })

  return (
    <View style={styles.statusBar} />
  );
});

export default StatusBar; 