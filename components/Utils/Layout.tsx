import React, {
  FC, useContext, useEffect, useMemo, useState, memo,
} from 'react';
import { StyleSheet, View, StatusBar } from 'react-native';

import * as Font from 'expo-font';

import CryptoList from '../CryptoList/CryptoList';
import Wallet from '../Wallet/Wallet';
import Settings from '../Settings/Settings';
import CryptoDetails from '../CryptoDetails/CryptoDetails';
import BottomBar from './BottomBar';

import Tabs from '../../models/Tabs';

import TopBar from './Topbar';
import { NavigationContext } from '../../contexts/NavigationProvider';
import { ThemeContext } from '../../contexts/ThemeProvider';

interface LayoutProps {}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    textAlign: 'center',
    display: 'flex',
    flexDirection: 'column',
  },
});

const Layout: FC<LayoutProps> = () => {
  const [areFontsLoaded, setFontsLoaded] = useState<boolean>(false);

  const {
    activeTab, details, changeTab, statusBarColor, statusBarMode,
  } = useContext(NavigationContext);

  const theme = useContext(ThemeContext);

  // Technical function to render the current component
  // depending on the current interface that has to be laoded
  const activeTabRendered = useMemo(() => {
    switch (activeTab) {
      case Tabs.list:
        return (
          <CryptoList />
        );
      case Tabs.wallet:
        return (
          <Wallet />
        );
      case Tabs.settings:
        return (
          <Settings />
        );
      case Tabs.details:
        if (details) {
          return (
            <CryptoDetails />
          );
        }
        // fallback
        changeTab(Tabs.list);
        return (
          <CryptoList />
        );
      default:
        return (
          <CryptoList />
        );
    }
  }, [activeTab]);

  useEffect(() => {
    const asyncLoadFonts = async () => {
      // Load specific fonts
      Font.loadAsync({
        // Specific font for the project icons
        // eslint-disable-next-line global-require
        'crypto-viewer': require('../../assets/fonts/baseIcons/crypto-viewer.ttf'),
      }).then(() => setFontsLoaded(true));
    };

    asyncLoadFonts();
  }, []);

  if (!areFontsLoaded) {
    return null;
  }
  // Only render if fonts are loaded, to limit the reflow and API calls
  return (
    <View style={{ ...styles.container, ...{ backgroundColor: theme.backgroundColor } }}>
      <StatusBar
        backgroundColor={statusBarColor}
        barStyle={statusBarMode}
      />
      <TopBar />
      {activeTabRendered}
      <BottomBar />
    </View>
  );
};

export default memo(Layout);
