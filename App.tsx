import React, { Component } from 'react';
import { StyleSheet, View, StatusBar, Platform, Text, TouchableOpacity, Image, BackHandler, NativeEventSubscription } from 'react-native';
import CryptoViewerIconsMap from './assets/fonts/CryptoViewerIconsMap';
import * as Font from 'expo-font';

import Colors from './assets/Colors';

import CryptoList from './components/CryptoList';
import Wallet from './components/Wallet';
import Settings from './components/Settings';
import CryptoDetails from './components/CryptoDetails';

import StorageService from './services/Storage.service';

import quoteType from './models/QuoteType';
import Currency from './models/Currency';

const STATUSBAR_HEIGHT: number = Platform.OS === 'ios' ? 20 : StatusBar.currentHeight;
const QUOTE_STORAGE_KEY: string = 'CV_QUOTE_STORAGE_KEY';

type tabType = 'list' | 'wallet' | 'settings' | 'details';

export interface Props {
  //
};

interface State {
  activeTab: tabType,
  activeQuote: quoteType,
  details: Object,

  areFontLoaded: boolean,
  backHandler: NativeEventSubscription
};

class App extends Component<Props, State> {

  constructor(props: Props) {
    super(props);
    this.state = {
      activeTab: 'list',
      activeQuote: { code: 'USD', symbol: '$' },
      details: null,

      areFontLoaded: false,
      backHandler: null
    };
  }

  componentDidMount() {
    StorageService.getData(QUOTE_STORAGE_KEY).then(value => {
      if(value != null) {
        this.setState({ activeQuote: JSON.parse(value) });
      }
    });

    Font.loadAsync({
      'cryptocurrencies': require('./node_modules/cryptocurrency-icons-font/dist/webfont/cryptocurrency-icons.ttf'),
      'crypto-viewer': require('./assets/fonts/crypto-viewer.ttf')
    }).then(() => this.setState({ areFontLoaded: true }));

    this.setState({ backHandler: BackHandler.addEventListener('hardwareBackPress', () => {
      if(this.state.activeTab === 'settings' || this.state.activeTab === 'details') {
        this.changeTab('list');
        return true;
      }
      return false;
    }) });
  }

  componentWillUnmount() {
    this.state.backHandler.remove();
  }

  changeTab = (tabName: tabType, details: Object = null) => {
    if(tabName === 'details' && !details) {
      return null;
    }
    this.setState({ activeTab: tabName, details: details });
  }

  changeQuote = (quote: quoteType) => {
    this.setState({ activeQuote: quote }, () => {
      StorageService.storeData(QUOTE_STORAGE_KEY, JSON.stringify(quote));
    });
  }

  renderActiveTab() {
    switch(this.state.activeTab) {
      case 'list':
        return <CryptoList quote={ this.state.activeQuote as quoteType } changeTab={ this.changeTab } />;
      case 'wallet':
        return <Wallet />;
      case 'settings':
        return <Settings quote={ this.state.activeQuote as quoteType } changeQuote={this.changeQuote} />;
      case 'details':
        if(!!this.state.details) {
          return <CryptoDetails crypto={ this.state.details as Currency } quote={ this.state.activeQuote as quoteType } />
        } else {
          this.changeTab('list');
        }
      default:
        return <CryptoList quote={ this.state.activeQuote as quoteType } changeTab={ this.changeTab } />;
    }
  }

  renderBottomBar() {
    if(this.state.activeTab === 'list' || this.state.activeTab === 'wallet') {
      return <View style={styles.bottomBar}>
        <TouchableOpacity onPress={() => this.changeTab('list')} style={styles.bottomBarButtonContainer}>
          <Text style={{ ...styles.cryptoViewerIcon, color: (this.state.activeTab === 'list') ? 'blue' : 'black' }}>{ CryptoViewerIconsMap.prices.unicode }</Text>
          <Text style={{color: (this.state.activeTab === 'list') ? 'blue' : 'black'}}>Prices</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => this.changeTab('wallet')} style={styles.bottomBarButtonContainer}>
          <Text style={{ ...styles.cryptoViewerIcon, color: (this.state.activeTab === 'wallet') ? 'blue' : 'black' }}>{ CryptoViewerIconsMap.wallet.unicode }</Text>
          <Text style={{color: (this.state.activeTab === 'wallet') ? 'blue' : 'black'}}>Wallet</Text>
        </TouchableOpacity>
      </View>;
    }
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
    return (
      <View style={styles.container}>
        <Text style={styles.statusBar}></Text>
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
    backgroundColor: Colors.darkGray,
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
