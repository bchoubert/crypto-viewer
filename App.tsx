import React, { Component } from 'react';
import { StyleSheet, View, StatusBar, Platform, Text, TouchableOpacity, Image, BackHandler, NativeEventSubscription } from 'react-native';
import safeSetState from '@axetroy/react-safe-set-state';
import CryptoViewerIconsMap from './assets/fonts/CryptoViewerIconsMap';
import * as Font from 'expo-font';

import Colors from './assets/Colors';

import CryptoList from './components/CryptoList';
import Wallet from './components/Wallet';
import Settings from './components/Settings';
import CryptoDetails from './components/CryptoDetails';

import StorageService from './services/Storage.service';

import quoteType from './models/QuoteType';
import dateFormats, { dateFormatType } from './models/DateFormat';
import Currency from './models/Crypto';
import UtilsService from './services/Utils.service';
import WalletItem from './models/WalletItem';

const STATUSBAR_HEIGHT: number = Platform.OS === 'ios' ? 20 : StatusBar.currentHeight;
const QUOTE_STORAGE_KEY: string = 'CV_QUOTE_STORAGE_KEY';
const DATE_FORMAT_KEY: string = 'CV_DATE_FORMAT_KEY';
const WALLET_KEY: string = 'CV_WALLET_KEY';

type tabType = 'list' | 'wallet' | 'settings' | 'details';

export interface Props {
  //
};

interface State {
  // Current interface
  activeTab: tabType,
  // Details attached to the current interface
  details: Object,

  // Current quote set in the settings
  activeQuote: quoteType,
  // Current date format set in the settings
  dateFormat: dateFormatType,

  // async variable to watch font load status
  areFontLoaded: boolean,

  // Specific handler for the hardware back button
  backHandler: NativeEventSubscription,

  // Status Bar color that changed according to the activeTab and details
  statusBarColor: string,

  // Wallet content
  wallet: WalletItem[]
};

@safeSetState()
class App extends Component<Props, State> {

  constructor(props: Props) {
    super(props);
    this.state = {
      // Set default values
      activeTab: 'list',
      activeQuote: { code: 'USD', symbol: '$' },
      dateFormat: dateFormats.american as dateFormatType,
      details: null,

      areFontLoaded: false,
      backHandler: null,

      statusBarColor: Colors.darkGray,

      wallet: null
    };
  }

  componentDidMount() {
    // Get the activeQuote back from the storage
    StorageService.getData(QUOTE_STORAGE_KEY).then(value => {
      if (value != null) {
        this.setState({ activeQuote: JSON.parse(value) });
      }
    });

    // Get the dateFormat back from the storage
    StorageService.getData(DATE_FORMAT_KEY).then(value => {
      if (value != null) {
        this.setState({ dateFormat: value as dateFormatType });
      }
    });

    // Get the wallet content back from the storage
    StorageService.getData(WALLET_KEY).then(value => {
      if(value != null) {
        this.setState({ wallet: JSON.parse(value) as WalletItem[] });
      }
    });

    // Load specific fonts
    Font.loadAsync({
      // cryptocurrencies (from npm package 'cryptocurrency-icons')
      'cryptocurrencies': require('./node_modules/cryptocurrency-icons-font/dist/webfont/cryptocurrency-icons.ttf'),
      // Specific font for the project icons
      'crypto-viewer': require('./assets/fonts/crypto-viewer.ttf')
    }).then(() => this.setState({ areFontLoaded: true }));

    // Override the default behavior for the hardware back button
    this.setState({ backHandler: BackHandler.addEventListener('hardwareBackPress', () => {
      if(this.state.activeTab === 'settings' || this.state.activeTab === 'details') {
        this.changeTab('list');
        return true;
      }
      return false;
    }) });
  }

  componentWillUnmount() {
    // Remove the behavior for the hardware back button
    this.state.backHandler.remove();
  }

  // Generic function to change the current interface of the app. Details are all it is required to load the new interface
  changeTab = (tabName: tabType, details: Object = null) => {
    if(tabName === 'details' && !details) {
      return null;
    }
    this.setState({ activeTab: tabName, details: details }, () => {
      if(tabName === 'details') {
        // Set status bar color if on the details page
        this.setState({ statusBarColor: UtilsService.getColorFromCrypto((details as Currency).id) })
      } else {
        this.setState({ statusBarColor: Colors.darkGray });
      }
    });
  }

  // Change quote from the settings, then store it
  changeQuote = (quote: quoteType) => {
    this.setState({ activeQuote: quote }, () => {
      StorageService.storeData(QUOTE_STORAGE_KEY, JSON.stringify(quote));
    });
  }

