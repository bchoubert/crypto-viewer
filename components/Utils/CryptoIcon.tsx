import React, { FC, memo } from 'react';
import { Image, StyleSheet, View } from 'react-native';

import CryptoCurrencyIconsMap from './CryptoCurrencyIconsMap';

const styles = StyleSheet.create({
  iconContainer: {
    marginRight: 10,
    borderRadius: 10,
  },
  icon: {
    width: 40,
    height: 40,
    maxHeight: 40,
  },
});

interface CryptoIconProps {
  code: string;
  style?: object;
  styleForIcon?: object;
}

const CryptoIcon: FC<CryptoIconProps> = ({
  code,
  style,
  styleForIcon,
}) => (
  <View
    style={{
      ...styles.iconContainer,
      backgroundColor: CryptoCurrencyIconsMap[code]?.color || '#333333',
      ...(style || {}),
    }}
  >
    <Image
      style={{ ...styles.icon, ...(styleForIcon || {}) }}
      source={CryptoCurrencyIconsMap[code]?.icon}
    />
  </View>
);

export default memo(CryptoIcon);
