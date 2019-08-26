import React, { Component } from 'react';
import { Text, TouchableOpacity, StyleSheet, View, ToastAndroid, Modal, TouchableHighlight, Dimensions, Picker, TextInput, FlatList } from 'react-native';
import safeSetState from '@axetroy/react-safe-set-state';
import Swipeable from 'react-native-swipeable-row';
import { diff } from 'deep-object-diff';

import Colors from '../assets/Colors';

import CryptoCurrencyIconsMap from '../assets/fonts/CryptoCurrencyIconsMap';
import CryptoViewerIconsMap from '../assets/fonts/CryptoViewerIconsMap';

import NetworkService from '../services/Network.service';
import UtilsService from '../services/Utils.service';

import quoteType from '../models/QuoteType';
import WalletItem from '../models/WalletItem';
import Crypto from '../models/Crypto';
import ExchangeRates from '../models/ExhangeRates';

export interface Props {
  // Quote as selected
  quote: quoteType,

  // Callback function to change the interface when a crypto is selected
  changeTab: Function,

  // Wallet as loaded from storage
  wallet: WalletItem[],
  // Callback function to change the wallet content
  changeWallet: Function
};

interface State {
  // Variable for list load (and pull to refresh list action)
  isLoading: boolean,
  // extra data to force a reflow of the list when the content changed
  extraData: string,

  // Quote as selected (used to refresh it from the settings)
  quote: quoteType,

  // All cryptos as returned from the API
  baseCryptos: Crypto[],

  // Sorted cryptos
  sortedCryptos: Crypto[],

  // To know if the modal should be visible or not
  isAddWalletModalVisible: boolean,

  // Modal form inputs
  selectedCryptoKey: string,
  selectedAmount: string,

  // Wallet content (used to modify it before calling the callback)
  wallet: WalletItem[]
};

// Render the wallet interface
@safeSetState()
class Wallet extends Component<Props, State> {

  constructor(props: Props) {
    super(props);

    this.state = {
      // Default values
      isLoading: true,
      extraData: '',

      quote: props.quote,

      baseCryptos: [],
      sortedCryptos: [],

      isAddWalletModalVisible: false,
      
      selectedCryptoKey: null,
      selectedAmount: null,

      wallet: this.props.wallet
    };
  }

  componentDidMount() {
    // Get cryptos on load, then other data
    this.fetchCryptos();
  }

  componentWillReceiveProps(nextProps) {
    // Change the quote automatically when modified from the settings
    if(nextProps.quote.code !== this.state.quote.code) {
      this.setState({ quote: nextProps.quote }, () => {
        this.sortCryptos();
      });
    }
    // Change automatically the wallet content when new content is stored and made available to show
    if(!!diff(nextProps.wallet, this.state.wallet)) {
      this.setState({ wallet: nextProps.wallet, extraData: JSON.stringify(nextProps.wallet) });
    }
  }
  
  fetchCryptos = () => {
    // Get all cryptos
    NetworkService.fetchCryptos()
      .then(cryptos => this.setState({ baseCryptos: (cryptos.filter(crypto => (crypto as Crypto).details.type === 'crypto') as Crypto[]) }, this.sortCryptos))
      .catch(error => ToastAndroid.show(error, ToastAndroid.BOTTOM));
  }

  sortCryptos() {
    // Sort cryptos and store into assets
    this.setState({ sortedCryptos: [], isLoading: true });

    // Fetch all exchange rates
    NetworkService.fetchCryptoExchangeRates(this.props.quote.code)
      .then(exchangeRates => {
        let cryptos = [];

        this.state.baseCryptos.forEach(crypto => {
          if(!!(exchangeRates as ExchangeRates).data.rates[crypto.id]) {
            // Store only main assets
            cryptos.push(Object.assign({ price: 1 / parseFloat((exchangeRates as ExchangeRates).data.rates[crypto.id]) }, crypto));
          }
        });

        this.setState({ 
          sortedCryptos: cryptos.sort((cur1, cur2) => UtilsService.sortFnOnStringProperty(cur1, cur2, 'name')), 
          isLoading: false
        });
      })
      .catch(error => ToastAndroid.show(error, ToastAndroid.BOTTOM));
  }

  // Callback for the pull to refresh list action
  onRefresh = () => {
    this.setState({ isLoading: true }, this.fetchCryptos);
  }

  // Callback for the modal crpyot picker
  onSelectedCryptoKeyChange = (newCryptoKey: string) => {
    if (!!this.state.wallet && !!this.state.wallet.filter(walletItem => walletItem.crypto === newCryptoKey).length) {
      // If the crypto is already present in the wallet, load the amount
      this.setState({ selectedCryptoKey: newCryptoKey, selectedAmount: this.state.wallet.filter(walletItem => walletItem.crypto === newCryptoKey)[0].amount + '' });
    } else {
      this.setState({ selectedCryptoKey: newCryptoKey, selectedAmount: null });
    }
  }