  // Change date format from the settings, then store it
  changeDateFormat = (dateFormat: dateFormatType) => {
    this.setState({ dateFormat: dateFormat }, () => {
      StorageService.storeData(DATE_FORMAT_KEY, dateFormat);
    });
  }

  // Change wallet content from the wallet interface, then store it
  changeWallet = (wallet: WalletItem[]) => {
    this.setState({ wallet: wallet }, () => {
      StorageService.storeData(WALLET_KEY, JSON.stringify(wallet));
    });
  }

  // Technical function to render the current component depending on the current interface that has to be laoded
  renderActiveTab() {
    switch(this.state.activeTab) {
      case 'list':
        return <CryptoList 
                  quote={ this.state.activeQuote as quoteType } 
                  changeTab={ this.changeTab } />;
      case 'wallet':
        return <Wallet
                  quote={ this.state.activeQuote as quoteType } 
                  changeTab={ this.changeTab }
                  wallet={ this.state.wallet }
                  changeWallet={ this.changeWallet } />;
      case 'settings':
        return <Settings 
                  quote={ this.state.activeQuote as quoteType } 
                  changeQuote={this.changeQuote} 
                  dateFormat={this.state.dateFormat as string}
                  changeDateFormat={this.changeDateFormat} />;
      case 'details':
        if(!!this.state.details) {
          return <CryptoDetails 
                    crypto={ this.state.details as Currency } 
                    quote={ this.state.activeQuote as quoteType }
                    dateFormat={ this.state.dateFormat as dateFormatType } />
        } else {
          this.changeTab('list');
        }
      default:
        return <CryptoList 
                  quote={ this.state.activeQuote as quoteType } 
                  changeTab={ this.changeTab } />;
    }
  }

  // Render the tab bottom bar
  renderBottomBar() {
    if(this.state.activeTab === 'list' || this.state.activeTab === 'wallet') {
      return <View style={styles.bottomBar}>
        <TouchableOpacity onPress={() => this.changeTab('list')} style={styles.bottomBarButtonContainer}>
          <Text style={{ ...styles.cryptoViewerIcon, color: (this.state.activeTab === 'list') ? Colors.blue : 'black' }}>{ CryptoViewerIconsMap.prices.unicode }</Text>
          <Text style={{color: (this.state.activeTab === 'list') ? 'blue' : 'black'}}>Prices</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => this.changeTab('wallet')} style={styles.bottomBarButtonContainer}>
          <Text style={{ ...styles.cryptoViewerIcon, color: (this.state.activeTab === 'wallet') ? Colors.blue : 'black' }}>{ CryptoViewerIconsMap.wallet.unicode }</Text>
          <Text style={{color: (this.state.activeTab === 'wallet') ? 'blue' : 'black'}}>Wallet</Text>
        </TouchableOpacity>
      </View>;
    }
    // If not on the list or wallet view, show a back button to get back to the list interface
    return <View style={styles.bottomBar}>
      <TouchableOpacity onPress={() => this.changeTab('list')} style={styles.bottomBarButtonContainer}>
        <Text style={ styles.cryptoViewerIcon }>{ CryptoViewerIconsMap.back.unicode }</Text>
        <Text>Back</Text>
      </TouchableOpacity>
    </View>;
  }

  render() {
    if(!this.state.areFontLoaded) {
      return null;
    }
    // Only render if fonts are loaded, to limit the reflow and API calls
    return (
      <View style={styles.container}>
        <Text style={{ ...styles.statusBar, backgroundColor: this.state.statusBarColor }}></Text>
        <View style={styles.topBar}>
          <TouchableOpacity onPress={() => this.changeTab('list')} style={styles.topBarIconContainer}>
            <Image style={{width: 50, height: 50}} source={require('./assets/icon.png')} />
            <Text style={styles.topBarText}>Crypto Viewer</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => this.changeTab('settings')}>
            <Text style={ styles.cryptoViewerIcon }>{ CryptoViewerIconsMap.settings.unicode }</Text>
          </TouchableOpacity>
        </View>
        {this.renderActiveTab()}
        {this.renderBottomBar()}
      </View>
    );
  }
}

export default App;

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
  topBarIconContainer : {
    flexDirection: 'row',
    alignItems: 'center',
  },
  topBarText: {
    marginLeft: 5,
    fontSize: 20,
    color: Colors.blue,
  },

  // BOTTOM BAR
  bottomBar: {
    flexBasis: 60,
    flexGrow: 0,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    borderTopColor: Colors.gray,
    borderTopWidth: 1
  },
  bottomBarButtonContainer: {
    flex: 1,
    height: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },


  cryptoViewerIcon: {
    fontSize: 20,
    fontFamily: 'crypto-viewer'
  }
});
