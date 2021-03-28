import React, { FC } from 'react';
import { StyleSheet, Text, View } from 'react-native';

import Colors from '../../assets/Colors';

import CryptoViewerIconsMap from '../../assets/fonts/baseIcons/CryptoViewerIconsMap';

import UtilsService from '../../services/Utils.service';

const styles = StyleSheet.create({
  rate_container: {
    height: 84,
    width: 84,
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginTop: 25,
    borderWidth: 2,
    borderRadius: 42,
    borderColor: Colors.white,
    backgroundColor: Colors.white,
  },
  rate_content: {
    borderWidth: 4,
    height: 80,
    width: 80,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderLeftColor: Colors.white,
    borderRightColor: Colors.white,
    borderRadius: 40,
    backgroundColor: Colors.white,
    transform: [{
      rotate: '-15deg'
    }],
  },
  rate_content_plus: {
    borderTopColor: Colors.green,
    borderBottomColor: Colors.green,
  },
  rate_content_minus: {
    borderTopColor: Colors.red,
    borderBottomColor: Colors.red,
  },
  rate_icon_plus: {
    fontSize: 15,
    paddingRight: 5,
    color: Colors.green,
  },
  rate_icon_minus: {
    fontSize: 15,
    paddingRight: 5,
    color: Colors.red,
  },
  rate_number_plus: {
    color: Colors.green,
  },
  rate_number_minus: {
    color: Colors.red
  },

  cryptoViewerIcon: {
    fontSize: 20,
    fontFamily: 'crypto-viewer'
  }
});

interface CryptoDailyRateProps {
  rate: number;
}

const CryptoDailyRate: FC<CryptoDailyRateProps> = ({
  rate,
}) => {

  return (
    <View style={styles.rate_container}>
        {rate && (
          (rate < 0) ? (
            <View style={[styles.rate_content, styles.rate_content_minus]}>
              <Text style={[styles.cryptoViewerIcon, styles.rate_icon_minus]}>
                {CryptoViewerIconsMap.minus.unicode}
              </Text>
              <Text style={styles.rate_number_minus}>
                {`${UtilsService.truncateNumber(Math.abs(rate))}%`}
              </Text>
            </View>
          ) : (
            <View style={[styles.rate_content, styles.rate_content_plus]}>
              <Text style={[ styles.cryptoViewerIcon, styles.rate_icon_plus]}>
                {CryptoViewerIconsMap.plus.unicode}
              </Text>
              <Text style={styles.rate_number_plus}>
                {`${UtilsService.truncateNumber(Math.abs(rate))}%`}
              </Text>
            </View>
          )
        )}
    </View>
  );
}

export default CryptoDailyRate;
