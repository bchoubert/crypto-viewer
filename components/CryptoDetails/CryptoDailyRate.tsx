import React, { FC } from 'react';
import { StyleSheet, Text, View } from 'react-native';

import Colors from '../../assets/Colors';

import CryptoViewerIconsMap from '../../assets/fonts/baseIcons/CryptoViewerIconsMap';

import UtilsService from '../../services/Utils.service';

const styles = StyleSheet.create({
  rate_container: {
    height: 30,
    width: 80,
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginTop: 25,
    borderRadius: 42,
    backgroundColor: Colors.white,
  },
  rate_content: {
    height: 30,
    width: 80,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 40,
    backgroundColor: Colors.white,
  },
  rate_content_plus: {
  },
  rate_content_minus: {
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
