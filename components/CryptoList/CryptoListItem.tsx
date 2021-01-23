import React, { FC, memo } from 'react';
import { SectionListData, View, Text, TouchableOpacity, StyleSheet } from 'react-native';

import Colors from '../../assets/Colors';

import CryptoCurrencyIconsMap from '../../assets/fonts/CryptoCurrencyIconsMap';
import CryptoViewerIconsMap from '../../assets/fonts/CryptoViewerIconsMap';

import UtilsService from '../../services/Utils.service';

import Crypto from '../../models/Crypto';
import quoteType from '../../models/QuoteType';
import { tabType } from '../../App';

const styles = StyleSheet.create({
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

interface CryptoListItemProps {
  section: SectionListData<Crypto>;
  crypto: Crypto;
  quote: quoteType;
  changeTab: (tabName: tabType, newDetails: Object) => any;
}

const CryptoListItem: FC<CryptoListItemProps> = ({
  section,
  crypto,
  quote,
  changeTab,
}) => {
  // Compute the price
  var price = '';
  if (!!crypto.price) {
    price = UtilsService.truncateNumber(crypto.price) + ' ' + quote.symbol;
  }

  // Render the complete list item with action
  if (section.id === 'other') {
    return (
      <View style={styles.crypto_item}>
        <View style={styles.crypto_item_properties}>
          <Text style={{ ...styles.crypto_item_icon, color: UtilsService.getColorFromCrypto(crypto.id) }}>
            {!!CryptoCurrencyIconsMap[crypto.id.toLowerCase()] && CryptoCurrencyIconsMap[crypto.id.toLowerCase()].unicode}
          </Text>
          <View style={styles.crypto_item_names}>
            <Text style={styles.crypto_item_name}>{crypto.name}</Text>
            <Text style={styles.crypto_item_id}>{crypto.id}</Text>
          </View>
        </View>
        <View style={styles.crypto_item_details}>
          <Text style={styles.crypto_item_price}>{price}</Text>
        </View>
      </View>
    );
  }
  return (
    <TouchableOpacity style={styles.crypto_item} onPress={() => changeTab('details', crypto)}>
      <View style={styles.crypto_item_properties}>
        <Text style={{ ...styles.crypto_item_icon, color: UtilsService.getColorFromCrypto(crypto.id) }}>
          {!!CryptoCurrencyIconsMap[crypto.id.toLowerCase()] && CryptoCurrencyIconsMap[crypto.id.toLowerCase()].unicode}
        </Text>
        <View style={styles.crypto_item_names}>
          <Text style={styles.crypto_item_name}>{crypto.name}</Text>
          <Text style={styles.crypto_item_id}>{crypto.id}</Text>
        </View>
      </View>
      <View style={styles.crypto_item_details}>
        <Text style={styles.crypto_item_price}>{price}</Text>
        <Text style={{ ...styles.cryptoViewerIcon, ...styles.crypto_item_next_icon }}>
          {CryptoViewerIconsMap.next.unicode}
        </Text>
      </View>
    </TouchableOpacity>
  );
}

export default memo(CryptoListItem);
