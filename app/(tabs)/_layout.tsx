import { EColor } from "@/assets/Colors";
import Icon, { EIcon } from "@/components/Icon";
import { Stack, Tabs } from "expo-router";
import { FC, memo } from "react";

const Layout: FC = memo(() => (
  <Tabs
    screenOptions={{
      headerShown: false,
    }}
  >
    <Tabs.Screen
      name="index"
      options={{
        title: 'Home',
        tabBarIcon: ({ focused }) => <Icon name={EIcon.home} color={focused ? EColor.blue : EColor.gray} />,
      }}
    />
    <Tabs.Screen
      name="wallet"
      options={{
        title: 'Wallet',
        tabBarIcon: ({ focused }) => <Icon name={EIcon.wallet} color={focused ? EColor.blue : EColor.gray} />,
      }}
    />
  </Tabs>
));

export default Layout;
