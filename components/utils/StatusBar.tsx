import { memo, useContext, useMemo } from "react";
import { StatusBar  as NativeStatusBar, StyleSheet, View } from "react-native";
import { getStatusBarHeight } from "react-native-status-bar-height";
import { RouterContext } from "../../contexts/router.provider";

const StatusBar = memo(() => {
  const statusBarHeight = getStatusBarHeight();

  const { cryptoColor } = useContext(RouterContext);

  const styles = useMemo(() => StyleSheet.create({
    replacement: {
      width: '100%',
      backgroundColor: cryptoColor || 'grey',
      height: statusBarHeight,
    }
  }), [statusBarHeight, cryptoColor]);
  
  return (
    <>
      <NativeStatusBar translucent={true} />
      <View style={styles.replacement} />
    </>
  );
});

export default StatusBar;
