import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { StyleSheet, View, StatusBar, Platform, Text, BackHandler } from 'react-native';

import * as Font from 'expo-font';

import Colors from './assets/Colors';

import CryptoList from './components/CryptoList/CryptoList';
import Wallet from './components/Wallet/Wallet';
import Settings from './components/Settings/Settings';
import CryptoDetails from './components/CryptoDetails/CryptoDetails';
import BottomBar from './components/Utils/BottomBar';

import StorageService from './services/Storage.service';
import UtilsService from './services/Utils.service';

import quoteType from './models/QuoteType';
import dateFormats, { dateFormatType } from './models/DateFormat';
import Currency from './models/Crypto';
import WalletItem from './models/WalletItem';
import Tabs, { tabType } from './models/Tabs';

import { DATE_FORMAT_KEY, QUOTE_STORAGE_KEY, WALLET_KEY } from './constants';
import TopBar from './components/Utils/TopBar';

const STATUSBAR_HEIGHT: number = Platform.OS === 'ios' ? 20 : StatusBar.currentHeight;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    textAlign: 'center',
    display: 'flex',
    flexDirection: 'column'
  },

  // STATUS BAR
  statusBar: {
    flexBasis: STATUSBAR_HEIGHT,
    flexGrow: 0
  },
});

const App = () => {
  const [activeTab, setActiveTab] = useState<tabType>(Tabs.list);
  const [activeQuote, setActiveQuote] = useState<quoteType>({ code: 'USD', symbol: '$' });
  const [dateFormat, setDateFormat] = useState<dateFormatType>(dateFormats.american);
  const [details, setDetails] = useState<object | null>(null);

  const [areFontsLoaded, setFontsLoaded] = useState<boolean>(false);

  const [statusBarColor, setStatusBarColor] = useState<string>(Colors.white);

  const [wallet, setWallet] = useState<WalletItem[]>([]);

  // Generic function to change the current interface of the app. Details are all it is required to load the new interface
  const changeTab = useCallback((tabName: tabType, newDetails: Object = null) => {
    if (tabName === Tabs.details && !newDetails) {
      return null;
    }

    setStatusBarColor(tabName === Tabs.details ? UtilsService.getColorFromCrypto((newDetails as Currency).id) : Colors.white);
    setDetails(newDetails);
    setActiveTab(tabName);
  }, [setStatusBarColor, setDetails, setActiveTab]);

  // Change quote from the settings, then store it
  const changeQuote = useCallback((newQuote: quoteType) => {
    StorageService.storeData(QUOTE_STORAGE_KEY, JSON.stringify(newQuote));
    setActiveQuote(newQuote);
  }, [setActiveQuote]);

  // Change date format from the settings, then store it
  const changeDateFormat = useCallback((newDateFormat: dateFormatType) => {
    StorageService.storeData(DATE_FORMAT_KEY, newDateFormat);
    setDateFormat(newDateFormat);
  }, [setDateFormat]);

  // Change wallet content from the wallet interface, then store it
  const changeWallet = useCallback((newWallet: WalletItem[]) => {
    StorageService.storeData(WALLET_KEY, JSON.stringify(newWallet));
    setWallet(newWallet);
  }, [setWallet]);

  // Technical function to render the current component depending on the current interface that has to be laoded
  const activeTabRendered = useMemo(() => {
    switch (activeTab) {
      case Tabs.list:
        return <CryptoList
          quote={activeQuote}
          changeTab={changeTab} />;
      case Tabs.wallet:
        return <Wallet
          quote={activeQuote}
          changeTab={changeTab}
          wallet={wallet}
          changeWallet={changeWallet} />;
      case Tabs.settings:
        return <Settings
          quote={activeQuote}
          changeQuote={changeQuote}
          dateFormat={dateFormat}
          changeDateFormat={changeDateFormat} />;
      case Tabs.details:
        if (!!details) {
          return <CryptoDetails
            crypto={details as Currency}
            quote={activeQuote}
            dateFormat={dateFormat} />
        } else {
          changeTab(Tabs.list);
        }
      default:
        return <CryptoList
          quote={activeQuote}
          changeTab={changeTab} />;
    }
  }, [activeTab, activeQuote, dateFormat]);

  useEffect(() => {
    const asyncLoadFonts = async () => {
      // Load specific fonts
      Font.loadAsync({
        // Specific font for the project icons
        'crypto-viewer': require('./assets/fonts/baseIcons/crypto-viewer.ttf')
      }).then(() => setFontsLoaded(true));
    };

    // Get the activeQuote back from the storage
    StorageService.getData(QUOTE_STORAGE_KEY).then(value => {
      if (value != null) {
        setActiveQuote(JSON.parse(value));
      }
    });

    // Get the dateFormat back from the storage
    StorageService.getData(DATE_FORMAT_KEY).then(value => {
      if (value != null) {
        setDateFormat(value as dateFormatType);
      }
    });

    // Get the wallet content back from the storage
    StorageService.getData(WALLET_KEY).then(value => {
      if (value != null) {
        setWallet(JSON.parse(value) as WalletItem[]);
      }
    });

    asyncLoadFonts();

    const backHandler = BackHandler.addEventListener('hardwareBackPress', () => {
      if ([Tabs.settings, Tabs.details].includes(activeTab)) {
        changeTab(Tabs.list);
        return true;
      }
      return false;
    });

    return () => backHandler.remove();
  }, []);

  const handleChangeTabList = useCallback(() => changeTab(Tabs.list), [changeTab]);
  const handleChangeTabSettings = useCallback(() => changeTab(Tabs.settings), [changeTab]);
  const handleBackAction = useCallback(() => changeTab(Tabs.list), [changeTab]);

  if (!areFontsLoaded) {
    return null;
  }
  // Only render if fonts are loaded, to limit the reflow and API calls
  return (
    <View style={styles.container}>
      <Text style={{ ...styles.statusBar, backgroundColor: statusBarColor }} />
      <TopBar
        handleChangeTabList={handleChangeTabList}
        handleChangeTabSettings={handleChangeTabSettings}
        handleBackAction={handleBackAction}
        activeTab={activeTab}
        crypto={details as Currency}
      />
      {activeTabRendered}
      <BottomBar
        activeTab={activeTab}
        changeTab={changeTab}
      />
    </View>
  );
}

export default App;
