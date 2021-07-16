import React, {
  createContext, FC, ReactNode, useCallback, useState, useEffect, useMemo, memo, useContext,
} from 'react';
import { StatusBarStyle, BackHandler } from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';

import Tabs, { TabType } from '../models/Tabs';
import Crypto from '../models/Crypto';
import ColorService from '../services/Color.service';
import { ThemeContext } from './ThemeProvider';

export const NavigationContext = createContext({
  activeTab: Tabs.list as TabType,
  details: null as Crypto | null,
  statusBarColor: Colors.white as string,
  statusBarMode: 'dark-content' as StatusBarStyle,
  changeTab: null as (tabName: TabType, newDetails?: Object) => void | null,
});

interface NavigationProviderProps {
  children: ReactNode;
}

const NavigationProvider: FC<NavigationProviderProps> = ({ children }) => {
  const theme = useContext(ThemeContext);

  const [activeTab, setActiveTab] = useState<TabType>(Tabs.list);

  // Store details about current active tab
  const [details, setDetails] = useState<Crypto | null>(null);

  // StatusBar mode
  const [statusBarColor, setStatusBarColor] = useState<string>(theme.backgroundColor);
  const [statusBarMode, setStatusBarMode] = useState<StatusBarStyle>('dark-content');

  const changeTab = useCallback((tabName: TabType, newDetails: Crypto = null) => {
    setStatusBarColor(tabName === Tabs.details
      ? ColorService.getColorFromCrypto(newDetails.id)
      : theme.backgroundColor);
    setStatusBarMode(tabName === Tabs.details ? 'light-content' as StatusBarStyle : 'dark-content' as StatusBarStyle);
    setDetails(newDetails);
    setActiveTab(tabName);
  }, []);

  const handleBackButton = useCallback(() => {
    if ([Tabs.settings, Tabs.details].includes(activeTab)) {
      changeTab(Tabs.list);
      return true;
    }
    return false;
  }, [activeTab, changeTab]);

  useEffect(() => {
    const backHandler = BackHandler.addEventListener('hardwareBackPress', handleBackButton);
    return () => backHandler.remove();
  }, [activeTab]);

  const contextValues = useMemo(() => ({
    activeTab,
    details,
    statusBarColor,
    statusBarMode,
    changeTab,
  }), [activeTab, details, statusBarColor, statusBarMode, changeTab]);

  useEffect(() => {
    setStatusBarColor(theme.backgroundColor);
  }, [theme]);

  return (
    <NavigationContext.Provider value={contextValues}>
      {children}
    </NavigationContext.Provider>
  );
};

export default memo(NavigationProvider);
