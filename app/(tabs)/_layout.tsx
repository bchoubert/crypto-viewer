import { EColor } from "@/assets/Colors";
import Icon, { EIcon } from "@/components/Utils/Icon";
import { TranslationsContext } from "@/contexts/translations.provider";
import { Tabs } from "expo-router";
import { FC, memo, useContext } from "react";

const Layout: FC = memo(() => {
  const translation = useContext(TranslationsContext);
  
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
      }}
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
