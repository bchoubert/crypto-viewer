import React, { FC, ReactNode, memo } from 'react';
import NavigationProvider from './contexts/NavigationProvider';
import SettingsProvider from './contexts/SettingsProvider';
import ThemeProvider from './contexts/ThemeProvider';
import TranslationProvider from './contexts/TranslationProvider';

interface AppProviderProps {
  children: ReactNode;
}

const AppProviders: FC<AppProviderProps> = ({
  children,
}) => (
  <SettingsProvider>
    <TranslationProvider>
      <ThemeProvider>
        <NavigationProvider>
          {children}
        </NavigationProvider>
      </ThemeProvider>
    </TranslationProvider>
  </SettingsProvider>
);

export default memo(AppProviders);
