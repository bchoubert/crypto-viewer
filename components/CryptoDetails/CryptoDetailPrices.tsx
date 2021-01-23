import React, { memo, FC } from 'react';
import { View, Text, StyleSheet } from 'react-native';

import Colors from '../../assets/Colors';

import Crypto from '../../models/Crypto';
import quoteType from '../../models/QuoteType';

import UtilsService from '../../services/Utils.service';

const styles = StyleSheet.create({
  crypto_prices: {
    flexBasis: 70,
    flexGrow: 0,
    borderTopWidth: 1,
    borderTopColor: Colors.midGray,
    flexDirection: 'column'
  },
  crypto_prices_title: {
    flexBasis: 20,
    color: Colors.gray,
    backgroundColor: '#FFFFFF',
    marginHorizontal: 'auto',
    textAlign: 'center',
    marginTop: -11,
    alignSelf: 'center',
    paddingHorizontal: 4
  },
  crypto_prices_container: {
    flex: 1,
    flexDirection: 'row',
    marginVertical: 10
  },
  crypto_price: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: 10
  },
  main_crypto_price: {
    fontSize: 16
  },
  crypto_price_number: {
    fontSize: 16
  },
  main_crypto_price_number: {
    fontSize: 25
  }
});

interface CryptoDetailPricesProps {
  crypto: Crypto,
  buyPrice: number | null;
  sellPrice: number | null;
  quote: quoteType;
}

const CryptoDetailPrices: FC<CryptoDetailPricesProps> = ({
  crypto,
  buyPrice,
  sellPrice,
  quote,
}) => (
  <View style={styles.crypto_prices}>
    <Text style={styles.crypto_prices_title}>
      Current Price
    </Text>
    <View style={styles.crypto_prices_container}>

      {/* Buy Price Section */}
      {(!!buyPrice) ?
        (
          <View style={styles.crypto_price}>
            <Text>Buy</Text>
            <Text style={{ ...styles.crypto_price_number, color: UtilsService.getColorFromCrypto(crypto.id) }}>
              {`${UtilsService.truncateNumber(buyPrice)} ${quote.symbol}`}
            </Text>
          </View>
        ) : null
      }

      {/* Current Price Section */}
      {(!!crypto.price) ?
        (
          <View style={{ ...styles.crypto_price, ...styles.main_crypto_price }}>
            <Text>
              Price
            </Text>
            <Text style={{ ...styles.crypto_price_number, ...styles.main_crypto_price_number, color: UtilsService.getColorFromCrypto(crypto.id) }}>
              {`${UtilsService.truncateNumber(crypto.price)} ${quote.symbol}`}
            </Text>
          </View>
        ) : null
      }

      {/* Sell Price Section */}
      {(!!sellPrice) ?
        (
          <View style={styles.crypto_price}>
            <Text>
              Sell
            </Text>
            <Text style={{ ...styles.crypto_price_number, color: UtilsService.getColorFromCrypto(crypto.id) }}>
              {`${UtilsService.truncateNumber(sellPrice)} ${quote.symbol}`}
            </Text>
          </View>
        ) : null
      }
    </View>
  </View>
);

export default memo(CryptoDetailPrices);
