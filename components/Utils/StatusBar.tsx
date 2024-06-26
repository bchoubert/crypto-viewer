import { FC, memo, useContext, useMemo } from "react";
import { Platform, StyleSheet, View } from "react-native";
import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import Constants from 'expo-constants';

import { ThemeContext } from "@/contexts/theme.provider";

const StatusBar: FC = memo(() => {
  const theme = useContext(ThemeContext);

  const styles = useMemo(() => StyleSheet.create({
    statusBar: {
      backgroundColor: theme[100],
      flexBasis: Platform.OS === 'ios' ? 20 : Constants.statusBarHeight,
    }
  }), [theme]);

  return (
    <>
      <ExpoStatusBar style={theme.statusBar} />
      <View style={styles.statusBar} />
    </>
  );
});

export default StatusBar; 