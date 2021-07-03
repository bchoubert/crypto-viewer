import React, { FC, ReactNode } from "react";
import NavigationProvider from "./contexts/NavigationProvider";
import SettingsProvider from "./contexts/SettingsProvider";
import TranslationProvider from "./contexts/TranslationProvider";

interface AppProviderProps {
  children: ReactNode;
}

const AppProviders: FC<AppProviderProps> = ({
  children,
}) => (
  <SettingsProvider>
    <TranslationProvider>
      <NavigationProvider>
        {children}
      </NavigationProvider>
    </TranslationProvider>
  </SettingsProvider>
);

export default AppProviders;