  // Callback for the modal amount text field
  onSelectedAmountChange = (newAmount: string) => {
    // Validate new input only if plain numbers, or plain numbers separated with a point (.)
    if (/^[0-9]*(\.[0-9]*)?$/.test(newAmount)) {
      this.setState({ selectedAmount: newAmount });
    } else {
      this.setState({ selectedAmount: this.state.selectedAmount });
    }
  }

  // Callback to laod and show the modal. Takes the crypto as optional parameter for edit functionality
  openAddWalletPopup = (selectedCrpytoKey = null, selectedAmount = null) => {
    this.setState({ 
      selectedCryptoKey: selectedCrpytoKey,
      selectedAmount: selectedAmount,
      isAddWalletModalVisible: true
    });
  }

  // Validate function for the modal form
  isValid = () => !!this.state.selectedAmount && !!this.state.selectedCryptoKey;

  // Callback function to save the wallet (modify a temp version, then pass it to App via the callback)
  saveWallet = () => {
    if(!this.state.selectedCryptoKey || !this.state.selectedAmount) {
      return;
    }
    let walletTemp = this.state.wallet || [];
    if(!!this.state.wallet && !!this.state.wallet.filter(walletItem => walletItem.crypto === this.state.selectedCryptoKey).length) {
      this.setState({ isAddWalletModalVisible: false });

      walletTemp.filter(walletItem => walletItem.crypto === this.state.selectedCryptoKey)[0].amount = +this.state.selectedAmount;
      this.props.changeWallet(walletTemp);
    } else {
      this.setState({ isAddWalletModalVisible: false });

      walletTemp.push({ crypto: this.state.selectedCryptoKey, amount: +this.state.selectedAmount });
      this.props.changeWallet(walletTemp);
    }
  }

  // Load the modal with corresponding crypto and amount
  editFromWallet = (cryptoKey) => {
    const crypto = this.state.sortedCryptos.filter(crypto => crypto.id === cryptoKey)[0],
      amount = this.state.wallet.filter(walletItem => walletItem.crypto === cryptoKey)[0].amount;

    this.openAddWalletPopup(crypto.id, amount + '');
  }

  // Change the wallet to delete the selected crypto
  deleteFromWallet = (crypto) => {
    this.props.changeWallet(this.state.wallet.filter(walletItem => walletItem.crypto !== crypto));
  }

  // Render the wallet list items
  renderWallet = (walletItem) => {
    if(!this.state.sortedCryptos || !this.state.sortedCryptos.length) {
      return null;
    }

    var crypto = this.state.sortedCryptos.filter(asset => asset.id === walletItem.crypto)[0] as Crypto;

    // Prices compute
    var priceAmount = '', walletAmount = '';
    if(!!crypto && !!crypto.price) {
      priceAmount = UtilsService.truncateNumber(crypto.price * walletItem.amount) + ' ' + this.props.quote.symbol;
      walletAmount = UtilsService.truncateNumber(walletItem.amount, 5) + ' ' + crypto.details.symbol;
    }

    // Actions to edit or delete the wallet item
    return <Swipeable rightButtons={[
      <TouchableHighlight style={{ ...styles.list_actions, ...styles.list_actions__edit }} onPress={() => this.editFromWallet(walletItem.crypto)}>
        <Text style={styles.list_actions_title}>Edit</Text>
      </TouchableHighlight>,
      <TouchableHighlight style={{ ...styles.list_actions, ...styles.list_actions__delete }} onPress={() => this.deleteFromWallet(walletItem.crypto)}>
        <Text style={styles.list_actions_title}>Delete</Text>
      </TouchableHighlight>
    ]}>
      <TouchableOpacity style={styles.crypto_item} onPress={() => this.props.changeTab('details', crypto)}>
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
          <View style={styles.crypto_amount}>
            <Text style={styles.crypto_item_price}>{walletAmount}</Text>
            <Text style={styles.crypto_total_amount}>{priceAmount}</Text>
          </View>
          <Text style={{ ...styles.cryptoViewerIcon, ...styles.crypto_item_next_icon }}>{ CryptoViewerIconsMap.next.unicode }</Text>
        </View>
      </TouchableOpacity>
    </Swipeable>;
  }

