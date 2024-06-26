import { Tabs } from "expo-router";
import { FC, memo, useContext, useMemo } from "react";
import { StyleSheet } from "react-native";

import { EColor } from "@/assets/Colors";
import Icon, { EIcon } from "@/components/Utils/Icon";
import { TranslationsContext } from "@/contexts/translations.provider";
import { ThemeContext } from "@/contexts/theme.provider";

const Layout: FC = memo(() => {
  const translation = useContext(TranslationsContext);
  const theme = useContext(ThemeContext);

  const styles = useMemo(() => StyleSheet.create({
    container: {
      backgroundColor: theme[100],
    },
    tab: {
      backgroundColor: theme[100],
    }
  }), [theme]);
  
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarStyle: styles.tab,
      }}
      sceneContainerStyle={styles.container}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: translation.menu.prices,
          tabBarIcon: ({ focused }) => <Icon name={EIcon.coins} color={focused ? EColor.blue : EColor.gray} width={22} />,
        }}
      />
      <Tabs.Screen
        name="wallet"
        options={{
          title: translation.menu.wallet,
          tabBarIcon: ({ focused }) => <Icon name={EIcon.wallet} color={focused ? EColor.blue : EColor.gray} width={22} />,
        }}
      />
    </Tabs>
  );
});

export default Layout;
