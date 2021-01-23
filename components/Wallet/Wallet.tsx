import React, { FC, memo, useCallback, useEffect, useState } from 'react';
import { Text, TouchableOpacity, StyleSheet, View, ToastAndroid, FlatList } from 'react-native';


import Colors from '../../assets/Colors';

import CryptoViewerIconsMap from '../../assets/fonts/CryptoViewerIconsMap';

import NetworkService from '../../services/Network.service';
import UtilsService from '../../services/Utils.service';

import quoteType from '../../models/QuoteType';
import WalletItem from '../../models/WalletItem';
import Crypto from '../../models/Crypto';
import ExchangeRates from '../../models/ExhangeRates';
import WalletModal from './WalletModal';

import { tabType } from '../../App';
import WalletListItem from './WalletListItem';

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

  cryptoViewerIcon: {
    fontSize: 20,
    fontFamily: 'crypto-viewer'
  },
});

interface WalletProps {
  // Quote as selected
  quote: quoteType;
  // Callback function to change the interface when a crypto is selected
  changeTab: (tabName: tabType, newDetails: Object) => any;
  // Wallet as loaded from storage
  wallet: WalletItem[];
  // Callback function to change the wallet content
  changeWallet: (newWallet: WalletItem[]) => any;
};

// Render the wallet interface
const Wallet: FC<WalletProps> = ({
  quote,
  changeTab,
  wallet,
  changeWallet,
}) => {

  const [isLoading, setLoading] = useState<boolean>(true);

  const [isWalletModalVisible, setWalletModalVisible] = useState<boolean>(false);
  const [selectedCryptoKey, setSelectedCryptoKey] = useState<string | null>(null);
  const [selectedAmount, setSelectedAmount] = useState<number | null>(null);

  const [cryptos, setCryptos] = useState<Crypto[]>([]);

  const fetchCryptos = useCallback(async () => {
    // Get all cryptos
    const fetchedCryptos = await NetworkService.fetchCryptos()
      .catch(error => ToastAndroid.show(error, ToastAndroid.BOTTOM));

    const unsortedCryptos = (fetchedCryptos || []).filter(crypto => (crypto as Crypto).details.type === 'crypto') as Crypto[];

    const fetchedExchangeRates = await NetworkService.fetchCryptoExchangeRates(quote.code)
      .catch(error => ToastAndroid.show(error, ToastAndroid.BOTTOM));

    let newCryptos = [];

    unsortedCryptos.forEach(crypto => {
      if (!!(fetchedExchangeRates as ExchangeRates).data.rates[crypto.id]) {
        // Store only main assets
        newCryptos.push(Object.assign({ price: 1 / parseFloat((fetchedExchangeRates as ExchangeRates).data.rates[crypto.id]) }, crypto));
      }
    });

    setLoading(false);
    setCryptos(newCryptos.sort((cur1, cur2) => UtilsService.sortFnOnStringProperty(cur1, cur2, 'name')));
  }, [quote]);

  // Callback for the pull to refresh list action
  const onRefresh = useCallback(() => {
    setLoading(true);
    fetchCryptos();
  }, []);

  // Callback for the modal crpyot picker
  const onSelectedCryptoKeyChange = useCallback((newCryptoKey: string) => {
    if (!!wallet && !!wallet.filter(walletItem => walletItem.crypto === newCryptoKey).length) {
      // If the crypto is already present in the wallet, load the amount
      setSelectedAmount(wallet.filter(walletItem => walletItem.crypto === newCryptoKey)[0].amount);
    } else {
      setSelectedAmount(null);
    }
    setSelectedCryptoKey(newCryptoKey);
  }, [wallet, setSelectedCryptoKey, setSelectedAmount]);

  // Callback for the modal amount text field
  const onSelectedAmountChange = useCallback((newAmount: string) => {
    // Validate new input only if plain numbers, or plain numbers separated with a point (.)
    if (/^[0-9]*(\.[0-9]*)?$/.test(newAmount)) {
      setSelectedAmount(Number(newAmount));
    }
  }, [setSelectedAmount]);

  // Callback to laod and show the modal. Takes the crypto as optional parameter for edit functionality
  const openWalletPopup = useCallback((newSelectedCrpytoKey: string = null, newSelectedAmount: number = null) => {
    setSelectedCryptoKey(newSelectedCrpytoKey);
    setSelectedAmount(newSelectedAmount);
    setWalletModalVisible(true);
  }, [setSelectedCryptoKey, setSelectedAmount, setWalletModalVisible]);

  // Callback function to save the wallet (modify a temp version, then pass it to App via the callback)
  const saveWallet = useCallback(() => {
    if (!selectedCryptoKey || !selectedAmount) {
      return;
    }
    let walletTemp = wallet || [];
    if (!!wallet && !!wallet.filter(walletItem => walletItem.crypto === selectedCryptoKey).length) {
      walletTemp.filter(walletItem => walletItem.crypto === selectedCryptoKey)[0].amount = selectedAmount;
    } else {
      walletTemp.push({ crypto: selectedCryptoKey, amount: selectedAmount });
    }
    changeWallet(walletTemp);
    setWalletModalVisible(false);
  }, [selectedCryptoKey, selectedAmount, setWalletModalVisible, changeWallet, wallet]);

  // Load the modal with corresponding crypto and amount
  const editFromWallet = useCallback((cryptoKey: string) => {
    const crypto = cryptos.filter(crypto => crypto.id === cryptoKey)[0],
      amount = wallet.filter(walletItem => walletItem.crypto === cryptoKey)[0].amount;

    openWalletPopup(crypto.id, amount);
  }, [cryptos, wallet, openWalletPopup]);

  // Change the wallet to delete the selected crypto
  const deleteFromWallet = useCallback((crypto: string) => {
    changeWallet(wallet.filter(walletItem => walletItem.crypto !== crypto));
  }, [changeWallet, wallet]);

  useEffect(
    () => {
      const asyncFetchData = async () => fetchCryptos();
      asyncFetchData();
    },
    [],
  );

  // Render wallet
  return (
    <View style={styles.container}>
      <FlatList
        style={styles.list}
        data={wallet}
        onRefresh={onRefresh}
        refreshing={isLoading}
        renderItem={({ item }) => (
          <WalletListItem
            walletItem={item}
            quote={quote}
            changeTab={changeTab}
            cryptos={cryptos}
            deleteFromWallet={deleteFromWallet}
            editFromWallet={editFromWallet}
          />
        )}
        keyExtractor={item => item.crypto}
        extraData=""
        ListEmptyComponent={() =>
        (
          <View style={styles.list_empty}>
            <Text style={styles.list_empty_text}>
              No item in your wallet yet
              </Text>
          </View>
        )
        }
      />
      <TouchableOpacity style={styles.add_wallet_popup_button} onPress={() => openWalletPopup()}>
        <Text style={{ ...styles.cryptoViewerIcon, ...styles.add_wallet_popup_button_text }}>
          {CryptoViewerIconsMap.plus.unicode}
        </Text>
      </TouchableOpacity>
      <WalletModal
        isOpen={isWalletModalVisible}
        closeModal={() => setWalletModalVisible(false)}
        saveWallet={saveWallet}
        selectedAmount={selectedAmount}
        selectedCryptoKey={selectedCryptoKey}
        onSelectedCryptoKeyChange={onSelectedCryptoKeyChange}
        onSelectedAmountChange={onSelectedAmountChange}
        cryptos={cryptos}
      />
    </View>
  );
}

export default memo(Wallet);