  // Render the modal and form
  renderModal() {
    return <Modal
      animationType="slide"
      visible={this.state.isAddWalletModalVisible}
      transparent={true}>
        <View style={styles.modal_container}>
          <View style={styles.modal}>
            <View style={styles.topBar}>
              {/* Cancel button */}
              <TouchableHighlight
                onPress={() => {
                  this.setState({ isAddWalletModalVisible: false });
                }}>
                  <Text style={styles.modal_action}>Cancel</Text>
              </TouchableHighlight>
              <Text style={styles.modal_title}>Add to your Wallet</Text>
              {/* Save buttom, active only if isValid() returnes true */}
              <TouchableHighlight
                onPress={() => {
                  this.saveWallet();
                }}>
                  <Text style={{ ...styles.modal_action, ...styles.modal_main_action, ...(!!this.isValid() && [] || styles.disabled_modal_action ) }}>Save</Text>
              </TouchableHighlight>
            </View>
            <View style={styles.modal_content}>
              <Text style={styles.modal_label}>Crypto</Text>
              <View style={styles.modal_crypto_container}>
                {!!this.state.selectedCryptoKey &&
                  <Text style={{ ...styles.crypto_item_icon, color: UtilsService.getColorFromCrypto(this.state.selectedCryptoKey) }}>
                    { !!CryptoCurrencyIconsMap[this.state.selectedCryptoKey.toLowerCase()] && CryptoCurrencyIconsMap[this.state.selectedCryptoKey.toLowerCase()].unicode }
                  </Text>
                }
                {/* Picker with a default item */}
                <Picker
                  selectedValue={this.state.selectedCryptoKey}
                  style={styles.modal_crypto}
                  onValueChange={ this.onSelectedCryptoKeyChange }>
                    <Picker.Item label='Please select an option...' value={null} />
                    {this.state.sortedCryptos.map(asset =>
                      <Picker.Item key={asset.id} label={asset.name} value={asset.id} />  
                    )}
                </Picker>
              </View>
              <Text style={styles.modal_label}>Amount</Text>
              <TextInput
                placeholder="1.02"
                underlineColorAndroid='transparent'
                keyboardType={'numeric'}
                style={styles.amount_input}
                value={!!this.state.selectedAmount ? (this.state.selectedAmount + '') : null}
                onChangeText={ this.onSelectedAmountChange } />  
            </View>
          </View>
        </View>
    </Modal>;
  }

  // Render function of the wallet
  render() {
    return (
      <View style={styles.container}>
        <FlatList
          style={ styles.list }
          data={ this.state.wallet }
          onRefresh={ this.onRefresh }
          refreshing={ this.state.isLoading }
          renderItem={ ({ item }) => this.renderWallet(item) }
          keyExtractor={ item => item.crypto }
          extraData={ this.state.extraData }
          ListEmptyComponent={ () => 
            <View style={styles.list_empty}>
              <Text style={styles.list_empty_text}>No item in your wallet yet</Text>
            </View> }
          />
        <TouchableOpacity style={styles.add_wallet_popup_button} onPress={() => this.openAddWalletPopup()}>
          <Text style={{ ...styles.cryptoViewerIcon, ...styles.add_wallet_popup_button_text }}>{ CryptoViewerIconsMap.plus.unicode }</Text>
        </TouchableOpacity>
        {this.renderModal()}
      </View>
    );
  }
}

export default Wallet;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    textAlign: 'center'
  },
  list: {
    flex: 1
  },
  list_empty: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 50
  },
  list_empty_text: {
    color: Colors.gray
  },
  list_actions: {
    flex: 1,
    justifyContent: 'center',
    paddingLeft: 20
  },
  list_actions__delete: {
    backgroundColor: Colors.red
  },
  list_actions__edit: {
    backgroundColor: Colors.blue
  },
  list_actions_title: {
    color: '#FFFFFF'
  },

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
  crypto_amount: {
    flexDirection: 'column',
    justifyContent: 'flex-start'
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
  crypto_total_amount: {
    paddingRight: 5,
    color: Colors.gray
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
  },

  add_wallet_popup_button: {
    position: 'absolute',
    bottom: 12,
    right: 12,
    height: 60,
    width: 60,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.blue,
    borderRadius: 30
  },
  add_wallet_popup_button_text: {
    color: '#FFFFFF'
  },

  modal_container: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, .7)',
    justifyContent: 'flex-end',
    alignItems: 'center'
  },
  modal: {
    width: Dimensions.get('window').width,
    height: 220,
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    backgroundColor: '#FFFFFF'
  },
  topBar: {
    height: 60,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: Colors.lightGray,
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    paddingLeft: 15,
    paddingRight: 15
  },
  modal_action: {
    color: Colors.blue,
    fontSize: 18
  },
  disabled_modal_action: {
    color: Colors.gray,
    fontWeight: 'normal'
  },
  modal_main_action: {
    fontWeight: 'bold'
  },
  modal_title: {
    fontSize: 18
  },
  modal_label: {
    fontSize: 10,
    color: Colors.gray
  },
  modal_content: {
    padding: 10
  },
  amount_input: {
    padding: 5,
    borderBottomColor: Colors.gray,
    borderBottomWidth: 1
  },
  modal_crypto_container: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 50,
    flexBasis: 50
  },
  modal_crypto: {
    flex: 1
  }
});
