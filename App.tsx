import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { StyleSheet, View, StatusBar, Platform, BackHandler, StatusBarStyle, ToastAndroid } from 'react-native';

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

import { DATE_FORMAT_KEY, FAVOURITES_KEY, GRAPH_MODE_KEY, QUOTE_STORAGE_KEY, WALLET_KEY } from './constants';
import TopBar from './components/Utils/TopBar';
import { graphModeType } from './models/GraphMode';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    textAlign: 'center',
    display: 'flex',
    flexDirection: 'column'
  },
});

const App = () => {
  const [activeTab, setActiveTab] = useState<tabType>(Tabs.list);

  const [activeQuote, setActiveQuote] = useState<quoteType>({ code: 'USD', symbol: '$' });
  const [dateFormat, setDateFormat] = useState<dateFormatType>(dateFormats.american);
  const [favouritesList, setFavouriesList] = useState<string[]>([]);
  const [graphMode, setGraphMode] = useState<graphModeType>('Simple');

  const [details, setDetails] = useState<object | null>(null);

  const [areFontsLoaded, setFontsLoaded] = useState<boolean>(false);

  const [statusBarColor, setStatusBarColor] = useState<string>(Colors.white);
  const [statusBarMode, setStatusBarMode] = useState<StatusBarStyle>('dark-content');

  const [wallet, setWallet] = useState<WalletItem[]>([]);

  // Generic function to change the current interface of the app. Details are all it is required to load the new interface
  const changeTab = useCallback((tabName: tabType, newDetails: Object = null) => {
    if (tabName === Tabs.details && !newDetails) {
      return null;
    }

    setStatusBarColor(tabName === Tabs.details ? UtilsService.getColorFromCrypto((newDetails as Currency).id) : Colors.white);
    setStatusBarMode(tabName === Tabs.details ? 'light-content' as StatusBarStyle : 'dark-content' as StatusBarStyle);
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
    setWallet([...newWallet]);
  }, [setWallet]);

  // Change graphMode content from the settings, then store it
  const changeGraphMode = useCallback((newGraphMode: graphModeType) => {
    StorageService.storeData(GRAPH_MODE_KEY, newGraphMode);
    setGraphMode(newGraphMode);
  }, [setGraphMode]);

  // Technical function to render the current component depending on the current interface that has to be laoded
  const activeTabRendered = useMemo(() => {
    switch (activeTab) {
      case Tabs.list:
        return <CryptoList
          quote={activeQuote}
          favouritesList={favouritesList}
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
          changeDateFormat={changeDateFormat}
          graphMode={graphMode}
          changeGraphMode={changeGraphMode} />;
      case Tabs.details:
        if (!!details) {
          return <CryptoDetails
            crypto={details as Currency}
            quote={activeQuote}
            dateFormat={dateFormat}
            graphMode={graphMode} />
        } else {
          changeTab(Tabs.list);
        }
      default:
        return <CryptoList
          quote={activeQuote}
          favouritesList={favouritesList}
          changeTab={changeTab} />;
    }
  }, [activeTab, activeQuote, dateFormat, favouritesList, wallet, graphMode]);

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

    // Get the favourites content back from the storage
    StorageService.getData(FAVOURITES_KEY).then(value => {
      if (value != null) {
        setFavouriesList(JSON.parse(value) as string[]);
      }
    });

    // Get the graph mode back from the storage
    StorageService.getData(GRAPH_MODE_KEY).then(value => {
      if (value != null) {
        setGraphMode(value as graphModeType);
      }
    });

    asyncLoadFonts();
  }, []);

  const handleChangeTabList = useCallback(() => changeTab(Tabs.list), [changeTab]);
  const handleChangeTabSettings = useCallback(() => changeTab(Tabs.settings), [changeTab]);
  const handleChangeFavourites = useCallback(() => {
    if (!details) { return; }

    const activeCurrency = details as Currency;

    setFavouriesList(list => {
      let newList = [...(list || [])];

      // If already in favourites, remove it. Otherwise, add it
      if (newList.includes(activeCurrency.id)) {
        newList = newList.filter(i => i !== activeCurrency.id);
        ToastAndroid.show('Favourite removed!', ToastAndroid.BOTTOM)
      } else {
        newList.push(activeCurrency.id);
        ToastAndroid.show('Added as favourite!', ToastAndroid.BOTTOM)
      }


      StorageService.storeData(FAVOURITES_KEY, JSON.stringify(newList));
      return newList.filter(UtilsService.onlyUnique);
    });
  }, [favouritesList, details]);
  const handleBackAction = useCallback(() => changeTab(Tabs.list), [changeTab]);

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
      <TopBar
        handleChangeTabList={handleChangeTabList}
        handleChangeTabSettings={handleChangeTabSettings}
        handleChangeFavourites={handleChangeFavourites}
        handleBackAction={handleBackAction}
        activeTab={activeTab}
        crypto={details as Currency}
        favouritesList={favouritesList}
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
