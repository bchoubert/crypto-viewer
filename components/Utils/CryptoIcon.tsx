import React, { memo } from 'react';
import { Image, StyleSheet, View } from 'react-native';

import CryptoCurrencyIconsMap from './CryptoCurrencyIconsMap';


const styles = StyleSheet.create({
  iconContainer: {
    marginRight: 10,
  },
  icon: {
    width: 40,
    height: 40,
    maxHeight: 40,
  },
});


const CryptoIcon = ({ code }) => {
  return (
    <View style={styles.iconContainer}>
      <Image style={styles.icon} source={CryptoCurrencyIconsMap[code]?.icon}  />
    </View>
  );
}

export default memo(CryptoIcon);
