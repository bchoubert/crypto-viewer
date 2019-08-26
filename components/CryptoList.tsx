import React, { Component } from 'react';
import { Text, StyleSheet, ToastAndroid, View, SectionList, TouchableOpacity } from 'react-native';
import safeSetState from '@axetroy/react-safe-set-state';

import Colors from '../assets/Colors';

import CryptoCurrencyIconsMap from '../assets/fonts/CryptoCurrencyIconsMap';
import CryptoViewerIconsMap from '../assets/fonts/CryptoViewerIconsMap';

import NetworkService from '../services/Network.service';
import UtilsService from '../services/Utils.service';

import Currency from '../models/Crypto';
import quoteType from '../models/QuoteType';
import ExchangeRates from '../models/ExhangeRates';

export interface Props {
  // Quote as selected
  quote: quoteType,

  // Change tab callback function to load details of a crypto
  changeTab: Function
};

interface State {
  // List loading value (used also for pull to refresh)
  isLoading: boolean,

  // All currencies
  currencies: Currency[],

  // Quote as selected, used to refresh if from the settings
  quote: quoteType,

  // Sorted assets
  mainAssets: Currency[],
  otherAssets: Currency[]
};

/* Render the crypto list */
@safeSetState()
class CryptoView extends Component<Props, State> {

  constructor(props: Props) {
    super(props);

    this.state = {
      // Default values
      isLoading: true,
      currencies: [],
      quote: props.quote,
  
      mainAssets: [],
      otherAssets: []
    };
  }

  componentDidMount() {
    // Get currencies and others on load
    this.getCurrencies();
  }

  componentWillReceiveProps(nextProps) {
    // If the quote is changed from the settings, auto update it here
    if(nextProps.quote.code !== this.state.quote.code) {
      this.setState({ quote: nextProps.quote }, () => {
        this.sortAssets();
      });
    }
  }

  // Render a crypto list item
  renderCrypto = (crypto, section) => {
    // Compute the price
    var price = '';
    if(!!crypto.price) {
      price = UtilsService.truncateNumber(crypto.price) + ' ' + this.props.quote.symbol;
    }

    // Render the complete list item with action
    if(section.id === 'other') {
      return <View style={styles.crypto_item}>
        <View style={styles.crypto_item_properties}>
          <Text style={{ ...styles.crypto_item_icon, color: UtilsService.getColorFromCrypto(crypto.id) }}>
            { !!CryptoCurrencyIconsMap[crypto.id.toLowerCase()] && CryptoCurrencyIconsMap[crypto.id.toLowerCase()].unicode }
          </Text>
          <View style={styles.crypto_item_names}>
            <Text style={styles.crypto_item_name}>{crypto.name}</Text>
            <Text style={styles.crypto_item_id}>{crypto.id}</Text>
          </View>
        </View>
        <View style={styles.crypto_item_details}>
          <Text style={styles.crypto_item_price}>{price}</Text>
        </View>
      </View>;
    } 
    else {
      return <TouchableOpacity style={styles.crypto_item} onPress={() => this.props.changeTab('details', crypto)}>
        <View style={styles.crypto_item_properties}>
          <Text style={{ ...styles.crypto_item_icon, color: UtilsService.getColorFromCrypto(crypto.id) }}>
            { !!CryptoCurrencyIconsMap[crypto.id.toLowerCase()] && CryptoCurrencyIconsMap[crypto.id.toLowerCase()].unicode }
          </Text>
          <View style={styles.crypto_item_names}>
            <Text style={styles.crypto_item_name}>{crypto.name}</Text>
            <Text style={styles.crypto_item_id}>{crypto.id}</Text>
          </View>
        </View>
        <View style={styles.crypto_item_details}>
          <Text style={styles.crypto_item_price}>{price}</Text>
          <Text style={{ ...styles.cryptoViewerIcon, ...styles.crypto_item_next_icon }}>{ CryptoViewerIconsMap.next.unicode }</Text>
        </View>
      </TouchableOpacity>;
    }
  }

  // Callback for pull to refresh list action
  onRefresh = () => {
    this.setState({ isLoading: true }, this.getCurrencies);
  }

  // Get all currencies
  getCurrencies = () => {
    NetworkService.fetchCryptos()
      .then(currencies => this.setState({ currencies: (currencies.filter(currency => (currency as Currency).details.type === 'crypto') as Currency[]) }, this.sortAssets))
      .catch(error => ToastAndroid.show(error, ToastAndroid.BOTTOM));
  }

  // Take currencies, then fetch all exchange rates and sort assets
  sortAssets() {
    this.setState({ mainAssets: [], otherAssets: [], isLoading: true });

    NetworkService.fetchCryptoExchangeRates(this.props.quote.code)
      .then(exchangeRates => {
        let mainAssets = [], otherAssets = [];

        this.state.currencies.forEach(currency => {
          if(!!(exchangeRates as ExchangeRates).data.rates[currency.id]) {
            mainAssets.push(Object.assign({ price: 1 / parseFloat((exchangeRates as ExchangeRates).data.rates[currency.id]) }, currency));
          } else {
            otherAssets.push(currency);
          }
        });

        this.setState({ 
          mainAssets: mainAssets.sort((cur1, cur2) => UtilsService.sortFnOnStringProperty(cur1, cur2, 'name')), 
          otherAssets: otherAssets.sort((cur1, cur2) => UtilsService.sortFnOnStringProperty(cur1, cur2, 'name')), 
          isLoading: false
        });
      })
      .catch(error => ToastAndroid.show(error, ToastAndroid.BOTTOM));
  }
  
  // Render the view with sorted assets
  render() {
    return (
      <SectionList
        style={ styles.container }
        sections={[
          { title: 'Main assets', id: 'main', data: this.state.mainAssets },
          { title: 'Other assets', id: 'other', data: this.state.otherAssets }
        ]}
        stickySectionHeadersEnabled={true}
        onRefresh={ this.onRefresh }
        refreshing={ this.state.isLoading }
        renderItem={ ({ item, section }) => this.renderCrypto(item, section) }
        renderSectionHeader={({section}) => <Text style={styles.sectionHeader}>{section.title}</Text>}
        keyExtractor={ item => item.id } />
    );
  }
}

export default CryptoView;

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  sectionHeader: {
    paddingTop: 2,
    paddingLeft: 10,
    paddingRight: 10,
    paddingBottom: 2,
    fontSize: 14,
    fontWeight: 'bold',
    backgroundColor: Colors.lightGray,
  },

  // CRYPTOS
  crypto_item: {
    width: '100%',
    height: 80,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingLeft: 15,
    paddingRight: 15,
    borderBottomColor: Colors.lightGray,
    borderBottomWidth: 1
  },
  crypto_item_properties: {
    flexDirection: 'row'
  },
  crypto_item_details: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  crypto_item_names: {
    fontSize: 25,
    justifyContent: 'flex-start',
    width: 200
  },
  crypto_item_name: {
    fontSize: 18
  },
  crypto_item_id: {
    fontSize: 12,
    color: Colors.gray
  },
  crypto_item_price: {
    paddingRight: 5
  },
  crypto_item_next_icon: {
    color: Colors.gray,
    fontSize: 14
  },


  crypto_item_icon: {
    fontSize: 40,
    width: 40,
    marginRight: 15,
    fontFamily: 'cryptocurrencies'
  },
  cryptoViewerIcon: {
    fontSize: 20,
    fontFamily: 'crypto-viewer'
  }
});
