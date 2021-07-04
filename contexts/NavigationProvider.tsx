import React, {
  createContext, FC, ReactNode, useCallback, useState, useEffect, useMemo, memo,
} from 'react';
import { StatusBarStyle, BackHandler } from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';

import Tabs, { TabType } from '../models/Tabs';
import Currency from '../models/Crypto';
import UtilsService from '../services/Utils.service';

export const NavigationContext = createContext({
  activeTab: Tabs.list as TabType,
  details: null as Currency | null,
  statusBarColor: Colors.white as string,
  statusBarMode: 'dark-content' as StatusBarStyle,
  changeTab: null as (tabName: TabType, newDetails?: Object) => void | null,
});

interface NavigationProviderProps {
  children: ReactNode;
}

const NavigationProvider: FC<NavigationProviderProps> = ({ children }) => {
  const [activeTab, setActiveTab] = useState<TabType>(Tabs.list);

  // Store details about current active tab
  const [details, setDetails] = useState<Currency | null>(null);

  // StatusBar mode
  const [statusBarColor, setStatusBarColor] = useState<string>(Colors.white);
  const [statusBarMode, setStatusBarMode] = useState<StatusBarStyle>('dark-content');

  const changeTab = useCallback((tabName: TabType, newDetails: Currency = null) => {
    setStatusBarColor(tabName === Tabs.details
      ? UtilsService.getColorFromCrypto(newDetails.id)
      : Colors.white);
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

  return (
    <NavigationContext.Provider value={contextValues}>
      {children}
    </NavigationContext.Provider>
  );
};

export default memo(NavigationProvider);
