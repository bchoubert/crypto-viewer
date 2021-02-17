import React, { FC, memo, useCallback, useMemo } from 'react';
import Swipeable from 'react-native-swipeable-row';
import { TouchableHighlight, Text, TouchableOpacity, View, StyleSheet } from 'react-native';

import CryptoViewerIconsMap from '../../assets/fonts/baseIcons/CryptoViewerIconsMap';

import Colors from '../../assets/Colors';

import UtilsService from '../../services/Utils.service';

import quoteType from '../../models/QuoteType';
import WalletItem from '../../models/WalletItem';
import Crypto from '../../models/Crypto';
import Tabs, { tabType } from '../../models/Tabs';
import CryptoIcon from '../Utils/CryptoIcon';

const styles = StyleSheet.create({
  list_actions__delete: {
    backgroundColor: Colors.red
  },
  list_actions__edit: {
    backgroundColor: Colors.blue
  },
  list_actions_title: {
    color: '#FFFFFF'
  },
  list_actions: {
    flex: 1,
    justifyContent: 'center',
    paddingLeft: 20
  },

  crypto_item: {
    width: '100%',
    height: 75,
    flexDirection: 'row',
    padding: 10,
  },
  crypto_item_content: {
    height: 62,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    flex: 1,
    paddingLeft: 10,
    paddingRight: 10,
    borderRadius: 10,
    backgroundColor: Colors.veryLightGray,
  },
  crypto_item_properties: {
    flexDirection: 'row'
  },
  crypto_item_names: {
    fontSize: 25,
    justifyContent: 'flex-start',
    width: 200
  },
  crypto_item_name: {
    fontSize: 18
  },
  crypto_item_details: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  crypto_amount: {
    flexDirection: 'column',
    justifyContent: 'flex-start'
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
  crypto_total_amount: {
    paddingRight: 5,
    color: Colors.gray
  },

  cryptoViewerIcon: {
    fontSize: 20,
    fontFamily: 'crypto-viewer'
  },
});

interface WalletListItemProps {
  changeTab: (tabName: tabType, newDetails: Object) => any;
  cryptos: Crypto[];
  walletItem: WalletItem;
  quote: quoteType;
  deleteFromWallet: (cryptoKey: string) => any;
  editFromWallet: (cryptoKey: string) => any;
}

const WalletListItem: FC<WalletListItemProps> = ({
  changeTab,
  cryptos,
  walletItem,
  quote,
  deleteFromWallet,
  editFromWallet,
}) => {
  const crypto = useMemo(
    () => (cryptos || []).filter(asset => asset.id === walletItem.crypto)[0] as Crypto,
    [cryptos, walletItem],
  );

  // Prices compute
  const priceAmount = useMemo(
    () => crypto?.price ? UtilsService.truncateNumber(crypto.price * walletItem.amount) + ' ' + quote.symbol : '',
    [crypto],
  );
  const walletAmount = useMemo(
    () => crypto?.price ? UtilsService.truncateNumber(walletItem.amount, 5) + ' ' + crypto.details.symbol : '',
    [crypto, walletItem],
  );

  const handleEdit = useCallback(() => editFromWallet(walletItem.crypto), [crypto]);
  const handleDelete = useCallback(() => deleteFromWallet(walletItem.crypto), [crypto]);

  const handleSelectCrypto = useCallback(() => changeTab(Tabs.details, crypto), [changeTab, crypto]);

  const cryptoColor = useMemo(
    () => UtilsService.getColorFromCrypto(crypto?.id),
    [crypto],
  );

  if (!crypto) {
    return null;
  }

  // Actions to edit or delete the wallet item
  return (
    <Swipeable rightButtons={[
      <TouchableHighlight style={{ ...styles.list_actions, ...styles.list_actions__edit }} onPress={handleEdit}>
        <Text style={styles.list_actions_title}>Edit</Text>
      </TouchableHighlight>,
      <TouchableHighlight style={{ ...styles.list_actions, ...styles.list_actions__delete }} onPress={handleDelete}>
        <Text style={styles.list_actions_title}>Delete</Text>
      </TouchableHighlight>
    ]}>
      <TouchableOpacity style={styles.crypto_item} onPress={handleSelectCrypto}>
        <View style={{ ...styles.crypto_item_content, backgroundColor: `${cryptoColor}15` }}>
          <View style={styles.crypto_item_properties}>
            <CryptoIcon code={crypto.id.toLowerCase()} />
            <View style={styles.crypto_item_names}>
              <Text style={styles.crypto_item_name}>
                {crypto.name}
              </Text>
              <Text style={styles.crypto_item_id}>
                {crypto.id}
              </Text>
            </View>
          </View>
          <View style={styles.crypto_item_details}>
            <View style={styles.crypto_amount}>
              <Text style={styles.crypto_item_price}>
                {walletAmount}
              </Text>
              <Text style={styles.crypto_total_amount}>
                {priceAmount}
              </Text>
            </View>
            <Text style={{ ...styles.cryptoViewerIcon, ...styles.crypto_item_next_icon }}>
              {CryptoViewerIconsMap.next.unicode}
            </Text>
          </View>
        </View>
      </TouchableOpacity>
    </Swipeable>
  );
}

export default memo(WalletListItem);