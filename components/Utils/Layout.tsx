import React, { FC, useContext, useEffect, useMemo, useState } from 'react';
import { StyleSheet, View, StatusBar } from 'react-native';

import * as Font from 'expo-font';

import CryptoList from '../../components/CryptoList/CryptoList';
import Wallet from '../../components/Wallet/Wallet';
import Settings from '../../components/Settings/Settings';
import CryptoDetails from '../../components/CryptoDetails/CryptoDetails';
import BottomBar from '../../components/Utils/BottomBar';

import Tabs from '../../models/Tabs';

import TopBar from '../../components/Utils/TopBar';
import { NavigationContext } from '../../contexts/NavigationProvider';

interface LayoutProps {

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    textAlign: 'center',
    display: 'flex',
    flexDirection: 'column'
  },
});

const Layout: FC<LayoutProps> = () => {
  const [areFontsLoaded, setFontsLoaded] = useState<boolean>(false);

  const {
    activeTab, details, changeTab, statusBarColor, statusBarMode,
  } = useContext(NavigationContext);

  // Technical function to render the current component depending on the current interface that has to be laoded
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
        if (!!details) {
          return (
            <CryptoDetails />
          );
        } else {
          changeTab(Tabs.list);
        }
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
        'crypto-viewer': require('./../../assets/fonts/baseIcons/crypto-viewer.ttf')
      }).then(() => setFontsLoaded(true));
    };

    asyncLoadFonts();
  }, []);

  if (!areFontsLoaded) {
    return null;
  }
  // Only render if fonts are loaded, to limit the reflow and API calls
  return (
    <View style={styles.container}>
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

export default Layout;
