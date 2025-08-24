import { FC, memo, useContext, useMemo } from "react";
import ViewSelector from "./components/utils/ViewSelector";
import MenuBar from "./components/utils/MenuBar";
import { Dimensions, StyleSheet, View } from "react-native";
import BottomBar from "./components/utils/BottomBar";
import { ThemeContext } from "./contexts/theme.provider";
import StatusBar from "./components/utils/StatusBar";

const Content: FC = memo(() => {
  const { theme } = useContext(ThemeContext);

  const styles = useMemo(() => StyleSheet.create({
    content: {
      height: Dimensions.get('screen').height,
      display: 'flex',
      flexDirection: 'column',
      backgroundColor: theme.colors.background,
      width: '100%',
    },
  }), [theme]);

  return (
    <View style={styles.content}>
      <StatusBar />
      <MenuBar />

      <ViewSelector />

      <BottomBar />
    </View>
  );
});

export default Content;

