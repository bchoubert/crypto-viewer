import React, { FC, useCallback, useMemo } from 'react';
import { View, StyleSheet, Text, TouchableOpacity, Linking } from 'react-native';

import UtilsService from '../../services/Utils.service';

import Colors from '../../assets/Colors';

import CryptoViewerIconsMap from '../../assets/fonts/baseIcons/CryptoViewerIconsMap';
import CryptoCurrenciesIconMap from '../Utils/CryptoCurrencyIconsMap';

import Crypto from '../../models/Crypto';

const styles = StyleSheet.create({
  descritpion: {
    flexDirection: 'column'
  },
  descritpion_title: {
    paddingLeft: 20,
    paddingRight: 10,
    fontSize: 20,
    fontWeight: 'bold'
  },
  description_text: {
    color: Colors.darkGray,
    paddingHorizontal: 20,
    paddingVertical: 10,
    fontSize: 15,
    lineHeight: 20,
  },
  description_website: {
    paddingHorizontal: 20,
    paddingBottom: 10,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  description_website_icon: {
    fontSize: 12,
  },
  description_website_text: {
    fontWeight: 'bold',
    width: 95
  },

  cryptoViewerIcon: {
    fontSize: 20,
    fontFamily: 'crypto-viewer'
  }
});

interface CryptoDescriptionProps {
  crypto: Crypto;
}

const CryptoDescription: FC<CryptoDescriptionProps> = ({
  crypto,
}) => {
  const cryptoColor = useMemo(
    () => UtilsService.getColorFromCrypto(crypto.id),
    [crypto],
  );

  const openWebsite = useCallback(
    () => Linking.openURL(CryptoCurrenciesIconMap[crypto.id?.toLowerCase()]?.website),
    [crypto],
  );

  return (
    CryptoCurrenciesIconMap[crypto.id?.toLowerCase()]?.description || CryptoCurrenciesIconMap[crypto.id?.toLowerCase()]?.website ? (
      <View style={styles.descritpion}>
        <Text style={styles.descritpion_title}>
          Details
        </Text>
        <Text style={styles.description_text}>
          {CryptoCurrenciesIconMap[crypto.id?.toLowerCase()]?.description || ''}
        </Text>
        {CryptoCurrenciesIconMap[crypto.id?.toLowerCase()]?.website ? (
          <TouchableOpacity onPress={openWebsite} style={ styles.description_website }>
            <Text numberOfLines={1} style={{ ...styles.description_website_text, color: cryptoColor }}>
              Official Website
            </Text>
            <Text style={{ ...styles.cryptoViewerIcon, ...styles.description_website_icon, color: cryptoColor }}>
              {CryptoViewerIconsMap.link.unicode}
            </Text>
          </TouchableOpacity>
        ) : null}
      </View>
    ) : null
  );
};

export default CryptoDescription;
