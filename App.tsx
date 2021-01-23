import React, { useEffect, useMemo, useState } from 'react';
import { StyleSheet, View, StatusBar, Platform, Text, TouchableOpacity, Image, BackHandler } from 'react-native';
import CryptoViewerIconsMap from './assets/fonts/CryptoViewerIconsMap';
import * as Font from 'expo-font';

import Colors from './assets/Colors';

import CryptoList from './components/CryptoList/CryptoList';
import Wallet from './components/Wallet/Wallet';
import Settings from './components/Settings/Settings';
import CryptoDetails from './components/CryptoDetails/CryptoDetails';
import BottomBar from './components/Utils/BottomBar';

import StorageService from './services/Storage.service';

import quoteType from './models/QuoteType';
import dateFormats, { dateFormatType } from './models/DateFormat';
import Currency from './models/Crypto';
import UtilsService from './services/Utils.service';
import WalletItem from './models/WalletItem';
import { DATE_FORMAT_KEY, QUOTE_STORAGE_KEY, WALLET_KEY } from './constants';

const STATUSBAR_HEIGHT: number = Platform.OS === 'ios' ? 20 : StatusBar.currentHeight;

export type tabType = 'list' | 'wallet' | 'settings' | 'details';

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

  // TOP BAR
  topBar: {
    flexBasis: 60,
    flexGrow: 0,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottomColor: Colors.gray,
    borderBottomWidth: 1,
    paddingLeft: 10,
    paddingRight: 10
  },
  topBarIconContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  topBarText: {
    marginLeft: 5,
    fontSize: 20,
    color: Colors.blue,
  },

  cryptoViewerIcon: {
    fontSize: 20,
    fontFamily: 'crypto-viewer'
  }
});

const App = () => {
  const [activeTab, setActiveTab] = useState<tabType>('list');
  const [activeQuote, setActiveQuote] = useState<quoteType>({ code: 'USD', symbol: '$' });
  const [dateFormat, setDateFormat] = useState<dateFormatType>(dateFormats.american);
  const [details, setDetails] = useState<object | null>(null);

  const [areFontsLoaded, setFontsLoaded] = useState<boolean>(false);

  const [statusBarColor, setStatusBarColor] = useState<string>(Colors.white);

  const [wallet, setWallet] = useState<WalletItem[]>([]);

  // Generic function to change the current interface of the app. Details are all it is required to load the new interface
  const changeTab = (tabName: tabType, newDetails: Object = null) => {
    if (tabName === 'details' && !newDetails) {
      return null;
    }

    if (tabName === 'details') {
      setStatusBarColor(UtilsService.getColorFromCrypto((newDetails as Currency).id));
    } else {
      setStatusBarColor(Colors.white);
    }
    setDetails(newDetails);
    setActiveTab(tabName);
  }

  // Change quote from the settings, then store it
  const changeQuote = (newQuote: quoteType) => {
    StorageService.storeData(QUOTE_STORAGE_KEY, JSON.stringify(newQuote));
    setActiveQuote(newQuote);
  }

  // Change date format from the settings, then store it
  const changeDateFormat = (newDateFormat: dateFormatType) => {
    StorageService.storeData(DATE_FORMAT_KEY, newDateFormat);
    setDateFormat(newDateFormat);
  }

  // Change wallet content from the wallet interface, then store it
  const changeWallet = (newWallet: WalletItem[]) => {
    StorageService.storeData(WALLET_KEY, JSON.stringify(newWallet));
    setWallet(newWallet);
  }

  // Technical function to render the current component depending on the current interface that has to be laoded
  const activeTabRendered = useMemo(() => {
    switch (activeTab) {
      case 'list':
        return <CryptoList
          quote={activeQuote}
          changeTab={changeTab} />;
      case 'wallet':
        return <Wallet
          quote={activeQuote}
          changeTab={changeTab}
          wallet={wallet}
          changeWallet={changeWallet} />;
      case 'settings':
        return <Settings
          quote={activeQuote}
          changeQuote={changeQuote}
          dateFormat={dateFormat}
          changeDateFormat={changeDateFormat} />;
      case 'details':
        if (!!details) {
          return <CryptoDetails
            crypto={details as Currency}
            quote={activeQuote}
            dateFormat={dateFormat} />
        } else {
          changeTab('list');
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
        // cryptocurrencies (from npm package 'cryptocurrency-icons')
        'cryptocurrencies': require('./node_modules/cryptocurrency-icons-font/dist/webfont/cryptocurrency-icons.ttf'),
        // Specific font for the project icons
        'crypto-viewer': require('./assets/fonts/crypto-viewer.ttf')
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
      if (activeTab === 'settings' || activeTab === 'details') {
        changeTab('list');
        return true;
      }
      return false;
    });

    return () => backHandler.remove();
  }, []);

  if (!areFontsLoaded) {
    return null;
  }
  // Only render if fonts are loaded, to limit the reflow and API calls
  return (
    <View style={styles.container}>
      <Text style={{ ...styles.statusBar, backgroundColor: statusBarColor }} />
      <View style={styles.topBar}>
        <TouchableOpacity onPress={() => changeTab('list')} style={styles.topBarIconContainer}>
          <Image style={{ width: 50, height: 50 }} source={require('./assets/icon.png')} />
          <Text style={styles.topBarText}>Crypto Viewer</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => changeTab('settings')}>
          <Text style={styles.cryptoViewerIcon}>{CryptoViewerIconsMap.settings.unicode}</Text>
        </TouchableOpacity>
      </View>
      {activeTabRendered}
      <BottomBar
        activeTab={activeTab}
        changeTab={changeTab}
      />
    </View>
  );
}

export default App;
