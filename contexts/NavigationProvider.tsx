import React, {
  createContext, FC, ReactNode, useCallback, useState, useEffect, useMemo, memo, useContext,
} from 'react';
import { StatusBarStyle, BackHandler } from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';

import Tabs, { TabType } from '../models/Tabs';
import Crypto from '../models/Crypto';
import ColorService from '../services/Color.service';
import { ThemeContext } from './ThemeProvider';

export interface NavigationContextInterface {
  activeTab: TabType;
  details: Crypto | null;
  statusBarColor: string;
  statusBarMode: StatusBarStyle;
  changeTab: ((tabName: TabType, newDetails?: Object) => void) | null;
  handleBackAction: (() => void) | null;
}

export const NavigationContext = createContext({
  activeTab: Tabs.list,
  details: null,
  statusBarColor: Colors.white,
  statusBarMode: 'dark-content',
  changeTab: null,
  handleBackAction: null,
} as NavigationContextInterface);

interface NavigationProviderProps {
  children: ReactNode;
}

const NavigationProvider: FC<NavigationProviderProps> = ({ children }) => {
  const theme = useContext(ThemeContext);

  const [activeTab, setActiveTab] = useState<TabType>(Tabs.list);

  const [lastListOrWallet, setLastListOrWallet] = useState<TabType>('list');

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
    if ([Tabs.list, Tabs.wallet].includes(tabName)) {
      setLastListOrWallet(tabName);
    }
  }, [theme]);

  const handleBackAction = useCallback(() => {
    if ([Tabs.settings, Tabs.details].includes(activeTab)) {
      changeTab(lastListOrWallet || Tabs.list);
      return true;
    }
    return false;
  }, [activeTab, changeTab, lastListOrWallet]);

  useEffect(() => {
    const backHandler = BackHandler.addEventListener('hardwareBackPress', handleBackAction);
    return () => backHandler.remove();
  }, [activeTab]);

  const contextValues: NavigationContextInterface = useMemo(() => ({
    activeTab,
    details,
    statusBarColor,
    statusBarMode,
    changeTab,
    handleBackAction,
  }), [activeTab, details, statusBarColor, statusBarMode, changeTab, handleBackAction]);

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
