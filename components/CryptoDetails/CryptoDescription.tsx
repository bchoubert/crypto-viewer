import React, { FC, useCallback, useMemo } from 'react';
import { View, StyleSheet, Text, TouchableOpacity, Linking } from 'react-native';

import UtilsService from '../../services/Utils.service';

import Colors from '../../assets/Colors';

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
    paddingBottom: 10
  },
  description_website_text: {
    fontWeight: 'bold'
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
    <View style={styles.descritpion}>
      <Text style={styles.descritpion_title}>
        Details
      </Text>
      <Text style={styles.description_text}>
        {CryptoCurrenciesIconMap[crypto.id?.toLowerCase()]?.description}
      </Text>
      {CryptoCurrenciesIconMap[crypto.id?.toLowerCase()]?.website && (
        <TouchableOpacity onPress={openWebsite} style={ styles.description_website }>
          <Text style={{ ...styles.description_website_text, color: cryptoColor }}>Official Website</Text>
        </TouchableOpacity>
      )}
    </View>
  );
};

export default CryptoDescription;
