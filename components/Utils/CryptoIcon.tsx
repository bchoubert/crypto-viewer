import React, { FC, memo } from 'react';
import {
  StyleSheet, View, Text,
} from 'react-native';

import CryptoCurrencyIconsMap from './CryptoCurrencyIconsMap';

const styles = StyleSheet.create({
  iconContainer: {
    marginRight: 10,
    borderRadius: 10,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 7,
  },
  icon: {
    width: 26,
    height: 26,
    maxHeight: 26,
    color: 'white',
  },
});

interface CryptoIconProps {
  code: keyof typeof CryptoCurrencyIconsMap;
  style?: object;
  styleForIcon?: object;
}

const CryptoIcon: FC<CryptoIconProps> = ({
  code,
  style,
  styleForIcon,
}) => {
  const Icon = CryptoCurrencyIconsMap[code]?.icon;

  if (!Icon || typeof Icon === 'number') {
    return (
      <View
        style={{
          ...styles.iconContainer,
          backgroundColor: CryptoCurrencyIconsMap[code]?.color || '#333333',
          ...(style || {}),
        }}
      >
        <Text style={{ ...styles.icon, ...(styleForIcon || {}) }}>{code}</Text>
      </View>
    );
  }

  return (
    <View
      style={{
        ...styles.iconContainer,
        backgroundColor: CryptoCurrencyIconsMap[code]?.color || '#333333',
        ...(style || {}),
      }}
    >
      <Icon style={{ ...styles.icon, ...(styleForIcon || {}) }} fill="#FFFFFF" />
    </View>
  );
};

export default memo(CryptoIcon);
